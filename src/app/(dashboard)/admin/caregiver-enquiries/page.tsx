"use client";
/* eslint-disable */
import { PageLoader } from "@/components/ui/PageLoader";
import { triggerLottie } from "@/components/ui/GlobalLottie";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Trash2, HeartHandshake, X, Save, Download, Loader2, StickyNote } from "lucide-react";
import { getCaregiverEnquiries, updateCaregiverEnquiry, deleteCaregiverEnquiry } from "@/services/admin-api";

const card = "bg-white rounded-2xl border border-slate-100 shadow-sm";
const input = "w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all";

const STATUSES = ["NEW", "REVIEWING", "CONTACTED", "FULFILLED", "CLOSED"];
const statusColor: Record<string, string> = {
  NEW: "bg-blue-50 text-blue-700 border-blue-200",
  REVIEWING: "bg-amber-50 text-amber-700 border-amber-200",
  CONTACTED: "bg-violet-50 text-violet-700 border-violet-200",
  FULFILLED: "bg-emerald-50 text-emerald-700 border-emerald-200",
  CLOSED: "bg-slate-100 text-slate-500 border-slate-200",
};

export default function CaregiverEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selected, setSelected] = useState<any>(null);
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  const load = () => {
    const params = new URLSearchParams();
    if (statusFilter) params.set("status", statusFilter);
    if (search) params.set("search", search);
    getCaregiverEnquiries(params.toString()).then(setEnquiries).catch(() => {}).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [statusFilter]);
  const handleSearch = (e: React.FormEvent) => { e.preventDefault(); load(); };

  const handleUpdateStatus = async (id: string, status: string) => {
    await updateCaregiverEnquiry(id, { status }).catch(() => {});
    load();
  };

  const handleAddNote = async () => {
    if (!note.trim() || !selected) return;
    setSaving(true);
    await updateCaregiverEnquiry(selected._id || selected.id, { admin_notes: [note] }).catch(() => {});
    setSaving(false);
    setNote("");
    load();
    setSelected(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this caregiver enquiry?")) return;
    await deleteCaregiverEnquiry(id).catch(() => {});
    triggerLottie('error');
    load();
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Caregiver Enquiries</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage caregiver staffing requests.</p>
        </div>
        <a href={`${process.env.NODE_ENV === "production" ? "https://project-for-prem-backend.onrender.com/api/v1" : "http://localhost:8000/api/v1"}/content/caregiver-enquiries/export-csv`}
          className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-xl shadow-sm transition-colors">
          <Download className="w-4 h-4" /> Export CSV
        </a>
      </div>

      <div className={card + " p-4 flex flex-col sm:flex-row items-center gap-3"}>
        <form onSubmit={handleSearch} className="flex-1 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input className={input + " pl-9"} value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, email, location..." />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors">Search</button>
        </form>
        <select className="px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Statuses</option>
          {STATUSES.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className={card + " overflow-hidden"}>
        {loading ? (
          <PageLoader />
        ) : enquiries.length === 0 ? (
          <div className="text-center py-16"><HeartHandshake className="w-8 h-8 text-slate-200 mx-auto mb-2" /><p className="text-slate-400 font-semibold">No caregiver enquiries found.</p></div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {["Name","Email","Location","Service Type","Care For","Status","Date","Actions"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {enquiries.map((e: any) => (
                <tr key={e._id || e.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-black text-xs shrink-0">{e.name?.charAt(0)}</div>
                      <span className="text-sm font-bold text-slate-800">{e.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">{e.email}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{e.location || "—"}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{e.service_type || "—"}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{e.care_recipient || "—"}</td>
                  <td className="px-4 py-3">
                    <select className={`text-xs font-bold border rounded-full px-2 py-0.5 cursor-pointer ${statusColor[e.status] || statusColor.NEW}`}
                      value={e.status} onChange={ev => handleUpdateStatus(e._id || e.id, ev.target.value)}>
                      {STATUSES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-400">{new Date(e.created_at).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setSelected(e)} className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors"><StickyNote className="w-3.5 h-3.5" /></button>
                      <button onClick={() => handleDelete(e._id || e.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h2 className="text-lg font-black text-slate-800">Caregiver Request Details</h2>
                <button onClick={() => setSelected(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-4 h-4 text-slate-500" /></button>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-rose-50 rounded-xl p-4 space-y-1 border border-rose-100">
                  <p className="font-bold text-slate-800">{selected.name}</p>
                  <p className="text-sm text-slate-600">{selected.email} {selected.phone ? `· ${selected.phone}` : ""}</p>
                  {selected.location && <p className="text-sm text-slate-500">📍 {selected.location}</p>}
                  {selected.service_type && <p className="text-xs text-rose-600 font-semibold">Service: {selected.service_type}</p>}
                  {selected.care_recipient && <p className="text-xs text-rose-600 font-semibold">For: {selected.care_recipient}</p>}
                  <p className="text-sm text-slate-700 mt-2 italic">"{selected.message}"</p>
                </div>
                {selected.admin_notes?.length > 0 && (
                  <div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Notes</p>
                    {selected.admin_notes.map((n: string, i: number) => (
                      <div key={i} className="text-sm text-slate-600 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 mb-1">{n}</div>
                    ))}
                  </div>
                )}
                <div>
                  <label className="text-xs font-bold text-slate-600 mb-1 block">Add Note</label>
                  <textarea className={input + " h-24 resize-none"} value={note} onChange={e => setNote(e.target.value)} placeholder="Internal note..." />
                </div>
                <button onClick={handleAddNote} disabled={saving || !note.trim()}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-60">
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  Add Note
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

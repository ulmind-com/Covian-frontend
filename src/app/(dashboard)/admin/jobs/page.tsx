"use client";
/* eslint-disable */
import { PageLoader } from "@/components/ui/PageLoader";
import { triggerLottie } from "@/components/ui/GlobalLottie";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, X, Save, Loader2, MapPin, Briefcase, FileText } from "lucide-react";
import { getJobs, createJob, updateJob, deleteJob } from "@/services/admin-api";
import Link from "next/link";

const card = "bg-white rounded-2xl border border-slate-100 shadow-sm";
const input = "w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all";

const emptyForm = {
  title: "", description: "", company_id: "", recruiter_id: "", status: "OPEN",
  salary_range: "", location: "", industry: "", job_type: "Full-time",
  experience_level: "Mid", pipeline_stages: ["Applied","Screened","Interviewing","Offer","Rejected","Hired"],
  key_responsibilities: [] as string[], requirements: [] as string[], perks_and_benefits: [] as string[],
};

const statusColor: Record<string, string> = {
  OPEN: "bg-emerald-50 text-emerald-700 border-emerald-200",
  CLOSED: "bg-slate-100 text-slate-500 border-slate-200",
  DRAFT: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState(emptyForm);

  const load = () => getJobs().then(setJobs).catch(() => {}).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const openCreate = () => { setForm(emptyForm); setEditing(null); setModal("create"); };
  const openEdit = (j: any) => { setEditing(j); setForm({ ...j, key_responsibilities: j.key_responsibilities || [], requirements: j.requirements || [], perks_and_benefits: j.perks_and_benefits || [] }); setModal("edit"); };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (modal === "create") await createJob(form);
      else await updateJob(editing._id || editing.id, form);
      setModal(null);
      load();
      triggerLottie('success');
    } catch (e: any) { alert(e.message); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this job?")) return;
    await deleteJob(id).catch(() => {});
    triggerLottie('error');
    load();
  };

  const toggleStatus = async (j: any) => {
    const newStatus = j.status === "OPEN" ? "CLOSED" : "OPEN";
    await updateJob(j._id || j.id, { status: newStatus }).catch(() => {});
    load();
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Jobs</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage job listings shown on the website.</p>
        </div>
        <button onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm transition-colors">
          <Plus className="w-4 h-4" /> Post Job
        </button>
      </div>

      <div className={card + " overflow-hidden"}>
        {loading ? (
          <PageLoader />
        ) : jobs.length === 0 ? (
          <div className="text-center py-16"><Briefcase className="w-8 h-8 text-slate-200 mx-auto mb-2" /><p className="text-slate-400 font-semibold">No jobs yet.</p></div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {["Title","Industry","Location","Type","Level","Status","Actions"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {jobs.map((j: any) => (
                <tr key={j._id || j.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-bold text-slate-800">{j.title}</p>
                      {j.salary_range && <p className="text-xs text-slate-400">{j.salary_range}</p>}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500">{j.industry || "—"}</td>
                  <td className="px-4 py-3">
                    {j.location && <span className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="w-3 h-3" />{j.location}</span>}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500">{j.job_type || "—"}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{j.experience_level || "—"}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleStatus(j)}
                      className={`px-2 py-0.5 rounded-full text-xs font-bold border transition-colors ${statusColor[j.status] || statusColor.DRAFT}`}>
                      {j.status}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <Link href={`/admin/applications?job=${encodeURIComponent(j.title)}`} className="p-1.5 rounded-lg hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-colors" title="View Applications">
                        <FileText className="w-3.5 h-3.5" />
                      </Link>
                      <button onClick={() => openEdit(j)} className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors" title="Edit Job"><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => handleDelete(j._id || j.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors" title="Delete Job"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setModal(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h2 className="text-lg font-black text-slate-800">{modal === "create" ? "Post New Job" : "Edit Job"}</h2>
                <button onClick={() => setModal(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-4 h-4 text-slate-500" /></button>
              </div>
              <div className="p-6 space-y-3">
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Job Title *</label><input className={input} value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="e.g. Senior HR Manager" /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Description *</label><textarea className={input + " h-32 resize-none"} value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Job description..." /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-bold text-slate-600 mb-1 block">Industry</label><input className={input} value={form.industry} onChange={e => setForm({...form, industry: e.target.value})} placeholder="e.g. Healthcare" /></div>
                  <div><label className="text-xs font-bold text-slate-600 mb-1 block">Location</label><input className={input} value={form.location} onChange={e => setForm({...form, location: e.target.value})} placeholder="e.g. Mumbai, India" /></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-bold text-slate-600 mb-1 block">Job Type</label>
                    <select className={input} value={form.job_type} onChange={e => setForm({...form, job_type: e.target.value})}>
                      {["Full-time","Part-time","Contract","Freelance"].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div><label className="text-xs font-bold text-slate-600 mb-1 block">Experience Level</label>
                    <select className={input} value={form.experience_level} onChange={e => setForm({...form, experience_level: e.target.value})}>
                      {["Entry","Mid","Senior","Executive"].map(l => <option key={l}>{l}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-bold text-slate-600 mb-1 block">Salary Range</label><input className={input} value={form.salary_range} onChange={e => setForm({...form, salary_range: e.target.value})} placeholder="e.g. ₹8L – ₹15L" /></div>
                  <div><label className="text-xs font-bold text-slate-600 mb-1 block">Status</label>
                    <select className={input} value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                      {["OPEN","CLOSED","DRAFT"].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Company ID</label><input className={input} value={form.company_id} onChange={e => setForm({...form, company_id: e.target.value})} placeholder="MongoDB ObjectId" /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Key Responsibilities <span className="text-slate-400 font-normal">(one per line)</span></label><textarea className={input + " h-28 resize-none"} value={(form.key_responsibilities || []).join("\n")} onChange={e => setForm({...form, key_responsibilities: e.target.value.split("\n").filter(s => s.trim())})} placeholder={"Drive technical architecture...\nCollaborate with cross-functional teams..."} /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Requirements <span className="text-slate-400 font-normal">(one per line)</span></label><textarea className={input + " h-28 resize-none"} value={(form.requirements || []).join("\n")} onChange={e => setForm({...form, requirements: e.target.value.split("\n").filter(s => s.trim())})} placeholder={"3+ years experience...\nStrong communication skills..."} /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Perks & Benefits <span className="text-slate-400 font-normal">(one per line)</span></label><textarea className={input + " h-28 resize-none"} value={(form.perks_and_benefits || []).join("\n")} onChange={e => setForm({...form, perks_and_benefits: e.target.value.split("\n").filter(s => s.trim())})} placeholder={"Health Insurance\nFlexible Working Hours..."} /></div>
                <button onClick={handleSave} disabled={saving}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-60">
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {saving ? "Saving..." : "Save Job"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

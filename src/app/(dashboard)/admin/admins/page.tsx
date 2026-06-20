"use client";
/* eslint-disable */
import { PageLoader } from "@/components/ui/PageLoader";
import { triggerLottie } from "@/components/ui/GlobalLottie";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, X, Save, Loader2, Shield, UserCog, AlertCircle } from "lucide-react";
import { getAllUsers, createUser, updateUser, deleteUser } from "@/services/admin-api";

const card = "bg-white rounded-2xl border border-slate-100 shadow-sm";
const input = "w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all";

const ROLES = ["SUPER_ADMIN", "ADMIN", "EDITOR", "RECRUITER", "CLIENT"];
const roleColor: Record<string, string> = {
  SUPER_ADMIN: "bg-red-50 text-red-700 border-red-200",
  ADMIN:       "bg-violet-50 text-violet-700 border-violet-200",
  EDITOR:      "bg-blue-50 text-blue-700 border-blue-200",
  RECRUITER:   "bg-emerald-50 text-emerald-700 border-emerald-200",
  CLIENT:      "bg-slate-100 text-slate-600 border-slate-200",
};

const emptyForm = { name: "", email: "", password: "", role: "ADMIN", is_active: true };

export default function AdminsPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState(emptyForm);
  const [roleFilter, setRoleFilter] = useState("SUPER_ADMIN,ADMIN,EDITOR");

  const load = () => {
    getAllUsers("limit=200").then(users => {
      const adminRoles = ["SUPER_ADMIN", "ADMIN", "EDITOR"];
      setUsers(users.filter(u => adminRoles.includes(u.role)));
    }).catch(() => {}).finally(() => setLoading(false));
  };
  useEffect(() => { load(); }, []);

  const openCreate = () => { setForm(emptyForm); setEditing(null); setModal("create"); };
  const openEdit = (u: any) => { setEditing(u); setForm({ ...u, password: "" }); setModal("edit"); };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (modal === "create") {
        if (!form.password) throw new Error("Password is required for new admin.");
        await createUser(form);
      } else {
        const payload: any = { name: form.name, role: form.role, is_active: form.is_active };
        if (form.password) payload.password = form.password;
        await updateUser(editing._id || editing.id, payload);
      }
      setModal(null);
      load();
      triggerLottie('success');
    } catch (e: any) { alert(e.message); }
    finally { setSaving(false); }
  };

  const handleDelete = async (u: any) => {
    if (u.role === "SUPER_ADMIN") { alert("Cannot delete a Super Admin."); return; }
    if (!confirm(`Deactivate ${u.name}?`)) return;
    await deleteUser(u._id || u.id).catch(() => {});
    triggerLottie('error');
    load();
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Manage Admins</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage admin users, roles, and access.</p>
        </div>
        <button onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm transition-colors">
          <Plus className="w-4 h-4" /> Add Admin
        </button>
      </div>

      <div className={card + " p-4 flex items-start gap-3 border-amber-200 bg-amber-50"}>
        <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
        <p className="text-xs font-semibold text-amber-800">Showing Super Admins, Admins, and Editors. Only Super Admins can create or modify other Super Admins.</p>
      </div>

      <div className={card + " overflow-hidden"}>
        {loading ? (
          <PageLoader />
        ) : users.length === 0 ? (
          <div className="text-center py-16"><UserCog className="w-8 h-8 text-slate-200 mx-auto mb-2" /><p className="text-slate-400 font-semibold">No admins yet.</p></div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {["Name","Email","Role","Status","Created","Actions"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((u: any) => (
                <tr key={u._id || u.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0"
                        style={{ background: "linear-gradient(135deg, #2563eb, #059669)" }}>
                        {u.name?.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-slate-800">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">{u.email}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-black border ${roleColor[u.role] || roleColor.CLIENT}`}>
                      {u.role.replace("_", " ")}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${u.is_active ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-500 border-slate-200"}`}>
                      {u.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-400">{u.created_at ? new Date(u.created_at).toLocaleDateString() : "—"}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => openEdit(u)} className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
                      {u.role !== "SUPER_ADMIN" && (
                        <button onClick={() => handleDelete(u)} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                      )}
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
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h2 className="text-lg font-black text-slate-800">{modal === "create" ? "Add Admin" : "Edit Admin"}</h2>
                <button onClick={() => setModal(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-4 h-4 text-slate-500" /></button>
              </div>
              <div className="p-6 space-y-3">
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Full Name *</label><input className={input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Admin name" /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Email *</label><input type="email" className={input} value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="admin@covian.com" disabled={modal === "edit"} /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">{modal === "create" ? "Password *" : "New Password (leave blank to keep)"}</label><input type="password" className={input} value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="••••••••" /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Role</label>
                  <select className={input} value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
                    {ROLES.map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.is_active} onChange={e => setForm({...form, is_active: e.target.checked})} className="rounded" /><span className="text-sm font-semibold text-slate-700">Active</span></label>
                <button onClick={handleSave} disabled={saving}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-60">
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {saving ? "Saving..." : "Save Admin"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

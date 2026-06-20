"use client";
/* eslint-disable */
import { PageLoader } from "@/components/ui/PageLoader";
import { triggerLottie } from "@/components/ui/GlobalLottie";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, Link2, MessageCircle, X, Save, Loader2, GripVertical } from "lucide-react";
import { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember } from "@/services/admin-api";
import { ImageUpload } from "@/components/ui/ImageUpload";

const card = "bg-white rounded-2xl border border-slate-100 shadow-sm";
const input = "w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all";

function Modal({ title, onClose, children }: any) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-lg font-black text-slate-800">{title}</h2>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100 transition-colors"><X className="w-4 h-4 text-slate-500" /></button>
        </div>
        <div className="p-6">{children}</div>
      </motion.div>
    </motion.div>
  );
}

const emptyForm = { name: "", designation: "", bio: "", photo_url: "", email: "", linkedin_url: "", twitter_url: "", display_order: 0, is_active: true };

export default function TeamPage() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState(emptyForm);

  const load = () => getTeamMembers().then(setMembers).catch(() => {}).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const openCreate = () => { setForm({ ...emptyForm, display_order: members.length }); setEditing(null); setModal("create"); };
  const openEdit = (m: any) => { setEditing(m); setForm({ ...m }); setModal("edit"); };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (modal === "create") await createTeamMember(form);
      else await updateTeamMember(editing._id || editing.id, form);
      setModal(null);
      load();
      triggerLottie('success');
    } catch (e: any) { alert(e.message); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this team member?")) return;
    await deleteTeamMember(id).catch(() => {});
    triggerLottie('error');
    load();
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Core Team</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage team profiles shown on the website.</p>
        </div>
        <button onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm transition-colors">
          <Plus className="w-4 h-4" /> Add Member
        </button>
      </div>

      {loading ? (
        <PageLoader />
      ) : members.length === 0 ? (
        <div className={card + " p-16 text-center"}><p className="text-slate-400 font-semibold">No team members yet.</p></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {members.map((m: any, i) => (
            <motion.div key={m._id || m.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className={card + " p-5 group"}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shrink-0">
                  {m.photo_url ? <img src={m.photo_url} className="w-full h-full object-cover" /> :
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-emerald-500 text-white font-black text-xl">{m.name?.charAt(0)}</div>}
                </div>
                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openEdit(m)} className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
                  <button onClick={() => handleDelete(m._id || m.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
              <h3 className="font-bold text-slate-800">{m.name}</h3>
              <p className="text-xs text-blue-600 font-semibold mt-0.5">{m.designation}</p>
              {m.bio && <p className="text-xs text-slate-500 mt-2 line-clamp-2">{m.bio}</p>}
              <div className="flex items-center gap-2 mt-3">
                {m.linkedin_url && <a href={m.linkedin_url} target="_blank" className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors"><Link2 className="w-3.5 h-3.5" /></a>}
                {m.twitter_url && <a href={m.twitter_url} target="_blank" className="p-1.5 rounded-lg hover:bg-sky-50 text-slate-400 hover:text-sky-500 transition-colors"><MessageCircle className="w-3.5 h-3.5" /></a>}
                <span className={`ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold border ${m.is_active ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-500 border-slate-200"}`}>
                  {m.is_active ? "Active" : "Inactive"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {modal && (
          <Modal title={modal === "create" ? "Add Team Member" : "Edit Team Member"} onClose={() => setModal(null)}>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Name *</label><input className={input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Full name" /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Designation *</label><input className={input} value={form.designation} onChange={e => setForm({...form, designation: e.target.value})} placeholder="e.g. HR Director" /></div>
              </div>
              <ImageUpload label="Photo" folder="corevita/team" value={form.photo_url} onChange={(url) => setForm({...form, photo_url: url})} />
              <div><label className="text-xs font-bold text-slate-600 mb-1 block">Bio</label><textarea className={input + " h-24 resize-none"} value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} placeholder="Short bio..." /></div>
              <div><label className="text-xs font-bold text-slate-600 mb-1 block">Email</label><input className={input} value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="name@covian.com" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">LinkedIn URL</label><input className={input} value={form.linkedin_url} onChange={e => setForm({...form, linkedin_url: e.target.value})} placeholder="https://linkedin.com/in/..." /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Twitter URL</label><input className={input} value={form.twitter_url} onChange={e => setForm({...form, twitter_url: e.target.value})} placeholder="https://twitter.com/..." /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Display Order</label><input type="number" className={input} value={form.display_order} onChange={e => setForm({...form, display_order: Number(e.target.value)})} /></div>
                <div className="flex items-end pb-1"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.is_active} onChange={e => setForm({...form, is_active: e.target.checked})} className="rounded" /><span className="text-sm font-semibold text-slate-700">Active</span></label></div>
              </div>
              <button onClick={handleSave} disabled={saving}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-60">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {saving ? "Saving..." : "Save Member"}
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

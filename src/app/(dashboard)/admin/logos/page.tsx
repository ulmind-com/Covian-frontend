"use client";
/* eslint-disable */
import { PageLoader } from "@/components/ui/PageLoader";
import { triggerLottie } from "@/components/ui/GlobalLottie";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, X, Save, Loader2, Globe, ToggleLeft, ToggleRight } from "lucide-react";
import { getAllLogos, createLogo, updateLogo, deleteLogo } from "@/services/admin-api";
import { ImageUpload } from "@/components/ui/ImageUpload";

const card = "bg-white rounded-2xl border border-slate-100 shadow-sm";
const input = "w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all";

const emptyForm = { name: "", logo_url: "", website_url: "", display_order: 0, is_active: true };

export default function LogosPage() {
  const [logos, setLogos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState(emptyForm);

  const load = () => getAllLogos().then(setLogos).catch(() => {}).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const openCreate = () => { setForm({ ...emptyForm, display_order: logos.length }); setEditing(null); setModal("create"); };
  const openEdit = (l: any) => { setEditing(l); setForm({ ...l }); setModal("edit"); };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (modal === "create") await createLogo(form);
      else await updateLogo(editing._id || editing.id, form);
      setModal(null);
      load();
      triggerLottie('success');
    } catch (e: any) { alert(e.message); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this logo?")) return;
    await deleteLogo(id).catch(() => {});
    triggerLottie('error');
    load();
  };

  const toggleActive = async (l: any) => {
    await updateLogo(l._id || l.id, { is_active: !l.is_active }).catch(() => {});
    load();
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Client Logos</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage partner and client logos shown on the website.</p>
        </div>
        <button onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm transition-colors">
          <Plus className="w-4 h-4" /> Add Logo
        </button>
      </div>

      {loading ? (
        <PageLoader />
      ) : logos.length === 0 ? (
        <div className={card + " p-16 text-center"}><p className="text-slate-400 font-semibold">No logos yet.</p></div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {logos.sort((a, b) => a.display_order - b.display_order).map((l: any, i) => (
            <motion.div key={l._id || l.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.04 }}
              className={card + ` p-4 group flex flex-col items-center gap-3 text-center ${!l.is_active ? "opacity-50" : ""}`}>
              <div className="w-16 h-12 flex items-center justify-center">
                {l.logo_url ? <img src={l.logo_url} className="max-w-full max-h-full object-contain" /> :
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg text-slate-400 text-xs font-bold">No Logo</div>}
              </div>
              <p className="text-xs font-bold text-slate-700 truncate w-full">{l.name}</p>
              <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => toggleActive(l)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors">
                  {l.is_active ? <ToggleRight className="w-4 h-4 text-emerald-500" /> : <ToggleLeft className="w-4 h-4 text-slate-400" />}
                </button>
                <button onClick={() => openEdit(l)} className="p-1 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors"><Edit2 className="w-3 h-3" /></button>
                <button onClick={() => handleDelete(l._id || l.id)} className="p-1 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-3 h-3" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setModal(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h2 className="text-lg font-black text-slate-800">{modal === "create" ? "Add Logo" : "Edit Logo"}</h2>
                <button onClick={() => setModal(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-4 h-4 text-slate-500" /></button>
              </div>
              <div className="p-6 space-y-3">
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Company Name *</label><input className={input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g. Infosys" /></div>
                <ImageUpload label="Logo Image *" folder="corevita/logos" value={form.logo_url} onChange={(url) => setForm({...form, logo_url: url})} />
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Website URL</label><input className={input} value={form.website_url} onChange={e => setForm({...form, website_url: e.target.value})} placeholder="https://company.com" /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Display Order</label><input type="number" className={input} value={form.display_order} onChange={e => setForm({...form, display_order: Number(e.target.value)})} /></div>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.is_active} onChange={e => setForm({...form, is_active: e.target.checked})} className="rounded" /><span className="text-sm font-semibold text-slate-700">Active</span></label>
                <button onClick={handleSave} disabled={saving}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-60">
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {saving ? "Saving..." : "Save Logo"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

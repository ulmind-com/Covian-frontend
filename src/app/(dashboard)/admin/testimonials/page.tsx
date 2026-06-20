"use client";
/* eslint-disable */
import { PageLoader } from "@/components/ui/PageLoader";
import { triggerLottie } from "@/components/ui/GlobalLottie";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, Star, X, Save, Loader2 } from "lucide-react";
import { getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from "@/services/admin-api";
import { ImageUpload } from "@/components/ui/ImageUpload";

const card = "bg-white rounded-2xl border border-slate-100 shadow-sm";
const input = "w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all";

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(n => (
        <button key={n} type="button" onClick={() => onChange(n)}>
          <Star className={`w-5 h-5 transition-colors ${n <= value ? "text-amber-400 fill-amber-400" : "text-slate-200"}`} />
        </button>
      ))}
    </div>
  );
}

const emptyForm = { client_name: "", client_designation: "", client_company: "", client_photo_url: "", content: "", rating: 5, is_featured: false, is_active: true, display_order: 0 };

export default function TestimonialsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState(emptyForm);

  const load = () => getAllTestimonials().then(setItems).catch(() => {}).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const openCreate = () => { setForm(emptyForm); setEditing(null); setModal("create"); };
  const openEdit = (t: any) => { setEditing(t); setForm({ ...t }); setModal("edit"); };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (modal === "create") await createTestimonial(form);
      else await updateTestimonial(editing._id || editing.id, form);
      setModal(null);
      load();
      triggerLottie('success');
    } catch (e: any) { alert(e.message); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    await deleteTestimonial(id).catch(() => {});
    triggerLottie('error');
    load();
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Testimonials</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage client testimonials shown on the website.</p>
        </div>
        <button onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm transition-colors">
          <Plus className="w-4 h-4" /> Add Testimonial
        </button>
      </div>

      {loading ? (
        <PageLoader />
      ) : items.length === 0 ? (
        <div className={card + " p-16 text-center"}><p className="text-slate-400 font-semibold">No testimonials yet.</p></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {items.map((t: any, i) => (
            <motion.div key={t._id || t.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className={card + " p-5 group relative"}>
              {t.is_featured && <div className="absolute top-3 right-3 px-2 py-0.5 bg-amber-50 text-amber-600 border border-amber-200 rounded-full text-[10px] font-black">FEATURED</div>}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 bg-slate-50 shrink-0">
                  {t.client_photo_url ? <img src={t.client_photo_url} className="w-full h-full object-cover" /> :
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-blue-500 text-white font-black text-sm">{t.client_name?.charAt(0)}</div>}
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{t.client_name}</p>
                  <p className="text-xs text-slate-500">{t.client_designation}{t.client_company ? `, ${t.client_company}` : ""}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mb-3">
                {[1,2,3,4,5].map(n => <Star key={n} className={`w-3.5 h-3.5 ${n <= t.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}`} />)}
              </div>
              <p className="text-sm text-slate-600 italic line-clamp-3">"{t.content}"</p>
              <div className="flex items-center justify-end gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => openEdit(t)} className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
                <button onClick={() => handleDelete(t._id || t.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
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
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h2 className="text-lg font-black text-slate-800">{modal === "create" ? "Add Testimonial" : "Edit Testimonial"}</h2>
                <button onClick={() => setModal(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-4 h-4 text-slate-500" /></button>
              </div>
              <div className="p-6 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-bold text-slate-600 mb-1 block">Client Name *</label><input className={input} value={form.client_name} onChange={e => setForm({...form, client_name: e.target.value})} /></div>
                  <div><label className="text-xs font-bold text-slate-600 mb-1 block">Designation</label><input className={input} value={form.client_designation} onChange={e => setForm({...form, client_designation: e.target.value})} /></div>
                </div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Company</label><input className={input} value={form.client_company} onChange={e => setForm({...form, client_company: e.target.value})} /></div>
                <ImageUpload label="Client Photo" folder="corevita/testimonials" value={form.client_photo_url} onChange={(url) => setForm({...form, client_photo_url: url})} />
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Testimonial Content *</label><textarea className={input + " h-28 resize-none"} value={form.content} onChange={e => setForm({...form, content: e.target.value})} /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Rating</label><StarRating value={form.rating} onChange={v => setForm({...form, rating: v})} /></div>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.is_featured} onChange={e => setForm({...form, is_featured: e.target.checked})} className="rounded" /><span className="text-sm font-semibold text-slate-700">Featured</span></label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.is_active} onChange={e => setForm({...form, is_active: e.target.checked})} className="rounded" /><span className="text-sm font-semibold text-slate-700">Active</span></label>
                </div>
                <button onClick={handleSave} disabled={saving}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-60">
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {saving ? "Saving..." : "Save Testimonial"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

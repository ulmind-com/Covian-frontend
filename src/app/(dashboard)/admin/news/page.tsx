"use client";
/* eslint-disable */
import { PageLoader } from "@/components/ui/PageLoader";
import { triggerLottie } from "@/components/ui/GlobalLottie";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, Eye, EyeOff, Star, X, Save, Loader2 } from "lucide-react";
import { getAllNews, createNews, updateNews, deleteNews } from "@/services/admin-api";
import { ImageUpload } from "@/components/ui/ImageUpload";

const card = "bg-white rounded-2xl border border-slate-100 shadow-sm";
const input = "w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all";

const CATEGORIES = ["Industry Insights", "Company Update", "HR Trends", "Staffing News", "Announcements", "Events"];

function Modal({ title, onClose, children }: any) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-lg font-black text-slate-800">{title}</h2>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100 transition-colors"><X className="w-4 h-4 text-slate-500" /></button>
        </div>
        <div className="p-6">{children}</div>
      </motion.div>
    </motion.div>
  );
}

const emptyForm = { slug: "", title: "", content: "", excerpt: "", author: "Covian Admin", featured_image_url: "", category: "", tags: "", seo_title: "", seo_description: "", is_published: false, is_featured: false };

export default function NewsPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState(emptyForm);

  const load = () => getAllNews().then(setArticles).catch(() => {}).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const openCreate = () => { setForm(emptyForm); setEditing(null); setModal("create"); };
  const openEdit = (a: any) => {
    setEditing(a);
    setForm({ ...a, tags: (a.tags || []).join(", ") });
    setModal("edit");
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = { ...form, tags: form.tags ? form.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : [] };
      if (modal === "create") await createNews(payload);
      else await updateNews(editing._id || editing.id, payload);
      setModal(null);
      load();
      triggerLottie('success');
    } catch (e: any) { alert(e.message); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this article?")) return;
    await deleteNews(id).catch(() => {});
    triggerLottie('error');
    load();
  };

  const togglePublish = async (a: any) => {
    await updateNews(a._id || a.id, { is_published: !a.is_published }).catch(() => {});
    load();
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">News</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage news articles and blog posts.</p>
        </div>
        <button onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm transition-colors">
          <Plus className="w-4 h-4" /> Add Article
        </button>
      </div>

      <div className={card + " overflow-hidden"}>
        {loading ? (
          <PageLoader />
        ) : articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 font-semibold">No articles yet. Create your first one!</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {["Title","Category","Author","Published","Featured","Actions"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {articles.map((a: any) => (
                <tr key={a._id || a.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {a.featured_image_url && <img src={a.featured_image_url} className="w-10 h-10 rounded-lg object-cover border border-slate-100" />}
                      <div>
                        <p className="text-sm font-bold text-slate-800 truncate max-w-[200px]">{a.title}</p>
                        <p className="text-xs text-slate-400">{a.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold">{a.category || "—"}</span></td>
                  <td className="px-4 py-3 text-sm text-slate-600">{a.author}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => togglePublish(a)} className={`px-2 py-0.5 rounded-full text-xs font-bold border transition-colors ${a.is_published ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-500 border-slate-200"}`}>
                      {a.is_published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="px-4 py-3">{a.is_featured ? <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> : <Star className="w-4 h-4 text-slate-200" />}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEdit(a)} className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => handleDelete(a._id || a.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
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
          <Modal title={modal === "create" ? "New Article" : "Edit Article"} onClose={() => setModal(null)}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Title *</label><input className={input} value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Article title" /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Slug *</label><input className={input} value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} placeholder="article-slug" /></div>
              </div>
              <div><label className="text-xs font-bold text-slate-600 mb-1 block">Excerpt</label><input className={input} value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} placeholder="Short description..." /></div>
              <div><label className="text-xs font-bold text-slate-600 mb-1 block">Content *</label><textarea className={input + " h-32 resize-none"} value={form.content} onChange={e => setForm({...form, content: e.target.value})} placeholder="Full article content..." /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Author</label><input className={input} value={form.author} onChange={e => setForm({...form, author: e.target.value})} /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">Category</label>
                  <select className={input} value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                    <option value="">Select category</option>
                    {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <ImageUpload label="Featured Image" folder="corevita/news" value={form.featured_image_url} onChange={(url) => setForm({...form, featured_image_url: url})} />
              <div><label className="text-xs font-bold text-slate-600 mb-1 block">Tags (comma-separated)</label><input className={input} value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} placeholder="HR, Staffing, News" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">SEO Title</label><input className={input} value={form.seo_title} onChange={e => setForm({...form, seo_title: e.target.value})} /></div>
                <div><label className="text-xs font-bold text-slate-600 mb-1 block">SEO Description</label><input className={input} value={form.seo_description} onChange={e => setForm({...form, seo_description: e.target.value})} /></div>
              </div>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.is_published} onChange={e => setForm({...form, is_published: e.target.checked})} className="rounded" />
                  <span className="text-sm font-semibold text-slate-700">Published</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.is_featured} onChange={e => setForm({...form, is_featured: e.target.checked})} className="rounded" />
                  <span className="text-sm font-semibold text-slate-700">Featured</span>
                </label>
              </div>
              <button onClick={handleSave} disabled={saving}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-60">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {saving ? "Saving..." : "Save Article"}
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

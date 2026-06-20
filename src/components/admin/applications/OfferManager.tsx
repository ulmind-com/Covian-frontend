"use client";

import { useState } from "react";
import { FileText, Plus, X, IndianRupee, Mail, CheckCircle2, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OfferManager({ application, onUpdate }: { application: any, onUpdate: (notes: string[]) => void }) {
  const [showForm, setShowForm] = useState(false);
  const [salary, setSalary] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [designation, setDesignation] = useState("");
  const [status, setStatus] = useState("Draft");

  // Parse offers from notes
  const offers = (application.notes || [])
    .map((note: string) => {
      try { return JSON.parse(note); } catch { return null; }
    })
    .filter((obj: any) => obj && obj.type === "offer");

  const handleCreateOffer = () => {
    if (!salary || !joiningDate || !designation) return;
    const newOffer = JSON.stringify({
      type: "offer",
      salary,
      joiningDate,
      designation,
      status,
      created_at: new Date().toISOString()
    });
    onUpdate([newOffer]);
    setShowForm(false);
    setSalary(""); setJoiningDate(""); setDesignation("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black text-slate-800">Job Offers</h3>
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 text-sm font-bold bg-amber-50 text-amber-600 px-4 py-2 rounded-xl hover:bg-amber-100 transition-colors"
        >
          <Plus className="w-4 h-4" /> Create Offer
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-white border border-amber-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>
            <h4 className="font-bold text-slate-800 mb-4">Draft New Offer</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">Designation</label>
                <input value={designation} onChange={e => setDesignation(e.target.value)} type="text" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-amber-500/20 outline-none" placeholder="e.g. Senior Developer" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">Offered Salary (per annum)</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input value={salary} onChange={e => setSalary(e.target.value)} type="text" className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-sm font-medium focus:ring-2 focus:ring-amber-500/20 outline-none" placeholder="e.g. 15,00,000" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">Joining Date</label>
                <input value={joiningDate} onChange={e => setJoiningDate(e.target.value)} type="date" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-amber-500/20 outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">Status</label>
                <select value={status} onChange={e => setStatus(e.target.value)} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-amber-500/20 outline-none">
                  <option>Draft</option>
                  <option>Sent</option>
                  <option>Accepted</option>
                  <option>Declined</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={handleCreateOffer} className="bg-amber-500 text-white font-bold px-6 py-2 rounded-xl hover:bg-amber-600 transition-colors">Save Offer</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-4">
        {offers.length === 0 ? (
          <div className="py-10 text-center bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
            <FileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-400">No offers generated yet</p>
          </div>
        ) : offers.map((off: any, i: number) => (
          <div key={i} className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-amber-200 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-black text-slate-800">{off.designation}</h4>
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                  off.status === 'Accepted' ? 'bg-emerald-50 text-emerald-600' : 
                  off.status === 'Sent' ? 'bg-blue-50 text-blue-600' :
                  off.status === 'Declined' ? 'bg-red-50 text-red-600' :
                  'bg-slate-100 text-slate-600'
                }`}>{off.status}</span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-1"><IndianRupee className="w-4 h-4 text-slate-400" /> {off.salary} LPA</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-slate-400" /> Joining: {new Date(off.joiningDate).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-xl border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-colors" title="Send via Email"><Mail className="w-5 h-5" /></button>
              {off.status !== 'Accepted' && (
                <button className="p-2 rounded-xl border border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-colors" title="Mark Accepted"><CheckCircle2 className="w-5 h-5" /></button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Calendar, Clock, User, Plus, X, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InterviewManager({ application, onUpdate }: { application: any, onUpdate: (notes: string[]) => void }) {
  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [interviewer, setInterviewer] = useState("");
  const [round, setRound] = useState("Technical Round");

  // Parse interviews from notes
  const interviews = (application.notes || [])
    .map((note: string) => {
      try { return JSON.parse(note); } catch { return null; }
    })
    .filter((obj: any) => obj && obj.type === "interview");

  const handleSchedule = () => {
    if (!date || !time || !interviewer) return;
    const newInterview = JSON.stringify({
      type: "interview",
      round,
      date,
      time,
      interviewer,
      status: "Scheduled",
      created_at: new Date().toISOString()
    });
    onUpdate([newInterview]);
    setShowForm(false);
    setDate(""); setTime(""); setInterviewer("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black text-slate-800">Interviews</h3>
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 text-sm font-bold bg-blue-50 text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors"
        >
          <Plus className="w-4 h-4" /> Schedule Interview
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>
            <h4 className="font-bold text-slate-800 mb-4">Schedule New Interview</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">Round</label>
                <select value={round} onChange={e => setRound(e.target.value)} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none">
                  <option>Technical Round</option>
                  <option>HR Round</option>
                  <option>Managerial Round</option>
                  <option>Final Discussion</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">Interviewer Name</label>
                <input value={interviewer} onChange={e => setInterviewer(e.target.value)} type="text" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="e.g. John Doe" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">Date</label>
                <input value={date} onChange={e => setDate(e.target.value)} type="date" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">Time</label>
                <input value={time} onChange={e => setTime(e.target.value)} type="time" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none" />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={handleSchedule} className="bg-blue-600 text-white font-bold px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors">Save Interview</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interviews.length === 0 ? (
          <div className="col-span-full py-10 text-center bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
            <Video className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-400">No interviews scheduled yet</p>
          </div>
        ) : interviews.map((inv: any, i: number) => (
          <div key={i} className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 hover:border-blue-200 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{inv.round}</span>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">{inv.status}</span>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                <Calendar className="w-4 h-4 text-slate-400" /> {new Date(inv.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                <Clock className="w-4 h-4 text-slate-400" /> {inv.time}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                <User className="w-4 h-4 text-slate-400" /> {inv.interviewer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

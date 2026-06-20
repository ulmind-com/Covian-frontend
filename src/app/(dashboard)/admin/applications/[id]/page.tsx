"use client";

import { PageLoader } from "@/components/ui/PageLoader";
import { triggerLottie } from "@/components/ui/GlobalLottie";
import { useEffect, useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Loader2, User, Mail, Phone, MapPin, Briefcase, Calendar, 
  CheckCircle2, FileText, Video, Send, Clock, Edit3
} from "lucide-react";
import Link from "next/link";
import { getApplication, getCandidate, getJobs, getCandidateTimeline, updateApplication } from "@/services/admin-api";
import InterviewManager from "@/components/admin/applications/InterviewManager";
import OfferManager from "@/components/admin/applications/OfferManager";

const STAGES = ["Applied", "Screened", "Interviewing", "Offer", "Rejected", "Hired"];

export default function ApplicationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [loading, setLoading] = useState(true);
  const [application, setApplication] = useState<any>(null);
  const [candidate, setCandidate] = useState<any>(null);
  const [job, setJob] = useState<any>(null);
  const [timeline, setTimeline] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("Pipeline");
  const [noteText, setNoteText] = useState("");

  const loadData = async () => {
    try {
      const appData = await getApplication(resolvedParams.id);
      setApplication(appData);

      const [candData, jobsData, timelineData] = await Promise.all([
        getCandidate(appData.candidate_id),
        getJobs(),
        getCandidateTimeline(appData.candidate_id).catch(() => [])
      ]);

      setCandidate(candData);
      setJob(jobsData.find((j: any) => (j._id || j.id) === appData.job_id));
      setTimeline(timelineData);
    } catch (e) {
      console.error("Failed to load application details", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, [resolvedParams.id]);

  const handleUpdateNotes = async (newNotes: string[]) => {
    if (!application) return;
    const updatedNotes = [...(application.notes || []), ...newNotes];
    setApplication({ ...application, notes: updatedNotes });
    await updateApplication(application._id || application.id, { notes: newNotes });
    loadData();
  };

  const handleAddSimpleNote = () => {
    if (!noteText.trim()) return;
    const noteObj = JSON.stringify({
      type: "note",
      text: noteText,
      created_at: new Date().toISOString()
    });
    handleUpdateNotes([noteObj]);
    setNoteText("");
  };

  const handleStageChange = async (newStage: string) => {
    if (!application || application.current_stage === newStage) return;
    setApplication({ ...application, current_stage: newStage });
    await updateApplication(application._id || application.id, { current_stage: newStage });
    loadData(); // Reload to get fresh timeline
  };

  if (loading) {
    return (
      <PageLoader />
    );
  }

  if (!application || !candidate) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-black text-slate-800">Application not found</h2>
        <Link href="/admin/applications" className="text-blue-600 font-bold hover:underline mt-4 inline-block">Back to ATS</Link>
      </div>
    );
  }

  // Parse generic notes
  const notes = (application.notes || [])
    .map((n: string) => { try { return JSON.parse(n); } catch { return { type: "note", text: n, created_at: application.created_at }; } })
    .filter((n: any) => n.type === "note");

  return (
    <div className="space-y-8 pb-10">
      <Link href="/admin/applications" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to ATS Dashboard
      </Link>

      {/* Profile Header */}
      <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200/60 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-4xl font-black text-slate-400 border-4 border-white shadow-lg shrink-0">
            {candidate.name.charAt(0).toUpperCase()}
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black text-slate-900">{candidate.name}</h1>
                <p className="text-lg font-medium text-slate-500 mt-1">Applied for <span className="font-bold text-slate-800">{job?.title || "Unknown Role"}</span></p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-bold border border-blue-100">
                  {application.current_stage}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600"><Mail className="w-4 h-4 text-slate-400" /> {candidate.email}</div>
              {candidate.phone && <div className="flex items-center gap-2 text-sm font-semibold text-slate-600"><Phone className="w-4 h-4 text-slate-400" /> {candidate.phone}</div>}
              {job?.location && <div className="flex items-center gap-2 text-sm font-semibold text-slate-600"><MapPin className="w-4 h-4 text-slate-400" /> {job.location}</div>}
            </div>
            
            {candidate.skills && candidate.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {candidate.skills.map((skill: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg">{skill}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {["Pipeline", "Resume", "Interviews", "Offers", "Timeline & Notes"].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all shrink-0 ${activeTab === tab ? "bg-slate-800 text-white shadow-md" : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200/60 shadow-sm min-h-[500px]">
        <AnimatePresence mode="wait">
          
          {/* PIPELINE KANBAN */}
          {activeTab === "Pipeline" && (
            <motion.div key="pipeline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
              <h3 className="text-xl font-black text-slate-800">Recruitment Pipeline</h3>
              <div className="flex items-center gap-4 overflow-x-auto pb-6">
                {STAGES.map((stage, i) => {
                  const isActive = application.current_stage === stage;
                  const isPast = STAGES.indexOf(application.current_stage) > i;
                  return (
                    <button 
                      key={stage}
                      onClick={() => handleStageChange(stage)}
                      className={`relative flex-1 min-w-[140px] p-4 rounded-2xl border-2 transition-all ${
                        isActive ? "bg-blue-50 border-blue-500 shadow-md scale-105 z-10" : 
                        isPast ? "bg-slate-50 border-emerald-500 hover:border-blue-300" : 
                        "bg-white border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-black uppercase tracking-wider ${isActive ? "text-blue-700" : isPast ? "text-emerald-700" : "text-slate-400"}`}>{stage}</span>
                        {isPast && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      </div>
                      <div className={`w-full h-1.5 rounded-full ${isActive ? "bg-blue-500" : isPast ? "bg-emerald-500" : "bg-slate-200"}`} />
                    </button>
                  );
                })}
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-slate-600 font-medium leading-relaxed">
                  Click on any stage above to move the candidate through the pipeline. Moving a candidate will automatically notify them and log the action in their timeline.
                </p>
              </div>
            </motion.div>
          )}

          {/* RESUME VIEWER */}
          {activeTab === "Resume" && (
            <motion.div key="resume" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-800">Candidate Resume</h3>
                {candidate.cv_url && (
                  <a href={candidate.cv_url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-50 text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-100 transition-colors">
                    Download Resume
                  </a>
                )}
              </div>
              {candidate.cv_url ? (
                <div className="flex-1 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 min-h-[600px]">
                  <iframe src={candidate.cv_url} className="w-full h-full" title="Resume Viewer" />
                </div>
              ) : (
                <div className="py-20 text-center bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
                  <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-lg font-bold text-slate-500">No Resume Uploaded</p>
                </div>
              )}
            </motion.div>
          )}

          {/* INTERVIEWS */}
          {activeTab === "Interviews" && (
            <motion.div key="interviews" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <InterviewManager application={application} onUpdate={handleUpdateNotes} />
            </motion.div>
          )}

          {/* OFFERS */}
          {activeTab === "Offers" && (
            <motion.div key="offers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <OfferManager application={application} onUpdate={handleUpdateNotes} />
            </motion.div>
          )}

          {/* TIMELINE & NOTES */}
          {activeTab === "Timeline & Notes" && (
            <motion.div key="timeline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 gap-10">
              
              {/* Timeline */}
              <div>
                <h3 className="text-xl font-black text-slate-800 mb-6">Activity Timeline</h3>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  {timeline.map((event, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                        {event.event_type.includes("EMAIL") ? <Send className="w-4 h-4" /> : 
                         event.event_type.includes("STAGE") ? <Briefcase className="w-4 h-4" /> :
                         <Clock className="w-4 h-4" />}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 bg-white shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-slate-800 text-sm">{event.title}</div>
                          <time className="font-mono text-xs text-slate-400">{new Date(event.created_at).toLocaleDateString()}</time>
                        </div>
                        <div className="text-slate-500 text-sm">{event.description}</div>
                      </div>
                    </div>
                  ))}
                  {timeline.length === 0 && (
                    <div className="text-center text-slate-400 font-bold py-10 relative z-10">No activity recorded yet.</div>
                  )}
                </div>
              </div>

              {/* Internal Notes */}
              <div>
                <h3 className="text-xl font-black text-slate-800 mb-6">Internal Notes</h3>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
                  <textarea 
                    value={noteText} onChange={e => setNoteText(e.target.value)}
                    placeholder="Type an internal note about this candidate..."
                    className="w-full h-32 bg-white border border-slate-200 rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none resize-none mb-4"
                  />
                  <div className="flex justify-end">
                    <button onClick={handleAddSimpleNote} disabled={!noteText.trim()} className="bg-blue-600 text-white font-bold px-6 py-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors">
                      Add Note
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {notes.map((note: any, i: number) => (
                    <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2 text-amber-800 text-xs font-black uppercase tracking-wider">
                        <Edit3 className="w-3.5 h-3.5" /> Note
                      </div>
                      <p className="text-sm font-medium text-amber-900 whitespace-pre-wrap">{note.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}

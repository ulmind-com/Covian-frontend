"use client";

import { PageLoader } from "@/components/ui/PageLoader";
import { triggerLottie } from "@/components/ui/GlobalLottie";
import { useState, useMemo, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { 
  FileText, Loader2, Search, Filter, Download, 
  Calendar, ChevronDown, CheckCircle2, XCircle, 
  MoreVertical, Briefcase, Eye, UserCheck, 
  UserPlus, Mail, Phone, ExternalLink 
} from "lucide-react";
import Link from "next/link";
import { getApplications, updateApplication, getCandidates, getJobs } from "@/services/admin-api";

const STAGES = ["Applied", "Screened", "Interviewing", "Offer", "Rejected", "Hired"];

const stageColor: Record<string, string> = {
  Applied:      "bg-blue-50 text-blue-700 border-blue-200",
  Screened:     "bg-sky-50 text-sky-700 border-sky-200",
  Interviewing: "bg-violet-50 text-violet-700 border-violet-200",
  Offer:        "bg-amber-50 text-amber-700 border-amber-200",
  Rejected:     "bg-red-50 text-red-600 border-red-200",
  Hired:        "bg-emerald-50 text-emerald-700 border-emerald-200",
};

function ApplicationsContent() {
  const [applications, setApplications] = useState<any[]>([]);
  const [candidates, setCandidates] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("job") || "");
  const [stageFilter, setStageFilter] = useState("All");

  const loadData = async () => {
    try {
      const [appsData, candsData, jobsData] = await Promise.all([
        getApplications().catch(() => []),
        getCandidates().catch(() => []),
        getJobs().catch(() => [])
      ]);
      setApplications(appsData || []);
      setCandidates(candsData || []);
      setJobs(jobsData || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  // Map relationships
  const mappedApps = useMemo(() => {
    return applications.map(app => {
      const c = candidates.find(cand => (cand._id || cand.id) === app.candidate_id) || {};
      const j = jobs.find(job => (job._id || job.id) === app.job_id) || {};
      return {
        ...app,
        id: app._id || app.id,
        candidate_name: c.name || "Unknown Candidate",
        candidate_email: c.email || "-",
        candidate_phone: c.phone || "-",
        candidate_cv: c.cv_url || null,
        job_title: j.title || "Unknown Role",
        job_department: j.industry || "General",
      };
    }).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [applications, candidates, jobs]);

  // Filtering
  const filteredApps = useMemo(() => {
    return mappedApps.filter(app => {
      const matchesSearch = search === "" || 
        app.candidate_name.toLowerCase().includes(search.toLowerCase()) ||
        app.job_title.toLowerCase().includes(search.toLowerCase()) ||
        app.candidate_email.toLowerCase().includes(search.toLowerCase());
      
      const matchesStage = stageFilter === "All" || app.current_stage === stageFilter;

      return matchesSearch && matchesStage;
    });
  }, [mappedApps, search, stageFilter]);

  // Stats
  const totalApps = mappedApps.length;
  const activeApps = mappedApps.filter(a => !["Rejected", "Hired"].includes(a.current_stage)).length;
  const interviewingApps = mappedApps.filter(a => a.current_stage === "Interviewing").length;
  const hiredApps = mappedApps.filter(a => a.current_stage === "Hired").length;

  const handleUpdateStage = async (id: string, stage: string) => {
    // Optimistic UI update
    setApplications(prev => prev.map(a => (a._id || a.id) === id ? { ...a, current_stage: stage } : a));
    await updateApplication(id, { current_stage: stage }).catch(() => {
      loadData(); // Revert on failure
    });
  };

  const handleExportCSV = () => {
    const headers = ["Candidate Name", "Email", "Phone", "Applied Role", "Department", "Stage", "Applied Date"];
    const rows = filteredApps.map(a => [
      a.candidate_name, a.candidate_email, a.candidate_phone, a.job_title, a.job_department, a.current_stage, new Date(a.created_at).toLocaleDateString()
    ]);
    const csv = [headers.join(","), ...rows.map(r => r.map(cell => `"${cell}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `applications_export_${new Date().getTime()}.csv`;
    a.click();
  };

  return (
    <div className="space-y-8 pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Applicant Tracking System</h1>
          <p className="text-sm font-bold text-slate-500 mt-1">Manage candidates, interviews, and offers from end to end.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleExportCSV} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl font-bold text-slate-600 hover:text-slate-800 shadow-sm transition-all">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Advanced Stats Cards (Glassmorphism) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Applications", value: totalApps, icon: UserPlus, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Active Pipeline", value: activeApps, icon: Briefcase, color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100" },
          { label: "Interviewing", value: interviewingApps, icon: Calendar, color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
          { label: "Hired", value: hiredApps, icon: UserCheck, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            key={i} 
            className={`relative overflow-hidden bg-white/70 backdrop-blur-md rounded-[2rem] p-6 shadow-sm border ${stat.border}`}
          >
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${stat.bg} opacity-50 pointer-events-none`} />
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="text-4xl font-black text-slate-800">{loading ? "-" : stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center shrink-0`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Data Table Controls */}
      <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
        
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search candidates, roles, emails..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
              {["All", "Applied", "Screened", "Interviewing", "Offer"].map(stage => (
                <button 
                  key={stage}
                  onClick={() => setStageFilter(stage)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${stageFilter === stage ? "bg-slate-800 text-white shadow-md" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-4" />
              <p className="text-slate-400 font-bold text-sm animate-pulse">Loading ATS data...</p>
            </div>
          ) : filteredApps.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 border border-slate-100">
                <FileText className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-lg font-black text-slate-700">No applications found</h3>
              <p className="text-sm font-medium text-slate-400 mt-1 max-w-sm">There are no candidates matching your current filters or search query.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-100">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Candidate</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Applied Role</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Stage</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Applied Date</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/80 bg-white">
                <AnimatePresence>
                  {filteredApps.map((app) => (
                    <motion.tr 
                      key={app.id} 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="hover:bg-blue-50/30 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-black text-slate-500 shrink-0 border border-slate-200">
                            {app.candidate_name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">{app.candidate_name}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs font-medium text-slate-500 flex items-center gap-1"><Mail className="w-3 h-3" /> {app.candidate_email}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-800 text-sm">{app.job_title}</p>
                        <p className="text-xs font-bold text-slate-400 uppercase mt-0.5">{app.job_department}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="relative inline-block">
                          <select 
                            className={`appearance-none text-xs font-black border rounded-full px-3 py-1 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${stageColor[app.current_stage] || stageColor.Applied}`}
                            value={app.current_stage} 
                            onChange={ev => handleUpdateStage(app.id, ev.target.value)}
                          >
                            {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                          <ChevronDown className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-slate-600 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          {new Date(app.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {app.candidate_cv && (
                            <a href={app.candidate_cv} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm" title="View Resume">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          <Link href={`/admin/applications/${app.id}`}>
                            <button className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="View Profile">
                              <Eye className="w-4 h-4" />
                            </button>
                          </Link>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ApplicationsPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ApplicationsContent />
    </Suspense>
  );
}

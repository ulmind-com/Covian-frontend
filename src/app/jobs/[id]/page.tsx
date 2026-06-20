"use client";

import { useJobs } from "@/services/queries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Briefcase, ArrowLeft, Building2, Clock, CheckCircle2, Share2, Bookmark, IndianRupee, Sparkles, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { use, useState } from "react";
import JobApplicationModal from "@/components/jobs/JobApplicationModal";

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { data: jobs, isLoading } = useJobs();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const job = jobs?.find(j => j.id === resolvedParams.id);

  return (
    <div className="min-h-screen bg-[#F0F5FA] font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      <Header />
      
      {isLoading ? (
        <div className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
          <div className="h-10 w-32 bg-slate-200 animate-pulse rounded-lg mb-8" />
          <div className="h-64 bg-white border border-slate-200 rounded-3xl animate-pulse mb-8" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 h-96 bg-white border border-slate-200 rounded-3xl animate-pulse" />
            <div className="h-96 bg-white border border-slate-200 rounded-3xl animate-pulse" />
          </div>
        </div>
      ) : !job ? (
        <div className="flex-1 pt-32 pb-20 px-6 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-10 h-10 text-slate-400" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-4">Position Not Found</h1>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">This role may have been filled, or the link you followed is incorrect. Explore our other open positions.</p>
            <Link href="/jobs">
              <button className="bg-[#0b1b3d] hover:bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold transition-colors">View All Jobs</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Premium Hero Section */}
          <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-[#E0EBF5] to-white border-b border-blue-100">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mb-10 group">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                Back to all roles
              </Link>
              
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg text-xs font-bold uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Actively Hiring
                    </span>
                    <span className="text-sm font-bold text-slate-400">Posted recently</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b1b3d] mb-6 leading-tight capitalize">
                    {job.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm font-bold">
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-slate-500" />
                      </div>
                      {job.company || 'Partner Company'}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      {job.location || 'Remote'}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-purple-600" />
                      </div>
                      {job.job_type || 'Full-time'}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <IndianRupee className="w-4 h-4 text-emerald-600" />
                      </div>
                      {job.salary_range || 'Competitive'}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0 w-full lg:w-auto">
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 w-12 h-12 bg-white border-2 border-slate-200 rounded-xl text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 w-12 h-12 bg-white border-2 border-slate-200 rounded-xl text-slate-400 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button onClick={() => setIsModalOpen(true)} className="flex-[2] sm:flex-none bg-[#F97316] hover:bg-[#EA580C] text-white px-10 py-3.5 rounded-xl font-black text-lg transition-all shadow-lg shadow-orange-500/25 active:scale-95 flex items-center justify-center gap-2">
                    Apply Now <Sparkles className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Job Content Layout */}
          <section className="flex-1 py-12 md:py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-[1fr_380px] gap-12">
                
                {/* Left Content Area */}
                <div className="space-y-12">
                  
                  {/* Main Details Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg shadow-blue-500/5 border border-blue-100"
                  >
                    <div className="prose prose-lg prose-slate max-w-none">
                      <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-blue-600" />
                        </div>
                        About the Role
                      </h2>
                      <p className="text-slate-600 leading-relaxed font-medium text-lg whitespace-pre-wrap">
                        {job.description}
                      </p>
                      
                      <hr className="border-slate-100 my-10" />

                      <h3 className="text-xl font-black text-slate-900 mb-6">Key Responsibilities</h3>
                      <ul className="space-y-4">
                        {[
                          "Drive technical architecture and implementation for scalable distributed systems.",
                          "Collaborate with cross-functional teams to define, design, and ship new features.",
                          "Ensure the performance, quality, and responsiveness of applications.",
                          "Identify and correct bottlenecks and fix bugs in our systems.",
                          "Help maintain code quality, organization, and automatization."
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-600 font-medium">
                            <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <hr className="border-slate-100 my-10" />

                      <h3 className="text-xl font-black text-slate-900 mb-6">Requirements</h3>
                      <ul className="space-y-4">
                        {[
                          "Proven experience as a senior contributor in a high-growth tech environment.",
                          "Strong knowledge of modern web development and system design.",
                          "Familiarity with cloud message APIs and push notifications.",
                          "Understanding of design principles and interface guidelines.",
                          "Proficient understanding of code versioning tools (e.g. Git)."
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-600 font-medium">
                            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* CTA Banner inside left column */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#0b1b3d] rounded-[2rem] p-10 md:p-12 shadow-2xl text-white relative overflow-hidden"
                  >
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div>
                        <h2 className="text-3xl font-black mb-4">Ready for your next big move?</h2>
                        <p className="text-blue-200/80 font-medium text-lg max-w-md">
                          Join a world-class team building the future. Submit your application today.
                        </p>
                      </div>
                      <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#0b1b3d] hover:bg-blue-50 px-8 py-4 rounded-xl font-black text-lg transition-transform hover:scale-105 active:scale-95 shrink-0 shadow-xl shadow-black/20">
                        Apply for this Role
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Right Sticky Sidebar */}
                <div className="space-y-6 relative">
                  <div className="sticky top-32 space-y-6">
                    
                    {/* Job Overview Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-3xl p-8 shadow-lg shadow-blue-500/5 border border-blue-100"
                    >
                      <h3 className="font-black text-slate-900 mb-8 text-xl">Overview</h3>
                      
                      <div className="space-y-6">
                        <div className="flex gap-5">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                            <IndianRupee className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Salary Range</p>
                            <p className="font-black text-slate-800 text-lg">{job.salary_range || 'Competitive'}</p>
                          </div>
                        </div>
                        
                        <div className="w-full h-px bg-slate-100" />
                        
                        <div className="flex gap-5">
                          <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                            <Briefcase className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Job Type</p>
                            <p className="font-black text-slate-800 text-lg">{job.job_type || 'Full-time'}</p>
                          </div>
                        </div>

                        <div className="w-full h-px bg-slate-100" />
                        
                        <div className="flex gap-5">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                            <MapPin className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                            <p className="font-black text-slate-800 text-lg">{job.location || 'Remote'}</p>
                          </div>
                        </div>

                        <div className="w-full h-px bg-slate-100" />
                        
                        <div className="flex gap-5">
                          <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                            <Clock className="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Experience</p>
                            <p className="font-black text-slate-800 text-lg">{job.experience_level || 'Not Specified'}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Perks Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-lg shadow-blue-500/5"
                    >
                      <h3 className="font-black text-slate-900 mb-6 text-xl">Benefits & Perks</h3>
                      <ul className="space-y-4">
                        {[
                          "Comprehensive Health Insurance",
                          "Unlimited PTO & Sick Days",
                          "Remote Work Setup Stipend",
                          "Annual Learning Budget",
                          "401(k) / Pension Matching"
                        ].map((perk, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                            <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            </div>
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          <JobApplicationModal 
            jobId={job.id} 
            jobTitle={job.title} 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </>
      )}

      <Footer />
    </div>
  );
}

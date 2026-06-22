"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search, MapPin, Briefcase, Filter, ChevronDown, IndianRupee, Clock, GraduationCap, Building2, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useJobs } from "@/services/queries";

// Premium Mock Data matching the screenshot exactly
const MOCK_JOBS = [
  {
    id: "1",
    title: "Front Line Sales Executive (FLS)",
    company: "NBFC",
    verified: true,
    location: "Chhattisgarh & Jharkhand",
    salary: "Up to ₹5 LPA",
    experience: "Minimum 1 Years experience in Insurance",
    education: "Any Graduate",
    type: "Full-Time",
    mode: "Field Work",
    posted: "Today",
    initial: "N",
    color: "bg-indigo-100 text-indigo-700",
    description: "Job Locations: Chhattisgarh: Bhilai, Durg, Raigarh, Bilaspur Jharkhand: Dhanbad, Deoghar, Bokaro, Jamshedpur, Ranchi, Jagdalpur, Mahasamund CTC: Up to ₹5 LPA (Based on Current Salary &..."
  },
  {
    id: "2",
    title: "Medical Representative (MR)",
    company: "RAPL Group",
    verified: true,
    location: "Pan India",
    salary: "Negotiable",
    experience: "1 Year",
    education: "B.Pharm / D.Pharm",
    type: "Full Time",
    mode: "Field Work",
    posted: "Today",
    initial: "RG",
    color: "bg-orange-100 text-orange-700",
    industry: "Healthcare",
    description: "Job Type: Full-time | Field Sales | Healthcare / Pharma / Ayurvedic Location: Multiple Locations Across India (Is your preferred job location within 10 km of our available openings? Please apply only if your..."
  },
  {
    id: "3",
    title: "Business Development Officer (BDO)",
    company: "RAPL Group",
    verified: true,
    location: "Pan India",
    salary: "Negotiable",
    experience: "1 Year",
    education: "Any Graduate",
    type: "Full Time",
    mode: "Field Work",
    posted: "Today",
    initial: "RG",
    color: "bg-emerald-100 text-emerald-700",
    industry: "Sales",
    description: "Job Type: Full-time | Field Sales | Healthcare / Pharma / Ayurvedic Location: Multiple Locations Across India (Is your preferred job location within 10 km of our available openings? Please apply only if your..."
  },
  {
    id: "4",
    title: "Software Developer",
    company: "Covian Advisory",
    verified: true,
    location: "Pan India",
    salary: "Negotiable",
    experience: "1 Year",
    education: "Any Graduate",
    type: "Full Time",
    mode: "Remote",
    posted: "Today",
    initial: "CA",
    color: "bg-indigo-100 text-indigo-700",
    industry: "Information Technology",
    description: "Job Type: Full-time | Field Sales | Healthcare / Pharma / Ayurvedic Location: Multiple Locations Across India (Is your preferred job location within 10 km of our available openings? Please apply only if your..."
  }
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("All Industries");
  const [filterLocation, setFilterLocation] = useState("All Locations");
  const [filterExperience, setFilterExperience] = useState("Any Experience");
  const [filterSalary, setFilterSalary] = useState("Any Salary");
  const [filterType, setFilterType] = useState("All Types");

  const { data: apiJobs, isLoading, error } = useJobs();

  // Format API jobs to match the premium UI layout
  const formattedApiJobs = apiJobs?.map((job: any, index: number) => {
    const colors = [
      "bg-indigo-100 text-indigo-700",
      "bg-orange-100 text-orange-700",
      "bg-emerald-100 text-emerald-700",
      "bg-blue-100 text-blue-700",
      "bg-purple-100 text-purple-700",
    ];
    const initial = job.title ? job.title.charAt(0).toUpperCase() : "J";
    
    return {
      id: job._id || job.id,
      title: job.title,
      company: "Covian Advisory",
      verified: true,
      location: job.location || "Multiple Locations",
      salary: job.salary_range || "Negotiable",
      experience: job.experience_level || "Any Experience",
      industry: job.industry || "Any Industry",
      education: "Any Graduate", // Mock
      type: job.job_type || "Full-Time",
      mode: "On-site", // Mock
      posted: new Date(job.created_at).toLocaleDateString() || "Recently",
      initial: initial,
      color: colors[index % colors.length],
      description: job.description
    };
  }) || [];

  const rawJobs = formattedApiJobs.length > 0 ? formattedApiJobs : MOCK_JOBS;

  // Extract unique options for filters
  const uniqueIndustries = ["All Industries", ...Array.from(new Set(rawJobs.map(j => j.industry).filter(Boolean)))];
  const uniqueLocations = ["All Locations", ...Array.from(new Set(rawJobs.map(j => j.location).filter(Boolean)))];
  const uniqueExperiences = ["Any Experience", ...Array.from(new Set(rawJobs.map(j => j.experience).filter(Boolean)))];
  const uniqueSalaries = ["Any Salary", ...Array.from(new Set(rawJobs.map(j => j.salary).filter(Boolean)))];
  const uniqueTypes = ["All Types", ...Array.from(new Set(rawJobs.map(j => j.type).filter(Boolean)))];

  // Apply filters
  const jobsToDisplay = rawJobs.filter(job => {
    // Search Query
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && !job.company.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filterIndustry !== "All Industries" && job.industry !== filterIndustry) return false;
    if (filterLocation !== "All Locations" && job.location !== filterLocation) return false;
    if (filterExperience !== "Any Experience" && job.experience !== filterExperience) return false;
    if (filterSalary !== "Any Salary" && job.salary !== filterSalary) return false;
    if (filterType !== "All Types" && job.type !== filterType) return false;
    return true;
  });

  const clearAllFilters = () => {
    setSearchQuery("");
    setFilterIndustry("All Industries");
    setFilterLocation("All Locations");
    setFilterExperience("Any Experience");
    setFilterSalary("Any Salary");
    setFilterType("All Types");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      <Header />
      
      {/* ── SIMPLE PREMIUM SEARCH HEADER ── */}
      <section className="bg-white pt-32 pb-12 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 bg-white border border-slate-200 shadow-sm rounded-2xl p-2 w-full max-w-3xl focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Job title, keywords, or company..." 
                  className="bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 w-full font-medium h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="hidden md:flex items-center px-4 border-l border-slate-200">
                <MapPin className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 w-40 font-medium h-12"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-colors whitespace-nowrap">
                Find Jobs
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm font-bold text-slate-600">
              <span className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                <Building2 className="w-4 h-4" /> Partner With Us
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (SIDEBAR + LIST) ── */}
      <section className="flex-1 py-10 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* ── LEFT SIDEBAR FILTERS ── */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-28">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <Filter className="w-5 h-5 text-blue-600" /> Filter Jobs
                  </h3>
                  <button onClick={clearAllFilters} className="text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors">Clear All</button>
                </div>
                
                <div className="space-y-6">
                  {/* Industry Filter */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Industry</label>
                    <div className="relative">
                      <select value={filterIndustry} onChange={(e) => setFilterIndustry(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl h-12 px-4 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white transition-colors cursor-pointer pr-10 truncate">
                        {uniqueIndustries.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                    <div className="relative">
                      <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl h-12 px-4 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white transition-colors cursor-pointer pr-10 truncate">
                        {uniqueLocations.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Experience Filter */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Experience</label>
                    <div className="relative">
                      <select value={filterExperience} onChange={(e) => setFilterExperience(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl h-12 px-4 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white transition-colors cursor-pointer pr-10 truncate">
                        {uniqueExperiences.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Salary Range Filter */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Salary Range</label>
                    <div className="relative">
                      <select value={filterSalary} onChange={(e) => setFilterSalary(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl h-12 px-4 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white transition-colors cursor-pointer pr-10 truncate">
                        {uniqueSalaries.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Job Type</label>
                    <div className="relative">
                      <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl h-12 px-4 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white transition-colors cursor-pointer pr-10 truncate">
                        {uniqueTypes.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT JOB LISTINGS ── */}
            <div className="flex-1 space-y-6">
              <AnimatePresence>
                {jobsToDisplay.map((job, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={job.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col md:flex-row gap-6"
                  >
                    {/* Left: Avatar & Badges */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Company Initial Avatar */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl shrink-0 ${job.color}`}>
                          {job.initial}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                              {job.title}
                            </h3>
                            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                              <Calendar className="w-3.5 h-3.5" /> {job.posted}
                            </span>
                          </div>
                          
                          <p className="text-sm font-bold text-slate-500 flex items-center gap-1.5">
                            {job.company} 
                            {job.verified && <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md"><CheckCircle2 className="w-3 h-3" /> Verified Employer</span>}
                          </p>
                        </div>
                      </div>

                      {/* Job Meta Tags (Pills) */}
                      <div className="flex flex-wrap gap-2.5 mb-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" /> {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600">
                          <IndianRupee className="w-3.5 h-3.5 text-amber-500" /> {job.salary}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-purple-500" /> {job.experience}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-500" /> {job.education}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600">
                          <Briefcase className="w-3.5 h-3.5 text-emerald-500" /> {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600">
                          <Building2 className="w-3.5 h-3.5 text-orange-500" /> {job.mode}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-500 leading-relaxed font-medium line-clamp-2">
                        {job.description}
                      </p>
                    </div>

                    {/* Right: Action Buttons */}
                    <div className="shrink-0 flex md:flex-col items-center justify-center gap-3 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                      <Link href={`/jobs/${job.id}`} className="w-full">
                        <button className="w-full md:w-36 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-orange-500/20 active:scale-95">
                          Apply Now
                        </button>
                      </Link>
                      <Link href={`/jobs/${job.id}`} className="w-full">
                        <button className="w-full md:w-36 bg-white border-2 border-slate-200 hover:border-[#003A70] hover:text-[#003A70] text-slate-600 px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

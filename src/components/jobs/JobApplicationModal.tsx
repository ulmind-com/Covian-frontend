"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Loader2, CheckCircle2, FileText } from "lucide-react";
import { api } from "@/services/api";
import axios from "axios";

interface JobApplicationModalProps {
  jobId: string;
  jobTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function JobApplicationModal({ jobId, jobTitle, isOpen, onClose }: JobApplicationModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !file) {
      setError("Please fill out all required fields and upload your CV.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Upload CV
      const formData = new FormData();
      formData.append("file", file);
      
      const isProd = process.env.NODE_ENV === 'production';
      const API_URL = isProd ? 'https://project-for-prem-backend.onrender.com/api/v1' : 'http://localhost:8000/api/v1';
      const uploadRes = await axios.post(`${API_URL}/media/upload-cv`, formData);
      
      const cvUrl = uploadRes.data.url;

      // 2. Submit Application
      const skillsArray = skills.split(",").map(s => s.trim()).filter(Boolean);
      
      await api.post("/candidates/public-apply", {
        job_id: jobId,
        name,
        email,
        phone,
        skills: skillsArray,
        cv_url: cvUrl
      });

      // 3. Show Success
      setStep(2);
    } catch (err: unknown) {
      console.error(err);
      const message = err instanceof Error ? err.message : "An error occurred while submitting your application.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={loading ? undefined : onClose}
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-[2rem] shadow-2xl w-full max-w-xl relative z-10 overflow-hidden border border-slate-200/50 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <button onClick={loading ? undefined : onClose} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-black mb-1">Apply for Role</h2>
              <p className="text-blue-100 font-medium">{jobTitle}</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm font-bold border border-red-100">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1 block">Full Name *</label>
                      <input 
                        required value={name} onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1 block">Email Address *</label>
                      <input 
                        required type="email" value={email} onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1 block">Phone Number *</label>
                    <input 
                      required value={phone} onChange={e => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium" 
                      placeholder="+91 9876543210" 
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1 block">Key Skills (Comma separated)</label>
                    <input 
                      value={skills} onChange={e => setSkills(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium" 
                      placeholder="e.g. React, Node.js, Project Management" 
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 block">Upload Resume/CV (PDF) *</label>
                    <div className="relative border-2 border-dashed border-slate-200 rounded-xl hover:border-blue-400 hover:bg-blue-50/50 transition-all group">
                      <input 
                        required type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                      />
                      <div className="flex flex-col items-center justify-center py-8 pointer-events-none">
                        {file ? (
                          <>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                              <FileText className="w-6 h-6" />
                            </div>
                            <p className="font-bold text-slate-700 text-sm">{file.name}</p>
                            <p className="text-xs text-slate-400 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </>
                        ) : (
                          <>
                            <div className="w-12 h-12 bg-slate-100 group-hover:bg-blue-100 transition-colors rounded-full flex items-center justify-center text-slate-400 group-hover:text-blue-600 mb-3">
                              <Upload className="w-6 h-6" />
                            </div>
                            <p className="font-bold text-slate-700 text-sm">Click or drag file to upload</p>
                            <p className="text-xs text-slate-400 mt-1">Supports PDF, DOC, DOCX up to 10MB</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" disabled={loading}
                      className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-black text-lg py-4 rounded-xl transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Submitting Application...</>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-slate-800 mb-2">Application Submitted!</h3>
                  <p className="text-slate-500 font-medium max-w-sm mx-auto mb-8">
                    Thank you for applying to the <span className="font-bold text-slate-700">{jobTitle}</span> position. Our team will review your profile and get back to you soon.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-8 py-3 rounded-xl transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

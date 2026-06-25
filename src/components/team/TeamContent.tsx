"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Loader2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useTeamMembers } from "@/services/queries";

/* eslint-disable */

// SVGs for social icons
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
  </svg>
);

const FALLBACK_TEAM = [
  {
    _id: "1", name: "Pranav Kumar", designation: "Founder and CEO",
    bio: "Pranav leads the strategic vision, business growth, and organizational development of CoVian Advisory. With a strong focus on innovation, client satisfaction, and workforce solutions, he drives the company's mission of delivering reliable staffing, recruitment, and advisory services across industries.",
    photo_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    linkedin_url: "", twitter_url: "", email: "",
  },
  {
    _id: "2", name: "Shivangi Verma", designation: "Co-Founder and CBO",
    bio: "Shivangi oversees business development, client partnerships, and market expansion initiatives. She plays a key role in strengthening customer relationships and ensuring CoVian Advisory consistently delivers value-driven talent solutions.",
    photo_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    linkedin_url: "", twitter_url: "", email: "",
  },
  {
    _id: "3", name: "Premjeet", designation: "Co-Founder and COO",
    bio: "Premjeet manages the company's day-to-day operations, service delivery, and process optimization, ensuring operational excellence across all recruitment and staffing functions.",
    photo_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    linkedin_url: "", twitter_url: "", email: "",
  },
  {
    _id: "4", name: "Vicky Kumar", designation: "Chief Technology Officer (CTO)",
    bio: "Vicky leads the company's digital transformation and technology strategy, overseeing website development, digital platforms, and automation initiatives.",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    linkedin_url: "", twitter_url: "", email: "",
  },
];

export function TeamContent() {
  const { data: cmsTeam, isLoading } = useTeamMembers();
  const members = (cmsTeam && cmsTeam.length > 0) ? cmsTeam : FALLBACK_TEAM;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0A1128] via-[#143059] to-[#0A1128] selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="flex-1 w-full overflow-hidden relative">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url(/mesh-texture.png)] opacity-5 mix-blend-overlay" />
        </div>

        {/* ── HERO SECTION ── */}
        <section className="relative z-10 pt-40 pb-20 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase">
                Meet Our Leadership
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-white tracking-tight leading-[1.15] mb-6"
            >
              The Minds Behind <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                CoVian Advisory
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Our leadership team combines expertise in business strategy, operations, technology, and client engagement to build a trusted workforce solutions company dedicated to connecting organizations with the right talent.
            </motion.p>
          </div>
        </section>

        {/* ── TEAM GRID SECTION ── */}
        <section className="relative z-10 pb-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {isLoading ? (
                <div className="col-span-2 flex items-center justify-center h-40">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
                </div>
              ) : members.map((member: any, idx: number) => (
                <motion.div
                  key={member._id || idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="group relative"
                >
                  {/* Premium Glass Card */}
                  <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-px bg-gradient-to-b from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent rounded-[2rem] transition-all duration-500 pointer-events-none" />

                    <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
                      {/* Image Frame */}
                      <div className="relative w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-white/10 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500">
                        {member.photo_url ? (
                          <Image
                            src={member.photo_url}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 128px, 160px"
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-4xl">
                            {member.name?.charAt(0)}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-blue-600/10 group-hover:opacity-0 transition-opacity duration-500" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-5">
                          {member.designation}
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                          {member.bio}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                          {member.linkedin_url ? (
                            <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                              <LinkedInIcon className="w-4 h-4" />
                            </a>
                          ) : (
                            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                              <LinkedInIcon className="w-4 h-4" />
                            </button>
                          )}

                          {member.email ? (
                            <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 transition-all">
                              <Mail className="w-4 h-4" />
                            </a>
                          ) : (
                            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 transition-all">
                              <Mail className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

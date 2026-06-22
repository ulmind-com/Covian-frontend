"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, LineChart, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecruitmentSolutions() {
  const solutions = [
    { title: "Recruitment & Staffing", desc: "Full-cycle hiring for permanent and temporary roles across functions and levels, backed by a deep talent pipeline.", icon: Briefcase },
    { title: "Executive Search", desc: "Discreet, targeted searches for senior leadership and specialized executive roles that shape organizational direction.", icon: Database },
    { title: "RPO & Workforce Advisory", desc: "Recruitment Process Outsourcing and strategic advisory to transform how organizations plan, attract, and retain talent at scale.", icon: LineChart }
  ];

  return (
    <section className="py-24 bg-[#003A70] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_0%,#003A70_100%)] opacity-80 pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#1E88E5]/15 blur-[120px] animate-pulse pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm font-bold tracking-wider uppercase">
              Enterprise Solutions <ArrowRight className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight drop-shadow-md">
              Specialized Recruitment <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#00A86B]">For Specialized Needs.</span>
            </h2>
            <p className="text-lg text-[#E8ECEF]/80 font-medium leading-relaxed">
              We don&apos;t believe in one-size-fits-all. Our specialized talent pods are organized by industry and function to ensure deep domain expertise in your hiring process.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#1E88E5] to-[#00A86B] hover:opacity-90 text-white rounded-full px-8 h-14 text-[16px] font-bold shadow-[0_10px_30px_rgba(0,123,255,0.3)] transition-all mt-4 border border-white/20">
              Explore All Solutions <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(0,123,255,0.2)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer ${i === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1E88E5] transition-all shadow-inner border border-white/5">
                  <sol.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                <p className="text-sm text-[#E8ECEF]/70 font-medium leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

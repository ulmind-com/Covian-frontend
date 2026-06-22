"use client";

import { motion } from "framer-motion";
import { AlertCircle, UserMinus, Clock, Scaling } from "lucide-react";

const challenges = [
  {
    id: "shortages",
    icon: AlertCircle,
    title: "Talent Shortages",
    description: "Critical roles go unfilled for months, stalling projects and revenue.",
    color: "from-red-500 to-rose-500",
  },
  {
    id: "attrition",
    icon: UserMinus,
    title: "High Attrition",
    description: "Replacing talent is costly — both financially and culturally.",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "delayed",
    icon: Clock,
    title: "Delayed Hiring",
    description: "Lengthy processes result in losing top candidates to faster competitors.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "scalability",
    icon: Scaling,
    title: "Workforce Scalability",
    description: "Organizations struggle to flex team size up or down with business demand.",
    color: "from-blue-500 to-sky-500",
  },
];

export function WorkforceChallenge() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Gradient fade at top to blend with previous section */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-transparent pointer-events-none z-10" />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 -z-10" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-slate-600 text-xs font-bold tracking-[0.2em] uppercase">
                The Industry Landscape
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-black text-[#003A70] leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#00A86B]">Workforce Challenge</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Today&apos;s organizations face a compounding talent crisis. Skill shortages, rising attrition, slow hiring cycles, and the inability to scale teams quickly are no longer HR problems &mdash; they are <strong className="text-slate-800">business growth barriers</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Companies that fail to solve these challenges fall behind competitors who move faster and hire smarter.
            </p>
          </motion.div>

          {/* Right Cards */}
          <div className="w-full lg:w-[55%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {challenges.map((challenge, i) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${challenge.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <challenge.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003A70] mb-3">{challenge.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

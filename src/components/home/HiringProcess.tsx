"use client";

import { motion } from "framer-motion";
import { FileText, Search, Filter, Users, Award } from "lucide-react";

export function HiringProcess() {
  const steps = [
    {
      icon: FileText,
      title: "1. Requirement",
      desc: "Deep-dive consultation to understand your culture, role requirements, and ideal candidate profile."
    },
    {
      icon: Search,
      title: "2. Sourcing",
      desc: "Multi-channel sourcing leveraging our active talent pool, referrals, and proprietary database."
    },
    {
      icon: Filter,
      title: "3. Screening",
      desc: "Rigorous vetting, competency assessments, and cultural fit evaluations for every candidate."
    },
    {
      icon: Users,
      title: "4. Interview",
      desc: "Coordinating seamless interview cycles and collecting structured feedback from all stakeholders."
    },
    {
      icon: Award,
      title: "5. Offer",
      desc: "Managing negotiations, offer rollout, and pre-boarding engagement to ensure candidate drop-offs are minimized."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A86B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-[#003A70] mb-6">
            Our Recruitment Process
          </h2>
          <p className="text-lg text-[#2F3440]/70 font-medium">
            CoVian Advisory follows a structured hiring methodology that balances speed with rigor. Every stage is designed to reduce time-to-fill while ensuring candidate quality, cultural fit, and long-term retention.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[48px] left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1E88E5]/20 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:border-[#1E88E5]/30 group-hover:shadow-[0_20px_40px_rgba(0,123,255,0.2)] transition-all duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#1E88E5]/10 to-[#00A86B]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className="w-10 h-10 text-[#1E88E5] group-hover:text-[#003A70] transition-colors relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-[#003A70] mb-3">{step.title}</h3>
                <p className="text-[#2F3440]/70 font-medium text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

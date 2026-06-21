"use client";

import { motion } from "framer-motion";
import { Briefcase, Zap, ShieldCheck, Headset, MapPin } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Briefcase,
      title: "Industry-Focused Expertise",
      desc: "Deep domain knowledge across multiple sectors to find the perfect fit for your specialized roles.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround Time",
      desc: "Accelerated hiring cycles without compromising on candidate quality or compliance.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Rigorous vetting processes ensuring only top-tier professionals reach your interview desk.",
    },
    {
      icon: Headset,
      title: "Dedicated Support",
      desc: "A personalized account management team available around the clock for your hiring needs.",
    },
    {
      icon: MapPin,
      title: "Pan-India Talent Network",
      desc: "Unrestricted access to a massive pool of verified candidates across all major Indian cities.",
    }
  ];

  return (
    <section className="py-24 bg-[#F0F9FF] relative overflow-hidden">
      {/* Premium background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#BAE6FD]/30 blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#E0F2FE]/50 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] mb-6 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
            <span className="text-[#0284C7] text-xs font-bold tracking-widest uppercase">
              Our Advantage
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-[#0F172A] mb-6"
          >
            Why Choose CoVian Advisory?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#475569] font-medium"
          >
            Partner with us to transform your workforce strategy and achieve unparalleled business growth.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 rounded-[2rem] border border-[#E0F2FE] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(2,132,199,0.1)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F0F9FF] border border-[#E0F2FE] flex items-center justify-center mb-6 group-hover:bg-[#0284C7] group-hover:border-[#0284C7] transition-colors duration-300 shadow-sm">
                <feat.icon className="w-8 h-8 text-[#0284C7] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feat.title}</h3>
              <p className="text-[#64748B] leading-relaxed text-sm font-medium">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

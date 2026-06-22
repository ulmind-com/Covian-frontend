"use client";

import { motion } from "framer-motion";
import { DollarSign, UserCog, RefreshCw, Users } from "lucide-react";

export function EngagementModels() {
  const models = [
    {
      icon: DollarSign,
      title: "Success Fee",
      desc: "Pay only when a candidate joins. Ideal for organizations with intermittent or low-volume hiring needs. Low risk, high accountability.",
    },
    {
      icon: UserCog,
      title: "Dedicated Recruiter",
      desc: "A CoVian recruiter embedded in your team, working exclusively on your roles. Combines the agility of a vendor with the focus of an internal hire.",
    },
    {
      icon: RefreshCw,
      title: "RPO (Recruitment Process Outsourcing)",
      desc: "Full or partial outsourcing of your recruitment function. We own the process, technology, and talent pipeline — you own the outcomes.",
    },
    {
      icon: Users,
      title: "Staffing",
      desc: "Contract and temporary staffing solutions with full compliance, payroll, and HR administration handled by CoVian.",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] skew-x-12 translate-x-20 -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse" />
            <span className="text-[#003A70] text-xs font-bold tracking-widest uppercase">
              Flexible Partnership
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-[#003A70] mb-6"
          >
            Engagement Models
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-medium"
          >
            CoVian Advisory offers flexible commercial structures designed to fit your organization's size, hiring volume, and budget. Whether you need a single critical hire or a fully outsourced recruitment function, we have a model that works.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-blue-100 transition-all group flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#1E88E5]/10 group-hover:border-[#1E88E5]/30 transition-colors shadow-sm">
                <model.icon className="w-8 h-8 text-[#003A70] group-hover:text-[#1E88E5] transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#003A70] mb-3 group-hover:text-[#1E88E5] transition-colors">{model.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {model.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

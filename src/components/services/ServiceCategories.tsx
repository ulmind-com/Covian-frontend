"use client";

import { motion } from "framer-motion";
import { Layers, Briefcase, Users, Cog, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServiceCategories() {
  const displayServices = [
    { id: "1", name: "Permanent Hiring", description: "End-to-end recruitment process outsourcing for permanent full-time roles across all levels.", price: 50000, href: "/services/permanent-hiring" },
    { id: "2", name: "Temporary Staffing", description: "Flexible workforce solutions and contingent staff tailored to your immediate project needs.", price: 15000, href: "/services/temporary-staffing" },
    { id: "3", name: "Executive Search", description: "Retained search for C-suite and VP level executives with guaranteed premium placements.", price: 150000, href: "/services/executive-search" },
    { id: "4", name: "RPO", description: "Comprehensive Recruitment Process Outsourcing to manage your entire hiring lifecycle seamlessly.", price: 200000, href: "/services/rpo" },
    { id: "5", name: "Workforce Advisory", description: "Strategic advisory on workforce planning, compliance, compensation, and organizational design.", price: 75000, href: "/services/workforce-advisory" },
    { id: "6", name: "Training & Development", description: "Upskilling programs and corporate training to build agile, high-performing future-ready teams.", price: 40000, href: "/services/training-and-development" }
  ];

  const icons = [Layers, Briefcase, Users, Cog, Sparkles];

  return (
    <section className="py-24 bg-[#0A1128] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-6">Our Premium <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 pr-2">Services</span></h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed">Comprehensive workforce solutions powered by our proprietary matching technology and human expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayServices.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[40px] rounded-[2rem] p-10 border border-white/10 hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between"
              >
                {/* Premium Liquid Glass Top Highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />
                {/* Inset shadow border for liquid feel */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none mix-blend-overlay" />
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-sky-400/10 text-sky-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-[inset_0_1px_3px_rgba(255,255,255,0.2)] border border-blue-500/20 group-hover:border-blue-500/0 backdrop-blur-md">
                    <Icon className="w-8 h-8 drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl font-heading font-medium text-white mb-4 group-hover:text-sky-300 transition-colors drop-shadow-sm">{service.name}</h3>
                  <p className="text-slate-300 font-light leading-relaxed mb-8">{service.description}</p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10 relative z-10">
                  <div>
                    {service.price ? (
                      <div className="text-white font-medium text-lg tracking-wide drop-shadow-sm">
                        ₹{service.price.toLocaleString("en-IN")} <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">/ engagement</span>
                      </div>
                    ) : (
                      <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">Custom Pricing</div>
                    )}
                  </div>
                  <Link href={service.href}>
                    <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-blue-600 hover:border-blue-600 hover:text-white rounded-full font-semibold transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

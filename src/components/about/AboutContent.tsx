"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Target, Lightbulb, Users, TrendingUp, Award, Eye, ArrowRight, Briefcase, Globe, Layers, Info } from "lucide-react";

export function AboutContent() {
  const coreValues = [
    { icon: ShieldCheck, title: "Integrity" },
    { icon: Award, title: "Excellence" },
    { icon: Lightbulb, title: "Innovation" },
    { icon: Users, title: "People First" },
    { icon: Target, title: "Accountability" },
    { icon: TrendingUp, title: "Growth Mindset" },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-48 lg:pb-64 overflow-hidden bg-[#0A1220]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">About Covian Advisory</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading font-medium leading-[1.1] text-white tracking-tight">
                Your Workforce <br className="hidden md:block"/> Partner for <br className="hidden md:block"/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 pr-2">Sustainable</span> Growth
              </h1>

              <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-lg font-light">
                We are a strategic workforce solutions partner committed to helping organizations build agile, high-performing teams through customized talent acquisition and staffing services.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-[0_0_24px_rgba(59,130,246,0.4)]">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-semibold backdrop-blur-sm transition-all">
                  Meet the Team
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-white/10 max-w-lg">
                <div>
                  <h4 className="text-2xl font-heading font-medium text-white mb-1">500+</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Placements</p>
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-medium text-white mb-1">100+</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Clients</p>
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-medium text-white mb-1">99%</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Success Rate</p>
                </div>
              </div>
            </motion.div>

            {/* Right Image Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full lg:h-[550px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0"
            >
              {/* Main Image */}
              <div className="relative w-[90%] lg:w-[85%] aspect-[4/5] lg:aspect-auto lg:h-full rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] z-10 border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop"
                  alt="Corporate Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge - Top Left */}
              <motion.div 
                animate={{ y: [-8, 8] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute top-[20%] left-[-2%] lg:-left-6 z-20 bg-white rounded-full p-2 pr-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-800 text-xs font-bold leading-tight">ISO Certified</p>
                  <p className="text-slate-500 text-[9px] font-bold uppercase tracking-wider">Quality Assured</p>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom Right */}
              <motion.div 
                animate={{ y: [8, -8] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[20%] right-[-2%] lg:-right-6 z-20 bg-[#0F1E36]/90 backdrop-blur-xl border border-white/10 rounded-full p-2 pr-5 shadow-2xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-tight">Global Network</p>
                  <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Top Talent</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
        
        {/* ── BOTTOM WAVE DIVIDER ── */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[100px] md:h-[150px] lg:h-[200px]">
            {/* 1. Main Ribbon (Top) */}
            <path d="M0,80 C400,200 800,220 1440,30 L1440,320 L0,320 Z" fill="#0B1B3D" />
            {/* 2. Slate Gap 1 */}
            <path d="M0,120 C400,240 800,260 1440,70 L1440,320 L0,320 Z" fill="#F8FAFC" />
            {/* 3. Dark Navy Ribbon */}
            <path d="M0,140 C400,250 800,260 1440,70 L1440,320 L0,320 Z" fill="#0B1B3D" />
            {/* 4. Slate Gap 2 */}
            <path d="M0,180 C400,290 800,300 1440,110 L1440,320 L0,320 Z" fill="#F8FAFC" />
            {/* 5. Bottom Ribbon */}
            <path d="M0,200 C400,300 800,300 1440,110 L1440,320 L0,320 Z" fill="#0B1B3D" />
            {/* 6. Final Slate Base */}
            <path d="M0,230 C400,320 800,300 1440,110 L1440,320 L0,320 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              
              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="flex flex-col h-full bg-white rounded-[2rem] p-10 lg:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden">
                  
                  {/* Decorative Top Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  
                  <div className="flex items-center gap-5 mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 transition-colors duration-500">
                      <Eye className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heading font-medium text-slate-900">Our Vision</h2>
                  </div>
                  
                  <p className="text-slate-500 leading-relaxed text-lg lg:text-xl font-light relative z-10">
                    To become a <strong className="font-medium text-slate-900">trusted leader</strong> in workforce solutions and business advisory services, recognized for transforming talent into opportunity and helping organizations build future-ready, high-performing teams across industries.
                  </p>

                  {/* Large Background Watermark */}
                  <div className="absolute -bottom-6 -right-2 text-[160px] font-heading font-bold text-slate-50 select-none pointer-events-none group-hover:scale-110 group-hover:-translate-x-4 transition-transform duration-700 ease-out">
                    01
                  </div>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="flex flex-col h-full bg-white rounded-[2rem] p-10 lg:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden">
                  
                  {/* Decorative Top Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  
                  <div className="flex items-center gap-5 mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center border border-sky-100 group-hover:bg-sky-500 transition-colors duration-500">
                      <Target className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heading font-medium text-slate-900">Our Mission</h2>
                  </div>
                  
                  <p className="text-slate-500 leading-relaxed text-lg lg:text-xl font-light relative z-10">
                    To empower organizations with strategic workforce solutions and exceptional talent, enabling <strong className="font-medium text-slate-900">sustainable growth</strong>, operational excellence, and long-term success through integrity, innovation, and client-focused service.
                  </p>

                  {/* Large Background Watermark */}
                  <div className="absolute -bottom-6 -right-2 text-[160px] font-heading font-bold text-slate-50 select-none pointer-events-none group-hover:scale-110 group-hover:-translate-x-4 transition-transform duration-700 ease-out">
                    02
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0F172A] mb-6">Our Core Values</h2>
            <p className="text-2xl md:text-3xl text-[#0284C7] font-medium italic px-4">
              "Driven by Values. Defined by Excellence. Focused on Growth."
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-8 rounded-[2rem] border border-[#E0F2FE] bg-[#F0F9FF]/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(2,132,199,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-[#E0F2FE] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0284C7] group-hover:border-[#0284C7] transition-all duration-300">
                  <value.icon className="w-8 h-8 text-[#0284C7] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP EXPERIENCE */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
                alt="Leadership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#003A70]/10 mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-[#0F172A] mb-6">Leadership Experience</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-4">
                  CoVian Advisory is built on a foundation of deep workforce and ecosystem expertise. Our leadership team brings decades of combined experience in talent acquisition, organizational design, and HR strategy across complex, regulated industries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-5xl font-heading font-bold text-[#00A86B] mb-2">15+</h3>
                  <p className="text-slate-800 font-bold mb-1">Years of Expertise</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Combined leadership experience across workforce solutions and talent markets.</p>
                </div>
                <div>
                  <h3 className="text-5xl font-heading font-bold text-[#1E88E5] mb-2">8</h3>
                  <p className="text-slate-800 font-bold mb-1">Industries Served</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Active verticals including Healthcare, IT, BFSI, Manufacturing, Retail, and Education.</p>
                </div>
                <div className="sm:col-span-2">
                  <h3 className="text-5xl font-heading font-bold text-[#FFB300] mb-2">6</h3>
                  <p className="text-slate-800 font-bold mb-1">Service Lines</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Comprehensive offerings from permanent hiring and staffing to RPO and workforce advisory.</p>
                </div>
              </div>

              <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-2xl p-6 flex gap-4 items-start shadow-sm mt-4">
                <Info className="w-6 h-6 text-[#0284C7] shrink-0 mt-0.5" />
                <p className="text-[#0369A1] text-sm font-medium leading-relaxed">
                  Our leadership team has direct experience building talent functions for hospitals, healthcare networks, technology firms, and large enterprises — bringing operational credibility to every engagement.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

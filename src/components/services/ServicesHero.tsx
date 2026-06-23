"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const bgImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
];

export function ServicesHero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#0A1128]">
      {/* Auto-scrolling Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImages[currentImg]})` }}
          />
        </AnimatePresence>
        {/* Blue Gradient Overlay for Readability and Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128]/90 via-[#003A70]/80 to-[#0A1128]/90" />
        <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            End-to-End Solutions
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-heading font-medium tracking-tight text-white leading-[1.1] drop-shadow-sm"
          >
            Smarter Hiring, <br className="hidden md:block"/>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 pr-2">
              Faster Scaling.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            From executive search to contingent workforce management, our comprehensive suite of services is designed to handle your most complex talent challenges.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

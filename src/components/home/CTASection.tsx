"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    service: "Recruitment & Staffing",
    headline: "Build Your Dream Team — Faster",
    subtext: "We connect India's top companies with verified, job-ready talent. From entry-level to senior roles, placed within 24–72 hours.",
    cta: "Explore Staffing",
    href: "/services/recruitment-and-staffing",
    image: "/images/cta_recruitment.png",
    badge: "🏆 #1 Recruitment Partner",
    accent: "from-[#1E88E5] to-[#00A86B]",
  },
  {
    id: 2,
    service: "Executive Search",
    headline: "Hire Leaders Who Drive Growth",
    subtext: "Our executive search practice identifies and places transformational C-suite and senior management professionals for your organisation.",
    cta: "Find Leaders",
    href: "/services/executive-search",
    image: "/images/cta_executive.png",
    badge: "👔 C-Suite & Senior Leaders",
    accent: "from-[#1565C0] to-[#7C3AED]",
  },
  {
    id: 3,
    service: "Business Advisory",
    headline: "Strategy That Scales Your Business",
    subtext: "From workforce planning to financial forecasting, our advisory experts help you make data-driven decisions that deliver measurable results.",
    cta: "Get Advisory",
    href: "/services/business-advisory",
    image: "/images/cta_advisory.png",
    badge: "📈 Strategic Growth Partner",
    accent: "from-[#059669] to-[#0284C7]",
  },
  {
    id: 4,
    service: "HR Consulting",
    headline: "Transform Your HR Operations",
    subtext: "End-to-end HR consulting — from talent acquisition strategy to performance management systems, we modernise your entire people function.",
    cta: "Explore HR Solutions",
    href: "/services/hr-consulting",
    image: "/images/cta_hr.png",
    badge: "⚡ AI-Powered Talent Pipeline",
    accent: "from-[#7C3AED] to-[#DB2777]",
  },
];

export function CTASection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setTimeout(next, 5000);
    return () => clearTimeout(timer);
  }, [current, next]);

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-15px_rgba(4,43,107,0.35)] bg-[#003A70] group/slider" style={{ minHeight: 480 }}>
          
          <AnimatePresence custom={direction} mode="sync">
            <motion.div
              key={slide.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 flex flex-col md:flex-row items-stretch"
            >
              {/* Left: Text Content */}
              <div className="relative z-10 flex-1 flex flex-col justify-center p-10 md:p-14 lg:p-20 md:max-w-[55%]">
                {/* Background gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#003A70] via-[#003A70]/95 to-transparent pointer-events-none" />
                <div className={`absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr ${slide.accent} opacity-20 blur-[120px] pointer-events-none`} />

                <div className="relative z-10 space-y-6">
                  {/* Service Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="inline-flex items-center gap-2"
                  >
                    <span className={`text-xs font-black px-4 py-1.5 rounded-full bg-gradient-to-r ${slide.accent} text-white tracking-widest uppercase shadow-lg`}>
                      {slide.service}
                    </span>
                    <span className="text-sm text-white/60 font-medium">{slide.badge}</span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white leading-tight"
                  >
                    {slide.headline}
                  </motion.h2>

                  {/* Subtext */}
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-white/75 text-base md:text-lg leading-relaxed max-w-md"
                  >
                    {slide.subtext}
                  </motion.p>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="flex flex-wrap gap-4 pt-2"
                  >
                    <Link href={slide.href}>
                      <button className={`flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r ${slide.accent} text-white font-bold text-sm shadow-xl hover:opacity-90 hover:scale-105 active:scale-95 transition-all`}>
                        {slide.cta} <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all backdrop-blur-sm">
                        Contact Us <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative flex-1 md:min-w-[45%] min-h-[260px] md:min-h-0 overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.service}
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Gradient overlay on left edge for blend */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#003A70] via-[#003A70]/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all backdrop-blur-sm opacity-0 group-hover/slider:opacity-100"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all backdrop-blur-sm opacity-0 group-hover/slider:opacity-100"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-30">
            <motion.div
              key={`progress-${current}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

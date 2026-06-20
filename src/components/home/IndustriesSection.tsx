"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, Cpu, Users, Hotel, Stethoscope } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare",
    description:
      "We partner with hospitals, clinics, and healthcare networks to source skilled medical professionals — from doctors and nurses to hospital administrators and allied health workers. Our deep understanding of clinical requirements ensures rapid, quality placements.",
    imageUrl:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop",
    href: "/industries/healthcare",
  },
  {
    id: "medical-devices",
    icon: Stethoscope,
    name: "Medical Devices",
    description:
      "The medical devices sector demands specialized technical talent. We connect leading medtech companies with experienced engineers, regulatory specialists, and sales professionals who understand the stringent demands of this rapidly evolving industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    href: "/industries/medical-devices",
  },
  {
    id: "eldercare",
    icon: Users,
    name: "Eldercare",
    description:
      "With India's aging population growing rapidly, quality eldercare is in high demand. We recruit compassionate, trained caregivers, geriatric nurses, and care facility managers to ensure the highest standards of senior care across the country.",
    imageUrl:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop",
    href: "/industries/eldercare",
  },
  {
    id: "hospitality",
    icon: Hotel,
    name: "Hospitality",
    description:
      "From luxury resorts to boutique hotels, we provide the hospitality industry with front-of-house and back-of-house talent — including guest relations, F&B operations, revenue management, and executive leadership for hospitality brands across India.",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    href: "/industries/hospitality",
  },
  {
    id: "it",
    icon: Cpu,
    name: "Information Technology",
    description:
      "We enable access to specialized IT talent across project-based and long-term engagements. Our staffing and managed service models support contract and permanent roles in data science, cybersecurity, AI/ML, cloud, and other emerging technologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200&auto=format&fit=crop",
    href: "/industries/technology",
  },
];

export function IndustriesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIndustry = industries.find((i) => i.id === activeId);

  return (
    <section className="bg-[#111827] relative overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-8 lg:px-16 pt-20 pb-10">
        <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
          Sectors We Serve
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-heading font-bold text-white leading-[1.15] max-w-3xl">
          Industries{" "}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            We Serve
          </span>
        </h2>
      </div>

      {/* Industry List */}
      <div className="container mx-auto px-8 lg:px-16 pb-20 relative">
        {industries.map((industry, index) => {
          const isActive = activeId === industry.id;
          const Icon = industry.icon;

          return (
            <div
              key={industry.id}
              onMouseEnter={() => setActiveId(industry.id)}
              onMouseLeave={() => setActiveId(null)}
              className={`relative border-b border-white/10 cursor-pointer transition-all duration-300 ${
                index === 0 ? "border-t" : ""
              }`}
            >
              <div className="flex items-start gap-6 py-7">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-blue-400"
                    }`}
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${
                      isActive ? "text-blue-400" : "text-white/80"
                    }`}
                  >
                    {industry.name}
                  </h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-400 text-sm leading-relaxed mt-3 max-w-xl">
                          {industry.description}
                        </p>
                        <a
                          href={industry.href}
                          className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-semibold mt-4 hover:text-blue-300 transition-colors group"
                        >
                          Know more{" "}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Image — slides in from right on hover */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.97 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 40, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute right-0 top-0 bottom-0 w-[38%] z-10 pointer-events-none"
                  >
                    <div className="h-full relative rounded-l-3xl overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]">
                      <Image
                        src={industry.imageUrl}
                        alt={industry.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/60 to-transparent" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCMSPage } from "@/services/queries";
import { Target, Lightbulb } from "lucide-react";

export function MissionVision() {
  const { data: pageData, isLoading } = useCMSPage("about-mission");
  
  // Extract content safely or provide premium fallbacks
  const getExtractedContent = () => {
    if (!pageData?.content) return { mission: "", vision: "" };
    
    // In a real scenario, the admin might write standard HTML. We'll do a simple parsing 
    // or just render the HTML in a premium way.
    return { html: pageData.content };
  };

  const content = getExtractedContent();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(4,43,107,0.06)] border border-gray-100 group hover:shadow-[0_20px_50px_rgba(4,43,107,0.12)] hover:-translate-y-2 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1E88E5] to-[#00A86B] p-[2px] shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-[#1E88E5]" />
              </div>
            </div>
            <h2 className="text-3xl font-heading font-black text-[#003A70]">Our Mission</h2>
            <div className="text-lg text-[#2F3440]/80 font-medium leading-relaxed">
              {content.html ? (
                <div dangerouslySetInnerHTML={{ __html: content.html }} />
              ) : (
                <p>
                  To connect businesses with exceptional talent through ethical, technology-enabled recruitment and advisory services.
                </p>
              )}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(4,43,107,0.06)] border border-gray-100 group hover:shadow-[0_20px_50px_rgba(4,43,107,0.12)] hover:-translate-y-2 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00A86B] to-[#1E88E5] p-[2px] shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-[#00A86B]" />
              </div>
            </div>
            <h2 className="text-3xl font-heading font-black text-[#003A70]">Our Vision</h2>
            <div className="text-lg text-[#2F3440]/80 font-medium leading-relaxed">
              <p>
                To become one of India's most trusted workforce solutions companies.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

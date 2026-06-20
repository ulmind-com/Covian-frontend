"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const blogPosts = [
  {
    title: "The Future of IT Recruitment: Navigating the AI Era",
    category: "Technology",
    date: "Jun 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop",
    excerpt: "Explore how artificial intelligence and machine learning are reshaping the technology recruitment landscape, from automated screening to predictive talent mapping."
  },
  {
    title: "Healthcare Staffing Shortages: Strategies for Retention",
    category: "Healthcare",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    excerpt: "With clinical staff turnover at an all-time high, discover proven strategies that top hospitals are using to retain their most valuable medical professionals."
  },
  {
    title: "The Rise of Global Capability Centers (GCCs) in India",
    category: "Business Advisory",
    date: "May 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    excerpt: "India is becoming the world's GCC capital. Learn why global enterprises are setting up base here and how to build a scalable workforce model."
  },
  {
    title: "Hospitality Hiring: Balancing Speed with Quality",
    category: "Hospitality",
    date: "May 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    excerpt: "How luxury hotels and resorts are leveraging rapid recruitment solutions without compromising on the guest experience and service standards."
  },
  {
    title: "Labor Law Compliance: What Employers Need to Know in 2026",
    category: "Compliance",
    date: "May 02, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    excerpt: "A comprehensive guide to the latest labor law reforms, payroll compliance updates, and how to protect your organization from regulatory risks."
  },
  {
    title: "Building an Empathetic Eldercare Workforce",
    category: "Eldercare",
    date: "Apr 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    excerpt: "Why compassion cannot be taught but must be hired. Our framework for assessing emotional intelligence in senior care recruitment."
  }
];

export function BlogContent() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="flex-1 w-full pt-32 pb-24">
        
        {/* ── HERO SECTION ── */}
        <section className="px-6 mb-20 relative">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase">
                Our Blog
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-black text-[#042B6B] tracking-tight leading-[1.15] mb-6"
            >
              Insights, Trends & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                Workforce Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Stay updated with the latest recruitment trends, staffing insights, healthcare workforce developments, and industry best practices.
            </motion.p>
          </div>
        </section>

        {/* ── FEATURED POST ── */}
        <section className="px-6 mb-24 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group relative bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(4,43,107,0.08)] transition-all duration-500 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Featured Image */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-[450px] relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                    alt="Featured Blog Post" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-6">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-500" /> Today</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500" /> 10 min read</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#042B6B] leading-tight mb-6 group-hover:text-blue-600 transition-colors">
                    The CoVian Approach: Building Future-Ready Organizations Through Strategic Talent Acquisition
                  </h2>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 line-clamp-3">
                    As industries evolve at an unprecedented pace, the traditional approaches to recruitment are no longer sufficient. Discover how a strategic partnership with a workforce solutions provider can transform your talent acquisition from a reactive process into a proactive competitive advantage.
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/btn self-start">
                    Read Full Article
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── BLOG GRID ── */}
        <section className="px-6 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-2xl font-bold text-[#042B6B] mb-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span> Latest Articles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(4,43,107,0.08)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#042B6B] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-[#042B6B] leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <button className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-bold hover:text-blue-700 transition-colors group/link mt-auto">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

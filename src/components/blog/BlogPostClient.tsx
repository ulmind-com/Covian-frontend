"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";



function formatDateFull(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }) + " " + date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function BlogPostClient({ post }: { post: any }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <main className="flex-1 w-full pt-32 pb-24 bg-white selection:bg-blue-600 selection:text-white">
        
        <article className="container mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors group">
              <div className="w-8 h-8 rounded-full bg-slate-50 shadow-sm flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
              Back to Articles
            </Link>
          </motion.div>

          {/* ── HEADER SECTION ── */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            {post.category && (
              <div className="mb-6">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.15em]">
                  {post.category}
                </span>
              </div>
            )}
            
            {/* Main Heading (same font as hero section) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#003A70] leading-[1.15] mb-6">
              {post.title}
            </h1>

            {/* Sub Heading / Excerpt */}
            {post.excerpt && (
              <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-8 leading-snug">
                {post.excerpt}
              </h2>
            )}

            {/* Time and Author */}
            <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-slate-100">
              <div className="text-sm text-slate-500 font-medium">
                <span className="text-red-600 font-semibold">Updated</span> - {formatDateFull(post.updated_at || post.published_at || post.created_at)}
              </div>
              <div className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-4">
                {post.author || "COVIAN BUREAU"}
                <div className="flex items-center gap-3 ml-auto text-slate-400">
                  <button className="hover:text-blue-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="hover:text-blue-600 transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.header>

          {/* ── IMAGE SECTION ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full mb-10"
          >
            {post.featured_image_url ? (
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100 rounded-lg">
                <Image
                  src={post.featured_image_url}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100">
                  <div className="text-slate-300 flex flex-col items-center gap-4">
                    <Image src="/logo.png" alt="Covian" width={80} height={80} className="opacity-20 grayscale" />
                    <span className="font-semibold text-sm uppercase tracking-widest">Covian Insights</span>
                  </div>
              </div>
            )}
          </motion.div>

          {/* ── CONTENT SECTION ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Rich Text Content */}
            <div 
              className="prose prose-lg prose-slate max-w-none whitespace-pre-wrap
              prose-headings:font-black prose-headings:text-[#003A70] prose-headings:tracking-tight 
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-700 prose-p:leading-loose prose-p:mb-8 prose-p:text-[1.1rem]
              prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-sm prose-img:my-10
              prose-strong:text-[#003A70] prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-6 prose-ul:text-slate-700 prose-ul:mb-8
              prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">Tags:</span>
                {post.tags.map((tag: string) => (
                  <span key={tag} className="px-4 py-2 bg-slate-50 text-[#003A70] hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer text-sm font-bold rounded-lg border border-slate-100">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </article>
      </main>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Loader2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useQuery } from "@tanstack/react-query";
import { getPublicNews } from "@/services/admin-api";

function calculateReadTime(content: string) {
  if (!content) return "1 min read";
  const words = content.trim().split(/\s+/).length;
  const mins = Math.ceil(words / 200);
  return `${mins} min read`;
}

function formatDate(dateString: string) {
  if (!dateString) return "Recently";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogContent() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["public-news"],
    queryFn: () => getPublicNews(),
  });

  const featuredPost = posts.find((p: any) => p.is_featured);
  const regularPosts = posts;

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
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-black text-[#003A70] tracking-tight leading-[1.15] mb-6"
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

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* ── FEATURED POST ── */}
            {featuredPost && (
              <section className="px-6 mb-24 relative z-10">
                <div className="container mx-auto max-w-6xl">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="group relative bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(4,43,107,0.08)] transition-all duration-500 overflow-hidden block"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Featured Image */}
                      <div className="w-full lg:w-1/2 h-[300px] lg:h-[450px] relative overflow-hidden bg-slate-100">
                        {featuredPost.featured_image_url ? (
                          <Image
                            src={featuredPost.featured_image_url}
                            alt={featuredPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-100">
                            No Image
                          </div>
                        )}
                        <div className="absolute top-6 left-6">
                          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                            Featured
                          </span>
                        </div>
                      </div>

                      {/* Featured Content */}
                      <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-6">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-blue-500" />{" "}
                            {formatDate(featuredPost.published_at || featuredPost.created_at)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-blue-500" />{" "}
                            {calculateReadTime(featuredPost.content)}
                          </span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-[#003A70] leading-tight mb-6 group-hover:text-blue-600 transition-colors line-clamp-3">
                          {featuredPost.title}
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed mb-10 line-clamp-3">
                          {featuredPost.excerpt || "Read this article to learn more..."}
                        </p>

                        <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/btn self-start">
                          Read Full Article
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-colors">
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* ── BLOG GRID ── */}
            {regularPosts.length > 0 && (
              <section className="px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                  <h3 className="text-2xl font-bold text-[#003A70] mb-10 flex items-center gap-3">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span> Latest Articles
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post: any, idx: number) => (
                      <motion.div
                        key={post.slug || idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="group bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(4,43,107,0.08)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden"
                      >
                        {/* Image */}
                        <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                          {post.featured_image_url ? (
                            <Image
                              src={post.featured_image_url}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-100">
                              No Image
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#003A70] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                              {post.category || "Article"}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-1">
                          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" /> {formatDate(post.published_at || post.created_at)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" /> {calculateReadTime(post.content)}
                            </span>
                          </div>

                          <h4 className="text-xl font-bold text-[#003A70] leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>

                          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                            {post.excerpt || "Read this article to learn more..."}
                          </p>

                          <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-bold hover:text-blue-700 transition-colors group/link mt-auto">
                            Read More
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

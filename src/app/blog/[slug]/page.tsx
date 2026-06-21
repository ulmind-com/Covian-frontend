import { getPublicNewsBySlug } from "@/services/admin-api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { BlogPostClient } from "@/components/blog/BlogPostClient";

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const post = await getPublicNewsBySlug(resolvedParams.slug);
    return {
      title: `${post.seo_title || post.title} | CoVian Advisory`,
      description: post.seo_description || post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.featured_image_url ? [{ url: post.featured_image_url }] : [],
      },
    };
  } catch (error) {
    return {
      title: "Blog | CoVian Advisory",
    };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  let post = null;
  try {
    const resolvedParams = await params;
    post = await getPublicNewsBySlug(resolvedParams.slug);
  } catch (error) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center py-32 px-6 text-center">
          <h1 className="text-3xl font-black text-slate-800 mb-4">Article Not Found</h1>
          <p className="text-slate-500 mb-8">The article you are looking for does not exist or has been removed.</p>
          <Link href="/blog" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
            Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Client Component renders the ultra-premium UI */}
      <BlogPostClient post={post} />

      <Footer />
    </div>
  );
}

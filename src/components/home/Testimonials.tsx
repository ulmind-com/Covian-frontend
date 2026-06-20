"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useTestimonials } from "@/services/queries";

const FALLBACK_REVIEWS = [
  { client_name: "Alexandra Wright", client_designation: "VP of HR, TechFlow Enterprise", content: "The quality of candidates and the speed of the matching algorithm is unprecedented. We hired our entire engineering leadership team through this platform in under 3 weeks.", rating: 5, client_photo_url: "" },
  { client_name: "Michael Chen", client_designation: "Founder & CEO, QuantStack", content: "As a boutique finance firm, we need highly specialized quants. Covian's vetting process is rigorous, and the candidates they deliver are truly top 1% globally.", rating: 5, client_photo_url: "" },
  { client_name: "Sarah Jenkins", client_designation: "Director of Talent, Innovate Inc", content: "The automated pipeline and integrated interview scheduling saved my team hundreds of hours. It is the most premium SaaS recruitment tool we have ever used.", rating: 5, client_photo_url: "" },
  { client_name: "David Rodriguez", client_designation: "CTO, Nexus Health", content: "The integration capabilities and seamless data sync meant we were up and running in days, not months. Highly recommended for fast-scaling teams.", rating: 5, client_photo_url: "" },
  { client_name: "Emma Thompson", client_designation: "Head of Operations, Global Retail", content: "We've seen a 40% reduction in time-to-hire. Covian provides an incredible experience for both the candidates and our internal recruiting team.", rating: 5, client_photo_url: "" },
  { client_name: "James Wilson", client_designation: "VP of Engineering, CloudNative", content: "Finding senior cloud architects was our biggest bottleneck. This platform delivered top-tier talent consistently, completely transforming our hiring pipeline.", rating: 5, client_photo_url: "" },
];

export function Testimonials() {
  const { data: cmsTestimonials } = useTestimonials();
  const reviews = (cmsTestimonials && cmsTestimonials.length > 0) ? cmsTestimonials : FALLBACK_REVIEWS;
  const firstRow = [...reviews, ...reviews];

  const ReviewCard = ({ review }: { review: any }) => (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,123,255,0.15)] transition-all flex flex-col justify-between w-[280px] md:w-[320px] flex-shrink-0 mx-3">
      <div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(review.rating || 5)].map((_, j) => (
            <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <Quote className="w-6 h-6 text-blue-100 mb-3" />
        <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
          &quot;{review.content}&quot;
        </p>
      </div>
      
      <div className="flex items-center gap-3 pt-4 border-t border-slate-50 mt-auto">
        {review.client_photo_url ? (
          <img src={review.client_photo_url} alt={review.client_name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-inner flex-shrink-0">
            {(review.client_name || "?").charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-sm text-[#0b1b3d] line-clamp-1">{review.client_name}</h4>
          <p className="text-xs text-slate-500 line-clamp-1">{review.client_designation || review.client_company}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-[#042B6B] mb-6">
            Client Experience
          </h2>
          <p className="text-lg text-slate-500">
            Hear from the global leaders who have transformed their workforce with our platform.
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden flex flex-col gap-8 pb-10">
        <div className="flex w-full group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
            {firstRow.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

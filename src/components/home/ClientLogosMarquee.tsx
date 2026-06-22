"use client";
/* eslint-disable */

import { useClientLogos } from "@/services/queries";

// Fallback logos (বড় company-র SVG/text-based placeholders)
const FALLBACK_LOGOS = [
  { _id: "1", name: "Infosys", logo_url: "", website_url: "" },
  { _id: "2", name: "Wipro", logo_url: "", website_url: "" },
  { _id: "3", name: "TCS", logo_url: "", website_url: "" },
  { _id: "4", name: "HCL Tech", logo_url: "", website_url: "" },
  { _id: "5", name: "Accenture", logo_url: "", website_url: "" },
  { _id: "6", name: "Cognizant", logo_url: "", website_url: "" },
  { _id: "7", name: "Tech Mahindra", logo_url: "", website_url: "" },
  { _id: "8", name: "Capgemini", logo_url: "", website_url: "" },
];

function LogoItem({ logo }: { logo: any }) {
  const inner = (
    <div className="flex items-center justify-center h-20 px-10 mx-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group flex-shrink-0">
      {logo.logo_url ? (
        <img
          src={logo.logo_url}
          alt={logo.name}
          className="h-14 max-w-[180px] object-contain transition-all duration-300"
        />
      ) : (
        <span className="text-lg font-black text-slate-400 group-hover:text-blue-600 tracking-tight transition-colors whitespace-nowrap">
          {logo.name}
        </span>
      )}
    </div>
  );

  if (logo.website_url) {
    return (
      <a href={logo.website_url} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return inner;
}

export function ClientLogosMarquee() {
  const { data: cmsLogos } = useClientLogos();
  const logos = (cmsLogos && cmsLogos.length > 0) ? cmsLogos : FALLBACK_LOGOS;
  // Duplicate once for seamless loop (CSS marquee goes -50%)
  const track = [...logos, ...logos];

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 mb-8 text-center relative z-10">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.25em]">
          Trusted by leading organizations
        </p>
      </div>

      {/* Marquee track — uses existing global animate-marquee class */}
      <div className="flex w-full group overflow-hidden">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
          {track.map((logo: any, i: number) => (
            <LogoItem key={`${logo._id}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

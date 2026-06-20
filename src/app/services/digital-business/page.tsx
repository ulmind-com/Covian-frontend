import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Digital Business Solutions | CoVian Advisory",
  description: "Social media management, content creation, branding, and digital marketing support.",
};

export default function DigitalBusinessPage() {
  return (
    <ServiceLayout
      tag="Digital Business"
      title="Amplify Your Brand,"
      titleHighlight="Dominate Digitally"
      subtitle="Social Media, Branding & Digital Marketing"
      description="CoVian Advisory provides end-to-end digital business solutions — from social media management and content creation to brand identity and performance marketing. We help your business build a powerful online presence that resonates, engages, and converts."
      features={[
        "Full-Service Social Media Management",
        "SEO-Optimized Content Creation",
        "Brand Identity & Positioning",
        "360° Digital Marketing Campaigns",
      ]}
      imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "150+", label: "Brands Grown" },
        { value: "3x", label: "Avg. Engagement Uplift" },
        { value: "98%", label: "Client Retention" },
      ]}
      heroBadges={["Social Media", "SEO & Content", "Paid Ads", "Brand Strategy"]}
      sectionLabel="What We Provide"
      sectionTitle="Why Your Digital Presence"
      sectionHighlight="Matters More Than Ever"
      sectionBody={[
        "In a world where your customers make decisions before they even speak to you, your digital presence is your first — and most important — impression. A weak online identity is a lost opportunity, every single day.",
        "Most businesses invest in a website and call it digital marketing. We go deeper — building cohesive brand narratives, audience-first content strategies, and data-backed campaigns that generate real, measurable ROI across every channel.",
        "From LinkedIn thought leadership and Instagram content calendars to Google Ads and email campaigns, CoVian delivers an integrated digital approach that makes your brand impossible to ignore.",
      ]}
      sectionCards={[
        { icon: "📱", title: "Consistent Presence", description: "Cohesive, professional brand presence across all digital platforms — from LinkedIn to Instagram." },
        { icon: "✍️", title: "Audience-First Content", description: "Content that connects with your target audience and builds long-term brand loyalty." },
        { icon: "📊", title: "Performance Marketing", description: "Data-backed campaigns optimized continuously for maximum ROI on your marketing spend." },
        { icon: "🚀", title: "Holistic Growth", description: "Integrated strategy covering SEO, paid ads, email marketing, and influencer outreach." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Consistent Brand Presence", description: "Maintain a cohesive, professional presence across all digital channels — from LinkedIn to Google." },
        { title: "Audience-First Content Strategy", description: "Content that genuinely connects, builds trust, and drives long-term brand loyalty." },
        { title: "Performance-Driven Marketing", description: "Every campaign backed by data, continuously analyzed and optimized for maximum ROI." },
        { title: "Holistic Digital Growth", description: "Integrated 360° strategy covering SEO, paid ads, email marketing, and influencer outreach." },
      ]}
      process={[
        { title: "Discover", description: "Audit your digital presence, analyze competitors, and define your brand voice and target audience." },
        { title: "Strategize", description: "Build a comprehensive digital roadmap with goals, KPIs, channel mix, and content calendar." },
        { title: "Execute", description: "Launch campaigns, publish content, and activate all digital touchpoints with precision." },
        { title: "Optimize", description: "Monitor performance in real time, A/B test, iterate, and scale what works best." },
      ]}
    />
  );
}

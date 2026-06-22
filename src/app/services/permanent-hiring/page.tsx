import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Permanent Hiring | CoVian Advisory",
  description: "End-to-end recruitment for full-time roles across all functions, levels, and geographies — with quality and speed built in.",
};

export default function PermanentHiringPage() {
  return (
    <ServiceLayout
      tag="Permanent Hiring"
      title="Secure Top-Tier Talent,"
      titleHighlight="For Long-Term Success"
      subtitle="Strategic Talent Acquisition"
      description="CoVian Advisory connects organizations with exceptional full-time professionals through a rigorous, multi-stage recruitment process. We deliver the right candidates tailored to your culture and strategic vision."
      features={[
        "End-to-end Recruitment Lifecycle",
        "Role-Specific Competency Mapping",
        "Cultural Fit & Alignment Assessment",
        "Pan-India Talent Network",
      ]}
      imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "3,200+", label: "Placements Done" },
        { value: "48hr", label: "Average Turnaround" },
        { value: "98%", label: "Client Satisfaction" },
      ]}
      heroBadges={["All Industries", "Pan-India Network", "Quality Assured", "Dedicated Support"]}
      sectionLabel="Our Approach"
      sectionTitle="Why Permanent Hiring Expertise"
      sectionHighlight="Matters More Than Ever"
      sectionBody={[
        "Finding the right candidate is more than matching a job description. It requires a deep understanding of the role, the company culture, and the talent landscape — something generic portals cannot offer.",
        "Our recruiters are domain specialists. Whether you need a mid-level engineer or a senior financial analyst, we leverage our proprietary database, referral networks, and active talent pipelines to deliver profiles that are the right fit — not just an available option.",
        "CoVian Advisory's structured process ensures every candidate is rigorously screened for skills, cultural alignment, and long-term potential before they reach your desk.",
      ]}
      sectionCards={[
        { icon: "🎯", title: "Precision Matching", description: "We match candidates based on skills, culture fit, and growth potential." },
        { icon: "⚡", title: "Fast Delivery", description: "Receive shortlisted, pre-screened profiles within 48–72 hours." },
        { icon: "🌐", title: "Pan-India Reach", description: "Access to active talent across all major metros and tier-2 cities in India." },
        { icon: "🔒", title: "Quality Vetting", description: "Comprehensive background checks and competency evaluations." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1513171920216-2640b288471b?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Pan-India Talent Network", description: "Access our extensive database of pre-screened professionals across all major industries." },
        { title: "Industry-Specific Expertise", description: "Our recruiters are domain specialists — bringing deep sector knowledge to every search mandate." },
        { title: "Quality-First Screening", description: "Every candidate goes through structured multi-stage evaluation." },
        { title: "Fast Turnaround", description: "Our streamlined process allows us to present shortlisted profiles within 48–72 hours." },
      ]}
      process={[
        { title: "Understand", description: "Deep-dive consultation to understand your culture, role requirements, and ideal candidate profile." },
        { title: "Source", description: "Multi-channel sourcing including job boards, LinkedIn, referrals, and our proprietary database." },
        { title: "Screen", description: "Structured interviews, skills tests, and background verification for every candidate." },
        { title: "Place", description: "Smooth onboarding facilitation and post-placement support for long-term success." },
      ]}
    />
  );
}

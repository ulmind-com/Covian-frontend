import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Recruitment & Staffing Solutions | CoVian Advisory",
  description: "Talent acquisition, permanent staffing, temporary staffing, and executive search.",
};

export default function RecruitmentStaffingPage() {
  return (
    <ServiceLayout
      tag="Recruitment & Staffing"
      title="Find the Right Talent,"
      titleHighlight="Faster & Smarter"
      subtitle="Strategic Talent Acquisition"
      description="CoVian Advisory connects organizations with top-tier professionals through a rigorous, multi-stage recruitment process. From permanent staffing to executive search, we deliver the right candidates tailored to your culture and strategic vision."
      features={[
        "Talent Acquisition at all levels",
        "Permanent & Temporary Staffing",
        "Executive Search & Headhunting",
        "Pan-India Talent Network",
      ]}
      imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "3,200+", label: "Placements Done" },
        { value: "48hr", label: "Average Turnaround" },
        { value: "98%", label: "Client Satisfaction" },
      ]}
      heroBadges={["All Industries", "Pan-India Network", "Quality Assured", "Dedicated Support"]}
      sectionLabel="What We Provide"
      sectionTitle="Why Recruitment Expertise"
      sectionHighlight="Matters More Than You Think"
      sectionBody={[
        "Finding the right candidate is more than matching a job description. It requires a deep understanding of the role, the company culture, and the talent landscape — something most generic portals cannot offer.",
        "Our recruiters are domain specialists. Whether you need a mid-level engineer in Pune or a CXO for your Mumbai office, we leverage our proprietary database, referral networks, and active talent pipelines to deliver profiles that are the right fit — not just an available option.",
        "CoVian Advisory's structured process ensures every candidate is rigorously screened for skills, cultural alignment, and long-term potential before they reach your desk.",
      ]}
      sectionCards={[
        { icon: "🎯", title: "Precision Matching", description: "We match candidates based on skills, culture fit, and growth potential — not just keywords." },
        { icon: "⚡", title: "48-Hour Delivery", description: "Receive shortlisted, pre-screened profiles within 48–72 hours of mandate confirmation." },
        { icon: "🌐", title: "Pan-India Reach", description: "Access to active talent across all major metros and tier-2 cities in India." },
        { icon: "🔒", title: "Confidential Search", description: "Discreet and professional handling for sensitive leadership and executive hires." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Pan-India Talent Network", description: "Access our extensive database of pre-screened professionals across all major industries and geographies in India." },
        { title: "Industry-Specific Expertise", description: "Our recruiters are domain specialists — bringing deep sector knowledge to every search mandate." },
        { title: "Quality-First Screening", description: "Every candidate goes through structured multi-stage evaluation before being presented to you." },
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

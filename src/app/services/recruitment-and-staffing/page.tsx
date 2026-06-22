import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Recruitment & Staffing | CoVian Advisory",
  description: "Full-cycle recruitment and staffing solutions for permanent and temporary roles across industries.",
};

export default function RecruitmentAndStaffingPage() {
  return (
    <ServiceLayout
      tag="Recruitment & Staffing"
      title="The Right Talent,"
      titleHighlight="Right Now."
      subtitle="Full-Cycle Hiring Across All Functions & Levels"
      description="CoVian Advisory delivers end-to-end recruitment and staffing solutions — from sourcing and screening to offer management — backed by a deep talent pipeline built over years of industry engagement."
      features={[
        "Permanent & Temporary Hiring",
        "Multi-Level & Multi-Function Roles",
        "Deep Talent Pipeline",
        "Fast Time-to-Fill",
      ]}
      imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "500+", label: "Placements Made" },
        { value: "72hrs", label: "Avg Time-to-Shortlist" },
        { value: "95%", label: "Client Retention Rate" },
      ]}
      heroBadges={["Permanent Hiring", "Temp Staffing", "All Functions", "Pan-India Network"]}
      sectionLabel="Our Recruitment Edge"
      sectionTitle="Hiring That Moves"
      sectionHighlight="At Business Speed"
      sectionBody={[
        "Traditional recruitment is slow, expensive, and often misaligned with business needs. CoVian Advisory changes that with a structured, multi-channel approach that delivers quality talent fast.",
        "Our recruitment practice covers all functions — from entry-level to senior management — across Healthcare, Manufacturing, IT, BFSI, Retail, and Education.",
        "Every candidate goes through rigorous screening, competency assessment, and cultural fit evaluation before being presented to you."
      ]}
      sectionCards={[
        { icon: "🏆", title: "Quality First", description: "Rigorous screening ensures only the top candidates reach your interview desk." },
        { icon: "⚡", title: "Speed", description: "Shortlists delivered within 72 hours of mandate confirmation." },
        { icon: "🌐", title: "Pan-India Network", description: "Access to a vast talent pool across all major Indian cities and tier-2 markets." },
        { icon: "🤝", title: "End-to-End Support", description: "From sourcing to offer negotiation and post-joining follow-up." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Structured Hiring Methodology", description: "Our 5-stage process (Requirement, Sourcing, Screening, Interview, Offer) ensures consistency and quality." },
        { title: "Industry Specialists", description: "Dedicated recruitment teams with deep knowledge of your specific industry and function." },
        { title: "Replacement Guarantee", description: "We stand behind our placements with replacement guarantees for every hire." },
        { title: "Transparent Reporting", description: "Regular updates and data-driven reporting at every stage of the hiring process." }
      ]}
      process={[
        { title: "Requirement Gathering", description: "Deep-dive session to understand the role, culture, and ideal candidate profile." },
        { title: "Multi-Channel Sourcing", description: "Leveraging our talent pool, job boards, referrals, and passive candidate outreach." },
        { title: "Screening & Assessment", description: "Competency-based interviews, skill tests, and cultural fit evaluations." },
        { title: "Interview Coordination", description: "Scheduling, feedback collection, and offer management through to joining." }
      ]}
    />
  );
}

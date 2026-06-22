import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Digital Business Solutions | CoVian Advisory",
  description: "Digital transformation and technology staffing solutions to future-proof your business.",
};

export default function DigitalBusinessPage() {
  return (
    <ServiceLayout
      tag="Digital Business"
      title="Digital Talent,"
      titleHighlight="Future-Ready Teams."
      subtitle="Technology Staffing & Digital Transformation Support"
      description="CoVian Advisory helps organizations build digital capabilities by sourcing specialized technology talent and supporting digital transformation initiatives with expert resources."
      features={[
        "Technology Talent Acquisition",
        "Digital Transformation Support",
        "IT Staffing & Consulting",
        "Product & Engineering Talent",
      ]}
      imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "200+", label: "Tech Placements" },
        { value: "50+", label: "Tech Domains" },
        { value: "48hrs", label: "Avg Shortlist Time" },
      ]}
      heroBadges={["IT Staffing", "Digital Transformation", "Product & Engineering", "Tech Consulting"]}
      sectionLabel="Digital Expertise"
      sectionTitle="Building Digital"
      sectionHighlight="Capabilities"
      sectionBody={[
        "The digital talent gap is one of the most critical challenges facing modern organizations. CoVian bridges that gap with a deep network of technology professionals across all domains.",
        "From software engineers and data scientists to digital transformation consultants and product managers — we place professionals who drive real digital outcomes.",
        "Our technology-specific vetting process ensures every candidate brings not just technical skills, but the problem-solving mindset your digital initiatives demand."
      ]}
      sectionCards={[
        { icon: "💻", title: "Software Engineering", description: "Full-stack, backend, frontend, and mobile engineering talent across all tech stacks." },
        { icon: "📊", title: "Data & Analytics", description: "Data scientists, analysts, and ML engineers to power your data strategy." },
        { icon: "🔒", title: "Cybersecurity", description: "Information security professionals to protect your digital assets." },
        { icon: "☁️", title: "Cloud & DevOps", description: "Cloud architects and DevOps engineers for modern infrastructure." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Specialized Tech Network", description: "Access to a pre-vetted pool of technology professionals across 50+ specializations." },
        { title: "Technical Vetting", description: "Candidates are assessed through technical evaluations and real-world problem-solving tests." },
        { title: "Rapid Deployment", description: "Fast shortlisting and placement to keep your digital projects on track." },
        { title: "Flexible Engagement", description: "Hire on contract, permanent, or project basis depending on your initiative needs." }
      ]}
      process={[
        { title: "Tech Requirement Analysis", description: "Understanding the technical stack, role scope, and team structure needed." },
        { title: "Talent Sourcing", description: "Targeting passive and active candidates from our specialized tech network." },
        { title: "Technical Assessment", description: "Skill evaluations, coding assessments, and panel interviews." },
        { title: "Placement & Support", description: "Seamless onboarding with continued support during the initial months." }
      ]}
    />
  );
}

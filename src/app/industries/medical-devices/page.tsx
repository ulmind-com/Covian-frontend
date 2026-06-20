import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Medical Devices Industry | CoVian Advisory",
  description: "Specialized talent acquisition for leading medtech and medical device companies.",
};

export default function MedicalDevicesPage() {
  return (
    <ServiceLayout
      tag="Industry Focus"
      title="Medical Devices"
      titleHighlight="Talent Solutions"
      subtitle="Strategic Hiring for the MedTech Sector"
      description="The medical devices sector demands specialized technical talent that is both technically rigorous and commercially sharp. We connect leading medtech companies with experienced R&D engineers, regulatory affairs specialists, clinical application specialists, and sales professionals who understand the stringent demands of this rapidly evolving industry."
      features={[
        "R&D & Engineering Recruitment",
        "Regulatory Affairs Specialists",
        "Clinical Application Specialists",
        "Medical Device Sales Professionals",
      ]}
      imageUrl="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "150+", label: "MedTech Placements" },
        { value: "96%", label: "Offer Acceptance Rate" },
        { value: "30+", label: "MedTech Clients" },
      ]}
      heroBadges={["R&D Engineering", "Regulatory Affairs", "Clinical Specialists", "Sales & Marketing"]}
      sectionLabel="Why MedTech Staffing Is Different"
      sectionTitle="Beyond Technical Skills —"
      sectionHighlight="Domain Expertise Matters"
      sectionBody={[
        "Hiring in the medical devices space is unlike any other industry. Candidates need a rare combination of regulatory awareness (CDSCO, CE marking, FDA), deep technical knowledge, and the ability to engage clinical customers effectively.",
        "Generic recruitment firms struggle here. CoVian Advisory's MedTech practice is built on relationships with domain professionals — from biomedical engineers to quality assurance managers — across implants, diagnostics, surgical instruments, and digital health.",
        "We help companies scale their product, regulatory, and commercial teams with professionals who can hit the ground running in a highly specialized environment.",
      ]}
      sectionCards={[
        { icon: "🔬", title: "Deep Domain Expertise", description: "Recruiters with genuine understanding of MedTech regulatory and commercial dynamics." },
        { icon: "📜", title: "Regulatory Specialists", description: "Source RA professionals with CDSCO, CE, and FDA compliance knowledge." },
        { icon: "💼", title: "Commercial Teams", description: "Sales, marketing, and clinical support professionals with device-specific expertise." },
        { icon: "🏭", title: "Manufacturing & QA", description: "Quality assurance, manufacturing, and supply chain talent for device production." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Niche Talent Access", description: "Access a curated network of MedTech professionals not available on mainstream job boards." },
        { title: "Regulatory Know-How", description: "We understand CDSCO, ISO 13485, and CE/FDA requirements — and hire accordingly." },
        { title: "Speed-to-Market Support", description: "Help scale your team fast when launching new products or entering new markets." },
        { title: "Confidential Executive Search", description: "Discreet CXO and business head searches for competitive, sensitive mandates." },
      ]}
      process={[
        { title: "Brief", description: "Deep understanding of your product, regulatory scope, and ideal candidate profile." },
        { title: "Map", description: "Market mapping of available talent across MedTech segment-specific roles." },
        { title: "Engage", description: "Confidential outreach to passive and active candidates through our network." },
        { title: "Close", description: "End-to-end offer management, negotiation support, and onboarding facilitation." },
      ]}
    />
  );
}

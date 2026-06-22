import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Manufacturing Industry | CoVian Advisory",
  description: "Specialized recruitment for engineering, operations, and plant leadership roles across manufacturing sectors.",
};

export default function ManufacturingPage() {
  return (
    <ServiceLayout
      tag="Industry Focus"
      title="Manufacturing"
      titleHighlight="Talent Solutions"
      subtitle="Engineering & Operations Talent for Modern Manufacturing"
      description="CoVian Advisory partners with discrete and process manufacturers to source skilled engineers, plant managers, quality specialists, and supply chain professionals. We understand the technical depth and operational rigour that manufacturing roles demand."
      features={[
        "Plant Operations & Engineering Roles",
        "Quality & Safety Specialists",
        "Supply Chain & Logistics Talent",
        "Senior Manufacturing Leadership",
      ]}
      imageUrl="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "300+", label: "Manufacturing Placements" },
        { value: "48hr", label: "Avg Shortlist Time" },
        { value: "92%", label: "Retention at 1 Year" },
      ]}
      heroBadges={["Plant Engineering", "Quality & Safety", "Supply Chain", "Operations Leadership"]}
      sectionLabel="Why Manufacturing Staffing Matters"
      sectionTitle="Technical Talent,"
      sectionHighlight="Built for the Shop Floor"
      sectionBody={[
        "Manufacturing organizations require a very specific calibre of talent — professionals who combine technical expertise with hands-on operational experience. Finding this talent quickly is critical to keeping production lines running.",
        "CoVian Advisory's manufacturing practice maintains a deep talent pipeline across engineering disciplines, quality assurance, supply chain, and plant leadership. Our recruiters have domain knowledge that enables them to assess technical competency accurately.",
        "From lean manufacturing specialists to CXO-level plant heads, we source talent that delivers from day one.",
      ]}
      sectionCards={[
        { icon: "⚙️", title: "Plant Engineering", description: "Mechanical, electrical, and production engineers for all manufacturing verticals." },
        { icon: "🏭", title: "Operations Management", description: "Plant managers, production supervisors, and operations heads with proven track records." },
        { icon: "✅", title: "Quality & Safety", description: "QA/QC specialists, ISO auditors, and EHS professionals to maintain compliance." },
        { icon: "📦", title: "Supply Chain", description: "Procurement managers, logistics coordinators, and warehouse operations talent." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Technical Assessment", description: "Our domain-expert recruiters conduct technical pre-screening to ensure only qualified candidates reach you." },
        { title: "Rapid Turnaround", description: "Shortlists delivered within 48 hours for most manufacturing roles across experience levels." },
        { title: "Pan-India Industrial Coverage", description: "Talent sourcing from major industrial clusters including Pune, Chennai, Ahmedabad, and NCR." },
        { title: "Contract & Permanent Hiring", description: "Flexible engagement models to support project-based production surges and permanent requirements." }
      ]}
      process={[
        { title: "Technical Briefing", description: "Deep dive into the role's technical requirements, machinery, and operational context." },
        { title: "Talent Sourcing", description: "Targeted search across our manufacturing talent network and specialist job boards." },
        { title: "Technical Screening", description: "Domain-expert pre-screening including technical interviews and practical assessments." },
        { title: "Placement & Onboarding", description: "Fast placement with structured onboarding support for smooth integration." }
      ]}
    />
  );
}

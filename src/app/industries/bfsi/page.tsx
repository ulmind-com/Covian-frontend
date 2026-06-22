import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "BFSI Industry | CoVian Advisory",
  description: "Specialized recruitment for banking, financial services, and insurance sectors.",
};

export default function BfsiPage() {
  return (
    <ServiceLayout
      tag="Industry Focus"
      title="BFSI"
      titleHighlight="Talent Solutions"
      subtitle="Strategic Staffing for Banking, Financial Services & Insurance"
      description="CoVian Advisory serves banks, NBFCs, insurance companies, and fintech organizations with specialized talent across risk, compliance, operations, sales, and technology. We understand the regulatory landscape and technical depth that BFSI roles demand."
      features={[
        "Banking Operations & Branch Management",
        "Risk, Compliance & Audit",
        "Insurance Sales & Underwriting",
        "Fintech & Digital Banking Roles",
      ]}
      imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "250+", label: "BFSI Placements" },
        { value: "48hr", label: "Avg Shortlist Time" },
        { value: "96%", label: "Compliance Rate" },
      ]}
      heroBadges={["Banking", "Insurance", "Fintech", "Risk & Compliance"]}
      sectionLabel="Why BFSI Staffing Matters"
      sectionTitle="Regulated Talent,"
      sectionHighlight="Delivered with Precision"
      sectionBody={[
        "BFSI is one of the most regulated industries in India. Talent in this sector must combine technical expertise with a deep understanding of RBI, IRDAI, and SEBI mandates — making the wrong hire a compliance risk.",
        "CoVian Advisory's BFSI practice specializes in sourcing finance professionals who are not only technically qualified but also cleared through thorough background and reference verification.",
        "From branch banking to algorithmic trading, wealth management to insurtech, we cover the entire BFSI spectrum.",
      ]}
      sectionCards={[
        { icon: "🏦", title: "Banking & Operations", description: "Branch managers, relationship managers, credit analysts, and back-office operations teams." },
        { icon: "📊", title: "Risk & Compliance", description: "Risk officers, compliance managers, internal auditors, and regulatory reporting specialists." },
        { icon: "🛡️", title: "Insurance", description: "Underwriters, actuaries, claims managers, and insurance sales professionals." },
        { icon: "💳", title: "Fintech & Digital", description: "Product managers, data scientists, and engineers building the next generation of financial products." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Compliance-Cleared Candidates", description: "All BFSI candidates undergo thorough CIBIL, background, and reference verification." },
        { title: "Regulatory Knowledge", description: "Our recruiters understand RBI, IRDAI, and SEBI mandates to assess candidate suitability accurately." },
        { title: "Broad BFSI Network", description: "Active talent pool spanning PSU banks, private banks, NBFCs, insurance majors, and fintechs." },
        { title: "Senior Leadership Placement", description: "Specialized capability for CXO, VP, and senior management hiring in financial services." }
      ]}
      process={[
        { title: "Compliance Briefing", description: "Understanding the regulatory requirements, background check standards, and role scope." },
        { title: "Targeted Sourcing", description: "Accessing our BFSI-specific talent network for precise candidate identification." },
        { title: "Background Verification", description: "CIBIL checks, employment verification, and regulatory clearance for all candidates." },
        { title: "Placement & Integration", description: "Smooth handover with post-joining support to ensure regulatory compliance from day one." }
      ]}
    />
  );
}

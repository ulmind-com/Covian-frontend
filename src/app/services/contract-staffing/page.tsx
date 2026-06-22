import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Contract Staffing | CoVian Advisory",
  description: "Flexible contract staffing solutions for project-based needs with full compliance and payroll management.",
};

export default function ContractStaffingPage() {
  return (
    <ServiceLayout
      tag="Contract Staffing"
      title="Flex Teams,"
      titleHighlight="Delivered Fast."
      subtitle="Agile Workforce for Project-Based Needs"
      description="CoVian Advisory provides pre-vetted contract professionals across functions, enabling you to scale up quickly without the overhead of permanent hiring."
      features={[
        "Short-term & Long-term Contracts",
        "Full Compliance & Payroll Management",
        "Rapid Deployment",
        "Specialist Skill Sets",
      ]}
      imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "72hrs", label: "Avg Deployment" },
        { value: "500+", label: "Active Contractors" },
        { value: "100%", label: "Compliance Rate" },
      ]}
      heroBadges={["Short-Term Contracts", "Payroll Managed", "Rapid Deployment", "Specialist Talent"]}
      sectionLabel="Why Contract Staffing"
      sectionTitle="Scale Without"
      sectionHighlight="The Overhead"
      sectionBody={[
        "Contract staffing gives your organization the agility to respond to changing business demands without the long-term commitment of permanent hiring.",
        "CoVian manages all compliance, payroll, and HR administration so you can focus entirely on your core business.",
        "Our contractor network spans multiple disciplines and industries, giving you instant access to specialized talent."
      ]}
      sectionCards={[
        { icon: "⚡", title: "Rapid Deployment", description: "Contract professionals on-site within 72 hours of confirmation." },
        { icon: "📋", title: "Full Compliance", description: "We handle all statutory compliance, PF, ESI, and payroll obligations." },
        { icon: "🔧", title: "Specialist Skills", description: "Access niche technical and domain expertise for specific project requirements." },
        { icon: "💰", title: "Cost Efficiency", description: "Pay only for what you need — no long-term salary commitments." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "No Permanent Liability", description: "Avoid long-term employment obligations while still getting top-tier talent." },
        { title: "Pre-Vetted Professionals", description: "All contractors are background-verified and skill-tested before deployment." },
        { title: "Managed Payroll", description: "We handle salary disbursement, tax deductions, and statutory compliance end-to-end." },
        { title: "Seamless Conversion", description: "Option to convert high-performing contractors to permanent employees at any time." }
      ]}
      process={[
        { title: "Requirement Briefing", description: "Define the skill set, duration, and specific project requirements." },
        { title: "Talent Identification", description: "We shortlist from our pre-vetted contractor pool for immediate deployment." },
        { title: "Deployment", description: "Contractor onboarded and placed within 72 hours of finalization." },
        { title: "Ongoing Management", description: "CoVian manages attendance, payroll, compliance, and performance review." }
      ]}
    />
  );
}

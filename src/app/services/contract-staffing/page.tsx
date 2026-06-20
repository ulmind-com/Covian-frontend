import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Contract Staffing Solutions | CoVian Advisory",
  description: "Flexible, scalable contract staffing solutions tailored to your business needs.",
};

export default function ContractStaffingPage() {
  return (
    <ServiceLayout
      tag="Contract Staffing"
      title="Agile Workforce,"
      titleHighlight="Infinite Scalability."
      subtitle="Flexible Staffing Solutions"
      description="Adapt to market demands instantly with our premium contract staffing solutions. We provide top-tier talent on your terms, entirely managed and compliant."
      features={[
        "Rapid Deployment of Pre-Vetted Talent",
        "Flexible Project Durations",
        "Full Payroll & Benefits Management",
        "End-to-End Compliance Handling",
      ]}
      imageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "500+", label: "Active Contractors" },
        { value: "48h", label: "Deployment Time" },
        { value: "100%", label: "Compliance Assured" },
      ]}
      heroBadges={["IT Staffing", "Temp Staffing", "Project Based", "Payroll Management"]}
      sectionLabel="Why Contract Staffing"
      sectionTitle="Built for Speed"
      sectionHighlight="and Quality"
      sectionBody={[
        "Don't let rigid hiring structures slow your momentum. Our contract staffing model gives you the agility to execute mission-critical projects without long-term overhead.",
        "We handle all the administrative burden — from payroll processing to statutory compliance — so your core team can focus entirely on strategic deliverables.",
        "Whether you need a single specialized developer for a month or a team of fifty for a year, CoVian Advisory provides the scale and flexibility your modern business demands."
      ]}
      sectionCards={[
        { icon: "⚡", title: "Rapid Deployment", description: "Scale your team in days, not months, with our pre-vetted network of professionals." },
        { icon: "⏱️", title: "Flexible Duration", description: "Short-term projects or long-term integrations tailored exactly to your business needs." },
        { icon: "🛡️", title: "Full Compliance", description: "We handle all payroll, benefits, and local labor law compliance seamlessly." },
        { icon: "📉", title: "Cost Efficiency", description: "Convert fixed overheads into variable costs and optimize your operational budget." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Zero Administrative Burden", description: "We manage payroll, onboarding, exits, and statutory compliance." },
        { title: "Risk Mitigation", description: "Transfer co-employment risks and ensure 100% adherence to labor laws." },
        { title: "Access to Niche Skills", description: "Tap into specialized talent pools for short-term highly technical projects." },
        { title: "Budget Flexibility", description: "Pay only for what you use, turning fixed employee costs into variable operational expenses." }
      ]}
      process={[
        { title: "Requirement Analysis", description: "We analyze your project scope, duration, and specific skill requirements." },
        { title: "Talent Sourcing", description: "Rapid matching from our pre-vetted bench of professional contractors." },
        { title: "Deployment", description: "Seamless onboarding and integration into your existing project workflows." },
        { title: "Lifecycle Management", description: "Ongoing payroll, compliance, and performance management throughout the contract." }
      ]}
    />
  );
}

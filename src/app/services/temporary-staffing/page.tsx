import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Temporary Staffing | CoVian Advisory",
  description: "Flexible, on-demand staffing solutions to cover peaks, projects, and gaps without long-term commitment.",
};

export default function TemporaryStaffingPage() {
  return (
    <ServiceLayout
      tag="Temporary Staffing"
      title="Agile Workforce Solutions,"
      titleHighlight="On-Demand"
      subtitle="Flexible & Scalable Talent"
      description="Adapt to market demands swiftly with our temporary and contract staffing solutions. Whether you need to cover seasonal peaks, execute short-term projects, or fill unexpected gaps, we provide fully vetted professionals ready to deploy."
      features={[
        "Rapid Deployment Strategies",
        "Project-Based & Seasonal Staffing",
        "Contract-to-Hire Flexibility",
        "Complete Payroll & Compliance Management",
      ]}
      imageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "24hr", label: "Deployment Speed" },
        { value: "10k+", label: "Contractors Managed" },
        { value: "100%", label: "Compliance Assured" },
      ]}
      heroBadges={["Agile Workforce", "Compliance Ready", "Fast Deployment", "Scalable Teams"]}
      sectionLabel="The Value of Agility"
      sectionTitle="Why Temporary Staffing is a"
      sectionHighlight="Strategic Advantage"
      sectionBody={[
        "Modern businesses require extreme flexibility. Maintaining a bloated permanent workforce during slow periods drains capital, while being understaffed during peak seasons kills revenue and customer satisfaction.",
        "Temporary staffing transforms fixed labor costs into variable operational expenses. You get precisely the talent you need, exactly when you need it, without the long-term commitment and overhead.",
        "CoVian Advisory handles the entire lifecycle — from rapid sourcing to payroll management, statutory compliance, and offboarding — allowing you to focus on your core business.",
      ]}
      sectionCards={[
        { icon: "📈", title: "Cost Efficiency", description: "Convert fixed HR costs to variable expenses aligned with project demand." },
        { icon: "⚡", title: "Rapid Scale-Up", description: "Quickly deploy skilled professionals to meet urgent business needs." },
        { icon: "🛡️", title: "Compliance Management", description: "We handle PF, ESI, taxation, and all statutory labor compliances." },
        { icon: "🔄", title: "Contract-to-Hire", description: "Evaluate temporary staff on the job before making permanent offers." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Zero Administrative Burden", description: "We manage payroll, benefits, insurance, and all employee grievances." },
        { title: "Risk Mitigation", description: "Avoid misclassification risks and ensure 100% adherence to local labor laws." },
        { title: "Access to Specialized Skills", description: "Bring in niche experts for short-term projects without altering your permanent headcount." },
        { title: "Unmatched Flexibility", description: "Scale your workforce up or down dynamically based on real-time business needs." },
      ]}
      process={[
        { title: "Requirements Gathering", description: "Determine skill sets, duration, and volume required for the temporary mandate." },
        { title: "Rapid Sourcing", description: "Leverage our active bench and extensive network for immediate talent availability." },
        { title: "Deployment & Onboarding", description: "Quick integration into your workflows with complete administrative setup." },
        { title: "Management & Offboarding", description: "Ongoing payroll and compliance management followed by seamless offboarding." },
      ]}
    />
  );
}

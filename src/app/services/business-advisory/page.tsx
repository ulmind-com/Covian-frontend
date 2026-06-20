import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Business Advisory & Compliance | CoVian Advisory",
  description: "Labour law compliance support and operational advisory services.",
};

export default function BusinessAdvisoryPage() {
  return (
    <ServiceLayout
      tag="Business Advisory"
      title="Navigate Compliance"
      titleHighlight="with Confidence"
      subtitle="Labour Law & Operational Advisory"
      description="CoVian Advisory provides robust labour law compliance support and operational advisory services, helping businesses mitigate risks, streamline processes, and operate seamlessly within all regulatory frameworks — so you can focus entirely on growth."
      features={[
        "Labour Law Compliance & Audits",
        "Operational Process Optimization",
        "Regulatory Risk Management",
        "Strategic Business Advisory",
      ]}
      imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "500+", label: "Businesses Supported" },
        { value: "100%", label: "Audit Success Rate" },
        { value: "15+", label: "Years of Expertise" },
      ]}
      heroBadges={["Labour Law", "PF & ESI", "Risk Management", "Process Advisory"]}
      sectionLabel="What We Provide"
      sectionTitle="Why Compliance Advisory"
      sectionHighlight="Is Critical for Your Business"
      sectionBody={[
        "Non-compliance with labour laws isn't just a legal risk — it's a business risk. Penalties, disputes, and reputational damage can cripple an organization that isn't proactively managing its regulatory obligations.",
        "Our team stays ahead of every amendment to PF, ESI, the Shops & Establishments Act, and other key statutes, providing you with real-time guidance that keeps your business audit-ready at all times.",
        "Beyond compliance, we also deliver operational advisory — identifying bottlenecks, improving workflows, and ensuring your business structure is aligned for sustainable long-term growth.",
      ]}
      sectionCards={[
        { icon: "⚖️", title: "Legally Compliant", description: "Always stay audit-ready with up-to-date guidance on all applicable labour regulations." },
        { icon: "🛡️", title: "Risk Mitigation", description: "Identify and address compliance gaps before they become costly legal problems." },
        { icon: "📋", title: "Policy Design", description: "Customized HR and operational policies tailored to your industry and workforce size." },
        { icon: "🤝", title: "Dedicated Partner", description: "A proactive compliance partner who understands your business deeply — not just reactive advice." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Stay Legally Compliant", description: "Our team keeps you updated with the latest labour law amendments — PF, ESI, and all statutory requirements." },
        { title: "Reduce Operational Risk", description: "Proactively identify compliance gaps and process inefficiencies before they become costly problems." },
        { title: "Structured Growth Advisory", description: "From entity structuring to workforce policy design, aligned with your long-term business goals." },
        { title: "Dedicated Compliance Partner", description: "A dedicated point of contact who provides proactive guidance — not just reactive fixes." },
      ]}
      process={[
        { title: "Assess", description: "Comprehensive audit of your compliance framework, contracts, and operational workflows." },
        { title: "Identify", description: "Pinpoint gaps, risks, and improvement areas with a detailed findings report." },
        { title: "Remediate", description: "Implement corrective measures, update policies, and train relevant stakeholders." },
        { title: "Monitor", description: "Ongoing compliance monitoring with periodic reviews to ensure sustained adherence." },
      ]}
    />
  );
}

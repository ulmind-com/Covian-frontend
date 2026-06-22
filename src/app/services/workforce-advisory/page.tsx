import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Workforce Advisory | CoVian Advisory",
  description: "Strategic consulting on workforce planning, employer branding, compensation benchmarking, and talent architecture.",
};

export default function WorkforceAdvisoryPage() {
  return (
    <ServiceLayout
      tag="Workforce Advisory"
      title="Strategic Consulting,"
      titleHighlight="For Future-Ready Teams"
      subtitle="HR & Workforce Consulting"
      description="Navigate the complexities of the modern talent landscape with data-driven insights. Our workforce advisory practice helps organizations optimize organizational design, benchmark compensation, and build compelling employer brands."
      features={[
        "Organizational Design & Structuring",
        "Compensation & Benefits Benchmarking",
        "Employer Branding Strategy",
        "Talent Architecture & Succession Planning",
      ]}
      imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "50+", label: "Strategic Audits" },
        { value: "100%", label: "Data-Driven" },
        { value: "360°", label: "Business Alignment" },
      ]}
      heroBadges={["Strategic HR", "Data Analytics", "Comp Benchmarking", "Employer Branding"]}
      sectionLabel="Strategic Advantage"
      sectionTitle="Why Talent Needs"
      sectionHighlight="A Strategic Blueprint"
      sectionBody={[
        "Hiring the right people is only half the battle. If your organizational structure is flawed, your compensation is uncompetitive, or your employer brand is weak, you will struggle to attract and retain top performers.",
        "CoVian's Workforce Advisory brings management consulting rigor to human resources. We analyze your workforce data, benchmark against industry competitors, and identify critical gaps in your talent strategy.",
        "From startups building their first HR frameworks to enterprises undergoing massive digital transformations, we provide actionable roadmaps that align your people strategy directly with your business objectives.",
      ]}
      sectionCards={[
        { icon: "🏗️", title: "Org Design", description: "Create scalable, agile organizational structures that drive operational efficiency." },
        { icon: "💰", title: "Compensation Analytics", description: "Ensure your pay structures are competitive, equitable, and market-aligned." },
        { icon: "🌟", title: "Employer Branding", description: "Develop an authentic Employee Value Proposition (EVP) that attracts top talent." },
        { icon: "🗺️", title: "Talent Mapping", description: "Identify critical skills gaps and build robust succession pipelines." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Market Competitiveness", description: "Stay ahead of industry trends and competitor talent strategies." },
        { title: "Improved Retention", description: "Reduce costly turnover by building equitable structures and compelling career paths." },
        { title: "Data-Backed Decisions", description: "Move away from gut-feeling HR to strategy rooted in analytics and benchmarks." },
        { title: "Change Management", description: "Expert guidance during mergers, acquisitions, or rapid scaling phases." },
      ]}
      process={[
        { title: "Audit & Analysis", description: "Deep-dive assessment of current HR structures, policies, and workforce data." },
        { title: "Market Benchmarking", description: "Comparing your practices, compensation, and brand against industry leaders." },
        { title: "Strategy Formulation", description: "Designing tailored blueprints, new frameworks, and actionable recommendations." },
        { title: "Implementation Support", description: "Assisting your leadership in rolling out new structures and managing change." },
      ]}
    />
  );
}

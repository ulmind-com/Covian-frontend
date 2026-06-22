import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Business Advisory | CoVian Advisory",
  description: "Strategic business advisory services to drive growth, efficiency, and long-term organizational success.",
};

export default function BusinessAdvisoryPage() {
  return (
    <ServiceLayout
      tag="Business Advisory"
      title="Strategic Insights,"
      titleHighlight="Measurable Growth."
      subtitle="Advisory Services for Forward-Thinking Leaders"
      description="CoVian Advisory partners with leadership teams to provide data-driven strategic counsel across workforce planning, organizational design, and business transformation."
      features={[
        "Workforce Planning & Strategy",
        "Organizational Design",
        "HR Transformation",
        "Market & Talent Intelligence",
      ]}
      imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "15+", label: "Years of Expertise" },
        { value: "8", label: "Industries Served" },
        { value: "6", label: "Service Lines" },
      ]}
      heroBadges={["Workforce Strategy", "Org Design", "HR Advisory", "Business Transformation"]}
      sectionLabel="Our Advisory Edge"
      sectionTitle="Strategy Aligned"
      sectionHighlight="To Your Goals"
      sectionBody={[
        "Our advisory practice goes beyond consulting buzzwords. We provide practical, actionable strategic guidance grounded in real-world workforce experience.",
        "Whether you are restructuring your organization, entering a new market, or building a future-ready talent function, our advisors bring deep sector expertise to every engagement.",
        "We are invested in your long-term success — not just a one-time engagement."
      ]}
      sectionCards={[
        { icon: "📊", title: "Workforce Planning", description: "Align your people strategy with business objectives through data-driven planning." },
        { icon: "🏗️", title: "Org Design", description: "Design efficient organizational structures that scale with your growth." },
        { icon: "🎯", title: "HR Transformation", description: "Modernize your HR function for the future of work." },
        { icon: "💡", title: "Market Intelligence", description: "Gain deep insights into talent markets, compensation benchmarks, and competitor strategies." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Executive-Level Engagement", description: "Our advisors work directly with senior leadership to ensure alignment and accountability." },
        { title: "Industry-Specific Expertise", description: "Sector-specific insights from advisors who have led transformations in your vertical." },
        { title: "Actionable Recommendations", description: "We deliver clear, prioritized action plans — not just slide decks." },
        { title: "Ongoing Partnership", description: "We remain engaged through implementation to ensure recommendations deliver results." }
      ]}
      process={[
        { title: "Discovery", description: "Deep-dive sessions to understand your business context, challenges, and goals." },
        { title: "Analysis", description: "Rigorous analysis of your current state against industry benchmarks." },
        { title: "Strategy Design", description: "Developing a customized roadmap aligned with your strategic priorities." },
        { title: "Implementation Support", description: "Hands-on support during execution to ensure measurable outcomes." }
      ]}
    />
  );
}

import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Executive Search | CoVian Advisory",
  description: "Identifying and securing transformative C-suite and board-level leadership talent.",
};

export default function ExecutiveSearchPage() {
  return (
    <ServiceLayout
      tag="Executive Search"
      title="Transforming Leadership,"
      titleHighlight="Defining Futures."
      subtitle="C-Suite & Board Level Placements"
      description="Our executive search practice partners with boards and CEOs to identify, assess, and transition exceptional leaders who will shape your organization's tomorrow."
      features={[
        "Precision Targeting of Top 1% Talent",
        "C-Suite, VP, and Board Focus",
        "Rigorous Vetting & Assessment",
        "Absolute Confidentiality",
      ]}
      imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "100+", label: "CxO Placements" },
        { value: "95%", label: "Retention Rate" },
        { value: "100%", label: "Confidentiality" },
      ]}
      heroBadges={["Board Members", "C-Suite", "VP & Directors", "Confidential Search"]}
      sectionLabel="The Covian Advantage"
      sectionTitle="Leadership Defines"
      sectionHighlight="Your Trajectory"
      sectionBody={[
        "Finding the right leader requires more than a database search. It requires a deep understanding of your business, culture, and strategic goals.",
        "Our ultra-premium approach ensures absolute confidentiality and an unparalleled success rate. We don't just find candidates; we identify visionary leaders capable of driving transformative growth.",
        "Leveraging deep industry networks and proprietary assessment methodologies, we mitigate the immense risks associated with executive hiring."
      ]}
      sectionCards={[
        { icon: "🎯", title: "Precision Targeting", description: "We identify and engage the top 1% of leadership talent globally." },
        { icon: "🤝", title: "C-Suite Focus", description: "Specialized expertise in Board, CEO, CFO, and VP placements." },
        { icon: "🛡️", title: "Guaranteed Fit", description: "Rigorous vetting ensuring cultural, operational, and strategic alignment." },
        { icon: "🤫", title: "Discreet Execution", description: "Absolute confidentiality maintained throughout the sensitive search process." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Access to Passive Talent", description: "We engage high-performing leaders who aren't actively looking but are open to the right opportunity." },
        { title: "Risk Mitigation", description: "Comprehensive leadership assessments reduce the costly risk of a bad executive hire." },
        { title: "Market Intelligence", description: "Gain valuable insights into competitor structures, compensation benchmarks, and talent landscapes." },
        { title: "Smooth Transition", description: "Post-placement onboarding support to ensure the new leader integrates seamlessly and delivers impact quickly." }
      ]}
      process={[
        { title: "Strategic Briefing", description: "In-depth consultation to align on organizational goals, culture, and the leadership mandate." },
        { title: "Market Mapping", description: "Exhaustive research to map the talent landscape and identify target profiles." },
        { title: "Engagement & Assessment", description: "Discreet outreach, rigorous interviews, and comprehensive leadership profiling." },
        { title: "Offer & Integration", description: "Facilitating negotiations and providing structured onboarding support for the successful candidate." }
      ]}
    />
  );
}

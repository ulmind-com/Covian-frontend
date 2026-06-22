import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "RPO (Recruitment Process Outsourcing) | CoVian Advisory",
  description: "Recruitment Process Outsourcing that embeds our team within your HR function to own and optimize your hiring engine.",
};

export default function RPOPage() {
  return (
    <ServiceLayout
      tag="RPO Services"
      title="Scale Your Hiring,"
      titleHighlight="Without the Overhead"
      subtitle="Recruitment Process Outsourcing"
      description="Transform your talent acquisition strategy by embedding CoVian Advisory's dedicated recruiters, cutting-edge technology, and proven methodologies directly into your HR function. We own the hiring engine so you can own the market."
      features={[
        "End-to-End Talent Acquisition Management",
        "Embedded Recruiter Teams",
        "Advanced Sourcing Technologies & Analytics",
        "Employer Branding & Candidate Experience",
      ]}
      imageUrl="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "40%", label: "Cost Per Hire Reduction" },
        { value: "3x", label: "Faster Time-to-Fill" },
        { value: "100%", label: "Process Transparency" },
      ]}
      heroBadges={["Scalable Engine", "Tech-Enabled", "Cost Efficient", "Strategic Partnership"]}
      sectionLabel="Transformative RPO"
      sectionTitle="Why Modern Enterprises"
      sectionHighlight="Partner with RPO Experts"
      sectionBody={[
        "Managing high-volume or highly specialized recruitment in-house requires immense capital investment in tools, recruiter salaries, and management bandwidth. Often, internal teams are overwhelmed by operational tasks, leaving little room for strategic talent planning.",
        "Our RPO solution shifts the burden of recruitment from your internal teams to our dedicated experts. We deploy a customized hiring engine that integrates seamlessly with your culture, processes, and technology stack.",
        "Whether you need enterprise-wide recruitment outsourcing or project-based support for a new business unit launch, our scalable RPO models deliver better talent, faster, and at a significantly lower cost.",
      ]}
      sectionCards={[
        { icon: "📉", title: "Cost Efficiency", description: "Dramatically reduce agency spend and lower your overall cost-per-hire." },
        { icon: "⏱️", title: "Faster Time-to-Fill", description: "Dedicated pipelines and agile processes ensure critical roles are closed quickly." },
        { icon: "📊", title: "Data-Driven Insights", description: "Comprehensive analytics and reporting on every stage of the recruitment funnel." },
        { icon: "🤝", title: "Seamless Integration", description: "Our recruiters operate as an extension of your employer brand." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Scalability", description: "Flex your recruitment engine up or down based on your business cycles and hiring spikes." },
        { title: "Enhanced Employer Brand", description: "We ensure every candidate experiences a professional, responsive, and engaging hiring journey." },
        { title: "Focus on Core Business", description: "Free up your HR leaders to focus on talent development and employee retention." },
        { title: "Access to Premium Tech", description: "Leverage our investments in AI sourcing, ATS platforms, and talent analytics." },
      ]}
      process={[
        { title: "Discovery & Design", description: "Audit current processes and design a customized RPO blueprint aligned with your goals." },
        { title: "Implementation", description: "Deploy technology, define SLA metrics, and integrate our embedded team." },
        { title: "Execution", description: "End-to-end recruitment delivery — from sourcing and screening to offer management." },
        { title: "Optimization", description: "Continuous performance reviews and process improvements driven by data." },
      ]}
    />
  );
}

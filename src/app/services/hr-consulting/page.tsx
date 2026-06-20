import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Human Resource Consulting | CoVian Advisory",
  description: "HR strategy development, employee engagement, and workforce productivity solutions.",
};

export default function HRConsultingPage() {
  return (
    <ServiceLayout
      tag="HR Consulting"
      title="Transform Your Workplace,"
      titleHighlight="Empower Your People"
      subtitle="HR Strategy & Workforce Productivity"
      description="CoVian Advisory designs HR systems that align your people with your business goals. From strategy development to employee engagement and performance management — we help you build a culture of excellence that drives sustained high performance."
      features={[
        "Custom HR Strategy Development",
        "Employee Engagement Programs",
        "Performance Management Systems",
        "HR Policy Design & Review",
      ]}
      imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "200+", label: "HR Roadmaps Built" },
        { value: "40%", label: "Avg. Attrition Reduction" },
        { value: "95%", label: "Client Retention" },
      ]}
      heroBadges={["HR Strategy", "Engagement Programs", "Workforce Analytics", "Policy Design"]}
      sectionLabel="What We Provide"
      sectionTitle="Why Strategic HR"
      sectionHighlight="Is Your Competitive Advantage"
      sectionBody={[
        "In today's talent market, your HR function is not just a support department — it's a strategic driver of business performance. Organizations with strong HR foundations consistently outperform those without.",
        "High attrition, low engagement, and unclear performance structures cost organizations far more than they realize. Our HR consulting services address these root causes with customized, scalable solutions.",
        "We work as an extension of your leadership team — diagnosing organizational health, designing HR roadmaps, deploying engagement initiatives, and establishing KPI frameworks that bring lasting, measurable improvement.",
      ]}
      sectionCards={[
        { icon: "🏆", title: "Stronger Culture", description: "Build a values-driven culture where employees feel motivated and aligned with company goals." },
        { icon: "📉", title: "Reduce Attrition", description: "Targeted engagement and retention programs address root causes of employee turnover." },
        { icon: "📈", title: "Scalable HR Systems", description: "HR infrastructure that grows with your business — from 10 to 10,000 employees." },
        { icon: "📊", title: "Data-Driven Insights", description: "HR analytics and reporting frameworks to make smarter decisions about your workforce." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Stronger Organizational Culture", description: "Build a values-driven culture where employees feel motivated, aligned, and proud to contribute." },
        { title: "Reduced Employee Attrition", description: "Targeted engagement programs that address root causes of turnover and significantly reduce churn." },
        { title: "Scalable HR Infrastructure", description: "HR systems and policies that scale seamlessly with your business as it grows." },
        { title: "Data-Driven Workforce Insights", description: "Leverage HR analytics to make smarter decisions about your people and organizational structure." },
      ]}
      process={[
        { title: "Diagnose", description: "Stakeholder interviews and surveys to assess HR maturity, culture health, and workforce pain points." },
        { title: "Design", description: "Co-create a customized HR roadmap addressing strategy, policies, and engagement initiatives." },
        { title: "Deploy", description: "Hands-on implementation with training, communication, and change management support." },
        { title: "Sustain", description: "KPIs, review cadences, and continuous improvement loops to ensure lasting impact." },
      ]}
    />
  );
}

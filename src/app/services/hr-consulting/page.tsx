import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "HR Consulting | CoVian Advisory",
  description: "End-to-end HR consulting services to transform your people function and build a future-ready organization.",
};

export default function HrConsultingPage() {
  return (
    <ServiceLayout
      tag="HR Consulting"
      title="Transforming HR,"
      titleHighlight="Enabling People."
      subtitle="End-to-End HR Strategy & Operations"
      description="CoVian Advisory&apos;s HR consulting practice helps organizations build, modernize, and optimize their entire people function — from talent acquisition strategy to performance management systems."
      features={[
        "HR Strategy & Policy Design",
        "Performance Management Systems",
        "Compensation & Benefits Benchmarking",
        "Talent Development Frameworks",
      ]}
      imageUrl="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "50+", label: "HR Projects Delivered" },
        { value: "30%", label: "Avg Attrition Reduction" },
        { value: "100%", label: "Policy Compliance Rate" },
      ]}
      heroBadges={["HR Strategy", "Policy Design", "Performance Management", "Talent Development"]}
      sectionLabel="HR Excellence"
      sectionTitle="People Strategy"
      sectionHighlight="That Performs"
      sectionBody={[
        "A strong HR function is the backbone of organizational performance. CoVian Advisory helps you build HR capabilities that attract, develop, and retain the talent that drives your business forward.",
        "Our HR consultants bring hands-on experience in designing policies, systems, and processes that are legally compliant, operationally efficient, and employee-friendly.",
        "Whether you are a startup building HR from scratch or a mid-sized firm looking to modernize legacy systems — we have the expertise to transform your people function."
      ]}
      sectionCards={[
        { icon: "📜", title: "HR Policy Design", description: "Crafting compliant, clear, and employee-friendly HR policies and employee handbooks." },
        { icon: "🎯", title: "Performance Systems", description: "Designing KPI frameworks, appraisal systems, and feedback cultures that drive accountability." },
        { icon: "💼", title: "Compensation Benchmarking", description: "Ensuring your compensation packages are competitive to attract and retain top talent." },
        { icon: "📈", title: "L&D Frameworks", description: "Building learning and development programs that upskill your workforce for future challenges." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Legally Compliant Policies", description: "All HR frameworks are designed in strict compliance with Indian labour laws and regulations." },
        { title: "Reduced Attrition", description: "Structured HR systems create better employee experiences that reduce turnover significantly." },
        { title: "Scalable Frameworks", description: "HR processes designed to scale with your organization as it grows." },
        { title: "Employee Experience Focus", description: "We balance organizational requirements with a strong focus on employee well-being and engagement." }
      ]}
      process={[
        { title: "HR Audit", description: "Comprehensive review of your current HR policies, practices, and pain points." },
        { title: "Gap Analysis", description: "Identifying gaps against industry best practices and legal requirements." },
        { title: "Framework Design", description: "Building customized HR policies, systems, and processes tailored to your business." },
        { title: "Implementation & Training", description: "Deploying new HR systems and training your team to manage them effectively." }
      ]}
    />
  );
}

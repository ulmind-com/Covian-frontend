import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Training & Development | CoVian Advisory",
  description: "Upskilling and onboarding programs that accelerate time-to-productivity and strengthen organizational capability.",
};

export default function TrainingDevelopmentPage() {
  return (
    <ServiceLayout
      tag="Training & Development"
      title="Empower Your Talent,"
      titleHighlight="Accelerate Growth"
      subtitle="Corporate Learning Solutions"
      description="Bridge skill gaps and foster a culture of continuous improvement. Our tailored training programs accelerate new hire onboarding, upskill existing employees, and develop the next generation of organizational leaders."
      features={[
        "Customized Onboarding Programs",
        "Technical & Functional Upskilling",
        "Leadership & Soft Skills Development",
        "Performance Management Training",
      ]}
      imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "10k+", label: "Professionals Trained" },
        { value: "40%", label: "Faster Onboarding" },
        { value: "95%", label: "Positive Feedback" },
      ]}
      heroBadges={["Corporate Training", "Leadership Seminars", "Technical Upskilling", "Custom Modules"]}
      sectionLabel="Continuous Growth"
      sectionTitle="Why Learning Drives"
      sectionHighlight="Business Resilience"
      sectionBody={[
        "In a rapidly evolving business landscape, static skills quickly become obsolete. Organizations that fail to invest in continuous learning face stagnant innovation, lower employee engagement, and higher turnover.",
        "CoVian's Training & Development practice designs immersive, outcome-focused learning experiences. We don't just deliver generic seminars; we build customized curricula that directly address your organization's unique operational challenges.",
        "From accelerating the time-to-productivity for new hires to transforming managers into visionary leaders, our training interventions are designed to yield measurable ROI and sustainable business impact.",
      ]}
      sectionCards={[
        { icon: "🚀", title: "Accelerated Onboarding", description: "Reduce ramp-up time and integrate new hires into your culture seamlessly." },
        { icon: "🧠", title: "Leadership Development", description: "Equip managers with the tools to lead teams effectively through change." },
        { icon: "⚙️", title: "Technical Upskilling", description: "Keep your workforce updated on the latest industry technologies and practices." },
        { icon: "💬", title: "Soft Skills Enhancement", description: "Improve communication, emotional intelligence, and cross-functional collaboration." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Higher Employee Retention", description: "Employees are 3x more likely to stay when invested in their professional growth." },
        { title: "Increased Productivity", description: "Targeted upskilling eliminates inefficiencies and boosts overall output." },
        { title: "Future-Proof Workforce", description: "Build internal capabilities to handle technological shifts and market disruptions." },
        { title: "Measurable ROI", description: "Training outcomes tied directly to business KPIs and performance metrics." },
      ]}
      process={[
        { title: "Needs Assessment", description: "Identifying skill gaps through surveys, interviews, and performance data." },
        { title: "Curriculum Design", description: "Developing customized training modules, workshops, and learning paths." },
        { title: "Delivery", description: "Engaging, expert-led facilitation through in-person, virtual, or hybrid formats." },
        { title: "Evaluation", description: "Measuring training effectiveness, knowledge retention, and business impact." },
      ]}
    />
  );
}

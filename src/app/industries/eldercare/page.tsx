import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Eldercare Industry | CoVian Advisory",
  description: "Compassionate eldercare staffing — trained caregivers, geriatric nurses, and care facility managers.",
};

export default function EldercarePage() {
  return (
    <ServiceLayout
      tag="Industry Focus"
      title="Eldercare"
      titleHighlight="Staffing Solutions"
      subtitle="Compassionate Talent for Senior Care"
      description="With India's aging population growing rapidly, the demand for quality eldercare services is at an all-time high. CoVian Advisory recruits compassionate, trained caregivers, geriatric nurses, physiotherapists, and care facility managers to ensure the highest standards of senior care across residential and home care settings."
      features={[
        "Trained Home Caregivers & Attendants",
        "Geriatric Nurses & Specialists",
        "Care Facility Managers",
        "Physiotherapists & Occupational Therapists",
      ]}
      imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "300+", label: "Eldercare Placements" },
        { value: "100%", label: "Background Verified" },
        { value: "24hr", label: "Emergency Staffing" },
      ]}
      heroBadges={["Home Caregivers", "Geriatric Nurses", "Care Managers", "Physiotherapy"]}
      sectionLabel="Why Eldercare Staffing Is Critical"
      sectionTitle="Quality Care Starts with"
      sectionHighlight="the Right People"
      sectionBody={[
        "Eldercare is one of the most sensitive and relationship-driven sectors in healthcare. Families trust caregivers with their most loved ones — and that trust requires professionals who are not just trained, but genuinely compassionate.",
        "CoVian Advisory's eldercare practice goes beyond credentials. We evaluate candidates for empathy, patience, communication, and adaptability — qualities that define truly exceptional caregivers in residential and home settings.",
        "From urban assisted living facilities to in-home care for rural families, we provide scalable staffing solutions that meet the unique demands of this growing sector.",
      ]}
      sectionCards={[
        { icon: "❤️", title: "Empathy-First Hiring", description: "We screen for compassion and interpersonal skills — not just clinical qualifications." },
        { icon: "🛡️", title: "Fully Background Verified", description: "Thorough police verification, reference checks, and health screening for all candidates." },
        { icon: "🏠", title: "Home & Residential Care", description: "Staffing for both in-home caregiving and assisted living / retirement facility settings." },
        { icon: "📱", title: "Ongoing Support", description: "Post-placement follow-up to ensure family satisfaction and caregiver wellbeing." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Compassion-Vetted Talent", description: "Every candidate assessed for empathy, patience, and interpersonal skills alongside clinical ability." },
        { title: "Rapid Emergency Deployment", description: "24-hour emergency staffing for sudden caregiver unavailability or discharge from hospital." },
        { title: "Flexible Engagement Options", description: "Full-time, part-time, live-in, and shift-based caregiving arrangements available." },
        { title: "Family-Centered Matching", description: "We match caregivers to family preferences, patient needs, and language/cultural requirements." },
      ]}
      process={[
        { title: "Consult", description: "Understand the patient's needs, family expectations, and preferred caregiver profile." },
        { title: "Match", description: "Identify best-fit candidates from our verified eldercare professional pool." },
        { title: "Verify", description: "Police verification, health checks, reference calls, and skills assessment." },
        { title: "Support", description: "Post-placement check-ins with both family and caregiver to ensure lasting satisfaction." },
      ]}
    />
  );
}

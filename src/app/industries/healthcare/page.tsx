import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Healthcare Industry | CoVian Advisory",
  description: "Specialized recruitment and staffing solutions for hospitals, clinics, and healthcare networks.",
};

export default function HealthcarePage() {
  return (
    <ServiceLayout
      tag="Industry Focus"
      title="Healthcare"
      titleHighlight="Staffing Solutions"
      subtitle="Trusted Talent Partner for Healthcare"
      description="We partner with hospitals, clinics, diagnostic centres, and healthcare networks to source skilled medical professionals — from doctors, nurses, and paramedics to hospital administrators and allied health workers. Our deep understanding of clinical requirements ensures rapid, quality placements at every level."
      features={[
        "Permanent & Contract Medical Staffing",
        "Nursing & Paramedical Recruitment",
        "Hospital Administration Hiring",
        "Allied Health Professional Placement",
      ]}
      imageUrl="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "500+", label: "Healthcare Placements" },
        { value: "72hr", label: "Average Turnaround" },
        { value: "98%", label: "Retention Rate" },
      ]}
      heroBadges={["Hospitals & Clinics", "Nursing Staff", "Paramedical", "Administration"]}
      sectionLabel="Why Healthcare Staffing Matters"
      sectionTitle="Qualified Medical Talent,"
      sectionHighlight="When You Need It Most"
      sectionBody={[
        "The healthcare sector faces chronic talent shortages, especially for skilled nursing staff and allied health professionals. A single vacancy in a critical care department can have real consequences for patient outcomes.",
        "CoVian Advisory's healthcare division maintains a curated pool of credentialed, background-verified medical professionals across specialties. We understand the compliance requirements, registration mandates, and domain expertise needed for each role.",
        "Whether you're staffing a new hospital wing, managing seasonal surge capacity, or filling a critical leadership position, we deliver the right talent — fast.",
      ]}
      sectionCards={[
        { icon: "🏥", title: "Hospital & Clinic Staffing", description: "End-to-end recruitment for multispecialty hospitals, nursing homes, and diagnostic chains." },
        { icon: "👩‍⚕️", title: "Verified Clinical Talent", description: "Every candidate is credential-verified, reference-checked, and ready to deploy." },
        { icon: "⚡", title: "Rapid Deployment", description: "Emergency and urgent staffing fulfilled within 24–72 hours across major cities." },
        { icon: "📋", title: "Compliance-Ready", description: "We handle NMC, INC, and other regulatory verification requirements for all placements." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Specialized Healthcare Network", description: "Access a pre-vetted pool of medical professionals across specialties, ready for immediate deployment." },
        { title: "Credential & Compliance Verified", description: "All candidates are verified against NMC, INC, and other regulatory mandates before placement." },
        { title: "Flexible Engagement Models", description: "Permanent, contract, locum, and project-based staffing — tailored to your operational needs." },
        { title: "Pan-India Coverage", description: "Talent sourcing across metros, tier-2 cities, and semi-urban healthcare facilities nationwide." },
      ]}
      process={[
        { title: "Assess", description: "Understand your staffing requirements, specialty mix, and compliance framework." },
        { title: "Source", description: "Draw from our credentialed healthcare talent database and active referral networks." },
        { title: "Verify", description: "Thorough credential checks, background verification, and regulatory compliance review." },
        { title: "Deploy", description: "Swift placement with post-joining support to ensure smooth onboarding and retention." },
      ]}
    />
  );
}

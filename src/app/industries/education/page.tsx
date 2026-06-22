import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Education Industry | CoVian Advisory",
  description: "Academic, administrative, and leadership talent for schools, universities, and ed-tech organizations.",
};

export default function EducationPage() {
  return (
    <ServiceLayout
      tag="Industry Focus"
      title="Education"
      titleHighlight="Talent Solutions"
      subtitle="Academic & Administrative Staffing for Education Institutions"
      description="CoVian Advisory partners with schools, universities, coaching institutes, and ed-tech platforms to source qualified academic staff, administrators, and leadership talent. We believe the right educator can transform a student's future — and we take that seriously."
      features={[
        "Academic Faculty Recruitment",
        "School & University Administration",
        "Ed-Tech Product & Operations Roles",
        "Leadership & Principal Placements",
      ]}
      imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "200+", label: "Education Placements" },
        { value: "5 Days", label: "Avg Shortlist Time" },
        { value: "95%", label: "Offer Acceptance Rate" },
      ]}
      heroBadges={["Faculty & Academics", "School Administration", "Ed-Tech", "Principal & Leadership"]}
      sectionLabel="Why Education Staffing Matters"
      sectionTitle="Qualified Educators,"
      sectionHighlight="Shaping Tomorrow"
      sectionBody={[
        "Great educational institutions are built on great teachers and administrators. The quality of your academic staff directly impacts learning outcomes, institutional reputation, and student success.",
        "CoVian Advisory's education practice brings deep understanding of academic qualification requirements, pedagogical approaches, and institutional cultures. We assess candidates not just on credentials, but on passion and teaching effectiveness.",
        "From K-12 schools to premier universities and fast-growing ed-tech platforms, we provide talent that elevates institutional quality.",
      ]}
      sectionCards={[
        { icon: "📚", title: "Faculty Recruitment", description: "Subject matter experts, visiting faculty, and full-time academic staff across disciplines." },
        { icon: "🏫", title: "School Administration", description: "Principals, vice-principals, coordinators, and support staff for K-12 institutions." },
        { icon: "🎓", title: "University & Higher Ed", description: "Professors, associate faculty, department heads, and research associates." },
        { icon: "💻", title: "Ed-Tech Talent", description: "Curriculum designers, content creators, product managers, and operations roles for ed-tech companies." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Academic Credential Verification", description: "All faculty candidates are verified for educational qualifications, UGC/NCTE compliance, and teaching experience." },
        { title: "Pedagogy-Focused Assessment", description: "We go beyond resumes — assessing teaching demos, communication skills, and student engagement capability." },
        { title: "Institution-Culture Fit", description: "Understanding your institution's values and pedagogy to match candidates who will thrive in your culture." },
        { title: "Pan-India Education Network", description: "Active connections with educators across CBSE, ICSE, IB, and state board institutions nationwide." }
      ]}
      process={[
        { title: "Institutional Brief", description: "Understanding your curriculum, culture, student profile, and specific competency requirements." },
        { title: "Candidate Sourcing", description: "Targeting qualified educators from our academic network, teacher communities, and ed-tech pools." },
        { title: "Academic Assessment", description: "Credential verification, teaching demos, and structured interviews for cultural alignment." },
        { title: "Placement & Onboarding", description: "Smooth onboarding with post-joining follow-up to ensure the educator integrates effectively." }
      ]}
    />
  );
}

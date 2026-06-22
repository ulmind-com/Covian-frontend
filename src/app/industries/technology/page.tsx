import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Information Technology Industry | CoVian Advisory",
  description: "Specialized IT talent acquisition — from software engineers to CTO-level executive search.",
};

export default function TechnologyPage() {
  return (
    <ServiceLayout
      tag="Industry Focus"
      title="Information"
      titleHighlight="Technology Talent"
      subtitle="Tech Hiring Built for the Digital Age"
      description="We enable access to specialized IT talent across project-based and long-term engagements. Our staffing and managed service models support contract and permanent roles in software engineering, data science, cybersecurity, AI/ML, cloud infrastructure, and other emerging technologies across sectors."
      features={[
        "Software Engineering & Development",
        "Data Science, AI & ML Talent",
        "Cybersecurity Professionals",
        "Cloud & DevOps Engineers",
      ]}
      imageUrl="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "1,000+", label: "IT Placements" },
        { value: "48hr", label: "Profile Delivery" },
        { value: "200+", label: "Tech Clients" },
      ]}
      heroBadges={["Software Engineering", "Data & AI", "Cloud & DevOps", "Cybersecurity"]}
      sectionLabel="Why IT Talent Requires a Different Approach"
      sectionTitle="Tech Hiring Is More Than"
      sectionHighlight="Matching Keywords"
      sectionBody={[
        "The IT talent market is one of the most competitive in the world. Resumes loaded with the right buzzwords don't guarantee the right hire — and a bad tech hire can set your roadmap back by months.",
        "CoVian Advisory's technology practice combines rigorous technical screening with market intelligence. We understand stack-specific nuances, team culture dynamics, and the difference between a candidate who can code and one who can build.",
        "From startup product teams needing full-stack engineers to enterprise organizations scaling their data science practice, we deliver verified, interview-ready talent that drives real outcomes.",
      ]}
      sectionCards={[
        { icon: "💻", title: "Full-Stack Development", description: "Frontend, backend, mobile, and full-stack engineers across all major frameworks and stacks." },
        { icon: "🤖", title: "Data Science & AI/ML", description: "Data scientists, ML engineers, and AI architects for product and research teams." },
        { icon: "☁️", title: "Cloud & Infrastructure", description: "AWS, Azure, GCP architects, DevOps engineers, and SRE professionals." },
        { icon: "🔐", title: "Cybersecurity", description: "SOC analysts, penetration testers, CISO-level leaders, and security architects." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Technical Screening Rigor", description: "Candidates go through coding assessments and technical interviews before reaching your team." },
        { title: "Niche Skill Coverage", description: "Deep talent pool across niche technologies — not just mainstream stacks." },
        { title: "Contract & Permanent Models", description: "Flexible engagement including contract, contract-to-hire, and direct permanent placement." },
        { title: "Startup to Enterprise", description: "We serve early-stage startups needing founding engineers and enterprises scaling 100-person teams." },
      ]}
      process={[
        { title: "Scope", description: "Detailed technical brief — stack, team dynamics, experience level, and project context." },
        { title: "Screen", description: "Technical assessment, coding challenges, and domain knowledge evaluation." },
        { title: "Shortlist", description: "Present a curated slate of interview-ready candidates with detailed technical profiles." },
        { title: "Close", description: "Offer management, negotiation support, and smooth onboarding coordination." },
      ]}
    />
  );
}

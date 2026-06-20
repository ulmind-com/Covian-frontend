import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Hospitality Industry | CoVian Advisory",
  description: "Specialized hospitality recruitment for hotels, resorts, F&B, and tourism brands across India.",
};

export default function HospitalityPage() {
  return (
    <ServiceLayout
      tag="Industry Focus"
      title="Hospitality"
      titleHighlight="Talent Solutions"
      subtitle="Premium Staffing for Hospitality Brands"
      description="From luxury 5-star resorts to boutique hotels and restaurant chains, CoVian Advisory provides the hospitality industry with front-of-house and back-of-house talent. We source guest relations professionals, F&B operations experts, revenue managers, and executive leadership for hospitality brands across India."
      features={[
        "Front-of-House & Guest Relations",
        "F&B Operations & Culinary Talent",
        "Revenue Management & Sales",
        "Hotel General Managers & Leadership",
      ]}
      imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "400+", label: "Hospitality Placements" },
        { value: "50+", label: "Hotel Brand Partners" },
        { value: "5★", label: "Client Satisfaction" },
      ]}
      heroBadges={["Hotels & Resorts", "F&B Operations", "Revenue Management", "Executive Hiring"]}
      sectionLabel="Why Hospitality Hiring Requires Expertise"
      sectionTitle="Service Excellence Starts with"
      sectionHighlight="Exceptional People"
      sectionBody={[
        "In the hospitality industry, talent IS the product. A guest's experience is defined entirely by the people they interact with — from the front desk to the restaurant floor to the general manager's office.",
        "Hiring the wrong person in hospitality doesn't just affect operations — it directly impacts brand reputation, reviews, and repeat business. This is why hospitality companies need a recruitment partner who understands the industry from the inside.",
        "CoVian Advisory's hospitality practice sources professionals with the right blend of technical skills, service orientation, cultural sensitivity, and brand alignment — for roles at every level of your organization.",
      ]}
      sectionCards={[
        { icon: "🏨", title: "Full Hotel Staffing", description: "End-to-end recruitment from housekeeping and front desk to GM and VP Operations." },
        { icon: "🍽️", title: "F&B Specialists", description: "Chefs, restaurant managers, sommelier, and banquet operations professionals." },
        { icon: "💰", title: "Revenue & Sales Talent", description: "Revenue managers, sales executives, and e-commerce specialists for hotel commercial teams." },
        { icon: "✈️", title: "Tourism & Travel", description: "Staffing for travel agencies, tour operators, and destination management companies." },
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Hospitality Domain Expertise", description: "Our team has deep knowledge of hotel operations and brand standards across all segments." },
        { title: "Culture-Fit First", description: "We match candidates to brand culture and service philosophy — not just technical specs." },
        { title: "Rapid Seasonal Staffing", description: "Scale your team quickly for peak season, new property openings, or special events." },
        { title: "Pan-India Hotel Coverage", description: "Talent sourcing for leisure destinations, business hotels, and boutique properties nationwide." },
      ]}
      process={[
        { title: "Brand Brief", description: "Understand your brand standards, service culture, and specific talent requirements." },
        { title: "Source", description: "Targeted outreach to hospitality professionals with relevant brand and segment experience." },
        { title: "Evaluate", description: "Personality, service attitude, and technical skills assessment tailored to hospitality roles." },
        { title: "Onboard", description: "Smooth joining facilitation with post-placement support for critical hires." },
      ]}
    />
  );
}

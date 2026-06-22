import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata = {
  title: "Retail & Services Industry | CoVian Advisory",
  description: "End-to-end recruitment for retail chains, service enterprises, and consumer-facing businesses.",
};

export default function RetailPage() {
  return (
    <ServiceLayout
      tag="Industry Focus"
      title="Retail &"
      titleHighlight="Services Staffing"
      subtitle="Frontline to Leadership Talent for Retail & Services"
      description="CoVian Advisory helps retail chains, e-commerce companies, and service enterprises build high-performing teams across store operations, logistics, customer experience, and corporate functions. We understand the pace, seasonality, and volume demands of the retail sector."
      features={[
        "Store Operations & Retail Management",
        "Customer Experience Roles",
        "Logistics & Supply Chain",
        "Corporate & Head Office Functions",
      ]}
      imageUrl="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
      stats={[
        { value: "400+", label: "Retail Placements" },
        { value: "72hr", label: "Avg Deployment" },
        { value: "90%", label: "Offer Acceptance Rate" },
      ]}
      heroBadges={["Store Operations", "Customer Service", "Logistics", "Retail Leadership"]}
      sectionLabel="Why Retail Staffing Matters"
      sectionTitle="The Right Team,"
      sectionHighlight="Right Across the Counter"
      sectionBody={[
        "Retail success is entirely dependent on the quality of your frontline teams. High attrition, seasonal demand spikes, and the need for quick onboarding make retail staffing one of the most demanding talent challenges.",
        "CoVian Advisory's retail and services practice specializes in sourcing talent who are customer-centric, operationally agile, and ready to perform from day one — at scale.",
        "Whether you are opening new stores, managing festive season surges, or building your corporate HQ team, we provide the talent solutions that keep your business moving.",
      ]}
      sectionCards={[
        { icon: "🏪", title: "Store Management", description: "Store managers, assistant managers, and department heads for retail chains." },
        { icon: "👥", title: "Frontline Teams", description: "Sales executives, customer service reps, and floor staff at scale." },
        { icon: "🚚", title: "Logistics & Supply Chain", description: "Warehouse managers, delivery coordinators, and inventory specialists." },
        { icon: "💼", title: "Corporate Functions", description: "Marketing, merchandising, HR, and finance talent for retail head offices." }
      ]}
      sectionImageUrl="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=900&auto=format&fit=crop"
      benefits={[
        { title: "Volume Hiring Capability", description: "We can manage large-scale hiring drives for store launches, expansions, and seasonal peaks." },
        { title: "Quick Turnaround", description: "Pre-screened candidates available for deployment within 72 hours of mandate confirmation." },
        { title: "Pan-India Network", description: "Retail talent sourcing across metros, malls, tier-2 towns, and e-commerce hubs." },
        { title: "Low Attrition Placements", description: "Our cultural fit screening ensures candidates who stay engaged and perform long-term." }
      ]}
      process={[
        { title: "Requirement Analysis", description: "Understanding your store count, team size, seasonal requirements, and brand culture." },
        { title: "Mass Sourcing", description: "Leveraging our retail-focused talent pool for rapid volume shortlisting." },
        { title: "Screening & Assessment", description: "Customer service aptitude testing, situational interviews, and reference checks." },
        { title: "Bulk Onboarding Support", description: "Coordinated onboarding for large batches ensuring minimal operational disruption." }
      ]}
    />
  );
}

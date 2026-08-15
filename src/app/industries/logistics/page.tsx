import { IndustryPageLayout } from "@/components/layout/IndustryPageLayout";

export const metadata = {
  alternates: {
    canonical: "/industries/logistics",
  },
  title: "Logistics Software - Supply Chain & Fleet Management - EduraTech",
  description: "Custom logistics software for supply chain, fleet tracking, route optimization, warehouse management.",
  openGraph: {
    title: "Logistics & Supply Chain Software - EduraTech",
    description: "Software that reduces delivery costs and improves customer visibility.",
    url: "https://www.eduratech.com/industries/logistics",
  },
};

export default function LogisticsPage() {
  const challenges = [
    "Manual dispatch and routing is inefficient and costly",
    "Limited visibility into driver location and delivery status",
    "No data on fuel costs, maintenance, or vehicle utilization",
    "Customer communication is reactive, not proactive",
    "Warehouse inventory tracking is manual and error-prone",
    "Missed opportunities to optimize routes and reduce fuel spend"
  ];

  const solutions = [
    { title: "Fleet Management", desc: "Real-time GPS tracking, vehicle maintenance scheduling, fuel cost monitoring." },
    { title: "Route Optimization", desc: "AI-powered route optimization. Reduce miles driven. Reduce delivery time." },
    { title: "Dispatch Management", desc: "Automated dispatch. Real-time tracking. Driver communication." },
    { title: "Warehouse Management", desc: "Inventory tracking, picking/packing optimization, barcode scanning." },
    { title: "Proof of Delivery", desc: "Digital signatures, photos, timestamped delivery confirmation." },
    { title: "Customer Visibility", desc: "Customers track their shipments in real-time. Reduce support calls." }
  ];

  const tiers = [
    { label: "Small Fleet (10-50)", range: "$40K - $80K", timeline: "10-14 weeks" },
    { label: "Medium (50-200)", range: "$80K - $200K", timeline: "14-24 weeks" },
    { label: "Large (200+)", range: "$200K - $500K+", timeline: "24-36 weeks" },
    { label: "Enterprise", range: "$500K+", timeline: "Custom" }
  ];

  return (
    <IndustryPageLayout
      title="Logistics Software That Reduces Costs & Improves Efficiency"
      description="Fleet tracking, route optimization, warehouse management, real-time visibility. Cut fuel costs. Improve on-time delivery."
      ctaText="Contact Us"
      challenges={challenges}
      solutions={solutions}
      tiers={tiers}
      ctaTitle="Ready to Optimize Your Logistics Operations?"
      ctaButtonText="Contact Us"
      heroBadges={["Supply Chain", "Real-Time Tracking", "Route Optimization"]}
    />
  );
}

import { CommercialLandingPage, LandingPageConfig } from "@/components/sections/CommercialLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Automation & Custom CRM Development - EduraTech",
  description: "Stop relying on manual CRM updates. We build custom CRM platforms and automate Salesforce/HubSpot to accelerate your sales pipeline.",
  alternates: {
    canonical: "/crm-automation",
  },
};

const config: LandingPageConfig = {
  heroTagline: "Sales Operations",
  heroTitle: "CRM Automation & Custom Development",
  heroSubtitle: "Accelerate your sales pipeline. We automate your existing CRM (Salesforce, HubSpot) or build proprietary CRM software perfectly tailored to your sales process.",
  benefitsTitle: "Supercharge Your Sales Team",
  benefits: [
    {
      title: "Automated Lead Routing",
      description: "Instantly qualify inbound leads using AI and route them to the correct sales rep based on territory, industry, or budget."
    },
    {
      title: "Custom CRM Builds",
      description: "Tired of generic pipelines? We build proprietary CRM systems that map exactly to your unique complex sales methodology."
    },
    {
      title: "Zero Data Entry",
      description: "Connect your email, phone systems, and calendar to automatically log all interactions, freeing your reps to actually sell."
    }
  ],
  processTitle: "Aligning Tech with Sales",
  processDescription: "A CRM is only as good as the data inside it. We eliminate the friction that causes sales reps to abandon CRMs. By automating the data ingestion process and providing clean, actionable dashboards, we give sales leadership total visibility into the pipeline.",
  ctaText: "Optimize Your CRM",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

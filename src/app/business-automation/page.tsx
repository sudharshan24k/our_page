import { CommercialLandingPage, LandingPageConfig } from "@/components/sections/CommercialLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Automation Agency | Automate Workflows - EduraTech",
  description: "We are a top business automation agency. Automate data entry, CRM routing, and complex operational workflows to scale without adding headcount.",
  alternates: {
    canonical: "/business-automation",
  },
};

const config: LandingPageConfig = {
  heroTagline: "Workflow Automation",
  heroTitle: "Business Automation to Scale Operations",
  heroSubtitle: "Reclaim thousands of hours of manual labor. We build custom API middleware and AI pipelines that automate data entry, lead routing, and reporting.",
  benefitsTitle: "Why Automate Your Business?",
  benefits: [
    {
      title: "Scale Without Headcount",
      description: "Handle 10x the volume of clients and data without needing to hire additional administrative staff to manage the paperwork."
    },
    {
      title: "Eliminate Human Error",
      description: "Manual data entry leads to billing errors and lost deals. Automated pipelines ensure 100% accuracy in data transfer between your systems."
    },
    {
      title: "Real-Time Syncing",
      description: "Connect your marketing forms, CRM, accounting software, and operational databases to sync instantly in real time."
    }
  ],
  processTitle: "Enterprise-Grade Automation",
  processDescription: "We move beyond simple Zapier scripts. We build robust, custom API middleware that handles complex branching logic, secure data transformation, and reliable error handling to ensure your business runs autonomously 24/7.",
  ctaText: "Book an Automation Audit",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

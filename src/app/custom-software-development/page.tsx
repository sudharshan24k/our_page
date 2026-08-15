import { CommercialLandingPage, LandingPageConfig } from "@/components/sections/CommercialLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Company - EduraTech",
  description: "Expert custom software development company. We build high-performance, scalable web applications and enterprise software tailored to your workflows.",
  alternates: {
    canonical: "/custom-software-development",
  },
};

const config: LandingPageConfig = {
  heroTagline: "Custom Engineering",
  heroTitle: "Custom Software Development Built for Growth",
  heroSubtitle: "Stop forcing your business into generic SaaS tools. We engineer proprietary, scalable software that perfectly mirrors your unique operational workflows.",
  benefitsTitle: "The Advantage of Custom Software",
  benefits: [
    {
      title: "Zero Licensing Bloat",
      description: "Stop paying massive per-seat fees to Salesforce or HubSpot. Own your software outright and scale your headcount without scaling your software costs."
    },
    {
      title: "100% Workflow Match",
      description: "Off-the-shelf software forces you to change how you work. We build software that maps perfectly to your proprietary business logic."
    },
    {
      title: "Total Data Ownership",
      description: "Secure your competitive advantage by maintaining absolute control over your infrastructure, database, and integrations."
    }
  ],
  processTitle: "Our Engineering Methodology",
  processDescription: "Every project begins with a comprehensive technical audit. Our senior engineers map your current bottlenecks, data silos, and manual processes to design an architecture that scales. We deploy in aggressive 60-day engineering sprints to ensure rapid time-to-market.",
  ctaText: "Discuss Your Project",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

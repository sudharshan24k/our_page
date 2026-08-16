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
  heroSubtitle: "As a premier Custom Software Development Company, EduraTech helps you stop forcing your business into generic, off-the-shelf SaaS tools. We meticulously engineer proprietary, highly scalable custom software solutions that perfectly mirror your unique operational workflows and drive long-term enterprise growth.",
  benefitsTitle: "The Powerful Advantage of Working with a Custom Software Development Company",
  benefits: [
    {
      title: "Zero Licensing Bloat and Predictable Costs",
      description: "Stop paying massive, exponentially increasing per-seat fees to generic platforms like Salesforce or HubSpot. By partnering with EduraTech, you own your custom software outright, empowering you to aggressively scale your employee headcount without simultaneously scaling your recurring software licensing costs."
    },
    {
      title: "100% Workflow Match with Your Business Logic",
      description: "Off-the-shelf software frequently forces you to fundamentally change how your business operates just to fit into their predefined boxes. As an expert Custom Software Development Company, we build bespoke software applications that map perfectly to your proprietary business logic, enhancing efficiency rather than hindering it."
    },
    {
      title: "Total Data Ownership and Security",
      description: "Secure your unique competitive advantage in the market by maintaining absolute, uncompromising control over your entire software infrastructure, underlying database, and third-party API integrations. EduraTech ensures your valuable corporate data remains exclusively in your hands, properly secured against external threats."
    }
  ],
  processTitle: "Our Strategic Engineering Methodology at EduraTech",
  processDescription: "Every custom software project we undertake begins with a comprehensive, deep-dive technical audit of your existing systems. Our team of senior software engineers meticulously maps your current operational bottlenecks, isolated data silos, and manual processes to purposefully design a technical architecture that scales alongside your business. Following this rigorous planning phase, we aggressively deploy these custom software solutions in focused 60-day engineering sprints. This agile methodology ensures rapid time-to-market, allowing you to quickly capitalize on your new digital capabilities and achieve a faster return on investment.",
  ctaText: "Discuss Your Custom Software Project",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

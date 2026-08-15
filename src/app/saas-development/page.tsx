import { CommercialLandingPage, LandingPageConfig } from "@/components/sections/CommercialLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Development Company & Agency - EduraTech",
  description: "Expert SaaS development company. We build scalable, secure, and multi-tenant SaaS platforms that convert users and dominate markets.",
  alternates: {
    canonical: "/saas-development",
  },
};

const config: LandingPageConfig = {
  heroTagline: "SaaS Engineering",
  heroTitle: "SaaS Development Company",
  heroSubtitle: "We engineer highly scalable, multi-tenant SaaS platforms designed for rapid user acquisition, secure data segregation, and enterprise-grade performance.",
  benefitsTitle: "Built for MRR Growth",
  benefits: [
    {
      title: "Multi-Tenant Architecture",
      description: "Secure, scalable databases designed specifically for B2B SaaS, ensuring complete data isolation between your enterprise clients."
    },
    {
      title: "High-Performance UX",
      description: "We utilize modern frameworks like Next.js and React to deliver lightning-fast, app-like experiences that reduce churn."
    },
    {
      title: "Stripe Billing Integrations",
      description: "Seamless subscription management, usage-based billing, and automated dunning processes built natively into your app."
    }
  ],
  processTitle: "From MVP to Enterprise Scale",
  processDescription: "Whether you are validating a new market with a rapid MVP or rebuilding a legacy application to scale to millions of users, our engineering team provides the technical architecture necessary to support massive user concurrency and complex feature sets.",
  ctaText: "Talk to a SaaS Architect",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

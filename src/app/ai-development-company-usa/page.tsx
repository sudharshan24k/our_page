import { CommercialLandingPage, LandingPageConfig } from "@/components/sections/CommercialLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development Company USA | Enterprise AI Architects - EduraTech",
  description: "Leading AI development company in the USA. We build secure, compliant AI workflows and proprietary machine learning models for American enterprises.",
  alternates: {
    canonical: "/ai-development-company-usa",
  },
};

const config: LandingPageConfig = {
  heroTagline: "US-Based AI Experts",
  heroTitle: "AI Development Company USA",
  heroSubtitle: "We build secure, compliant AI workflows and proprietary machine learning models exclusively for American enterprises.",
  benefitsTitle: "Secure Enterprise AI",
  benefits: [
    {
      title: "Private Infrastructure",
      description: "We deploy open-source models inside your own US-based cloud environments (AWS/Azure) to guarantee data sovereignty."
    },
    {
      title: "Regulatory Compliance",
      description: "We navigate complex US regulations (HIPAA, SOC2, FINRA) to ensure your AI implementations are legally bulletproof."
    },
    {
      title: "Strategic AI Consulting",
      description: "We don't just write code; our US-based strategists help you identify the specific operational bottlenecks where AI delivers immediate ROI."
    }
  ],
  processTitle: "Building Proprietary AI Assets",
  processDescription: "The future of enterprise value is proprietary data. We help US companies harness their internal data silos by building private RAG systems and fine-tuning models that turn your historical data into an active competitive advantage.",
  ctaText: "Schedule an AI Consultation",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

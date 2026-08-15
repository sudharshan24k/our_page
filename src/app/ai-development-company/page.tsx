import { CommercialLandingPage, LandingPageConfig } from "@/components/sections/CommercialLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development Company | Enterprise AI Solutions - EduraTech",
  description: "Top-tier AI development company specializing in custom machine learning models, RAG, and AI automation for US enterprises. Build proprietary AI assets today.",
  alternates: {
    canonical: "/ai-development-company",
  },
};

const config: LandingPageConfig = {
  heroTagline: "Enterprise AI Development",
  heroTitle: "AI Development Company for US Enterprises",
  heroSubtitle: "We engineer deterministic, secure AI infrastructure that automates cognitive labor and eliminates manual bottlenecks without compromising corporate data.",
  benefitsTitle: "Why Companies Choose Our AI Solutions",
  benefits: [
    {
      title: "Data Security & Privacy",
      description: "We deploy private LLMs and vector databases on your cloud infrastructure (AWS/Azure). Your corporate data is never used to train public models."
    },
    {
      title: "Deterministic Outputs",
      description: "We eliminate AI hallucinations. Our RAG architectures force models to cite verified internal documents before making decisions."
    },
    {
      title: "Immediate Operational ROI",
      description: "We focus exclusively on high-ROI use cases like automated document processing, predictive routing, and intelligent CRM integrations."
    }
  ],
  processTitle: "Our Approach to AI Implementation",
  processDescription: "We don't build novelty chatbots. We build scalable software assets that integrate seamlessly into your company's operational workflow. Our team maps your existing bottlenecks and deploys custom AI workflows in aggressive 60-day sprints to ensure rapid time-to-market.",
  ctaText: "Schedule an AI Audit",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

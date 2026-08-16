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
  heroTitle: "Top AI Development Company for US Enterprises",
  heroSubtitle: "As a leading AI Development Company, EduraTech engineers deterministic, highly secure Enterprise AI Solutions that automate cognitive labor and eliminate manual bottlenecks without ever compromising your sensitive corporate data.",
  benefitsTitle: "Why Forward-Thinking Companies Choose Our Enterprise AI Solutions",
  benefits: [
    {
      title: "Uncompromising Data Security & Privacy",
      description: "We expertly deploy private Large Language Models (LLMs) and vector databases directly onto your own cloud infrastructure, whether that is AWS or Azure. You can rest assured that your proprietary corporate data is never utilized to train public models, maintaining complete data sovereignty and strict compliance with all major data protection regulations."
    },
    {
      title: "Highly Deterministic and Reliable Outputs",
      description: "As your dedicated AI Development Company, we eliminate the risk of AI hallucinations that plague generic solutions. Our advanced Retrieval-Augmented Generation (RAG) architectures force the artificial intelligence models to precisely cite verified internal company documents before making any decisions, ensuring that every output is trustworthy, accurate, and completely reliable for enterprise deployment."
    },
    {
      title: "Immediate and Measurable Operational ROI",
      description: "Instead of chasing novelty tech trends, EduraTech focuses exclusively on implementing high-ROI use cases that deliver immediate financial value. We specialize in building automated document processing pipelines, predictive routing systems, and intelligent CRM integrations that drastically reduce administrative overhead and accelerate your company's operational throughput from day one."
    }
  ],
  processTitle: "Our Strategic Approach to Enterprise AI Implementation",
  processDescription: "At EduraTech, we absolutely do not build novelty chatbots or superficial tech demos. We build highly scalable, proprietary Enterprise AI Solutions that integrate seamlessly into your company's existing operational workflows to deliver real business value. Our experienced team of senior AI architects meticulously maps your existing bottlenecks, data silos, and manual processes to design a custom architecture. From there, we deploy these custom AI workflows in aggressive 60-day engineering sprints to ensure rapid time-to-market, allowing your organization to quickly leverage artificial intelligence as a significant competitive advantage in your industry.",
  ctaText: "Schedule an AI Strategy Audit with EduraTech",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

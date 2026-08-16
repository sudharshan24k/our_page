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
  heroTitle: "Top AI Development Company USA",
  heroSubtitle: "As a premier AI Development Company USA, EduraTech builds highly secure, regulatory-compliant AI workflows and proprietary machine learning models exclusively for forward-thinking American enterprises.",
  benefitsTitle: "Why US Enterprises Partner with Our Enterprise AI Architects",
  benefits: [
    {
      title: "Secure, Private Cloud Infrastructure",
      description: "Our dedicated Enterprise AI Architects expertly deploy advanced open-source models inside your own US-based cloud environments, including AWS and Azure. This rigorous approach absolutely guarantees complete data sovereignty, ensuring your corporate intellectual property never leaves your private network."
    },
    {
      title: "Uncompromising Regulatory Compliance",
      description: "We understand that American businesses face intense regulatory scrutiny. At EduraTech, we skillfully navigate complex US regulations such as HIPAA, SOC2, and FINRA to ensure your AI implementations are legally bulletproof, fully compliant, and completely ready for enterprise-wide deployment."
    },
    {
      title: "Strategic AI Consulting and Implementation",
      description: "We do not merely write code; our seasoned, US-based strategists work closely with your leadership to meticulously identify specific operational bottlenecks. We ensure that every AI initiative we undertake delivers immediate, measurable return on investment for your organization."
    }
  ],
  processTitle: "Building Proprietary AI Assets with EduraTech",
  processDescription: "The future of enterprise value is increasingly driven by proprietary data. As a leading AI Development Company USA, EduraTech helps American companies fully harness the untapped potential of their internal data silos. We specialize in designing and building highly secure, private Retrieval-Augmented Generation (RAG) systems and fine-tuning advanced machine learning models. By partnering with our Enterprise AI Architects, you can confidently turn your historical operational data into an active, insurmountable competitive advantage in your specific industry.",
  ctaText: "Schedule an AI Consultation with EduraTech",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

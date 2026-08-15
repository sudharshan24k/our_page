import { CommercialLandingPage, LandingPageConfig } from "@/components/sections/CommercialLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Company USA | Top US Engineers - EduraTech",
  description: "Premier software development company in the USA. We provide onshore engineering talent to build scalable, secure enterprise applications.",
  alternates: {
    canonical: "/software-development-company-usa",
  },
};

const config: LandingPageConfig = {
  heroTagline: "US-Based Engineering",
  heroTitle: "Software Development Company USA",
  heroSubtitle: "Partner with elite onshore engineering talent. We build scalable, secure enterprise applications without the communication breakdowns of offshore teams.",
  benefitsTitle: "Why Partner With a US Firm?",
  benefits: [
    {
      title: "Zero Communication Lag",
      description: "Operate in the same time zone. No more waiting 24 hours for a simple bug fix or misinterpreting complex business logic."
    },
    {
      title: "Strict Legal Compliance",
      description: "Ensure your intellectual property and customer data remain protected under stringent US data privacy laws and NDAs."
    },
    {
      title: "Enterprise Code Quality",
      description: "We don't cut corners. Our senior US-based engineers write maintainable, tested, and secure code designed to pass rigorous audits."
    }
  ],
  processTitle: "Your Strategic Technical Partner",
  processDescription: "We act as an extension of your executive team. Whether you need to build a complex SaaS application from scratch or modernize a failing legacy system, our US-based architects provide the strategic oversight and flawless execution required to succeed in a competitive market.",
  ctaText: "Talk to a US Architect",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

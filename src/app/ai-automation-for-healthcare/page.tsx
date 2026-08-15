import { CommercialLandingPage, LandingPageConfig } from "@/components/sections/CommercialLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Healthcare & Medical Billing - EduraTech",
  description: "Secure, HIPAA-compliant AI automation for healthcare. Automate medical billing, document processing, and patient scheduling.",
  alternates: {
    canonical: "/ai-automation-for-healthcare",
  },
};

const config: LandingPageConfig = {
  heroTagline: "Healthcare Tech",
  heroTitle: "AI Automation for Healthcare Providers",
  heroSubtitle: "Deploy secure, HIPAA-compliant AI to automate medical billing, unstructured document processing, and administrative overhead.",
  benefitsTitle: "Transforming Medical Operations",
  benefits: [
    {
      title: "HIPAA-Compliant AI",
      description: "Our AI architectures are deployed in private, secure cloud environments (AWS GovCloud / Azure Health), ensuring total patient data privacy."
    },
    {
      title: "Automated Document Parsing",
      description: "Instantly extract ICD-10 codes, patient histories, and unstructured data from faxes, PDFs, and handwritten notes."
    },
    {
      title: "Reduced Claim Denials",
      description: "Pre-validate claims and automate the revenue cycle management (RCM) process to dramatically lower denial rates and speed up cash flow."
    }
  ],
  processTitle: "Solving Healthcare Bottlenecks",
  processDescription: "Healthcare administration is drowning in manual data entry. We build customized LLM pipelines and OCR tools that read and route medical documents exactly like a human administrator, but instantly. Stop forcing your medical staff to do clerical work.",
  ctaText: "Schedule a Healthcare AI Audit",
};

export default function Page() {
  return <CommercialLandingPage config={config} />;
}

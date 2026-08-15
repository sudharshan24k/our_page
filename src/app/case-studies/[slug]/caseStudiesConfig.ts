export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  category: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  problemText: string;
  existingArchitecture: string;
  solutionIntro: string;
  solutionSteps: string[];
  technologyStack: string[];
  implementationTimeline: string;
  beforeAfter: { before: string; after: string };
  quantifiedResult: string;
  clientQuote: { text: string; author: string; role: string };
  diagramSteps: { label: string; description: string }[];
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "healthcare-invoice-ai": {
    slug: "healthcare-invoice-ai",
    client: "National Healthcare Network",
    industry: "Healthcare / Medical Billing",
    category: "AI Automation",
    metric: "280 hrs",
    metricLabel: "Saved Monthly",
    challenge: "Manual processing of 4,000+ complex medical invoices per month leading to extreme administrative overhead and high error rates.",
    problemText: "The billing department was overwhelmed, manually reviewing and typing data from over 4,000 PDF and image-based invoices into their internal systems every month. This resulted in significant data entry errors, delayed payments, and high administrative burnout.",
    existingArchitecture: "A legacy on-premise document management system hooked into manual data entry workflows and a 15-year-old proprietary SQL database.",
    solutionIntro: "We engineered a secure, HIPAA-compliant OCR and LLM extraction pipeline to fully automate invoice data parsing.",
    solutionSteps: [
      "Secure OCR Pipeline: Deployed AWS Textract to parse raw text from varied invoice templates.",
      "LLM Extraction: Utilized a fine-tuned LLM to semantically understand and extract specific billing codes, dates, and amounts regardless of invoice layout.",
      "Validation Engine: Built a deterministic validation layer that flagged anomalies for human review while auto-approving 90%+ of documents."
    ],
    technologyStack: ["Python", "AWS Textract", "OpenAI API", "PostgreSQL", "Next.js"],
    implementationTimeline: "12 Weeks (from audit to full production deployment)",
    beforeAfter: {
      before: "4,000 invoices manually processed, 6% error rate, 4-day processing backlog.",
      after: "90% of invoices auto-processed instantly, 99.4% extraction accuracy, zero backlog."
    },
    quantifiedResult: "Achieved 99.4% extraction accuracy and eliminated 280 hours of manual data entry per month, saving over $140k in annual operational overhead.",
    clientQuote: {
      text: "This pipeline completely changed how our billing department operates. We've eliminated our backlog entirely and our staff can finally focus on exception handling rather than typing.",
      author: "Sarah Jenkins",
      role: "VP of Operations"
    },
    diagramSteps: [
      { label: "1. PDF Ingestion", description: "Invoices securely uploaded to S3" },
      { label: "2. OCR Processing", description: "AWS Textract extracts raw text" },
      { label: "3. LLM Parsing", description: "Semantic extraction of line items" },
      { label: "4. Database Sync", description: "Structured data written to Postgres" }
    ]
  },
  "global-saas-lead-generation": {
    slug: "global-saas-lead-generation",
    client: "Global SaaS Provider",
    industry: "B2B SaaS",
    category: "Lead Generation",
    metric: "+215%",
    metricLabel: "Lead Velocity",
    challenge: "High drop-off rates in enterprise trial signups due to a complex, multi-step onboarding flow.",
    problemText: "The company had a great product but a leaky funnel. Their signup process was built for engineers, not decision-makers. Executives were abandoning the form because it asked for too much technical detail upfront.",
    existingArchitecture: "A generic HubSpot form embedded into a WordPress landing page, manually synced to Salesforce via zapier.",
    solutionIntro: "We rebuilt the front-end to prioritize conversion rate optimization (CRO) while dynamically enriching details in the background.",
    solutionSteps: [
      "Progressive Profiling: Rebuilt the form to ask only for a business email initially. We enriched the data in the background using Clearbit API.",
      "Frictionless UX: Transitioned the multi-page form into a single, lightning-fast modal interface built on React.",
      "Real-time CRM Sync: Leads were routed instantly to Salesforce via direct API integration."
    ],
    technologyStack: ["React", "Next.js", "Clearbit API", "Salesforce API", "Vercel"],
    implementationTimeline: "6 Weeks",
    beforeAfter: {
      before: "8-field form causing a 75% bounce rate on the pricing page.",
      after: "1-field email capture with background enrichment, dropping bounce rate to 20%."
    },
    quantifiedResult: "Increased enterprise lead velocity by 215% within 90 days, directly attributing to $4.2M in new potential revenue pipeline.",
    clientQuote: {
      text: "Edura didn't just redesign a form; they engineered a revenue engine. The quality of our sales calls skyrocketed because we had all the firmographic data before we even picked up the phone.",
      author: "Michael Chen",
      role: "Chief Marketing Officer"
    },
    diagramSteps: [
      { label: "1. Business Email Entered", description: "User enters single field" },
      { label: "2. Background Enrichment", description: "Clearbit API fetches firmographic data" },
      { label: "3. CRM Sync Pipeline", description: "Instant write to Salesforce CRM" },
      { label: "4. Actionable Alerts", description: "Slack notification triggers sales follow-up" }
    ]
  },
  "fintech-cac-reduction": {
    slug: "fintech-cac-reduction",
    client: "Fintech Startup",
    industry: "Financial Technology",
    category: "Cost Reduction",
    metric: "-40%",
    metricLabel: "CAC Reduction",
    challenge: "Scaling user acquisition was becoming prohibitively expensive due to inefficient ad landing pages.",
    problemText: "As they scaled their ad spend, their customer acquisition cost (CAC) skyrocketed. They were sending all traffic, regardless of the ad they clicked, to a generic homepage, resulting in massive bounce rates.",
    existingArchitecture: "A monolithic React single-page application hosted on standard cloud instances with slow initial load times.",
    solutionIntro: "We developed personalized, dynamic landing pages based on traffic source and user intent to align expectations instantly.",
    solutionSteps: [
      "Dynamic Routing: Built a Next.js architecture that read UTM parameters and instantly rendered personalized landing pages.",
      "A/B Testing Infrastructure: Implemented edge-based split testing for rapid iteration."
    ],
    technologyStack: ["Next.js", "Vercel Edge Functions", "Tailwind CSS", "Redis"],
    implementationTimeline: "8 Weeks",
    beforeAfter: {
      before: "Static homepage for all ad traffic resulting in $150 CAC.",
      after: "Dynamically generated, intent-matched landing pages dropping CAC to $90."
    },
    quantifiedResult: "Scaled user acquisition rapidly while reducing Customer Acquisition Cost (CAC) by 40%, stretching the marketing budget significantly.",
    clientQuote: {
      text: "The edge-rendering infrastructure allowed us to scale our ad spend profitably for the first time. The ROI on this engineering project was less than 30 days.",
      author: "David Alpert",
      role: "Head of Growth"
    },
    diagramSteps: [
      { label: "1. Ad Click with UTM", description: "Parameters define target campaign" },
      { label: "2. Edge Detection", description: "Vercel edge functions read parameters" },
      { label: "3. Dynamic Component Injection", description: "Next.js swaps copy and layouts instantly" },
      { label: "4. Conversion Complete", description: "User signs up, decreasing bounce rates" }
    ]
  },
  "logistics-partner-portal-automation": {
    slug: "logistics-partner-portal-automation",
    client: "B2B Logistics Firm",
    industry: "Logistics & Supply Chain",
    category: "Automation",
    metric: "120 hrs",
    metricLabel: "Saved Monthly",
    challenge: "Sales team spent countless hours manually qualifying and onboarding new supply chain partners.",
    problemText: "Highly paid sales executives were acting as administrative assistants. They spent hours emailing PDFs, chasing signatures, and manually qualifying logistics partners who often didn't meet the minimum volume requirements.",
    existingArchitecture: "Manual email threads, static PDF contracts, and disjointed Google Sheets for tracking.",
    solutionIntro: "We automated the entire client qualification and onboarding flow through a custom web portal.",
    solutionSteps: [
      "Automated Qualification Gateway: Built a self-serve partner portal with automated logic-gates based on shipping volume.",
      "Digital Onboarding: Digitized contracts and integrated e-signatures directly into the web flow."
    ],
    technologyStack: ["React", "Node.js", "DocuSign API", "AWS DynamoDB"],
    implementationTimeline: "10 Weeks",
    beforeAfter: {
      before: "14 days average to manually qualify and onboard a new carrier.",
      after: "Fully automated, self-serve onboarding completed in under 1 hour."
    },
    quantifiedResult: "Saved the sales team 120 hours monthly, allowing them to focus entirely on closing high-tier enterprise accounts.",
    clientQuote: {
      text: "Automating the partner vetting process gave my sales team their time back. We've increased our enterprise close rate simply because we actually have time to talk to them now.",
      author: "Marcus Vance",
      role: "Director of Sales"
    },
    diagramSteps: [
      { label: "1. Partner Portal Signup", description: "Candidate inputs cargo & route details" },
      { label: "2. Qualification Engine", description: "Dynamic verification filters out unqualified leads" },
      { label: "3. Automated Contract", description: "E-signatures processed via DocuSign API" },
      { label: "4. Access Granted", description: "Logistics carrier database access opened" }
    ]
  }
};

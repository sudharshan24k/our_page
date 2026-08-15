export interface CaseStudy {
  slug: string;
  client: string;
  category: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  impact: string;
  problemText: string;
  solutionIntro: string;
  solutionSteps: string[];
  bottomLineText: string;
  diagramSteps: { label: string; description: string }[];
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "global-saas-lead-generation": {
    slug: "global-saas-lead-generation",
    client: "Global SaaS Provider",
    category: "Lead Generation",
    metric: "+215%",
    metricLabel: "Lead Velocity",
    challenge: "High drop-off rates in enterprise trial signups due to a complex, multi-step onboarding flow.",
    impact: "Increased enterprise lead velocity by 215% within 90 days, generating $4.2M in pipeline.",
    problemText: "The company had a great product but a leaky funnel. Their signup process was built for engineers, not decision-makers. Executives were abandoning the form because it asked for too much technical detail upfront.",
    solutionIntro: "We rebuilt the front-end to prioritize conversion rate optimization (CRO) while dynamically enriching details in the background.",
    solutionSteps: [
      "Progressive Profiling: Rebuilt the form to ask only for a business email initially. We enriched the data in the background using Clearbit API, capturing the company size and industry without asking the user.",
      "Frictionless UX: Transitioned the multi-page form into a single, lightning-fast modal interface built on React, reducing the perceived effort required to sign up.",
      "Real-time CRM Sync: Leads were routed instantly to Salesforce with full enrichment data, allowing the sales team to call high-value prospects within 5 minutes of signup."
    ],
    bottomLineText: "By removing friction and automating the data gathering, we unlocked a massive bottleneck. The business result was a 215% increase in qualified leads entering the sales pipeline, directly attributing to $4.2M in new potential revenue in just one quarter.",
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
    category: "Cost Reduction",
    metric: "-40%",
    metricLabel: "CAC Reduction",
    challenge: "Scaling user acquisition was becoming prohibitively expensive due to inefficient ad landing pages.",
    impact: "Scaled user acquisition rapidly while reducing Customer Acquisition Cost (CAC) by 40%.",
    problemText: "As they scaled their ad spend, their customer acquisition cost (CAC) skyrocketed. They were sending all traffic, regardless of the ad they clicked, to a generic homepage, resulting in massive bounce rates.",
    solutionIntro: "We developed personalized, dynamic landing pages based on traffic source and user intent to align expectations instantly.",
    solutionSteps: [
      "Dynamic Routing: We built a Next.js architecture that read the UTM parameters of incoming traffic and instantly rendered a personalized landing page tailored to that specific user's intent.",
      "A/B Testing Infrastructure: We implemented edge-based split testing, allowing us to test hundreds of headline and call-to-action variations without slowing down the page load speed."
    ],
    bottomLineText: "Relevance equals revenue. By ensuring the user saw exactly what they clicked on, conversion rates doubled. This efficiency meant the fintech startup could acquire new users for 40% less than before, allowing them to stretch their marketing budget further and outpace competitors.",
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
    category: "Automation",
    metric: "120 hrs",
    metricLabel: "Saved Monthly",
    challenge: "Sales team spent countless hours manually qualifying and onboarding new supply chain partners.",
    impact: "Saved the sales team 120 hours monthly, allowing them to focus entirely on closing high-tier accounts.",
    problemText: "Highly paid sales executives were acting as administrative assistants. They spent hours emailing PDFs, chasing signatures, and manually qualifying logistics partners who often didn't meet the minimum volume requirements.",
    solutionIntro: "We automated the entire client qualification and onboarding flow through a custom web portal.",
    solutionSteps: [
      "Automated Qualification Gateway: We built a self-serve partner portal. Prospective partners had to pass an automated logic-gate based on their shipping volume before they could even book a call with sales.",
      "Digital Onboarding: We digitized all contracts and compliance documents, integrating e-signatures directly into the web flow."
    ],
    bottomLineText: "Technology should amplify human effort, not replace it. By automating the low-value administrative tasks, we freed up 120 hours of the sales team's time every month. They redirected this time to closing enterprise-level accounts, directly boosting top-line revenue without hiring more staff.",
    diagramSteps: [
      { label: "1. Partner Portal Signup", description: "Candidate inputs cargo & route details" },
      { label: "2. Qualification Engine", description: "Dynamic verification filters out unqualified leads" },
      { label: "3. Automated Contract", description: "E-signatures processed via DocuSign API" },
      { label: "4. Access Granted", description: "Logistics carrier database access opened" }
    ]
  },
  "healthcare-tech-demo-acceleration": {
    slug: "healthcare-tech-demo-acceleration",
    client: "Healthcare Tech",
    category: "Lead Generation",
    metric: "3x",
    metricLabel: "Demo Requests",
    challenge: "A clinical compliance product was struggling to communicate its value proposition clearly.",
    impact: "Tripled inbound demo requests from hospital administrators within the first quarter.",
    problemText: "They had a brilliant compliance product that ensured hospitals remained compliant with complex regulations. But their website looked outdated and read like an instruction manual, failing to build trust with risk-averse hospital administrators.",
    solutionIntro: "We overhauled the site architecture and messaging, prioritizing outcome-based copywriting and trust signals.",
    solutionSteps: [
      "Authority Redesign: We overhauled the entire aesthetic to look enterprise, secure, and modern. We implemented dark-mode visuals with 'glassmorphic' elements that subconsciously signal high-end technology.",
      "Outcome-Based Messaging: We rewrote the copy. Instead of talking about 'cloud-based architecture,' we focused on business outcomes: 'Pass your next audit with zero infractions.'",
      "Trust Engineering: We prominently displayed security badges (HIPAA compliant, SOC2) and case studies next to every call-to-action to alleviate risk anxiety."
    ],
    bottomLineText: "Hospital administrators don't buy software; they buy risk reduction. By redesigning the platform to look secure and speak their language, trust skyrocketed. The result was a 300% increase in demo requests from their ideal, high-value target audience.",
    diagramSteps: [
      { label: "1. Secure Landing Page", description: "Hospital administrator visits secure site" },
      { label: "2. Compliance Signposts", description: "HIPAA & SOC2 credentials display" },
      { label: "3. Direct Demo Form", description: "Calendar booking directly linked" },
      { label: "4. Booked Discovery", description: "Lead flows directly to sales pipelines" }
    ]
  },
  "ecommerce-checkout-speed-optimization": {
    slug: "ecommerce-checkout-speed-optimization",
    client: "E-Commerce Infrastructure",
    category: "Performance",
    metric: "< 1s",
    metricLabel: "Load Time",
    challenge: "Slow checkout API integrations were causing high cart abandonment for their merchants.",
    impact: "Achieved sub-second load times globally, resulting in a 28% increase in merchant conversion rates.",
    problemText: "Every second a checkout page takes to load, conversion rates drop by roughly 7%. This infrastructure provider's checkout flow was taking 4-5 seconds, costing their merchants millions in abandoned carts.",
    solutionIntro: "We rebuilt the front-end architecture using a modern edge-rendering framework for instant interactions.",
    solutionSteps: [
      "Edge Computing: We moved their rendering logic from a centralized server to the 'Edge' (servers distributed globally). This meant a user in Tokyo loaded the page from a server in Tokyo, not New York.",
      "Optimized Asset Delivery: We compressed and deferred non-essential scripts, ensuring the 'Buy' button and payment fields rendered instantly before anything else."
    ],
    bottomLineText: "Speed is revenue. By solving the technical latency issue, we brought load times under one second globally. This frictionless experience directly translated to a 28% increase in completed checkouts, saving millions in otherwise lost revenue for their merchants.",
    diagramSteps: [
      { label: "1. Add to Cart", description: "User enters checkout pipeline" },
      { label: "2. Edge Node Rendering", description: "Fast Vercel Edge CDN resolution" },
      { label: "3. Serverless Payment API", description: "Stripe API processing optimized" },
      { label: "4. Order Confirmed", description: "Transaction complete under 1 second" }
    ]
  },
  "enterprise-ai-roi-calculator-generation": {
    slug: "enterprise-ai-roi-calculator-generation",
    client: "Enterprise AI Platform",
    category: "Lead Generation",
    metric: "$1.8M",
    metricLabel: "ARR Generated",
    challenge: "Inability to capture mid-market leads effectively despite high top-of-funnel traffic.",
    impact: "Captured 450+ qualified mid-market leads, directly attributing to $1.8M in new ARR.",
    problemText: "They had great traffic from their blog, but visitors were reading and leaving. They had no mechanism to capture the contact information of mid-market buyers who were researching AI solutions.",
    solutionIntro: "We implemented an interactive ROI calculator and a gated, high-value technical whitepaper strategy.",
    solutionSteps: [
      "Interactive ROI Calculator: We built a custom, interactive web application where users could input their current operational costs. The tool would instantly calculate how much money the AI platform would save them.",
      "Strategic Gating: To see the final, detailed ROI report, the user had to input their corporate email address."
    ],
    bottomLineText: "Instead of begging for emails with a generic 'Subscribe to our newsletter' form, we traded high-value, personalized financial data for contact information. This value exchange generated 450 highly qualified leads, resulting in $1.8M in Annual Recurring Revenue (ARR).",
    diagramSteps: [
      { label: "1. ROI Tool Landing", description: "User explores efficiency potential" },
      { label: "2. Cost Parameters Entered", description: "Inputs metrics on operational hours" },
      { label: "3. Email Gate", description: "Access detailed PDF appraisal report" },
      { label: "4. Pipeline Qualified", description: "Lead details sync to CRM instantly" }
    ]
  },
  "hr-software-onboarding-gamification": {
    slug: "hr-software-onboarding-gamification",
    client: "HR Management Software",
    category: "Performance",
    metric: "85%",
    metricLabel: "Onboarding Completion",
    challenge: "Users were abandoning the platform during the complex initial setup phase.",
    impact: "Boosted onboarding completion rates from 32% to 85%, significantly reducing early churn.",
    problemText: "The sales team was closing deals, but customers were cancelling within the first 30 days. The software was so powerful that it was overwhelming; users couldn't figure out how to set it up and simply gave up.",
    solutionIntro: "We designed a gamified, step-by-step product walkthrough integrated directly into the web application.",
    solutionSteps: [
      "In-App Guidance: We engineered a seamless, step-by-step onboarding overlay built directly into the software interface. It guided users through exactly where to click to set up their first campaign.",
      "Gamification: We broke the massive setup process into small, manageable 'quests' with progress bars and visual rewards upon completion."
    ],
    bottomLineText: "A sold customer is only valuable if they actually use the product. By fixing the user experience to make onboarding feel easy and rewarding, completion rates jumped to 85%. This drastically reduced early cancellations, securing the long-term recurring revenue of those accounts.",
    diagramSteps: [
      { label: "1. Account Initialized", description: "First-time user logins" },
      { label: "2. Progressive Onboarding", description: "Gamified overlays show step-by-step tips" },
      { label: "3. Milestones Finished", description: "Progress metrics track configurations" },
      { label: "4. Active User Status", description: "High retention, reducing monthly churn" }
    ]
  },
  "manufacturing-erp-sales-cycle-reduction": {
    slug: "manufacturing-erp-sales-cycle-reduction",
    client: "Manufacturing ERP",
    category: "Automation",
    metric: "50%",
    metricLabel: "Faster Sales Cycle",
    challenge: "Long, complex sales cycles due to prospects not understanding the software capabilities beforehand.",
    impact: "Educated prospects arrived at sales calls ready to buy, cutting the average sales cycle in half.",
    problemText: "Selling a massive ERP system to factories is hard. Prospects couldn't visualize how it worked, leading to endless rounds of demo calls, questions, and stalled negotiations. The sales cycle was taking over 9 months.",
    solutionIntro: "We built a robust 'Capabilities Tour' section with interactive, self-serve product demos.",
    solutionSteps: [
      "Self-Serve Interactive Demos: We built a sandbox environment on their website. Prospects could click through a simulated version of the software, experiencing the core features without needing to talk to a human.",
      "Contextual Education: Alongside the interactive demo, we provided clear, layman explanations of what each feature did and why it mattered to factory output."
    ],
    bottomLineText: "We shifted the burden of education from the sales team to the website. By the time prospects booked a call, they already understood the software and knew they wanted it. This self-education cut the sales cycle in half, allowing the company to close twice as many deals in the same timeframe.",
    diagramSteps: [
      { label: "1. Website Tour Visit", description: "Prospect checks system capacities" },
      { label: "2. Interactive Sandbox Run", description: "Self-serve demo models features" },
      { label: "3. Direct Action CTA", description: "Calendar booking pops up" },
      { label: "4. Shortened Closing", description: "Pre-educated prospect signs contract" }
    ]
  }
};

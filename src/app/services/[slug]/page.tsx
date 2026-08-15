import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

const serviceTemplates: Record<string, {
  title: string;
  metaTitle: string;
  metaDescription: string;
  headerTitle: string;
  leadIntro: string;
  bulletTitle: string;
  whyText: string;
  bullets: string[];
  detailsTitle: string;
  detailsContent: string[];
}> = {
  "custom-software-development": {
    title: "Custom Software Development",
    metaTitle: "Custom Software Development Company",
    metaDescription: "We build custom software exactly tailored to your business model, workflows, and goals. Practical. Scalable. Maintainable.",
    headerTitle: "Custom Software Development Built for Your Business",
    leadIntro: "We build custom software exactly tailored to your business model, workflows, and goals. Practical. Scalable. Maintainable.",
    bulletTitle: "When Custom Software Makes Sense",
    whyText: "Many businesses use software that doesn't fit their actual processes. They either overpay for features they don't use, or waste hours working around limitations of generic solutions.",
    bullets: [
      "Tailored workflow automation to eliminate manual tasks.",
      "Custom CRM/ERP systems that map to your exact processes.",
      "Scalable infrastructure designed for long-term reliability."
    ],
    detailsTitle: "Our Strategic Approach",
    detailsContent: [
      "We build systems that are easy to manage and grow with your business, avoiding licensing fees of generic SaaS systems.",
      "Every project starts with a detailed audit to ensure your technology matches your strategic operational goals."
    ]
  },
  "ai-development": {
    title: "AI Development",
    metaTitle: "AI Development Company",
    metaDescription: "Practical AI and machine learning integrations built to automate high-volume operations and decision pipelines.",
    headerTitle: "AI Development Built for Business Growth",
    leadIntro: "Implement practical AI solutions that automate cognitive labor, extract data from unstructured documents, and accelerate operations.",
    bulletTitle: "Where AI Adds Immediate Value",
    whyText: "We focus exclusively on deterministic, high-accuracy AI integrations that solve real bottlenecks instead of chasing trends.",
    bullets: [
      "Document parsing and data extraction tools.",
      "Vector search engines trained on private documents.",
      "Strategic model fine-tuning for custom decision-making."
    ],
    detailsTitle: "Secure and Reliable Integrations",
    detailsContent: [
      "We design AI architectures with strict safety guardrails, hosting databases on private clouds to maintain complete security.",
      "By connecting AI workflows with your existing APIs, we make intelligent workflows a natural extension of your operational stack."
    ]
  },
  "generative-ai-development": {
    title: "Generative AI Development",
    metaTitle: "Generative AI Development Company",
    metaDescription: "Get custom Generative AI solutions. We build advanced GPT implementations, LLM integration, and fine-tuning optimized for corporate growth.",
    headerTitle: "Generative AI Development Designed to Scale",
    leadIntro: "Leverage advanced large language models (LLMs) to automate operations, construct custom tools, and secure competitive leverage.",
    bulletTitle: "Custom LLM Integrations That Deliver Value",
    whyText: "We build custom LLM infrastructure, fine-tune models on your private corporate databases, and design advanced prompt routing pipelines.",
    bullets: [
      "Advanced prompt engineering and agentic workflows.",
      "Private databases fine-tuning to protect corporate data.",
      "Integrations with leading models including Gemini, GPT-4, and Claude."
    ],
    detailsTitle: "Deploy Generative AI Safely and Securely",
    detailsContent: [
      "Generative AI should be safe, practical, and highly secure. We design systems that run locally or in private clouds to protect client information.",
      "Our engineering focus is on deterministic outputs and advanced guardrails to ensure your corporate AI assistants behave reliably in production."
    ]
  },
  "ai-automation": {
    title: "AI Automation",
    metaTitle: "AI Automation Solutions & Workflows",
    metaDescription: "Automate high-volume workflows with custom AI automation solutions. Reclaim staff hours, eliminate data errors, and scale efficiency.",
    headerTitle: "AI Automation Services built for Scale",
    leadIntro: "Reclaim hundreds of hours of manual labor by integrating advanced AI workflows directly into your operational stack.",
    bulletTitle: "Remove Manual Roadblocks",
    whyText: "We specialize in building workflows that think, classify, and decide exactly like your best human employees, but at scale.",
    bullets: [
      "Document parsing and data ingestion.",
      "Smart decision routing pipelines.",
      "Automated client updates and email follow-ups."
    ],
    detailsTitle: "Continuous Efficiency Gains",
    detailsContent: [
      "AI automation allows growing businesses to scale transaction volume without hiring additional administrative headcount.",
      "We integrate with your existing platforms, CRMs, and email clients to deploy automated flows with minimal disruption."
    ]
  },
  "ai-chatbot-development": {
    title: "AI Chatbot Development",
    metaTitle: "Custom AI Chatbot Development",
    metaDescription: "Deploy smart, conversational AI chatbots trained on your internal database. Automate customer support and schedule sales calls around the clock.",
    headerTitle: "Conversational AI Chatbot Development",
    leadIntro: "Engage visitors, answer inquiries, and schedule sales calls automatically with intelligent chatbots that speak in your brand voice.",
    bulletTitle: "24/7 Intelligent Customer Service",
    whyText: "Our custom chatbots utilize semantic memory and advanced prompts to deliver human-like support instantly.",
    bullets: [
      "Multi-channel support (web, WhatsApp, Slack).",
      "Direct calendar booking integration.",
      "Automatic handoff to human support representatives."
    ],
    detailsTitle: "Frictionless Engagement",
    detailsContent: [
      "An intelligent chatbot shortens response times to seconds, turning cold traffic into qualified sales calls instantly.",
      "We build custom front-ends to match your branding, ensuring a premium user experience."
    ]
  },
  "rag-development": {
    title: "RAG Development",
    metaTitle: "RAG Development & Vector Search Solutions",
    metaDescription: "Build high-accuracy Retrieval-Augmented Generation (RAG) systems. Query private databases and documents safely and with zero hallucinations.",
    headerTitle: "Enterprise RAG Development Services",
    leadIntro: "Turn your unstructured text, PDFs, and corporate documents into a searchable, intelligent database using RAG systems.",
    bulletTitle: "Eliminate Hallucinations Safely",
    whyText: "We engineer RAG pipelines that ground LLM responses in your verified company data, ensuring zero hallucinations.",
    bullets: [
      "Vector databases indexing (Pinecone, PGVector, Qdrant).",
      "Advanced hybrid search and semantic re-ranking.",
      "Secure, private cloud hosting options."
    ],
    detailsTitle: "Knowledge Management Redefined",
    detailsContent: [
      "RAG systems allow internal teams to extract answers from thousands of pages of corporate policy, contracts, and transcripts instantly.",
      "We build user-friendly search portals tailored for internal compliance, legal, and operational teams."
    ]
  },
  "web-development": {
    title: "Web Development",
    metaTitle: "Professional Web Development Services",
    metaDescription: "Get high-performance web development. We build secure, custom web applications using Next.js, React, and modern tech stacks.",
    headerTitle: "Custom Web Development Designed for Performance",
    leadIntro: "We engineer fast, secure, and conversion-optimized custom web solutions to support your brand's growth.",
    bulletTitle: "State of the Art Web Architecture",
    whyText: "We build fast-loading custom web solutions that deliver exceptional user experience on every device.",
    bullets: [
      "Modern frameworks including React, Next.js, and TypeScript.",
      "Optimized for core web vitals and instantaneous page loads.",
      "Flawless responsiveness across mobile, tablet, and desktop."
    ],
    detailsTitle: "Build With The Future In Mind",
    detailsContent: [
      "We avoid templates and page builders. Every custom web application we build is hand-coded to ensure performance and clean maintainability.",
      "We set up secure deployments, daily backups, and edge hosting configurations so your digital assets remain secure."
    ]
  },
  "website-development": {
    title: "Website Development",
    metaTitle: "Premium Website Development Company",
    metaDescription: "Partner with a premium website development company. We build fast, responsive websites optimized to capture leads and drive traffic.",
    headerTitle: "Premium Website Development Services",
    leadIntro: "Transform your website into a highly calibrated lead generation asset built on robust, modern technologies.",
    bulletTitle: "Conversion-First Web Engineering",
    whyText: "We build websites that look premium, load instantly, and guide visitors toward your primary calls-to-action.",
    bullets: [
      "Strategic layout designs to capture enterprise interest.",
      "Edge caching and global CDN delivery configurations.",
      "Integrations with standard marketing analytics tools."
    ],
    detailsTitle: "Establish Digital Authority",
    detailsContent: [
      "Your website is the digital headquarters of your business. We ensure it loads instantly and represents your authority.",
      "We build SEO-friendly HTML structures to help your brand rank for high-intent keywords."
    ]
  },
  "ecommerce-development": {
    title: "eCommerce Development",
    metaTitle: "Custom eCommerce Development Services",
    metaDescription: "Get custom eCommerce development. We build fast checkout funnels, custom inventory integrations, and scalable storefronts.",
    headerTitle: "Custom eCommerce Development Solutions",
    leadIntro: "Scale your retail operations with lightning-fast custom checkout flows and inventory systems.",
    bulletTitle: "Calibrated Online Storefronts",
    whyText: "We build tailored shopping experiences that eliminate checkout friction and increase average order values.",
    bullets: [
      "Tailored checkout paths and payment integrations (Stripe, Adyen).",
      "Custom inventory and ERP system sync pipelines.",
      "High-speed page loads to minimize cart abandonment rates."
    ],
    detailsTitle: "Secure Transactions at Scale",
    detailsContent: [
      "Security is paramount in retail. We use clean, modern APIs to process transactions securely and protect customer data.",
      "We build dynamic admin panels to help you manage product listings, coupon codes, and shipping rules easily."
    ]
  },
  "aws-cloud-solutions": {
    title: "AWS Cloud Solutions",
    metaTitle: "AWS Cloud Solutions & Architecture",
    metaDescription: "Optimize your cloud presence with custom AWS solutions. We design serverless architectures, manage cloud migration, and reduce hosting costs.",
    headerTitle: "AWS Cloud Solutions & Architecture",
    leadIntro: "Deploy your applications on scalable, secure AWS infrastructure configured for peak reliability.",
    bulletTitle: "Scale Cloud Infrastructure Reliably",
    whyText: "We design serverless, containerized, and auto-scaling environments using AWS best practices.",
    bullets: [
      "Secure virtual private clouds (VPC) and identity frameworks.",
      "Serverless systems using Lambda, API Gateway, and DynamoDB.",
      "Cost optimization audits to reduce cloud hosting spend."
    ],
    detailsTitle: "Continuous Availability",
    detailsContent: [
      "We implement multi-region backups and automated failovers to ensure your applications stay online 24/7.",
      "We build CI/CD pipelines to deploy updates to your AWS infrastructure safely and automatically."
    ]
  },
  "azure-cloud-solutions": {
    title: "Azure Cloud Solutions",
    metaTitle: "Microsoft Azure Cloud Solutions",
    metaDescription: "Get custom Azure cloud solutions. We build secure enterprise cloud infrastructure, manage Active Directory, and deploy scalable systems.",
    headerTitle: "Azure Cloud Solutions & Enterprise Infrastructure",
    leadIntro: "Run your enterprise applications on secure, compliant Microsoft Azure cloud infrastructure.",
    bulletTitle: "Enterprise Cloud Design",
    whyText: "We build hybrid cloud architectures, manage active directory integrations, and configure secure environments.",
    bullets: [
      "Azure Active Directory (Entra ID) configuration.",
      "Enterprise container hosting via Azure Kubernetes Service (AKS).",
      "Data warehouse implementations with Azure Synapse."
    ],
    detailsTitle: "Compliance and Governance",
    detailsContent: [
      "We ensure your Azure resources align with industry standards including HIPAA, GDPR, and SOC2.",
      "We set up active logging and resource monitoring pipelines to prevent security threats."
    ]
  },
  "api-development": {
    title: "API Development",
    metaTitle: "Custom API Development & Integrations",
    metaDescription: "Build secure, scalable APIs and integration pipelines. We design REST, GraphQL, and webhook solutions to sync data across your systems.",
    headerTitle: "Custom API Development & Systems Integration",
    leadIntro: "Connect your custom software, CRM, and databases with high-speed, secure API pipelines.",
    bulletTitle: "Sync Data Across Your Ecosystem",
    whyText: "We build custom endpoints and webhook integrations to sync database records instantly across platforms.",
    bullets: [
      "Clean API design using REST, GraphQL, or gRPC frameworks.",
      "Secure authentication protocols (OAuth2, JWT, API Keys).",
      "High-throughput data transformations and sync pipelines."
    ],
    detailsTitle: "Documented and Maintainable APIs",
    detailsContent: [
      "We write complete OpenAPI / Swagger documentation to help external developers integrate with your APIs easily.",
      "We set up request rate-limiting and threat protection to safeguard your database from abuse."
    ]
  },
  "data-analytics": {
    title: "Data Analytics",
    metaTitle: "Data Analytics & Business Intelligence",
    metaDescription: "Make data-driven decisions with custom analytics dashboards, database pipelines, and BI tracking for B2B growth.",
    headerTitle: "Data Analytics & Business Intelligence Solutions",
    leadIntro: "Consolidate your disparate data sources into clear, actionable dashboards that drive smart business decisions.",
    bulletTitle: "Visualize Operational Performance",
    whyText: "We build custom database ETL pipelines to aggregate metrics from your advertising, sales, and operations.",
    bullets: [
      "Custom dashboard design (Looker Studio, Tableau, Power BI).",
      "Automated ETL pipelines and SQL data warehouses.",
      "Behavioral tracking setups to measure funnel conversions."
    ],
    detailsTitle: "Transform Data Into Action",
    detailsContent: [
      "Raw data is only valuable if it drives action. We help you define key performance indicators that identify profit opportunities.",
      "We set up daily email reports and alert systems to keep your management team informed of crucial trends."
    ]
  },
  "saas-development": {
    title: "SaaS Development",
    metaTitle: "SaaS Development Company",
    metaDescription: "We build scalable SaaS products from concept to deploy. Multi-tenant database design, secure client segmentation, Stripe billing setups.",
    headerTitle: "SaaS Development Built for Scale",
    leadIntro: "We design and build custom SaaS platforms, taking your concept through prototype, MVP deployment, and robust scaling steps.",
    bulletTitle: "Key Capabilities of Our SaaS Development",
    whyText: "Launching a subscription product requires meticulous security, clean multi-tenancy pipelines, and payment processing rules.",
    bullets: [
      "Multi-tenant database architectures to isolate tenant data safely.",
      "Scalable payment system integration (Stripe, Chargebee).",
      "Robust client organization features, roles, and authorization keys."
    ],
    detailsTitle: "Engineering Ready to Grow",
    detailsContent: [
      "We focus on cloud performance and edge latency optimizations so your global users have a fast interface.",
      "Our clean deployment models allow you to push product iterations continuously without disrupting active clients."
    ]
  },
  "web-application-development": {
    title: "Web Application Development",
    metaTitle: "Custom Web Application Development",
    metaDescription: "We build custom web apps exactly tailored to your business models, database requirements, and back-office pipelines.",
    headerTitle: "Custom Web Applications That Drive Operational Growth",
    leadIntro: "Translate your manual operational systems and complex business rules into high-performance, responsive custom web applications.",
    bulletTitle: "When to Invest in Web Applications",
    whyText: "Generic, off-the-shelf business applications often force your teams into friction-filled workarounds. We design custom layouts that match your ideal flow.",
    bullets: [
      "Highly secure internal web portals and dashboard hubs.",
      "Clean customer login modules and custom account pipelines.",
      "Direct systems integration via custom REST or GraphQL APIs."
    ],
    detailsTitle: "Continuous Operations Management",
    detailsContent: [
      "We build robust database queries and type-safe systems that ensure high speeds and low maintenance costs.",
      "Every web app undergoes extensive cross-browser testing to guarantee a smooth interface on mobile, desktop, and tablets."
    ]
  },
  "crm-development": {
    title: "CRM Development",
    metaTitle: "Custom CRM Development Services",
    metaDescription: "We design custom CRM software that aligns with your sales workflows, pipeline automation, and marketing metrics.",
    headerTitle: "Custom CRM Solutions Tailored for Sales Teams",
    leadIntro: "Stop adapting your sales strategies to match generic CRM templates. We design databases built for your precise lead flows.",
    bulletTitle: "Custom CRM Capabilities",
    whyText: "A CRM should help close deals and automate notifications, not trap your account reps in endless manual logging.",
    bullets: [
      "Dynamic pipeline views and custom client tracking logs.",
      "Automated email, SMS, and WhatsApp alerts for new leads.",
      "Secure roles-based clearance logs for salespeople and managers."
    ],
    detailsTitle: "Data Sync Pipelines",
    detailsContent: [
      "We sync your CRM with your advertising channels, accounting platforms, and operations tools, ensuring total alignment.",
      "By removing friction, your team spends less time filling out fields and more time booking high-value clients."
    ]
  },
  "business-automation": {
    title: "Business Automation",
    metaTitle: "Business Process Automation & Workflows",
    metaDescription: "Scale your capacity without expanding headcount. We engineer automated workflows that handle onboarding, reporting, and data syncs.",
    headerTitle: "Scale Without Hiring: Business Process Automation",
    leadIntro: "Reclaim hours of admin overhead and remove human errors by constructing automated pipelines that operate 24/7.",
    bulletTitle: "Key Processes We Automate",
    whyText: "We audit your operations to locate manual administrative bottlenecks, then build custom APIs to route data.",
    bullets: [
      "Automated lead onboarding, scheduling, and billing flows.",
      "Cross-platform data synchronization to replace spreadsheet copying.",
      "Instant notifications to communication channels (Slack, Teams)."
    ],
    detailsTitle: "Reliable and Modular Systems",
    detailsContent: [
      "We use webhook triggers and serverless scripts so your automations execute instantly and at low hosting costs.",
      "Our modular integrations ensure you can swap out operational components in the future without rebuilding flows."
    ]
  }
};

// Parser to extract base service and city from the URL slug parameter
function parseSlug(slug: string) {
  const keys = Object.keys(serviceTemplates).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (slug.startsWith(key + "-")) {
      let cityPart = slug.substring(key.length + 1);
      if (cityPart.startsWith("in-")) {
        cityPart = cityPart.substring(3);
      }
      const city = cityPart
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { baseServiceKey: key, city };
    }
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};

  const template = serviceTemplates[parsed.baseServiceKey];
  const metaTitle = `${template.metaTitle} in ${parsed.city} | EduraTech`;
  const metaDescription = `${template.metaDescription.slice(0, 100)} serving clients in ${parsed.city}, USA. Practical technology built to scale.`;

  return {
    alternates: {
      canonical: `/services/${slug}`,
    },
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://eduratech.com/services/${slug}`,
    },
  };
}

export default async function DynamicServicePage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) {
    notFound();
  }

  const template = serviceTemplates[parsed.baseServiceKey];
  const city = parsed.city;

  // Localized templates copy replacements
  const headerTitle = template.headerTitle.includes("Your Business")
    ? template.headerTitle.replace("Your Business", `${city} Businesses`)
    : `${template.headerTitle} in ${city}`;

  const leadIntro = template.leadIntro.includes("your business")
    ? template.leadIntro.replace("your business", `your ${city} business`)
    : `${template.leadIntro} serving ${city}.`;

  const whyText = template.whyText.replace("Many businesses", `Many firms in ${city}`);

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://eduratech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://eduratech.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${template.title} in ${city}`,
        "item": `https://eduratech.com/services/${slug}`
      }
    ]
  };

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${template.title} Services in ${city}`,
    "description": `Professional B2B technical solutions for ${template.title.toLowerCase()} in ${city}, USA.`,
    "provider": {
      "@type": "Organization",
      "name": "Edura Technologies",
      "url": "https://eduratech.com"
    },
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "serviceType": "Software & AI Development"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />

      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold text-primary mb-6">
                Now serving {city}, USA
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                {headerTitle}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                {leadIntro}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                  Get a Free Estimate in {city}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/how-we-work" className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all">
                  View Our Process
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                {template.bulletTitle}
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    {whyText}
                  </p>
                  <ul className="space-y-4">
                    {template.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                {template.detailsTitle}
              </h2>
              <div className="space-y-6 text-zinc-400 font-light text-base md:text-lg leading-relaxed">
                {template.detailsContent.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Dynamic Project Cost Calculator CTA */}
      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
          <Container className="text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">Estimate Your Project Budget</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                Need a ballpark budget range and timeline projection for your software build in {city}? Use our interactive cost calculator to build your spec report in minutes.
              </p>
              <Link href="/project-cost-calculator" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Try Project Cost Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

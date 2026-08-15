import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/insights",
  },
  title: "EduraTech Insights - AI & Software Development Articles",
  description: "Expert guides on custom software development, AI implementation, business automation, and digital transformation for small businesses.",
  openGraph: {
    title: "EduraTech Insights - AI & Software Development",
    description: "Learn about software development costs, AI adoption, automation opportunities, and technology strategy for growing businesses.",
    url: "https://www.eduratech.com/insights",
  },
};

const articles = [
  {
    title: "AI Automation for US Law Firms: Risk, Compliance, and ROI",
    slug: "ai-automation-law-firms",
    description: "How top-tier law firms are securely implementing AI for contract analysis, legal research, and automated time-tracking without violating client confidentiality.",
    date: "August 2026",
    readTime: "12 min read",
    keyword: "AI automation for law firms"
  },
  {
    title: "AI Document Processing for Healthcare: Eliminating Manual Data Entry",
    slug: "ai-document-processing-healthcare",
    description: "A technical look at how healthcare providers are using HIPAA-compliant OCR and LLM pipelines to automate medical billing and reduce administrative overhead by 60%.",
    date: "July 2026",
    readTime: "14 min read",
    keyword: "AI document processing healthcare"
  },
  {
    title: "How Real Estate Firms Automate Lead Qualification at Scale",
    slug: "real-estate-lead-qualification-automation",
    description: "Stop losing high-ticket buyers to slow response times. Learn how custom CRM middleware and conversational AI can instantly qualify and route real estate leads 24/7.",
    date: "June 2026",
    readTime: "10 min read",
    keyword: "real estate lead qualification automation"
  },
  {
    title: "Custom CRM vs Salesforce: When Does it Make Financial Sense to Build Your Own?",
    slug: "custom-crm-vs-salesforce",
    description: "Salesforce licensing costs can cripple growing mid-market companies. A financial and technical analysis of when to buy SaaS versus when to build a proprietary CRM.",
    date: "May 2026",
    readTime: "15 min read",
    keyword: "custom CRM vs Salesforce"
  },
  {
    title: "How Much Does Business Automation Actually Cost in 2026?",
    slug: "business-automation-costs",
    description: "An honest, transparent breakdown of what custom API integrations, middleware, and AI automation pipelines actually cost, and how to measure the true ROI.",
    date: "April 2026",
    readTime: "11 min read",
    keyword: "business automation costs"
  },
  {
    title: "AI Agents for SMB Operations: Beyond Basic Chatbots",
    slug: "ai-agents-smb-operations",
    description: "Basic chatbots are dead. Learn how autonomous AI agents can actually execute workflows, update your database, and handle complex customer service tickets end-to-end.",
    date: "March 2026",
    readTime: "13 min read",
    keyword: "AI agents for SMB"
  },
  {
    title: "When Should a Business Build Custom Software?",
    slug: "when-to-build-custom-software",
    description: "Not every business needs custom software. We break down the 4 specific operational inflection points where custom engineering becomes a necessity for growth.",
    date: "February 2026",
    readTime: "9 min read",
    keyword: "when to build custom software"
  },
  {
    title: "RAG vs Fine-Tuning for Enterprise AI: A Technical Decision Framework",
    slug: "rag-vs-fine-tuning-enterprise-ai",
    description: "Should you fine-tune an LLM or use Retrieval-Augmented Generation (RAG)? A deep dive into the costs, security implications, and accuracy metrics for enterprise AI deployments.",
    date: "January 2026",
    readTime: "16 min read",
    keyword: "RAG vs Fine-Tuning"
  }
];

export default function InsightsHub() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                EduraTech Insights
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                Expert guides on AI development, custom software, business automation, and technology strategy for growing US businesses.
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="space-y-12">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group block p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-3xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-zinc-400 leading-relaxed mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-sm text-zinc-500">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                Ready to Explore Your Options?
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Learn more about our services and how we can help your business.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

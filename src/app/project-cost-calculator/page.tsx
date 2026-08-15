import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import CalculatorForm from "./CalculatorForm";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/project-cost-calculator",
  },
  title: "Software & AI Project Cost Calculator | EduraTech",
  description: "Calculate custom software development cost, AI development cost, and SaaS development cost. Use our interactive estimator to get timeline and budget ranges.",
  openGraph: {
    title: "Software & AI Project Cost Calculator | EduraTech",
    description: "Get an instant, transparent estimate for custom software, mobile apps, SaaS, and AI development projects. Real-time cost modeling based on USA development parameters.",
    url: "https://www.eduratech.com/project-cost-calculator",
  },
};

export default function CalculatorPage() {
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is the project cost estimator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The calculator provides an initial estimation range based on standard US development weights and parameters (e.g. base build costs, scale modifiers, timeline constraints). It is intended to help you budget, but it does not replace a detailed technical blueprint discovery session."
        }
      },
      {
        "@type": "Question",
        "name": "How much does custom software development cost in the USA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the United States, small business workflow automation or MVPs range from $15,000 to $30,000. Medium scale systems like dedicated portals, SaaS builds, or custom CRMs range from $40,000 to $75,000, while complex enterprise platforms typically exceed $100,000."
        }
      },
      {
        "@type": "Question",
        "name": "Why are custom software estimates represented as ranges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Software has infinite variables. Factors such as the maturity of your database schema, design specifications, number of third-party API keys, security compliance rules, and timeline requests all adjust the engineering hours needed to deliver."
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />

      {/* Hero Section */}
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-12 lg:pt-44 lg:pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold text-primary">
                B2B Cost Analysis
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white">
                How Much Will Your Software Project Cost?
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                Answer a few quick questions to receive a transparent estimate range of your project budget, timeline, and complexity.
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Calculator Section */}
      <Reveal width="100%">
        <Section className="bg-transparent pb-24 md:pb-32">
          <Container>
            <CalculatorForm />
          </Container>
        </Section>
      </Reveal>

      {/* SEO Explanatory Content */}
      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto space-y-16">
              {/* Factor Explanation */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">
                  How Much Does Custom Software Development Cost?
                </h2>
                <p className="text-zinc-300 leading-relaxed font-light">
                  A custom software build is a capital investment designed to automate manual labor, remove system friction, and secure business leverage. In the United States, average project costs scale based on several engineering categories:
                </p>
                <div className="grid sm:grid-cols-3 gap-6 pt-4">
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">MVP / Small Builds</h3>
                    <p className="text-2xl font-bold text-white mb-2">$15,000 – $30,000</p>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">Perfect for simple workflow automation, database connectors, and single-purpose operations tools.</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Mid-Scale / Custom Portal</h3>
                    <p className="text-2xl font-bold text-white mb-2">$40,000 – $75,000</p>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">Includes user portals, customized CRM systems, SaaS platforms, and robust database configurations.</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Enterprise Platforms</h3>
                    <p className="text-2xl font-bold text-white mb-2">$100,000+</p>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">Designed for high-throughput scaling, advanced data security, multi-tenant infrastructures, and heavy integrations.</p>
                  </div>
                </div>
              </div>

              {/* Cost Drivers */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">
                  What Affects Software Development Cost?
                </h2>
                <p className="text-zinc-300 leading-relaxed font-light mb-4">
                  Software pricing is dynamic. Key architectural elements that directly adjust development costs include:
                </p>
                <ul className="space-y-4 text-zinc-400 font-light">
                  <li><strong className="text-white">System Complexity:</strong> CRUD databases (Create, Read, Update, Delete) are simple, while multi-role authentication dashboards require deeper engineering structures.</li>
                  <li><strong className="text-white">API & Database Integrations:</strong> Synching metrics across siloed platforms (like Salesforce, HubSpot, Stripe, or older internal ERP systems) requires custom connectors and webhook triggers.</li>
                  <li><strong className="text-white">AI & LLM Functionality:</strong> Integrating advanced capabilities like RAG (Retrieval-Augmented Generation) databases, vector databases (Pinecone), or fine-tuned model prompts raises complexity but offers massive automation returns.</li>
                  <li><strong className="text-white">Design Readiness:</strong> Projects starting with complete wireframes and UX layouts save 20-30% on frontend engineering costs.</li>
                </ul>
                <p className="text-zinc-400 font-light mt-4">
                  To explore how specific tech stacks optimize these costs, view our <Link href="/services/custom-software-development" className="text-primary hover:underline font-medium">Custom Software Development</Link> and <Link href="/services/ai-development" className="text-primary hover:underline font-medium">AI Development</Link> services.
                </p>
              </div>

              {/* Chatbot Costs */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">
                  How Much Does an AI Chatbot Cost?
                </h2>
                <p className="text-zinc-300 leading-relaxed font-light">
                  A modern conversational AI chatbot ranges from <strong className="text-white">$8,000 to $25,000+</strong> depending on its capabilities.
                  A basic FAQ bot built using drag-and-drop engines represents the lower end, while an enterprise-grade agent capable of querying secure database files, booking calendar slots, and routing transactions dynamically represents the higher end. Check our guide on <Link href="/services/ai-chatbot-development" className="text-primary hover:underline font-medium">AI Chatbot Development</Link> to learn about RAG and LLM models.
                </p>
              </div>

              {/* Why Ranges */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">
                  Why Are These Estimates Ranges?
                </h2>
                <p className="text-zinc-300 leading-relaxed font-light">
                  Software development is complex and highly customized. Two applications that look similar on the surface might require completely different database structures, synchronization rules, and third-party fees.
                  A pricing range provides an honest window for initial budgeting, but cannot replace a comprehensive engineering discovery call.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6 pt-10 border-t border-white/5">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-start gap-2.5">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      What is the best way to reduce software development costs?
                    </h3>
                    <p className="text-zinc-400 font-light leading-relaxed pl-7">
                      Prepare a clear list of specifications, user roles, and wireframe drawings. Also, focus on building a Minimum Viable Product (MVP) with only core features first, and validate it with real users before adding complex tools.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-start gap-2.5">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      Does EduraTech build on subscription frameworks?
                    </h3>
                    <p className="text-zinc-400 font-light leading-relaxed pl-7">
                      No. We believe in Client Autonomy. Once the software is built, you own the complete codebase, assets, and database. You have zero user-licensing fees, creating a long-term compound asset for your business. Learn more on our <Link href="/why-eduratech" className="text-primary hover:underline font-medium">Why EduraTech</Link> page.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-start gap-2.5">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      How long does it take to get a detailed project quote?
                    </h3>
                    <p className="text-zinc-400 font-light leading-relaxed pl-7">
                      Once you request a strategy audit on our <Link href="/contact" className="text-primary hover:underline font-medium">Contact Page</Link>, our engineering team will hop on a 30-minute call with you and deliver a complete scope, timeline roadmap, and fixed quote within 48 hours.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

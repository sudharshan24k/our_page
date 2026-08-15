import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/insights/ai-agents-smb-operations",
  },
  title: "AI Agents for SMB Operations: Beyond Basic Chatbots - EduraTech",
  description: "Learn how autonomous AI agents can actually execute workflows, update your database, and handle complex customer service tickets.",
};

export default function ArticlePage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-sm font-semibold text-primary">AI Strategy</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                AI Agents for SMB Operations: Beyond Basic Chatbots
              </h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                Basic chatbots are dead. Learn how autonomous AI agents can actually execute workflows, update your database, and handle complex customer service tickets end-to-end.
              </p>
              <div className="flex gap-4 text-sm text-zinc-500">
                <span>March 2026</span>
                <span>•</span>
                <span>13 min read</span>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 md:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
                Chatbots vs. Autonomous Agents
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">A chatbot answers questions based on a script. An AI Agent can actually perform tasks. Through tool-calling and API access, an agent can check a customer's order status in Shopify, issue a refund via Stripe, and email the receipt, completely autonomously.</p>
              
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6 mt-12">
                Operational Use Cases
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">SMBs are deploying AI agents to handle level-1 and level-2 customer support, schedule logistics, and even run autonomous outbound sales campaigns, creating a massive competitive advantage against slower legacy competitors.</p>
            </div>
          </Container>
        </Section>
      </Reveal>
      
      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 text-center">
            <Container>
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl font-semibold tracking-tighter text-white">Ready to modernize your operations?</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors gap-2 group">
                        Book a Strategy Call
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Container>
        </Section>
      </Reveal>
    </main>
  );
}

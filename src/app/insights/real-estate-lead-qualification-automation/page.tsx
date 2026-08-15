import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/insights/real-estate-lead-qualification-automation",
  },
  title: "How Real Estate Firms Automate Lead Qualification - EduraTech",
  description: "Learn how custom CRM middleware and conversational AI can instantly qualify and route real estate leads 24/7.",
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
                <span className="text-sm font-semibold text-primary">PropTech</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                How Real Estate Firms Automate Lead Qualification at Scale
              </h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                Stop losing high-ticket buyers to slow response times. Learn how custom CRM middleware and conversational AI can instantly qualify and route real estate leads 24/7.
              </p>
              <div className="flex gap-4 text-sm text-zinc-500">
                <span>June 2026</span>
                <span>•</span>
                <span>10 min read</span>
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
                The 5-Minute Rule
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">In luxury real estate, the odds of qualifying a lead drop exponentially if you don't respond within 5 minutes. Waiting 30 minutes decreases your odds of contacting them by 100x compared to 5 minutes.</p>
              
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6 mt-12">
                Automating the Top of Funnel
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">By implementing intelligent middleware, brokers can capture a lead from Zillow, Realtor.com, or their own site, instantly verify their contact information, and use conversational AI to qualify their intent (budget, timeline, pre-approval status) before routing the qualified prospect to a human agent via SMS.</p>
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

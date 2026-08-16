import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/insights/business-automation-costs",
  },
  title: "How Much Does Business Automation Actually Cost in 2026? - EduraTech",
  description: "An honest, transparent breakdown of what custom API integrations and AI automation pipelines actually cost.",
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
                <span className="text-sm font-semibold text-primary">ROI & Pricing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                How Much Does Business Automation Actually Cost in 2026?
              </h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                An honest, transparent breakdown of what custom API integrations, middleware, and AI automation pipelines actually cost, and how to measure the true ROI.
              </p>
              <div className="flex gap-4 text-sm text-zinc-500">
                <span>April 2026</span>
                <span>•</span>
                <span>11 min read</span>
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
                The Spectrum of Automation
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">Basic Zapier scripts and low-code integrations run from $100 to $300. But if you are a $10M+ enterprise looking for true middleware that parses complex databases, routes logic, and implements machine learning safely, you are looking at enterprise automation.</p>
              
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6 mt-12">
                Calculating True ROI
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">A $50,000 custom automation pipeline sounds expensive until you calculate the human cost of manual data entry over 5 years. By factoring in error reduction, time saved, and the ability to scale without hiring administrative bloat, top-tier automation pays for itself within the first 2 quarters.</p>
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

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/insights/when-to-build-custom-software",
  },
  title: "When Should a Business Build Custom Software? - EduraTech",
  description: "We break down the 4 specific operational inflection points where custom engineering becomes a necessity for growth.",
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
                <span className="text-sm font-semibold text-primary">Software Architecture</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                When Should a Business Build Custom Software?
              </h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                Not every business needs custom software. We break down the 4 specific operational inflection points where custom engineering becomes a necessity for growth.
              </p>
              <div className="flex gap-4 text-sm text-zinc-500">
                <span>February 2026</span>
                <span>•</span>
                <span>9 min read</span>
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
                The Build vs. Buy Dilemma
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">If your operational process is identical to your competitors, buy off-the-shelf software. However, if your specific methodology is your competitive advantage, forcing it into generic SaaS tools will destroy your edge.</p>
              
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6 mt-12">
                The 4 Inflection Points
              </h2>
              <ul className="text-lg text-zinc-300 leading-relaxed mb-6 list-disc pl-6 space-y-4">
                  <li><strong>Data Silos:</strong> Your team spends more time copying data between tools than analyzing it.</li>
                  <li><strong>Licensing Bloat:</strong> You are paying six figures annually for per-seat SaaS licenses.</li>
                  <li><strong>Unique IP:</strong> Off-the-shelf software cannot accommodate your proprietary workflow.</li>
                  <li><strong>Customer Friction:</strong> Your clients are complaining about disjointed onboarding experiences.</li>
              </ul>
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

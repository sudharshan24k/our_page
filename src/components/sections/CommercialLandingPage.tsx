import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle, Target, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { EnterpriseSecurity } from "@/components/sections/EnterpriseSecurity";

export interface LandingPageConfig {
  heroTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  benefitsTitle: string;
  benefits: { title: string; description: string }[];
  processTitle: string;
  processDescription: string;
  ctaText: string;
}

export function CommercialLandingPage({ config }: { config: LandingPageConfig }) {
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: `<script src="https://cdn-in.pagesense.io/js/eduratechnologies/4b485abf4fd1470b97e7ca5f0eae8283.js"></script>` }} />
      {/* Hero Section */}
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden border-b border-white/5">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <span className="text-sm font-semibold text-primary">{config.heroTagline}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
              {config.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              {config.heroSubtitle}
            </p>
            <div className="flex justify-center">
              <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors gap-2 group">
                {config.ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Benefits / Features Section */}
      <Reveal width="100%">
        <Section className="bg-transparent py-24 md:py-32">
          <Container>
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
                {config.benefitsTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {config.benefits.map((benefit, idx) => {
                const icons = [Target, Zap, ShieldCheck];
                const Icon = icons[idx % icons.length];
                return (
                  <div key={idx} className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Strategic Approach */}
      <Reveal width="100%">
        <Section className="bg-[#0a0a0c] border-y border-white/5 py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 blur-2xl pointer-events-none" />
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
                            {config.processTitle}
                        </h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                            {config.processDescription}
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span className="text-zinc-300 font-light">Custom architecture mapped to your KPIs.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span className="text-zinc-300 font-light">Transparent, agile 60-day engineering sprints.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span className="text-zinc-300 font-light">Zero off-the-shelf licensing bloat.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 relative">
                        <div className="text-4xl font-extrabold text-white mb-2">99.9%</div>
                        <div className="text-sm font-mono text-primary uppercase tracking-widest mb-8">Uptime SLA</div>
                        <div className="text-4xl font-extrabold text-white mb-2">&lt; 2 Weeks</div>
                        <div className="text-sm font-mono text-primary uppercase tracking-widest mb-8">Onboarding</div>
                        <div className="text-4xl font-extrabold text-white mb-2">100%</div>
                        <div className="text-sm font-mono text-primary uppercase tracking-widest">IP Ownership</div>
                    </div>
                </div>
            </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <EnterpriseSecurity />
      </Reveal>

      <Reveal width="100%">
        <Testimonials />
      </Reveal>

      <Reveal width="100%">
        <Contact />
      </Reveal>

    </main>
  );
}

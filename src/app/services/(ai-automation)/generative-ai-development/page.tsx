import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/generative-ai-development",
  },
  title: "Generative AI Development Company",
  description: "Get custom Generative AI solutions. We build advanced GPT implementations, LLM integration, and fine-tuning optimized for corporate growth.",
};

export default function GenerativeAIDevelopmentPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eduratech.com"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eduratech.com/services"}, {"@type": "ListItem", "position": 3, "name": "Generative Ai Development", "item": "https://www.eduratech.com/services/generative-ai-development"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Generative Ai Development Services", "description": "Professional B2B technical solutions for generative ai development.", "provider": {"@type": "Organization", "name": "Edura Technologies", "url": "https://www.eduratech.com"}, "areaServed": "US", "serviceType": "Software & AI Development"}) }}
      />
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Generative AI Development Designed to Scale
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Leverage advanced large language models (LLMs) to automate operations, construct custom tools, and secure competitive leverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                  Get a Free Estimate
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
                Custom LLM Integrations That Deliver Value
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    We build custom LLM infrastructure, fine-tune models on your private corporate databases, and design advanced prompt routing pipelines.
                  </p>
                  <ul className="space-y-4">
                                        <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Advanced prompt engineering and agentic workflows.</span></li>
                    <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Private databases fine-tuning to protect corporate data.</span></li>
                    <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Integrations with leading models including Gemini, GPT-4, and Claude.</span></li>
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
                Deploy Generative AI Safely and Securely
              </h2>
              <div className="space-y-6 text-zinc-400 font-light text-base md:text-lg leading-relaxed">
                                <p>Generative AI should be safe, practical, and highly secure. We design systems that run locally or in private clouds to protect client information.</p>
                <p>Our engineering focus is on deterministic outputs and advanced guardrails to ensure your corporate AI assistants behave reliably in production.</p>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

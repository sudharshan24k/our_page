import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/ai-automation",
  },
  title: "AI Automation Solutions & Workflows",
  description: "Automate high-volume workflows with custom AI automation solutions. Reclaim staff hours, eliminate data errors, and scale efficiency.",
};

export default function AIAutomationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduratech.com"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://eduratech.com/services"}, {"@type": "ListItem", "position": 3, "name": "Ai Automation", "item": "https://eduratech.com/services/ai-automation"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Ai Automation Services", "description": "Professional B2B technical solutions for ai automation.", "provider": {"@type": "Organization", "name": "Edura Technologies", "url": "https://eduratech.com"}, "areaServed": "US", "serviceType": "Software & AI Development"}) }}
      />
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                AI Automation Services built for Scale
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Reclaim hundreds of hours of manual labor by integrating advanced AI workflows directly into your operational stack.
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
                Remove Manual Roadblocks
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    We specialize in building workflows that think, classify, and decide exactly like your best human employees, but at scale.
                  </p>
                  <ul className="space-y-4">
                                        <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Document parsing and data ingestion.</span></li>
                    <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Smart decision routing pipelines.</span></li>
                    <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Automated client updates and email follow-ups.</span></li>
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
                Continuous Efficiency Gains
              </h2>
              <div className="space-y-6 text-zinc-400 font-light text-base md:text-lg leading-relaxed">
                                <p>AI automation allows growing businesses to scale transaction volume without hiring additional administrative headcount.</p>
                <p>We integrate with your existing platforms, CRMs, and email clients to deploy automated flows with minimal disruption.</p>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

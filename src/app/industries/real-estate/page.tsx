import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/industries/real-estate",
  },
  title: "Real Estate Business Software & CRM - EduraTech",
  description: "Custom CRM and business automation for real estate teams. Lead management, transaction automation, and analytics built for brokers and agents.",
  openGraph: {
    title: "Real Estate Business Software - EduraTech",
    description: "Streamline lead management, automate transactions, and scale your real estate business with custom software.",
    url: "https://eduratech.com/industries/real-estate",
  },
};

export default function RealEstatePage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Real Estate Business Automation & CRM
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Lead management, transaction automation, and business intelligence built for real estate teams. Convert more leads. Close faster.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get a Free Real Estate Automation Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">
                Automate Real Estate Workflows
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Lead Management & Qualification",
                    description: "Capture leads from multiple sources. Automatically qualify and route to the right agent. Track lead status from inquiry to close."
                  },
                  {
                    title: "Transaction Automation",
                    description: "Automate property listing, document generation, contract tracking, and closing processes. Reduce manual work by 50%+."
                  },
                  {
                    title: "Client Communication",
                    description: "Automated follow-ups, property notifications, and client portals. Keep clients informed without taking your team's time."
                  },
                  {
                    title: "Analytics & Reporting",
                    description: "Real-time dashboards showing pipeline, conversion rates, and agent performance. Data-driven business decisions."
                  }
                ].map((section, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-3">{section.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{section.description}</p>
                  </div>
                ))}
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
                Investment & Timeline
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Basic CRM + Automation", range: "$35K - $60K", timeline: "8-12 weeks" },
                  { label: "Full Business Platform", range: "$60K - $120K", timeline: "12-20 weeks" }
                ].map((tier, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <p className="text-sm text-zinc-400 mb-2">{tier.label}</p>
                    <p className="text-2xl font-bold text-white mb-4">{tier.range}</p>
                    <p className="text-sm text-zinc-400">{tier.timeline}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                Scale Your Real Estate Business
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Custom software lets you handle more deals with fewer staff hours. Let's discuss your specific workflow.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

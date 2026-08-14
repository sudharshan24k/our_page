import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/industries/ecommerce",
  },
  title: "E-commerce Platform Development - Custom Store Solutions - EduraTech",
  description: "Custom e-commerce platforms and automation for online businesses. Inventory management, fulfillment automation, and analytics. Build beyond Shopify.",
  openGraph: {
    title: "E-commerce Platform Development - EduraTech",
    description: "Custom-built online stores that scale with your business. Better than off-the-shelf when you need competitive advantage.",
    url: "https://eduratech.com/industries/ecommerce",
  },
};

export default function EcommercePage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                E-commerce Platforms Built for Growth
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Custom stores with inventory automation, personalization, and analytics. Move beyond generic platforms when you need competitive advantage.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Discuss Your E-commerce Goals
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
                When Custom E-commerce Makes Sense
              </h2>
              <div className="space-y-6">
                {[
                  "Existing platforms don't support your unique business model or pricing",
                  "You need integration with multiple inventory, fulfillment, or accounting systems",
                  "Personalization and customer experience is a competitive advantage",
                  "You're paying for platform features you'll never use",
                  "You want full control over customer data and experience"
                ].map((reason, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-lg border border-white/5">
                    <span className="text-primary font-bold">→</span>
                    <p className="text-zinc-300">{reason}</p>
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
                What We Build for E-commerce
              </h2>
              <div className="space-y-4 mb-12">
                {[
                  "Custom storefronts with unique design and UX",
                  "Product catalog management and variants",
                  "Real-time inventory synchronization",
                  "Automated fulfillment and shipping integration",
                  "Advanced analytics and reporting",
                  "Personalized recommendations and experience",
                  "Payment processing integration",
                  "Mobile-optimized shopping experience"
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 text-zinc-300">
                    <span className="text-primary">✓</span> {feature}
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
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Custom Storefront", range: "$50K - $100K", timeline: "12-16 weeks" },
                  { label: "Enterprise Platform", range: "$100K - $250K", timeline: "16-32 weeks" }
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
                Ready to Build Your Competitive Advantage?
              </h2>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your E-commerce Strategy Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

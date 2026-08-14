import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/industries/logistics",
  },
  title: "Logistics Software - Supply Chain & Fleet Management - EduraTech",
  description: "Custom logistics software for supply chain, fleet tracking, route optimization, warehouse management.",
  openGraph: {
    title: "Logistics & Supply Chain Software - EduraTech",
    description: "Software that reduces delivery costs and improves customer visibility.",
    url: "https://eduratech.com/industries/logistics",
  },
};

export default function LogisticsPage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Logistics Software That Reduces Costs & Improves Efficiency
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Fleet tracking, route optimization, warehouse management, real-time visibility. Cut fuel costs. Improve on-time delivery.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your Logistics Assessment
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
                Logistics Challenges We Solve
              </h2>
              <div className="space-y-6">
                {[
                  "Manual dispatch and routing is inefficient and costly",
                  "Limited visibility into driver location and delivery status",
                  "No data on fuel costs, maintenance, or vehicle utilization",
                  "Customer communication is reactive, not proactive",
                  "Warehouse inventory tracking is manual and error-prone",
                  "Missed opportunities to optimize routes and reduce fuel spend"
                ].map((challenge, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-lg border border-white/5">
                    <span className="text-primary font-bold">→</span>
                    <p className="text-zinc-300">{challenge}</p>
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
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">
                Logistics Solutions We Build
              </h2>
              <div className="space-y-8">
                {[
                  { solution: "Fleet Management", desc: "Real-time GPS tracking, vehicle maintenance scheduling, fuel cost monitoring." },
                  { solution: "Route Optimization", desc: "AI-powered route optimization. Reduce miles driven. Reduce delivery time." },
                  { solution: "Dispatch Management", desc: "Automated dispatch. Real-time tracking. Driver communication." },
                  { solution: "Warehouse Management", desc: "Inventory tracking, picking/packing optimization, barcode scanning." },
                  { solution: "Proof of Delivery", desc: "Digital signatures, photos, timestamped delivery confirmation." },
                  { solution: "Customer Visibility", desc: "Customers track their shipments in real-time. Reduce support calls." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.solution}</h3>
                    <p className="text-zinc-400">{item.desc}</p>
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
                  { label: "Small Fleet (10-50)", range: "$40K - $80K", timeline: "10-14 weeks" },
                  { label: "Medium (50-200)", range: "$80K - $200K", timeline: "14-24 weeks" },
                  { label: "Large (200+)", range: "$200K - $500K+", timeline: "24-36 weeks" },
                  { label: "Enterprise", range: "$500K+", timeline: "Custom" }
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
                Ready to Optimize Your Logistics Operations?
              </h2>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your Logistics Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

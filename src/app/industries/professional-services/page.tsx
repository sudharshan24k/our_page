import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/industries/professional-services",
  },
  title: "Professional Services Software - Legal, Accounting, Consulting - EduraTech",
  description: "Custom software for law firms, accounting practices, consulting. Time tracking, billing, client management.",
  openGraph: {
    title: "Professional Services Software - EduraTech",
    description: "Business software built for lawyers, accountants, consultants. Better client relationships, better profitability.",
    url: "https://eduratech.com/industries/professional-services",
  },
};

export default function ProfessionalServicesPage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Professional Services Software Built for Your Practice
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Time tracking, project billing, client management, analytics. Know your profitability. Never lose billable hours again.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your Practice Assessment
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
                Industry Challenges We Solve
              </h2>
              <div className="space-y-6">
                {[
                  "Billable hours get lost in spreadsheets and email",
                  "Client billing takes weeks due to manual timekeeping",
                  "Profitability per client/project is unclear",
                  "Client communications and documents scattered across systems",
                  "Difficult to track project status and budget",
                  "Client retention depends on relationship strength, not systems"
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
                What We Build
              </h2>
              <div className="space-y-8">
                {[
                  { feature: "Time & Expense Tracking", desc: "Simple time logging by project, billable code. Track expenses too. Automatic invoice generation." },
                  { feature: "Client Management", desc: "Central client portal. Centralized communications, documents, billing history." },
                  { feature: "Project Management", desc: "Track project budget, timeline, status. Know when projects are profitable." },
                  { feature: "Billing Automation", desc: "Automatic invoice generation from tracked time. Recurring fees. Payment tracking." },
                  { feature: "Financial Analytics", desc: "Profitability by client, practice area, attorney. Realization rates. Unbilled time reporting." },
                  { feature: "Matter Management", desc: "Complete case/matter history. Billing rules, co-counseling, matter contingencies." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.feature}</h3>
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
                  { label: "Small Firm System", range: "$40K - $75K", timeline: "10-14 weeks" },
                  { label: "Medium Firm", range: "$75K - $150K", timeline: "14-20 weeks" },
                  { label: "Large Firm", range: "$150K - $300K+", timeline: "20-32 weeks" },
                  { label: "Multi-office", range: "$300K+", timeline: "Custom" }
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
                Ready to Improve Your Practice Profitability?
              </h2>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your Practice Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

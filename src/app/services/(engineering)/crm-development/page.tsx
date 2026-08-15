import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/crm-development",
  },
  title: "CRM Development - Custom CRM Software for Sales & Support - EduraTech",
  description: "Custom CRM systems built for your sales workflow. Lead management, pipeline tracking, customer insights.",
  openGraph: {
    title: "Custom CRM Development - EduraTech",
    description: "CRM built for your business process. Not off-the-shelf. Real competitive advantage.",
    url: "https://eduratech.com/services/crm-development",
  },
};

export default function CRMDevelopment() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduratech.com"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://eduratech.com/services"}, {"@type": "ListItem", "position": 3, "name": "Crm Development", "item": "https://eduratech.com/services/crm-development"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Crm Development Services", "description": "Professional B2B technical solutions for crm development.", "provider": {"@type": "Organization", "name": "Edura Technologies", "url": "https://eduratech.com"}, "areaServed": "US", "serviceType": "Software & AI Development"}) }}
      />
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                CRM Built for Your Sales Workflow
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Manage leads, opportunities, customers. Custom workflows matching how your team actually sells. Real sales intelligence.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your CRM Assessment
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
                What We Build
              </h2>
              <div className="space-y-8">
                {[
                  { feature: "Contact Management", desc: "Centralized customer and prospect database. Full contact history, interactions, relationships." },
                  { feature: "Sales Pipeline", desc: "Visual pipeline matching your sales stages. Drag-and-drop opportunities. Accurate forecasting." },
                  { feature: "Lead Scoring & Routing", desc: "Automatically qualify leads. Route to right sales rep. Track lead source ROI." },
                  { feature: "Activity Tracking", desc: "Log calls, emails, meetings automatically. Never lose context on a customer." },
                  { feature: "Sales Reporting", desc: "Real-time dashboards. Win/loss analysis. Rep performance. Revenue forecasting." },
                  { feature: "Customer Portal", desc: "Customers see their account, contracts, invoices. Reduce support tickets." }
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
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">
                Implementation Process
              </h2>
              <div className="space-y-8">
                {[
                  { phase: "Sales Process Discovery", desc: "Map your complete sales workflow. Stages, activities, metrics, pain points.", timeline: "2-3 weeks" },
                  { phase: "System Design", desc: "Design the CRM structure: data model, workflows, integrations.", timeline: "2 weeks" },
                  { phase: "Development & Testing", desc: "Build the CRM. Test with real sales data. Refine workflows.", timeline: "6-12 weeks" },
                  { phase: "Training & Launch", desc: "Train sales team. Migrate data. Go live with support.", timeline: "2-4 weeks" }
                ].map((step, i) => (
                  <div key={i} className="border-l-2 border-primary pl-6 py-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">{step.phase}</h3>
                    <p className="text-zinc-400 mb-2">{step.desc}</p>
                    <p className="text-sm text-primary font-semibold">{step.timeline}</p>
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
                  { label: "Small Team CRM", range: "$40K - $80K", timeline: "10-14 weeks", users: "5-15 users" },
                  { label: "Growing Company CRM", range: "$80K - $150K", timeline: "14-20 weeks", users: "15-50 users" },
                  { label: "Enterprise CRM", range: "$150K - $300K+", timeline: "20-30 weeks", users: "50+ users" },
                  { label: "CRM + Integrations", range: "$100K - $250K+", timeline: "16-24 weeks", users: "Custom" }
                ].map((tier, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <p className="text-sm text-zinc-400 mb-2">{tier.label}</p>
                    <p className="text-2xl font-bold text-white mb-2">{tier.range}</p>
                    <p className="text-xs text-primary font-semibold mb-2">{tier.timeline}</p>
                    <p className="text-sm text-zinc-400">{tier.users}</p>
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
                Ready to Build Your CRM?
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Let's create a CRM that actually matches how your team sells.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your CRM Strategy Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

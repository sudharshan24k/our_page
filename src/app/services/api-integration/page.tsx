import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/api-integration",
  },
  title: "API Integration Services - Third-Party System Integration - EduraTech",
  description: "Connect your business systems. Real-time data sync, automated workflows, single source of truth.",
  openGraph: {
    title: "API Integration Services - EduraTech",
    description: "Connect apps that don't normally talk. Real-time integration. No more manual data entry.",
    url: "https://eduratech.com/services/api-integration",
  },
};

export default function APIIntegration() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Connect Systems That Don't Talk to Each Other
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Real-time data sync between apps. Eliminate manual entry. Single source of truth across your business.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your Integration Assessment
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
                Common Integrations We Build
              </h2>
              <div className="space-y-8">
                {[
                  { system: "Accounting Integration", desc: "CRM to QuickBooks/Xero. Automatic invoice creation, expense posting, reconciliation." },
                  { system: "Payment Processing", desc: "Stripe, PayPal, Square. Sync transactions. Update accounting. Reconcile automatically." },
                  { system: "Email & Communication", desc: "Email to CRM logging. Slack notifications. Team communication automation." },
                  { system: "Project Management", desc: "Time tracking to invoicing. Task status to client dashboards. Project profitability tracking." },
                  { system: "E-commerce Integration", desc: "Shopify/WooCommerce to inventory, accounting, fulfillment systems." },
                  { system: "HR & Payroll", desc: "Employee data sync. Timesheet to payroll. Benefits management integration." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.system}</h3>
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
                Integration Approach
              </h2>
              <div className="space-y-8">
                {[
                  { phase: "Systems Analysis", desc: "Audit your systems. Identify integration points and data flows.", timeline: "1-2 weeks" },
                  { phase: "Integration Design", desc: "Define sync rules, transformation logic, error handling.", timeline: "1-2 weeks" },
                  { phase: "Build & Test", desc: "Build API connections. Test with real data. Ensure data integrity.", timeline: "3-8 weeks" },
                  { phase: "Monitor & Support", desc: "Monitor integrations. Handle errors. Add features as needed.", timeline: "ongoing" }
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
                  { label: "Simple Integration", range: "$5K - $15K", timeline: "2-4 weeks" },
                  { label: "Complex Integration", range: "$15K - $40K", timeline: "4-8 weeks" },
                  { label: "Multi-system Sync", range: "$40K - $100K", timeline: "8-16 weeks" },
                  { label: "Enterprise Integration", range: "$100K+", timeline: "Custom" }
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
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                Supported Platforms
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                We integrate with hundreds of business applications. If it has an API, we can connect it.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Salesforce, HubSpot, Pipedrive, Freshworks",
                  "QuickBooks, Xero, FreshBooks, Stripe",
                  "Shopify, WooCommerce, Magento, BigCommerce",
                  "Slack, Microsoft Teams, Google Workspace",
                  "Asana, Monday.com, Jira, Trello",
                  "Twilio, SendGrid, Mailchimp, Zendesk"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-zinc-300">
                    <span className="text-primary">→</span> {item}
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
                Ready to Connect Your Systems?
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Let'"'"'s eliminate manual data entry and create a unified system.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your Integration Plan
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

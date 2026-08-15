import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/business-automation",
  },
  title: "Business Process Automation Services - Workflow Automation - EduraTech",
  description: "Automate repetitive business processes. Reduce labor costs 50%+. Integrate systems, eliminate manual data entry.",
  openGraph: {
    title: "Business Process Automation - EduraTech",
    description: "Cut labor costs by automating repetitive workflows. Real ROI within months.",
    url: "https://www.eduratech.com/services/business-automation",
  },
};

export default function BusinessAutomation() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eduratech.com"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eduratech.com/services"}, {"@type": "ListItem", "position": 3, "name": "Business Automation", "item": "https://www.eduratech.com/services/business-automation"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Business Automation Services", "description": "Professional B2B technical solutions for business automation.", "provider": {"@type": "Organization", "name": "Edura Technologies", "url": "https://www.eduratech.com"}, "areaServed": "US", "serviceType": "Software & AI Development"}) }}
      />
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Automate Repetitive Work. Scale Without Hiring.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Reduce manual work by 50-80%. Integrate systems. Eliminate errors. Free your team for higher-value work.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get a Free Automation Audit
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
                Common Automation Opportunities
              </h2>
              <div className="space-y-8">
                {[
                  { process: "Data Entry & Migration", description: "Extract data from emails, PDFs, forms and automatically populate databases. No manual typing." },
                  { process: "Invoice & Expense Processing", description: "Automate AP: extract invoice data, code to GL accounts, route for approval, post to accounting." },
                  { process: "Lead Qualification & Routing", description: "Automatically score and route leads to right sales rep based on criteria you define." },
                  { process: "Document Generation", description: "Contracts, proposals, quotes generated from templates and data. Hours of work in seconds." },
                  { process: "System Integration", description: "Connect your apps: sync data between CRM, accounting, project management, HR systems." },
                  { process: "Notification & Workflow", description: "Automatic alerts, approvals, escalations. Tasks get done without manual status checks." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.process}</h3>
                    <p className="text-zinc-400">{item.description}</p>
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
                Our Automation Process
              </h2>
              <div className="space-y-8">
                {[
                  { phase: "Workflow Assessment", description: "Document your current workflows. Identify bottlenecks and automation opportunities.", timeline: "1-2 weeks" },
                  { phase: "Automation Design", description: "Design the solution. Choose tools (Zapier, Make, custom code). Create workflows.", timeline: "1-2 weeks" },
                  { phase: "Build & Test", description: "Build automations. Test with real data. Refine logic and error handling.", timeline: "2-4 weeks" },
                  { phase: "Deploy & Monitor", description: "Launch with team training. Monitor for errors. Track time saved and ROI.", timeline: "ongoing" }
                ].map((step, i) => (
                  <div key={i} className="border-l-2 border-primary pl-6 py-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">{step.phase}</h3>
                    <p className="text-zinc-400 mb-2">{step.description}</p>
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
                  { label: "Single Workflow", range: "$5K - $15K", timeline: "2-4 weeks" },
                  { label: "Multi-workflow", range: "$15K - $40K", timeline: "4-8 weeks" },
                  { label: "Department-wide", range: "$40K - $100K", timeline: "8-16 weeks" },
                  { label: "Enterprise", range: "$100K+", timeline: "Custom" }
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
                Tools We Use
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                We select tools based on your specific needs. From low-code platforms to custom integrations.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Zapier & Make for low-code automation",
                  "Custom APIs for complex integrations",
                  "RPA tools for legacy system automation",
                  "Webhooks for real-time data sync",
                  "Scheduled jobs for batch processing",
                  "AI for intelligent document processing"
                ].map((tool, i) => (
                  <div key={i} className="flex gap-3 text-zinc-300">
                    <span className="text-primary">→</span> {tool}
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
                Ready to Cut Labor Costs?
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Let's find which processes you should automate first.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your Automation Audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

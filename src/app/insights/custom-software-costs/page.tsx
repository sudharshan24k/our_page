import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Custom Software Development Costs 2024 - Complete Breakdown - EduraTech",
  description: "How much does custom software cost? Real pricing breakdown. Small projects $15K-$30K, medium $40K-$75K, complex $100K+. Detailed cost factors.",
  openGraph: {
    title: "Custom Software Development Costs 2024 - EduraTech",
    description: "Transparent breakdown of custom software development costs. Project size, complexity, timeline, and ROI expectations.",
    url: "https://eduratech.com/insights/custom-software-costs",
  },
};

export default function CustomSoftwareCosts() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent min-h-[60vh] flex items-center pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-sm font-semibold text-primary">Custom Software Guide</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                Custom Software Development Costs: The Complete 2024 Breakdown
              </h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                How much should you budget for custom software? Real pricing ranges, cost factors, and how to get accurate estimates.
              </p>
              <div className="flex gap-4 text-sm text-zinc-400">
                <span>August 2024</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Quick Answer: Custom Software Costs $15K to $500K+
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                The cost of custom software depends on project complexity, team size, timeline, and technology stack. Here are typical ranges:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { name: "Small Projects", range: "$15K - $30K", timeline: "6-8 weeks", examples: "Tools, MVPs, simple automation" },
                  { name: "Medium Projects", range: "$40K - $75K", timeline: "12-16 weeks", examples: "CRM, admin systems, portals" },
                  { name: "Complex Projects", range: "$100K+", timeline: "16-24 weeks", examples: "Platforms, enterprise systems" }
                ].map((tier, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/[0.03]">
                    <p className="text-sm text-primary font-semibold mb-2">{tier.name}</p>
                    <p className="text-3xl font-bold text-white mb-4">{tier.range}</p>
                    <p className="text-sm text-zinc-400 mb-3">{tier.timeline}</p>
                    <p className="text-xs text-zinc-500">{tier.examples}</p>
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
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                What Affects Custom Software Costs?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    factor: "Project Complexity",
                    explanation: "Simple projects (CRUD apps, basic automation) cost $15K-$30K. Medium complexity (CRM, portals) run $40K-$75K. Complex systems (multi-tenant platforms, real-time features) exceed $100K."
                  },
                  {
                    factor: "Team Size & Experience",
                    explanation: "A single senior developer costs $120-$200/hour. Full teams (2-3 developers) run $250-$400/hour. Agency rates with project managers are $300-$500+/hour."
                  },
                  {
                    factor: "Timeline & Methodology",
                    explanation: "Agile development (2-week sprints) costs more upfront but reduces scope creep. Waterfall (fixed scope) is cheaper if requirements don't change. Shorter timelines mean more expensive teams."
                  },
                  {
                    factor: "Technology Stack",
                    explanation: "Modern stacks (React, Node.js, cloud) are easier to find developers for and scale faster. Legacy technology (older frameworks) may cost less initially but has higher maintenance costs."
                  },
                  {
                    factor: "Integration Requirements",
                    explanation: "Standalone apps are cheapest. Integrations with payment processors (+$5K-$10K), CRM systems (+$10K-$20K), or accounting software add cost and complexity."
                  },
                  {
                    factor: "Post-Launch Support",
                    explanation: "Budget 15-20% of development cost for annual maintenance. Hosting ($100-$500/month), updates, and fixes add up. Emergency support is even more expensive."
                  }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-3">{item.factor}</h3>
                    <p className="text-zinc-300 leading-relaxed">{item.explanation}</p>
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
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Real-World Examples
              </h2>
              <div className="space-y-8">
                {[
                  {
                    project: "Internal Tool for 10-Person Team",
                    desc: "Task management system with simple reporting",
                    cost: "$20K - $30K",
                    timeline: "6-8 weeks",
                    roi: "ROI: 6 months (saves 5 hours/week per person)"
                  },
                  {
                    project: "Client-Facing SaaS MVP",
                    desc: "Subscription service with user authentication and basic features",
                    cost: "$50K - $80K",
                    timeline: "12-16 weeks",
                    roi: "ROI: 12-18 months (depending on pricing)"
                  },
                  {
                    project: "Multi-Location Booking System",
                    desc: "Appointment scheduling, staff management, customer portal",
                    cost: "$60K - $100K",
                    timeline: "14-18 weeks",
                    roi: "ROI: 8-12 months (eliminates scheduling staff)"
                  },
                  {
                    project: "E-Commerce Platform",
                    desc: "Product catalog, shopping cart, payment processing, inventory",
                    cost: "$75K - $150K",
                    timeline: "16-24 weeks",
                    roi: "ROI: 6-12 months (depends on sales volume)"
                  }
                ].map((example, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                    <h3 className="text-xl font-semibold text-white mb-2">{example.project}</h3>
                    <p className="text-zinc-300 mb-4">{example.desc}</p>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-primary font-semibold">Cost:</span> {example.cost}</p>
                      <p><span className="text-primary font-semibold">Timeline:</span> {example.timeline}</p>
                      <p><span className="text-primary font-semibold">{example.roi}</span></p>
                    </div>
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
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Hidden Costs to Budget For
              </h2>
              <ul className="space-y-4">
                {[
                  "Project Management (10-15% of development cost)",
                  "Quality Assurance & Testing (included in modern agencies)",
                  "Hosting & Infrastructure ($100-$500/month)",
                  "Annual Maintenance & Updates (15-20% of development cost)",
                  "Security Updates & Compliance (varies by industry)",
                  "Scalability Improvements (as user base grows)",
                  "Feature Requests & Enhancements (budget separately)"
                ].map((cost, i) => (
                  <li key={i} className="flex gap-3 text-zinc-300">
                    <span className="text-primary">→</span> {cost}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                How to Get an Accurate Custom Software Estimate
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Don't trust rough estimates. Here's how to get accurate quotes from development teams:
                </p>
                {[
                  { step: "1. Define Scope Clearly", desc: "Write detailed requirements. List features. Define who uses the software. Clear scope = accurate estimates." },
                  { step: "2. Create User Stories", desc: "\"As a user, I want to... so that...\" User stories help developers understand real workflows." },
                  { step: "3. Prioritize Features", desc: "MVP features, nice-to-have features, future features. This helps estimate MVP cost vs. full platform." },
                  { step: "4. Ask for Multiple Proposals", desc: "Get 3-5 quotes. Compare not just price but timeline, process, and team experience." },
                  { step: "5. Understand the Methodology", desc: "Fixed price vs. time-and-materials vs. milestones. Each affects cost predictability." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.step}</h3>
                    <p className="text-zinc-300">{item.desc}</p>
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
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                ROI on Custom Software
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                Most custom software pays for itself within 6-18 months through:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { benefit: "Time Savings", impact: "Automation eliminates 5-20 hours/week of manual work" },
                  { benefit: "Error Reduction", impact: "Fewer mistakes = less rework and customer issues" },
                  { benefit: "Revenue Growth", impact: "Better tools help you serve more customers" },
                  { benefit: "Cost Reduction", impact: "Less need to hire additional staff" },
                  { benefit: "Competitive Advantage", impact: "Custom features competitors can't replicate" },
                  { benefit: "Data Insights", impact: "Analytics help you make better business decisions" }
                ].map((roi, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-white mb-2">{roi.benefit}</h3>
                    <p className="text-zinc-400">{roi.impact}</p>
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
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Red Flags: When Pricing Seems Wrong
              </h2>
              <div className="space-y-4">
                {[
                  "Estimates with no breakdown (just a total number)",
                  "Fixed price with unlimited scope changes",
                  "Team claims 3 months for what others quote 6 months",
                  "No mention of post-launch support or maintenance",
                  "Pressure to decide quickly without proper discovery",
                  "Team has no experience in your industry"
                ].map((flag, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-lg border border-red-500/20 bg-red-500/5">
                    <span className="text-red-400">⚠</span>
                    <p className="text-zinc-300">{flag}</p>
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
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Next Steps
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                Ready to understand your custom software needs better?
              </p>
              <div className="space-y-4">
                <p className="text-zinc-300">
                  Check out our <Link href="/services/custom-software-development" className="text-primary hover:underline">custom software development process</Link> to understand how we approach projects.
                </p>
                <p className="text-zinc-300">
                  Or learn about specific applications like <Link href="/services/crm-development" className="text-primary hover:underline">CRM development</Link>, <Link href="/services/saas-development" className="text-primary hover:underline">SaaS development</Link>, or <Link href="/services/business-automation" className="text-primary hover:underline">business automation</Link>.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Get Your Custom Software Estimate
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Share your idea with us. We'll provide a detailed breakdown of cost, timeline, and ROI.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

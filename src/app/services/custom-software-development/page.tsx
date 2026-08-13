import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Custom Software Development Company - EduraTech",
  description: "We build custom software tailored to your business needs. Transparent scope, fixed timeline, proven process. No surprises.",
  openGraph: {
    title: "Custom Software Development Company - EduraTech",
    description: "Custom software development for US small businesses. Transparent scope, fixed timeline, proven results.",
    type: "website",
    url: "https://eduratech.com/services/custom-software-development",
  },
};

export default function CustomSoftwareDevelopment() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent min-h-[70vh] flex items-center pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Custom Software Development Built for Your Business
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                We build custom software exactly tailored to your business model, workflows, and goals. Practical. Scalable. Maintainable.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                  Get a Free Software Estimate
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
                When Custom Software Makes Sense
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    Many businesses use software that doesn't fit their actual processes. They either overpay for features they don't use, or waste hours working around limitations of generic solutions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Your business has unique workflows that existing software can't support",
                    "You need integration between multiple existing systems",
                    "Existing software is expensive and still doesn't meet 80% of your needs",
                    "You're building a new competitive advantage in your industry",
                  ].map((reason, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-zinc-300 leading-relaxed">{reason}</p>
                    </div>
                  ))}
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
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">
                How We Build Custom Software
              </h2>

              <div className="space-y-8">
                {[
                  {
                    phase: "Discovery",
                    weeks: "Week 1-2",
                    description: "Understand your business model, workflows, pain points, and constraints. Define requirements in writing.",
                    deliverable: "Requirements document + proposal"
                  },
                  {
                    phase: "Planning & Design",
                    weeks: "Week 2-3",
                    description: "Create system architecture, database design, and user flows. Select technology stack. Estimate timeline and cost.",
                    deliverable: "Technical specification + development timeline"
                  },
                  {
                    phase: "Development",
                    weeks: "Week 4-16",
                    description: "Organized into 2-week sprints with weekly progress updates. Regular demos of working features.",
                    deliverable: "Working software, tested"
                  },
                  {
                    phase: "Testing & Launch",
                    weeks: "Week 16-18",
                    description: "Full testing, bug fixes, performance optimization. Deployment and team training.",
                    deliverable: "Production-ready software"
                  },
                ].map((step, i) => (
                  <div key={i} className="border-l-2 border-primary pl-6 py-4">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-primary/20 px-3 py-1 rounded text-sm font-semibold text-primary">
                        {step.weeks}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{step.phase}</h3>
                    </div>
                    <p className="text-zinc-300 leading-relaxed mb-3">{step.description}</p>
                    <p className="text-sm text-zinc-400 italic">Deliverable: {step.deliverable}</p>
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
                What Custom Software Actually Costs
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Cost Ranges</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { name: "Small Project", range: "$15K - $30K", timeline: "6-8 weeks" },
                      { name: "Medium Project", range: "$40K - $75K", timeline: "12-16 weeks" },
                      { name: "Complex Project", range: "$100K+", timeline: "16-24 weeks" },
                    ].map((tier, i) => (
                      <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                        <p className="text-zinc-400 text-sm mb-2">Typical</p>
                        <p className="text-2xl font-bold text-white mb-4">{tier.range}</p>
                        <p className="text-sm text-zinc-400">{tier.timeline}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Our Approach to Pricing</h3>
                  <ul className="space-y-3">
                    {[
                      "Fixed scope, fixed price (not hourly)",
                      "Milestone-based payments (25%-25%-25%-25%)",
                      "Clear change order process if requirements shift",
                      "Transparent breakdown of all costs",
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{point}</span>
                      </li>
                    ))}
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
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "How much does custom software development cost?",
                    a: "Depends on complexity. Simple tools: $15-30K. Medium: $40-75K. Complex: $100K+. We provide detailed estimates after discovery."
                  },
                  {
                    q: "How long does it take to build custom software?",
                    a: "Typically 6-20 weeks. Smaller projects 2 months. Larger projects 4-6 months. Clear scope = accurate timeline."
                  },
                  {
                    q: "Can you integrate custom software with our existing systems?",
                    a: "Yes. We regularly integrate with accounting software, CRM, email, payment processors, and other business tools."
                  },
                  {
                    q: "What if we need changes during development?",
                    a: "We manage changes through a formal process. Minor tweaks are included. Significant changes impact timeline and cost."
                  },
                  {
                    q: "Do you use agile development?",
                    a: "Yes. Two-week sprints with regular demos of working features. Weekly updates keep you informed."
                  },
                  {
                    q: "What happens after the software launches?",
                    a: "We provide 30 days of post-launch support. After that, optional support contracts are available for ongoing updates."
                  },
                ].map((faq, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                    <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
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
                Ready to Build Custom Software?
              </h2>
              <p className="text-xl text-zinc-300 font-light leading-relaxed mb-12">
                Let's discuss your business challenge and see if custom software is the right solution. No obligation. Free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                  Schedule Free Consultation
                </a>
                <a href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all">
                  View All Services
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

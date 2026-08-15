import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/ai-development",
  },
  title: "AI Development Company - Custom AI Solutions - EduraTech",
  description: "Custom AI solutions: chatbots, RAG, automation, data analysis. Practical AI for small business. Transparent process.",
  openGraph: {
    title: "AI Development Company - Custom AI Solutions - EduraTech",
    description: "We build practical AI solutions that solve real business problems. No hype. Real results.",
    type: "website",
    url: "https://eduratech.com/services/ai-development",
  },
};

export default function AIDevelopment() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduratech.com"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://eduratech.com/services"}, {"@type": "ListItem", "position": 3, "name": "Ai Development", "item": "https://eduratech.com/services/ai-development"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Ai Development Services", "description": "Professional B2B technical solutions for ai development.", "provider": {"@type": "Organization", "name": "Edura Technologies", "url": "https://eduratech.com"}, "areaServed": "US", "serviceType": "Software & AI Development"}) }}
      />
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                AI Development for Real Business Problems
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                We build practical AI solutions that automate workflows, improve decisions, and create business value. Not hype. Real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                  Get a Free AI Assessment
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
                What AI Can (And Can't) Do for Your Business
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4 text-green-400">AI Does Well</h3>
                  <ul className="space-y-3">
                    {[
                      "Automate repetitive tasks (data entry, document processing, customer responses)",
                      "Analyze patterns in large datasets",
                      "Predict outcomes (demand, churn, fraud)",
                      "Personalize customer experiences",
                      "Accelerate decision-making with data insights",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4 text-orange-400">AI Doesn't Do Well (Yet)</h3>
                  <ul className="space-y-3">
                    {[
                      "Make strategic business decisions (requires human judgment)",
                      "Understand context without clear data",
                      "Replace experienced professionals",
                      "Work without quality data",
                      "Guarantee 100% accuracy (requires validation)",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="w-5 h-5 rounded-full border border-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{item}</span>
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
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">
                Common AI Use Cases for Small Business
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Customer Service Automation",
                    description: "AI chatbots answer common questions 24/7. Route complex issues to humans.",
                    impact: "50-70% of inquiries handled automatically"
                  },
                  {
                    title: "Document Processing",
                    description: "Extract data from invoices, contracts, forms automatically.",
                    impact: "80% reduction in manual data entry"
                  },
                  {
                    title: "Lead Qualification",
                    description: "AI scores and prioritizes leads. Routes high-value leads to sales immediately.",
                    impact: "40% faster sales cycle"
                  },
                  {
                    title: "Data Analysis & Reporting",
                    description: "Automated insights from your business data. Spot trends and opportunities.",
                    impact: "Real-time visibility into business metrics"
                  },
                  {
                    title: "Predictive Analytics",
                    description: "Forecast demand, predict customer churn, identify risk patterns.",
                    impact: "Better planning, proactive decision-making"
                  },
                ].map((useCase, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 transition-all">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-zinc-400 mb-3">{useCase.description}</p>
                    <p className="text-sm text-primary font-semibold">💡 {useCase.impact}</p>
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
                Our AI Development Approach
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Discovery & Assessment</h3>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    We start by understanding your business problem. Not every challenge needs AI. Some are better solved with automation or process changes.
                  </p>
                  <p className="text-sm text-zinc-400">
                    If AI makes sense, we assess: data availability, implementation complexity, timeline, and ROI.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technology Selection</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    We choose the right tool for your problem. Sometimes that's OpenAI's API. Sometimes it's custom-trained models. Sometimes it's existing solutions with configuration. We recommend what makes business sense, not what's trendy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Implementation & Integration</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    We build AI into your existing systems. Integration with your CRM, databases, and workflows is critical for real-world impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Testing & Refinement</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    AI systems need validation and continuous improvement. We test thoroughly and refine based on real-world performance.
                  </p>
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
                AI Development Cost & Timeline
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Typical Investment</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Simple Chatbot", range: "$15K - $30K", timeline: "4-8 weeks" },
                      { name: "Custom AI Solution", range: "$40K - $100K", timeline: "8-16 weeks" },
                    ].map((tier, i) => (
                      <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                        <p className="text-zinc-400 text-sm mb-2">{tier.name}</p>
                        <p className="text-2xl font-bold text-white mb-4">{tier.range}</p>
                        <p className="text-sm text-zinc-400">{tier.timeline}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What Affects Cost</h3>
                  <ul className="space-y-2">
                    {[
                      "Data quality and availability",
                      "Integration complexity",
                      "Custom model training vs. using existing APIs",
                      "Accuracy requirements",
                    ].map((factor, i) => (
                      <li key={i} className="flex gap-3 text-zinc-300">
                        <span className="text-primary">•</span>
                        {factor}
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
                    q: "What can AI actually do for my business?",
                    a: "AI excels at automating tasks, analyzing patterns, and predicting outcomes. We help identify specific opportunities in your business where AI creates measurable value."
                  },
                  {
                    q: "How much does AI development cost?",
                    a: "Depends on complexity. A simple chatbot: $15-30K. Custom AI solution: $40-100K. We provide estimates after understanding your specific needs."
                  },
                  {
                    q: "Do you build AI from scratch or use existing tools?",
                    a: "Both. For many use cases, existing APIs (like OpenAI) are faster and more cost-effective. For specialized needs, we build custom solutions. We recommend what makes business sense."
                  },
                  {
                    q: "What about data security and privacy?",
                    a: "Data security is built in from day one. We follow best practices for data handling, encryption, and compliance with relevant regulations."
                  },
                  {
                    q: "What if the AI doesn't perform as expected?",
                    a: "We test thoroughly and refine based on real-world performance. AI systems improve over time with more data and feedback."
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
                Explore AI Opportunities for Your Business
              </h2>
              <p className="text-xl text-zinc-300 font-light leading-relaxed mb-12">
                Let's assess whether AI makes sense for your specific situation. No pressure. Free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                  Get a Free AI Assessment
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

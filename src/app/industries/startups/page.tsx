import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/industries/startups",
  },
  title: "Startup Technology - MVP Development & Scaling - EduraTech",
  description: "Build your startup tech. MVP development, fundraising support, rapid scaling. From idea to market.",
  openGraph: {
    title: "Startup Technology Development - EduraTech",
    description: "Turn your startup idea into a product. Fast, lean development. Fundraising-ready.",
    url: "https://eduratech.com/industries/startups",
  },
};

export default function StartupsPage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent min-h-[70vh] flex items-center pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Build Your Startup Faster with Expert Development
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                From idea to MVP to Series A. We understand startup constraints. Fast, lean development. Fundraising-ready code.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Let's Build Your Product
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
                Startup Challenges We Solve
              </h2>
              <div className="space-y-6">
                {[
                  "Limited budget means every dollar spent on development is critical",
                  "Speed to market matters more than perfect code",
                  "Need to pivot quickly based on user feedback",
                  "Hiring a full engineering team is too expensive",
                  "Code needs to be clean enough for future investors to approve",
                  "Need technical co-founder guidance and architecture advice"
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
                How We Support Startups
              </h2>
              <div className="space-y-8">
                {[
                  { phase: "Idea Validation", desc: "Quick MVP to test your idea. Lean approach. MVP in 6-10 weeks." },
                  { phase: "MVP Development", desc: "Build core features fast. Clean code for scaling. User feedback loops." },
                  { phase: "Fundraising Readiness", desc: "Code quality investors expect. Scalable architecture. Technical documentation." },
                  { phase: "Scaling Support", desc: "Add features. Scale infrastructure. Bring on your own team. We mentor." },
                  { phase: "Technology Strategy", desc: "Help with tech decisions. API design. Database architecture. Security." },
                  { phase: "Founder Support", desc: "We act like a CTO. Strategic advice. Hiring guidance for your first engineers." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.phase}</h3>
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
                Startup-Friendly Pricing
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { label: "MVP Phase", range: "$20K - $50K", timeline: "6-10 weeks", focus: "Validate idea" },
                  { label: "MVP to Beta", range: "$50K - $100K", timeline: "10-16 weeks", focus: "Add features" },
                  { label: "Series A Prep", range: "$100K - $200K+", timeline: "16-24 weeks", focus: "Scale features" },
                  { label: "Equity Options", range: "Negotiable", timeline: "Custom", focus: "Early stage" }
                ].map((tier, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <p className="text-sm text-zinc-400 mb-2">{tier.label}</p>
                    <p className="text-2xl font-bold text-white mb-2">{tier.range}</p>
                    <p className="text-xs text-primary font-semibold mb-2">{tier.timeline}</p>
                    <p className="text-sm text-zinc-400">{tier.focus}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <h3 className="text-lg font-semibold text-white mb-2">Early Stage Founders</h3>
                <p className="text-zinc-300">
                  We support early stage startups with equity options and favorable terms. We believe in your success and want to grow with you.
                </p>
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
                Tech Stack Built for Scaling
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                We choose tools that scale with you. No technical debt. Cloud-native. Easy to hire engineers who know it.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { category: "Frontend", tech: "React, Next.js, TypeScript, Tailwind" },
                  { category: "Backend", tech: "Node.js, Python, Go, PostgreSQL" },
                  { category: "Infrastructure", tech: "AWS, Docker, GitHub Actions, Vercel" },
                  { category: "DevOps", tech: "Automated testing, CI/CD, monitoring" }
                ].map((area, i) => (
                  <div key={i}>
                    <p className="text-sm text-primary font-semibold mb-2 uppercase">{area.category}</p>
                    <p className="text-zinc-300">{area.tech}</p>
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
                Ready to Build Your Startup?
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Let'"'"'s turn your idea into a product. Fast. Lean. Investor-ready.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your Startup Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

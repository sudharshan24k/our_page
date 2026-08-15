import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/insights/custom-vs-off-the-shelf-software",
  },
  title: "Custom Software vs Off-the-Shelf: Which Is Better? - EduraTech",
  description: "Compare the pros, cons, and hidden costs of custom software vs off-the-shelf SaaS. Make the right tech choice for your small business scale.",
  openGraph: {
    title: "Custom Software vs Off-the-Shelf: Which Is Better? - EduraTech",
    description: "Compare the pros, cons, and hidden costs of custom software vs off-the-shelf SaaS. Make the right tech choice for your small business scale.",
    url: "https://eduratech.com/insights/custom-vs-off-the-shelf-software",
  },
};

export default function CustomVsOffTheShelfPage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-sm font-semibold text-primary">Technology Strategy</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                Custom Software vs Off-the-Shelf: Which Is Better for a Small Business?
              </h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                Avoid expensive software traps. A balanced evaluation of custom-built software vs subscription-based SaaS platforms.
              </p>
              <div className="flex gap-4 text-sm text-zinc-500">
                <span>August 2024</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 md:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
                The Core Difference
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">Off-the-shelf software is ready-made and sold via monthly subscriptions (SaaS). It's cheap upfront but forces your business to adapt its workflows to match the software's templates.</p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">Custom software is built from the ground up to fit your exact operational workflows. It requires an upfront capital investment but gives you total ownership, zero user-based subscription fees, and infinite scalability.</p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 md:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
                Comparing Upfront and Long-Term Costs
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">While off-the-shelf SaaS costs only $50-$200/month per user, those costs compound as your team grows. A team of 50 users can easily cost $60,000+ per year in subscription fees, forever.</p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">Custom software has a high initial cost (e.g. $40K-$100K) but has near-zero monthly licensing fees, meaning it pays for itself as your team scales. You own the code as a digital business asset.</p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 md:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
                Flexibility and Strategic Edge
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">If your operations rely on unique workflows that give you a competitive edge, generic software will throttle your efficiency. Custom software allows you to automate those specific edges, offering capabilities your competitors can't buy off the shelf.</p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 md:py-28">
          <Container>
            <div className="max-w-3xl p-8 md:p-12 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl pointer-events-none" />
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your System?</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Request a free strategy audit. We will analyze your operations, identify bottlenecks, and map out a clear technology roadmap.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Claim Free Strategy Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

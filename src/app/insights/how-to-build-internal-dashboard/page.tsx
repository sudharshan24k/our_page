import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/insights/how-to-build-internal-dashboard",
  },
  title: "How to Build an Internal Business Dashboard - Complete Guide - EduraTech",
  description: "Learn how to build secure internal database dashboards and portals. Consolidate sales, operational, and advertising metrics into one portal.",
  openGraph: {
    title: "How to Build an Internal Business Dashboard - Complete Guide - EduraTech",
    description: "Learn how to build secure internal database dashboards and portals. Consolidate sales, operational, and advertising metrics into one portal.",
    url: "https://www.eduratech.com/insights/how-to-build-internal-dashboard",
  },
};

export default function HowToBuildInternalDashboardPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eduratech.com"}, {"@type": "ListItem", "position": 2, "name": "Insights", "item": "https://www.eduratech.com/insights"}, {"@type": "ListItem", "position": 3, "name": "How To Build Internal Dashboard", "item": "https://www.eduratech.com/insights/how-to-build-internal-dashboard"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "How To Build Internal Dashboard", "description": "Expert guide and analysis on how to build internal dashboard for B2B growth and digital acceleration.", "datePublished": "2024-08-15T00:00:00Z", "dateModified": "2024-08-15T00:00:00Z", "author": {"@type": "Organization", "name": "Edura Technologies", "url": "https://www.eduratech.com"}, "publisher": {"@type": "Organization", "name": "Edura Technologies", "logo": {"@type": "ImageObject", "url": "https://www.eduratech.com/logo.png"}}, "mainEntityOfPage": "https://www.eduratech.com/insights/how-to-build-internal-dashboard"}) }}
      />
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-sm font-semibold text-primary">Custom Portals</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                How to Build an Internal Business Dashboard: A Complete Guide
              </h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                Stop loging into ten different tools. Learn how to centralize your operations, advertising, and client data into a secure database dashboard.
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
                The Problem: Siloed Business Data
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">As businesses grow, they adopt multiple specialized tools. Sales data sits in the CRM, marketing spend sits in Google/Facebook Ads, and fulfillment metrics sit in spreadsheets. Managers waste hours manually compiling this data.</p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">An internal dashboard centralizes these metrics, pulling data from various APIs into a single, unified visual display in real-time.</p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 md:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
                Key Steps to Build a Secure Internal Dashboard
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">First, define your metrics (KPIs) that directly impact operations. Second, construct secure API connectors to fetch data from your different platforms. Third, structure a centralized data warehouse (like PostgreSQL or BigQuery).</p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">Finally, design a fast front-end interface built on Next.js or React. Ensure role-based access controls are implemented so employees only see data relevant to their clearance.</p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 md:py-28">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
                Operational and Strategic Impact
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">A unified dashboard removes guesswork. Managers can spot customer drop-off points, trace ad spend ROI down to a single dollar, and monitor fulfillment velocities in real time, driving growth.</p>
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

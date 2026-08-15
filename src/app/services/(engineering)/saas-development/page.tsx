import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/saas-development",
  },
  title: "SaaS Development Company - Build Your SaaS Product - EduraTech",
  description: "Custom SaaS development for startups and growing businesses. Full-stack, cloud-native, production-ready. From MVP to scaling.",
  openGraph: {
    title: "SaaS Development - Build Your Product - EduraTech",
    description: "We build SaaS products designed to scale. From MVP validation to enterprise features.",
    url: "https://www.eduratech.com/services/saas-development",
  },
};

export default function SaaSDevelopment() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eduratech.com"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eduratech.com/services"}, {"@type": "ListItem", "position": 3, "name": "Saas Development", "item": "https://www.eduratech.com/services/saas-development"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Saas Development Services", "description": "Professional B2B technical solutions for saas development.", "provider": {"@type": "Organization", "name": "Edura Technologies", "url": "https://www.eduratech.com"}, "areaServed": "US", "serviceType": "Software & AI Development"}) }}
      />
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                SaaS Development Built for Growth
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                We build SaaS products designed to validate ideas quickly and scale efficiently. From MVP to enterprise—built right from day one.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Discuss Your SaaS Idea
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
                The SaaS Development Process
              </h2>
              <div className="space-y-8">
                {[
                  {
                    phase: "MVP Development",
                    description: "Build the core product quickly to validate your idea with real users. Fast feedback loops, lean architecture.",
                    timeline: "8-12 weeks"
                  },
                  {
                    phase: "User Feedback & Iteration",
                    description: "Gather feedback from early users and refine the product. Add features based on real demand, not assumptions.",
                    timeline: "4-8 weeks"
                  },
                  {
                    phase: "Scaling & Performance",
                    description: "Optimize the architecture for growth. Database scaling, caching, infrastructure improvements.",
                    timeline: "4-8 weeks"
                  },
                  {
                    phase: "Enterprise Features",
                    description: "Add multi-tenant support, advanced permissions, SSO, compliance, and other enterprise requirements.",
                    timeline: "ongoing"
                  }
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
                What We Build
              </h2>
              <div className="space-y-4">
                {[
                  "Multi-tenant SaaS architecture",
                  "Cloud-native applications (AWS, Azure)",
                  "Scalable databases and APIs",
                  "User authentication and permissions",
                  "Payment and billing integration",
                  "Analytics and usage tracking",
                  "Customer portals and dashboards",
                  "Mobile apps (iOS/Android)"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-zinc-300">
                    <span className="text-primary">✓</span> {item}
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
                Start Your SaaS Journey
              </h2>
              <p className="text-xl text-zinc-300 mb-12">
                Let's turn your product idea into a scalable, profitable SaaS business.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get a Free SaaS Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

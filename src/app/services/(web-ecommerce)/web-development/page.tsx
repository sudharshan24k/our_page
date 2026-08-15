import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/web-development",
  },
  title: "Professional Web Development Services",
  description: "Get high-performance web development. We build secure, custom web applications using Next.js, React, and modern tech stacks.",
};

export default function WebDevelopmentPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eduratech.com"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eduratech.com/services"}, {"@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://www.eduratech.com/services/web-development"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Web Development Services", "description": "Professional B2B technical solutions for web development.", "provider": {"@type": "Organization", "name": "Edura Technologies", "url": "https://www.eduratech.com"}, "areaServed": "US", "serviceType": "Software & AI Development"}) }}
      />
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Custom Web Development Designed for Performance
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                We engineer fast, secure, and conversion-optimized custom web solutions to support your brand's growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                  Get a Free Estimate
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
                State of the Art Web Architecture
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    We build fast-loading custom web solutions that deliver exceptional user experience on every device.
                  </p>
                  <ul className="space-y-4">
                                        <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Modern frameworks including React, Next.js, and TypeScript.</span></li>
                    <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Optimized for core web vitals and instantaneous page loads.</span></li>
                    <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Flawless responsiveness across mobile, tablet, and desktop.</span></li>
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
                Build With The Future In Mind
              </h2>
              <div className="space-y-6 text-zinc-400 font-light text-base md:text-lg leading-relaxed">
                                <p>We avoid templates and page builders. Every custom web application we build is hand-coded to ensure performance and clean maintainability.</p>
                <p>We set up secure deployments, daily backups, and edge hosting configurations so your digital assets remain secure.</p>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/web-application-development",
  },
  title: "Web Application Development - Custom Business Apps - EduraTech",
  description: "Custom web applications that drive business results. Fast, secure, scalable. For internal operations or customer-facing platforms.",
  openGraph: {
    title: "Web Application Development - EduraTech",
    description: "We build custom web apps designed to solve real business problems. Not templates. Real solutions.",
    url: "https://eduratech.com/services/web-application-development",
  },
};

export default function WebAppDevelopment() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Custom Web Applications That Drive Results
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Fast, secure, scalable web applications built specifically for your business challenges. Internal tools or customer-facing platforms.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get a Free App Estimate
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
                Web Apps We Build
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Internal Business Tools",
                    examples: "Dashboards, reporting tools, workflow management, data analysis platforms"
                  },
                  {
                    title: "Customer-Facing Platforms",
                    examples: "Client portals, booking systems, marketplaces, SaaS applications"
                  },
                  {
                    title: "Enterprise Applications",
                    examples: "ERP systems, CRM platforms, project management, financial systems"
                  },
                  {
                    title: "Specialized Solutions",
                    examples: "Real-time collaboration tools, mobile-first applications, API-driven platforms"
                  }
                ].map((category, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-2">{category.title}</h3>
                    <p className="text-zinc-400">{category.examples}</p>
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
                Technology & Performance
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                We build using modern, proven technology. Fast load times, secure by default, and designed to scale with your business.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Frontend", tech: "React, Next.js, TypeScript" },
                  { label: "Backend", tech: "Node.js, Python, AWS, Azure" },
                  { label: "Database", tech: "PostgreSQL, MongoDB, Redis" },
                  { label: "Security", tech: "HTTPS, encryption, compliance" }
                ].map((area, i) => (
                  <div key={i}>
                    <p className="text-sm text-primary font-semibold mb-2">{area.label}</p>
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
                Ready to Build?
              </h2>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

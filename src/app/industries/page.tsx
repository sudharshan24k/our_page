import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight, Stethoscope, Smile, Home, Briefcase, ShoppingCart, BookOpen, Truck, Rocket } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/industries",
  },
  title: "Industry-Specific Software Solutions - EduraTech",
  description: "Custom software and AI solutions tailored to healthcare, dental, real estate, legal, e-commerce, education, logistics, and startups. Industry expertise you can trust.",
  openGraph: {
    title: "Industry-Specific Software Solutions - EduraTech",
    description: "We build software solutions tailored to your industry's unique challenges and workflows.",
    url: "https://www.eduratech.com/industries",
  },
};

const industries = [
  {
    name: "Healthcare",
    icon: Stethoscope,
    description: "HIPAA-compliant software for clinics, hospitals, and health systems. Practice management, patient portals, and data analytics.",
    href: "/industries/healthcare"
  },
  {
    name: "Dental",
    icon: Smile,
    description: "Custom practice management software. Patient scheduling, billing, compliance, and electronic records built for real dental workflows.",
    href: "/industries/dental"
  },
  {
    name: "Real Estate",
    icon: Home,
    description: "Lead management, CRM, transaction automation, and business intelligence for real estate teams and brokers.",
    href: "/industries/real-estate"
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    description: "Project management, time tracking, billing, and client portals for consulting firms, law firms, and accounting practices.",
    href: "/industries/professional-services"
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    description: "Custom store platforms, inventory management, fulfillment automation, and analytics for online businesses.",
    href: "/industries/ecommerce"
  },
  {
    name: "Education",
    icon: BookOpen,
    description: "Learning management systems, student information systems, and online course platforms for schools and universities.",
    href: "/industries/education"
  },
  {
    name: "Logistics",
    icon: Truck,
    description: "Fleet management, route optimization, real-time tracking, and supply chain visibility for logistics and transportation.",
    href: "/industries/logistics"
  },
  {
    name: "Startups",
    icon: Rocket,
    description: "MVP development, scalable architecture, and growth-focused technology for early-stage companies and founders.",
    href: "/industries/startups"
  }
];

export default function IndustriesHub() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Software Solutions Built for Your Industry
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                We don't build generic software. We build solutions tailored to your industry's specific workflows, challenges, and regulations.
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-zinc-300 font-light leading-relaxed mb-12">
                We work with businesses across all sectors. Contact us to discuss your specific industry challenges and how we can help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

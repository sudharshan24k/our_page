import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/industries/dental",
  },
  title: "Dental Practice Management Software - EduraTech",
  description: "Custom practice management software for dental clinics. Patient scheduling, billing, HIPAA compliance, and automation built for real dental practices.",
  openGraph: {
    title: "Dental Practice Management Software - EduraTech",
    description: "Custom dental software that streamlines scheduling, billing, patient communication, and compliance.",
    url: "https://eduratech.com/industries/dental",
  },
};

export default function DentalPage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent min-h-[70vh] flex items-center pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Custom Software Built for Dental Practices
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Practice management software designed specifically for dental clinics. Scheduling, billing, patient communication, compliance, and automation—all integrated.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/services/crm-development" className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all">
                  View Related Services
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
                Common Challenges in Dental Practice
              </h2>
              <div className="space-y-4">
                {[
                  "Appointment scheduling and no-show management",
                  "Patient communication and follow-ups",
                  "Billing and insurance claim management",
                  "Patient records and compliance (HIPAA)",
                  "Staff coordination and task management",
                  "Treatment planning and case documentation"
                ].map((challenge, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-zinc-300 text-lg">{challenge}</p>
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
                What We Build for Dental Practices
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Practice Management System",
                    items: ["Patient scheduling & calendar", "Appointment reminders (SMS/Email)", "No-show tracking & management", "Provider schedules & availability"]
                  },
                  {
                    title: "Billing & Insurance",
                    items: ["Treatment planning & costing", "Patient billing & statements", "Insurance claim submission", "Payment processing & tracking"]
                  },
                  {
                    title: "Patient Portal",
                    items: ["Appointment booking & rescheduling", "Treatment history & documentation", "Online forms & intake", "Secure communication"]
                  },
                  {
                    title: "Compliance & Security",
                    items: ["HIPAA compliance", "Encrypted data storage", "Access controls & audit logs", "Automated backups"]
                  }
                ].map((section, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-4">{section.title}</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex gap-2 text-zinc-300">
                          <span className="text-primary">•</span> {item}
                        </li>
                      ))}
                    </ul>
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
                Investment & Timeline
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Small Clinic (<3 providers)", range: "$40K - $75K", timeline: "12-16 weeks" },
                  { label: "Medium Practice (3-8 providers)", range: "$75K - $150K", timeline: "16-24 weeks" }
                ].map((tier, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <p className="text-zinc-400 text-sm mb-2">{tier.label}</p>
                    <p className="text-2xl font-bold text-white mb-4">{tier.range}</p>
                    <p className="text-sm text-zinc-400">{tier.timeline}</p>
                  </div>
                ))}
              </div>
              <p className="text-zinc-400 leading-relaxed">
                We provide fixed-scope, fixed-price estimates after understanding your specific practice requirements, integrations needed, and staff size.
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl text-zinc-300 font-light leading-relaxed mb-12">
                Let's discuss how custom software can streamline your practice, improve patient experience, and reduce administrative overhead.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all"
              >
                Schedule Your Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

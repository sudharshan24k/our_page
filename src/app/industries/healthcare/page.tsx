import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Healthcare Software Solutions - Medical Practice Management - EduraTech",
  description: "Custom healthcare software for clinics, hospitals, medical practices. EMR, patient portals, HIPAA-compliant.",
  openGraph: {
    title: "Healthcare Practice Management Software - EduraTech",
    description: "Medical practice software built for healthcare. Compliant. Secure. Reduces administrative burden.",
    url: "https://eduratech.com/industries/healthcare",
  },
};

export default function HealthcarePage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent min-h-[70vh] flex items-center pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Healthcare Software Built for Your Practice
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Patient management, scheduling, billing, compliance. Reduce admin work. Improve patient care. HIPAA-compliant by design.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your Healthcare Tech Assessment
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
                Challenges We Solve
              </h2>
              <div className="space-y-6">
                {[
                  "Paper records mixed with multiple digital systems creates chaos",
                  "Scheduling conflicts and no-shows reduce revenue",
                  "Manual billing and insurance claims are error-prone and time-consuming",
                  "Fragmented patient data leads to poor care coordination",
                  "Compliance burden is growing with regulations like HIPAA",
                  "Staff spends more time on admin than patient care"
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
                What We Build
              </h2>
              <div className="space-y-8">
                {[
                  { feature: "Electronic Health Records (EHR)", desc: "Comprehensive patient medical history, lab results, medications, allergies in one place." },
                  { feature: "Appointment Scheduling", desc: "Online booking, automated reminders, reduce no-shows by 40%." },
                  { feature: "Billing & Insurance Claims", desc: "Automated claim submission, denial management, revenue cycle optimization." },
                  { feature: "Patient Portal", desc: "Patients view their records, request refills, pay bills, communicate with providers." },
                  { feature: "Compliance & Security", desc: "HIPAA-compliant architecture. Audit logs. Secure patient data encryption." },
                  { feature: "Analytics & Reporting", desc: "Practice metrics, revenue per provider, patient outcomes tracking." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.feature}</h3>
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
                Investment & Timeline
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Small Clinic System", range: "$50K - $100K", timeline: "12-16 weeks" },
                  { label: "Medium Practice", range: "$100K - $200K", timeline: "16-24 weeks" },
                  { label: "Multi-location", range: "$200K - $500K+", timeline: "24-36 weeks" },
                  { label: "Hospital System", range: "$500K+", timeline: "Custom" }
                ].map((tier, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <p className="text-sm text-zinc-400 mb-2">{tier.label}</p>
                    <p className="text-2xl font-bold text-white mb-4">{tier.range}</p>
                    <p className="text-sm text-zinc-400">{tier.timeline}</p>
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
                Ready to Modernize Your Healthcare Practice?
              </h2>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your Healthcare Tech Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

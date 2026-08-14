import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/industries/education",
  },
  title: "Education Software Solutions - School & LMS Systems - EduraTech",
  description: "Custom education software for schools, universities, training centers. Student management, LMS, attendance.",
  openGraph: {
    title: "Education Software - School Management Systems - EduraTech",
    description: "Learning management and school administration software built for educators.",
    url: "https://eduratech.com/industries/education",
  },
};

export default function EducationPage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Education Software Built for Modern Learning
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Student management, learning platforms, course delivery, parent communication. Focus on teaching, not paperwork.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your EdTech Assessment
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
                Challenges In Education We Solve
              </h2>
              <div className="space-y-6">
                {[
                  "Student data scattered across multiple systems and spreadsheets",
                  "Parent communication is inconsistent and time-consuming",
                  "Attendance tracking is manual and error-prone",
                  "Grading and report generation takes hours",
                  "Online/hybrid learning requires coordination between platforms",
                  "Limited visibility into student engagement and progress"
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
                Education Solutions We Build
              </h2>
              <div className="space-y-8">
                {[
                  { solution: "Student Information System (SIS)", desc: "Central student database. Enrollment, grades, transcripts, attendance." },
                  { solution: "Learning Management System (LMS)", desc: "Course delivery, assignments, quizzes. Works for in-person and remote learning." },
                  { solution: "Parent Communication Portal", desc: "Parents track attendance, grades, behavior. Two-way messaging." },
                  { solution: "Attendance & Tracking", desc: "Automated attendance. Behavior tracking. Discipline records." },
                  { solution: "Assessment & Grading", desc: "Flexible grading scales. Grade calculation automation. Report generation." },
                  { solution: "Scheduling & Timetable", desc: "Class scheduling, room allocation, teacher assignments." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.solution}</h3>
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
                  { label: "Small School System", range: "$50K - $100K", timeline: "12-16 weeks" },
                  { label: "Medium Institution", range: "$100K - $200K", timeline: "16-24 weeks" },
                  { label: "Large District", range: "$200K - $500K+", timeline: "24-36 weeks" },
                  { label: "University System", range: "$500K+", timeline: "Custom" }
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
                Ready to Modernize Your Education Platform?
              </h2>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Schedule Your Education Tech Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

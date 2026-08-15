"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, AlertTriangle, CheckCircle, Shield, Milestone, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface Solution {
  title: string;
  desc: string;
}

interface Tier {
  label: string;
  range: string;
  timeline: string;
}

interface IndustryPageLayoutProps {
  title: string;
  description: string;
  ctaText: string;
  challenges: string[];
  solutions: Solution[];
  tiers: Tier[];
  ctaTitle: string;
  ctaButtonText: string;
  heroBadges?: string[];
}

export function IndustryPageLayout({
  title,
  description,
  ctaText,
  challenges,
  solutions,
  tiers,
  ctaTitle,
  ctaButtonText,
  heroBadges = ["Industry Standard Solutions", "Enterprise Grade", "Security First"]
}: IndustryPageLayoutProps) {
  return (
    <main className="overflow-hidden selection:bg-primary/30">
      {/* Hero Section */}
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:items-center justify-between">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 lg:max-w-[55%] space-y-8"
              >
                <div className="flex flex-wrap gap-2.5">
                  {heroBadges.map((badge, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-tight">
                    {title}
                  </h1>
                  <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                    {description}
                  </p>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]"
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: Visual Trust Panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:max-w-[40%] bg-gradient-to-br from-[#0a0a0c] to-[#040405] border border-white/5 shadow-2xl rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Execution Standards
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: "Compliance Guarantee", desc: "HIPAA, SOC2, or GDPR compliant system designs." },
                    { label: "Cloud Scalability", desc: "Built with resilient serverless or container frameworks." },
                    { label: "IP Ownership", desc: "You own 100% of the repository source code and assets." }
                  ].map((std) => (
                    <li key={std.label} className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">{std.label}</h4>
                      <p className="text-xs text-zinc-500">{std.desc}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Challenges Section */}
      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between">
              {/* Left Side */}
              <div className="lg:max-w-[35%] space-y-4">
                <p className="text-xs font-mono text-primary tracking-widest uppercase">Bottlenecks</p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                  Challenges We Solve
                </h2>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Legacy systems, operational inefficiencies, and communication drop-offs cost modern businesses thousands of dollars in lost opportunities. Here is what we automate out of your workflow.
                </p>
              </div>

              {/* Right Side Cards */}
              <div className="flex-1 grid sm:grid-cols-2 gap-4 lg:pl-8">
                {challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-[#0a0a0c] hover:border-red-500/20 hover:bg-white/[0.01] transition-all duration-300 text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed font-light">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Solutions We Build Section */}
      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <p className="text-xs font-mono text-primary tracking-widest uppercase">Capabilities</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                Solutions We Build
              </h2>
              <p className="text-zinc-400 font-light">
                Custom software engineered to deliver high performance, absolute compliance, and measurable business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {solutions.map((item, i) => (
                <div
                  key={i}
                  className="relative p-8 rounded-3xl bg-[#0a0a0c] border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1.5 backdrop-blur-xl overflow-hidden group text-left"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/70 transition-all duration-700 z-10" />
                  <div className="relative z-20 space-y-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 font-light leading-relaxed text-xs sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Investment & Timeline Section */}
      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between">
              {/* Left Side */}
              <div className="lg:max-w-[30%] space-y-4">
                <p className="text-xs font-mono text-primary tracking-widest uppercase">Budget & Delivery</p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                  Timeline & Investment
                </h2>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Transparent, milestone-based investment ranges mapped to delivery scope. We work in clean, modular sprints.
                </p>
              </div>

              {/* Right Side Cards */}
              <div className="flex-1 grid sm:grid-cols-2 gap-4 lg:pl-8">
                {tiers.map((tier, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-white/5 bg-[#0a0a0c] hover:border-primary/20 transition-all duration-300 space-y-4 text-left"
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{tier.label}</p>
                      <Milestone className="w-4 h-4 text-zinc-700" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-white">{tier.range}</p>
                      <p className="text-xs text-zinc-400">Duration: {tier.timeline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Footer Call to Action */}
      <Reveal width="100%">
        <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white leading-tight">
                {ctaTitle}
              </h2>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]"
                >
                  {ctaButtonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

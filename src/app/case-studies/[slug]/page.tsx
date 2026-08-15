import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle, Zap, ShieldAlert, ArrowDown } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudiesData } from "./caseStudiesConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData[slug];
  if (!study) return {};

  const title = `${study.client} Case Study | Verified B2B ROI | EduraTech`;
  const description = `${study.challenge.slice(0, 100)}... Read the full case study to explore our technical solution and business results.`;

  return {
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://eduratech.com/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudiesData[slug];
  if (!study) {
    notFound();
  }

  // Schema structured data for Article/Case Study
  const caseStudyJson = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${study.client} — ${study.category} Case Study`,
    "description": study.challenge,
    "image": "https://eduratech.com/icon.png",
    "author": {
      "@type": "Organization",
      "name": "Edura Technologies",
      "url": "https://eduratech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Edura Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eduratech.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://eduratech.com/case-studies/${slug}`
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJson) }}
      />

      {/* Hero Header */}
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold text-primary mb-6">
                Featured Case Study — {study.category}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                How We Helped {study.client}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                {study.challenge}
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Metrics Bar */}
      <Reveal width="100%">
        <Section className="bg-transparent border-t border-b border-white/5 py-12">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/[0.01] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                  Verified Result Metric
                </span>
                <span className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                  {study.metric}
                </span>
                <span className="text-base text-zinc-400 block mt-1 font-light">
                  {study.metricLabel}
                </span>
              </div>
              <div className="max-w-xl text-zinc-300 font-light text-sm md:text-base leading-relaxed border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">Outcome Summary</span>
                {study.impact}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Main Content Layout */}
      <Reveal width="100%">
        <Section className="bg-transparent py-24 md:py-32">
          <Container>
            <div className="grid lg:grid-cols-3 gap-16">
              
              {/* Left Column: Problem & Solution Details */}
              <div className="lg:col-span-2 space-y-16">
                
                {/* The Problem */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white flex items-center gap-3">
                    <ShieldAlert className="w-6 h-6 text-red-400" />
                    The Business Problem
                  </h2>
                  <p className="text-lg text-zinc-300 leading-relaxed font-light">
                    {study.problemText}
                  </p>
                </div>

                {/* The Technical Solution */}
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white flex items-center gap-3">
                    <Zap className="w-6 h-6 text-primary animate-pulse" />
                    Technical Solution & Execution
                  </h2>
                  <p className="text-lg text-zinc-300 leading-relaxed font-light">
                    {study.solutionIntro}
                  </p>
                  <ul className="space-y-6">
                    {study.solutionSteps.map((step, index) => {
                      const [title, desc] = step.split(":");
                      return (
                        <li key={index} className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <h4 className="font-semibold text-white text-base md:text-lg">{title}</h4>
                            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">{desc}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* The Bottom Line */}
                <div className="space-y-6 p-8 rounded-3xl border border-primary/20 bg-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-2xl pointer-events-none" />
                  <h2 className="text-2xl font-semibold tracking-tighter text-white">
                    The Bottom Line
                  </h2>
                  <p className="text-zinc-300 font-light leading-relaxed text-sm md:text-base">
                    {study.bottomLineText}
                  </p>
                </div>

              </div>

              {/* Right Column: Interactive System Architecture Flowchart */}
              <div className="space-y-10">
                <div className="sticky top-28 p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 block border-b border-white/5 pb-4">
                    System Architecture Diagram
                  </h3>
                  
                  {/* Flowchart list rendering */}
                  <div className="space-y-4 relative">
                    {study.diagramSteps.map((step, idx) => (
                      <div key={idx} className="relative z-10 flex flex-col items-center">
                        <div className="w-full p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center hover:border-primary/50 transition-colors duration-300">
                          <span className="text-[10px] font-mono tracking-widest text-primary uppercase block mb-1">
                            {step.label}
                          </span>
                          <span className="text-xs text-zinc-400 font-light">
                            {step.description}
                          </span>
                        </div>
                        {idx < study.diagramSteps.length - 1 && (
                          <div className="my-2 text-zinc-600 flex items-center justify-center">
                            <ArrowDown className="w-4 h-4 animate-bounce" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Contact Quick Audit link */}
                  <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-xs text-zinc-500 mb-4 font-light">Need a custom architecture audit like this?</p>
                    <a href="/contact" className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline">
                      Schedule a Free Audit
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

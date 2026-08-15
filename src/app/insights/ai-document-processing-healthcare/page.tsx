import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/insights/ai-document-processing-healthcare",
  },
  title: "AI Document Processing for Healthcare - EduraTech",
  description: "A technical look at how healthcare providers are using HIPAA-compliant OCR and LLM pipelines.",
};

export default function ArticlePage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-sm font-semibold text-primary">Healthcare Tech</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                AI Document Processing for Healthcare: Eliminating Manual Data Entry
              </h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                A technical look at how healthcare providers are using HIPAA-compliant OCR and LLM pipelines to automate medical billing and reduce administrative overhead by 60%.
              </p>
              <div className="flex gap-4 text-sm text-zinc-500">
                <span>July 2026</span>
                <span>•</span>
                <span>14 min read</span>
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
                The Healthcare Administration Crisis
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">The average healthcare facility spends entirely too much time routing PDFs, faxes, and physical invoices. The sheer volume of unstructured data leads to bottlenecks, billing errors, and physician burnout.</p>
              
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6 mt-12">
                The Technical Solution: Intelligent Document Processing
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">By combining Optical Character Recognition (OCR) with Large Language Models (LLMs) deployed in HIPAA-compliant cloud environments (like AWS GovCloud), facilities can automatically extract patient data, billing codes, and provider notes with 99%+ accuracy.</p>
            </div>
          </Container>
        </Section>
      </Reveal>
      
      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-20 text-center">
            <Container>
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl font-semibold tracking-tighter text-white">Ready to modernize your operations?</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors gap-2 group">
                        Book a Strategy Call
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Container>
        </Section>
      </Reveal>
    </main>
  );
}

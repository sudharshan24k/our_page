import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { TARGET_SOLUTIONS, getSolutionBySlug } from '@/lib/data/solutions';
import Link from 'next/link';
import { Contact } from '@/components/sections/Contact';
import { WhyUs } from '@/components/sections/WhyUs';

interface SolutionPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const solution = getSolutionBySlug(params.slug);
  
  if (!solution) {
    return { title: 'Solution Not Found' };
  }

  return {
    title: `${solution.title} | EduraTech`,
    description: solution.description,
    openGraph: {
      title: `${solution.title} | EduraTech`,
      description: solution.description,
    },
  };
}

export function generateStaticParams() {
  return TARGET_SOLUTIONS.map((solution) => ({
    slug: solution.slug,
  }));
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-transparent overflow-hidden relative border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-50" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm text-primary font-medium tracking-wide">
              <Zap className="w-4 h-4" />
              <span className="uppercase tracking-widest text-xs font-mono">{solution.category} SOLUTION</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              {solution.title}
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light text-balance max-w-3xl mx-auto">
              {solution.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button href="/project-cost-calculator" size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
                Get a Project Estimate
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/contact" variant="ghost" size="lg" className="border border-white/10 text-white hover:bg-white/5 px-8">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24 bg-[#050505]">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">The Problem</h2>
              <div className="p-6 md:p-8 rounded-3xl bg-red-500/5 border border-red-500/10">
                <p className="text-lg text-red-200/80 leading-relaxed font-light">
                  {solution.problem}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Our Solution</h2>
              <div className="p-6 md:p-8 rounded-3xl bg-green-500/5 border border-green-500/10">
                <p className="text-lg text-green-200/80 leading-relaxed font-light">
                  {solution.solution}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <WhyUs />
      <Contact />
    </>
  );
}

import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calculator } from 'lucide-react';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'AI Chatbot Development Cost Guide | EduraTech',
  description: 'A complete breakdown of AI chatbot development costs, from simple rule-based bots to advanced LLM integrations.',
};

export default function Page() {
  return (
    <>
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-transparent overflow-hidden relative border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-50" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm text-primary font-medium tracking-wide">
              <Calculator className="w-4 h-4" />
              <span className="uppercase tracking-widest text-xs font-mono">Pricing Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              AI Chatbot Development Cost
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light text-balance max-w-3xl mx-auto">
              A complete breakdown of AI chatbot development costs, from simple rule-based bots to advanced LLM integrations.
            </p>

            <div className="pt-8">
              <p className="text-zinc-300 mb-6 font-medium">Ready to get an exact number?</p>
              <Button href="/project-cost-calculator" size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]">
                Calculate Your Exact Project Cost
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24 bg-[#050505]">
        <Container className="max-w-3xl">
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Understanding the Investment</h2>
            <p>
              When evaluating ai chatbot development cost, it's crucial to look beyond the initial build price and consider the total cost of ownership, ROI, and the long-term value of the solution.
            </p>
            <h3>Key Cost Drivers</h3>
            <ul>
              <li><strong>Complexity & Scope:</strong> The number of features, integrations, and unique workflows directly impact the baseline cost.</li>
              <li><strong>Design Requirements:</strong> Custom UI/UX engineering requires more investment than using off-the-shelf templates but yields higher conversion rates.</li>
              <li><strong>Security & Compliance:</strong> Healthcare (HIPAA), finance, and enterprise systems require rigorous security architectures.</li>
              <li><strong>Infrastructure:</strong> Ongoing cloud hosting, maintenance, and AI API costs (if applicable).</li>
            </ul>
            
            <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
              <h3 className="mt-0 text-white">Stop guessing your budget</h3>
              <p className="text-zinc-400 mb-6">Use our interactive calculator to get a detailed, customized estimate based on your exact requirements.</p>
              <Button href="/project-cost-calculator" className="bg-white text-black hover:bg-zinc-200">
                Launch Cost Calculator
              </Button>
            </div>
          </article>
        </Container>
      </Section>

      <Contact />
    </>
  );
}

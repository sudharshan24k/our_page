import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/services/azure-cloud-solutions",
  },
  title: "Microsoft Azure Cloud Solutions",
  description: "Get custom Azure cloud solutions. We build secure enterprise cloud infrastructure, manage Active Directory, and deploy scalable systems.",
};

export default function AzureCloudSolutionsPage() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Azure Cloud Solutions & Enterprise Infrastructure
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Run your enterprise applications on secure, compliant Microsoft Azure cloud infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                  Get a Free Estimate
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/how-we-work" className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all">
                  View Our Process
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
                Enterprise Cloud Design
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    We build hybrid cloud architectures, manage active directory integrations, and configure secure environments.
                  </p>
                  <ul className="space-y-4">
                                        <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Azure Active Directory (Entra ID) configuration.</span></li>
                    <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Enterprise container hosting via Azure Kubernetes Service (AKS).</span></li>
                    <li className="flex items-start gap-3 text-zinc-400"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Data warehouse implementations with Azure Synapse.</span></li>
                  </ul>
                </div>
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
                Compliance and Governance
              </h2>
              <div className="space-y-6 text-zinc-400 font-light text-base md:text-lg leading-relaxed">
                                <p>We ensure your Azure resources align with industry standards including HIPAA, GDPR, and SOC2.</p>
                <p>We set up active logging and resource monitoring pipelines to prevent security threats.</p>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

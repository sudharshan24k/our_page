import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cloud Solutions & Migration Services - AWS Azure GCP - EduraTech",
  description: "Migrate to cloud. Build scalable infrastructure. AWS, Azure, Google Cloud. Expert implementation.",
  openGraph: {
    title: "Cloud Infrastructure & Migration - EduraTech",
    description: "Move to cloud confidently. We handle architecture, migration, security, and optimization.",
    url: "https://eduratech.com/services/cloud-solutions",
  },
};

export default function CloudSolutions() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent min-h-[70vh] flex items-center pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                Cloud Infrastructure That Scales
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                Migrate to cloud. Build for scale. Save money. AWS, Azure, Google Cloud. Expert architects and engineers.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your Cloud Strategy Assessment
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
                Our Cloud Services
              </h2>
              <div className="space-y-8">
                {[
                  { service: "Cloud Architecture", desc: "Design scalable, secure infrastructure. Multi-region, high-availability, disaster recovery." },
                  { service: "Migration to Cloud", desc: "Move from on-premise or legacy cloud. Zero downtime. Data integrity. Minimal disruption." },
                  { service: "Infrastructure as Code", desc: "Terraform, CloudFormation. Reproducible, version-controlled infrastructure." },
                  { service: "Containerization", desc: "Docker, Kubernetes. Microservices architecture. Easier deployment and scaling." },
                  { service: "Cost Optimization", desc: "Reduce cloud spend. Reserved instances, auto-scaling, storage optimization. 30-50% savings typical." },
                  { service: "Security & Compliance", desc: "IAM, encryption, compliance (SOC2, HIPAA, PCI). Secure by design." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.service}</h3>
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
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">
                Cloud Implementation Process
              </h2>
              <div className="space-y-8">
                {[
                  { phase: "Assessment", desc: "Analyze current infrastructure. Identify requirements, constraints, compliance needs.", timeline: "2-3 weeks" },
                  { phase: "Architecture Design", desc: "Design optimal cloud solution. Cost model. Migration strategy.", timeline: "2-4 weeks" },
                  { phase: "Setup & Migration", desc: "Build infrastructure. Migrate data and applications. Validate everything works.", timeline: "4-16 weeks" },
                  { phase: "Optimization", desc: "Monitor and optimize. Cost reduction. Performance tuning. Support and training.", timeline: "ongoing" }
                ].map((step, i) => (
                  <div key={i} className="border-l-2 border-primary pl-6 py-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">{step.phase}</h3>
                    <p className="text-zinc-400 mb-2">{step.desc}</p>
                    <p className="text-sm text-primary font-semibold">{step.timeline}</p>
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
                Cloud Platforms We Support
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    platform: "AWS",
                    services: ["EC2", "RDS", "Lambda", "S3", "CloudFront", "VPC"]
                  },
                  {
                    platform: "Azure",
                    services: ["VMs", "App Service", "SQL Database", "Cosmos DB", "Functions"]
                  },
                  {
                    platform: "Google Cloud",
                    services: ["Compute Engine", "Cloud SQL", "BigQuery", "Cloud Storage", "Cloud Run"]
                  }
                ].map((cloud, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-lg font-semibold text-white mb-4">{cloud.platform}</h3>
                    <ul className="space-y-2">
                      {cloud.services.map((svc, j) => (
                        <li key={j} className="text-sm text-zinc-400">✓ {svc}</li>
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
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Small App Migration", range: "$20K - $50K", timeline: "6-10 weeks" },
                  { label: "Medium Migration", range: "$50K - $150K", timeline: "10-16 weeks" },
                  { label: "Enterprise Migration", range: "$150K - $500K+", timeline: "16-32 weeks" },
                  { label: "New Cloud Build", range: "$30K - $200K+", timeline: "8-24 weeks" }
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
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Let'"'"'s design the right infrastructure for your business and budget.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your Cloud Strategy
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

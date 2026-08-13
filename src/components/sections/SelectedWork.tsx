"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "College Admission Portal",
        outcome: "Scalability & role-based access",
        description: "Streamlined the admission process for thousands of applicants with a robust and scalable portal.",
        industry: "Education",
        gradient: "from-slate-800 to-background"
    },
    {
        title: "Automated Scheduler",
        outcome: "Reliability under load",
        description: "Built a high-performance scheduling system capable of handling complex rule sets.",
        industry: "SaaS",
        gradient: "from-background to-slate-800"
    },
    {
        title: "Subscription Platform",
        outcome: "Seamless microtransactions",
        description: "A comprehensive platform for managing recurring payments and subscriptions with low latency.",
        industry: "Fintech",
        gradient: "from-slate-800 to-background"
    },
    {
        title: "Compliance Reporting System",
        outcome: "Audit-ready data pipelines",
        description: "Automated compliance workflows and reporting to ensure regulatory standards are met.",
        industry: "Finance",
        gradient: "from-background to-slate-800"
    }
];

export function SelectedWork() {
    return (
        <Section className="bg-background text-foreground border-t border-border py-24 md:py-32">
            <Container>
                <div className="mb-20 md:mb-24 flex items-end justify-between">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Featured Projects</h2>
                    {/* Optional View All Link */}
                    {/* <Link href="#" className="text-sm font-mono text-zinc-500 hover:text-white transition-colors flex items-center gap-2">View All</Link> */}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="group relative border border-border bg-muted/20 hover:bg-muted/40 transition-colors p-8 md:p-10 aspect-[4/3] md:aspect-[16/9] flex flex-col justify-end overflow-hidden">
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-70 transition-opacity", p.gradient)} />
                            <div className="relative z-10">
                                <p className="text-muted-foreground font-mono text-sm uppercase tracking-wide">{p.outcome}</p>
                                <h3 className="text-3xl md:text-4xl font-medium text-foreground mt-2 mb-4">{p.title}</h3>
                                <p className="text-foreground/80 font-light max-w-lg mb-8">{p.description}</p>
                                <div className="flex gap-4">
                                    <div className="px-4 py-1.5 rounded-full bg-background/50 border border-border text-xs font-medium text-muted-foreground">{p.industry}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

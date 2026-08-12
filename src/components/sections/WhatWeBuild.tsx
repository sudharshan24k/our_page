import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Check } from "lucide-react";

const capabilities = [
    "Web platforms with role-based access and secure authentication",
    "Data-driven systems with clear ownership and auditability",
    "Subscription, payment, and automation workflows",
    "Admin-controlled platforms built for long-term maintenance",
    "Scalable architectures designed to evolve without rewrites"
];

export function WhatWeBuild() {
    return (
        <Section className="bg-background text-foreground border-t border-border py-24 md:py-32">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="flex-1 lg:max-w-[45%]">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6">What We Build</h2>
                        <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                            We design and implement systems where correctness, reliability, and scalability are non-negotiable.
                        </p>
                    </div>

                    <div className="flex-1 lg:max-w-[55%]">
                        <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                            {capabilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <Check className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors mt-1 shrink-0" />
                                    <span className="text-lg font-light text-foreground/80 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="pt-8 text-muted-foreground font-mono text-xs uppercase tracking-widest">
                            Every system is built with production realities in mind, not demo assumptions.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

const problems = [
    { problem: "Outdated Digital Presence", solution: "Modern, high-authority redesign" },
    { problem: "Low Conversion Rates", solution: "ROI-driven conversion optimization" },
    { problem: "Zero Lead Tracking", solution: "Integrated lead capture & CRM sync" },
    { problem: "Manual Client Onboarding", solution: "Automated sales & intake workflows" },
    { problem: "High Visitor Bounce Rates", solution: "Engagement-focused user experience" },
    { problem: "Lack of Market Authority", solution: "Evidence-based trust & social proof" }
];

export function Problems() {
    return (
        <Section className="bg-background text-foreground border-t border-border py-24 md:py-32">
            <Container>
                <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                    <div className="flex-1 md:max-w-[35%]">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6">The Real Cost of Slow Growth</h2>
                        <p className="text-muted-foreground font-light leading-relaxed text-lg text-balance">
                            We transform engineering bottlenecks into strategic advantages.
                        </p>
                    </div>

                    <div className="flex-1 md:max-w-[65%] space-y-8">
                        {problems.map((p, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 py-4 border-b border-primary/20 last:border-0">
                                <span className="text-3xl font-light text-primary tabular-nums">{i + 1}</span>
                                <div className="flex-1">
                                    <span className="text-muted-foreground font-light text-[15px]">{p.problem}</span>
                                </div>
                                <div className="hidden sm:block text-primary">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                <div className="sm:w-1/2">
                                    <span className="text-white font-medium text-[16px]">{p.solution}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}

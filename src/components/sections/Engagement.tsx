"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Scale, Target, Eye, LockKeyhole } from "lucide-react";

export function EngagementModel() {
    const models = [
        {
            title: "ROI-Focused Strategy",
            description: "We don't just guess. We start with a deep dive into your business metrics and target client profiles to ensure every design choice drives real ROI.",
            icon: Target
        },
        {
            title: "Performance-Driven Partnership",
            description: "Our success is tied to your growth. We structure our engagements around tangible outcomes—more leads, better conversions, and high-ticket client acquisition.",
            icon: Scale
        },
        {
            title: "Full Creative Visibility",
            description: "No black boxes. You are kept in the loop through every stage of the design and build process with regular check-ins and transparent reporting.",
            icon: Eye
        },
        {
            title: "Permanent Digital Asset",
            description: "You own everything—code, design, and lead capture systems—from day one. We build high-value digital assets that you control forever.",
            icon: LockKeyhole
        }
    ];

    return (
        <Section className="bg-background text-foreground border-t border-border py-24 md:py-32">
            <Container>
                <div className="max-w-6xl">
                    <div className="mb-20 md:mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">How Engagement Works</h2>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                            A partnership structure built on trust, transparency, and shared incentives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {models.map((item, i) => (
                            <div key={i} className="group p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex gap-6">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                                        <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-white group-hover:text-blue-100 transition-colors">{item.title}</h3>
                                    <p className="text-zinc-400 font-light leading-relaxed text-[15px] group-hover:text-zinc-300 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}

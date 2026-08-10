"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Scale, Compass, Target, Eye, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export function Focus() {
    const principles = [
        {
            number: "01",
            title: "ROI-Driven Design",
            description: "We don't just build beautiful websites; we build business tools. Every design decision is measured against its ability to convert visitors into high-ticket clients.",
            icon: Target
        },
        {
            number: "02",
            title: "Immediate Authority",
            description: "In professional services, trust is everything. We design for immediate authority, ensuring your firm looks as professional and capable as it truly is.",
            icon: Scale
        },
        {
            number: "03",
            title: "Strategic Simplicity",
            description: "Complexity kills conversion. We aggressively simplify the user journey to ensure potential clients can find exactly what they need and book a call with zero friction.",
            icon: Compass
        },
        {
            number: "04",
            title: "Radical Transparency",
            description: "We provide clear, evidence-based reporting on your site's performance, lead quality, and conversion metrics from day one.",
            icon: Eye
        },
        {
            number: "05",
            title: "Continuous Optimization",
            description: "The digital landscape never stands still. We continuously refine and optimize your lead-generation systems to stay ahead of the competition.",
            icon: RefreshCw
        }
    ];

    return (
        <Section className="bg-background text-foreground py-24 md:py-32 flex flex-col justify-center border-t border-border">
            <Container>

                {/* Section Title */}
                <div className="mb-20 md:mb-24 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">What Drives Our Results</h2>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                        The core principles that turn site visitors into long-term clients.
                    </p>
                </div>

                {/* Principles Grid - No Boxes */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid md:grid-cols-6 gap-x-12 gap-y-16"
                >
                    {principles.map((principle, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className={`group space-y-6 md:col-span-2 ${i === 3 ? 'md:col-start-2' : ''}`}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-xs font-mono text-zinc-600 group-hover:text-blue-500 transition-colors uppercase tracking-widest border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/50">
                                    Principle {principle.number}
                                </span>
                            </div>

                            <principle.icon className="w-8 h-8 text-zinc-500 group-hover:text-white transition-colors" />

                            <div className="space-y-4">
                                <h3 className="text-2xl font-medium text-white group-hover:text-blue-100 transition-colors">{principle.title}</h3>
                                <p className="text-zinc-400 font-light leading-relaxed text-[15px] group-hover:text-zinc-300 transition-colors border-l border-zinc-800 pl-4 group-hover:border-zinc-700">
                                    {principle.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </Container>
        </Section>
    );
}

"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Search, PenTool, Code2, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

const phases = [
    {
        id: "01",
        title: "Audit & Analysis",
        description: "We start by auditing your current website and identifying leaks in your conversion funnel. We define the exact strategy needed to turn your site into a lead machine.",
        icon: Search
    },
    {
        id: "02",
        title: "Conversion-Led Design",
        description: "We design every page with a focus on authority, trust, and conversion. Every element is strategically placed to guide high-ticket clients toward booking a call.",
        icon: PenTool
    },
    {
        id: "03",
        title: "High-Performance Build",
        description: "Our development phase focuses on speed, security, and integration. We build a robust system that syncs perfectly with your existing CRM and sales processes.",
        icon: Code2
    },
    {
        id: "04",
        title: "Launch & Lead Capture",
        description: "Rigorous testing and optimization before we go live. We ensure your lead capture systems are foolproof and your firm is ready to handle consistent inbound leads.",
        icon: ShieldCheck
    }
];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function HowWeWork() {
    return (
        <Section id="methodology" className="bg-background text-foreground border-t border-border py-24 md:py-32 overflow-hidden">
            <Container>
                <div className="mb-20 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-8">Process Over Promotion</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                        A transparent delivery model designed for clarity, control, and outcomes.
                    </p>
                </div>

                {/* Desktop Visual Flow */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="hidden md:block relative"
                >
                    <div className="absolute top-[28px] left-0 right-0 h-[1px] bg-border" />
                    <div className="grid grid-cols-4 gap-8 relative">
                        {phases.map((phase, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="absolute top-[16px] left-0 w-4 h-4 rounded-full bg-background border border-muted-foreground group-hover:border-primary group-hover:scale-110 transition-all duration-300 z-10" />
                                <div className="pt-12">
                                    <phase.icon className="w-8 h-8 text-muted-foreground mb-4 group-hover:text-primary transition-colors duration-300" />
                                    <span className="text-[13px] font-bold text-muted-foreground uppercase tracking-[0.2em] block mb-2 group-hover:text-primary transition-colors">
                                        Phase {phase.id}
                                    </span>
                                    <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">{phase.title}</h3>
                                    <p className="text-muted-foreground font-light text-[15px] leading-relaxed group-hover:text-foreground transition-colors max-w-xs">
                                        {phase.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile View (Stacked with Line) */}
                <div className="md:hidden space-y-12 relative border-l border-border ml-4 pl-10">
                    {phases.map((phase, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute top-2 -left-[45px] w-3 h-3 rounded-full bg-background border border-muted-foreground" />
                            <div className="relative text-foreground">
                                <phase.icon className="w-8 h-8 text-muted-foreground mb-3" />
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">Phase {phase.id}</span>
                                <h3 className="text-xl font-medium mb-3">{phase.title}</h3>
                                <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
                                    {phase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

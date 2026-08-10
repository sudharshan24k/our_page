"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Unlock, Mountain, Lightbulb, RefreshCw, Sparkles, Rocket, Smile } from "lucide-react";
import { motion } from "framer-motion";

const values = [
    {
        title: "Integrity & Trust",
        description: "Trust is the foundation of our partnerships. We maintain absolute integrity in every line of code and business decision.",
        icon: ShieldCheck
    },
    {
        title: "Client Autonomy",
        description: "We empower your vision. Our expertise serves to enhance your choices, not override them.",
        icon: Unlock
    },
    {
        title: "Proactive Problem Solving",
        description: "We don't wait for challenges; we anticipate them. Our team actively seeks the most profitable paths for your growth.",
        icon: Mountain
    },
    {
        title: "Solution Oriented",
        description: "Tribulations are just puzzles. We focus entirely on reliable, scalable solutions that move the needle.",
        icon: Lightbulb
    },
    {
        title: "Agile Enhancement",
        description: "Change is constant in development. We remain open and flexible to enhancements that improve the final outcome.",
        icon: RefreshCw
    },
    {
        title: "Continuous Innovation",
        description: "Good isn't enough. We go above expectations to provide innovative solutions that give you a competitive edge.",
        icon: Sparkles
    },
    {
        title: "Extreme Ownership",
        description: "We go above and beyond rudimentary service, treating your business goals as our own personal mission.",
        icon: Rocket
    },
    {
        title: "Positive Culture",
        description: "We take our work seriously, but not ourselves. A happy team delivers the most creative and effective results.",
        icon: Smile
    }
];

export function Values() {
    return (
        <Section id="values" className="bg-background text-foreground border-t border-border py-24 md:py-32">
            <Container>
                <div className="mb-20 md:mb-24 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6">Our DNA</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed tracking-tight">
                        The core values that define our culture and drive every partnership we form.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group relative p-8 rounded-2xl border border-border bg-muted/20 hover:bg-muted/40 transition-all duration-300"
                        >
                            <div className="mb-6 p-3 w-fit rounded-xl bg-muted border border-border group-hover:border-primary/50 transition-colors">
                                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            </div>

                            <h3 className="text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-muted-foreground font-light leading-relaxed text-sm group-hover:text-foreground transition-colors">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

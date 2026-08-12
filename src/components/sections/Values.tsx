"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Unlock, Mountain, Lightbulb, RefreshCw, Sparkles, Rocket, Smile, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContentModal } from "@/components/ui/ContentModal";

const values = [
    {
        title: "Integrity & Trust",
        description: "Trust is the foundation of our partnerships. We maintain absolute integrity in every line of code and business decision.",
        icon: ShieldCheck,
        detailedContent: (
            <>
                <p>In the B2B space, a vendor relationship without trust is a liability. Our commitment to integrity means we operate with complete transparency regarding costs, timelines, and technical debt.</p>
                <p>We do not upsell unnecessary features or lock you into proprietary systems solely for our benefit. When we recommend a technology stack, it is because it provides the best ROI for your specific business case, period.</p>
            </>
        )
    },
    {
        title: "Client Autonomy",
        description: "We empower your vision. Our expertise serves to enhance your choices, not override them.",
        icon: Unlock,
        detailedContent: (
            <>
                <p>Many agencies hold their clients hostage by withholding code access or complicating simple handoffs. We believe in empowering our partners through autonomy.</p>
                <p>When the project is complete, you own the code, the assets, and the accounts. We provide thorough training so your internal team can manage the day-to-day operations without relying on us for every minor text change.</p>
            </>
        )
    },
    {
        title: "Proactive Problem Solving",
        description: "We don't wait for challenges; we anticipate them. Our team actively seeks the most profitable paths for your growth.",
        icon: Mountain,
        detailedContent: (
            <>
                <p>Order-takers build average products. We pride ourselves on being strategic partners. If you request a feature that we know from data will harm your conversion rate, we will challenge it and offer a better alternative.</p>
                <p>We constantly monitor your systems post-launch, identifying potential bottlenecks or security vulnerabilities and patching them before they ever impact your bottom line.</p>
            </>
        )
    },
    {
        title: "Solution Oriented",
        description: "Tribulations are just puzzles. We focus entirely on reliable, scalable solutions that move the needle.",
        icon: Lightbulb,
        detailedContent: (
            <>
                <p>In software engineering, things will occasionally break or behave unexpectedly. Our culture is strictly anti-blame and pro-solution. When a bug arises, our immediate response is "How do we fix it fast?" rather than "Whose fault is it?"</p>
                <p>This relentless focus on solutions ensures that your project stays on timeline and your digital infrastructure remains resilient under pressure.</p>
            </>
        )
    },
    {
        title: "Agile Enhancement",
        description: "Change is constant in development. We remain open and flexible to enhancements that improve the final outcome.",
        icon: RefreshCw,
        detailedContent: (
            <>
                <p>Rigid contracts lead to outdated products by the time they launch. The digital landscape shifts rapidly, and your business needs may pivot during the development cycle.</p>
                <p>We employ an agile methodology, allowing us to pivot strategies based on real-time data or new business intelligence you acquire, ensuring the final deliverable is highly relevant to your current market condition.</p>
            </>
        )
    },
    {
        title: "Continuous Innovation",
        description: "Good isn't enough. We go above expectations to provide innovative solutions that give you a competitive edge.",
        icon: Sparkles,
        detailedContent: (
            <>
                <p>The technology that was cutting-edge two years ago is the baseline today. If you are not innovating, you are actively falling behind your competitors.</p>
                <p>We dedicate a portion of our time to researching emerging technologies—like AI-driven personalization and edge computing—so we can proactively implement them into your systems, keeping you at the bleeding edge of your industry.</p>
            </>
        )
    },
    {
        title: "Extreme Ownership",
        description: "We go above and beyond rudimentary service, treating your business goals as our own personal mission.",
        icon: Rocket,
        detailedContent: (
            <>
                <p>We do not view ourselves as an external agency, but rather as an extension of your internal growth team. Your KPIs become our KPIs.</p>
                <p>If a lead generation campaign isn't hitting its targets, we don't point fingers at the ad platform. We take extreme ownership, analyze the data, rebuild the funnel, and execute until the desired business outcome is achieved.</p>
            </>
        )
    },
    {
        title: "Positive Culture",
        description: "We take our work seriously, but not ourselves. A happy team delivers the most creative and effective results.",
        icon: Smile,
        detailedContent: (
            <>
                <p>Burned-out developers write bad code. Stressed designers create uninspired layouts. We foster a culture of balance, continuous learning, and mutual respect.</p>
                <p>This positive internal environment directly translates to a better client experience. You will work with a team that is enthusiastic, highly communicative, and genuinely excited to help your business grow.</p>
            </>
        )
    }
];

export function Values() {
    const [selectedValue, setSelectedValue] = useState<typeof values[0] | null>(null);

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
                            onClick={() => setSelectedValue(item)}
                            className="group cursor-pointer relative p-8 rounded-2xl border border-border bg-muted/20 hover:bg-muted/40 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6 p-3 w-fit rounded-xl bg-muted border border-border group-hover:border-primary/50 transition-colors">
                                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            </div>

                            <h3 className="text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-muted-foreground font-light leading-relaxed text-sm group-hover:text-foreground transition-colors flex-grow mb-6">
                                {item.description}
                            </p>

                            <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors mt-auto">
                                <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                                <span>Learn More</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>

            <ContentModal 
                isOpen={!!selectedValue} 
                onClose={() => setSelectedValue(null)}
                title={selectedValue?.title || ""}
            >
                {selectedValue?.detailedContent}
            </ContentModal>
        </Section>
    );
}

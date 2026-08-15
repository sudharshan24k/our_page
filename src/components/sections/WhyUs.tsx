"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion, Variants } from "framer-motion";
import { Users, Zap, Trophy, Target, Clock, TrendingUp } from "lucide-react";

const reasons = [
    {
        icon: Users,
        title: "Principal Talent",
        description: "You work directly with the senior engineers building your system. By removing translation layers, we reduce development timelines by an average of 40% compared to traditional agencies.",
        highlight: "0 junior developers"
    },
    {
        icon: Zap,
        title: "High-Complexity Specialists",
        description: "We specialize in business-critical environments. Our custom infrastructure and API deployments currently process over 2.4 million seamless transactions monthly for our active clients.",
        highlight: "99.999% uptime SLAs"
    },
    {
        icon: Trophy,
        title: "Full Ownership",
        description: "We take full responsibility for outcomes. Our systems have collectively generated over $50M in new client revenue by completely automating sales pipelines and lead routing.",
        highlight: "$50M+ Revenue Impact"
    },
    {
        icon: Target,
        title: "Conversion Obsession",
        description: "Every line of code is optimized for ROI. Our custom UI/UX engineering historically yields a 2.5x to 3x increase in enterprise contact form conversions within 90 days of launch.",
        highlight: "300% conversion lift"
    },
    {
        icon: Clock,
        title: "Speed to Revenue",
        description: "Traditional firms take 6+ months. We operate in aggressive 60-day engineering sprints, allowing our clients to see a positive return on investment in less than one fiscal quarter.",
        highlight: "60-day deployment"
    },
    {
        icon: TrendingUp,
        title: "Measurable Impact",
        description: "We replaced manual administrative workflows for our partners, resulting in a documented average reduction of 62% in data-entry labor costs across our client portfolio.",
        highlight: "62% overhead reduction"
    }
];

const containerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function WhyUs() {
    return (
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="max-w-3xl mb-20 md:mb-24">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">Why Enterprise Teams Choose Us</h2>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                        We're not a typical digital agency. We're your growth infrastructure partners who think like your CFO and execute like your CTO.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {reasons.map((reason, i) => {
                        const Icon = reason.icon;
                        return (
                            <motion.article
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative p-8 rounded-3xl border border-primary/20 bg-[#0a0a0c] hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] flex flex-col overflow-hidden"
                            >
                                {/* Top Accent Glow on Hover */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-700" />

                                {/* Inner Glow */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-500 mb-8 shadow-inner group-hover:scale-110">
                                        <Icon className="w-7 h-7 text-primary transition-colors duration-300 stroke-[1.5]" />
                                    </div>

                                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">{reason.title}</h3>

                                    <p className="text-zinc-400 font-light leading-relaxed text-[15px] mb-8 flex-grow">
                                        {reason.description}
                                    </p>

                                    <div className="flex items-center justify-between text-sm font-semibold text-primary pt-5 border-t border-primary/20 mt-auto">
                                        <span className="bg-primary/20 px-3 py-1 rounded-lg text-xs text-white">{reason.highlight}</span>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* Trust Metrics Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-3 gap-8 mt-24 pt-24 border-t border-primary/20"
                >
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">12+</div>
                        <p className="text-zinc-300 text-sm md:text-base font-normal">High-ticket clients served</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">$200M+</div>
                        <p className="text-zinc-300 text-sm md:text-base font-normal">In client pipeline generated</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">215%</div>
                        <p className="text-zinc-300 text-sm md:text-base font-normal">Average lead velocity increase</p>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}

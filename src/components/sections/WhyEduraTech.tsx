"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion, Variants } from "framer-motion";
import { Target, Zap, Lock, Users, Compass, MessageSquare, Lightbulb, TrendingUp } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Built Around Your Business",
        description: "We start with your business objective, not a technology stack. Before recommending a solution, we understand what you're trying to achieve and what success should look like.",
        highlight: "Business-first approach"
    },
    {
        icon: Zap,
        title: "Engineering That Is Built to Last",
        description: "Our solutions are designed with scalability, security, maintainability, and performance in mind. We build for the next stage of your business.",
        highlight: "Future-proof solutions"
    },
    {
        icon: Users,
        title: "From Idea to Production",
        description: "You don't need to coordinate multiple vendors. Edura Technologies supports the complete technology lifecycle from requirements through deployment and ongoing improvement.",
        highlight: "End-to-end delivery"
    },
    {
        icon: Compass,
        title: "Deep Technical Capability",
        description: "Our team works across modern stacks including AI, Generative AI, cloud platforms, full-stack development, data engineering, analytics, APIs, and enterprise applications.",
        highlight: "Modern tech stack"
    },
    {
        icon: MessageSquare,
        title: "Clear Communication",
        description: "Good technology is only part of a successful project. We maintain clear communication, structured execution, and transparent project progress throughout.",
        highlight: "Full transparency"
    },
    {
        icon: Lightbulb,
        title: "Quality Without Unnecessary Complexity",
        description: "We focus on building the right solution, not the largest solution. We balance functionality, quality, budget, speed, and long-term scalability.",
        highlight: "Smart simplicity"
    },
];

const reasons = [
    "Business-first thinking",
    "Modern engineering",
    "Scalable architecture",
    "Transparent communication",
    "End-to-end delivery",
    "Long-term technical support",
    "A team capable of handling complex requirements",
    "Technology aligned with measurable business goals"
];

const containerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function WhyEduraTech() {
    return (
        <>
            {/* Hero Section */}
            <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                            Why Edura Technologies
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                            Technology should do more than work. It should create business value.
                        </p>
                        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl">
                            At Edura Technologies, we combine strategic thinking, strong engineering, and modern technology to build solutions that help businesses operate better, serve customers better, and grow with confidence.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Core Values Section */}
            <Section className="bg-transparent border-t border-primary/10 py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 md:mb-24"
                    >
                        <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                            Our Foundation
                        </h2>
                        <p className="text-xl text-zinc-400 font-light">
                            We are a technology division of Edura Global Solutions, focused on AI, software engineering, cloud, automation, data, and digital transformation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {values.map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <motion.article
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="group relative p-8 rounded-3xl border border-primary/10 bg-[#0a0a0c] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden"
                                >
                                    {/* Top Accent Glow */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-700" />

                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 mb-8 shadow-inner group-hover:scale-110">
                                            <Icon className="w-7 h-7 text-primary transition-colors duration-300 stroke-[1.5]" />
                                        </div>

                                        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                                            {value.title}
                                        </h3>

                                        <p className="text-zinc-400 font-light leading-relaxed text-[15px] mb-8 flex-grow">
                                            {value.description}
                                        </p>

                                        <div className="flex items-center text-sm font-semibold text-primary pt-5 border-t border-primary/10 mt-auto">
                                            <span className="bg-primary/10 px-3 py-1 rounded-lg text-xs">
                                                {value.highlight}
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </Container>
            </Section>

            {/* Why Businesses Choose Section */}
            <Section className="bg-transparent border-t border-primary/10 py-24 md:py-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                            Why Businesses Choose Edura Technologies
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex items-start gap-4 p-6 rounded-2xl border border-primary/10 bg-[#0a0a0c] hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-500"
                            >
                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <TrendingUp className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-lg text-zinc-200 font-light leading-relaxed">
                                    {reason}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </Section>

            {/* Promise Section */}
            <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                            Our Promise
                        </h2>
                        <p className="text-xl text-zinc-300 font-light leading-relaxed mb-8">
                            We will never recommend technology simply because it is new or popular.
                        </p>
                        <p className="text-xl text-zinc-300 font-light leading-relaxed mb-8">
                            We recommend what is appropriate for your business, your users, your budget, and your long-term objectives.
                        </p>
                        <p className="text-2xl text-white font-semibold">
                            The result is technology that is not only technically sound, but genuinely useful to the business.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section className="bg-transparent border-t border-primary/10 py-24 md:py-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                            Ready to Build Something That Matters?
                        </h2>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                            Tell us what you are trying to achieve. We will help you determine the right technology approach, scope the opportunity, and define a practical path from idea to implementation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]"
                            >
                                Discuss Your Project
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
                            >
                                Request a Consultation
                            </a>
                        </div>
                    </motion.div>
                </Container>
            </Section>
        </>
    );
}

"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion, Variants } from "framer-motion";
import { Search, MapPin, PenTool, Code2, CheckCircle, Rocket, Handshake, TrendingUp, Plus } from "lucide-react";
import { useState } from "react";
import { ContentModal } from "@/components/ui/ContentModal";

const processSteps = [
    {
        id: "01",
        title: "Discover",
        description: "We start by understanding the business.",
        fullDescription: "We discuss your objectives, users, current systems, pain points, priorities, constraints, and desired outcomes. The goal is simple: understand what needs to be solved before deciding how it should be built.",
        icon: Search,
        deliverables: [
            "Business objectives",
            "User requirements",
            "Key challenges",
            "Functional requirements",
            "Technical requirements",
            "Budget and priorities",
            "Expected outcomes"
        ]
    },
    {
        id: "02",
        title: "Plan",
        description: "Once we understand the requirement, we define the most practical solution.",
        fullDescription: "We determine the scope, architecture, technology approach, development priorities, timeline, and delivery milestones. You receive clarity on what will be built, how it will be built, and what it will take to deliver it.",
        icon: MapPin,
        deliverables: [
            "Solution scope",
            "Technical architecture",
            "Technology selection",
            "Project roadmap",
            "Milestones",
            "Estimated timeline",
            "Commercial proposal"
        ]
    },
    {
        id: "03",
        title: "Design the Right Solution",
        description: "Before development begins, we make sure the solution is structured correctly.",
        fullDescription: "For applications and platforms, this may include system architecture, database design, API structure, user flows, integrations, cloud infrastructure, security considerations, and interface design. This stage reduces expensive changes later and establishes a strong foundation for development.",
        icon: PenTool,
        deliverables: [
            "System architecture",
            "Database design",
            "API structure",
            "User flows",
            "Integration plan",
            "Cloud infrastructure design",
            "Security framework"
        ]
    },
    {
        id: "04",
        title: "Build",
        description: "Our engineering team turns the approved solution into a working product.",
        fullDescription: "Development is organized into manageable milestones so progress remains visible throughout the project. This can include web and SaaS applications, AI solutions, business automation, dashboards, APIs, customer portals, internal applications, and cloud-based systems.",
        icon: Code2,
        deliverables: [
            "Web and SaaS applications",
            "AI and Generative AI solutions",
            "Business automation",
            "Dashboards and analytics",
            "APIs and integrations",
            "Customer portals",
            "Cloud-based systems"
        ]
    },
    {
        id: "05",
        title: "Test & Refine",
        description: "We don't consider a feature complete simply because it works on a developer's machine.",
        fullDescription: "We test functionality, usability, reliability, performance, integrations, and edge cases appropriate to the project. Issues are identified, resolved, and verified before release.",
        icon: CheckCircle,
        deliverables: [
            "Functionality testing",
            "Usability testing",
            "Performance testing",
            "Security testing",
            "Integration testing",
            "Bug fixing and refinement",
            "Test documentation"
        ]
    },
    {
        id: "06",
        title: "Deploy",
        description: "Once the solution is ready, we move it into the required production environment.",
        fullDescription: "This may include cloud deployment, database configuration, domain and hosting setup, CI/CD pipelines, security configuration, third-party integrations, and production validation. Our objective is a smooth transition from development to real-world use.",
        icon: Rocket,
        deliverables: [
            "Cloud deployment",
            "Database configuration",
            "CI/CD pipelines",
            "Security configuration",
            "Third-party integrations",
            "Production validation",
            "Performance monitoring"
        ]
    },
    {
        id: "07",
        title: "Launch & Handover",
        description: "After deployment, we make sure your team can confidently use and manage the solution.",
        fullDescription: "We provide the required documentation, guidance, credentials or access arrangements, and knowledge transfer appropriate to the engagement.",
        icon: Handshake,
        deliverables: [
            "User documentation",
            "Admin documentation",
            "Training sessions",
            "Knowledge transfer",
            "Access credentials",
            "Support guidelines",
            "Maintenance plan"
        ]
    },
    {
        id: "08",
        title: "Support & Grow",
        description: "Technology should evolve with the business.",
        fullDescription: "After launch, we can continue to provide maintenance, enhancements, integrations, optimization, monitoring, and new feature development. As your requirements grow, the system can grow with them.",
        icon: TrendingUp,
        deliverables: [
            "Maintenance and monitoring",
            "Performance optimization",
            "Feature enhancements",
            "Integration expansion",
            "Scaling support",
            "Security updates",
            "Long-term partnership"
        ]
    }
];

const principles = [
    "Clear scope before development",
    "Frequent and transparent communication",
    "Milestone-based execution",
    "Practical technology choices",
    "Strong attention to quality",
    "Security and scalability considered from the beginning",
    "No unnecessary complexity",
    "Business outcomes remain the priority"
];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function EduraTechProcess() {
    const [selectedStep, setSelectedStep] = useState<typeof processSteps[0] | null>(null);

    return (
        <>
            {/* Hero Section */}
            <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                            How We Work
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                            A clear process. Strong engineering. No unnecessary complexity.
                        </p>
                        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl">
                            Every successful technology project starts with clarity. Our process is designed to reduce uncertainty, align technology with business goals, and move from idea to working product with confidence.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Process Steps Timeline */}
            <Section className="bg-transparent border-t border-primary/10 py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

                <Container className="relative z-10">
                    <div className="relative max-w-6xl mx-auto">
                        {/* Central Animated Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:-translate-x-1/2" />
                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                        >
                            {processSteps.map((step, i) => {
                                const Icon = step.icon;
                                const isEven = i % 2 === 0;

                                return (
                                    <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center w-full mb-16 md:mb-32 last:mb-0 group ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                                        
                                        {/* Timeline Node */}
                                        <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-[#0a0a0c] border border-primary/20 md:-translate-x-1/2 z-10 flex items-center justify-center mt-6 md:mt-0 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-700">
                                            <div className="w-4 h-4 rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:scale-110 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
                                        </div>

                                        {/* Content Card Wrapper */}
                                        <div className={`w-full md:w-[45%] pl-24 md:pl-0 mt-2 md:mt-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                            <motion.div
                                                variants={{
                                                    hidden: { opacity: 0, x: isEven ? -40 : 40 },
                                                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
                                                }}
                                                onClick={() => setSelectedStep(step)}
                                                className="relative p-8 md:p-10 rounded-3xl bg-[#0a0a0c] border border-primary/10 hover:border-primary/30 transition-all duration-700 hover:-translate-y-2 backdrop-blur-xl cursor-pointer overflow-hidden group/card text-left hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]"
                                              >
                                                {/* Ambient Background Glow */}
                                                <div className="absolute -inset-px rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 z-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-2xl" />
                                                
                                                {/* Top Accent Line */}
                                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover/card:via-primary/70 transition-all duration-700 z-10" />

                                                <div className="relative z-20">
                                                    <div className={`flex items-center gap-6 mb-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                                        <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/card:bg-primary/20 group-hover/card:border-primary/40 transition-all duration-500 shadow-inner group-hover/card:scale-110 relative overflow-hidden">
                                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/card:opacity-100 blur-xl transition-opacity duration-500" />
                                                            <Icon className="w-8 h-8 text-primary group-hover/card:text-primary transition-colors duration-300 stroke-[1.5] relative z-10" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-1 block">Phase {step.id}</span>
                                                            <h3 className="text-2xl md:text-3xl font-medium text-white group-hover/card:text-primary transition-colors tracking-tight">
                                                                {step.title}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <p className={`text-zinc-400 font-light leading-relaxed text-base md:text-lg mb-8 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                                        {step.description}
                                                    </p>

                                                    <div className={`flex items-center text-sm font-medium text-zinc-400 group-hover/card:text-white transition-colors ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                                        {!isEven && <Plus className="w-4 h-4 mr-2 group-hover/card:rotate-90 group-hover/card:text-primary transition-all duration-300" />}
                                                        <span>View Deliverables</span>
                                                        {isEven && <Plus className="w-4 h-4 ml-2 group-hover/card:rotate-90 group-hover/card:text-primary transition-all duration-300" />}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* Delivery Principles Section */}
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
                            Our Delivery Principles
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {principles.map((principle, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex items-start gap-4 p-6 rounded-2xl border border-primary/10 bg-[#0a0a0c] hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-500"
                            >
                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-lg text-zinc-200 font-light leading-relaxed">
                                    {principle}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </Section>

            {/* A Better Way Section */}
            <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                            A Better Way to Build
                        </h2>
                        <p className="text-xl text-zinc-300 font-light leading-relaxed mb-8">
                            You should never have to wonder what your development team is doing or what happens next.
                        </p>
                        <p className="text-xl text-zinc-300 font-light leading-relaxed mb-8">
                            At every stage, you know:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "What we are building",
                                "Why we are building it",
                                "What has been completed",
                                "What comes next",
                                "What decisions are required",
                                "What the expected outcome is"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    <p className="text-white font-light text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* Final CTA Section */}
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
                            From Idea to Long-Term Partnership
                        </h2>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                            Whether you need a new website, an internal business application, an AI solution, a SaaS platform, or a complete digital transformation initiative, our process remains focused on one objective:
                        </p>
                        <p className="text-2xl text-white font-semibold mb-12">
                            Build the right solution, deliver it reliably, and create lasting business value.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
                            >
                                Talk to Our Team
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
                            >
                                Get a Project Assessment
                            </a>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* Deliverables Modal */}
            <ContentModal
                isOpen={!!selectedStep}
                onClose={() => setSelectedStep(null)}
                title={selectedStep?.title || ""}
            >
                <div className="space-y-6">
                    <div>
                        <h4 className="text-white font-semibold mb-4">Overview</h4>
                        <p className="text-zinc-300 leading-relaxed">
                            {selectedStep?.fullDescription}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Typical Deliverables</h4>
                        <ul className="space-y-2">
                            {selectedStep?.deliverables.map((deliverable, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    </div>
                                    <span className="text-zinc-300">{deliverable}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ContentModal>
        </>
    );
}

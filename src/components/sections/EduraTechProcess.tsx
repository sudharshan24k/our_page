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
            <Section className="bg-transparent min-h-[60vh] flex items-center pt-32 pb-24 relative overflow-hidden">
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
            <Section className="bg-transparent border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

                <Container className="relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="space-y-8"
                    >
                        {processSteps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    onClick={() => setSelectedStep(step)}
                                    className="group cursor-pointer relative p-8 rounded-3xl border border-white/5 bg-[#0a0a0c] hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden"
                                >
                                    {/* Top Accent */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-700" />

                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="relative z-10 flex items-start gap-8">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center">
                                                <div className="w-20 h-20 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-500 shadow-inner group-hover:scale-110">
                                                    <Icon className="w-10 h-10 text-zinc-400 group-hover:text-primary transition-colors duration-300 stroke-[1.5]" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                                                    Phase {step.id}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-zinc-400 font-light leading-relaxed text-[15px] mb-6">
                                                {step.description}
                                            </p>
                                            <div className="flex items-center text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors">
                                                <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 group-hover:text-primary transition-all duration-300" />
                                                <span>View Deliverables</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </Container>
            </Section>

            {/* Delivery Principles Section */}
            <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
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
                                className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-primary/5 transition-all duration-500"
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
            <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
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
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
                            >
                                Talk to Our Team
                            </a>
                            <a
                                href="#contact"
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

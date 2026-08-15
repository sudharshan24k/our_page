"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Search, PenTool, Code2, ShieldCheck, Plus, FileText, Users, CheckSquare, MessageSquare, Wrench, Activity, HeartHandshake } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { ContentModal } from "@/components/ui/ContentModal";

const phases = [
    {
        id: "01",
        title: "Audit & Analysis",
        description: "We start by auditing your current architecture and identifying bottlenecks. We define the exact technical strategy needed to hit your business goals.",
        icon: Search,
        duration: "1-2 weeks",
        detailedContent: (
            <div className="space-y-6">
                <p className="text-zinc-300 font-light leading-relaxed"><strong>The Business Reality:</strong> You cannot fix what you cannot measure. Before we write a single line of code, we must understand exactly where your business is currently bleeding revenue or wasting operational hours.</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> Deliverables</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Technical Architecture Audit</li>
                            <li>UX/UI Conversion Teardown</li>
                            <li>Custom Growth Strategy Deck</li>
                            <li>Phased Implementation Roadmap</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Client Responsibilities</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Provide access to current analytics/codebases</li>
                            <li>Stakeholder interviews (2 hours max)</li>
                            <li>Define primary business KPI targets</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><CheckSquare className="w-4 h-4 text-primary" /> Approval Points</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Sign-off on technical audit findings</li>
                            <li>Approval of project scope and roadmap</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><MessageSquare className="w-4 h-4 text-primary" /> Comm. Cadence</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Kickoff Call (60 mins)</li>
                            <li>Dedicated Slack Channel created</li>
                            <li>End-of-phase Audit Presentation</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "02",
        title: "Conversion-Led Design",
        description: "We design every interface with a focus on authority, trust, and conversion. Every element is strategically placed to guide high-ticket clients toward action.",
        icon: PenTool,
        duration: "2-3 weeks",
        detailedContent: (
            <div className="space-y-6">
                <p className="text-zinc-300 font-light leading-relaxed"><strong>The Business Reality:</strong> Design is not art; it is a communication tool. A beautiful interface that doesn't generate leads or reduce friction is a failure. Our design philosophy is entirely focused on driving specific business outcomes.</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> Deliverables</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Low-fidelity Wireframes</li>
                            <li>High-fidelity Figma Prototypes</li>
                            <li>Comprehensive Design System</li>
                            <li>Responsive Mobile Mockups</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Client Responsibilities</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Provide brand guidelines and assets</li>
                            <li>Consolidated feedback within 48 hours</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><CheckSquare className="w-4 h-4 text-primary" /> Approval Points</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Wireframe structure approval</li>
                            <li>Final visual design sign-off</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><Wrench className="w-4 h-4 text-primary" /> Tools Used</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Figma (Prototyping)</li>
                            <li>Miro (User Flows)</li>
                            <li>Loom (Asynchronous Presentations)</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "03",
        title: "High-Performance Build",
        description: "Our engineering phase focuses on speed, security, and integration. We build robust systems that sync perfectly with your existing operational workflows.",
        icon: Code2,
        duration: "3-4 weeks",
        detailedContent: (
            <div className="space-y-6">
                <p className="text-zinc-300 font-light leading-relaxed"><strong>The Business Reality:</strong> We build infrastructure that is lightning fast and bulletproof. We don't just write code; we build scalable software assets that integrate seamlessly into your company.</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> Deliverables</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Production-ready codebase</li>
                            <li>Custom API Pipelines</li>
                            <li>CRM and Third-Party Integrations</li>
                            <li>Staging Environment Access</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><MessageSquare className="w-4 h-4 text-primary" /> Comm. Cadence</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Weekly Progress Demos via Loom</li>
                            <li>Real-time Slack updates</li>
                            <li>Weekly live sync (optional)</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><CheckSquare className="w-4 h-4 text-primary" /> Approval Points</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Staging environment acceptance</li>
                            <li>Feature-complete sign-off</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><Wrench className="w-4 h-4 text-primary" /> Tools Used</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Next.js & React</li>
                            <li>GitHub (Version Control)</li>
                            <li>Vercel (Edge Deployment)</li>
                            <li>Node.js / Python (Backend)</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "04",
        title: "Launch & Support",
        description: "Rigorous testing and optimization before we go live. We ensure your systems are foolproof and provide ongoing support to guarantee maximum uptime.",
        icon: ShieldCheck,
        duration: "1-2 weeks",
        detailedContent: (
            <div className="space-y-6">
                <p className="text-zinc-300 font-light leading-relaxed"><strong>The Business Reality:</strong> Launching a new system is inherently risky. We mitigate that risk entirely through exhaustive testing protocols before the public ever sees the new platform, followed by dedicated post-launch support.</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><Activity className="w-4 h-4 text-primary" /> QA Process</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Cross-browser & Device Testing</li>
                            <li>Load & Penetration Testing</li>
                            <li>Lighthouse Performance Benchmarking</li>
                            <li>Form & API Endpoint Validation</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> Deliverables</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>Live Production Deployment</li>
                            <li>Performance Audit Report</li>
                            <li>Codebase Handover Documentation</li>
                            <li>Video Training Library for Staff</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><HeartHandshake className="w-4 h-4 text-primary" /> Post-Launch Support</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>30 Days Free Bug-Fixing Warranty</li>
                            <li>Uptime & Error Monitoring (Sentry)</li>
                            <li>Optional Continuous Retainer</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Client Responsibilities</h4>
                        <ul className="text-sm text-zinc-400 font-light space-y-2 list-disc pl-4">
                            <li>DNS switch approval</li>
                            <li>Internal team training (via our videos)</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function HowWeWork({ isPage = false }: { isPage?: boolean }) {
    const [selectedPhase, setSelectedPhase] = useState<typeof phases[0] | null>(null);
    const HeadingTag = isPage ? "h1" : "h2";
    const headingText = isPage ? "Our Methodology & Process" : "Process Over Promotion";

    return (
        <Section id="methodology" className="bg-background text-foreground border-t border-border py-24 md:py-32 overflow-hidden">
            <Container>
                <div className="mb-20 md:mb-24">
                    <HeadingTag className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-8">{headingText}</HeadingTag>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                        A transparent delivery model designed for clarity, control, and outcomes.
                    </p>
                </div>

                {/* Unified Responsive Flow */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="relative mt-16 md:mt-24"
                >
                    {/* The glowing timeline connector (Desktop only) */}
                    <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary/5 via-primary/40 to-primary/5" />
                    
                    {/* The glowing vertical connector (Mobile only) */}
                    <div className="block md:hidden absolute top-0 bottom-0 left-[11px] w-[2px] bg-gradient-to-b from-primary/5 via-primary/40 to-primary/5" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
                        {phases.map((phase, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="group relative cursor-pointer flex flex-row md:flex-col items-start md:items-stretch pl-10 md:pl-0"
                                onClick={() => setSelectedPhase(phase)}
                            >
                                {/* Glowing node */}
                                <div className="absolute md:top-[18px] top-1 md:left-0 -left-[1px] md:w-6 md:h-6 w-6 h-6 rounded-full bg-[#0a0a0c] border-[2px] border-primary group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] group-hover:scale-125 transition-all duration-500 z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary transition-colors" />
                                </div>

                                <div className="md:pt-16 h-full flex flex-col w-full">
                                    <div className="mb-6 p-3 w-fit rounded-2xl bg-primary/10 border border-primary/30 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-500 shadow-inner group-hover:scale-110 hidden md:block">
                                        <phase.icon className="w-6 h-6 text-primary transition-colors duration-300 stroke-[1.5]" />
                                    </div>
                                    <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] block mb-2 md:mb-3">
                                        Phase {phase.id}
                                    </span>
                                    <h3 className="text-2xl font-semibold text-white mb-3 md:mb-4 group-hover:text-primary transition-colors tracking-tight">{phase.title}</h3>
                                    <p className="text-zinc-400 font-light text-[15px] leading-relaxed flex-grow mb-6">
                                        {phase.description}
                                    </p>

                                    <div className="mb-6 pb-6 border-b border-primary/20">
                                        <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2 md:mb-3">Timeline</p>
                                        <p className="text-white font-semibold">{phase.duration}</p>
                                    </div>

                                    <div className="flex items-center text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors md:mt-auto pt-2 md:pt-5">
                                        <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 group-hover:text-primary transition-all duration-300" />
                                        <span>Read Methodology</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>

            <ContentModal 
                isOpen={!!selectedPhase} 
                onClose={() => setSelectedPhase(null)}
                title={`${selectedPhase?.title || ""} Methodology`}
            >
                {selectedPhase?.detailedContent}
            </ContentModal>
        </Section>
    );
}

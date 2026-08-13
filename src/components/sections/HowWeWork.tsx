"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Search, PenTool, Code2, ShieldCheck, Plus } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { ContentModal } from "@/components/ui/ContentModal";

const phases = [
    {
        id: "01",
        title: "Audit & Analysis",
        description: "We start by auditing your current website and identifying leaks in your conversion funnel. We define the exact strategy needed to turn your site into a lead machine.",
        icon: Search,
        detailedContent: (
            <>
                <p><strong>The Business Reality:</strong> You cannot fix what you cannot measure. Before we write a single line of code or design a single pixel, we must understand exactly where your business is currently bleeding revenue online.</p>
                <h4>Our Technical & Business Approach</h4>
                <ul>
                    <li><strong>Funnel Teardown:</strong> We analyze your current website traffic, looking at bounce rates, exit pages, and conversion drops. We identify the exact moments where prospects lose interest.</li>
                    <li><strong>Competitive Analysis:</strong> We don't just look at your site; we look at the top three competitors in your space to understand the baseline expectations of your target buyers.</li>
                    <li><strong>Strategic Blueprinting:</strong> We deliver a comprehensive, layman-friendly report outlining exactly what is wrong technically (e.g., slow load times, poor mobile UX) and what is wrong from a business perspective (e.g., weak messaging, lack of trust signals).</li>
                </ul>
                <p>This phase ensures that every dollar spent in the subsequent phases is directed toward solving a concrete business problem, not just making things "look pretty."</p>
            </>
        )
    },
    {
        id: "02",
        title: "Conversion-Led Design",
        description: "We design every page with a focus on authority, trust, and conversion. Every element is strategically placed to guide high-ticket clients toward booking a call.",
        icon: PenTool,
        detailedContent: (
            <>
                <p><strong>The Business Reality:</strong> Design is not art; it is a communication tool. A beautiful website that doesn't generate leads is a failure. Our design philosophy is entirely focused on driving the user toward a specific business outcome: contacting your sales team.</p>
                <h4>Our Technical & Business Approach</h4>
                <ul>
                    <li><strong>Wireframing for Conversions:</strong> We structure the page layout based on psychological principles of how executives consume information—placing high-value propositions and trust signals precisely where the eye naturally tracks.</li>
                    <li><strong>Authority Aesthetics:</strong> We utilize modern UI trends (like dark mode and glassmorphism) because they subconsciously signal premium quality, allowing you to command higher prices.</li>
                    <li><strong>Frictionless UX:</strong> We design forms and interactive elements to require the absolute minimum cognitive load from the user. If it's hard to use, they won't use it.</li>
                </ul>
                <p>The result is an interface that looks expensive and operates like a highly trained digital salesperson, seamlessly guiding the prospect toward the "Book a Call" button.</p>
            </>
        )
    },
    {
        id: "03",
        title: "High-Performance Build",
        description: "Our development phase focuses on speed, security, and integration. We build a robust system that syncs perfectly with your existing CRM and sales processes.",
        icon: Code2,
        detailedContent: (
            <>
                <p><strong>The Business Reality:</strong> Slow websites kill deals. If a page takes more than 3 seconds to load, 53% of mobile users will abandon it. We build infrastructure that is lightning fast and bulletproof.</p>
                <h4>Our Technical & Business Approach</h4>
                <ul>
                    <li><strong>Modern Stack (Next.js):</strong> We ditch slow, bloated platforms like WordPress. We build using modern enterprise technology (React/Next.js) which pre-renders pages for instantaneous loading times.</li>
                    <li><strong>CRM & API Integrations:</strong> A website should not exist in a vacuum. We pipe your lead forms directly into your CRM (HubSpot, Salesforce) and automate the notification process to your sales team via Slack or email.</li>
                    <li><strong>Technical SEO Foundations:</strong> We write semantic, clean code that Google loves, ensuring that your foundation is perfectly primed for organic search dominance.</li>
                </ul>
                <p>By investing in a high-performance build, you aren't just buying a website; you are buying a scalable software asset that integrates seamlessly into your company's operational workflow.</p>
            </>
        )
    },
    {
        id: "04",
        title: "Launch & Lead Capture",
        description: "Rigorous testing and optimization before we go live. We ensure your lead capture systems are foolproof and your firm is ready to handle consistent inbound leads.",
        icon: ShieldCheck,
        detailedContent: (
            <>
                <p><strong>The Business Reality:</strong> Launching a new system is inherently risky. We mitigate that risk entirely through exhaustive testing protocols before the public ever sees the new platform.</p>
                <h4>Our Technical & Business Approach</h4>
                <ul>
                    <li><strong>Quality Assurance (QA):</strong> We test the platform across every major device, browser, and network speed to ensure 100% functionality. A broken form is a lost deal.</li>
                    <li><strong>Performance Benchmarking:</strong> We run rigorous speed and accessibility audits to ensure the final product exceeds industry standards for performance.</li>
                    <li><strong>Handoff & Training:</strong> We don't just hand over the keys and disappear. We train your team on how to manage the content, interpret the analytics, and handle the new influx of leads smoothly.</li>
                </ul>
                <p>The launch is just the beginning. We ensure your digital infrastructure is fully operational from day one, ready to act as the primary growth engine for your firm.</p>
            </>
        )
    }
];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function HowWeWork() {
    const [selectedPhase, setSelectedPhase] = useState<typeof phases[0] | null>(null);

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
                    className="hidden md:block relative mt-24"
                >
                    {/* The glowing timeline connector */}
                    <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary/5 via-primary/40 to-primary/5" />
                    
                    <div className="grid grid-cols-4 gap-8 relative">
                        {phases.map((phase, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedPhase(phase)}
                            >
                                {/* Glowing node */}
                                <div className="absolute top-[18px] left-0 w-6 h-6 rounded-full bg-[#0a0a0c] border-[2px] border-primary/30 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] group-hover:scale-125 transition-all duration-500 z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                </div>

                                <div className="pt-16 h-full flex flex-col">
                                    <div className="mb-6 p-3 w-fit rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-500 shadow-inner group-hover:scale-110">
                                        <phase.icon className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors duration-300 stroke-[1.5]" />
                                    </div>
                                    <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] block mb-3">
                                        Phase {phase.id}
                                    </span>
                                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">{phase.title}</h3>
                                    <p className="text-zinc-400 font-light text-[15px] leading-relaxed flex-grow mb-8">
                                        {phase.description}
                                    </p>
                                    
                                    <div className="flex items-center text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors mt-auto pt-5">
                                        <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 group-hover:text-primary transition-all duration-300" />
                                        <span>Read Methodology</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile View (Stacked with Line) */}
                <div className="md:hidden space-y-16 relative border-l-2 border-primary/20 ml-4 pl-10 mt-16">
                    {phases.map((phase, i) => (
                        <div 
                            key={i} 
                            className="relative group cursor-pointer"
                            onClick={() => setSelectedPhase(phase)}
                        >
                            {/* Glowing Node */}
                            <div className="absolute top-2 -left-[49px] w-5 h-5 rounded-full bg-[#0a0a0c] border-[2px] border-primary/30 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                            </div>
                            
                            <div className="relative text-foreground">
                                <div className="mb-6 p-3 w-fit rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-500 shadow-inner">
                                    <phase.icon className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors duration-300 stroke-[1.5]" />
                                </div>
                                <span className="text-[11px] font-bold text-primary uppercase tracking-widest block mb-2">Phase {phase.id}</span>
                                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{phase.title}</h3>
                                <p className="text-zinc-400 font-light text-[15px] leading-relaxed mb-6">
                                    {phase.description}
                                </p>
                                
                                <div className="flex items-center text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors">
                                    <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 group-hover:text-primary transition-all duration-300" />
                                    <span>Read Methodology</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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

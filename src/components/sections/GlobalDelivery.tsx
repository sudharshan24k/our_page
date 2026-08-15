"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion, Variants } from "framer-motion";
import { Globe, Clock, DollarSign, MessageSquare, Briefcase, FileCheck2 } from "lucide-react";

const features = [
    {
        icon: Clock,
        title: "US Time-Zone Availability",
        description: "Our core engineering hours overlap with EST and PST, ensuring synchronous communication, daily standups, and rapid bug resolution."
    },
    {
        icon: DollarSign,
        title: "Transparent USD Pricing",
        description: "All proposals, contracts, and invoices are in USD. We offer competitive engineering rates without the offshore friction."
    },
    {
        icon: MessageSquare,
        title: "Remote Delivery Model",
        description: "We operate seamlessly within your stack. We join your Slack/Teams, manage sprints in your Jira, and report daily."
    },
    {
        icon: FileCheck2,
        title: "US-Friendly Contracting",
        description: "We utilize standard master services agreements (MSAs) and process payments via standard US wire transfers or ACH."
    }
];

const containerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function GlobalDelivery() {
    return (
        <Section className="bg-[#050505] border-y border-white/5 py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left Column: Context */}
                    <div className="lg:col-span-5">
                        <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/10">
                            <Globe className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Global Delivery</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                            Serving clients across the United States.
                        </h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                            We are an India-based engineering partner explicitly built to serve US businesses. We combine elite offshore engineering talent with seamless onshore operational standards.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">US</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-widest">Primary Market</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-widest">English Fluency</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="lg:col-span-7">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                            className="grid sm:grid-cols-2 gap-6"
                        >
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div 
                                        key={idx}
                                        variants={itemVariants}
                                        className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/5 hover:border-primary/30 transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                        <p className="text-zinc-400 font-light text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                </div>
            </Container>
        </Section>
    );
}

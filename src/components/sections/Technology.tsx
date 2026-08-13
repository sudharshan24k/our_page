"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Layout, Server, Cloud, Brain, Smartphone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const techStack = [
    {
        category: "Conversion Ecosystem",
        icon: Layout,
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO Optimization"]
    },
    {
        category: "Lead Capture & CRM",
        icon: Server,
        items: ["Custom Form Systems", "HubSpot Sync", "Salesforce Integration", "WhatsApp API", "Email Automation"]
    },
    {
        category: "Performance & Security",
        icon: Cloud,
        items: ["AWS Hosting", "Cloudflare WAF", "Edge Delivery", "SSL Security", "Automated Backups"]
    },
    {
        category: "Analytics & ROI",
        icon: Brain,
        items: ["GA4 Integration", "Heatmap Tracking", "Conversion Goals", "UTM Tracking", "A/B Testing"]
    },
    {
        category: "Client Communication",
        icon: Smartphone,
        items: ["Multi-channel Chat", "Appointment Booking", "Client Portals", "Secure Dashboards"]
    },
    {
        category: "Integrity & Quality",
        icon: CheckCircle,
        items: ["Visual Regression", "Speed Audits", "Cross-browser Testing", "Accessibility (WCAG)"]
    }
];

export function Technology() {
    return (
        <Section id="technology" className="bg-background text-foreground border-t border-border py-24 md:py-32">
            <Container>
                <div className="mb-20 md:mb-24 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6">Tech That Enables Us</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed tracking-tight">
                        A modern, type-safe stack chosen for performance, scalability, and developer experience.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {techStack.map((group, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}
                             className="group relative p-8 rounded-3xl border border-white/5 bg-[#0a0a0c] hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
                         >
                             {/* Top Accent Glow on Hover */}
                             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-700" />
                             
                             {/* Inner Radial Gradient on Hover */}
                             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
 
                             <div className="relative z-10 flex flex-col h-full">
                                 <div className="flex items-center gap-4 mb-8">
                                     <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-inner group-hover:scale-110">
                                         <group.icon className="w-6 h-6 stroke-[1.5]" />
                                     </div>
                                     <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors tracking-tight">{group.category}</h3>
                                 </div>
 
                                 <div className="flex flex-wrap gap-2">
                                     {group.items.map((item, idx) => (
                                         <span
                                             key={idx}
                                             className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white/5 border border-white/5 text-zinc-400 group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default shadow-sm"
                                         >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}

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
                             className="group relative p-8 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                         >
                             {/* Ambient Glow */}
                             <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_center,theme(colors.primary.DEFAULT/0.03),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
 
                             <div className="relative z-10">
                                 <div className="flex items-center gap-3 mb-6">
                                     <div className="p-2 rounded-lg bg-muted border border-border group-hover:border-primary/50 transition-colors">
                                         <group.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                     </div>
                                     <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">{group.category}</h3>
                                 </div>
 
                                 <div className="flex flex-wrap gap-2">
                                     {group.items.map((item, idx) => (
                                         <span
                                             key={idx}
                                             className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted/50 border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-all hover:bg-muted hover:text-foreground cursor-default"
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

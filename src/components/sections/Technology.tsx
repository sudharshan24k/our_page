"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Layout, Server, Cloud, Brain, Smartphone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const techStack = [
    {
        category: "Conversion Ecosystem",
        icon: Layout,
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GraphQL", "Node.js", "Sanity CMS"]
    },
    {
        category: "Lead Capture & CRM",
        icon: Server,
        items: ["Custom Form Systems", "HubSpot Sync", "Salesforce Integration", "WhatsApp API", "Email Automation", "Zapier / Make", "Twilio API"]
    },
    {
        category: "Performance & Security",
        icon: Cloud,
        items: ["AWS Hosting", "Vercel", "Cloudflare WAF", "Edge Delivery", "Docker", "SSL Security", "Automated Backups", "Auth0"]
    },
    {
        category: "Analytics & ROI",
        icon: Brain,
        items: ["GA4 Integration", "Mixpanel", "PostHog", "Heatmap Tracking", "Conversion Goals", "A/B Testing", "Looker Studio"]
    },
    {
        category: "Client Communication",
        icon: Smartphone,
        items: ["Multi-channel Chat", "Appointment Booking", "Client Portals", "Secure Dashboards", "Stripe Connect", "SendGrid", "Intercom"]
    },
    {
        category: "Integrity & Quality",
        icon: CheckCircle,
        items: ["Visual Regression", "Playwright", "Jest", "CI/CD Pipelines", "Speed Audits", "Cross-browser Testing", "Accessibility (WCAG)", "Lighthouse"]
    }
];

export function Technology() {
    return (
        <Section id="technology" className="bg-background text-foreground border-t border-primary/20 py-24 md:py-32">
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
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } }
                                }}
                                className="group relative p-8 sm:p-10 rounded-3xl bg-[#0a0a0c] border border-primary/20 hover:border-primary/40 transition-all duration-700 hover:-translate-y-2 flex flex-col overflow-hidden backdrop-blur-xl hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]"
                            >
                                {/* Animated glow behind the card */}
                                <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl" />
                                
                                {/* Top Accent Glow on Hover */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-primary/70 transition-all duration-700 z-10" />
                                
                                {/* Inner Radial Gradient on Hover */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                                <div className="relative z-20 flex flex-col h-full">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-inner group-hover:scale-110 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                                            <group.icon className="w-7 h-7 stroke-[1.5] relative z-10" />
                                        </div>
                                        <h3 className="text-2xl font-medium text-white group-hover:text-primary transition-colors tracking-tight">{group.category}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-primary/10">
                                        {group.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 text-[13px] font-medium rounded-full bg-primary/5 border border-primary/20 text-zinc-300 group-hover:border-primary/40 group-hover:text-white group-hover:bg-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary hover:border-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-default"
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

"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
    Briefcase, Workflow, Code, Smartphone, Globe, Monitor,
    Layout, ShieldCheck, Zap
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
    {
        title: "Authority Positioning",
        description: "We reconstruct your digital presence to instantly position you as the premium choice in your market, allowing you to close high-ticket deals with zero friction.",
        icon: Layout
    },
    {
        title: "Conversion Engine",
        description: "Stop paying for traffic that bounces. We ruthlessly optimize every element of your site to convert passive visitors into warm, ready-to-buy inquiries.",
        icon: Zap
    },
    {
        title: "Client Acquisition Flows",
        description: "Custom-engineered lead capture systems that seamlessly funnel high-intent prospects straight into your CRM and sales calendar.",
        icon: Smartphone
    },
    {
        title: "Revenue Automation",
        description: "Reclaim hundreds of hours. We automate your entire client onboarding, follow-ups, and meeting scheduling so you can focus exclusively on fulfillment.",
        icon: Workflow
    },
    {
        title: "Market Dominance (SEO)",
        description: "Capture the demand already existing in your market. We deploy aggressive search strategies to ensure you capture high-intent leads before your competitors do.",
        icon: Globe
    },
    {
        title: "Zero-Downtime Infrastructure",
        description: "Protect your revenue with enterprise-grade hosting and security. Your lead generation system stays lightning-fast, highly secure, and online 24/7/365.",
        icon: ShieldCheck
    }
];

const containerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Services() {
    return (
        <Section id="services" className="bg-background border-t border-border py-24 md:py-32">
            <Container>
                <div className="mb-20 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-8">How We Scale Your Operations</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl tracking-tight">
                        We don't just build websites. We engineer end-to-end digital sales systems that predictably acquire high-ticket clients for your firm.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="group relative p-8 rounded-2xl border border-zinc-200/60 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col overflow-hidden"
                        >
                            {/* Accent Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-zinc-200/80 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-indigo-50/50 transition-colors mb-8 shadow-inner">
                                    <service.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                </div>

                                <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>

                                <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-8 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors mt-auto">
                                    <span>Explore Service</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}

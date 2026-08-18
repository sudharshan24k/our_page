"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Bot, Code2, Globe, Cloud } from "lucide-react";
import Link from "next/link";

const offerings = [
    {
        title: "AI & Automation",
        description: "Automate repetitive processes and integrate AI into your business.",
        icon: Bot,
        link: "/ai-development-company"
    },
    {
        title: "Custom Software",
        description: "Internal tools, dashboards, portals and business applications.",
        icon: Code2,
        link: "/custom-software-development"
    },
    {
        title: "Websites & Web Apps",
        description: "High-performance websites and customer-facing applications.",
        icon: Globe,
        link: "/services"
    },
    {
        title: "SaaS Products",
        description: "From MVP to production-ready SaaS platforms.",
        icon: Cloud,
        link: "/saas-development"
    }
];

export function WhatWeHelpBuild() {
    return (
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
            <Container className="relative z-10">
                <div className="mb-16 md:mb-20 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6">What can we help you build?</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offerings.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <Link key={i} href={item.link} className="group relative p-8 rounded-3xl border border-primary/20 bg-[#0a0a0c] hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] flex flex-col h-full overflow-hidden">
                                {/* Top Accent Glow on Hover */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-700" />
                                
                                {/* Inner Radial Gradient on Hover */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-8 p-3 w-fit rounded-2xl bg-primary/10 border border-primary/30 transition-all duration-500 shadow-inner group-hover:scale-110">
                                        <Icon className="w-6 h-6 text-primary transition-colors duration-300 stroke-[1.5]" />
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors tracking-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-zinc-400 font-light leading-relaxed text-[15px] flex-grow mb-8">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-primary mt-auto pt-5 border-t border-primary/20 gap-2">
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">Explore</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}

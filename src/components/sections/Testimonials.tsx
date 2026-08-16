"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        content: "We were drowning in manual data entry across disconnected systems. Edura Technologies built a custom middleware layer that synced everything in real-time. We reduced admin hours by 62% and saved $2,000 annually in overhead.",
        author: "Director of Operations",
        role: "National Logistics Firm"
    },
    {
        content: "Edura didn't just build a SaaS product; they architected a highly scalable, multi-tenant infrastructure. We scaled from 0 to 10,000 active users in 3 months with absolutely zero downtime or latency issues.",
        author: "Technical Founder",
        role: "FinTech Startup"
    }
];

export function Testimonials() {
    return (
        <Section className="bg-background border-t border-primary/20 py-24 md:py-32">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white">Proven Results & Client Impact</h2>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="w-full p-8 rounded-xl border border-primary/20 bg-[#0a0a0c] hover:border-primary/40 hover:bg-primary/[0.02] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] transition-all duration-500"
                    >
                        <Quote className="w-8 h-8 text-primary mb-6" />
                        <p className="text-lg text-foreground/80 font-light leading-relaxed italic text-balance">
                            "{t.content}"
                        </p>
                        <div className="mt-8">
                            <p className="font-medium text-foreground">{t.author}</p>
                            <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

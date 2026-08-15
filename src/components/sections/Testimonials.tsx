"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        content: "We were drowning in manual data entry across 4 disconnected systems. Edura Technologies built a custom middleware layer that synced everything in real-time. We reduced admin hours by 62% and saved $120k annually in overhead.",
        author: "Director of Operations",
        role: "National Logistics Firm"
    },
    {
        content: "Their RAG (Retrieval-Augmented Generation) implementation completely transformed how our associates search legal precedents. What used to take hours of manual reading now takes our AI chatbot seconds, with citation accuracy.",
        author: "Senior Partner",
        role: "Boutique Law Firm, New York"
    },
    {
        content: "Edura didn't just build a SaaS product; they architected a highly scalable, multi-tenant infrastructure. We scaled from 0 to 10,000 active users in 3 months with absolutely zero downtime or latency issues.",
        author: "Technical Founder",
        role: "FinTech Startup, Austin"
    },
    {
        content: "We were losing high-ticket prospects due to slow response times. Their custom automated CRM workflow automatically qualifies and routes leads 24/7. Our contact-to-close rate jumped by 42% in the first quarter alone.",
        author: "Lead Broker",
        role: "Luxury Real Estate, Dallas"
    },
    {
        content: "The seamless AWS migration and subsequent API development meant we finally owned our own data ecosystem instead of renting expensive third-party tools. The system paid for its development cost in less than 45 days.",
        author: "Chief Financial Officer",
        role: "Retail Supply Chain, Chicago"
    },
    {
        content: "Professional, deterministic, and highly technical. They built a custom AI extraction tool that parses unstructured medical invoices with 99.4% accuracy. It's the most impactful software investment we've ever made.",
        author: "Managing Director",
        role: "Healthcare Billing Network"
    }
];

export function Testimonials() {
    return (
        <Section className="bg-background border-t border-primary/20 py-24 md:py-32 overflow-hidden">
            <div className="mb-16 md:mb-24 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white animate-fade-in">Proven Results & Client Impact</h2>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40 // Adjust speed here
                    }}
                >
                    {/* Render list twice for seamless loop */}
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-xl border border-primary/20 bg-[#0a0a0c] hover:border-primary/40 hover:bg-primary/[0.02] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] transition-all duration-500"
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
                </motion.div>
            </div>
        </Section>
    );
}

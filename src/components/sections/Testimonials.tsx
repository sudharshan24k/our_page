"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        content: "Edura Technologies didn't just build a website; they engineered a sales pipeline. We went from 2 unpredictable leads a month to a consistent 15+ qualified inquiries, yielding a 300% ROI in the first quarter.",
        author: "Managing Partner",
        role: "Boutique Law Firm, New York"
    },
    {
        content: "The automated follow-up system has saved our team hours of manual work every single week. More importantly, our contact-to-close rate jumped by 42%.",
        author: "Operations Manager",
        role: "Financial Advisory Group, Chicago"
    },
    {
        content: "They understood exactly how to position our firm's authority. The conversion rate on our contact form tripled within the first 60 days of launching the new site.",
        author: "Principal Consultant",
        role: "Tax Advisory Firm, Austin"
    },
    {
        content: "We were losing high-ticket clients to competitors with better digital presence. After the redesign, our inbound lead volume increased by 150%, and we closed a record month.",
        author: "Lead Broker",
        role: "Luxury Real Estate, Dallas"
    },
    {
        content: "A true partner in our growth. The seamless CRM integration means we never lose a lead in static emails anymore. Everything is tracked, automated, and converting.",
        author: "Founder",
        role: "Wealth Management Firm, Miami"
    },
    {
        content: "Professional, fast, and results-oriented. They speak the language of business, not just code. The new digital system paid for itself in less than 45 days.",
        author: "Managing Director",
        role: "Accounting Firm, Seattle"
    }
];

export function Testimonials() {
    return (
        <Section className="bg-background border-t border-primary/20 py-24 md:py-32 overflow-hidden">
            <div className="mb-16 md:mb-24 text-center">
                <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Proven Results & Client Impact</h2>
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

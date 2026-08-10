"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useTypewriter } from "@/hooks/useTypewriter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const { text, phase } = useTypewriter(
        "Growth",
        [
            "Leads",
            "Conversions",
            "ROI"
        ],
        {
            initialDelay: 500,
            typingSpeed: 100,
            deleteSpeed: 50,
            pauseDuration: 3000,
            loop: true,
        }
    );

    return (
        <section className="min-h-screen flex items-center bg-background text-foreground overflow-hidden relative selection:bg-primary/20">

            <Container className="relative z-10 w-full h-full">
                <div className="flex flex-col lg:flex-row h-full min-h-[60vh] lg:items-center gap-16 lg:gap-24 pt-24 lg:pt-0">

                    {/* Left Column: Authority Payload (45%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 lg:max-w-[45%] space-y-10 relative"
                    >
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                    className="block text-balance"
                                >
                                    Stop Losing High-Ticket Clients to Your Competitors.
                                </motion.span>
                            </h1>

                            <div className="overflow-hidden">
                                <motion.p
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                    className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-xl text-balance"
                                >
                                    We build conversion-optimized digital systems that predictably generate qualified inbound leads and scale your revenue.
                                </motion.p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Button href="#contact" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium flex items-center gap-2">
                                Book a Strategy Call
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                            <Button href="#services" variant="ghost" size="lg" className="text-foreground hover:bg-accent">
                                View Our Results
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Dynamic Headline (55%) */}
                    <div className="flex-1 lg:max-w-[55%] overflow-hidden pl-0 lg:pl-12">
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter leading-[1.05] text-slate-900">
                            <span className="block text-slate-700">Driving</span>
                            <span className="block text-foreground relative min-h-[1.1em]">
                                {text}
                                <span
                                    className={cn(
                                        "absolute -right-[0.1em] top-4 bottom-4 w-[6px] bg-primary/30",
                                        (phase === "pausing" || phase === "idle") ? "animate-pulse" : "opacity-100",
                                    )}
                                />
                            </span>
                        </h2>
                    </div>

                </div>
            </Container>
        </section>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

const ANIMATED_WORDS = ["Growth", "Leads", "Conversions", "ROI"];

export function Hero() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section aria-label="Introduction" className="min-h-screen flex items-center bg-transparent text-foreground overflow-hidden relative selection:bg-primary/30">
            {/* Background Glow Effect specific to Hero */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />

            <Container className="relative z-10 w-full h-full">
                <div className="flex flex-col lg:flex-row h-full min-h-[70vh] lg:items-center gap-16 lg:gap-24 pt-32 lg:pt-0">

                    {/* Left Column: Authority Payload */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 lg:max-w-[50%] space-y-8 relative"
                    >
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-sm text-primary font-medium tracking-wide"
                        >
                            <div className="flex items-center gap-1">
                                <span className="text-lg">⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                            </div>
                            <span className="text-white">50+ 5-star clients</span>
                        </motion.div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-zinc-300 font-medium tracking-wide">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span>Digital Systems that Scale</span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05] overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                    className="block text-balance"
                                >
                                    Stop Losing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">High-Ticket</span> Clients to Competitors.
                                </motion.span>
                            </h1>

                            <div className="overflow-hidden">
                                <motion.p
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                    className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-xl text-balance"
                                >
                                    We build conversion-optimized digital systems that predictably generate qualified inbound leads and scale revenue for top firms across the United States.
                                </motion.p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <Magnetic>
                                <Button href="/contact" size="lg" className="bg-primary text-white hover:bg-primary/90 font-medium flex items-center gap-2 rounded-xl shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)] transition-all duration-300 px-8">
                                    Book a Strategy Call
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Magnetic>
                            <Magnetic>
                                <Button href="/services" variant="ghost" size="lg" className="text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl px-8 transition-all duration-300">
                                    View Our Results
                                </Button>
                            </Magnetic>
                        </div>
                    </motion.div>

                    {/* Right Column: Dynamic Headline */}
                    <div className="flex-1 lg:max-w-[50%] flex lg:justify-end items-center relative w-full pt-10 lg:pt-0">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative w-full"
                        >
                            <div className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tighter leading-[1.1] text-zinc-800 uppercase relative z-10 flex flex-col lg:items-end w-full">
                                <span className="block text-zinc-800/80">Driving</span>
                                <span className="block relative h-[1.2em] w-full overflow-hidden">
                                    <AnimatePresence>
                                        <motion.span
                                            key={wordIndex}
                                            initial={{ y: "100%", opacity: 0 }}
                                            animate={{ y: "0%", opacity: 1 }}
                                            exit={{ y: "-100%", opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="absolute top-0 left-0 lg:left-auto lg:right-0 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 pb-2"
                                        >
                                            {ANIMATED_WORDS[wordIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </div>
                            {/* Decorative blur behind the dynamic text */}
                            <div className="absolute top-1/2 lg:right-0 -translate-y-1/2 w-full lg:w-[120%] h-[120%] bg-indigo-500/10 blur-[100px] rounded-full z-0 pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </Container>
        </section>
    );
}

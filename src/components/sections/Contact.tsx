"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <Section id="contact" className="bg-transparent border-t border-white/5 py-24 md:py-32 relative">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Form */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6">Ready to scale?</h2>
                            <p className="text-lg md:text-xl font-light text-zinc-400">
                                Leave your details below and we'll reach out within 24 hours to schedule your free strategy audit.
                            </p>
                        </div>

                        {isSubmitted ? (
                            <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Request Received!</h3>
                                <p className="text-zinc-400">Our team will be in touch with you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <input 
                                        type="text" 
                                        required 
                                        placeholder="Full Name" 
                                        className="w-full h-14 px-6 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    />
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder="Work Email" 
                                        className="w-full h-14 px-6 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    />
                                    <input 
                                        type="url" 
                                        placeholder="Company Website (Optional)" 
                                        className="w-full h-14 px-6 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    />
                                    <textarea 
                                        required 
                                        rows={4}
                                        placeholder="What is your biggest growth challenge right now?" 
                                        className="w-full p-6 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-sm tracking-widest font-bold uppercase rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all">
                                    Claim Your Free Growth Audit
                                    <ArrowRight className="w-4 h-4" />
                                </Button>

                                <div className="flex items-center justify-center gap-2 text-xs font-medium text-zinc-500 mt-4">
                                    <Lock className="w-3.5 h-3.5" />
                                    <span>Your information is strictly confidential.</span>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Process Steps */}
                    <div className="lg:pl-8">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10 h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
                            <h3 className="text-3xl font-bold text-white mb-10 relative z-10">Your Path to Predictable Growth</h3>

                            <div className="relative space-y-10 z-10">
                                {/* Connecting Line */}
                                <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-white/10" />

                                {/* Step 1 */}
                                <div className="relative flex gap-6 items-start">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center font-bold text-lg shrink-0 backdrop-blur-md">
                                        1
                                    </div>
                                    <p className="text-zinc-400 text-lg leading-relaxed pt-2">
                                        We conduct a deep-dive <span className="text-white font-medium">strategy audit</span> of your current digital presence
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex gap-6 items-start">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center font-bold text-lg shrink-0 backdrop-blur-md">
                                        2
                                    </div>
                                    <p className="text-zinc-400 text-lg leading-relaxed pt-2">
                                        We identify exactly where you are <span className="text-white font-medium">losing revenue</span> and leads
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex gap-6 items-start">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center font-bold text-lg shrink-0 backdrop-blur-md">
                                        3
                                    </div>
                                    <p className="text-zinc-400 text-lg leading-relaxed pt-2">
                                        We present a <span className="text-white font-medium">custom engineering roadmap</span> to scale your acquisitions
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="relative flex gap-6 items-start">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/50 text-primary flex items-center justify-center font-bold text-lg shrink-0 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                        4
                                    </div>
                                    <p className="text-zinc-400 text-lg leading-relaxed pt-2">
                                        We build the system and you <span className="text-white font-medium">watch the leads flow in</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

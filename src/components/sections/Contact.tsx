"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Bell, Calendar, Coffee, FileText, Phone, User } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="bg-background border-t border-border py-24 md:py-32">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Form */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                            </div>

                            <div className="pt-4">
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-sm tracking-widest font-bold uppercase rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all">
                                    Claim Your Free Growth Audit
                                    <Bell className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Process Steps */}
                    <div>
                        <div className="bg-white border border-zinc-200/60 shadow-sm rounded-2xl p-8 h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Your Path to Predictable Growth:</h3>

                            <div className="relative space-y-8 z-10">
                                {/* Connecting Line */}
                                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-zinc-200" />

                                {/* Step 1 */}
                                <div className="relative flex gap-4 items-start">
                                    <div className="relative z-10 w-10 h-10 rounded-full bg-slate-50 border-2 border-zinc-200 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0">
                                        1
                                    </div>
                                    <p className="text-slate-600 text-base leading-relaxed pt-2">
                                        We conduct a deep-dive <span className="text-slate-900 font-medium">strategy audit</span> of your current digital presence
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex gap-4 items-start">
                                    <div className="relative z-10 w-10 h-10 rounded-full bg-slate-50 border-2 border-zinc-200 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0">
                                        2
                                    </div>
                                    <p className="text-slate-600 text-base leading-relaxed pt-2">
                                        We identify exactly where you are <span className="text-slate-900 font-medium">losing revenue</span> and leads
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex gap-4 items-start">
                                    <div className="relative z-10 w-10 h-10 rounded-full bg-slate-50 border-2 border-zinc-200 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0">
                                        3
                                    </div>
                                    <p className="text-slate-600 text-base leading-relaxed pt-2">
                                        We present a <span className="text-slate-900 font-medium">custom engineering roadmap</span> to scale your acquisitions
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="relative flex gap-4 items-start">
                                    <div className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/30 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                                        4
                                    </div>
                                    <p className="text-slate-600 text-base leading-relaxed pt-2">
                                        We build the system and you <span className="text-slate-900 font-medium">watch the leads flow in</span>
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

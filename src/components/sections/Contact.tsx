"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function Contact({ isPage = false }: { isPage?: boolean }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        // Web3Forms Access Key
        formData.append("access_key", "9d711988-0631-4518-aba1-4cb9aab6a4fe");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (result.success) {
                setIsSubmitted(true);
            } else {
                alert("Something went wrong! Please check your Access Key.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };

    const HeadingTag = isPage ? "h1" : "h2";

    return (
        <Section id="contact" className="bg-transparent border-t border-primary/20 py-24 md:py-32 relative">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                {/* Hero Headings */}
                <div className="max-w-4xl mb-16">
                    <HeadingTag className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6">Ready to scale?</HeadingTag>
                    <p className="text-lg md:text-xl font-light text-zinc-400">
                        Connect with our engineering team instantly by scheduling a session or sending a message below.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Direct Message Form & Contact Info */}
                    <div className="space-y-10">
                        <div className="bg-[#0a0a0c] border border-white/5 shadow-2xl rounded-3xl p-8 relative overflow-hidden">
                            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                            
                            {isSubmitted ? (
                                <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                                        <ShieldCheck className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Request Received!</h3>
                                    <p className="text-zinc-400 font-light text-sm">Our team will be in touch with you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Configuration for Web3Forms */}
                                    <input type="hidden" name="access_key" value="9d711988-0631-4518-aba1-4cb9aab6a4fe" />
                                    <input type="hidden" name="subject" value="New Lead from Edura Technologies Contact Form" />
                                    <input type="hidden" name="from_name" value="Edura Technologies" />
                                    
                                    <div className="space-y-4">
                                        <input 
                                            type="text" 
                                            name="Name"
                                            required 
                                            placeholder="Full Name" 
                                            className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light text-sm"
                                        />
                                        <input 
                                            type="email" 
                                            name="Email"
                                            required 
                                            placeholder="Work Email" 
                                            className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light text-sm"
                                        />
                                        <input 
                                            type="url" 
                                            name="Website"
                                            placeholder="Company Website (Optional)" 
                                            className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light text-sm"
                                        />
                                        <textarea 
                                            name="Growth_Challenge"
                                            required 
                                            rows={4}
                                            placeholder="What is your biggest growth challenge right now?" 
                                            className="w-full p-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none font-light text-sm"
                                        />
                                    </div>

                                    <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-xs tracking-widest font-bold uppercase rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                                        {isSubmitting ? "Submitting..." : "Send My Message"}
                                        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                                    </Button>

                                    <div className="flex items-center justify-center gap-2 text-xs font-medium text-zinc-500 mt-4">
                                        <Lock className="w-3.5 h-3.5" />
                                        <span>Your information is strictly confidential.</span>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Quick Contact Info */}
                        <div className="bg-[#0a0a0c] backdrop-blur border border-primary/20 rounded-3xl p-8 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] transition-all duration-500">
                            <p className="text-xs font-mono text-zinc-500 mb-4 tracking-widest uppercase">ALTERNATIVE CONTACT</p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-mono">Email</p>
                                    <div className="flex flex-col gap-1.5">
                                        <a href="mailto:hello@eduratech.com" className="text-white hover:text-primary transition-colors text-sm font-medium">
                                            hello@eduratech.com
                                        </a>
                                        <a href="mailto:support@eduratech.com" className="text-white hover:text-primary transition-colors text-sm font-medium">
                                            support@eduratech.com
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-mono">Response Time</p>
                                    <p className="text-white text-sm font-medium">Within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Embedded Cal.com Scheduler */}
                    <div className="space-y-10 lg:pl-4">
                        <div className="bg-[#0a0a0c] border border-primary/20 shadow-2xl rounded-3xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
                            <h3 className="text-xl font-semibold text-white mb-6 relative z-10">Schedule Instantly</h3>
                            
                            <div className="relative z-10 w-full overflow-hidden rounded-2xl bg-[#08080a] border border-white/5 p-1">
                                <iframe
                                    src="https://cal.com/eduratech/15min?embed=true&theme=dark"
                                    style={{ width: "100%", height: "550px", border: "none" }}
                                    title="Schedule a 15-minute Strategy Call with EduraTech"
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

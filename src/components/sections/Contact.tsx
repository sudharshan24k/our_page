"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Lock, ArrowRight, ShieldCheck, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

export function Contact({ isPage = false }: { isPage?: boolean }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [formStarted, setFormStarted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (isPage) {
            trackEvent("contact_page_view");
        }
    }, [isPage]);

    const handleFocus = () => {
        if (!formStarted) {
            setFormStarted(true);
            trackEvent("contact_form_start");
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        trackEvent("contact_form_submit");
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
                trackEvent("generate_lead");
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
                                        <div className="grid grid-cols-2 gap-4">
                                            <input 
                                                type="text" 
                                                name="Name"
                                                required 
                                                onFocus={handleFocus}
                                                placeholder="Full Name" 
                                                className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light text-sm"
                                            />
                                            <input 
                                                type="email" 
                                                name="Email"
                                                required 
                                                onFocus={handleFocus}
                                                placeholder="Work Email" 
                                                className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light text-sm"
                                            />
                                        </div>
                                        <input 
                                            type="url" 
                                            name="Website"
                                            placeholder="Company Website (Optional)" 
                                            className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light text-sm"
                                        />
                                        <select 
                                            name="Service_Required"
                                            required
                                            defaultValue=""
                                            className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light text-sm appearance-none"
                                        >
                                            <option value="" disabled className="text-zinc-500">What do you need help with?</option>
                                            <option value="AI / Automation">AI / Automation</option>
                                            <option value="Custom Software">Custom Software</option>
                                            <option value="SaaS">SaaS</option>
                                            <option value="CRM / Integration">CRM / Integration</option>
                                            <option value="Website / Web Application">Website / Web Application</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            <select 
                                                name="Budget"
                                                defaultValue=""
                                                className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light text-sm appearance-none"
                                            >
                                                <option value="" disabled>Estimated Budget (Optional)</option>
                                                <option value="<$1,000">&lt;$1,000</option>
                                                <option value="$1,000–$2,500">$1,000–$2,500</option>
                                                <option value="$2,500–$5,000">$2,500–$5,000</option>
                                                <option value="$5,000–$10,000">$5,000–$10,000</option>
                                                <option value="$10,000+">$10,000+</option>
                                            </select>

                                            <select 
                                                name="Timeline"
                                                defaultValue=""
                                                className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light text-sm appearance-none"
                                            >
                                                <option value="" disabled>Project Timeline (Optional)</option>
                                                <option value="ASAP">ASAP</option>
                                                <option value="1–3 months">1–3 months</option>
                                                <option value="3–6 months">3–6 months</option>
                                                <option value="Exploring">Exploring</option>
                                            </select>
                                        </div>
                                    </div>

                                    <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-xs tracking-widest font-bold uppercase rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                                        {isSubmitting ? "Submitting..." : "Request a Free Consultation"}
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
                        <div className="bg-[#0a0a0c] border border-white/5 shadow-2xl rounded-3xl p-8 hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                            <p className="text-xs font-mono text-zinc-500 mb-6 tracking-widest uppercase">Alternative Contact Channels</p>
                            
                            <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-zinc-500">
                                        <Mail className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-mono uppercase tracking-wider">Email Support</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <a 
                                            href="mailto:hello@eduratech.com" 
                                            onClick={() => trackEvent("email_click", { email: "hello@eduratech.com" })}
                                            className="text-white hover:text-primary transition-colors text-sm font-semibold flex items-center gap-1.5 group"
                                        >
                                            hello@eduratech.com
                                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                        </a>
                                        <a 
                                            href="mailto:support@eduratech.com" 
                                            onClick={() => trackEvent("email_click", { email: "support@eduratech.com" })}
                                            className="text-white hover:text-primary transition-colors text-sm font-semibold flex items-center gap-1.5 group"
                                        >
                                            support@eduratech.com
                                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                        </a>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-zinc-500">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-mono uppercase tracking-wider">Response Speed</span>
                                    </div>
                                    <p className="text-white text-sm font-semibold leading-relaxed">
                                        Within 24 hours <span className="text-zinc-500 font-light block text-xs mt-1">SLA guarantee for all client inquiries</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Embedded Cal.com React Widget */}
                    <div className="space-y-10 lg:pl-4">
                        <div className="bg-[#0a0a0c] border border-primary/20 shadow-2xl rounded-3xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
                            <h3 className="text-xl font-semibold text-white mb-6 relative z-10">Schedule Instantly</h3>
                            
                            <div className="relative z-10 w-full overflow-hidden rounded-2xl bg-[#08080a] border border-white/5 p-2 h-[550px]">
                                    <iframe
                                        src="https://app.cal.com/eduratech/30min?embed=true&theme=dark"
                                        style={{ width: "100%", height: "100%", border: "none" }}
                                        title="Schedule a 30-minute Strategy Call with EduraTech"
                                        allow="camera; microphone; geolocation; clipboard-write"
                                        loading="lazy"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function Contact({ isPage = false }: { isPage?: boolean }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState<"schedule" | "message">("schedule");

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
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Form */}
                    <div className="space-y-10">
                        <div>
                            <HeadingTag className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6">Ready to scale?</HeadingTag>
                            <p className="text-lg md:text-xl font-light text-zinc-400 mb-6">
                                Leave your details below and we&apos;ll reach out within 24 hours to schedule your free strategy audit.
                            </p>
                            <div className="space-y-4 text-zinc-500 font-light text-sm md:text-base leading-relaxed">
                                <p>
                                    Our free business strategy audit is a comprehensive, 30-minute evaluation of your current digital infrastructure. We analyze your customer acquisition pipelines, identify high-friction bottlenecks in your sales funnel, and pinpoint exactly where your competitors are outperforming you.
                                </p>
                                <p>
                                    Rather than proposing generic templates, our senior engineering team reviews your backend workflows to identify automation opportunities. You will walk away with a clear, actionable roadmap detailing exactly how custom software and practical AI integrations can optimize your operations and increase your profit margins.
                                </p>
                                <p>
                                    Whether you choose to build with us or implement the roadmap independently, this session provides immediate, zero-risk value to help you make informed technology investments for the coming year.
                                </p>
                            </div>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="flex gap-4 p-1.5 rounded-2xl bg-white/[0.02] border border-white/5 max-w-sm">
                            <button
                                type="button"
                                onClick={() => setActiveTab("schedule")}
                                className={`flex-1 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                                    activeTab === "schedule"
                                        ? "bg-primary text-white shadow-lg"
                                        : "text-zinc-500 hover:text-white"
                                }`}
                            >
                                Schedule Instantly
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("message")}
                                className={`flex-1 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                                    activeTab === "message"
                                        ? "bg-primary text-white shadow-lg"
                                        : "text-zinc-500 hover:text-white"
                                }`}
                            >
                                Send Message
                            </button>
                        </div>

                        {activeTab === "schedule" ? (
                            <div className="w-full rounded-3xl border border-primary/20 bg-[#0a0a0c] overflow-hidden shadow-2xl p-2 relative">
                                <div className="absolute inset-0 bg-primary/5 pointer-events-none rounded-3xl" />
                                <iframe
                                    src="https://cal.com/eduratech/15min?embed=true&theme=dark"
                                    style={{ width: "100%", height: "580px", border: "none" }}
                                    title="Schedule a meeting with EduraTech"
                                    className="relative z-10 rounded-2xl"
                                />
                            </div>
                        ) : isSubmitted ? (
                            <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Request Received!</h3>
                                <p className="text-zinc-400">Our team will be in touch with you shortly.</p>
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
                                        className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                    />
                                    <input 
                                        type="email" 
                                        name="Email"
                                        required 
                                        placeholder="Work Email" 
                                        className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                    />
                                    <input 
                                        type="url" 
                                        name="Website"
                                        placeholder="Company Website (Optional)" 
                                        className="w-full h-14 px-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                    />
                                    <textarea 
                                        name="Growth_Challenge"
                                        required 
                                        rows={4}
                                        placeholder="What is your biggest growth challenge right now?" 
                                        className="w-full p-6 rounded-xl bg-[#0a0a0c] border border-primary/20 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                                    />
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-sm tracking-widest font-bold uppercase rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                                    {isSubmitting ? "Submitting..." : "Claim Your Free Growth Audit"}
                                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                                </Button>

                                <div className="flex items-center justify-center gap-2 text-xs font-medium text-zinc-500 mt-4">
                                    <Lock className="w-3.5 h-3.5" />
                                    <span>Your information is strictly confidential.</span>
                                </div>
                            </form>
                        )}
                    </div>

                    <div className="lg:pl-8 flex flex-col gap-8">
                        <div className="bg-[#0a0a0c] backdrop-blur-xl border border-primary/20 shadow-2xl rounded-3xl p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
                            <h3 className="text-3xl font-bold text-white mb-10 relative z-10">Your Path to Predictable Growth</h3>

                            <div className="relative space-y-10 z-10">
                                {/* Connecting Line */}
                                <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-primary/20" />

                                {/* Step 1 */}
                                <div className="relative flex gap-6 items-start">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center font-bold text-lg shrink-0 backdrop-blur-md">
                                        1
                                    </div>
                                    <p className="text-zinc-400 text-lg leading-relaxed pt-2">
                                        We conduct a deep-dive <span className="text-white font-medium">strategy audit</span> of your current digital presence
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex gap-6 items-start">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center font-bold text-lg shrink-0 backdrop-blur-md">
                                        2
                                    </div>
                                    <p className="text-zinc-400 text-lg leading-relaxed pt-2">
                                        We identify exactly where you are <span className="text-white font-medium">losing revenue</span> and leads
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex gap-6 items-start">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center font-bold text-lg shrink-0 backdrop-blur-md">
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

                        {/* Quick Contact Info */}
                        <div className="bg-[#0a0a0c] backdrop-blur border border-primary/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] transition-all duration-500">
                            <p className="text-sm text-zinc-500 mb-4 font-medium">ALTERNATIVE CONTACT</p>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">Email</p>
                                    <div className="flex flex-col gap-1">
                                        <a href="mailto:hello@eduratech.com" className="text-white hover:text-primary transition-colors font-medium">
                                            hello@eduratech.com
                                        </a>
                                        <a href="mailto:support@eduratech.com" className="text-white hover:text-primary transition-colors font-medium">
                                            support@eduratech.com
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">Response Time</p>
                                    <p className="text-white font-medium">Within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

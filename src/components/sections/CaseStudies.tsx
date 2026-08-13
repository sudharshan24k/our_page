"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, TrendingUp, Users, Zap, Clock, ShieldCheck, Globe, Building2 } from "lucide-react";
import { useState } from "react";
import { ContentModal } from "@/components/ui/ContentModal";

const caseStudies = [
    {
        id: 1,
        client: "Global SaaS Provider",
        icon: Globe,
        metric: "+215%",
        metricLabel: "Lead Velocity",
        challenge: "High drop-off rates in enterprise trial signups due to a complex, multi-step onboarding flow.",
        solution: "Engineered a frictionless, progressive profiling conversion engine with real-time CRM syncing.",
        impact: "Increased enterprise lead velocity by 215% within 90 days, generating $4.2M in pipeline.",
        detailedContent: (
            <>
                <p><strong>The Business Problem:</strong> This enterprise SaaS company had a great product but a leaky funnel. Their signup process was built for engineers, not decision-makers. Executives were abandoning the form because it asked for too much technical detail upfront.</p>
                <h4>Our Technical & Business Solution</h4>
                <ul>
                    <li><strong>Progressive Profiling:</strong> We rebuilt the front-end to ask only for a business email initially. We enriched the data in the background using Clearbit API, capturing the company size and industry without asking the user.</li>
                    <li><strong>Frictionless UX:</strong> We transitioned the multi-page form into a single, lightning-fast modal interface built on React, reducing the perceived effort required to sign up.</li>
                    <li><strong>Real-time CRM Sync:</strong> Leads were routed instantly to Salesforce with full enrichment data, allowing the sales team to call high-value prospects within 5 minutes of signup.</li>
                </ul>
                <h4>The Bottom Line</h4>
                <p>By removing friction and automating the data gathering (tech), we unlocked a massive bottleneck. The business result was a 215% increase in qualified leads entering the sales pipeline, directly attributing to $4.2M in new potential revenue in just one quarter.</p>
            </>
        )
    },
    {
        id: 2,
        client: "Fintech Startup",
        icon: TrendingUp,
        metric: "-40%",
        metricLabel: "CAC Reduction",
        challenge: "Scaling user acquisition was becoming prohibitively expensive due to inefficient ad landing pages.",
        solution: "Developed personalized, dynamic landing pages based on traffic source and user intent.",
        impact: "Scaled user acquisition rapidly while reducing Customer Acquisition Cost (CAC) by 40%.",
        detailedContent: (
            <>
                <p><strong>The Business Problem:</strong> As they scaled their ad spend, their customer acquisition cost (CAC) skyrocketed. They were sending all traffic, regardless of the ad they clicked, to a generic homepage, resulting in massive bounce rates.</p>
                <h4>Our Technical & Business Solution</h4>
                <ul>
                    <li><strong>Dynamic Routing:</strong> We built a Next.js architecture that read the UTM parameters of incoming traffic and instantly rendered a personalized landing page tailored to that specific user's intent.</li>
                    <li><strong>A/B Testing Infrastructure:</strong> We implemented edge-based split testing, allowing us to test hundreds of headline and call-to-action variations without slowing down the page load speed.</li>
                </ul>
                <h4>The Bottom Line</h4>
                <p>Relevance equals revenue. By ensuring the user saw exactly what they clicked on, conversion rates doubled. This efficiency meant the fintech startup could acquire new users for 40% less than before, allowing them to stretch their marketing budget further and outpace competitors.</p>
            </>
        )
    },
    {
        id: 3,
        client: "B2B Logistics Firm",
        icon: Building2,
        metric: "120 hrs",
        metricLabel: "Saved Monthly",
        challenge: "Sales team spent countless hours manually qualifying and onboarding new supply chain partners.",
        solution: "Automated the entire client qualification and onboarding flow through a custom web portal.",
        impact: "Saved the sales team 120 hours monthly, allowing them to focus entirely on closing high-tier accounts.",
        detailedContent: (
            <>
                <p><strong>The Business Problem:</strong> Highly paid sales executives were acting as administrative assistants. They spent hours emailing PDFs, chasing signatures, and manually qualifying logistics partners who often didn't meet the minimum volume requirements.</p>
                <h4>Our Technical & Business Solution</h4>
                <ul>
                    <li><strong>Automated Qualification Gateway:</strong> We built a self-serve partner portal. Prospective partners had to pass an automated logic-gate based on their shipping volume before they could even book a call with sales.</li>
                    <li><strong>Digital Onboarding:</strong> We digitized all contracts and compliance documents, integrating e-signatures directly into the web flow.</li>
                </ul>
                <h4>The Bottom Line</h4>
                <p>Technology should amplify human effort, not replace it. By automating the low-value administrative tasks (tech), we freed up 120 hours of the sales team's time every month. They redirected this time to closing enterprise-level accounts, directly boosting top-line revenue without hiring more staff.</p>
            </>
        )
    },
    {
        id: 4,
        client: "Healthcare Tech",
        icon: ShieldCheck,
        metric: "3x",
        metricLabel: "Demo Requests",
        challenge: "A clinical compliance product was struggling to communicate its value proposition clearly.",
        solution: "Overhauled the site architecture and messaging, prioritizing outcome-based copywriting and trust signals.",
        impact: "Tripled inbound demo requests from hospital administrators within the first quarter.",
        detailedContent: (
            <>
                <p><strong>The Business Problem:</strong> They had a brilliant software product that ensured hospitals remained compliant with complex regulations. But their website looked outdated and read like an instruction manual, failing to build trust with risk-averse hospital administrators.</p>
                <h4>Our Technical & Business Solution</h4>
                <ul>
                    <li><strong>Authority Redesign:</strong> We overhauled the entire aesthetic to look enterprise, secure, and modern. We implemented dark-mode visuals with "glassmorphic" elements that subconsciously signal high-end technology.</li>
                    <li><strong>Outcome-Based Messaging:</strong> We rewrote the copy. Instead of talking about "cloud-based architecture," we focused on business outcomes: "Pass your next audit with zero infractions."</li>
                    <li><strong>Trust Engineering:</strong> We prominently displayed security badges (HIPAA compliant, SOC2) and case studies next to every call-to-action to alleviate risk anxiety.</li>
                </ul>
                <h4>The Bottom Line</h4>
                <p>Hospital administrators don't buy software; they buy risk reduction. By redesigning the platform to look secure and speak their language, trust skyrocketed. The result was a 300% increase in demo requests from their ideal, high-value target audience.</p>
            </>
        )
    },
    {
        id: 5,
        client: "E-Commerce Infrastructure",
        icon: Zap,
        metric: "< 1s",
        metricLabel: "Load Time",
        challenge: "Slow checkout API integrations were causing high cart abandonment for their merchants.",
        solution: "Rebuilt the front-end architecture using a modern edge-rendering framework for instant interactions.",
        impact: "Achieved sub-second load times globally, resulting in a 28% increase in merchant conversion rates.",
        detailedContent: (
            <>
                <p><strong>The Business Problem:</strong> Every second a checkout page takes to load, conversion rates drop by roughly 7%. This infrastructure provider's checkout flow was taking 4-5 seconds, costing their merchants millions in abandoned carts.</p>
                <h4>Our Technical & Business Solution</h4>
                <ul>
                    <li><strong>Edge Computing:</strong> We moved their rendering logic from a centralized server to the "Edge" (servers distributed globally). This meant a user in Tokyo loaded the page from a server in Tokyo, not New York.</li>
                    <li><strong>Optimized Asset Delivery:</strong> We compressed and deferred non-essential scripts, ensuring the "Buy" button and payment fields rendered instantly before anything else.</li>
                </ul>
                <h4>The Bottom Line</h4>
                <p>Speed is revenue. By solving the technical latency issue, we brought load times under one second globally. This frictionless experience directly translated to a 28% increase in completed checkouts, saving millions in otherwise lost revenue for their merchants.</p>
            </>
        )
    },
    {
        id: 6,
        client: "Enterprise AI Platform",
        icon: BarChart3,
        metric: "$1.8M",
        metricLabel: "ARR Generated",
        challenge: "Inability to capture mid-market leads effectively despite high top-of-funnel traffic.",
        solution: "Implemented an interactive ROI calculator and a gated, high-value technical whitepaper strategy.",
        impact: "Captured 450+ qualified mid-market leads, directly attributing to $1.8M in new ARR.",
        detailedContent: (
            <>
                <p><strong>The Business Problem:</strong> They had great traffic from their blog, but visitors were reading and leaving. They had no mechanism to capture the contact information of mid-market buyers who were researching AI solutions.</p>
                <h4>Our Technical & Business Solution</h4>
                <ul>
                    <li><strong>Interactive ROI Calculator:</strong> We built a custom, interactive web application where users could input their current operational costs. The tool would instantly calculate how much money the AI platform would save them.</li>
                    <li><strong>Strategic Gating:</strong> To see the final, detailed ROI report, the user had to input their corporate email address.</li>
                </ul>
                <h4>The Bottom Line</h4>
                <p>Instead of begging for emails with a generic "Subscribe to our newsletter" form, we traded high-value, personalized financial data for contact information. This value exchange (tech) generated 450 highly qualified leads, resulting in $1.8M in Annual Recurring Revenue (business outcome).</p>
            </>
        )
    },
    {
        id: 7,
        client: "HR Management Software",
        icon: Users,
        metric: "85%",
        metricLabel: "Onboarding Completion",
        challenge: "Users were abandoning the platform during the complex initial setup phase.",
        solution: "Designed a gamified, step-by-step product walkthrough integrated directly into the web app.",
        impact: "Boosted onboarding completion rates from 32% to 85%, significantly reducing early churn.",
        detailedContent: (
            <>
                <p><strong>The Business Problem:</strong> The sales team was closing deals, but customers were cancelling within the first 30 days. The software was so powerful that it was overwhelming; users couldn't figure out how to set it up and simply gave up.</p>
                <h4>Our Technical & Business Solution</h4>
                <ul>
                    <li><strong>In-App Guidance:</strong> We engineered a seamless, step-by-step onboarding overlay built directly into the software interface. It guided users through exactly where to click to set up their first campaign.</li>
                    <li><strong>Gamification:</strong> We broke the massive setup process into small, manageable "quests" with progress bars and visual rewards upon completion.</li>
                </ul>
                <h4>The Bottom Line</h4>
                <p>A sold customer is only valuable if they actually use the product. By fixing the user experience (tech) to make onboarding feel easy and rewarding, completion rates jumped to 85%. This drastically reduced early cancellations, securing the long-term recurring revenue of those accounts.</p>
            </>
        )
    },
    {
        id: 8,
        client: "Manufacturing ERP",
        icon: Clock,
        metric: "50%",
        metricLabel: "Faster Sales Cycle",
        challenge: "Long, complex sales cycles due to prospects not understanding the software capabilities beforehand.",
        solution: "Built a robust 'Capabilities Tour' section with interactive, self-serve product demos.",
        impact: "Educated prospects arrived at sales calls ready to buy, cutting the average sales cycle in half.",
        detailedContent: (
            <>
                <p><strong>The Business Problem:</strong> Selling a massive ERP system to factories is hard. Prospects couldn't visualize how it worked, leading to endless rounds of demo calls, questions, and stalled negotiations. The sales cycle was taking over 9 months.</p>
                <h4>Our Technical & Business Solution</h4>
                <ul>
                    <li><strong>Self-Serve Interactive Demos:</strong> We built a sandbox environment on their website. Prospects could click through a simulated version of the software, experiencing the core features without needing to talk to a human.</li>
                    <li><strong>Contextual Education:</strong> Alongside the interactive demo, we provided clear, layman explanations of what each feature did and why it mattered to factory output.</li>
                </ul>
                <h4>The Bottom Line</h4>
                <p>We shifted the burden of education from the sales team to the website. By the time prospects booked a call, they already understood the software and knew they wanted it. This self-education (tech) cut the sales cycle in half, allowing the company to close twice as many deals in the same timeframe.</p>
            </>
        )
    }
];

export function CaseStudies({ isMainHeading = false }: { isMainHeading?: boolean }) {
    const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);
    const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

    return (
        <Section id="case-studies" className="bg-background border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="max-w-3xl mb-16">
                    {isMainHeading ? (
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                            Proven impact.<br />
                            <span className="text-zinc-500">Zero compromises.</span>
                        </h1>
                    ) : (
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                            Proven impact.<br />
                            <span className="text-zinc-500">Zero compromises.</span>
                        </h2>
                    )}
                    <p className="text-lg md:text-xl font-light text-zinc-400">
                        We partner with industry leaders to engineer systems that drive measurable growth. Here is a look at what we've achieved together.
                    </p>
                </div>

                {/* Industry Tags */}
                <div className="mb-12 flex flex-wrap gap-3">
                    <button
                        onClick={() => setSelectedMetric(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedMetric === null
                                ? "bg-primary text-white"
                                : "bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/5"
                        }`}
                    >
                        All Case Studies
                    </button>
                    {["Lead Generation", "Performance", "Cost Reduction", "Automation"].map((metric) => (
                        <button
                            key={metric}
                            onClick={() => setSelectedMetric(metric === selectedMetric ? null : metric)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedMetric === metric
                                    ? "bg-primary text-white"
                                    : "bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/5"
                            }`}
                        >
                            {metric}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {caseStudies.map((study, index) => {
                        const Icon = study.icon;
                        return (
                            <motion.article 
                                key={study.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedStudy(study)}
                                className="group cursor-pointer relative bg-[#0a0a0c] border border-white/5 hover:border-white/10 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col h-full overflow-hidden"
                            >
                                {/* Top Accent Glow on Hover */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-700" />
                                
                                {/* Inner Radial Gradient on Hover */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-inner group-hover:scale-110">
                                            <Icon className="w-6 h-6 stroke-[1.5]" />
                                        </div>
                                        <div className="text-right flex flex-col items-end">
                                            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none mb-1.5">{study.metric}</div>
                                            <div className="text-[10px] font-bold text-primary uppercase tracking-widest">{study.metricLabel}</div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 group-hover:text-primary transition-colors duration-300 tracking-tight">
                                        {study.client}
                                    </h3>
                                    
                                    <div className="space-y-5 flex-grow mb-8">
                                        <div>
                                            <div className="inline-block px-2.5 py-1 bg-white/5 rounded-md text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 border border-white/5">Challenge</div>
                                            <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <div className="inline-block px-2.5 py-1 bg-primary/10 rounded-md text-[10px] font-bold text-primary uppercase tracking-widest mb-2 border border-primary/20">Impact</div>
                                            <p className="text-sm text-zinc-200 leading-relaxed font-medium line-clamp-2">{study.impact}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors mt-auto pt-5 border-t border-white/5">
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">Read Full Case Study</span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-45 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-24 pt-24 border-t border-white/5"
                >
                    <div className="max-w-3xl">
                        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                            Ready to become our next success story?
                        </h3>
                        <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                            Whether you're a SaaS startup, B2B services firm, or enterprise technology company, we've got the playbook to scale your revenue predictably.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)]"
                        >
                            Schedule Your Free Audit
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </Container>

            {/* Read More Modal */}
            <ContentModal
                isOpen={!!selectedStudy}
                onClose={() => setSelectedStudy(null)}
                title={selectedStudy?.client || ""}
            >
                {selectedStudy?.detailedContent}
            </ContentModal>
        </Section>
    );
}

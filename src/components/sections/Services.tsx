"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
    Workflow, Smartphone, Globe,
    Layout, ShieldCheck, Zap
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { ContentModal } from "@/components/ui/ContentModal";

const services = [
    {
        title: "Authority Positioning",
        description: "We reconstruct your digital presence to instantly position you as the premium choice in your market, allowing you to close high-ticket deals with zero friction.",
        icon: Layout,
        detailedContent: (
            <>
                <p>In today's saturated B2B landscape, being "better" isn't enough; you must be perceived as the undeniable authority. Our Authority Positioning service completely engineers your digital presence to reflect premium market dominance.</p>
                <h4>The Methodology</h4>
                <ul>
                    <li><strong>Brand Architecture Rebuild:</strong> We strip away generic messaging and establish a distinct, high-value brand narrative that resonates exclusively with enterprise decision-makers.</li>
                    <li><strong>Social Proof Engineering:</strong> We strategically place case studies, metrics, and trust signals (like our custom Trust component) precisely where buyers experience the most friction.</li>
                    <li><strong>Visual Supremacy:</strong> Implementing premium design aesthetics—like dark mode glassmorphism and subtle micro-interactions—that psychologically signal high cost and high value to the user.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>Clients who undergo our positioning restructure typically see a <strong>40% decrease in sales cycle length</strong>, as prospects arrive at the discovery call already convinced of the firm's elite status and capability.</p>
            </>
        )
    },
    {
        title: "Conversion Engine",
        description: "Stop paying for traffic that bounces. We ruthlessly optimize every element of your site to convert passive visitors into warm, ready-to-buy inquiries.",
        icon: Zap,
        detailedContent: (
            <>
                <p>Traffic without conversion is just an expensive vanity metric. Our Conversion Engine protocol transforms your website from a digital brochure into a highly calibrated lead generation machine.</p>
                <h4>Core Implementation</h4>
                <ul>
                    <li><strong>Frictionless Capture:</strong> We deploy advanced, progressive profiling forms (like our 4-field modal strategy) that maximize capture rates without scaring away high-level executives.</li>
                    <li><strong>Behavioral Triggers:</strong> Implementing strategic exit-intent and scroll-depth triggers to present the right offer (e.g., a Free Growth Audit) at the exact moment of peak buyer intent.</li>
                    <li><strong>A/B/n Multivariate Testing:</strong> Continuous, data-driven iteration on headlines, CTA placements, and button colors to squeeze every possible lead out of your existing traffic.</li>
                </ul>
                <h4>The Impact</h4>
                <p>By removing conversion roadblocks, we consistently help our partners achieve <strong>2x to 3x increases in inbound lead volume</strong> within the first 60 days of deployment.</p>
            </>
        )
    },
    {
        title: "Client Acquisition Flows",
        description: "Custom-engineered lead capture systems that seamlessly funnel high-intent prospects straight into your CRM and sales calendar.",
        icon: Smartphone,
        detailedContent: (
            <>
                <p>A successful acquisition strategy requires more than just a contact page. It requires a meticulously designed flow that qualifies, educates, and schedules prospects automatically.</p>
                <h4>System Architecture</h4>
                <ul>
                    <li><strong>Multi-Step Funnel Design:</strong> We build dedicated landing page sequences for your specific ad campaigns, ensuring perfect "message match" from the ad click to the final conversion.</li>
                    <li><strong>Automated Qualification:</strong> We integrate logic-based questionnaires that automatically filter out unqualified leads, ensuring your sales team only speaks to prospects with budget and intent.</li>
                    <li><strong>Seamless CRM Integration:</strong> Direct API pipelines into Salesforce, HubSpot, or GoHighLevel. No more manual data entry; leads appear in your pipeline instantly.</li>
                </ul>
                <p>Our acquisition flows operate 24/7, acting as an elite digital sales representative that never sleeps, never takes a day off, and always delivers the perfect pitch.</p>
            </>
        )
    },
    {
        title: "Revenue Automation",
        description: "Reclaim hundreds of hours. We automate your entire client onboarding, follow-ups, and meeting scheduling so you can focus exclusively on fulfillment.",
        icon: Workflow,
        detailedContent: (
            <>
                <p>Scale breaks unoptimized systems. If your team is buried in manual admin work, you cannot grow. Our Revenue Automation service eliminates the repetitive tasks choking your agency's bandwidth.</p>
                <h4>What We Automate</h4>
                <ul>
                    <li><strong>Instant Lead Nurturing:</strong> Multi-channel follow-up sequences (Email/SMS) that trigger the second a lead enters the system, drastically increasing speed-to-lead.</li>
                    <li><strong>Zero-Touch Scheduling:</strong> Bidirectional calendar syncs that allow prospects to book directly onto your team's calendar based on complex routing rules.</li>
                    <li><strong>Client Onboarding:</strong> Automated contract generation, invoice dispatch, and kickoff-form delivery that provides a magical, frictionless experience for new high-ticket clients.</li>
                </ul>
                <p>By implementing these systems, we routinely save our clients <strong>over 100 hours per month</strong> in administrative overhead, allowing them to redeploy that capital into revenue-generating activities.</p>
            </>
        )
    },
    {
        title: "Market Dominance (SEO)",
        description: "Capture the demand already existing in your market. We deploy aggressive search strategies to ensure you capture high-intent leads before your competitors do.",
        icon: Globe,
        detailedContent: (
            <>
                <p>Paid ads are rented land; organic search is digital real estate. Our Market Dominance protocol secures the top positions for the highest-intent keywords in your specific B2B niche.</p>
                <h4>Technical & Strategic Execution</h4>
                <ul>
                    <li><strong>Technical SEO Supremacy:</strong> We ensure your Next.js application has perfect Core Web Vitals, instantaneous load times, and flawless semantic HTML to satisfy Google's most rigorous algorithms.</li>
                    <li><strong>Programmatic Content Hubs:</strong> We build dynamic, scalable architectures to deploy localized or industry-specific landing pages at scale without sacrificing quality.</li>
                    <li><strong>High-Authority Link Acquisition:</strong> Strategic digital PR campaigns to secure backlinks from top-tier industry publications, cementing your domain authority.</li>
                </ul>
                <p>This is a long-term compound interest strategy. Clients who commit to our SEO architecture experience a complete paradigm shift, transitioning from outbound reliance to a purely inbound, highly profitable lead flow.</p>
            </>
        )
    },
    {
        title: "Zero-Downtime Infrastructure",
        description: "Protect your revenue with enterprise-grade hosting and security. Your lead generation system stays lightning-fast, highly secure, and online 24/7/365.",
        icon: ShieldCheck,
        detailedContent: (
            <>
                <p>When your website is the engine of your business, downtime means lost revenue. We provide military-grade infrastructure to ensure your systems never fail when you need them most.</p>
                <h4>Enterprise Capabilities</h4>
                <ul>
                    <li><strong>Edge Network Deployment:</strong> Your site is distributed globally across a Vercel/Cloudflare edge network, ensuring sub-50ms response times for users anywhere in the world.</li>
                    <li><strong>DDoS & Threat Protection:</strong> Advanced Web Application Firewalls (WAF) that actively monitor and neutralize malicious bot traffic, brute force attacks, and vulnerability exploits.</li>
                    <li><strong>Automated Redundancy:</strong> Continuous daily backups and automated failover systems. If a server node goes down, another takes over instantly with zero impact on the end user.</li>
                </ul>
                <p>We provide the peace of mind that comes with knowing your digital assets are impenetrable, lightning-fast, and infinitely scalable.</p>
            </>
        )
    }
];

const containerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function Services({ isMainHeading = false }: { isMainHeading?: boolean }) {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <Section id="services" className="bg-transparent border-t border-white/5 py-24 md:py-32 relative">
            {/* Background gradient specifically for this section */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="mb-20 md:mb-24">
                    {isMainHeading ? (
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">How We Scale Your Operations</h1>
                    ) : (
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">How We Scale Your Operations</h2>
                    )}
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl tracking-tight">
                        We don't just build websites. We engineer end-to-end digital sales systems that predictably acquire high-ticket clients for your firm.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, i) => (
                        <motion.article
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            onClick={() => setSelectedService(service)}
                            className="group cursor-pointer relative p-8 rounded-3xl border border-white/5 bg-[#0a0a0c] hover:border-white/10 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
                        >
                            {/* Top Accent Glow on Hover */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-700" />
                            
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-500 mb-8 shadow-inner group-hover:scale-110">
                                    <service.icon className="w-7 h-7 text-zinc-400 group-hover:text-primary transition-colors duration-300 stroke-[1.5]" />
                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">{service.title}</h3>

                                <p className="text-zinc-400 font-light leading-relaxed text-[15px] mb-8 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors mt-auto pt-5 border-t border-white/5">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">Read Full Strategy</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-45 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </Container>

            {/* Read More Modal */}
            <ContentModal 
                isOpen={!!selectedService} 
                onClose={() => setSelectedService(null)}
                title={selectedService?.title || ""}
            >
                {selectedService?.detailedContent}
            </ContentModal>
        </Section>
    );
}

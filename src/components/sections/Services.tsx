"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
    Workflow, Smartphone, Globe,
    Layout, ShieldCheck, Zap,
    Code2, Brain, Server, Cpu, Users, Plug,
    ArrowRight
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { ContentModal } from "@/components/ui/ContentModal";

const services = [
    // ENGINEERING & AI CATEGORY
    {
        title: "Custom Software Development",
        description: "Tailored software solutions engineered to automate your business processes, integrate disparate systems, and scale your operations.",
        icon: Code2,
        category: "engineering",
        href: "/services/custom-software-development",
        detailedContent: (
            <>
                <p>Off-the-shelf software rarely fits your unique business workflows. Our Custom Software Development service builds tailored applications from the ground up to solve your specific operational challenges.</p>
                <h4>Our Engineering Focus</h4>
                <ul>
                    <li><strong>Tailored Workflows:</strong> We translate your manual business processes into efficient, automated digital workflows.</li>
                    <li><strong>Modern Tech Stacks:</strong> We build using type-safe, compiled, and scalable modern technologies (Next.js, Node.js, Go) to ensure longevity.</li>
                    <li><strong>Seamless Integration:</strong> Connecting with your existing databases, identity systems, and back-office tools.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>Our custom software solutions routinely reduce administrative overhead, eliminate manual spreadsheets, and scale business capacity without adding headcount.</p>
            </>
        )
    },
    {
        title: "AI Development",
        description: "Practical artificial intelligence and machine learning solutions including RAG, LLM integrations, and custom model training to automate workflows and decisions.",
        icon: Brain,
        category: "engineering",
        href: "/services/ai-development",
        detailedContent: (
            <>
                <p>Stop the AI hype and start seeing real business utility. We build practical AI applications that leverage large language models (LLMs) and retrieval-augmented generation (RAG) to automate manual operations.</p>
                <h4>Our Engineering Focus</h4>
                <ul>
                    <li><strong>Custom Chatbots & Assistants:</strong> Customer service bots and internal knowledge assistants trained on your private corporate databases.</li>
                    <li><strong>Document Processing:</strong> Automated data extraction from custom invoices, contracts, and transcripts.</li>
                    <li><strong>Semantic Search:</strong> Intelligent, vector-based search engines that query unstructured documents with human-like comprehension.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>AI integrations routinely automate 70-80% of customer support volume and slash hours spent on document processing and data entry down to seconds.</p>
            </>
        )
    },
    {
        title: "SaaS Development",
        description: "End-to-end multi-tenant software engineering designed for rapid validation and infinite scalability, from MVP prototyping to enterprise readiness.",
        icon: Cpu,
        category: "engineering",
        href: "/services/saas-development",
        detailedContent: (
            <>
                <p>Build software that scales. From initial validation to full-scale enterprise products, we engineer SaaS products designed to grow with your user base.</p>
                <h4>Our Engineering Focus</h4>
                <ul>
                    <li><strong>Multi-tenant Architecture:</strong> Designing secure, isolated databases and structures to support multiple corporate accounts.</li>
                    <li><strong>Billing & Subscriptions:</strong> Direct integrations with Stripe, Recurly, or Chargebee for tier management, invoicing, and usage limits.</li>
                    <li><strong>User Permissions & Security:</strong> Robust Role-Based Access Control (RBAC) and Single Sign-On (SSO) configurations.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>We build production-ready MVP systems in 8-12 weeks, enabling rapid validation and securing early-stage customer revenue.</p>
            </>
        )
    },
    {
        title: "Web Application Development",
        description: "High-performance, secure, responsive web applications built with React, Next.js, and modern TypeScript frameworks.",
        icon: Globe,
        category: "engineering",
        href: "/services/web-application-development",
        detailedContent: (
            <>
                <p>We build responsive, type-safe web applications optimized for speed, usability, and modern aesthetics.</p>
                <h4>Our Engineering Focus</h4>
                <ul>
                    <li><strong>Next.js Pre-rendering:</strong> Lightning-fast page load times using Static Site Generation (SSG) and Server-Side Rendering (SSR).</li>
                    <li><strong>Clean TypeScript Code:</strong> Maintainable, strongly typed codebases that reduce bugs and simplify future developer handovers.</li>
                    <li><strong>Core Web Vitals Optimization:</strong> Ensuring your site achieves perfect performance scores to satisfy both users and SEO algorithms.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>Modern frontend migrations reduce mobile bounce rates by up to 30% and dramatically improve user engagement and retention.</p>
            </>
        )
    },
    {
        title: "Business Automation",
        description: "Streamline your business operations by connecting your databases, CRM, scheduling, and onboarding tools into a single workflow.",
        icon: Workflow,
        category: "engineering",
        href: "/services/business-automation",
        detailedContent: (
            <>
                <p>Eliminate repetitive admin work. We build automated data pipelines and logic paths that allow your systems to talk to each other without human intervention.</p>
                <h4>Our Engineering Focus</h4>
                <ul>
                    <li><strong>Workflow Trigger Mapping:</strong> Automated notifications, intake processes, and report delivery triggered by real-time events.</li>
                    <li><strong>App Integrations:</strong> Using low-code bridges (Zapier, Make) or custom API scripts to sync tools like QuickBooks, Slack, and Google Workspace.</li>
                    <li><strong>Process Optimization:</strong> Teardown and refactoring of manual operational flows into automated state machines.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>Clients save an average of 10-20 hours per week per employee by automating data entry and repetitive operations.</p>
            </>
        )
    },
    {
        title: "CRM Development",
        description: "Tailored HubSpot, Salesforce, or custom CRM configuration and API syncing to qualify and route leads automatically.",
        icon: Users,
        category: "engineering",
        href: "/services/crm-development",
        detailedContent: (
            <>
                <p>Sync your customer lifecycle. We build custom logic pipelines within your CRM to ensure sales and support reps have unified customer data.</p>
                <h4>Our Engineering Focus</h4>
                <ul>
                    <li><strong>Custom Lead Pipelines:</strong> Scoring rules, routing paths, and automatic notifications assigned based on lead intent.</li>
                    <li><strong>CRM Database Cleaning:</strong> Removing duplicate records and establishing automated sanitization rules.</li>
                    <li><strong>Bidirectional Syncs:</strong> Connecting your website contact forms and portal actions directly to sales pipelines.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>Sales teams experience a 40% reduction in response time (speed-to-lead), directly boosting qualified appointment bookings.</p>
            </>
        )
    },
    {
        title: "API Integration",
        description: "Connecting your legacy tools, third-party databases, and modern APIs with secure, high-throughput pipelines.",
        icon: Plug,
        category: "engineering",
        href: "/services/api-integration",
        detailedContent: (
            <>
                <p>Data should flow freely. We connect disparate legacy systems, external data endpoints, and cloud tools using robust custom API pipelines.</p>
                <h4>Our Engineering Focus</h4>
                <ul>
                    <li><strong>Custom Webhook Engineering:</strong> High-speed listeners that capture and process system events instantly.</li>
                    <li><strong>REST & GraphQL APIs:</strong> Developing clean, self-documenting data interfaces for internal and external consumption.</li>
                    <li><strong>Security & Rate-limiting:</strong> Protecting your endpoints from server overload and unauthorized data access.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>API automation replaces slow file imports and batch runs with real-time, zero-error data updates across your business.</p>
            </>
        )
    },
    {
        title: "Cloud Solutions",
        description: "Secure, reliable hosting environments on AWS and Azure with automatic redundancy, backups, and edge network distribution.",
        icon: Server,
        category: "engineering",
        href: "/services/cloud-solutions",
        detailedContent: (
            <>
                <p>Build infrastructure that is bulletproof. We configure and manage secure, auto-scaling cloud clusters that keep your applications online 24/7/365.</p>
                <h4>Our Engineering Focus</h4>
                <ul>
                    <li><strong>AWS & Azure Deployments:</strong> Using containerization (Docker, Kubernetes) and serverless functions for optimized hosting costs.</li>
                    <li><strong>Global Edge Networks:</strong> Serving your front-end assets through global CDNs (Cloudflare, Vercel) for sub-50ms user latency.</li>
                    <li><strong>Security & Redundancy:</strong> Implementing active WAF threat protection, automated database backups, and rapid failover clusters.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>Our secure infrastructure setups guarantee 99.9% uptime and shield business assets from malicious attacks and outages.</p>
            </>
        )
    },

    // GROWTH & CONVERSIONS CATEGORY
    {
        title: "Authority Positioning",
        description: "We reconstruct your digital presence to instantly position you as the premium choice in your market, allowing you to close high-ticket deals with zero friction.",
        icon: Layout,
        category: "growth",
        detailedContent: (
            <>
                <p>In today&apos;s saturated B2B landscape, being &quot;better&quot; isn&apos;t enough; you must be perceived as the undeniable authority. Our Authority Positioning service completely engineers your digital presence to reflect premium market dominance.</p>
                <h4>The Methodology</h4>
                <ul>
                    <li><strong>Brand Architecture Rebuild:</strong> We strip away generic messaging and establish a distinct, high-value brand narrative that resonates exclusively with enterprise decision-makers.</li>
                    <li><strong>Social Proof Engineering:</strong> We strategically place case studies, metrics, and trust signals precisely where buyers experience the most friction.</li>
                    <li><strong>Visual Supremacy:</strong> Implementing premium design aesthetics—like dark mode glassmorphism and subtle micro-interactions—that psychologically signal high cost and high value to the user.</li>
                </ul>
                <h4>Measurable Outcomes</h4>
                <p>Clients who undergo our positioning restructure typically see a <strong>40% decrease in sales cycle length</strong>, as prospects arrive at the discovery call already convinced of the firm&apos;s elite status and capability.</p>
            </>
        )
    },
    {
        title: "Conversion Engine",
        description: "Stop paying for traffic that bounces. We ruthlessly optimize every element of your site to convert passive visitors into warm, ready-to-buy inquiries.",
        icon: Zap,
        category: "growth",
        detailedContent: (
            <>
                <p>Traffic without conversion is just an expensive vanity metric. Our Conversion Engine protocol transforms your website from a digital brochure into a highly calibrated lead generation machine.</p>
                <h4>Core Implementation</h4>
                <ul>
                    <li><strong>Frictionless Capture:</strong> We deploy advanced, progressive profiling forms that maximize capture rates without scaring away high-level executives.</li>
                    <li><strong>Behavioral Triggers:</strong> Implementing strategic exit-intent and scroll-depth triggers to present the right offer at the exact moment of peak buyer intent.</li>
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
        category: "growth",
        detailedContent: (
            <>
                <p>A successful acquisition strategy requires more than just a contact page. It requires a meticulously designed flow that qualifies, educates, and schedules prospects automatically.</p>
                <h4>System Architecture</h4>
                <ul>
                    <li><strong>Multi-Step Funnel Design:</strong> We build dedicated landing page sequences for your specific ad campaigns, ensuring perfect &quot;message match&quot; from the ad click to the final conversion.</li>
                    <li><strong>Automated Qualification:</strong> We integrate logic-based questionnaires that automatically filter out unqualified leads, ensuring your sales team only speaks to prospects with budget and intent.</li>
                    <li><strong>Seamless CRM Integration:</strong> Direct API pipelines into Salesforce, HubSpot, or GoHighLevel. Leads appear in your pipeline instantly.</li>
                </ul>
                <p>Our acquisition flows operate 24/7, acting as an elite digital sales representative that never sleeps, never takes a day off, and always delivers the perfect pitch.</p>
            </>
        )
    },
    {
        title: "Revenue Automation",
        description: "Reclaim hundreds of hours. We automate your entire client onboarding, follow-ups, and meeting scheduling so you can focus exclusively on fulfillment.",
        icon: Workflow,
        category: "growth",
        detailedContent: (
            <>
                <p>Scale breaks unoptimized systems. If your team is buried in manual admin work, you cannot grow. Our Revenue Automation service eliminates the repetitive tasks choking your agency&apos;s bandwidth.</p>
                <h4>What We Automate</h4>
                <ul>
                    <li><strong>Instant Lead Nurturing:</strong> Multi-channel follow-up sequences (Email/SMS) that trigger the second a lead enters the system, drastically increasing speed-to-lead.</li>
                    <li><strong>Zero-Touch Scheduling:</strong> Bidirectional calendar syncs that allow prospects to book directly onto your team&apos;s calendar based on complex routing rules.</li>
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
        category: "growth",
        detailedContent: (
            <>
                <p>Paid ads are rented land; organic search is digital real estate. Our Market Dominance protocol secures the top positions for the highest-intent keywords in your specific B2B niche.</p>
                <h4>Technical & Strategic Execution</h4>
                <ul>
                    <li><strong>Technical SEO Supremacy:</strong> We ensure your Next.js application has perfect Core Web Vitals, instantaneous load times, and flawless semantic HTML to satisfy Google&apos;s most rigorous algorithms.</li>
                    <li><strong>Programmatic Content Hubs:</strong> We build dynamic, scalable architectures to deploy localized or industry-specific landing pages at scale without sacrificing quality.</li>
                    <li><strong>High-Authority Link Acquisition:</strong> Strategic digital PR campaigns to secure backlinks from top-tier industry publications, cementing your domain authority.</li>
                </ul>
                <p>This is a long-term compound interest strategy. Clients experience a complete paradigm shift, transitioning from outbound reliance to a purely inbound, highly profitable lead flow.</p>
            </>
        )
    },
    {
        title: "Zero-Downtime Infrastructure",
        description: "Protect your revenue with enterprise-grade hosting and security. Your lead generation system stays lightning-fast, highly secure, and online 24/7/365.",
        icon: ShieldCheck,
        category: "growth",
        detailedContent: (
            <>
                <p>When your website is the engine of your business, downtime means lost revenue. We provide military-grade infrastructure to ensure your systems never fail when you need them most.</p>
                <h4>Enterprise Capabilities</h4>
                <ul>
                    <li><strong>Edge Network Deployment:</strong> Your site is distributed globally across an edge network, ensuring sub-50ms response times for users anywhere in the world.</li>
                    <li><strong>DDoS & Threat Protection:</strong> Advanced Web Application Firewalls (WAF) that actively monitor and neutralize malicious bot traffic, brute force attacks, and vulnerability exploits.</li>
                    <li><strong>Automated Redundancy:</strong> Continuous daily backups and automated failover systems. If a server node goes down, another takes over instantly with zero impact on the end user.</li>
                </ul>
                <p>We provide the peace of mind that comes with knowing your digital assets are impenetrable, lightning-fast, and infinitely scalable.</p>
            </>
        )
    }
];

const containerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function Services({ isMainHeading = false }: { isMainHeading?: boolean }) {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [activeTab, setActiveTab] = useState<"engineering" | "growth">("engineering");

    const filteredServices = services.filter(service => service.category === activeTab);

    return (
        <Section id="services" className="bg-transparent border-t border-white/5 py-24 md:py-32 relative">
            {/* Background gradient specifically for this section */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="mb-16">
                    {isMainHeading ? (
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">Capabilities & Services</h1>
                    ) : (
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">Capabilities & Services</h2>
                    )}
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl tracking-tight">
                        We build high-performance custom applications, practical artificial intelligence tools, and automated operational pipelines for growing businesses.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex p-1.5 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-xl">
                        <button
                            onClick={() => setActiveTab("engineering")}
                            className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                                activeTab === "engineering"
                                    ? "bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Technical & AI Solutions
                        </button>
                        <button
                            onClick={() => setActiveTab("growth")}
                            className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                                activeTab === "growth"
                                    ? "bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Growth & Conversion Systems
                        </button>
                    </div>
                </div>

                <motion.div
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredServices.map((service) => (
                        <motion.article
                            key={service.title}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            onClick={() => setSelectedService(service)}
                            className="group cursor-pointer relative p-8 rounded-3xl border border-primary/20 bg-[#0a0a0c] hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] flex flex-col overflow-hidden"
                        >
                            {/* Top Accent Glow on Hover */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-700" />
                            
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-500 mb-8 shadow-inner group-hover:scale-110">
                                    <service.icon className="w-7 h-7 text-primary transition-colors duration-300 stroke-[1.5]" />
                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">{service.title}</h3>

                                <p className="text-zinc-400 font-light leading-relaxed text-[15px] mb-8 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors mt-auto pt-5 border-t border-primary/20">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">Read Details</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-45 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-24 pt-24 border-t border-primary/20"
                >
                    <div className="max-w-3xl">
                        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                            Ready to discuss your engineering needs?
                        </h3>
                        <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                            Whether you need a custom SaaS architecture, AI workflows, or conversion systems, we configure scalable technical infrastructure designed exclusively to solve your operational bottlenecks.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)]"
                        >
                            Book a Strategy Consultation
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </Container>

            {/* Read More Modal */}
            <ContentModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={selectedService?.title || ""}
            >
                <div className="space-y-6">
                    {selectedService?.detailedContent}
                    {selectedService?.href && (
                        <div className="pt-6 mt-6 border-t border-white/5 flex justify-end">
                            <a
                                href={selectedService.href}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                            >
                                Explore Service Page
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    )}
                </div>
            </ContentModal>
        </Section>
    );
}

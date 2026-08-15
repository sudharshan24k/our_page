"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion, Variants } from "framer-motion";
import { Shield, Lock, FileText, Server, Database, Activity, Globe, FileCheck } from "lucide-react";

const securityFeatures = [
    {
        icon: Lock,
        title: "End-to-End Encryption",
        description: "AES-256 encryption at rest and TLS 1.3 in transit. Your corporate data and intellectual property are cryptographically secured at all times."
    },
    {
        icon: FileText,
        title: "Strict NDAs & IP Ownership",
        description: "We sign comprehensive Non-Disclosure Agreements before seeing your codebase. You retain 100% ownership of all intellectual property and custom code."
    },
    {
        icon: Shield,
        title: "Role-Based Access Control",
        description: "Granular RBAC systems ensure that our engineers only have access to the specific repositories and environments necessary for their sprint tasks."
    },
    {
        icon: Database,
        title: "Automated Backups",
        description: "Daily automated snapshots and geographically distributed backups ensure zero data loss in the event of an infrastructure anomaly."
    },
    {
        icon: Activity,
        title: "Disaster Recovery",
        description: "Failover architectures and comprehensive disaster recovery protocols designed to maintain our 99.9% SLA guarantees."
    },
    {
        icon: Globe,
        title: "GDPR & CCPA Compliant",
        description: "Data architectures designed with privacy-by-default, ensuring full compliance with European and Californian data protection regulations."
    },
    {
        icon: FileCheck,
        title: "HIPAA Compliant Deployments",
        description: "For our healthcare clients, we deploy infrastructure in private, HIPAA-eligible cloud environments (AWS GovCloud / Azure Health)."
    },
    {
        icon: Server,
        title: "Private Cloud & VPCs",
        description: "We deploy applications in isolated Virtual Private Clouds (VPCs) rather than shared hosting, mitigating lateral movement risks."
    }
];

const containerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.05 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export function EnterpriseSecurity() {
    return (
        <Section className="bg-[#050505] border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                        <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6">
                        Enterprise-Grade Security
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                        We don't compromise on data protection. Our engineering practices are built around strict compliance frameworks and zero-trust architectures to protect your most valuable digital assets.
                    </p>
                </div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {securityFeatures.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div 
                                key={idx}
                                variants={itemVariants}
                                className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.2)]"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                                    <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </Section>
    );
}

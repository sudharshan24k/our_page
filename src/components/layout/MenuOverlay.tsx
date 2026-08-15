"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import logoImg from "../../../public/eduratech_logo_mark.png";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const navLinks = [
    { label: "Why Us", href: "/why-eduratech" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Methodology", href: "/methodology" },
    { label: "Technology", href: "/technology" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Cost Calculator", href: "/project-cost-calculator" }
];

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[60] bg-background text-foreground overflow-hidden"
                >
                    <Container className="h-full flex flex-col relative py-8">
                        {/* Header within Overlay */}
                        <div className="flex justify-between items-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Link href="/" onClick={onClose} className="flex items-center gap-2.5 text-xl font-bold tracking-tighter">
                                    <Image src={logoImg} alt="Edura Technologies Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                                    <span>Edura Technologies</span>
                                </Link>
                            </motion.div>
                            <button
                                aria-label="Close mobile menu"
                                onClick={onClose}
                                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase p-2 -mr-2"
                            >
                                <X className="w-6 h-6" />
                                CLOSE
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex-1 flex flex-col justify-center my-6 overflow-y-auto">
                            <nav className="flex flex-col gap-3 md:gap-5">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.05 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight hover:text-primary transition-colors py-1"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>

                        {/* Footer within Overlay */}
                        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-t border-border pt-8">
                            <div className="space-y-2">
                                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Inquiries</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                    <p className="text-lg">hello@eduratech.com</p>
                                    <span className="hidden sm:inline text-zinc-700">|</span>
                                    <p className="text-lg">support@eduratech.com</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <a 
                                    href="https://www.linkedin.com/showcase/eduratech/about/?viewAsMember=true" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 first:ml-0"
                                >
                                    LinkedIn
                                </a>
                                <a 
                                    href="https://www.instagram.com/edura_tech/?hl=en" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 first:ml-0"
                                >
                                    Instagram
                                </a>
                            </div>
                        </div>

                        {/* Vertical Accent Line */}
                        <div className="absolute left-12 top-0 bottom-0 w-[px] bg-border/50 hidden md:block" />
                    </Container>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

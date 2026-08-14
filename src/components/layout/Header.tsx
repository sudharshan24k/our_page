"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Smart Header Logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                setIsHidden(true);
            } else {
                // Scrolling up
                setIsHidden(false);
            }
            
            setIsScrolled(currentScrollY > 20);
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                    isScrolled 
                        ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
                        : "bg-transparent py-5",
                    isHidden ? "-translate-y-full" : "translate-y-0"
                )}
            >
                <Container className="flex items-center justify-between">
                    <Link href="/" className="text-lg font-semibold tracking-tight text-white hover:text-primary transition-colors">
                        Edura Technologies
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-zinc-400">
                        {[
                            { label: "Why Edura Technologies", href: "/why-eduratech" },
                            { label: "How We Work", href: "/how-we-work" },
                            { label: "Services", href: "/services" },
                            { label: "Case Studies", href: "/case-studies" },
                            { label: "Methodology", href: "/methodology" },
                            { label: "Technology", href: "/technology" },
                            { label: "Industries", href: "/industries" },
                            { label: "Insights", href: "/insights" }
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-white transition-colors relative group py-2"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        {/* Mobile Menu Trigger */}
                        <button
                            aria-label="Open mobile menu"
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden flex flex-col gap-1.5 items-end text-zinc-400 hover:text-white transition-colors p-2 -mr-2"
                        >
                            <span className="w-6 h-0.5 bg-current"></span>
                            <span className="w-6 h-0.5 bg-current"></span>
                        </button>

                        <Magnetic>
                            <Link href="/contact" className="hidden md:flex items-center gap-2 text-sm font-medium text-white px-6 py-2 rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.7)] transition-all">
                                Claim Free Audit
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Magnetic>
                    </div>
                </Container>
            </header>
        </>
    );
}

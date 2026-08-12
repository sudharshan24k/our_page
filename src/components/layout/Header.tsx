"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { ArrowRight } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                    isScrolled 
                        ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
                        : "bg-transparent py-5"
                )}
            >
                <Container className="flex items-center justify-between">
                    <Link href="/" className="text-lg font-semibold tracking-tight text-white hover:text-primary transition-colors">
                        Edura Technologies
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-zinc-400">
                        {["Services", "Case Studies", "Methodology", "Values", "Technology", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        {/* Mobile Menu Trigger */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden flex flex-col gap-1.5 items-end text-zinc-400 hover:text-white transition-colors"
                        >
                            <span className="w-6 h-0.5 bg-current"></span>
                            <span className="w-6 h-0.5 bg-current"></span>
                        </button>

                        <Link href="/contact" className="hidden md:flex items-center gap-2 text-sm font-medium text-white px-6 py-2 rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.7)] transition-all">
                            Claim Free Audit
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </Container>
            </header>
        </>
    );
}

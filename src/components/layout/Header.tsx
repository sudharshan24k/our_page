"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { MenuOverlay } from "@/components/layout/MenuOverlay";

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
                        ? "bg-white/70 backdrop-blur-xl border-b border-zinc-200/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
                        : "bg-transparent py-5"
                )}
            >
                <Container className="flex items-center justify-between">
                    <Link href="/" className="text-lg font-semibold tracking-tight text-foreground/90 hover:text-foreground">
                        Edura Technologies
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-muted-foreground/80">
                        {["Services", "Methodology", "Values", "Technology", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-foreground transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        {/* Mobile Menu Trigger */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden flex flex-col gap-1.5 items-end text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <span className="w-6 h-0.5 bg-current"></span>
                            <span className="w-6 h-0.5 bg-current"></span>
                        </button>

                        <Link href="#contact" className="hidden md:block text-sm font-medium hover:text-foreground transition-colors px-6 py-2 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10">
                            Inquire
                        </Link>
                    </div>
                </Container>
            </header>
        </>
    );
}

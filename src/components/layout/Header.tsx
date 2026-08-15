"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import Image from "next/image";
import logoImg from "../../../public/eduratech_logo_mark.png";

export function Header() {
    const pathname = usePathname();
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
                <Container width="wide" className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white hover:text-primary transition-colors whitespace-nowrap">
                        <Image src={logoImg} alt="Edura Technologies Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                        <span>Edura Technologies</span>
                    </Link>
                    <nav className="hidden xl:flex items-center gap-4 xl:gap-8 text-sm xl:text-[15px] font-medium text-zinc-200">
                        {[
                            { label: "Why Us", href: "/why-eduratech" },
                            { label: "How We Work", href: "/how-we-work" },
                            { label: "Services", href: "/services" },
                            { label: "Case Studies", href: "/case-studies" },
                            { label: "Methodology", href: "/methodology" },
                            { label: "Technology", href: "/technology" },
                            { label: "Industries", href: "/industries" },
                            { label: "Insights", href: "/insights" }
                        ].map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={cn(
                                        "transition-colors relative group py-2 whitespace-nowrap",
                                        isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
                                    )}
                                >
                                    {item.label}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full",
                                        isActive ? "w-full" : "w-0"
                                    )}></span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-6">
                        {/* Mobile Menu Trigger */}
                        <button
                            aria-label="Open mobile menu"
                            onClick={() => setIsMenuOpen(true)}
                            className="xl:hidden flex flex-col gap-1.5 items-end text-zinc-300 hover:text-white transition-colors p-2 -mr-2"
                        >
                            <span className="w-6 h-0.5 bg-current"></span>
                            <span className="w-6 h-0.5 bg-current"></span>
                        </button>

                        <Link href="/contact" className="hidden xl:flex items-center gap-2 text-sm font-medium text-white px-6 py-2 rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.7)] transition-all whitespace-nowrap">
                            Claim Free Audit
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </Container>
            </header>
        </>
    );
}

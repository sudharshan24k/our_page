import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/eduratech_logo_mark.png";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] border-t border-primary/20 pt-16 pb-8 text-zinc-500 text-sm relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                <Image src={logoImg} alt="Edura Technologies Logo" width={637} height={470} className="w-10 h-auto object-contain" />
                            </div>
                            <span className="font-bold text-white text-xl tracking-tight">Edura Technologies</span>
                        </div>
                        <p className="text-zinc-400 leading-relaxed max-w-sm">
                            We partner with visionary enterprises to engineer scalable, high-performance digital systems that drive measurable growth and predictability.
                        </p>
                        <div className="flex flex-col gap-1 mt-2">
                            <span className="font-semibold text-white text-xs uppercase tracking-widest mb-1">Global Headquarters</span>
                            <span className="text-zinc-400">Mumbai, Maharashtra</span>
                            <span className="text-zinc-400">India</span>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2">Company</h4>
                        <Link href="/why-eduratech" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Why Choose EduraTech
                        </Link>
                        <Link href="/methodology" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Proven Methodology
                        </Link>
                        <Link href="/values" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Our Values
                        </Link>
                        <Link href="/contact" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Contact Us
                        </Link>
                    </div>

                    {/* Expertise Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2">Expertise</h4>
                        <Link href="/services" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Explore All Services
                        </Link>
                        <Link href="/industries" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Industries We Serve
                        </Link>
                        <Link href="/case-studies" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Case Studies Portfolio
                        </Link>
                        <Link href="/project-cost-calculator" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Cost Calculator
                        </Link>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2">Legal</h4>
                        <Link href="/privacy" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Privacy Policy Terms
                        </Link>
                        <Link href="/terms" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Terms of Service Agreement
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2">Connect</h4>
                        <a href="https://www.linkedin.com/showcase/eduratech/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> LinkedIn
                        </a>
                        <a href="https://www.instagram.com/edura_tech/?hl=en" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-primary group-hover:w-2 transition-all duration-300"></span> Instagram
                        </a>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-zinc-500 font-medium text-xs flex flex-col gap-1">
                        <span>&copy; {year} Edura Technologies. All rights reserved.</span>
                        <span className="text-zinc-600">Edura Technologies is a wing of Edura Global Solutions (<a href="https://eduraglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">eduraglobal.com</a>)</span>
                    </div>
                    <div className="flex gap-4 sm:gap-6">
                        <a href="mailto:hello@eduratech.com" className="text-zinc-500 hover:text-white transition-colors text-xs font-medium">hello@eduratech.com</a>
                        <span className="text-zinc-700 text-xs font-medium">|</span>
                        <a href="mailto:support@eduratech.com" className="text-zinc-500 hover:text-white transition-colors text-xs font-medium">support@eduratech.com</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

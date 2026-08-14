import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/eduratech_logo_mark.png";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 text-zinc-500 text-sm">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-6">
                    
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <Image src={logoImg} alt="Edura Technologies Logo" width={24} height={24} className="w-6 h-6 object-contain" />
                            <span className="font-semibold text-white text-base">Edura Technologies</span>
                        </div>
                        <div className="flex flex-col gap-1 text-xs">
                            <span className="font-medium text-zinc-400">USA Headquarters</span>
                            <span>100 Market Street, Suite 400</span>
                            <span>San Francisco, CA 94105, United States</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                            <Link href="/services" className="hover:text-white transition-colors p-2 -ml-2">Services</Link>
                            <Link href="/case-studies" className="hover:text-white transition-colors p-2">Work</Link>
                            <Link href="/values" className="hover:text-white transition-colors p-2">About</Link>
                        </div>
                        <div className="text-zinc-600">
                            &copy; {year} Edura Technologies USA. All rights reserved.
                        </div>
                    </div>

                    <div className="flex flex-col md:items-end">
                        <Link href="/contact" className="hover:text-white transition-colors p-2 -mr-2">Contact Us</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors p-2 -mr-2">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors p-2 -mr-2">Terms of Service</Link>
                    </div>

                </div>
            </Container>
        </footer>
    );
}

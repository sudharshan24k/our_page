import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 text-zinc-500 text-sm">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-6">
                    
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-zinc-300">USA Headquarters</span>
                        <span>100 Market Street, Suite 400</span>
                        <span>San Francisco, CA 94105, United States</span>
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
                        <Link href="#" className="hover:text-white transition-colors p-2 -mr-2">Privacy Policy</Link>
                    </div>

                </div>
            </Container>
        </footer>
    );
}

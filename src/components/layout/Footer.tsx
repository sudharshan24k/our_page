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
                        <div className="flex items-center gap-8">
                            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                            <Link href="/case-studies" className="hover:text-white transition-colors">Work</Link>
                            <Link href="/values" className="hover:text-white transition-colors">About</Link>
                        </div>
                        <div className="text-zinc-600">
                            &copy; {year} Edura Technologies USA. All rights reserved.
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:items-end">
                        <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>

                </div>
            </Container>
        </footer>
    );
}

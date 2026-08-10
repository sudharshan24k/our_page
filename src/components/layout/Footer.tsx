import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 text-zinc-500 text-sm">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Services</Link>
                        <Link href="#" className="hover:text-white transition-colors">Work</Link>
                        <Link href="#" className="hover:text-white transition-colors">About</Link>
                    </div>

                    <div className="text-zinc-600">
                        &copy; {year} Edura Technologies. All rights reserved.
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="mailto:contact@neocipher.com" className="hover:text-white transition-colors">Contact</Link>
                    </div>

                </div>
            </Container>
        </footer>
    );
}

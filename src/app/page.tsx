import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Reveal width="100%">
        <Hero />
      </Reveal>

      <Reveal width="100%">
        <Testimonials />
      </Reveal>

      <div className="py-24 flex justify-center">
        <Link href="/services" className="group inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
          Explore Our Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
}

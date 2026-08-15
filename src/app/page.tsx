import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { WhyUs } from "@/components/sections/WhyUs";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software & AI Solutions",
  description: "Edura Technologies builds custom AI, automation, and software to help US businesses secure high-ticket clients and scale.",
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
        <Problems />
      </Reveal>

      <Reveal width="100%">
        <WhyUs />
      </Reveal>

      <Reveal width="100%">
        <SelectedWork />
      </Reveal>

      <Reveal width="100%">
        <Testimonials />
      </Reveal>

      <Reveal width="100%">
        <Contact />
      </Reveal>
    </main>
  );
}

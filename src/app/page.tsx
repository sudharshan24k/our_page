import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reveal } from "@/components/ui/Reveal";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const SelectedWork = dynamic(() => import("@/components/sections/SelectedWork").then(mod => mod.SelectedWork));
const GlobalDelivery = dynamic(() => import("@/components/sections/GlobalDelivery").then(mod => mod.GlobalDelivery));
const EnterpriseSecurity = dynamic(() => import("@/components/sections/EnterpriseSecurity").then(mod => mod.EnterpriseSecurity));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));

export const metadata: Metadata = {
  title: "Custom Software Development & AI Automation | EduraTech",
  description: "Edura Technologies builds custom software, AI automation, and web applications designed to scale your digital growth and streamline operations.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Edura Technologies", "url": "https://www.eduratech.com", "potentialAction": {"@type": "SearchAction", "target": "https://www.eduratech.com/search?q={search_term_string}", "query-input": "required name=search_term_string"}}) }}
      />
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
        <GlobalDelivery />
      </Reveal>

      <Reveal width="100%">
        <EnterpriseSecurity />
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

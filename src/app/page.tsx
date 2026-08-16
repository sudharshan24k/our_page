import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { WhyUs } from "@/components/sections/WhyUs";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { GlobalDelivery } from "@/components/sections/GlobalDelivery";
import { EnterpriseSecurity } from "@/components/sections/EnterpriseSecurity";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software & AI Automation | EduraTech",
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
      <div dangerouslySetInnerHTML={{ __html: `<script src="https://cdn-in.pagesense.io/js/eduratechnologies/4b485abf4fd1470b97e7ca5f0eae8283.js"></script>` }} />
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

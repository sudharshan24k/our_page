import { Services } from "@/components/sections/Services";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Enterprise Digital Solutions",
  description: "Discover our suite of B2B tech services including Authority Positioning, Conversion Engine optimization, Revenue Automation, and Zero-Downtime Infrastructure.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "B2B Technical & Digital Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Edura Technologies",
      "url": "https://eduratechnologies.com"
    },
    "description": "Enterprise digital systems, authority positioning, and conversion optimization."
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal width="100%">
        <Services isMainHeading={true} />
      </Reveal>
    </main>
  );
}

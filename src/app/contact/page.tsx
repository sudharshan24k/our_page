import { Problems } from "@/components/sections/Problems";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Request a Strategy Call",
  description: "Ready to scale your enterprise digital system? Contact Edura Technologies to request a free growth audit and strategy consultation today.",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Edura Technologies",
    "url": "https://eduratechnologies.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal width="100%">
        <Problems />
      </Reveal>
      <Reveal width="100%">
        <Contact />
      </Reveal>
    </main>
  );
}

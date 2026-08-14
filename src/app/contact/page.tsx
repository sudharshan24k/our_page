import { Problems } from "@/components/sections/Problems";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
  title: "Contact Us | Free Custom Software & AI Audit",
  description: "Contact Edura Technologies to request your free business strategy audit. Get custom AI systems and custom software built to scale your business.",
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
        <Contact isPage />
      </Reveal>
      <Reveal width="100%">
        <Problems />
      </Reveal>
    </main>
  );
}

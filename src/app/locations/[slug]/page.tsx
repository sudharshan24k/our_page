import { LocationHero } from "@/components/sections/LocationHero";
import { Problems } from "@/components/sections/Problems";
import { WhyUs } from "@/components/sections/WhyUs";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import { TARGET_LOCATIONS, getLocationBySlug } from "@/lib/data/locations";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TARGET_LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `Custom Software & AI Development in ${location.city}, ${location.state} | EduraTech`,
    description: `Leading custom software, AI automation, and web application development company serving small-to-medium businesses in ${location.city}, ${location.state}.`,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Edura Technologies - ${location.city}`,
    "url": `https://www.eduratech.com/locations/${location.slug}`,
    "description": `Custom software and AI automation development for businesses in ${location.city}, ${location.state}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": location.state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": location.city
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal width="100%">
        <LocationHero city={location.city} state={location.state} />
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
        <Contact />
      </Reveal>
    </main>
  );
}

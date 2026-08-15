import { Technology } from "@/components/sections/Technology";
import { Focus } from "@/components/sections/Focus";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/technology",
  },
  title: "Technology Stack | Next.js & Modern Web",
  description: "Explore the cutting-edge tech stack we use to build enterprise digital systems, including Next.js, React, Tailwind CSS, and edge computing.",
};

export default function TechnologyPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <Technology isPage />
      </Reveal>
      <Reveal width="100%">
        <Focus />
      </Reveal>
    </main>
  );
}

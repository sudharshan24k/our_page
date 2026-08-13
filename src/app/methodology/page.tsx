import { HowWeWork } from "@/components/sections/HowWeWork";
import { EngagementModel } from "@/components/sections/Engagement";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Methodology | How We Build Digital Systems",
  description: "Learn about our proven framework for engineering high-conversion digital systems. We focus on transparency, rigorous testing, and measurable ROI.",
};

export default function MethodologyPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <HowWeWork />
      </Reveal>
      <Reveal width="100%">
        <EngagementModel />
      </Reveal>
    </main>
  );
}

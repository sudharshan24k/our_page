import { Values } from "@/components/sections/Values";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Values | What Drives Us",
  description: "Read about the core values that drive our agency, from uncompromising quality to data-driven decision making and long-term partnership.",
};

export default function ValuesPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <Values />
      </Reveal>
    </main>
  );
}

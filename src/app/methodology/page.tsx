import { HowWeWork } from "@/components/sections/HowWeWork";
import { EngagementModel } from "@/components/sections/Engagement";
import { Reveal } from "@/components/ui/Reveal";

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

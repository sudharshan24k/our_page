import { Technology } from "@/components/sections/Technology";
import { Focus } from "@/components/sections/Focus";
import { Reveal } from "@/components/ui/Reveal";

export default function TechnologyPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <Technology />
      </Reveal>
      <Reveal width="100%">
        <Focus />
      </Reveal>
    </main>
  );
}

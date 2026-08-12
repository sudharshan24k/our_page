import { Values } from "@/components/sections/Values";
import { Reveal } from "@/components/ui/Reveal";

export default function ValuesPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <Values />
      </Reveal>
    </main>
  );
}

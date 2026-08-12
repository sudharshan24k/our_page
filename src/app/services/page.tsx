import { Services } from "@/components/sections/Services";
import { Reveal } from "@/components/ui/Reveal";

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <Services />
      </Reveal>
    </main>
  );
}

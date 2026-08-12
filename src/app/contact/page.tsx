import { Problems } from "@/components/sections/Problems";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <Problems />
      </Reveal>
      <Reveal width="100%">
        <Contact />
      </Reveal>
    </main>
  );
}

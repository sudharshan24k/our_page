import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

import { Focus } from "@/components/sections/Focus";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { EngagementModel } from "@/components/sections/Engagement";
import { Technology } from "@/components/sections/Technology";
import { Problems } from "@/components/sections/Problems";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Values } from "@/components/sections/Values";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main>
      <Reveal width="100%">
        <Hero />
      </Reveal>

      <Reveal width="100%">
        <Testimonials />
      </Reveal>

      <Reveal width="100%">
        <Services />
      </Reveal>

      <Reveal width="100%">
        <Focus />
      </Reveal>

      <Reveal width="100%">
        <HowWeWork />
      </Reveal>

      <Reveal width="100%">
        <Values />
      </Reveal>

      <Reveal width="100%">
        <EngagementModel />
      </Reveal>

      <Reveal width="100%">
        <Technology />
      </Reveal>

      <Reveal width="100%">
        <Problems />
      </Reveal>

      <Reveal width="100%">
        <Contact />
      </Reveal>
    </main>
  );
}

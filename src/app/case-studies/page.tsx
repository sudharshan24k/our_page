import { CaseStudies } from "@/components/sections/CaseStudies";
import { Reveal } from "@/components/ui/Reveal";

export default function CaseStudiesPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <CaseStudies />
      </Reveal>
    </main>
  );
}

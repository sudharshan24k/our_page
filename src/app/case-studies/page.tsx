import { CaseStudies } from "@/components/sections/CaseStudies";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Featured Work",
  description: "Explore our portfolio of successful B2B tech implementations, showcasing proven ROI, lead velocity improvements, and robust digital architectures.",
};

export default function CaseStudiesPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <CaseStudies isMainHeading={true} />
      </Reveal>
    </main>
  );
}

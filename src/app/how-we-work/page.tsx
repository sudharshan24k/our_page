import { Reveal } from "@/components/ui/Reveal";
import { EduraTechProcess } from "@/components/sections/EduraTechProcess";

export const metadata = {
  alternates: {
    canonical: "/how-we-work",
  },
    title: "How We Work | Edura Technologies Process",
    description: "Learn about Edura Technologies' proven development process, from discovery through long-term support and growth."
};

export default function HowWeWorkPage() {
    return (
        <main>
            <Reveal width="100%">
                <EduraTechProcess />
            </Reveal>
        </main>
    );
}

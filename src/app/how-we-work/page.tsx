import { Reveal } from "@/components/ui/Reveal";
import { EduraTechProcess } from "@/components/sections/EduraTechProcess";

export const metadata = {
    title: "How We Work | EduraTech Process",
    description: "Learn about EduraTech's proven development process, from discovery through long-term support and growth."
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

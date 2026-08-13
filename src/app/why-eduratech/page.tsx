import { Reveal } from "@/components/ui/Reveal";
import { WhyEduraTech } from "@/components/sections/WhyEduraTech";

export const metadata = {
    title: "Why EduraTech | Strategic Technology Solutions",
    description: "Discover why businesses choose EduraTech for strategic technology solutions, modern engineering, and long-term partnerships."
};

export default function WhyEduraTechPage() {
    return (
        <main>
            <Reveal width="100%">
                <WhyEduraTech />
            </Reveal>
        </main>
    );
}

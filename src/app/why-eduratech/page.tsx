import { Reveal } from "@/components/ui/Reveal";
import { WhyEduraTech } from "@/components/sections/WhyEduraTech";

export const metadata = {
  alternates: {
    canonical: "/why-eduratech",
  },
    title: "Why Edura Technologies | Strategic Technology Solutions",
    description: "Discover why businesses choose Edura Technologies for strategic technology solutions, modern engineering, and long-term partnerships."
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

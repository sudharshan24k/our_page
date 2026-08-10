import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Check } from "lucide-react";

const trustItems = [
    "We communicate constraints early and clearly",
    "We avoid overengineering while protecting critical paths",
    "We prioritize long-term stability over short-term speed",
    "We design systems that other teams can understand and extend",
    "We treat delivery as the beginning of responsibility, not the end"
];

export function WhyClientsTrustUs() {
    return (
        <Section className="bg-background text-foreground border-t border-border py-24 md:py-32">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="flex-1 lg:max-w-[45%]">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6">Why Clients Choose Us</h2>
                        <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                            We bridge the gap between business objectives and engineering excellence.
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="bg-muted/30 border border-border p-8 md:p-10 lg:p-12">
                            <ul className="space-y-6">
                                {trustItems.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-foreground" />
                                        </div>
                                        <span className="text-foreground font-light leading-relaxed text-[15px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="pt-8 text-zinc-500 text-[15px] leading-relaxed italic">
                                Our focus is always on systems that continue to perform after launch.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

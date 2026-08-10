import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function WhyUs() {
    return (
        <Section className="bg-background">
            <Container>
                <h2 className="text-3xl font-medium tracking-tight mb-20 text-balance">Why leading enterprises choose us</h2>
                <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
                    <div className="space-y-4 border-t border-border/40 pt-4">
                        <h3 className="text-lg font-medium text-foreground">Principal Talent</h3>
                        <p className="text-muted-foreground leading-relaxed text-[15px]">You work directly with the engineers building your system. No middlemen, no translation layers. Just pure execution.</p>
                    </div>
                    <div className="space-y-4 border-t border-border/40 pt-4">
                        <h3 className="text-lg font-medium text-foreground">Complex Systems</h3>
                        <p className="text-muted-foreground leading-relaxed text-[15px]">We specialize in high-load, business-critical environments where failure is not an option and precision is paramount.</p>
                    </div>
                    <div className="space-y-4 border-t border-border/40 pt-4">
                        <h3 className="text-lg font-medium text-foreground">Ownership</h3>
                        <p className="text-muted-foreground leading-relaxed text-[15px]">We take full responsibility for the technical outcome. From the first architectural diagram to the final production deployment.</p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

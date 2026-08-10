import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Philosophy() {
    return (
        <Section className="bg-background">
            <Container width="narrow">
                <h2 className="sr-only">Our Philosophy</h2>
                <div className="space-y-12 text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
                    <p>
                        <strong className="text-foreground font-medium">Business first.</strong> We begin every engagement by understanding the economic drivers of your project. Technology is a lever for value, not an end in itself.
                    </p>
                    <hr className="border-border/40 w-16" />
                    <p>
                        <strong className="text-foreground font-medium">Rigorous standards.</strong> We apply enterprise-grade governance, security strategies, and scalability patterns from the start. We do not incur technical debt that we aren’t willing to service.
                    </p>
                    <hr className="border-border/40 w-16" />
                    <p>
                        <strong className="text-foreground font-medium">Long-term vision.</strong> We build systems designed to outlive their initial specifications. Maintainability and documentation are core deliverables, not afterthoughts.
                    </p>
                </div>
            </Container>
        </Section>
    );
}

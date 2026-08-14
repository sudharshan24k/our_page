import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Experience() {
    return (
        <Section id="methodology" className="bg-transparent border-t border-primary/20">
            <Container>
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-medium tracking-tight mb-6">Credibility & Experience</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We are not an agency. We are a collective of senior engineers with over 7 years of experience in top-tier multinational corporations. We don't just write code; we architect solutions that handle millions of transactions, secure sensitive data, and scale effortlessly.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <div className="group border-l-2 border-primary/30 pl-6 hover:border-primary/60 transition-all duration-300">
                            <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">Senior-Only Talent</h3>
                            <p className="text-muted-foreground">No juniors, no learning on the job. Direct access to experts who have solved these problems before.</p>
                        </div>
                        <div className="group border-l-2 border-primary/30 pl-6 hover:border-primary/60 transition-all duration-300">
                            <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">Production-Grade</h3>
                            <p className="text-muted-foreground">Systems built for reliability, observability, and long-term maintainability from Day 1.</p>
                        </div>
                        <div className="group border-l-2 border-primary/30 pl-6 hover:border-primary/60 transition-all duration-300">
                            <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">Business Aligned</h3>
                            <p className="text-muted-foreground">Technical decisions driven by business goals, not hype or trends.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

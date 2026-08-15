import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const metrics = [
    { label: "Average Experience", value: "7+ Years" },
    { label: "Systems Architected", value: "20+" },
    { label: "Uptime Delivered", value: "99.99%" },
    { label: "Client Retention", value: "100%" },
];

export function Metrics() {
    return (
        <Section className="border-b border-border/40 py-16 md:py-24">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="space-y-2">
                            <div className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
                                {metric.value}
                            </div>
                            <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

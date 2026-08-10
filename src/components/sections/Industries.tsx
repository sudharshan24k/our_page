import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const industries = [
    "Accounting Firms",
    "Tax Consultants",
    "Financial Advisors",
    "Law Firms",
    "Estate Agencies",
    "Consulting Firms",
];

export function Industries() {
    return (
        <Section className="border-t border-border/40">
            <Container>
                <div className="max-w-4xl">
                    <h2 className="text-3xl font-medium tracking-tight mb-16">Industry Experience</h2>
                    <div className="flex flex-wrap gap-x-12 gap-y-8">
                        {industries.map((industry) => (
                            <span key={industry} className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground/40 hover:text-foreground transition-colors duration-500 cursor-default tracking-tight">
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}

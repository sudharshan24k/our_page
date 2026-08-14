import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/insights/ai-for-small-business",
  },
  title: "AI for Small Business: Practical Guide 2024 - Real Use Cases - EduraTech",
  description: "How can small businesses use AI? Real use cases: customer support, document processing, content creation, workflow automation. Cost and ROI expectations.",
  openGraph: {
    title: "AI for Small Business: Practical Use Cases - EduraTech",
    description: "Stop the hype. Here's what AI actually does for small businesses. Real use cases and realistic ROI timelines.",
    url: "https://eduratech.com/insights/ai-for-small-business",
  },
};

export default function AIForSmallBusiness() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent min-h-[60vh] flex items-center pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-sm font-semibold text-primary">AI Guide for Business</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                AI for Small Business: Stop the Hype, Start the Results
              </h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                Practical AI use cases for small businesses. What actually works. What doesn't. Real ROI timelines.
              </p>
              <div className="flex gap-4 text-sm text-zinc-400">
                <span>August 2024</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                AI is Already Here. Most of It's Not What You Think.
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                AI isn't robots replacing your team. It's software that makes your people more productive. Here are the AI tools that actually work for small businesses right now.
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                7 AI Use Cases That Actually Deliver ROI
              </h2>
              <div className="space-y-8">
                {[
                  {
                    use: "Customer Support Chatbots",
                    how: "AI-powered chatbots answer 70-80% of customer questions. Humans handle complex issues. Available 24/7 with no additional staff.",
                    roi: "ROI: 3-6 months (saves $30K-$50K/year in support staff)",
                    cost: "$1K-$5K setup + $500-$1K/month",
                    readiness: "High - most CRM systems have this built-in"
                  },
                  {
                    use: "Document Processing & Data Entry",
                    how: "AI extracts data from PDFs, images, forms. Automatically populates databases. Eliminates 80% of manual data entry.",
                    roi: "ROI: 2-4 months (saves 10-20 hours/week)",
                    cost: "$5K-$15K implementation + $100-$300/month",
                    readiness: "High - many cloud services offer this"
                  },
                  {
                    use: "Content Generation",
                    how: "AI writes product descriptions, social media posts, emails. Much faster than manual writing. Requires light editing.",
                    roi: "ROI: 1-2 months (saves 5-10 hours/week)",
                    cost: "$20-$100/month (ChatGPT, Claude, etc.)",
                    readiness: "Immediate - use it today"
                  },
                  {
                    use: "Sales Lead Scoring",
                    how: "AI analyzes leads to predict which ones are likely to buy. Sales team focuses on high-probability leads first.",
                    roi: "ROI: 4-8 months (increases close rates 20-30%)",
                    cost: "$2K-$10K setup",
                    readiness: "Medium - needs CRM integration"
                  },
                  {
                    use: "Email & Calendar Optimization",
                    how: "AI suggests best times to send emails, schedules meetings, prioritizes inbox. Mostly available now in Gmail, Outlook.",
                    roi: "ROI: Immediate (saves 3-5 hours/week)",
                    cost: "$10-$30/month (included in most email platforms)",
                    readiness: "High - likely already in your email"
                  },
                  {
                    use: "Predictive Analytics",
                    how: "AI predicts customer churn, seasonal demand, inventory needs. Helps you make better decisions proactively.",
                    roi: "ROI: 6-12 months (prevents stockouts, reduces waste)",
                    cost: "$10K-$30K implementation",
                    readiness: "Medium - needs good data history"
                  },
                  {
                    use: "Workflow Automation",
                    how: "AI triggers actions based on conditions. E.g., when a customer signs up, send welcome email, create CRM record, assign to sales rep.",
                    roi: "ROI: 1-3 months (eliminates manual workflows)",
                    cost: "$1K-$5K setup",
                    readiness: "High - tools like Zapier integrate with everything"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-xl border border-white/10 bg-white/[0.02]">
                    <h3 className="text-2xl font-semibold text-white mb-4">{i + 1}. {item.use}</h3>
                    <div className="space-y-3 text-zinc-300">
                      <p><span className="text-primary font-semibold">How it works:</span> {item.how}</p>
                      <p><span className="text-primary font-semibold">{item.roi}</span></p>
                      <p><span className="text-zinc-400">Cost:</span> {item.cost}</p>
                      <p><span className="text-zinc-400">Readiness:</span> {item.readiness}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                AI Myths vs. Reality
              </h2>
              <div className="space-y-6">
                {[
                  {
                    myth: "AI will replace my employees",
                    reality: "No. AI makes good employees better. It eliminates boring work, not jobs. You'll reassign people to higher-value work."
                  },
                  {
                    myth: "AI requires a PhD to implement",
                    reality: "Most AI is now no-code. ChatGPT, Zapier, most CRM systems. You don't need a data scientist."
                  },
                  {
                    myth: "AI is too expensive for small businesses",
                    reality: "Many AI tools cost $50-$500/month. Much cheaper than hiring someone. ROI is 2-6 months."
                  },
                  {
                    myth: "AI works perfectly out of the box",
                    reality: "AI needs training on your data. It requires monitoring. It makes mistakes. You need a feedback loop."
                  },
                  {
                    myth: "If I don't implement AI now, I'll be left behind",
                    reality: "There's time. Start with one use case. Learn. Then expand. No need to do everything at once."
                  },
                  {
                    myth: "AI is just ChatGPT",
                    reality: "ChatGPT is one tool. AI also includes automation, analytics, image generation, predictive modeling, etc."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                    <p className="text-lg font-semibold text-red-400 mb-3">Myth: {item.myth}</p>
                    <p className="text-zinc-300">{item.reality}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                How to Start with AI: A 4-Step Plan
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: "Step 1: Identify Your Biggest Time Waster",
                    desc: "Where does your team spend the most boring, repetitive time? That's your first AI target. Document the process."
                  },
                  {
                    step: "Step 2: Find the Right Tool",
                    desc: "Search for 'AI for [your use case]'. Evaluate 3-5 tools. Most have free trials. Test with real data."
                  },
                  {
                    step: "Step 3: Pilot with a Small Group",
                    desc: "Don't deploy company-wide. Start with 2-3 power users. Get feedback. Refine. Then expand."
                  },
                  {
                    step: "Step 4: Measure and Iterate",
                    desc: "Track hours saved, quality improvements, customer satisfaction. Use data to decide if you expand or try a different tool."
                  }
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-primary pl-6 py-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.step}</h3>
                    <p className="text-zinc-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Red Flags: When to Skip an AI Tool
              </h2>
              <ul className="space-y-4">
                {[
                  "Tool claims to replace human judgment entirely (it won't)",
                  "Implementation timeline is less than 2 weeks (too fast)",
                  "No way to validate accuracy before deployment",
                  "Vendor has no experience in your industry",
                  "Cost is unclear or scales unpredictably",
                  "Tool requires uploading sensitive customer data to the cloud with no privacy guarantees"
                ].map((flag, i) => (
                  <li key={i} className="flex gap-3 p-4 rounded-lg border border-red-500/20 bg-red-500/5">
                    <span className="text-red-400">⚠</span>
                    <p className="text-zinc-300">{flag}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Custom AI for Your Specific Workflows
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                Existing AI tools work great for common use cases. But if you need something custom—AI tailored to your exact workflow—that's where <Link href="/services/ai-development" className="text-primary hover:underline">custom AI development</Link> comes in.
              </p>
              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <h3 className="text-xl font-semibold text-white mb-3">Examples of Custom AI</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Document processing trained on YOUR specific document types</li>
                  <li>• Lead scoring based on YOUR sales data and closing patterns</li>
                  <li>• Chatbot trained on YOUR knowledge base and tone</li>
                  <li>• Predictive models trained on YOUR business metrics</li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Key Takeaways
              </h2>
              <div className="space-y-4">
                {[
                  "Start with one high-impact use case, not everything",
                  "Most AI ROI happens within 3-6 months",
                  "AI makes people better, doesn't replace them",
                  "No-code AI tools exist today for most use cases",
                  "Measure results. Don't just implement because everyone else is",
                  "Custom AI is an option if off-the-shelf doesn't fit"
                ].map((point, i) => (
                  <div key={i} className="flex gap-3 text-zinc-300">
                    <span className="text-primary font-semibold">✓</span> {point}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">
                Ready to Implement AI?
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Let's identify which AI opportunities will move the needle for your business.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all">
                Get Your AI Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

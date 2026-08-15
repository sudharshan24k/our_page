import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/insights",
  },
  title: "EduraTech Insights - AI & Software Development Articles",
  description: "Expert guides on custom software development, AI implementation, business automation, and digital transformation for small businesses.",
  openGraph: {
    title: "EduraTech Insights - AI & Software Development",
    description: "Learn about software development costs, AI adoption, automation opportunities, and technology strategy for growing businesses.",
    url: "https://www.eduratech.com/insights",
  },
};

const articles = [
  {
    title: "The Complete Guide to Custom Software Development Costs (2024)",
    slug: "custom-software-costs",
    description: "Comprehensive breakdown of custom software development costs, cost factors, and ROI for small businesses. Includes cost ranges and real examples.",
    date: "August 2024",
    readTime: "12 min read",
    keyword: "custom software development costs"
  },
  {
    title: "How Much Does an AI Chatbot Cost for a Small Business?",
    slug: "ai-chatbot-costs",
    description: "A complete look at the cost factors for developing an AI chatbot in 2024. Find out which platforms are cost-effective, custom builds vs API integrations, and expected ROI.",
    date: "August 2024",
    readTime: "10 min read",
    keyword: "AI chatbot cost"
  },
  {
    title: "Custom Software vs Off-the-Shelf: Which Is Better for a Small Business?",
    slug: "custom-vs-off-the-shelf-software",
    description: "Analyze the pros, cons, and hidden costs of building custom software vs. buying off-the-shelf SaaS. Make the right tech investment choice for your operational scale.",
    date: "August 2024",
    readTime: "10 min read",
    keyword: "custom software vs off the shelf"
  },
  {
    title: "AI for Small Business: A Practical Guide (Not the Hype)",
    slug: "ai-for-small-business",
    description: "What AI can actually do for your business. Realistic use cases, myths debunked, cost considerations, and ROI expectations.",
    date: "August 2024",
    readTime: "10 min read",
    keyword: "AI for small business"
  },
  {
    title: "How to Automate a Business Without Replacing Existing Systems",
    slug: "how-to-automate-without-replacing-systems",
    description: "Learn how to build automation layers using webhooks and custom APIs to sync data, eliminate admin work, and upgrade operations without replacing your existing software.",
    date: "July 2024",
    readTime: "11 min read",
    keyword: "business automation without replacing systems"
  },
  {
    title: "How Much Does It Cost to Build a SaaS Application in 2024?",
    slug: "saas-development-costs",
    description: "An honest breakdown of SaaS development costs. Learn about MVP staging costs, database design overheads, integrations, and ongoing maintenance budget planning.",
    date: "July 2024",
    readTime: "12 min read",
    keyword: "cost to build a SaaS"
  },
  {
    title: "Business Process Automation: Workflows You Can Automate",
    slug: "business-automation",
    description: "10 business processes you can automate and how much time you'll save. Real examples from different industries.",
    date: "July 2024",
    readTime: "11 min read",
    keyword: "business automation"
  },
  {
    title: "How to Build an Internal Business Dashboard: A Complete Guide",
    slug: "how-to-build-internal-dashboard",
    description: "Learn how to build custom internal portals and database dashboards. Consolidate your sales, advertising, and operational data into one secure, real-time interface.",
    date: "June 2024",
    readTime: "8 min read",
    keyword: "build internal business dashboard"
  }
];

export default function InsightsHub() {
  return (
    <main>
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

          <Container className="relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                EduraTech Insights
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                Expert guides on AI development, custom software, business automation, and technology strategy for growing US businesses.
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-transparent border-t border-white/5 py-24 md:py-32">
          <Container>
            <div className="space-y-12">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group block p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-3xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-zinc-400 leading-relaxed mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-sm text-zinc-500">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal width="100%">
        <Section className="bg-gradient-to-r from-primary/10 to-indigo-500/5 border-t border-primary/20 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                Ready to Explore Your Options?
              </h2>
              <p className="text-xl text-zinc-300 font-light mb-12">
                Learn more about our services and how we can help your business.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

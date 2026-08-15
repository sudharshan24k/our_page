import { IndustryPageLayout } from "@/components/layout/IndustryPageLayout";

export const metadata = {
  alternates: {
    canonical: "/industries/startups",
  },
  title: "Startup Technology - MVP Development & Scaling - EduraTech",
  description: "Build your startup tech. MVP development, fundraising support, rapid scaling. From idea to market.",
};

export default function StartupsPage() {
  const challenges = ['Long engineering cycles delay initial MVP launch', 'Monolithic structures that prevent easy feature expansion', 'Poor infrastructure scaling that leads to user timeouts', 'API design bottlenecks that block integration partners', 'Accumulated tech debt from rushed initial builds', 'High maintenance overhead draining runway budgets'];
  const solutions = [{'title': 'MVP Development', 'desc': 'Rapid core product release, clean database design, high-conversion landing pages.'}, {'title': 'SaaS Architecture', 'desc': 'Multi-tenant database structures, billing integrations, user auth management.'}, {'title': 'API Frameworks', 'desc': 'Scalable REST/GraphQL APIs, secure authentication tokens, partner integrations.'}, {'title': 'DevOps Scaling', 'desc': 'Container deployments (Docker/K8s), automated CI/CD pipelines, cloud monitors.'}];
  const tiers = [{'label': 'MVP Launch', 'range': '$25K - $50K', 'timeline': '6-10 weeks'}, {'label': 'Seed Stage Scale', 'range': '$50K - $120K', 'timeline': '10-14 weeks'}, {'label': 'Series A Growth', 'range': '$120K - $250K+', 'timeline': '14-20 weeks'}, {'label': 'Enterprise Venture', 'range': '$250K+', 'timeline': 'Custom'}];

  return (
    <IndustryPageLayout
      title={'Custom Software Built for High-Growth Startups'}
      description={'MVP development, SaaS architecture, API design, rapid feature deployment. Launch fast. Scale tech infrastructure with confidence.'}
      ctaText={'Contact Us'}
      challenges={challenges}
      solutions={solutions}
      tiers={tiers}
      ctaTitle={"Ready to Build Your Startup's MVP?"}
      ctaButtonText={'Contact Us'}
      heroBadges={['Startups', 'MVP Architecture', 'SaaS Infrastructure']}
    />
  );
}

import { IndustryPageLayout } from "@/components/layout/IndustryPageLayout";

export const metadata = {
  alternates: {
    canonical: "/industries/real-estate",
  },
  title: "Real Estate Business Software & CRM - EduraTech",
  description: "Custom CRM and business automation for real estate teams. Lead management, transaction automation, and analytics built for brokers and agents.",
};

export default function RealEstatePage() {
  const challenges = ['MLS listings sync latency across agent portals and sites', 'Manual processing of lease and purchase transaction contracts', 'Poor lead routing to agents resulting in lost opportunities', 'No client document center for secure contract storage', 'Fragmented contact records between agents and central office', 'Inability to track transaction velocities and commission pipelines'];
  const solutions = [{'title': 'Property Management', 'desc': 'MLS database syncing, custom search filters, interactive property maps.'}, {'title': 'Transaction Center', 'desc': 'Digital document signing, compliance checkouts, contract storage, timeline alerts.'}, {'title': 'Agent Portals', 'desc': 'Lead assignment engines, commission calculators, performance metrics.'}, {'title': 'Client Document Center', 'desc': 'Secure patient/client intake, lease files, mortgage docs, escrow status.'}];
  const tiers = [{'label': 'Boutique Brokerage', 'range': '$350 - $700', 'timeline': '10-14 weeks'}, {'label': 'Regional Agency', 'range': '$700 - $1,500', 'timeline': '14-20 weeks'}, {'label': 'National Franchise', 'range': '$1,500 - $2,000', 'timeline': '20-28 weeks'}, {'label': 'Enterprise Custom', 'range': '$2,000+', 'timeline': 'Custom'}];

  return (
    <IndustryPageLayout
      title={'Custom Software Built for Real Estate Firms'}
      description={'Property databases, custom CRMs, agent portals, client document centers. Speed up transaction cycles. Improve agent productivity.'}
      ctaText={'Contact Us'}
      challenges={challenges}
      solutions={solutions}
      tiers={tiers}
      ctaTitle={'Ready to Speed Up Your Real Estate Transactions?'}
      ctaButtonText={'Contact Us'}
      heroBadges={['Real Estate', 'Agent Portals', 'Property Databases']}
    />
  );
}

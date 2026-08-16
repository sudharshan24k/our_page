import { IndustryPageLayout } from "@/components/layout/IndustryPageLayout";

export const metadata = {
  alternates: {
    canonical: "/industries/professional-services",
  },
  title: "Professional Services Software - Legal, Accounting, Consulting - EduraTech",
  description: "Custom software for law firms, accounting practices, consulting. Time tracking, billing, client management.",
};

export default function ProfessionalServicesPage() {
  const challenges = ['Manual onboarding of high-ticket clients takes too long', 'Inability to track project deliverables and milestones cleanly', 'Friction in billing, time-tracking, and invoice generation', 'No centralized dashboard to monitor client retention and satisfaction', 'Inflexible client portals that look unprofessional', 'Fragmented client data makes delivery scaling difficult'];
  const solutions = [{'title': 'Client Portals', 'desc': 'Secure custom portals, document sharing, digital signatures, milestone tracking.'}, {'title': 'Project Management', 'desc': 'Milestone delivery tracker, resource allocations, automated tasks, Slack notifications.'}, {'title': 'Billing & Invoicing', 'desc': 'Time tracking integrations, automated invoicing, secure recurring payment processors.'}, {'title': 'Operations Dashboard', 'desc': 'Fulfillment velocities, client retention metrics, resource utilization reports.'}];
  const tiers = [{'label': 'Boutique Firm', 'range': '$300 - $600', 'timeline': '8-12 weeks'}, {'label': 'Mid-Sized Agency', 'range': '$600 - $1,200', 'timeline': '12-16 weeks'}, {'label': 'National Consultancy', 'range': '$1,200 - $2,000', 'timeline': '16-24 weeks'}, {'label': 'Enterprise Custom', 'range': '$2,000+', 'timeline': 'Custom'}];

  return (
    <IndustryPageLayout
      title={'Custom Software Built for Professional Services Firms'}
      description={'Client portals, project tracking, billing, custom CRMs. Automate operations. Improve client retention. Scale high-ticket services.'}
      ctaText={'Contact Us'}
      challenges={challenges}
      solutions={solutions}
      tiers={tiers}
      ctaTitle={"Ready to Automate Your Firm's Operations?"}
      ctaButtonText={'Contact Us'}
      heroBadges={['Professional Services', 'Custom CRM', 'Client Portals']}
    />
  );
}

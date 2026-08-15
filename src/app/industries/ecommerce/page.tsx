import { IndustryPageLayout } from "@/components/layout/IndustryPageLayout";

export const metadata = {
  alternates: {
    canonical: "/industries/ecommerce",
  },
  title: "E-commerce Platform Development - Custom Store Solutions - EduraTech",
  description: "Custom e-commerce platforms and automation for online businesses. Inventory management, fulfillment automation, and analytics. Build beyond Shopify.",
};

export default function EcommercePage() {
  const challenges = ['Off-the-shelf platforms lack flexibility for custom product logic', 'Inventory sync lag between warehouse, ERP, and channels', 'Fulfillment bottleneck from manual order processing', 'Low cart conversion rates from basic checkout flows', 'Fragmented customer data prevents targeted marketing', 'High transaction fees cutting into brand margins'];
  const solutions = [{'title': 'Custom Checkouts', 'desc': 'Bespoke checkout flows, subscription engines, localized multi-currency pricing.'}, {'title': 'Inventory & ERP', 'desc': 'Real-time stock synchronization, automatic purchase order triggers, custom integrations.'}, {'title': 'Customer Loyalty', 'desc': 'Referral systems, loyalty points programs, customized discount engines.'}, {'title': 'Analytics Dashboard', 'desc': 'Cohort analysis, customer lifetime value tracking, real-time sales reporting.'}];
  const tiers = [{'label': 'Growth Brands', 'range': '$40K - $80K', 'timeline': '10-14 weeks'}, {'label': 'Mid-Market', 'range': '$80K - $180K', 'timeline': '14-20 weeks'}, {'label': 'High-Volume Enterprise', 'range': '$180K - $400K+', 'timeline': '20-28 weeks'}, {'label': 'Global Brands Custom', 'range': '$400K+', 'timeline': 'Custom'}];

  return (
    <IndustryPageLayout
      title={'Custom Software Built for Ecommerce Brands'}
      description={'Inventory management, custom checkouts, ERP integrations, customer loyalty programs. Scale transaction volume. Automate fulfillment.'}
      ctaText={'Contact Us'}
      challenges={challenges}
      solutions={solutions}
      tiers={tiers}
      ctaTitle={'Ready to Scale Your Ecommerce Brand?'}
      ctaButtonText={'Contact Us'}
      heroBadges={['Ecommerce', 'ERP Integration', 'Conversion Optimization']}
    />
  );
}

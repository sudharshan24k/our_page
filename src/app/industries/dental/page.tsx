import { IndustryPageLayout } from "@/components/layout/IndustryPageLayout";

export const metadata = {
  alternates: {
    canonical: "/industries/dental",
  },
  title: "Dental Practice Management Software - EduraTech",
  description: "Custom practice management software for dental clinics. Patient scheduling, billing, HIPAA compliance, and automation built for real dental practices.",
};

export default function DentalPage() {
  const challenges = ['Appointment scheduling and no-show management bottlenecks', 'Patient communication delays and friction in follow-ups', 'Billing and insurance claim submission errors costing revenue', 'Patient medical records security and strict HIPAA compliance', 'Staff coordination, task delegation, and tracking', 'Treatment planning and case documentation gaps'];
  const solutions = [{'title': 'Practice Management', 'desc': 'Patient scheduling & calendar, automated reminders (SMS/Email), provider schedules & availability.'}, {'title': 'Billing & Insurance', 'desc': 'Treatment planning, patient billing & statements, insurance claim submission, payment processing.'}, {'title': 'Patient Portal', 'desc': 'Online booking & rescheduling, treatment history & documentation, secure patient intake forms.'}, {'title': 'Compliance & Security', 'desc': 'HIPAA compliance by design, encrypted data storage, access controls & audit logs, auto backups.'}];
  const tiers = [{'label': 'Single Clinic', 'range': '$30K - $60K', 'timeline': '8-12 weeks'}, {'label': 'Multi-Location', 'range': '$60K - $120K', 'timeline': '12-18 weeks'}, {'label': 'Dental Group', 'range': '$120K - $250K+', 'timeline': '18-24 weeks'}, {'label': 'Enterprise Custom', 'range': '$250K+', 'timeline': 'Custom'}];

  return (
    <IndustryPageLayout
      title={'Custom Software Built for Dental Practices'}
      description={'Practice management software designed specifically for dental clinics. Scheduling, billing, patient communication, compliance, and automation—all integrated.'}
      ctaText={'Contact Us'}
      challenges={challenges}
      solutions={solutions}
      tiers={tiers}
      ctaTitle={'Ready to Streamline Your Dental Practice?'}
      ctaButtonText={'Contact Us'}
      heroBadges={['Dental Practice', 'HIPAA Compliant', 'Practice Management']}
    />
  );
}

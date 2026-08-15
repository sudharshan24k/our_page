import { IndustryPageLayout } from "@/components/layout/IndustryPageLayout";

export const metadata = {
  alternates: {
    canonical: "/industries/healthcare",
  },
  title: "Healthcare Software Solutions - Medical Practice Management - EduraTech",
  description: "Custom healthcare software for clinics, hospitals, medical practices. EMR, patient portals, HIPAA-compliant.",
};

export default function HealthcarePage() {
  const challenges = ['Paper records mixed with multiple digital systems creates chaos', 'Scheduling conflicts and patient no-shows reduce revenue', 'Manual billing and insurance claims are error-prone and time-consuming', 'Fragmented patient data leads to poor care coordination', 'Compliance burden is growing with regulations like HIPAA', 'Staff spends more time on admin work than actual patient care'];
  const solutions = [{'title': 'Electronic Health Records (EHR)', 'desc': 'Comprehensive patient medical history, lab results, medications, allergies in one place.'}, {'title': 'Appointment Scheduling', 'desc': 'Online booking, automated reminders, reduce no-shows by 40%.'}, {'title': 'Billing & Claims', 'desc': 'Automated claim submission, denial management, revenue cycle optimization.'}, {'title': 'Patient Portal', 'desc': 'Patients view records, request refills, pay bills, communicate with providers securely.'}];
  const tiers = [{'label': 'Private Practice', 'range': '$40K - $80K', 'timeline': '10-14 weeks'}, {'label': 'Multi-Specialty Clinic', 'range': '$80K - $200K', 'timeline': '14-20 weeks'}, {'label': 'Hospital Network', 'range': '$200K - $500K+', 'timeline': '20-30 weeks'}, {'label': 'Enterprise Health Custom', 'range': '$500K+', 'timeline': 'Custom'}];

  return (
    <IndustryPageLayout
      title={'Healthcare Software Built for Your Practice'}
      description={'Patient management, scheduling, billing, compliance. Reduce admin work. Improve patient care. HIPAA-compliant by design.'}
      ctaText={'Contact Us'}
      challenges={challenges}
      solutions={solutions}
      tiers={tiers}
      ctaTitle={'Ready to Streamline Your Healthcare Operations?'}
      ctaButtonText={'Contact Us'}
      heroBadges={['Healthcare', 'HIPAA Compliant', 'Practice Management']}
    />
  );
}

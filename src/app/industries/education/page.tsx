import { IndustryPageLayout } from "@/components/layout/IndustryPageLayout";

export const metadata = {
  alternates: {
    canonical: "/industries/education",
  },
  title: "Education Software Solutions - School & LMS Systems - EduraTech",
  description: "Custom education software for schools, universities, training centers. Student management, LMS, attendance.",
};

export default function EducationPage() {
  const challenges = ['Fragmented student records across legacy systems', 'Manual, inefficient student enrollment and onboarding', 'Lack of clean billing and tuition collection tools', 'Inflexible learning management systems that frustrate students', 'Compliance concerns with student data privacy (FERPA/GDPR)', 'Poor progress tracking and analytics for student performance'];
  const solutions = [{'title': 'Student Information System', 'desc': 'Centralized student records, enrollment workflows, transcripts, and document storage.'}, {'title': 'Learning Management (LMS)', 'desc': 'Custom course builder, assignments, grading, interactive video, and student forums.'}, {'title': 'Billing & Tuition', 'desc': 'Tuition payment gateways, payment plans, automated billing reminders, and financial reports.'}, {'title': 'Student Portal', 'desc': 'Course registration, calendar, assignments track, and direct instructor messaging.'}];
  const tiers = [{'label': 'Local Academy', 'range': '$35K - $70K', 'timeline': '8-12 weeks'}, {'label': 'Multi-Campus School', 'range': '$70K - $150K', 'timeline': '12-18 weeks'}, {'label': 'University Platform', 'range': '$150K - $350K+', 'timeline': '18-24 weeks'}, {'label': 'Enterprise EdTech', 'range': '$350K+', 'timeline': 'Custom'}];

  return (
    <IndustryPageLayout
      title={'Custom Software Built for Educational Institutions'}
      description={'Learning management systems, student databases, enrollment portals, billing, and scheduling. Built for schools, universities, and training organizations.'}
      ctaText={'Contact Us'}
      challenges={challenges}
      solutions={solutions}
      tiers={tiers}
      ctaTitle={'Ready to Modernize Your Educational Institution?'}
      ctaButtonText={'Contact Us'}
      heroBadges={['EdTech', 'LMS Integration', 'Student Portals']}
    />
  );
}

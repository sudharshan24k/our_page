import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/privacy",
  },
  title: "Privacy Policy | Edura Technologies",
  description: "Learn how Edura Technologies collects, uses, and protects consumer and client personal data under US federal and state privacy laws (including CalOPPA and CCPA).",
};

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28">
          <Container>
            <div className="max-w-3xl mx-auto space-y-12">
              <div>
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                  Privacy Policy
                </h1>
                <p className="text-zinc-400 text-sm font-mono">Last Updated: August 14, 2026</p>
                <p className="text-zinc-500 text-sm mt-4 font-medium italic">Edura Technologies is a wing of Edura Global Solutions (<a href="https://eduraglobal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">eduraglobal.com</a>).</p>
              </div>

              <div className="space-y-8 text-zinc-300 leading-relaxed font-light">
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">1. Introduction & Scope</h2>
                  <p>
                    Edura Technologies, a technology division of Edura Global Solutions ("we," "our," "us," or the "Company"), operates this website to provide custom software development, AI solutions, and digital transformation. The data controller responsible for your personal information is Edura Global Solutions, based in India, with primary marketing and support points of contact in the United States.
                  </p>
                  <p>
                    We respect your privacy and are committed to protecting it through compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website (our "Site") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
                  <p>
                    We collect several types of information from and about users of our Site, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">Personally Identifiable Information (PII):</strong> Name, email address, telephone number, company name, website URL, or any other details you voluntarily provide via our contact and technology audit forms.
                    </li>
                    <li>
                      <strong className="text-white">Technical & Usage Data:</strong> IP address, operating system, browser type, referral URLs, access times, pages viewed, and information collected through tracking tools (such as Zoho PageSense).
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
                  <p>
                    We use information that we collect about you or that you provide to us, including any personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To present our Site and its contents to you.</li>
                    <li>To respond to your inquiries, schedule strategy calls, or provide requested technology audits.</li>
                    <li>To perform analytics, measure user engagement, and optimize the technical performance of our Site.</li>
                    <li>To comply with legal and regulatory obligations.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">4. Children Under the Age of 13 (COPPA Compliance)</h2>
                  <p>
                    Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Site. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information immediately.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">5. California Privacy Rights (CCPA / CPRA & CalOPPA)</h2>
                  <p>
                    This section applies solely to visitors and users who reside in the State of California. Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents have specific rights regarding their personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">Right to Know & Access:</strong> The right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months.
                    </li>
                    <li>
                      <strong className="text-white">Right to Delete:</strong> The right to request that we delete any of your personal information that we collected from you, subject to certain exceptions.
                    </li>
                    <li>
                      <strong className="text-white">Right to Correct:</strong> The right to request that we correct inaccurate personal information that we maintain about you.
                    </li>
                    <li>
                      <strong className="text-white">Right to Opt-Out:</strong> The right to opt-out of the "sale" or "sharing" of your personal information. <strong className="text-white">Edura Technologies does not sell, lease, or share your personal information to third parties for monetary consideration or cross-context behavioral advertising.</strong>
                    </li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us at <a href="mailto:hello@eduratech.com" className="text-primary hover:underline">hello@eduratech.com</a>.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">6. International Data Transfers (US - India)</h2>
                  <p>
                    Edura Technologies is a division of Edura Global Solutions, based in India. By submitting information through the Site, you acknowledge and agree that your personal data will be transferred to, stored, and processed in India, where our engineering and database infrastructure resides. We implement standard industry security measures and data protection agreements to safeguard your information during transfer and storage.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">7. Contact Information</h2>
                  <p>
                    To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                  </p>
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-2 font-mono text-sm">
                    <p>Mumbai, India</p>
                    <p className="text-primary hover:underline"><a href="mailto:hello@eduratech.com">hello@eduratech.com</a></p>
                  </div>
                </section>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}

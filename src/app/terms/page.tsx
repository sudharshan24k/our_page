import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/terms",
  },
  title: "Terms of Service | Edura Technologies",
  description: "Read the Terms of Service governing the use of the Edura Technologies website and services.",
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <Reveal width="100%">
        <Section className="bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28">
          <Container>
            <div className="max-w-3xl mx-auto space-y-12">
              <div>
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                  Terms of Service
                </h1>
                <p className="text-zinc-400 text-sm font-mono">Last Updated: August 14, 2026</p>
                <p className="text-zinc-500 text-sm mt-4 font-medium italic">Edura Technologies is a wing of Edura Global Solutions (<a href="https://eduraglobal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">eduraglobal.com</a>).</p>
              </div>

              <div className="space-y-8 text-zinc-300 leading-relaxed font-light">
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
                  <p>
                    These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Edura Technologies, a technology division of Edura Global Solutions ("we," "us," or "our"), concerning your access to and use of our website and services.
                  </p>
                  <p>
                    By accessing the Site, you agree that you have read, understood, and agree to be bound by all of these Terms. If you do not agree with all of these Terms, you are explicitly prohibited from using the Site and must discontinue use immediately.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">2. Eligibility & Compliance</h2>
                  <p>
                    The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site. 
                  </p>
                  <p>
                    By using this Site, you represent and warrant that you meet the age requirements and that you will comply with all applicable local, state, national, and international laws and regulations, including US export controls and economic sanctions.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">3. Intellectual Property Rights</h2>
                  <p>
                    Unless otherwise indicated, the Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by us, our licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">4. User Representations & Form Submissions</h2>
                  <p>
                    By using the Site, you represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All information you submit through our contact or audit forms is true, accurate, current, and complete.</li>
                    <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
                    <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                    <li>Your use of the Site will not violate any applicable law or regulation.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">5. Disclaimer of Warranties</h2>
                  <p className="font-mono text-sm uppercase">
                    THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">6. Limitation of Liability</h2>
                  <p className="font-mono text-sm uppercase">
                    IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">7. Governing Law & Dispute Resolution</h2>
                  <p>
                    These Terms and your use of the Site are governed by and construed in accordance with the internal laws of the State of Delaware, United States of America, without regard to its conflict of law principles. 
                  </p>
                  <p>
                    Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Delaware, USA, and the parties hereby consent to the personal jurisdiction and venue therein.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">8. Contact Us</h2>
                  <p>
                    In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                  </p>
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-2 font-mono text-sm">
                    <p className="text-white font-semibold">Edura Technologies</p>
                    <p>100 Market Street, Suite 400</p>
                    <p>San Francisco, CA 94105, United States</p>
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

import { LegalPage, H2 } from "../components/legal";
import Reveal from "../components/reveal";

export const metadata = { title: "Privacy Policy | managedsuppliers" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <Reveal variant="fade" className="space-y-6">
      <p>We take the protection of your personal data seriously. This policy explains what we collect, why, and the rights you have.</p>
      <H2>Data we collect</H2>
      <p>When you contact us or book a demo, we collect the details you provide (such as name, work email, and company) so we can respond to your request.</p>
      <H2>How we use it</H2>
      <p>We use your information solely to reply to inquiries, provide the service you requested, and improve managedsuppliers. We do not sell your data.</p>
      <H2>Storage and security</H2>
      <p>Data is stored on infrastructure with appropriate technical and organizational safeguards. Access is limited to those who need it.</p>
      <H2>Your rights</H2>
      <p>You may request access to, correction of, or deletion of your personal data at any time by contacting office@aventario.com.</p>
      </Reveal>
    </LegalPage>
  );
}

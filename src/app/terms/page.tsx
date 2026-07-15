import { LegalPage, H2 } from "../components/legal";
import Reveal from "../components/reveal";

export const metadata = { title: "Terms and Conditions | managedsuppliers" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" updated="July 2026">
      <Reveal variant="fade" className="space-y-6">
      <p>These terms govern your use of the managedsuppliers website and, where applicable, the managedsuppliers service.</p>
      <H2>Use of the service</H2>
      <p>You agree to use managedsuppliers only for lawful purposes and in line with any agreement between your organization and Aventario Solutions GmbH.</p>
      <H2>Accounts</H2>
      <p>You are responsible for keeping your account credentials secure and for activity that takes place under your account.</p>
      <H2>Availability</H2>
      <p>We work to keep the service available and reliable, but we do not guarantee uninterrupted access. Planned maintenance will be communicated where possible.</p>
      <H2>Liability</H2>
      <p>To the extent permitted by law, our liability is limited as set out in your service agreement. Full commercial terms are provided separately.</p>
      </Reveal>
    </LegalPage>
  );
}

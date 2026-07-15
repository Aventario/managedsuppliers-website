import { LegalPage, H2 } from "../components/legal";
import Reveal from "../components/reveal";

export const metadata = { title: "Imprint | managedsuppliers" };

export default function ImprintPage() {
  return (
    <LegalPage title="Imprint">
      <Reveal variant="fade" className="space-y-6">
      <H2>Company</H2>
      <p>
        Aventario Solutions GmbH<br />
        Friedstraße 11<br />
        Vienna, Austria
      </p>
      <H2>Contact</H2>
      <p>
        Email: office@aventario.com<br />
        Web: www.managedsuppliers.com
      </p>
      <H2>Management</H2>
      <p>Markus Kern (CEO), Markus Jaksch (COO), Margit Györfi (CPO)</p>
      <H2>Company details</H2>
      <p>Commercial register number, VAT ID, and registered court to be confirmed.</p>
      </Reveal>
    </LegalPage>
  );
}

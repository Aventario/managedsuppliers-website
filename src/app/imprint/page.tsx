import { LegalPage, H2 } from "../components/legal";
import Reveal from "../components/reveal";

export const metadata = { title: "Imprint | managedsuppliers" };

export default function ImprintPage() {
  return (
    <LegalPage title="Imprint" updated="16 July 2026">
      <Reveal variant="fade" className="space-y-6">
        <p>
          Information pursuant to §5 E-Commerce Act (ECG), §14 Austrian Commercial Code (UGB) and
          §63 Trade Regulation Act (GewO), and disclosure pursuant to §25 Media Act (MedienG).
          managedsuppliers is a software product operated by Aventario Solutions GmbH.
        </p>

        <H2>Company</H2>
        <p>
          Aventario Solutions GmbH<br />
          Tuchlauben 7a<br />
          1010 Vienna<br />
          Austria
        </p>

        <H2>Contact</H2>
        <p>
          Email: <a href="mailto:office@aventario.com">office@aventario.com</a><br />
          Phone: +43 134 3354012<br />
          Web: www.managedsuppliers.com
        </p>

        <H2>Management</H2>
        <p>Markus Kern (CEO), Markus Jaksch (COO), Margit Györfi (CPO)</p>

        <H2>Corporate details</H2>
        <p>
          Legal form: Gesellschaft mit beschränkter Haftung (GmbH)<br />
          Registered office: Vienna, Austria<br />
          Commercial register number (Firmenbuchnummer): FN 594042t<br />
          Commercial register court (Firmenbuchgericht): Commercial Court of Vienna (Handelsgericht Wien)<br />
          VAT identification number (UID): [UID/ATU — CONFIRM VIA FIRMENBUCH EXTRACT]
        </p>

        <H2>Trade and supervisory authority</H2>
        <p>
          Trade: Services in automatic data processing and information technology (Dienstleistungen in
          der automatischen Datenverarbeitung und Informationstechnik).<br />
          Chamber membership: Austrian Federal Economic Chamber (Wirtschaftskammer Österreich),
          Vienna Chamber (Wirtschaftskammer Wien).<br />
          Trade authority (Gewerbebehörde): Magistrat der Stadt Wien.<br />
          Applicable trade regulations: Gewerbeordnung (GewO), available at{" "}
          <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">ris.bka.gv.at</a>.
        </p>

        <H2>Online dispute resolution</H2>
        <p>
          For consumer complaints, the European Commission provides an online dispute resolution
          platform at{" "}
          <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/odr
          </a>
          . We are neither obliged nor willing to participate in dispute resolution proceedings before
          a consumer arbitration board. You may direct any complaint to the email address above.
        </p>

        <H2>Liability for content</H2>
        <p>
          We develop the content of this website with care and strive to keep it accurate and current.
          We accept no liability for the correctness, completeness or timeliness of the content,
          particularly content provided by third parties.
        </p>

        <H2>Liability for links</H2>
        <p>
          This website contains links to external third-party websites whose content is outside our
          control. We accept no liability for such third-party content. The respective provider or
          operator of the linked pages is always responsible for their content.
        </p>

        <H2>Copyright</H2>
        <p>
          The content and works on these pages are subject to Austrian copyright law. Reproduction,
          editing, distribution and any form of exploitation beyond the limits of copyright law require
          the prior written consent of Aventario Solutions GmbH.
        </p>
      </Reveal>
    </LegalPage>
  );
}

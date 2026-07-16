import { LegalPage, H2 } from "../components/legal";
import Reveal from "../components/reveal";

export const metadata = { title: "Terms and Conditions | managedsuppliers" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" updated="16 July 2026">
      <Reveal variant="fade" className="space-y-6">
        <p>
          These terms of use govern your access to and use of the managedsuppliers website at
          www.managedsuppliers.com, operated by Aventario Solutions GmbH, Tuchlauben 7a, 1010 Vienna,
          Austria (&quot;we&quot;, &quot;us&quot;). They apply to the website only. Use of the
          managedsuppliers software product is governed by a separate written service agreement between
          your organization and Aventario Solutions GmbH, which prevails over these terms in the event of
          any conflict.
        </p>

        <H2>Use of the website</H2>
        <p>
          You may use this website for lawful purposes only. You agree not to misuse the site, interfere
          with its operation or security, attempt to gain unauthorized access to any part of it, or use
          automated means to extract content without our prior written consent.
        </p>

        <H2>Intellectual property</H2>
        <p>
          All content on this website, including text, graphics, logos, illustrations, the
          managedsuppliers name and brand, and the software behind the site, is owned by or licensed to
          Aventario Solutions GmbH and is protected by Austrian and international copyright and trademark
          law. You may view and print pages for your own information. Any other reproduction, editing,
          distribution or exploitation requires our prior written consent.
        </p>

        <H2>No advice, no offer</H2>
        <p>
          The information on this website is provided for general information about our product and
          services. It does not constitute legal, tax, procurement or other professional advice, and it
          does not constitute a binding offer. Binding commitments arise only from a signed agreement.
        </p>

        <H2>Availability</H2>
        <p>
          We work to keep the website available and reliable but do not guarantee uninterrupted or
          error-free access. We may modify, suspend or discontinue all or part of the website at any
          time without notice.
        </p>

        <H2>External links</H2>
        <p>
          This website may contain links to third-party websites. We have no control over their content
          and accept no responsibility for it. Following such links is at your own risk.
        </p>

        <H2>Liability</H2>
        <p>
          To the extent permitted by law, we accept no liability for slight negligence. This limitation
          does not apply to damages arising from injury to life, body or health, or to liability that is
          mandatory under applicable law. Where our liability is excluded or limited, this also applies
          to the personal liability of our employees, representatives and agents.
        </p>

        <H2>Data protection</H2>
        <p>
          Our processing of personal data in connection with this website is described in our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>

        <H2>Governing law and jurisdiction</H2>
        <p>
          These terms are governed by Austrian law, excluding its conflict-of-law rules and the UN
          Convention on Contracts for the International Sale of Goods. For disputes with entrepreneurs
          (Unternehmer) within the meaning of the Austrian Consumer Protection Act, the exclusive place
          of jurisdiction is the court with subject-matter competence in Vienna, Austria. Mandatory
          consumer protection provisions of the jurisdiction in which a consumer is habitually resident
          remain unaffected.
        </p>

        <H2>Changes to these terms</H2>
        <p>
          We may update these terms from time to time. The version published on this website at the time
          of your use applies. This version is dated 16 July 2026.
        </p>
      </Reveal>
    </LegalPage>
  );
}

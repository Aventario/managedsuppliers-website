import { Container } from "../components/art";
import { Logo } from "../components/logo";
import { CookieSettingsLink } from "../components/consent";

const COLS = [
  {
    title: "Address",
    // NOTE: confirm exact postal address with Julian — read from Figma as
    // Authoritative Aventario legal entity (matches the Impressum).
    lines: ["Aventario Solutions GmbH", "Tuchlauben 7a", "1010 Vienna, Austria"],
  },
  { title: "Product", links: [["Features", "/features"], ["Benefits", "/features#benefits"], ["FAQ", "/faq"]] },
  { title: "Company", links: [["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]] },
];

export default function FigFooter() {
  return (
    <footer className="bg-[#1f3242] py-16 text-white/80">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A smarter way to manage suppliers: from drafting SOWs to execution and reporting.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold uppercase tracking-wide text-white">{c.title}</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {c.lines
                  ? c.lines.map((item) => <li key={item} className="text-white/60">{item}</li>)
                  : c.links!.map(([label, href]) => (
                      <li key={label}><a href={href} className="text-white/70 no-underline hover:text-white">{label}</a></li>
                    ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {""}Aventario Solutions GmbH. All rights reserved.</span>
          <nav className="flex flex-wrap gap-6">
            <a href="/terms" className="text-white/60 no-underline hover:text-white">Terms and Conditions</a>
            <a href="/privacy" className="text-white/60 no-underline hover:text-white">Privacy Policy</a>
            <a href="/imprint" className="text-white/60 no-underline hover:text-white">Imprint</a>
            <CookieSettingsLink className="text-white/60 no-underline hover:text-white" />
          </nav>
        </div>
      </Container>
    </footer>
  );
}

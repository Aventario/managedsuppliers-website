import { Container, INK } from "../components/art";
import Reveal from "../components/reveal";

type Item = { title: string; body: string; icon: React.ReactNode };

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ITEMS: Item[] = [
  {
    title: "Central secure database",
    body: "All contract versions, changes, comments, and performance data are stored in one central and secure database, accessible at any time.",
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
        <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13" />
        <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
      </svg>
    ),
  },
  {
    title: "Unlimited storage",
    body: "As a cloud SaaS solution, managedsuppliers places no restrictions on archive size. The automated process keeps the archive tidy and traceable.",
    icon: (
      <svg {...iconProps}>
        <path d="M17.5 18.5H7a4.5 4.5 0 1 1 .8-8.93A6 6 0 0 1 19.4 12a3.5 3.5 0 0 1-1.9 6.5z" />
      </svg>
    ),
  },
  {
    title: "Version traceability with restore",
    body: "Every change to a document is transparently traceable and can be restored at any time if needed. Comments and versions are never lost.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    title: "Role-based access",
    body: "A customizable role concept connects customer-side and supplier-side users, so access and activity execution match specific requirements and competencies.",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="9" r="3" />
        <path d="M2.5 19a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M14.5 19a4.5 4.5 0 0 1 7 -3.5" />
      </svg>
    ),
  },
  {
    title: "DocuSign support",
    body: "Once a decision is made, managedsuppliers supports common processes and tools for secure and certified signatures, such as DocuSign.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 17c2-3 3.5-8 5-8s1 6 2.5 6 2-3 3-3 1.5 3 5.5 3" />
        <path d="M4 21h16" />
      </svg>
    ),
  },
  {
    title: "AI predictions",
    body: "Artificial intelligence provides reliable predictions on future expenses and performance, such as KPI compliance, based on the data in the platform.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l1.7 4.6L18 9l-4.3 1.4L12 15l-1.7-4.6L6 9l4.3-1.4z" />
        <path d="M18.5 15l.9 2.3 2.1.7-2.1.7-.9 2.3-.9-2.3-2.1-.7 2.1-.7z" />
      </svg>
    ),
  },
];

export default function FigHowPlatform() {
  return (
    <section id="platform" className="scroll-mt-24 bg-background py-20">
      <Container>
        <Reveal>
          <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
            One platform, built for enterprise use
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[0.95rem] leading-relaxed text-foreground">
            managedsuppliers runs as a cloud SaaS solution. Your data stays central, secure, and traceable.
          </p>
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.title} className="rounded-2xl border border-[#e6efeb] bg-[#f8fbfa] p-6">
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-background">{it.icon}</span>
                {/* quiet KPI chip accent */}
                <span className="flex gap-1 pt-1" aria-hidden="true">
                  <span className="h-2 w-4 rounded-md" style={{ background: "#7fd0b6" }} />
                  <span className="h-2 w-4 rounded-md" style={{ background: "#8dccc0" }} />
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold" style={{ color: INK }}>{it.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-foreground">{it.body}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

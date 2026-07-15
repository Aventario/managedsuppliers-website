import { LogoMark } from "./logo";

const NAV = ["Creation", "Negotiation", "Measurement", "Improvement", "Forecasting", "Reporting"];

const ROWS = [
  { name: "Cloud infrastructure SOW", vendor: "Northwind Cloud", status: "Active", tone: "green" },
  { name: "Logistics services agreement", vendor: "Atlas Logistics", status: "In review", tone: "amber" },
  { name: "Managed security services", vendor: "Sentinel GmbH", status: "Active", tone: "green" },
  { name: "Marketing retainer", vendor: "Brightside Studio", status: "Renewal due", tone: "red" },
  { name: "Facility management", vendor: "Vantage FM", status: "Active", tone: "green" },
];

const TONE: Record<string, string> = {
  green: "bg-[#d7efe7] text-[#1f7a68]",
  amber: "bg-[#fbeecb] text-[#9a6b12]",
  red: "bg-[#fbe0dd] text-[#b23b30]",
};

export default function ProductMockup({ active = "Creation" }: { active?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#dbe6e2] bg-background shadow-[0_20px_50px_-24px_rgba(36,59,83,0.35)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-[#e6efeb] bg-[#f3f7f6] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ef6a5f]" />
        <span className="h-3 w-3 rounded-full bg-[#f6c04e]" />
        <span className="h-3 w-3 rounded-full bg-[#5cc98a]" />
        <span className="mx-auto rounded-md bg-background px-3 py-1 text-[11px] font-medium text-foreground">app.managedsuppliers.com/{active.toLowerCase()}</span>
      </div>

      <div className="flex min-h-[340px]">
        {/* sidebar */}
        <aside className="hidden w-52 shrink-0 flex-col bg-[#243b53] p-4 sm:flex">
          <div className="flex items-center gap-2 pb-5">
            <LogoMark size={26} />
            <span className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[11px] font-black uppercase leading-3 tracking-wide text-white">Managed<br />Suppliers</span>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <span key={n} className={`rounded-md px-3 py-2 text-[13px] font-medium ${n === active ? "bg-accent text-white" : "text-white/60"}`}>{n}</span>
            ))}
          </nav>
        </aside>

        {/* main */}
        <div className="flex-1 bg-[#f8fbfa] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">{active}</p>
              <h4 className="text-[15px] font-bold text-[#243b53]">Supplier workspace</h4>
            </div>
            <span className="rounded-lg bg-accent px-3 py-1.5 text-[12px] font-semibold text-white">+ New</span>
          </div>

          {/* KPI row */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[["Active suppliers", "128"], ["Open items", "17"], ["On-time %", "94%"]].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-[#e6efeb] bg-background p-3">
                <p className="text-[11px] text-foreground">{k}</p>
                <p className="text-lg font-black text-[#243b53]">{v}</p>
              </div>
            ))}
          </div>

          {/* table */}
          <div className="mt-4 overflow-hidden rounded-xl border border-[#e6efeb] bg-background">
            {ROWS.map((r, i) => (
              <div key={r.name} className={`flex items-center justify-between gap-3 px-4 py-2.5 text-[12px] ${i > 0 ? "border-t border-[#eef3f1]" : ""}`}>
                <span className="min-w-0 flex-1 truncate font-semibold text-[#243b53]">{r.name}</span>
                <span className="hidden w-32 truncate text-foreground md:block">{r.vendor}</span>
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${TONE[r.tone]}`}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

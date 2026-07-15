/** Managed Suppliers logo — real brand files from /assets/brand/.
 *  Wordmark: managedsuppliers-logo.svg (navy #324a60 + mint accents, 186x54 viewBox).
 *  Mark: managedsuppliers-signet.svg (teal/mint chevron mark).
 *  Dark variant inverts the wordmark to white via CSS filter (the SVG is dark-on-light). */

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/brand/managedsuppliers-signet.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={Math.round(size * (53.82 / 57.71))}
      className="block"
    />
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="/" aria-label="Managed Suppliers home" className="flex items-center no-underline">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/brand/managedsuppliers-logo.svg"
        alt="managedsuppliers"
        className={`h-9 w-auto ${dark ? "brightness-0 invert" : ""}`}
      />
    </a>
  );
}

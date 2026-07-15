/** Minimal browser-chrome frame for real product screenshots:
 *  rounded card, top bar with three dots, soft shadow, thin mint ring. */

/** CSS-only micro-interaction class strings (shared across sections). */
export const ARROW_FX = "[&>svg]:transition-transform [&>svg]:duration-200 hover:[&>svg]:translate-x-1";
export const BTN_FX = "transition active:scale-[0.98]";

type Props = {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
};

export default function ScreenshotFrame({ src, alt, eager = false, className = "" }: Props) {
  return (
    <figure className={`overflow-hidden rounded-xl bg-background shadow-[0_28px_60px_-30px_rgba(36,59,83,0.45)] ring-1 ring-[#8dccc0]/70 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-[#e6efeb] bg-[#f3f7f6] px-3.5 py-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ef6a5f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f6c04e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5cc98a]" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className="block w-full" />
    </figure>
  );
}

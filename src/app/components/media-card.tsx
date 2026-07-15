import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  id: string;
  kind?: string;
  href: string;
  kind2?: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  kind3?: string;
  kind4?: string;
  href2: string;
  title: string;
  description: string;
  description2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <article className={cn("after:content-['_'] after:block after:h-0 after:text-foreground after:text-[0rem] after:font-medium after:leading-[1.5rem]", styles.className)} id={d.id}>
      <div className={styles.className2}>
        <a className={styles.className3} data-component={d.kind} href={d.href}>
          <img className={cn("max-md:w-75.5 max-md:h-[11.8125rem]", styles.className4)} data-component={d.kind2} alt={d.alt} height="250" sizes="(max-width:479px) 479px, 100vw " src={d.imgSrc} srcSet={d.srcSet} width="400" />
        </a>
      </div>
      {" "}
      <h2 className={styles.className5} data-component={d.kind3}>
        <a className={styles.className6} data-component={d.kind4} href={d.href2}>
          {d.title}
        </a>
        {" "}
      </h2>
      {" "}
      <p className={styles.className7}>
        <span className={styles.className8}>
          {d.description}
        </span>
      </p>
      <div className={styles.className9}>
        <div className={styles.className10}>
          <p className={styles.className11}>
            {d.description2}
          </p>
          {" "}
        </div>
      </div>
      {" "}
    </article>
  );
}

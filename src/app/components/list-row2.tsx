import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline text-primary cursor-pointer before:text-primary before:text-sm before:leading-3.5", styles.className)} data-component="link" href={d.href}>
        {" "}
        <span className="inline">
          {d.label}
        </span>
        {" "}
      </a>
      {" "}
    </li>
  );
}

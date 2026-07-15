export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item mb-[0.4375rem]">
      <a className="inline cursor-pointer hover:border-clr-22 hover:text-clr-22 hover:outline-clr-22 hover:[text-decoration-color:var(--clr-22)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}

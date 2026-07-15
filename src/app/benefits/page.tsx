import { redirect } from "next/navigation";

/** Benefits merged into /features (2026-07-15). Old links keep working. */
export default function BenefitsPage() {
  redirect("/features#benefits");
}

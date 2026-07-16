/**
 * Supabase keepalive. The Supabase free tier auto-pauses a project after ~7 days
 * with no requests, which would silently break the contact form and the
 * leads -> Asana automation. This route makes one lightweight database request so
 * the project stays counted as active. Runs daily via the Vercel cron in
 * vercel.json. It is a read-only ping, NOT a form submission, so it never creates
 * leads or Asana cards. The aventario.com site also pings the same shared project;
 * this makes managedsuppliers independent of it.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const SB = "https://zpuywttjadohtxvaloyq.supabase.co";
  // Publishable key — already public in the site's form JS, safe to ship.
  const KEY = process.env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_0R1ZCaygbhIA4xY3MhpN6w_qOFeRhoa";
  const started = Date.now();
  try {
    const r = await fetch(`${SB}/rest/v1/leads?select=id&limit=1`, {
      headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
    });
    // 200/400/401/404 all mean the project is serving; only 5xx / throw = down/paused.
    const alive = [200, 400, 401, 404].includes(r.status);
    return Response.json(
      { ok: alive, service: "supabase-keepalive", supabaseStatus: r.status, ms: Date.now() - started, ts: new Date().toISOString() },
      { status: alive ? 200 : 503 },
    );
  } catch (e) {
    return Response.json(
      { ok: false, service: "supabase-keepalive", error: e instanceof Error ? e.message : String(e), ts: new Date().toISOString() },
      { status: 503 },
    );
  }
}

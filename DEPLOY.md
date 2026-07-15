# Deployment runbook: managedsuppliers.com

Same setup as aventario.com: GitHub is the source of truth, Vercel builds and
hosts on every push to `main`, forms write to the shared Aventario Supabase.
If this laptop dies, the site keeps running and can be edited from any machine
that clones the repo.

## Architecture

- **Repo:** github.com/Aventario/managedsuppliers-website (private)
- **Hosting:** Vercel, team "julianrobida-7245's projects" (same team as aventario-website). Framework: Next.js 15, no special build settings needed (auto-detected). No environment variables required.
- **Forms:** the contact form inserts directly into the shared Supabase project `zpuywttjadohtxvaloyq` (eu-west-1), table `public.leads`, with the publishable key and `source = 'managedsuppliers.com'`. RLS allows public INSERT only; reads require the dashboard or service key. The Supabase keepalive cron on aventario-website already keeps this project active, so no second cron is needed.
- Query leads: Supabase dashboard > Table editor > leads, filter source = managedsuppliers.com.

## One-time setup steps (interactive, ~5 minutes)

1. **Create the GitHub repo** (needs your GitHub login):
   https://github.com/organizations/Aventario/repositories/new
   Name: `managedsuppliers-website`, Private, no README (the repo already has commits). Create.
2. **Push** (from a terminal):
   ```
   cd "C:\Users\robid\Desktop\Aventario Claude\managed-suppliers\website"
   git push -u origin main
   ```
   A browser window may open for GitHub sign-in; approve it once. The remote is already configured.
3. **Vercel project:** https://vercel.com/new > Import Git Repository > `Aventario/managedsuppliers-website` > Deploy. No settings to change (Next.js auto-detected). From then on every push to `main` deploys automatically.
4. **Domain:** in the new Vercel project > Settings > Domains > add `managedsuppliers.com` and `www.managedsuppliers.com` (set www to redirect to the apex).
5. **IONOS DNS** (Domains & SSL > managedsuppliers.com > DNS):
   - Delete existing A / AAAA / CNAME records for `@` and `www` that point at the old WordPress host.
   - Add: `A` record, host `@`, value `76.76.21.21`
   - Add: `CNAME` record, host `www`, value `cname.vercel-dns.com`
   - Keep all MX / TXT records untouched (mail stays where it is).
   - Vercel shows "Valid configuration" in Settings > Domains once DNS propagates (minutes to a few hours). SSL is automatic.

## Everyday workflow

Edit locally, then `git add -A && git commit -m "..." && git push`. Vercel deploys `main` to production automatically. Local preview: `npm run dev` (or `npx next start --port 3000` after `npm run build`).

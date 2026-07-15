/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next app (not static export) so the /api/contact route works as a
  // serverless function on Vercel. Pages are still statically pre-rendered.
  images: { unoptimized: true },
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // The dev-tools badge would leak into reviewer/validator screenshots.
  devIndicators: false,
};
export default nextConfig;

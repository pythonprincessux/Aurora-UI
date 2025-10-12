/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Skip all ESLint checks during builds (Vercel safe)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Skip all TypeScript type checking during builds
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Keep only valid experiment
  experimental: {
    typedRoutes: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
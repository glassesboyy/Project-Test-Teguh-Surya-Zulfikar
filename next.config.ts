// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.suitdev.com",
      },
      {
        protocol: "https",
        hostname: "image.shutterstock.com",
      },
    ],
    // Optimize images untuk performance
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 3600,
    // Enable lazy loading by default
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Image sizes for better lazy loading
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // API rewrites (opsional - bisa digunakan jika ingin proxy API)
  async rewrites() {
    return [
      {
        source: "/api/ideas",
        destination: "https://suitmedia-backend.suitdev.com/api/ideas",
      },
    ];
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;

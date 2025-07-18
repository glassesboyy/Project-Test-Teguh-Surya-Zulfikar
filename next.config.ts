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
    minimumCacheTTL: 3600, // 1 hour
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

  // Experimental features untuk Next.js 15
  experimental: {
    // Optimized untuk app router
    optimizePackageImports: ["react-scroll-parallax"],
  },

  // Compiler optimizations
  compiler: {
    // Remove console logs di production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [{
      source: "/images/:path*",
      headers: [{
        key: "Cache-Control",
        // Public filenames are not hashed, so recheck daily.
        value: "public, max-age=86400, stale-while-revalidate=604800",
      }],
    }];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    // Force Turbopack root to this workspace to avoid picking parent lockfiles
    root: __dirname,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    // Force Turbopack root to this workspace to avoid picking parent lockfiles
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "substackcdn.com" },
      { protocol: "https", hostname: "substack-post-media.s3.amazonaws.com" },
    ],
  },
  // Expose the production reCAPTCHA v3 site key; falls back to the provided key if
  // the environment variable is missing so the contact form keeps working.
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY:
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "6LfT7hQsAAAAAOGzTc0abJ7TJFYv-ej4JHUXQgHT",
  },
};

export default nextConfig;

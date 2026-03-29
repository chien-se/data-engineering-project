import type { NextConfig } from "next";

const repo = "Personal_Website";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  // No trailing slash — a trailing slash produced /Personal_Website//_next/... and broke assets on GitHub Pages.
  assetPrefix: isProd ? `/${repo}` : "",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
};

export default nextConfig;

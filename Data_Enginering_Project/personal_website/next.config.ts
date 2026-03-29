import type { NextConfig } from "next";

// Must match the GitHub repo name segment: https://<user>.github.io/<RepoName>/
const basePath =
  process.env.NODE_ENV === "production" ? "/Personal_Website" : "";

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

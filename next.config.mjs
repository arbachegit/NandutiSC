import { execSync } from "node:child_process";

let gitSha = "unknown";
try {
  gitSha = execSync("git rev-parse --short HEAD").toString().trim();
} catch {
  gitSha = process.env.GIT_SHA ?? "nogit";
}
const timestamp = Date.now();
const BUILD_ID = `${gitSha}-${timestamp}`;

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "standalone",
  basePath: isProd ? "/nanduti" : "",
  assetPrefix: isProd ? "/nanduti" : "",
  generateBuildId: async () => BUILD_ID,
  env: {
    NEXT_PUBLIC_BUILD_ID: BUILD_ID,
    NEXT_PUBLIC_BUILD_SHA: gitSha,
  },
};

export default nextConfig;

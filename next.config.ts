import type { NextConfig } from "next";

// GitHub Pages serves static files only, so the site is a static export.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

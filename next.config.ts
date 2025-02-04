import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable Image Optimization
  },
  /* config options here */
};

export default nextConfig;

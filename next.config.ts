import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  experimental: {
    // reactCompiler has been moved out of experimental or changed
  },
  reactCompiler: true,
};

export default nextConfig;

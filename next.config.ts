import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/gads',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

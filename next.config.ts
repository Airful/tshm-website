import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tshm.co.in",
      },
    ],
  },
};

export default nextConfig;

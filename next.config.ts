import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tshm.co.in",
      },
    ],
    // Limit the number of distinct optimized variants the Image Optimization
    // function generates (each unique width/quality is a Fluid CPU job).
    // Trimmed from the defaults — this is a marketing site, not a media app.
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [128, 256, 384],
    formats: ["image/webp"],
    qualities: [75],
    // Cache optimized images for 31 days so crawler/bot traffic doesn't
    // keep recomputing the same variants (default is 4 hours).
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
};

export default nextConfig;

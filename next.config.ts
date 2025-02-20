import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {},
  },
};

export default withContentlayer(nextConfig);

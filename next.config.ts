import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dd0wmpgoq/**",
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "disowe-labs",
  project: "thisisforyou",

  // Only upload source maps in CI to avoid leaking them locally
  sourcemaps: {
    disable: !process.env.CI,
  },

  // Suppress verbose Sentry build output
  silent: !process.env.CI,

  // Automatically tree-shake Sentry logger statements
  disableLogger: true,
});

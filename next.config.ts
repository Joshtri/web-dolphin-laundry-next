import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */

  allowedDevOrigins: [
    "http://10.138.39.48:3000", // ganti dengan IP yang akses aplikasi
  ],
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://landing-page-dolphin-api.vercel.app/api/:path*",
      },
    ];
  },
};

export default withNextIntl(nextConfig);

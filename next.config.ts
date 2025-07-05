import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  allowedDevOrigins: [
    "http://10.138.39.48:3000", // ganti dengan IP yang akses aplikasi

  ]
};

export default nextConfig;

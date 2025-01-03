import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
    API_ENDPOINT: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}/api`
      : 'http://localhost:3000/api',
  }
};

export default nextConfig;

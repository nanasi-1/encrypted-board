import type { NextConfig } from "next";

// @see https://vercel.com/docs/projects/environment-variables/system-environment-variables
const baseUrl = process.env.VERCEL_ENV === 'production'
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

const nextConfig: NextConfig = {
  env: {
    URL: baseUrl,
    API_ENDPOINT: `${baseUrl}/api`,
    RUNTIME: 'Next.js'
  }
};

export default nextConfig;

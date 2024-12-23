/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_URL: process.env.APP_URL,
    GTM_ID: process.env.GTM_ID,
  },
};
export default nextConfig;

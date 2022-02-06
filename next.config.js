/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  swcMinify: false,
  images: {
    domains: ["www.markuptag.com"],
  },
};

module.exports = nextConfig;

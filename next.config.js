/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["www.markuptag.com"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.0.194'],
};

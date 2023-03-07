/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // docker
  output: 'standalone',

  // images - static gen
  images: {
    domains: ['raw.githubusercontent.com', ],
  },
};

module.exports = nextConfig;

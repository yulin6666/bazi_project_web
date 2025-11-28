/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yulin15.zeabur.app',
        pathname: '/**',
      }
    ],
    unoptimized: true,
  },
  distDir: 'dist',
  trailingSlash: true,
}

module.exports = nextConfig
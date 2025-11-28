/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['yulin15.zeabur.app'],
    unoptimized: true,
  },
  distDir: 'dist',
  trailingSlash: true,
}

module.exports = nextConfig
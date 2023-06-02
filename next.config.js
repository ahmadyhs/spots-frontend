/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.spotscoworking.live'],
  }
}

module.exports = nextConfig

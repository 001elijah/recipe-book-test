import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.themealdb.com',
        pathname: '/images/media/meals/**',
        protocol: 'https'
      }
    ]
  }
}

export default nextConfig

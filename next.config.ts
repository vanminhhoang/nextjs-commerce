import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig

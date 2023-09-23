/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tourmaly.com',
          },
        ],
      },
}

module.exports = nextConfig

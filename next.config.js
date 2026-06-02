/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '21' }],
        destination: 'https://www.paloaltoadvanceddentists.com',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '79' }],
        destination: 'https://www.paloaltoadvanceddentists.com',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

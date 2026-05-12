import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.paloaltoadvanceddentists.com/sitemap.xml',
    host: 'https://www.paloaltoadvanceddentists.com',
  }
}

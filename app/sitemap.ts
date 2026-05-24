import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.paloaltoadvanceddentists.com'
  const lastModified = new Date()

  return [
    { url: base,                              lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`,                lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/implants`,       lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/pinhole`,        lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/smile-makeover`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/doctors`,                 lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/practice`,                lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/patients`,                lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,                 lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}

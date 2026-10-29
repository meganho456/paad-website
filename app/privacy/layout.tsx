import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Palo Alto Advanced Dentists — how we collect, use, and protect your personal information, and your rights under California and federal law.',
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Palo Alto Advanced Dentists',
    description:
      'How Palo Alto Advanced Dentists collects, uses, and protects your personal information.',
    url: 'https://www.paloaltoadvanceddentists.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

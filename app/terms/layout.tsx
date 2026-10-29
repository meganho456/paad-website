import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Palo Alto Advanced Dentists — website usage, intellectual property, limitation of liability, and governing law.',
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Palo Alto Advanced Dentists',
    description:
      'The terms governing your use of the Palo Alto Advanced Dentists website.',
    url: 'https://www.paloaltoadvanceddentists.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Summer & Back-to-School Smile Event | Invisalign + Whitening Special',
  description:
    'Free Zoom whitening with Invisalign, or $150 off standalone whitening. Limited offer — book by Aug 31. Palo Alto Advanced Dentists. Call (650) 324-4900.',
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/summer-smile-promo',
  },
  openGraph: {
    title: 'Summer Smile Event — Invisalign + Whitening Special | PAAD',
    description:
      'Complimentary Zoom whitening with Invisalign, or $150 off standalone whitening. Valid for consultations by August 31. Palo Alto, CA.',
    url: 'https://www.paloaltoadvanceddentists.com/summer-smile-promo',
  },
}

export default function SummerSmilePromoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best summer Invisalign packages or dental specials in Palo Alto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Palo Alto Advanced Dentists is running an exclusive "Summer & Back-to-School Smile Event" through August 31. This limited-time cosmetic special bundles a complimentary professional chairside teeth whitening session with any new Invisalign treatment, helping local students, parents, and professionals achieve a straighter, brighter smile before the fall semester begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I coordinate teeth whitening with Invisalign clear aligners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For optimal, even results, professional chairside whitening must be performed before your Invisalign composite attachments are placed. This prevents mismatched spots on your enamel. After a brief 1-to-2 week color stabilization period, we take digital scans to begin your clear aligner therapy. A final quick touch-up can be done using your clear retainers at the end of treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can college students home for the summer get Invisalign on the Peninsula?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The summer months are the ideal window for high school and college students on the San Francisco Peninsula to start clear aligner treatment. Because routines are more flexible, we can complete initial consultations, chairside whitening, and 3D digital impressions seamlessly before students head back to campus in the fall.',
      },
    },
  ],
}

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  )
}

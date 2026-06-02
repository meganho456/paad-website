import type { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Professional Teeth Whitening',
  description: 'Professional teeth whitening in Palo Alto, CA. In-office Zoom whitening — up to 8 shades brighter in 90 minutes. Custom take-home whitening trays with professional-grade gel. Sensitivity-safe protocols available. Complimentary with completed Invisalign cases.',
  procedureType: 'Cosmetic',
  bodyLocation: 'Teeth',
  preparation: 'Shade assessment and dental examination to confirm candidacy. Existing restorations (crowns, veneers, bonding) will not whiten and may need updating after whitening.',
  followup: 'Touch-up trays provided. Avoid staining foods/drinks for 48 hours post-treatment. Results last 1–3 years with maintenance.',
  performer: {
    '@type': 'Dentist',
    name: 'Dr. James Ho, DMD, MPH',
    url: 'https://www.paloaltoadvanceddentists.com/doctors',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4191 El Camino Real',
      addressLocality: 'Palo Alto',
      addressRegion: 'CA',
      postalCode: '94306',
    },
  },
  location: {
    '@type': 'Dentist',
    name: 'Palo Alto Advanced Dentists',
    telephone: '+16503244900',
    url: 'https://www.paloaltoadvanceddentists.com',
  },
}

export const metadata: Metadata = {
  title: 'Teeth Whitening Palo Alto | Zoom Whitening | 8 Shades Brighter | PAAD',
  description: 'Professional teeth whitening in Palo Alto, CA. In-office Zoom whitening up to 8 shades brighter in one 90-minute visit. Custom take-home trays. Sensitivity-safe protocol. Complimentary with Invisalign. Call (650) 324-4900.',
  keywords: [
    'teeth whitening Palo Alto', 'professional teeth whitening Palo Alto', 'Zoom whitening Palo Alto',
    'in-office whitening Palo Alto', 'teeth bleaching Palo Alto', 'smile brightening Palo Alto',
    'custom whitening trays', 'stain removal teeth', '8 shades brighter', 'cosmetic dentist Palo Alto',
    'whitening sensitive teeth', 'take-home whitening trays', 'professional bleaching gel',
  ],
  openGraph: {
    title: 'Professional Teeth Whitening in Palo Alto — Up to 8 Shades Brighter | PAAD',
    description: 'Achieve a dramatically brighter smile at Palo Alto Advanced Dentists. Zoom in-office whitening — up to 8 shades in 90 minutes. Custom take-home trays. Sensitivity-safe. Complimentary with Invisalign.',
    url: 'https://www.paloaltoadvanceddentists.com/services/teeth-whitening',
  },
}

export default function TeethWhiteningLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

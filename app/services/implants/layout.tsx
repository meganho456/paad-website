import type { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Same-Day Full-Mouth Dental Implants (All-on-4 / 5-in-1 Protocol)',
  alternateName: ['All-on-4', 'Full Arch Implants', 'Same Day Teeth', 'Teeth in a Day'],
  description:
    'Advanced 5-in-1 same-day implant protocol combining 3D CBCT-guided surgery, digital bite-force analysis, and in-house digital lab for immediate provisional restoration. Performed by Harvard-trained Dr. James Ho at Palo Alto Advanced Dentists.',
  procedureType: 'Surgical',
  followUp: 'Implant integration monitoring over 3–6 months. Final crown placed after osseointegration.',
  preparation: '3D CBCT scan, digital bite analysis, virtual surgical planning. No general anaesthesia required.',
  howPerformed:
    'Computer-guided implant placement using 3D CBCT-derived surgical guide. Extraction, socket preservation, sinus lift (if needed), implant fixture placement, and same-day provisional crown in a single appointment.',
  medicalSpecialty: 'Dentistry',
  recognizingAuthority: { '@type': 'Organization', name: 'American Academy of Implant Dentistry' },
  study: {
    '@type': 'MedicalStudy',
    description: 'Computer-guided implant placement reduces positional error to <0.1mm vs 1–2mm with freehand technique.',
  },
  performer: {
    '@type': 'Dentist',
    name: 'Dr. James Ho, DMD, MPH',
    alumniOf: 'Harvard School of Dental Medicine',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4191 El Camino Real',
      addressLocality: 'Palo Alto',
      addressRegion: 'CA',
      postalCode: '94306',
    },
    telephone: '+16503244900',
    url: 'https://www.paloaltoadvanceddentists.com',
  },
}

export const metadata: Metadata = {
  title: 'Dental Implants Palo Alto | Same-Day & Full-Arch Implants — 3D CBCT Guided',
  description:
    'Dental implants in Palo Alto, CA — same-day placement with 3D CBCT-guided surgery. Harvard-trained Dr. James Ho performs All-on-4 and full-arch implants using digital bite analysis. Serving Silicon Valley since 2005.',
  keywords: [
    'full mouth dental implants palo alto',
    'all on 4 implants silicon valley',
    'same day teeth palo alto',
    '3D CBCT guided implant surgery',
    'digital implant planning bay area',
    'same day implants dr james ho',
    'all on 4 bay area',
    'teeth in a day palo alto',
    'minimally invasive implants silicon valley',
    'full arch restoration palo alto',
  ],
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/implants' },
  openGraph: {
    title: 'Same-Day Full-Mouth Implants | 3D CBCT Guided | Palo Alto Advanced Dentists',
    description:
      'All-on-4 and 5-in-1 same-day implant protocol with 3D CBCT-guided surgery. Harvard-trained Dr. James Ho, Palo Alto CA. Walk in, walk out with a smile.',
    url: 'https://www.paloaltoadvanceddentists.com/services/implants',
  },
}

export default function ImplantsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

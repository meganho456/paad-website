import type { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'PINHOLE Surgical Technique™ (PST) for Gum Recession',
  alternateName: ['PST', 'Chao Pinhole Technique', 'Pinhole Gum Surgery', 'Scalpel-Free Gum Recession Treatment'],
  description:
    'The Chao PINHOLE Surgical Technique® is a minimally invasive, scalpel-free procedure for treating gum recession. No donor tissue, no sutures, same-day recovery. Certified practitioner Dr. James Ho, Palo Alto Advanced Dentists.',
  procedureType: 'Surgical',
  followUp: 'Minimal post-operative restrictions. Most patients resume normal activities within 24–48 hours.',
  preparation: 'Periodontal assessment, digital X-rays, gum recession charting. Local anaesthesia only.',
  howPerformed:
    'A small pinhole entry point is created in the gum tissue. Specialised instruments loosen and reposition gum tissue coronally to cover exposed roots. Collagen strips stabilise the new gum position. No scalpel, no sutures, no donor tissue harvest.',
  medicalSpecialty: 'Dentistry',
  recognizingAuthority: { '@type': 'Organization', name: 'Pinhole Surgical Technique, Inc.' },
  relevantSpecialty: 'Periodontics',
  performer: {
    '@type': 'Dentist',
    name: 'Dr. James Ho, DMD, MPH',
    hasCredential: 'Certified PINHOLE Surgical Technique Practitioner',
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
  mainEntityOfPage: 'https://www.paloaltoadvanceddentists.com/services/pinhole',
}

export const metadata: Metadata = {
  title: 'PINHOLE Surgical Technique™ | Gum Recession Treatment Palo Alto',
  description:
    'Certified PINHOLE Surgical Technique® (PST) in Palo Alto. Dr. James Ho treats gum recession with no scalpel, no sutures, and same-day recovery. Minimally invasive gum surgery serving Silicon Valley since 2005.',
  keywords: [
    'pinhole surgical technique palo alto',
    'PST gum recession treatment',
    'minimally invasive gum surgery bay area',
    'no scalpel gum recession silicon valley',
    'chao pinhole technique palo alto',
    'gum graft alternative palo alto',
    'certified pinhole surgeon bay area',
    'gum recession treatment menlo park',
    'periodontal treatment palo alto',
    'receding gums treatment silicon valley',
  ],
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/pinhole' },
  openGraph: {
    title: 'PINHOLE Surgical Technique™ | No Scalpel Gum Recession | Palo Alto',
    description:
      'Certified PST provider Dr. James Ho reverses gum recession with no scalpel, no sutures, same-day recovery. Palo Alto, CA.',
    url: 'https://www.paloaltoadvanceddentists.com/services/pinhole',
  },
}

export default function PinholeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

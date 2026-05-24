import type { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Cosmetic Smile Makeover — Porcelain Veneers & Invisalign Elite',
  alternateName: ['Smile Makeover', 'Digital Smile Design', 'Cosmetic Dentistry', 'Invisalign Elite Palo Alto'],
  description:
    'Comprehensive cosmetic smile makeover combining digital smile design, porcelain veneers, and Invisalign Elite orthodontics. PAAD is an Invisalign Elite Preferred Provider (top 5% nationwide). Led by Harvard-trained Dr. James Ho, Palo Alto, CA.',
  procedureType: 'Non-Surgical / Minimally Invasive',
  preparation: 'iTero 3D digital scan, digital smile design simulation, occlusal analysis. No physical impressions required.',
  howPerformed:
    'Digital smile design previews the final aesthetic outcome before any preparation begins. Porcelain veneers are fabricated by specialist ceramists to match the digital blueprint. Invisalign cases are monitored with iTero progress scans every 6–8 weeks.',
  medicalSpecialty: 'Dentistry',
  performer: {
    '@type': 'Dentist',
    name: 'Dr. James Ho, DMD, MPH',
    hasCredential: ['Invisalign Elite Preferred Provider — Top 5% Nationwide'],
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
  mainEntityOfPage: 'https://www.paloaltoadvanceddentists.com/services/smile-makeover',
}

export const metadata: Metadata = {
  title: 'Cosmetic Smile Makeover | Invisalign Elite & Veneers Palo Alto',
  description:
    'Digital smile design, Invisalign Elite (top 5% provider), and porcelain veneers in Palo Alto. Harvard-trained Dr. James Ho. Preview your results before treatment begins. Serving Silicon Valley since 2005.',
  keywords: [
    'cosmetic smile makeover palo alto',
    'invisalign elite palo alto',
    'porcelain veneers silicon valley',
    'digital smile design bay area',
    'invisalign elite preferred provider palo alto',
    'cosmetic dentist palo alto',
    'smile transformation silicon valley',
    'iTero scan palo alto',
    'teeth straightening palo alto',
    'smile design consultation bay area',
  ],
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/smile-makeover' },
  openGraph: {
    title: 'Cosmetic Smile Makeover | Invisalign Elite & Veneers | Palo Alto',
    description:
      'Digital smile design, Invisalign Elite, and porcelain veneers. Harvard-trained Dr. James Ho. Preview your results before treatment. Palo Alto, CA.',
    url: 'https://www.paloaltoadvanceddentists.com/services/smile-makeover',
  },
}

export default function SmileMakeoverLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

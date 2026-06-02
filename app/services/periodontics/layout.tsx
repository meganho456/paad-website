import type { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Periodontal Disease Treatment',
  description: 'Comprehensive gum disease treatment in Palo Alto, CA. Scaling and root planing, laser periodontal therapy, PINHOLE Surgical Technique for gum recession, osseous surgery, bone grafting, and periodontal maintenance. Treating gingivitis through advanced periodontitis.',
  procedureType: 'Therapeutic',
  bodyLocation: 'Gums and Periodontal Tissue',
  preparation: 'Comprehensive periodontal examination including digital X-rays, full-mouth pocket depth charting, and bone loss assessment.',
  followup: 'Periodontal maintenance every 3–4 months. Ongoing monitoring of pocket depths and bone levels.',
  performer: {
    '@type': 'Dentist',
    name: 'Dr. James Ho, DMD, MPH',
    hasCredential: 'Certified PINHOLE Surgical Technique Practitioner',
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
  title: 'Gum Disease Treatment Palo Alto | Periodontal Therapy | Scaling & Root Planing',
  description: 'Expert periodontal disease treatment in Palo Alto, CA. Gingivitis, periodontitis, scaling and root planing, laser gum therapy, gum recession reversal with PINHOLE technique. Certified specialist. Call (650) 324-4900.',
  keywords: [
    'gum disease treatment Palo Alto', 'periodontal disease Palo Alto', 'periodontist Palo Alto',
    'scaling root planing Palo Alto', 'deep cleaning teeth Palo Alto', 'gingivitis treatment',
    'periodontitis treatment', 'gum recession treatment', 'laser gum therapy Palo Alto',
    'gum disease specialist Silicon Valley', 'periodontal maintenance', 'bone loss gum disease',
    'bleeding gums treatment', 'periodontics Palo Alto',
  ],
  openGraph: {
    title: 'Gum Disease Treatment in Palo Alto — Periodontal Therapy | PAAD',
    description: 'Comprehensive periodontal care at Palo Alto Advanced Dentists. From gingivitis to advanced periodontitis — scaling, laser therapy, PINHOLE gum recession reversal, and long-term maintenance.',
    url: 'https://www.paloaltoadvanceddentists.com/services/periodontics',
  },
}

export default function PeriodonticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

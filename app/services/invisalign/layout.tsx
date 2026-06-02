import type { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Invisalign Clear Aligner Orthodontic Treatment',
  description: 'Invisalign Elite Preferred Provider in Palo Alto, CA. Top 5% of providers nationwide. iTero 3D digital scanning, virtual smile simulation, and custom clear aligner treatment for adults and teens. Treats crowding, spacing, overbite, underbite, crossbite, and open bite.',
  procedureType: 'Therapeutic',
  bodyLocation: 'Teeth and Jaw',
  preparation: 'Initial consultation including iTero Element 3D digital scan and virtual SmileView simulation — no physical impressions needed.',
  followup: 'Vivera retainers after treatment completion. Complimentary professional whitening included for all completed Invisalign cases.',
  performer: {
    '@type': 'Dentist',
    name: 'Dr. James Ho, DMD, MPH',
    hasCredential: 'Invisalign Elite Preferred Provider — Top 5% Nationwide',
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
  title: 'Invisalign Clear Aligners Palo Alto | Elite Preferred Provider — Top 5%',
  description: 'Invisalign Elite Preferred Provider in Palo Alto, CA — top 5% of providers nationwide. iTero 3D scanner, virtual smile preview, and expert clear aligner treatment for adults and teens. Complimentary whitening included. Call (650) 324-4900.',
  keywords: [
    'Invisalign Palo Alto', 'clear aligners Palo Alto', 'Invisalign Elite Preferred Provider',
    'invisible braces Palo Alto', 'straighten teeth Palo Alto', 'orthodontics Palo Alto',
    'Invisalign teen Palo Alto', 'iTero scan Palo Alto', 'clear braces Silicon Valley',
    'Invisalign provider top 5%', 'overbite treatment Palo Alto', 'crowded teeth aligners',
  ],
  openGraph: {
    title: 'Invisalign Elite Provider in Palo Alto — Top 5% Nationwide | PAAD',
    description: 'Straighten your teeth with Invisalign clear aligners at Palo Alto Advanced Dentists. Top 5% Elite Preferred Provider. iTero 3D scanning. Virtual smile preview before you start. Adults and teens.',
    url: 'https://www.paloaltoadvanceddentists.com/services/invisalign',
  },
}

export default function InvisalignLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

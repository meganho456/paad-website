import type { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Emergency Dental Care',
  description: 'Same-day emergency dental appointments in Palo Alto, CA. Treatment for knocked-out teeth, dental abscesses, broken teeth, lost crowns, severe toothache, jaw swelling, and dental trauma. Call (650) 324-4900.',
  procedureType: 'Emergency',
  bodyLocation: 'Teeth, Gums, and Jaw',
  preparation: 'Call (650) 324-4900 immediately. For knocked-out teeth, store in milk or saliva and arrive within 30 minutes for best re-implantation outcomes.',
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
  title: 'Emergency Dentist Palo Alto | Same-Day Emergency Dental Care | PAAD',
  description: 'Emergency dentist in Palo Alto, CA. Same-day appointments for knocked-out teeth, dental abscess, broken tooth, severe toothache, lost crown, and jaw pain. Call now: (650) 324-4900.',
  keywords: [
    'emergency dentist Palo Alto', 'emergency dental care Palo Alto', 'same-day emergency dentist',
    'knocked out tooth Palo Alto', 'dental abscess treatment', 'broken tooth emergency',
    'toothache relief Palo Alto', 'emergency root canal Palo Alto', 'lost crown dentist',
    'cracked tooth Palo Alto', 'dental trauma care', 'jaw pain swelling dentist',
    'urgent dental care Palo Alto', 'after hours dentist Palo Alto',
  ],
  openGraph: {
    title: 'Emergency Dentist in Palo Alto — Same-Day Care | PAAD',
    description: 'Dental emergency in Palo Alto? Call (650) 324-4900 for same-day appointments. We treat knocked-out teeth, abscesses, broken teeth, severe pain, and all dental emergencies.',
    url: 'https://www.paloaltoadvanceddentists.com/services/dental-emergencies',
  },
}

export default function DentalEmergenciesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

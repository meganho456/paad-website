import type { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Dental Cleaning and Comprehensive Preventive Exam',
  description: 'Professional dental cleanings and preventive care in Palo Alto, CA. Standard prophylaxis, deep cleaning (scaling and root planing), and periodontal maintenance. Includes digital X-rays, oral cancer screening, full-mouth periodontal charting, fluoride treatment, and personalized hygiene coaching.',
  procedureType: 'Preventive',
  bodyLocation: 'Teeth and Gums',
  preparation: 'No special preparation required. Bring list of current medications. Bring dental insurance card. Inform us of any changes in medical history.',
  followup: 'Standard prophylaxis recommended every 6 months. Periodontal maintenance every 3–4 months for patients with a history of gum disease.',
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
  title: 'Dental Cleanings & Preventive Care Palo Alto | Comprehensive Exam | PAAD',
  description: 'Professional dental cleanings and preventive dentistry in Palo Alto, CA. Routine prophylaxis, deep cleaning, oral cancer screening, digital X-rays, and periodontal charting. Most insurance accepted. Call (650) 324-4900.',
  keywords: [
    'dental cleaning Palo Alto', 'teeth cleaning Palo Alto', 'preventive dentistry Palo Alto',
    'dental checkup Palo Alto', 'oral cancer screening Palo Alto', 'digital X-rays dentist',
    'deep cleaning teeth Palo Alto', 'scaling root planing', 'fluoride treatment adult',
    'periodontal maintenance Palo Alto', 'dental exam Palo Alto', 'routine dental care',
    'six month checkup dentist', 'comprehensive dental exam Silicon Valley',
  ],
  openGraph: {
    title: 'Dental Cleanings & Preventive Dentistry in Palo Alto | PAAD',
    description: 'Complete preventive dental care at Palo Alto Advanced Dentists. Routine cleanings, deep cleaning, oral cancer screening, digital X-rays, and personalized hygiene coaching. Most insurance accepted.',
    url: 'https://www.paloaltoadvanceddentists.com/services/cleanings',
  },
}

export default function CleaningsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

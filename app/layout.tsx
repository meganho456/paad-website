import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'LocalBusiness', 'MedicalBusiness'],
  name: 'Palo Alto Advanced Dentists',
  alternateName: 'PAAD',
  url: 'https://www.paloaltoadvanceddentists.com',
  logo: 'https://www.paloaltoadvanceddentists.com/polo%20alto%20logo.jpg',
  description:
    "Palo Alto's one-stop dental practice led by Harvard-trained Dr. James Ho. Same-day implants, Invisalign Elite, PINHOLE surgery, veneers, root canals, and preventive care — all under one roof since 2005.",
  telephone: '+16503244900',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4191 El Camino Real',
    addressLocality: 'Palo Alto',
    addressRegion: 'CA',
    postalCode: '94306',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.4082,
    longitude: -122.1287,
  },
  memberOf: [
    {
      '@type': 'Organization',
      name: 'Harvard School of Dental Medicine Alumnus',
    },
  ],
  hasMap: 'https://maps.google.com/?q=4191+El+Camino+Real+Palo+Alto+CA+94306',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Dental Insurance',
  areaServed: [
    'Palo Alto', 'Mountain View', 'Menlo Park', 'Los Altos',
    'Sunnyvale', 'Redwood City', 'Stanford', 'Silicon Valley',
  ],
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Same-Day Dental Implants' },
    { '@type': 'MedicalProcedure', name: 'Invisalign Elite' },
    { '@type': 'MedicalProcedure', name: 'Porcelain Veneers' },
    { '@type': 'MedicalProcedure', name: 'Teeth Whitening' },
    { '@type': 'MedicalProcedure', name: 'Root Canal Treatment' },
    { '@type': 'MedicalProcedure', name: 'PINHOLE Surgical Technique' },
    { '@type': 'MedicalProcedure', name: 'Preventive Dental Cleaning' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Dr. James Ho',
    jobTitle: 'Founder & Lead Dentist',
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Harvard School of Dental Medicine' },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '150',
  },
  sameAs: [
    'https://www.yelp.com/biz/palo-alto-advanced-dentists-palo-alto',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.paloaltoadvanceddentists.com'),
  title: {
    default: 'Palo Alto Dentist | Implants, Invisalign & PINHOLE Surgery',
    template: '%s | Palo Alto Advanced Dentists',
  },
  description:
    "Harvard-trained Dr. James Ho (DMD, MPH) offers same-day dental implants, Invisalign Elite & PINHOLE Surgery in Palo Alto. Advanced technology. Since 2005.",
  keywords: [
    'dentist palo alto',
    'palo alto advanced dentists',
    'same day dental implants palo alto',
    'invisalign elite palo alto',
    'pinhole surgery bay area',
    'cosmetic dentistry silicon valley',
    'root canal palo alto',
    'porcelain veneers palo alto',
    'multilingual dentist bay area',
    'family dentist palo alto',
    'dr james ho dentist',
    'harvard trained dentist',
    'dental implants menlo park',
    'teeth whitening palo alto',
  ],
  authors: [{ name: 'Dr. James Ho, DMD, MPH' }],
  creator: 'Palo Alto Advanced Dentists',
  publisher: 'Palo Alto Advanced Dentists',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.paloaltoadvanceddentists.com',
    siteName: 'Palo Alto Advanced Dentists',
    title: 'Palo Alto Dentist | Implants, Invisalign & PINHOLE Surgery',
    description:
      "Harvard-trained Dr. James Ho (DMD, MPH) offers same-day dental implants, Invisalign Elite & PINHOLE Surgery in Palo Alto. Advanced technology. Since 2005.",
    images: [
      {
        url: '/polo%20alto%20logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Palo Alto Advanced Dentists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palo Alto Dentist | Implants, Invisalign & PINHOLE Surgery',
    description:
      "Harvard-trained Dr. James Ho offers same-day dental implants, Invisalign Elite & PINHOLE Surgery in Palo Alto.",
  },
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com',
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BV29WD7WDG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BV29WD7WDG');
          `}
        </Script>
        <Script src="//code.tidio.co/sjmrtrjdaufbrl7j01xxzuq8gahdfrvh.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

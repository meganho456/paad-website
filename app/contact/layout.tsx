import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us & Request an Appointment',
  description:
    'Book a complimentary consultation at Palo Alto Advanced Dentists. Call (650) 324-4900 or fill out our online form. We respond within one business hour. Located at 4191 El Camino Real, Palo Alto, CA.',
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/contact',
  },
  openGraph: {
    title: 'Request an Appointment | Palo Alto Advanced Dentists',
    description:
      'Book a complimentary consultation online or call (650) 324-4900. Open Mon–Sat 9am–6pm at 4191 El Camino Real, Palo Alto.',
    url: 'https://www.paloaltoadvanceddentists.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

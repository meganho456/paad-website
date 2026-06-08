import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Our Doctors',
  description:
    'Meet the dental team at Palo Alto Advanced Dentists, led by Harvard-trained Dr. James Ho. Our multilingual doctors speak English, Spanish, Chinese, Korean, and Persian.',
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/doctors',
  },
  openGraph: {
    title: 'Meet Our Doctors | Palo Alto Advanced Dentists',
    description:
      'Led by Harvard-trained Dr. James Ho, our multilingual team of dentists delivers comprehensive care in English, Spanish, Chinese, Korean, and Persian.',
    url: 'https://www.paloaltoadvanceddentists.com/doctors',
  },
}

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

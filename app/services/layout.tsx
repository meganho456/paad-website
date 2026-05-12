import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dental Services',
  description:
    'Comprehensive dental services in Palo Alto: same-day implants, Invisalign Elite, porcelain veneers, teeth whitening, PINHOLE gum surgery, root canals, and preventive cleanings — all under one roof.',
  keywords: [
    'same day implants palo alto',
    'invisalign elite palo alto',
    'porcelain veneers silicon valley',
    'pinhole gum surgery',
    'root canal palo alto',
    'teeth whitening palo alto',
    'dental services bay area',
  ],
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/services',
  },
  openGraph: {
    title: 'Dental Services | Palo Alto Advanced Dentists',
    description:
      'Same-day implants, Invisalign Elite, veneers, PINHOLE surgery, root canals & preventive care — all at one Palo Alto practice.',
    url: 'https://www.paloaltoadvanceddentists.com/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

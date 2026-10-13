import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/dentures' },
  title: 'Dentures & Partial Dentures in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Custom full and partial dentures in Palo Alto, CA. Comfortable fit, natural appearance, and implant-supported options. Dr. James Ho. Call (650) 324-4900.',
  openGraph: {
    title: 'Dentures & Partial Dentures in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Custom full and partial dentures in Palo Alto, CA. Comfortable fit, natural appearance, and implant-supported options. Dr. James Ho. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/dentures',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

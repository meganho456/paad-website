import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/dental-bridges' },
  title: 'Dental Bridges in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Fixed dental bridges in Palo Alto, CA. Replace one or more missing teeth with a natural-looking, permanent restoration. Dr. James Ho. Call (650) 324-4900.',
  openGraph: {
    title: 'Dental Bridges in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Fixed dental bridges in Palo Alto, CA. Replace one or more missing teeth with a natural-looking, permanent restoration. Dr. James Ho. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/dental-bridges',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

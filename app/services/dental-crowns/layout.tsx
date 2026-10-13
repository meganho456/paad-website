import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/dental-crowns' },
  title: 'Dental Crowns in Palo Alto, CA | Same-Day CEREC | Palo Alto Advanced Dentists',
  description: 'Porcelain dental crowns in Palo Alto, CA. CEREC same-day crowns available. Restores broken, cracked or decayed teeth. Dr. James Ho. Call (650) 324-4900.',
  openGraph: {
    title: 'Dental Crowns in Palo Alto, CA | Same-Day CEREC | Palo Alto Advanced Dentists',
    description: 'Porcelain dental crowns in Palo Alto, CA. CEREC same-day crowns available. Restores broken, cracked or decayed teeth. Dr. James Ho. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/dental-crowns',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

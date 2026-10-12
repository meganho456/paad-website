import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/tooth-extraction' },
  title: 'Tooth Extraction in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Comfortable, precise tooth extractions in Palo Alto, CA — simple and surgical. Same-day appointments available. Dr. James Ho. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Porcelain Veneers in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Custom porcelain veneers in Palo Alto, CA. Transform chips, stains, gaps and misshapen teeth into a radiant smile. Digital design preview. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

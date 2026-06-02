import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Gum Disease Treatment in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Expert gum disease treatment in Palo Alto, CA. Scaling, root planing, laser therapy and maintenance for gingivitis and periodontitis. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

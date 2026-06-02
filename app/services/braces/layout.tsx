import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Braces in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Traditional and clear braces in Palo Alto, CA. Comprehensive orthodontic treatment for teens and adults. Also see Invisalign Elite Provider. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

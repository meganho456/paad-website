import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Children's Braces in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Orthodontic treatment for children and teens in Palo Alto, CA. Early intervention, phase 1 treatment, and traditional braces. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Mini Dental Implants in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Mini dental implants in Palo Alto, CA. Smaller diameter, less invasive, lower cost. Ideal for stabilising dentures or replacing small teeth. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Orthodontic Conditions We Treat in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Overbite, underbite, crossbite, crowding, gaps — orthodontic conditions treated with Invisalign and braces at Palo Alto Advanced Dentists. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

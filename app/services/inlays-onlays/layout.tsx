import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dental Inlays & Onlays in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Porcelain inlays and onlays in Palo Alto, CA — conservative restorations for teeth too damaged for fillings but not needing full crowns. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

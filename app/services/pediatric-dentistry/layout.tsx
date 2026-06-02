import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Pediatric Dentistry in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: "Children's dental care in Palo Alto, CA — cleanings, fluoride, sealants, and gentle treatment for kids of all ages. Family-friendly practice. Call (650) 324-4900.",
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

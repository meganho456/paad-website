import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Digital Dental X-Rays in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Low-radiation digital X-rays at Palo Alto Advanced Dentists. 90% less radiation than traditional film. Instant images for faster diagnosis. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

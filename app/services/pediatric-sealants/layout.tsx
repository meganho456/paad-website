import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dental Sealants for Children in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Protective dental sealants for children in Palo Alto, CA. Prevents cavities in back teeth by up to 80%. Quick, painless, and covered by most insurance. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

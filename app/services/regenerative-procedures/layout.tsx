import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/regenerative-procedures' },
  title: 'Periodontal Regenerative Procedures in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Guided tissue regeneration and bone regeneration for advanced gum disease in Palo Alto, CA. Rebuild lost bone and attachment. Call (650) 324-4900.',
  openGraph: {
    title: 'Periodontal Regenerative Procedures in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Guided tissue regeneration and bone regeneration for advanced gum disease in Palo Alto, CA. Rebuild lost bone and attachment. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/regenerative-procedures',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

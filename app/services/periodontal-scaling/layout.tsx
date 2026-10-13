import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/periodontal-scaling' },
  title: 'Periodontal Scaling & Root Planing in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Deep cleaning — scaling and root planing — for gum disease treatment in Palo Alto, CA. Non-surgical periodontal therapy. Call (650) 324-4900.',
  openGraph: {
    title: 'Periodontal Scaling & Root Planing in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Deep cleaning — scaling and root planing — for gum disease treatment in Palo Alto, CA. Non-surgical periodontal therapy. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/periodontal-scaling',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

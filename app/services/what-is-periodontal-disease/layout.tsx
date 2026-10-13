import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/what-is-periodontal-disease' },
  title: 'What Is Periodontal Disease? | Palo Alto Advanced Dentists',
  description: 'A comprehensive guide to periodontal disease — causes, stages, symptoms, and treatment options — from Palo Alto Advanced Dentists. Call (650) 324-4900.',
  openGraph: {
    title: 'What Is Periodontal Disease? | Palo Alto Advanced Dentists',
    description: 'A comprehensive guide to periodontal disease — causes, stages, symptoms, and treatment options — from Palo Alto Advanced Dentists. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/what-is-periodontal-disease',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

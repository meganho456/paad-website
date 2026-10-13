import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/oral-cancer-exam' },
  title: 'Oral Cancer Screening in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Oral cancer screening at every check-up at Palo Alto Advanced Dentists. Early detection saves lives. Harvard-trained Dr. James Ho. Call (650) 324-4900.',
  openGraph: {
    title: 'Oral Cancer Screening in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Oral cancer screening at every check-up at Palo Alto Advanced Dentists. Early detection saves lives. Harvard-trained Dr. James Ho. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/oral-cancer-exam',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

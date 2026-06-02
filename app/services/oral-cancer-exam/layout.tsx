import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Oral Cancer Screening in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Oral cancer screening at every check-up at Palo Alto Advanced Dentists. Early detection saves lives. Harvard-trained Dr. James Ho. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

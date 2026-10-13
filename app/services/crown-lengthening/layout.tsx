import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/crown-lengthening' },
  title: 'Crown Lengthening in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Crown lengthening surgery in Palo Alto, CA. Exposes more tooth structure for crown placement or corrects a gummy smile. Dr. James Ho. Call (650) 324-4900.',
  openGraph: {
    title: 'Crown Lengthening in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Crown lengthening surgery in Palo Alto, CA. Exposes more tooth structure for crown placement or corrects a gummy smile. Dr. James Ho. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/crown-lengthening',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

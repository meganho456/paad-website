import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/gum-recession' },
  title: 'Gum Recession Treatment in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Treat receding gums in Palo Alto, CA with minimally invasive PINHOLE Surgery or gum grafting. Certified specialist Dr. James Ho. Call (650) 324-4900.',
  openGraph: {
    title: 'Gum Recession Treatment in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Treat receding gums in Palo Alto, CA with minimally invasive PINHOLE Surgery or gum grafting. Certified specialist Dr. James Ho. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/gum-recession',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

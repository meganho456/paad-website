import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/gum-disease-and-diabetes' },
  title: 'Gum Disease & Diabetes in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'The link between gum disease and diabetes explained by Palo Alto Advanced Dentists. Treating periodontitis improves blood sugar control. Call (650) 324-4900.',
  openGraph: {
    title: 'Gum Disease & Diabetes in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'The link between gum disease and diabetes explained by Palo Alto Advanced Dentists. Treating periodontitis improves blood sugar control. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/gum-disease-and-diabetes',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

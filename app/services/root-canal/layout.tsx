import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/root-canal' },
  title: 'Root Canal Treatment in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Gentle, same-visit root canal therapy in Palo Alto, CA. Relieve tooth pain and save your natural tooth. Harvard-trained Dr. James Ho. Call (650) 324-4900.',
  openGraph: {
    title: 'Root Canal Treatment in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Gentle, same-visit root canal therapy in Palo Alto, CA. Relieve tooth pain and save your natural tooth. Harvard-trained Dr. James Ho. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/root-canal',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

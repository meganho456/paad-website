import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/bone-grafting' },
  title: 'Bone Grafting in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Dental bone grafting in Palo Alto, CA: socket preservation, sinus lifts, and ridge augmentation to support dental implants. Harvard-trained Dr. Ho. Call (650) 324-4900.',
  openGraph: {
    title: 'Bone Grafting in Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Dental bone grafting in Palo Alto, CA: socket preservation, sinus lifts, and ridge augmentation to support dental implants. Harvard-trained Dr. Ho. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/bone-grafting',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

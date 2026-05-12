import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Technology & Practice',
  description:
    'Palo Alto Advanced Dentists uses cutting-edge dental technology — 3D imaging, digital X-rays, CEREC same-day crowns, and laser dentistry — to deliver precise, comfortable care in Palo Alto, CA.',
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/practice',
  },
  openGraph: {
    title: 'Our Technology & Practice | Palo Alto Advanced Dentists',
    description:
      'State-of-the-art dental technology in Palo Alto: 3D imaging, CEREC crowns, laser dentistry, and digital X-rays for precise, comfortable treatment.',
    url: 'https://www.paloaltoadvanceddentists.com/practice',
  },
}

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

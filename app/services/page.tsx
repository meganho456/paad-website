import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/services',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}

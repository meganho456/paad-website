import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Patients',
  description:
    'New to Palo Alto Advanced Dentists? Learn what to expect, download new patient forms, check your insurance coverage, and find answers to common questions. We welcome patients of all ages.',
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/patients',
  },
  openGraph: {
    title: 'New Patients | Palo Alto Advanced Dentists',
    description:
      'Everything new patients need — forms, insurance info, what to expect, and FAQs. Book your first visit at (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/patients',
  },
}

export default function PatientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

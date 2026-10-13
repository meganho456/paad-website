import type { Metadata } from 'next'
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paloaltoadvanceddentists.com/services/invisalign-faqs' },
  title: 'Invisalign FAQs Palo Alto, CA | Palo Alto Advanced Dentists',
  description: "Answers to common Invisalign questions from Palo Alto's Elite Preferred Provider. Duration, cost, candidacy, and what to expect. Call (650) 324-4900.",
  openGraph: {
    title: 'Invisalign FAQs Palo Alto, CA | Palo Alto Advanced Dentists',
    description: 'Answers to common Invisalign questions from Palo Alto\'s Elite Preferred Provider. Duration, cost, candidacy, and what to expect. Call (650) 324-4900.',
    url: 'https://www.paloaltoadvanceddentists.com/services/invisalign-faqs',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

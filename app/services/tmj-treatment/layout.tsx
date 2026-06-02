import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'TMJ Treatment in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'TMJ disorder treatment in Palo Alto, CA. Jaw pain, clicking, headaches and bite issues treated with splints, Botox, and occlusal therapy. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

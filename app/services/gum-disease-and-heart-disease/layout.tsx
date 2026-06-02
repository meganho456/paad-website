import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Gum Disease & Heart Disease in Palo Alto, CA | Palo Alto Advanced Dentists',
  description: 'Research linking periodontal disease and heart disease — explained by Palo Alto Advanced Dentists. Protect your heart by treating your gums. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

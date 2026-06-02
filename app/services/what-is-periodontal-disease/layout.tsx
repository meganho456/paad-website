import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'What Is Periodontal Disease? | Palo Alto Advanced Dentists',
  description: 'A comprehensive guide to periodontal disease — causes, stages, symptoms, and treatment options — from Palo Alto Advanced Dentists. Call (650) 324-4900.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }

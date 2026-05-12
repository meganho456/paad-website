import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

export const metadata: Metadata = {
  title: {
    default: 'Palo Alto Advanced Dentists | Harvard-Trained Excellence',
    template: '%s | Palo Alto Advanced Dentists',
  },
  description:
    'Palo Alto\'s complete dental practice — from routine fillings and cleanings to same-day implants, Invisalign Elite, PINHOLE surgery, root canals, and veneers. One roof, every treatment. Bay Area Best Dentist.',
  keywords: [
    'dentist palo alto',
    'dental implants silicon valley',
    'invisalign elite palo alto',
    'harvard dentist',
    'same day implants',
    'cosmetic dentistry bay area',
    'pinhole surgery',
    'multilingual dentist',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Palo Alto Advanced Dentists',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}

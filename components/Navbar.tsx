'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/doctors',  label: 'Our Doctors' },
  { href: '/practice', label: 'Our Practice' },
  { href: '/patients', label: 'Patients' },
  { href: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      {/* ── Desktop bar ── */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-8 h-20"
        style={{ gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}
      >
        {/* Left — Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 shrink-0">
            <Image src="/logo-t.png" alt="Palo Alto Advanced Dentists" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Center — Nav links absolutely centered */}
        <nav className="flex items-center gap-9">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold transition-colors duration-200 whitespace-nowrap"
              style={{
                fontSize: '0.9375rem',
                color: pathname === link.href ? '#D4A843' : 'rgba(255,255,255,0.82)',
              }}
              onMouseEnter={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = '#fff' }}
              onMouseLeave={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.82)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right — CTA */}
        <div className="flex items-center gap-5 justify-end">
          <a
            href="tel:6503244900"
            className="flex items-center gap-1.5 font-medium transition-colors duration-200 hover:text-white"
            style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}
          >
            <Phone className="w-3.5 h-3.5" />
            (650) 324-4900
          </a>
          <Link href="/contact" className="btn-gold text-sm py-2 px-5">
            Book Now
          </Link>
        </div>
      </div>

      {/* ── Mobile bar ── */}
      <div className="lg:hidden flex items-center justify-between px-5 h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 shrink-0">
            <Image src="/logo-t.png" alt="PAAD" fill className="object-contain" priority />
          </div>
          <span
            className="font-bold leading-tight"
            style={{ fontSize: '0.875rem', color: '#D4A843', letterSpacing: '-0.01em' }}
          >
            Palo Alto Advanced Dentists
          </span>
        </Link>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="p-2 text-white/80 hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/10"
            style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <nav className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold py-3.5 border-b border-white/8 transition-colors duration-200"
                  style={{ color: pathname === link.href ? '#D4A843' : 'rgba(255,255,255,0.85)' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-5 flex flex-col gap-3">
                <a href="tel:6503244900" className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <Phone className="w-4 h-4" style={{ color: '#D4A843' }} />
                  (650) 324-4900
                </a>
                <Link href="/contact" className="btn-gold text-center text-sm py-3">
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/',         label: 'Home' },
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
        background: scrolled
          ? 'rgba(0,0,0,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[52px] flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative w-9 h-9 shrink-0">
            <Image src="/logo-t.png" alt="PAAD" fill className="object-contain" priority />
          </div>
          <span
            className="font-bold text-white tracking-tight"
            style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}
          >
            PAAD
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(1, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: pathname === link.href
                  ? '#D4A843'
                  : 'rgba(255,255,255,0.75)',
              }}
              onMouseEnter={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = '#fff' }}
              onMouseLeave={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:6503244900"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            <Phone className="w-3 h-3" />
            (650) 324-4900
          </a>
          <Link href="/contact" className="btn-gold text-sm py-2 px-5">
            Book Now
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
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
            style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)' }}
          >
            <nav className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium py-3 border-b border-white/5 transition-colors duration-200"
                  style={{ color: pathname === link.href ? '#D4A843' : 'rgba(255,255,255,0.8)' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-5 flex flex-col gap-3">
                <a href="tel:6503244900" className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <Phone className="w-4 h-4" style={{ color: '#D4A843' }} />
                  (650) 324-4900
                </a>
                <Link href="/contact" className="btn-gold text-center text-sm">
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

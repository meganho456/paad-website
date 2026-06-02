'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

const servicesMenu = [
  { href: '/services/implants',          label: 'Same-Day Implants',     tag: 'Signature' },
  { href: '/services/pinhole',           label: 'PINHOLE Surgery™',      tag: 'Minimally Invasive' },
  { href: '/services/invisalign',        label: 'Invisalign Elite',      tag: 'Top 5%' },
  { href: '/services/smile-makeover',    label: 'Smile Makeover',        tag: 'Cosmetic' },
  { href: '/services/teeth-whitening',   label: 'Teeth Whitening',       tag: 'Quick' },
  { href: '/services/dental-emergencies',label: 'Dental Emergencies',    tag: 'Same-Day' },
  { href: '/services/periodontics',      label: 'Gum Disease / Perio',   tag: 'Periodontal' },
  { href: '/services/cleanings',         label: 'Cleanings & Prevention',tag: 'Preventive' },
  { href: '/services#veneers',           label: 'Porcelain Veneers',     tag: 'Cosmetic' },
]

const doctorsMenu = [
  { href: '/doctors#james-ho',       label: 'Dr. James Ho',            sub: 'Founder · Harvard D.M.D.' },
  { href: '/doctors#ryan-ho',        label: 'Dr. Ryan Charles Ho',     sub: 'Associate · D.M.D.' },
  { href: '/doctors#sara-hamed',     label: 'Dr. Sara Hamed-Negahdar', sub: 'Associate · D.D.S.' },
  { href: '/doctors#pedro-avendano', label: 'Dr. Pedro Avendaño',      sub: 'Associate · D.D.S.' },
  { href: '/doctors#eddy-wang',      label: 'Dr. Eddy Wang',           sub: 'Associate · D.M.D.' },
]

const navLinks = [
  { href: '/services', label: 'Services',    menu: servicesMenu },
  { href: '/doctors',  label: 'Our Doctors', menu: doctorsMenu },
  { href: '/practice', label: 'Our Practice' },
  { href: '/patients', label: 'Patients' },
  { href: '/contact',  label: 'Contact' },
]

function DropdownMenu({ items, type }: { items: typeof servicesMenu | typeof doctorsMenu; type: 'services' | 'doctors' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: 'rgba(10,10,10,0.97)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(24px)',
        minWidth: type === 'services' ? '280px' : '300px',
      }}
    >
      <div className="p-2">
        {(items as any[]).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl transition-colors duration-150 group"
            style={{ color: 'rgba(255,255,255,0.82)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <div>
              <span className="block text-sm font-semibold">{item.label}</span>
              {item.sub && <span className="block text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.sub}</span>}
            </div>
            {item.tag && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0"
                style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}>
                {item.tag}
              </span>
            )}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu,   setOpenMenu]   = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setMobileExpanded(null) }, [pathname])

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }

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
      <div className="hidden lg:flex items-center max-w-7xl mx-auto px-8 h-20 relative">
        {/* Left — Logo + Name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-10 h-10 shrink-0">
            <Image src="/logo-t.png" alt="Palo Alto Advanced Dentists" fill className="object-contain" priority />
          </div>
          <span className="font-bold whitespace-nowrap" style={{ fontSize: '0.95rem', color: '#D4A843', letterSpacing: '-0.01em' }}>
            Palo Alto Advanced Dentists
          </span>
        </Link>

        {/* Center — Nav links absolutely centered */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-9">
          {navLinks.slice(0, 4).map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.menu ? handleMouseEnter(link.label) : undefined}
              onMouseLeave={() => link.menu ? handleMouseLeave() : undefined}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 font-semibold transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontSize: '0.9375rem',
                  color: pathname.startsWith(link.href) ? '#D4A843' : 'rgba(255,255,255,0.82)',
                }}
                onMouseEnter={(e) => { if (!pathname.startsWith(link.href)) (e.currentTarget.style.color = '#fff') }}
                onMouseLeave={(e) => { if (!pathname.startsWith(link.href)) (e.currentTarget.style.color = 'rgba(255,255,255,0.82)') }}
              >
                {link.label}
                {link.menu && (
                  <ChevronDown
                    className="w-3.5 h-3.5 transition-transform duration-200"
                    style={{ transform: openMenu === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                )}
              </Link>

              <AnimatePresence>
                {link.menu && openMenu === link.label && (
                  <DropdownMenu
                    items={link.menu}
                    type={link.label === 'Services' ? 'services' : 'doctors'}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right — CTA */}
        <div className="ml-auto flex items-center gap-5 shrink-0">
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
                <div key={link.href}>
                  {link.menu ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(v => v === link.label ? null : link.label)}
                        className="w-full text-left text-lg font-semibold py-3.5 border-b border-white/8 flex items-center justify-between transition-colors duration-200"
                        style={{ color: pathname.startsWith(link.href) ? '#D4A843' : 'rgba(255,255,255,0.85)' }}
                      >
                        {link.label}
                        <ChevronDown
                          className="w-4 h-4 transition-transform duration-200"
                          style={{ transform: mobileExpanded === link.label ? 'rotate(180deg)' : 'rotate(0deg)', color: '#D4A843' }}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden pl-4 mb-1"
                          >
                            {(link.menu as any[]).map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block py-2.5 text-sm font-medium border-b border-white/5"
                                style={{ color: 'rgba(255,255,255,0.65)' }}
                              >
                                {item.label}
                                {item.sub && <span className="block text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.sub}</span>}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-lg font-semibold py-3.5 border-b border-white/8 block transition-colors duration-200"
                      style={{ color: pathname === link.href ? '#D4A843' : 'rgba(255,255,255,0.85)' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
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

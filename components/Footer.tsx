import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, Star } from 'lucide-react'

const services = [
  'PINHOLE Surgery',
  'Porcelain Veneers',
  'Same-Day Implants',
  'Invisalign Elite',
  'Teeth Whitening',
  'Root Canal',
  'Comprehensive Exam & Cleaning',
]

const practiceLinks = [
  { label: 'Our Doctors',    href: '/doctors' },
  { label: 'Our Technology', href: '/practice' },
  { label: 'New Patients',   href: '/patients' },
  { label: 'Patient Portal', href: '/patients#portal' },
  { label: 'Contact Us',     href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div>
            <div className="mb-5">
              <div className="relative h-14 w-48">
                <Image
                  src="/palo alto logo.png"
                  alt="Palo Alto Advanced Dentists — same-day implants, Invisalign Elite, and PINHOLE Surgery in Palo Alto, CA. Harvard-trained Dr. James Ho, DMD MPH."
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              One practice. Every treatment. From routine cleanings and
              fillings to same-day implants, PINHOLE surgery, Invisalign,
              and root canals — all under one roof in Palo Alto, CA since 2005.
            </p>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              ))}
              <span className="text-white/50 text-xs ml-1">Bay Area Best Dentist</span>
            </div>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              We speak: English · Spanish · Chinese · Korean · Persian
            </p>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white/90 font-semibold text-xs uppercase tracking-widest mb-6">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-600 group-hover:bg-gold-400 transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice column */}
          <div>
            <h3 className="text-white/90 font-semibold text-xs uppercase tracking-widest mb-6">
              Practice
            </h3>
            <ul className="space-y-2.5">
              {practiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-600 group-hover:bg-gold-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white/90 font-semibold text-xs uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/75 text-sm">4191 El Camino Real</p>
                  <p className="text-white/50 text-sm">Palo Alto, CA 94306</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <a
                  href="tel:6503244900"
                  className="text-white/75 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  (650) 324-4900
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/75 text-sm">Mon – Sat: 9 am – 6 pm</p>
                  <p className="text-white/50 text-sm">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/55 text-sm">
            © {new Date().getFullYear()} Palo Alto Advanced Dentists. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer & design credit */}
        <div className="mt-6 pt-5 border-t border-white/10 text-center space-y-2">
          <p className="text-white/45 text-xs leading-relaxed max-w-3xl mx-auto">
            For informational purposes only — not a substitute for professional dental advice. Consult a qualified dentist for your oral health needs.
          </p>
          <p className="text-white/45 text-xs">
            Website designed by <span className="text-white/65 font-medium">Megan Ho</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

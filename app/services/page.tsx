'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Zap, Smile, Sparkles, Sun, ShieldCheck, Activity,
  Scissors, CheckCircle2, ArrowRight, ChevronRight, Phone
} from 'lucide-react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

const services = [
  {
    id: 'pinhole',
    icon: <Scissors className="w-9 h-9" />,
    tag: 'Minimally Invasive',
    title: 'PINHOLE Surgical Technique™',
    headline: 'Gum recession reversed. No grafts.',
    desc: [
      "The Chao PINHOLE Surgical Technique® is a revolutionary, scalpel-free approach to treating gum recession. Through a tiny pinhole in the gum, special instruments gently loosen and reposition the gum tissue — no cutting, no sutures, no donor tissue.",
      "Dr. Ho is one of a select number of certified PINHOLE practitioners. Multiple teeth can be treated in a single visit, with recovery typically measured in hours rather than weeks.",
    ],
    benefits: [
      'No scalpel or sutures required',
      'Multiple teeth treated in one visit',
      'Same-day recovery for most patients',
      'Eliminates graft donor site pain',
      'Reduces sensitivity immediately',
      'Long-lasting gum coverage',
    ],
    note: 'Dr. Ho holds official PINHOLE Surgical Technique® certification.',
  },
  {
    id: 'veneers',
    icon: <Sparkles className="w-9 h-9" />,
    tag: 'Cosmetic Excellence',
    title: 'Porcelain Veneers',
    headline: 'Your smile, beautifully reimagined.',
    desc: [
      "Custom-crafted ultra-thin porcelain shells bonded to the front surface of your teeth. Veneers correct shape, color, length, and alignment — transforming your smile in as few as two appointments.",
      "We use digital smile design to preview your result and collaborate with world-class ceramists to craft veneers that are indistinguishable from natural teeth.",
    ],
    benefits: [
      'Digital smile design preview',
      'Ultra-thin minimal prep option',
      'Stain-resistant porcelain',
      'Corrects chips, gaps, and discoloration',
      '10–15 year longevity with care',
      'Natural, luminous result',
    ],
    note: 'Available as composite, porcelain, and no-prep ultra-thin options.',
  },
  {
    id: 'implants',
    icon: <Zap className="w-9 h-9" />,
    tag: 'Signature Procedure',
    title: '5-in-1 Same Day Implant Surgery',
    headline: 'Walk in. Walk out with a smile.',
    desc: [
      "PAAD's exclusive 5-in-1 Same Day Implant Protocol combines five procedures — extraction, socket preservation, sinus lift (when needed), implant placement, and provisional restoration — into a single, streamlined appointment.",
      "Dr. Ho pioneered this technique to dramatically reduce patient burden: fewer visits, less downtime, lower total cost, and a seamless healing experience. All guided by advanced digital implant planning software.",
    ],
    benefits: [
      'Complete smile restoration in one visit',
      'Computer-guided surgical precision',
      'Same-day provisional crown placed',
      'Minimally invasive approach',
      'Superior long-term success rates',
      'Suitable for full-arch cases',
    ],
    note: 'Most patients return to work within 48–72 hours.',
  },
  {
    id: 'invisalign',
    icon: <Smile className="w-9 h-9" />,
    tag: 'Elite Preferred — Top 5%',
    title: 'Invisalign Clear Aligners',
    headline: 'Precision alignment, invisible process.',
    desc: [
      "As an Invisalign Elite Preferred Provider — a designation held by fewer than 5% of providers nationwide — PAAD delivers straighter smiles with exceptional case complexity experience and volume.",
      "Every Invisalign case begins with an iTero 3D scan and a virtual smile simulation, so you can see your projected result before treatment starts. Most cases complete in 12–18 months.",
    ],
    benefits: [
      'Top 5% Elite Preferred Provider',
      'iTero 3D scan — no impressions',
      'Virtual smile preview before you start',
      'Removable for eating and brushing',
      'Treats complex bite issues',
      'Teen and adult programs available',
    ],
    note: 'Includes complimentary whitening for completed Invisalign cases.',
  },
  {
    id: 'whitening',
    icon: <Sun className="w-9 h-9" />,
    tag: 'Quick Transformation',
    title: 'Professional Teeth Whitening',
    headline: 'Noticeably brighter. Same day.',
    desc: [
      "Achieve dramatic results with our in-office Zoom whitening system — up to 8 shades brighter in a single 90-minute session. For gentler at-home brightening, we also provide custom-fitted whitening trays with professional-grade gel.",
    ],
    benefits: [
      'Up to 8 shades brighter in one visit',
      'Custom take-home trays available',
      'Safe for sensitive teeth',
      'Long-lasting results',
      'Included free with Invisalign completion',
      'Touch-up kits provided',
    ],
    note: 'Sensitivity-safe protocol available for enamel-sensitive patients.',
  },
  {
    id: 'rootcanal',
    icon: <Activity className="w-9 h-9" />,
    tag: 'Gentle & Precise',
    title: 'Root Canal Treatment',
    headline: 'Save your tooth. End the pain.',
    desc: [
      "Modern root canal therapy is nothing like the stories you may have heard. Using rotary nickel-titanium files and digital apex locators, our procedure is precise, comfortable, and typically completed in one visit.",
      "We numb thoroughly before we start, and most patients report feeling little to nothing during treatment. Post-procedure discomfort is usually manageable with over-the-counter medication.",
    ],
    benefits: [
      'Single-visit treatment in most cases',
      'Rotary NiTi instrumentation for precision',
      'Digital apex locator accuracy',
      'Minimal post-op discomfort',
      'Followed by crown placement',
      'Saves your natural tooth',
    ],
    note: 'Most root canals are completed in a single 60–90 minute appointment.',
  },
  {
    id: 'cleanings',
    icon: <ShieldCheck className="w-9 h-9" />,
    tag: 'Foundation of Health',
    title: 'Comprehensive Exam & Cleaning',
    headline: 'Prevention is the best investment.',
    desc: [
      "Routine cleanings are the cornerstone of lasting oral health. Our hygienists use ultrasonic scaling and digital X-rays to detect and address issues early — keeping your smile healthy for life.",
      "We offer standard, deep-cleaning (scaling and root planing), and maintenance cleanings for patients with periodontal disease.",
    ],
    benefits: [
      'Comprehensive digital X-rays',
      'Oral cancer screening included',
      'Periodontal charting',
      'Deep-cleaning / SRP for gum disease',
      'Fluoride & sealant options',
      'Personalized hygiene coaching',
    ],
    note: 'Recommended every 6 months for most patients.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: "#000" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-5">
              Our Services
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Every Procedure.<br />
              <span className="gold-text italic">One Standard of Excellence.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              From same-day implant surgery to invisible orthodontics — every service at PAAD
              reflects our commitment to comprehensive, compassionate care — all under one roof.
            </p>
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {services.map((svc) => (
            <FadeUp key={svc.id} delay={0.05}>
              <div
                id={svc.id}
                className="glass-card p-8 md:p-12 group hover:border-gold-500/35 transition-all duration-400"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 items-start">
                  {/* Left: icon + header */}
                  <div>
                    <div
                      className="w-18 h-18 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.18), rgba(184,141,44,0.28))', color: '#D4A843' }}
                    >
                      {svc.icon}
                    </div>
                    <div
                      className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                      style={{ background: 'rgba(184,141,44,0.15)', color: '#D4A843' }}
                    >
                      {svc.tag}
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {svc.title}
                    </h2>
                    <p className="text-gold-400 text-sm font-medium italic mb-6">{svc.headline}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Schedule <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right: description + benefits */}
                  <div>
                    {svc.desc.map((para, j) => (
                      <p key={j} className="text-white/60 leading-relaxed mb-4 text-base">
                        {para}
                      </p>
                    ))}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {svc.benefits.map((b, k) => (
                        <div key={k} className="flex items-start gap-2.5 text-sm text-white/65">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                          {b}
                        </div>
                      ))}
                    </div>
                    {svc.note && (
                      <div
                        className="mt-6 px-4 py-3 rounded-xl text-xs text-gold-300 italic"
                        style={{ background: 'rgba(184,141,44,0.1)', borderLeft: '3px solid rgba(184,141,44,0.5)' }}
                      >
                        {svc.note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Deep Dive Clinical Guides ── */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Clinical Solution Guides</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              Deep-Dive Into Our Signature Procedures
            </h2>
            <p className="text-navy-900/55 max-w-2xl mx-auto">
              Detailed clinical guides covering protocols, technology, candidacy criteria, and AI-optimised research prompts for our three most advanced procedures.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: '/services/pinhole',
                tag: 'Minimally Invasive',
                title: 'PINHOLE Surgical Technique™',
                desc: 'No scalpel. No sutures. Full-arch gum recession reversed in one visit. Certified PST practitioner.',
                dark: true,
              },
              {
                href: '/services/implants',
                tag: 'Signature Procedure',
                title: 'Same-Day Full-Mouth Implants',
                desc: '3D CBCT-guided surgery. Digital bite analysis. Same-day provisional teeth. 5-in-1 protocol.',
                dark: true,
              },
              {
                href: '/services/smile-makeover',
                tag: 'Cosmetic Excellence',
                title: 'Smile Makeover & Invisalign Elite',
                desc: 'Top 5% Invisalign Elite Provider. Digital smile design preview. Artisan porcelain veneers.',
                dark: false,
              },
            ].map((card, i) => (
              <FadeUp key={i} delay={0.1 * i}>
                <Link href={card.href} className="block group h-full">
                  <div className={`h-full rounded-3xl p-8 border transition-all duration-300 group-hover:scale-[1.02] ${
                    card.dark
                      ? 'bg-navy-900 border-white/8 hover:border-gold-600/40'
                      : 'bg-white border-cream-300 hover:border-gold-500/40 shadow-sm'
                  }`}>
                    <span className="section-label block mb-3">{card.tag}</span>
                    <h3 className={`font-serif text-2xl font-bold mb-4 leading-tight ${card.dark ? 'text-white' : 'text-navy-900'}`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-6 ${card.dark ? 'text-white/55' : 'text-navy-900/55'}`}>
                      {card.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#D4A843' }}>
                      Read Clinical Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
              Not sure which treatment<br />
              <span className="gold-text italic">is right for you?</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Every smile is unique. Our complimentary consultation includes a full
              exam, digital X-rays, and a personalized treatment recommendation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Book Free Consultation
              </Link>
              <a href="tel:6503244900" className="btn-ghost-white inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (650) 324-4900
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}



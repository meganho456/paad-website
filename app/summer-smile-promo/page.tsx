'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Sun, Clock, Star, Calendar } from 'lucide-react'

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

const packages = [
  {
    tag: 'Best Value',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Invisalign + Whitening Bundle',
    headline: 'Straight and bright. Together.',
    priceLabel: 'Complimentary Zoom whitening',
    priceNote: 'included with your Invisalign case',
    features: [
      'In-office Zoom chairside whitening (90 min, up to 8 shades brighter)',
      'Full Invisalign clear aligner treatment',
      'iTero 3D digital scan — no putty, no physical impressions',
      'Virtual SmileView outcome preview before you commit',
      'Vivera retainers after treatment completion',
      'Complimentary post-treatment whitening touch-up',
    ],
    dark: true,
    highlight: true,
  },
  {
    tag: 'Summer Special',
    icon: <Sun className="w-8 h-8" />,
    title: 'Standalone Professional Whitening',
    headline: 'Zoom in. Walk out glowing.',
    priceLabel: '$150 off',
    priceNote: 'professional in-office Zoom whitening',
    features: [
      'In-office Zoom WhiteSpeed LED whitening session',
      'Up to 8 shades brighter in one 90-minute visit',
      'Pre-treatment shade assessment',
      'Gum and lip protection throughout',
      'Post-whitening desensitiser included',
      'Take-home touch-up gel kit',
    ],
    dark: false,
    highlight: false,
  },
]

const steps = [
  {
    num: '01',
    icon: <Sun className="w-6 h-6" />,
    title: 'Chairside Whitening',
    timing: 'Day 1 — before attachments',
    body: 'Zoom in-office whitening is performed before any Invisalign attachments are placed. This ensures your enamel whitens evenly across every surface — no dark patches or colour mismatches where composite attachments will later bond.',
    callout: 'Must come first — whitening gel cannot penetrate composite attachments.',
  },
  {
    num: '02',
    icon: <Clock className="w-6 h-6" />,
    title: 'Colour Stabilisation',
    timing: '1–2 weeks post-whitening',
    body: 'Teeth continue to dehydrate and re-hydrate in the days after whitening. Waiting 1–2 weeks allows the final shade to fully stabilise, so the composite attachment colour is matched to your settled, true tooth colour — not a temporarily brightened one.',
    callout: 'Critical for a seamless, natural-looking result.',
  },
  {
    num: '03',
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Invisalign Treatment',
    timing: 'Weeks 2–3 onward',
    body: 'Clear aligner therapy proceeds as planned. Attachments are bonded to your newly whitened teeth, your first set of aligners is delivered, and your smile transformation begins. Progress iTero scans are taken every 6–8 weeks.',
    callout: null,
  },
  {
    num: '04',
    icon: <Star className="w-6 h-6" />,
    title: 'Post-Treatment Touch-Up',
    timing: 'After your final aligner',
    body: 'Attachments are removed and teeth are polished. Any minor whitening touch-up is performed using your final clear Vivera retainers as custom trays — a natural benefit of the retainer system included in this bundle.',
    callout: 'Included at no additional charge with the Invisalign bundle.',
  },
]

export default function SummerSmilePromoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-40 pb-28 overflow-hidden hero-grid"
        style={{ background: '#000' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(212,168,67,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(212,168,67,0.15)',
                color: '#D4A843',
                border: '1px solid rgba(212,168,67,0.3)',
              }}
            >
              Summer &amp; Back-to-School Smile Event
            </span>

            <h1
              className="headline-display text-white mb-6"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
            >
              Brighter, Straighter Teeth<br />
              <span className="gold-text">Before School Starts.</span>
            </h1>

            <p
              className="text-white/55 leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ fontSize: '1.1875rem' }}
            >
              Get a complimentary Zoom chairside whitening when you start Invisalign this summer —
              or save $150 on standalone professional whitening.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/contact" className="btn-gold text-base">
                Book Your Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="btn-ghost-white text-sm">
                Call (650) 324-4900
              </a>
            </div>

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: 'rgba(212,168,67,0.1)',
                border: '1px solid rgba(212,168,67,0.25)',
              }}
            >
              <Calendar className="w-3.5 h-3.5" style={{ color: '#D4A843' }} />
              <span className="text-sm font-medium" style={{ color: '#D4A843' }}>
                Offer valid for consultations scheduled by August 31
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Dual-Benefit Packages ── */}
      <section className="section-py" style={{ background: '#1D1D1F' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="section-label mb-4">Choose Your Offer</p>
            <h2
              className="headline-section text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Two ways to transform your smile.
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Whether you&apos;re ready for the full transformation or just want a dramatically
              brighter smile this summer — we&apos;ve got you covered.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <FadeUp key={pkg.title} delay={i * 0.1}>
                <div
                  className="h-full rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col"
                  style={{
                    background: pkg.dark ? '#000' : '#fff',
                    border: pkg.highlight
                      ? '1px solid rgba(212,168,67,0.4)'
                      : pkg.dark
                      ? '1px solid rgba(255,255,255,0.07)'
                      : '1px solid rgba(0,0,0,0.07)',
                  }}
                >
                  {pkg.highlight && (
                    <div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, #D4A843, transparent)',
                      }}
                    />
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}
                    >
                      {pkg.icon}
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-2"
                        style={{ background: 'rgba(212,168,67,0.12)', color: '#D4A843' }}
                      >
                        {pkg.tag}
                      </span>
                      <h3
                        className="font-bold leading-tight"
                        style={{
                          fontSize: '1.375rem',
                          letterSpacing: '-0.02em',
                          color: pkg.dark ? '#fff' : '#000',
                        }}
                      >
                        {pkg.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-medium mb-4" style={{ color: '#D4A843', fontSize: '0.9375rem' }}>
                    {pkg.headline}
                  </p>

                  <div
                    className="rounded-2xl px-4 py-3 mb-6"
                    style={{
                      background: pkg.dark
                        ? 'rgba(212,168,67,0.1)'
                        : 'rgba(212,168,67,0.07)',
                      border: '1px solid rgba(212,168,67,0.25)',
                    }}
                  >
                    <span className="font-bold" style={{ color: '#D4A843', fontSize: '1.125rem' }}>
                      {pkg.priceLabel}
                    </span>
                    <span
                      style={{
                        color: pkg.dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                        fontSize: '0.875rem',
                      }}
                    >
                      {' '}
                      {pkg.priceNote}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm"
                        style={{
                          color: pkg.dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                        }}
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: '#D4A843' }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn-gold w-full justify-center">
                    Claim This Offer <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinical Sequencing Timeline ── */}
      <section className="section-py bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="section-label mb-4">Clinical Workflow</p>
            <h2
              className="headline-section text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Why whitening comes first.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              The sequence isn&apos;t arbitrary — it&apos;s clinical precision. Here&apos;s
              exactly what happens and why.
            </p>
          </FadeUp>

          <div className="relative">
            <div
              className="absolute left-8 top-8 bottom-8 w-px hidden md:block"
              style={{
                background:
                  'linear-gradient(to bottom, #D4A843, rgba(212,168,67,0.15))',
              }}
            />

            <div className="space-y-5">
              {steps.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.1}>
                  <div className="relative flex gap-6 md:gap-8">
                    <div className="hidden md:flex flex-col items-center shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center z-10 relative"
                        style={{
                          background: 'linear-gradient(135deg, #D4A843, #B88D2C)',
                          color: '#000',
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>

                    <div
                      className="flex-1 rounded-3xl p-6 md:p-8"
                      style={{
                        background: '#1D1D1F',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: '#D4A843' }}
                        >
                          Step {step.num}
                        </span>
                        <span className="text-white/25 text-xs">·</span>
                        <span className="text-white/40 text-xs font-medium">{step.timing}</span>
                      </div>
                      <h3
                        className="font-bold text-white mb-3"
                        style={{ fontSize: '1.25rem', letterSpacing: '-0.02em' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed mb-4">{step.body}</p>
                      {step.callout && (
                        <div
                          className="inline-flex items-start gap-2 rounded-xl px-3 py-2"
                          style={{
                            background: 'rgba(212,168,67,0.1)',
                            border: '1px solid rgba(212,168,67,0.25)',
                          }}
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0 mt-0.5"
                            style={{ color: '#D4A843' }}
                          />
                          <span
                            className="text-xs font-semibold"
                            style={{ color: '#D4A843' }}
                          >
                            {step.callout}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Scarcity + Final CTA ── */}
      <section className="section-py" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <div
              className="rounded-3xl p-8 md:p-14 text-center relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(212,168,67,0.12), rgba(184,141,44,0.05))',
                border: '1px solid rgba(212,168,67,0.3)',
              }}
            >
              <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, #D4A843, transparent)',
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'linear-gradient(135deg, #D4A843, #B88D2C)' }}
                >
                  <Clock className="w-7 h-7 text-black" />
                </div>

                <p className="section-label mb-4">Limited Availability</p>

                <h2
                  className="headline-section text-white mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
                >
                  Summer slots are filling fast.
                </h2>

                <div
                  className="inline-block rounded-2xl px-6 py-4 mb-8"
                  style={{
                    background: 'rgba(212,168,67,0.1)',
                    border: '1px solid rgba(212,168,67,0.3)',
                  }}
                >
                  <p className="font-semibold" style={{ color: '#D4A843' }}>
                    Offer valid for initial consultations scheduled by August 31.
                  </p>
                </div>

                <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg mx-auto">
                  Complimentary consultations available Monday – Saturday. Our team will walk you
                  through your options, take a 3D iTero scan, and show you your projected result —
                  no commitment required.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="btn-gold text-base">
                    Book Your Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:6503244900" className="btn-ghost-white text-sm">
                    Call (650) 324-4900
                  </a>
                </div>

                <p className="text-white/25 text-sm mt-8">
                  4191 El Camino Real · Palo Alto, CA · Mon–Sat 9am–6pm
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

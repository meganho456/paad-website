'use client'

import { useRef } from 'react'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type MotionValue,
} from 'framer-motion'
import { ArrowRight, CheckCircle2, Globe } from 'lucide-react'
import { WordReveal, FadeUp } from '@/components/animations'

/* ─────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────── */
function HeroSection() {
  const { scrollY } = useScroll()
  const y       = useTransform(scrollY, [0, 700], [0, -120])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden hero-grid">
      {/* ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(212,168,67,0.08) 0%, transparent 70%)',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="section-label mb-8"
        >
          Palo Alto Advanced Dentists
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="headline-display text-white mb-6"
          style={{ fontSize: 'clamp(3.75rem, 10vw, 9rem)' }}
        >
          Dentistry.<br />
          <span className="gold-text">Elevated.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="text-white/55 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: '1.1875rem' }}
        >
          Complete dentistry under one roof. Fillings to full-arch
          implants, Invisalign, root canals, and PINHOLE surgery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-gold">
            Book Complimentary Consult <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services" className="btn-ghost-white text-sm">
            Explore Services
          </Link>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 rounded-full"
          style={{ background: 'linear-gradient(to bottom, rgba(212,168,67,0.7), transparent)' }}
        />
      </motion.div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   STATS BAND
───────────────────────────────────────────────────── */
const stats = [
  { number: '20+', label: 'Years of Excellence' },
  { number: '15k+', label: 'Smiles Transformed' },
  { number: '4',   label: 'Languages Spoken' },
  { number: '1',   label: 'Day for Same-Day Implants' },
]

function StatsBand() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <section ref={ref} className="py-16" style={{ background: '#1D1D1F' }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="text-center"
          >
            <div
              className="font-extrabold mb-1"
              style={{
                fontSize: 'clamp(2.5rem,5vw,3.5rem)',
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg,#F0CC7A,#D4A843)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {s.number}
            </div>
            <div className="text-white/50 text-sm font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   PINNED DIFFERENCE  (300 vh scroll-pinned reveal)
───────────────────────────────────────────────────── */
const panels = [
  {
    num: '01',
    headline: 'Same-day implants.',
    sub: 'One visit. Complete smile.',
    body: 'Our 5-in-1 Same Day Implant Protocol — pioneered by Dr. Ho — condenses what traditional practices spread across 4–6 appointments into a single seamless surgery.',
    cta: { label: 'Learn the Protocol', href: '/practice' },
  },
  {
    num: '02',
    headline: 'Harvard precision.',
    sub: 'Evidence-based. Ivy League-trained.',
    body: 'Dr. James Ho holds both a DMD and MPH from Harvard — a dual perspective that elevates every clinical decision, from treatment planning to post-op care.',
    cta: { label: 'Meet the Doctors', href: '/doctors' },
  },
  {
    num: '03',
    headline: 'Invisalign Elite.',
    sub: 'Top 1% of providers nationwide.',
    body: 'As Elite Preferred Providers, we treat the most complex cases other practices turn away — and show you your result before you commit to a single aligner.',
    cta: { label: 'Explore Invisalign', href: '/services' },
  },
]

function PanelContent({
  panel,
  opacity,
  yVal,
}: {
  panel: typeof panels[0]
  opacity: MotionValue<number>
  yVal: MotionValue<number>
}) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-6"
      style={{ opacity, y: yVal }}
    >
      <div className="max-w-3xl text-center">
        <div className="section-label mb-8">{panel.num}</div>
        <h2
          className="headline-display text-white mb-4"
          style={{ fontSize: 'clamp(3rem,8vw,7rem)' }}
        >
          {panel.headline}
        </h2>
        <p className="text-gold-400 text-xl md:text-2xl font-medium mb-8">{panel.sub}</p>
        <p
          className="text-white/50 leading-relaxed max-w-xl mx-auto mb-10"
          style={{ fontSize: '1.125rem' }}
        >
          {panel.body}
        </p>
        <Link href={panel.cta.href} className="btn-gold">
          {panel.cta.label} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}

function ProgressDots({ progress }: { progress: MotionValue<number> }) {
  const dot1 = useTransform(progress, [0, 0.33], [1, 0.3])
  const dot2 = useTransform(progress, [0.25, 0.45, 0.66], [0.3, 1, 0.3])
  const dot3 = useTransform(progress, [0.58, 0.78], [0.3, 1])
  const dots  = [dot1, dot2, dot3]

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-gold-400"
          style={{ opacity: d }}
        />
      ))}
    </div>
  )
}

function PinnedDifference() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const p1o = useTransform(scrollYProgress, [0, 0.06, 0.26, 0.36], [0, 1, 1, 0])
  const p1y = useTransform(scrollYProgress, [0, 0.08], [48, 0])

  const p2o = useTransform(scrollYProgress, [0.33, 0.39, 0.59, 0.69], [0, 1, 1, 0])
  const p2y = useTransform(scrollYProgress, [0.33, 0.41], [48, 0])

  const p3o = useTransform(scrollYProgress, [0.66, 0.72, 1, 1], [0, 1, 1, 1])
  const p3y = useTransform(scrollYProgress, [0.66, 0.74], [48, 0])

  const opacities = [p1o, p2o, p3o]
  const yVals     = [p1y, p2y, p3y]

  return (
    <div ref={containerRef} style={{ height: '300vh' }} className="relative">
      <div className="sticky top-0 h-screen bg-black overflow-hidden">
        <ProgressDots progress={scrollYProgress} />
        <div className="relative h-full">
          {panels.map((panel, i) => (
            <PanelContent
              key={panel.num}
              panel={panel}
              opacity={opacities[i]}
              yVal={yVals[i]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────
   BRAND STATEMENT  (word-by-word reveal)
───────────────────────────────────────────────────── */
function BrandStatement() {
  return (
    <section
      className="section-py"
      style={{ background: '#1D1D1F' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <p className="section-label mb-10 text-center">Our Commitment</p>
        </FadeUp>
        <WordReveal
          text="We believe exceptional dentistry should be fast, painless, beautiful, and accessible to every member of the Bay Area community — regardless of language, background, or dental history."
          className="text-white font-bold text-center leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
        />
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   SERVICES PREVIEW  (bento grid)
───────────────────────────────────────────────────── */
const services = [
  {
    tag: 'Signature',
    title: '5-in-1 Same Day Implants',
    desc: 'Extract, graft, place, and crown — all in a single appointment.',
    span: 'lg:col-span-2',
    dark: true,
  },
  {
    tag: 'Orthodontics',
    title: 'Invisalign Elite',
    desc: 'Top 1% provider. Preview results before you commit.',
    span: '',
    dark: true,
  },
  {
    tag: 'Cosmetic',
    title: 'Porcelain Veneers',
    desc: 'Artisan-crafted. Immediate transformation.',
    span: '',
    dark: false,
  },
  {
    tag: 'Minimally Invasive',
    title: 'PINHOLE Surgery™',
    desc: 'Gum recession reversed. No scalpel, no sutures.',
    span: '',
    dark: false,
  },
  {
    tag: 'Restorative',
    title: 'CEREC Same-Day Crowns',
    desc: 'Designed, milled, and placed in a single visit.',
    span: '',
    dark: true,
  },
  {
    tag: 'Wellness',
    title: 'Preventive & General',
    desc: 'Thorough cleanings, digital X-rays, AI-assisted detection.',
    span: '',
    dark: false,
  },
]

function ServicesPreview() {
  return (
    <section className="section-py" style={{ background: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <p className="section-label mb-4" style={{ color: '#B88D2C' }}>Services</p>
          <h2
            className="headline-section text-navy-950 mb-4"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
          >
            Every smile, covered.
          </h2>
          <p className="text-navy-900/55 text-lg max-w-xl mx-auto">
            From your first cleaning to full-arch reconstruction — all under one roof.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.07} className={s.span}>
              <Link href="/services" className="block h-full group">
                <div
                  className="h-full rounded-3xl p-8 transition-all duration-300 group-hover:scale-[1.02]"
                  style={{
                    background: s.dark ? '#1D1D1F' : '#FFFFFF',
                    border: s.dark
                      ? '1px solid rgba(255,255,255,0.07)'
                      : '1px solid rgba(0,0,0,0.07)',
                  }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-5"
                    style={{
                      background: 'rgba(212,168,67,0.12)',
                      color: '#D4A843',
                    }}
                  >
                    {s.tag}
                  </span>
                  <h3
                    className="font-bold mb-3 leading-tight"
                    style={{
                      fontSize: '1.375rem',
                      letterSpacing: '-0.02em',
                      color: s.dark ? '#FFFFFF' : '#000000',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ color: s.dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }} className="text-sm leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5" style={{ color: '#D4A843' }}>
                    <span className="text-sm font-semibold">Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   TECH HIGHLIGHT
───────────────────────────────────────────────────── */
function ScaleRevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 32 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function TechHighlight() {
  return (
    <section className="section-py bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <p className="section-label mb-4">Our Technology</p>
          <h2
            className="headline-section text-white"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
          >
            Silicon Valley tools.<br />
            <span className="gold-text">For your smile.</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScaleRevealCard delay={0}>
            <div className="tile-dark h-full">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(212,168,67,0.15)' }}
              >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#D4A843" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <p className="section-label mb-3">Digital Impressions</p>
              <h3 className="font-bold text-white mb-4" style={{ fontSize: '1.75rem', letterSpacing: '-0.03em' }}>
                iTero Element 5D
              </h3>
              <p className="text-white/50 leading-relaxed mb-6">
                Full 3D model of your teeth in under 60 seconds. No putty. No gagging.
                Preview your Invisalign result in real time before committing.
              </p>
              <div className="space-y-2">
                {['3D scan in 60 seconds', 'Invisalign outcome simulation', 'NIRI cavity detection'].map((b) => (
                  <div key={b} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="text-white/60 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScaleRevealCard>

          <ScaleRevealCard delay={0.1}>
            <div className="tile-gold h-full">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(212,168,67,0.2)' }}
              >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#D4A843" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <p className="section-label mb-3">3D Imaging</p>
              <h3 className="font-bold text-white mb-4" style={{ fontSize: '1.75rem', letterSpacing: '-0.03em' }}>
                CBCT 3D X-Ray System
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Complete volumetric image of your jaw, teeth, nerves, and sinuses in under 15 seconds.
                Every implant placement is planned digitally before surgery day.
              </p>
              <Link href="/practice" className="btn-gold text-sm">
                Explore All Technology <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScaleRevealCard>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   DOCTOR SPOTLIGHT
───────────────────────────────────────────────────── */
function DoctorSpotlight() {
  return (
    <section className="section-py" style={{ background: '#1D1D1F' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div
              className="rounded-3xl flex flex-col items-center justify-center p-16 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(212,168,67,0.15) 0%, rgba(184,141,44,0.08) 100%)',
                border: '1px solid rgba(212,168,67,0.2)',
                minHeight: '420px',
              }}
            >
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center font-bold text-4xl mb-6"
                style={{
                  background: 'linear-gradient(135deg,#D4A843,#B88D2C)',
                  color: '#000',
                  letterSpacing: '-0.04em',
                }}
              >
                JH
              </div>
              <h3
                className="font-bold text-white mb-1"
                style={{ fontSize: '1.5rem', letterSpacing: '-0.03em' }}
              >
                Dr. James Ho
              </h3>
              <p className="text-gold-400 text-sm font-semibold mb-1">DMD, MPH</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-6">
                Founder &amp; Lead Dentist
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Harvard DMD', 'Harvard MPH', 'PINHOLE Certified', 'Invisalign Elite'].map((a) => (
                  <span
                    key={a}
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                    style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="section-label mb-5">Founder</p>
            <h2
              className="headline-section text-white mb-6"
              style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)' }}
            >
              Two generations.<br />
              <span className="gold-text">One family. One practice.</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-8" style={{ fontSize: '1.0625rem' }}>
              Dr. James Ho — Harvard-trained, with over 20 years of full-service clinical excellence —
              founded PAAD to bring complete, compassionate dentistry to the Bay Area.
              Today, his son Dr. Ryan Charles Ho, a Palo Alto native, carries that legacy forward.
              Same values. Same community. A new generation of care.
            </p>
            <div className="space-y-3 mb-10">
              {[
                'Harvard School of Dental Medicine — DMD',
                'Harvard T.H. Chan School of Public Health — MPH',
                'PINHOLE Surgical Technique® Certified',
                'Speaks English, Mandarin, Cantonese & Taiwanese',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/doctors" className="btn-gold">
              Meet the Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────── */
const testimonials = [
  {
    quote: "I have been going to this office for the past 3-4 years. They are great at accommodating my work schedule, the dentists work quickly but do a great job as well. Highly recommend.",
    name: "Beatriz V.",
  },
  {
    quote: "This is my 2nd experience with Dr. Ho. 1st experience was 5 stars when I took care of my daughter. This time around I came in to have my own Invisalign treatment. Our family is very happy with the professionalism and service. Highly recommend this office — staff is so friendly too!",
    name: "Elaine L.",
  },
  {
    quote: "I had the pleasure of working with Dr. Ho's staff years ago and thought they were great, professional and caring. I do have dental work to be done but at least I feel that my teeth will be fixed properly, with all the best materials and with a staff that seems to appreciate my teeth as much as I do!",
    name: "Jeffrey G.",
  },
]

function StarRow() {
  return (
    <div className="flex gap-1 justify-center mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#D4A843">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section className="section-py" style={{ background: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <p className="section-label mb-4" style={{ color: '#B88D2C' }}>Patient Stories</p>
          <h2
            className="headline-section text-navy-950 mb-4"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
          >
            What our patients say.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div
                className="h-full rounded-3xl p-8 flex flex-col"
                style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <StarRow />
                <p
                  className="text-navy-900/70 leading-relaxed flex-1 text-center italic"
                  style={{ fontSize: '0.9375rem' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p
                  className="text-center font-semibold mt-6"
                  style={{ color: '#D4A843', fontSize: '0.875rem' }}
                >
                  — {t.name}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   LANGUAGES BAND
───────────────────────────────────────────────────── */
function LanguagesBand() {
  return (
    <section className="py-6 border-y border-white/5" style={{ background: '#000' }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-5">
        <Globe className="w-4 h-4 text-gold-400" />
        <span className="text-white/35 text-sm font-medium">We speak:</span>
        {['English', 'Mandarin', 'Cantonese', 'Taiwanese', 'Spanish', 'Persian'].map((lang) => (
          <span
            key={lang}
            className="text-white/70 text-sm font-semibold px-3 py-1 rounded-full"
            style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)' }}
          >
            {lang}
          </span>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   FINAL CTA
───────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section
      className="relative section-py overflow-hidden"
      style={{ background: '#000' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,168,67,0.1) 0%, transparent 70%)',
        }}
      />
      <FadeUp className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <p className="section-label mb-6">Ready?</p>
        <h2
          className="headline-display text-white mb-6"
          style={{ fontSize: 'clamp(2.75rem,6vw,5.5rem)' }}
        >
          Your best smile<br />
          <span className="gold-text">starts here.</span>
        </h2>
        <p className="text-white/50 text-xl mb-12 leading-relaxed">
          Complimentary consultation. No pressure. Just answers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-gold text-base">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:6503244900" className="btn-ghost-white text-sm">
            Call (650) 324-4900
          </a>
        </div>
        <p className="text-white/25 text-sm mt-8">
          4191 El Camino Real · Palo Alto, CA · Mon–Sat 9am–6pm
        </p>
      </FadeUp>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <PinnedDifference />
      <BrandStatement />
      <ServicesPreview />
      <TechHighlight />
      <DoctorSpotlight />
      <Testimonials />
      <LanguagesBand />
      <FinalCTA />
    </>
  )
}

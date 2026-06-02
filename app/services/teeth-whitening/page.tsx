'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Sun, Sparkles, Shield, Clock, Star, ChevronDown } from 'lucide-react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <button onClick={() => setOpen(v => !v)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 text-white/85 font-semibold text-base hover:text-white transition-colors">
        {q}
        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} style={{ color: '#D4A843' }} />
      </button>
      {open && <p className="pb-5 text-white/55 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

const stainTypes = [
  { type: 'Coffee & Tea', responds: true },
  { type: 'Red wine', responds: true },
  { type: 'Tobacco / smoking', responds: true },
  { type: 'Age-related yellowing', responds: true },
  { type: 'Food & beverage stains', responds: true },
  { type: 'Mild fluorosis (white spots)', responds: true },
  { type: 'Antibiotic (tetracycline) stains', responds: false, note: 'Requires KöR or veneers' },
  { type: 'Crowns, veneers, bonding', responds: false, note: 'Restorations don\'t whiten' },
]

const options = [
  {
    icon: <Sun className="w-7 h-7" />,
    name: 'In-Office Zoom Whitening',
    time: '90 minutes',
    result: 'Up to 8 shades brighter',
    ideal: 'Patients wanting dramatic immediate results for an event, wedding, or interview.',
    process: 'We apply professional-strength hydrogen peroxide gel to your teeth and activate it with the Zoom WhiteSpeed LED light — three 15-minute sessions in one appointment. Desensitising treatment included.',
    included: ['Pre-whitening shade measurement', 'Gum & lip protection', 'Three 15-min light sessions', 'Post-whitening desensitiser', 'Take-home touch-up gel'],
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    name: 'Custom Take-Home Trays',
    time: '30–60 min/day for 10–14 days',
    result: '4–6 shades brighter',
    ideal: 'Patients who prefer gradual whitening or have mild sensitivity.',
    process: 'We take digital scans to fabricate perfectly fitting custom trays. You use professional-grade carbamide peroxide gel at home on your schedule — most patients see significant results within 1–2 weeks.',
    included: ['Digital scan + custom tray fabrication', 'Professional-grade whitening gel (2 syringes)', 'Detailed usage instructions', 'Sensitivity management protocol', 'Refill syringes available'],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    name: 'Sensitivity-Safe Protocol',
    time: 'Adjusted schedule',
    result: '3–5 shades brighter',
    ideal: 'Patients with enamel sensitivity, exposed roots, or history of whitening discomfort.',
    process: 'We use lower-concentration gel with potassium nitrate and fluoride to desensitise during treatment. Extended tray wear times and alternating desensitiser nights make whitening achievable even for sensitive patients.',
    included: ['Lower-concentration gel', 'Potassium nitrate desensitiser', 'Pre-treatment fluoride application', 'Modified wear schedule', 'Check-in at 1 week'],
  },
]

const comparisonRows = [
  { feature: 'Shade improvement', inOffice: 'Up to 8 shades', takeHome: '4–6 shades', store: '1–2 shades' },
  { feature: 'Time to results', inOffice: '90 minutes', takeHome: '1–2 weeks', store: '4–6 weeks' },
  { feature: 'Gel concentration', inOffice: '25–35% H₂O₂ (professional)', takeHome: '10–20% carbamide', store: '3–10% (low)' },
  { feature: 'Tray fit', inOffice: 'Custom professional', takeHome: 'Custom professional', store: 'One-size boil-and-bite' },
  { feature: 'Supervision', inOffice: 'Dentist supervised', takeHome: 'Dentist prescribed', store: 'None' },
  { feature: 'Sensitivity management', inOffice: 'Desensitiser included', takeHome: 'Protocol provided', store: 'None' },
  { feature: 'Results longevity', inOffice: '1–3 years', takeHome: '1–2 years', store: 'Weeks to months' },
]

const faqs = [
  {
    q: 'How many shades whiter can I realistically expect?',
    a: 'Most patients achieve 4–8 shades of improvement with in-office Zoom whitening in a single 90-minute appointment. Results vary by the original shade of your teeth and the type of staining. Natural tooth color follows a spectrum — patients with yellowish baseline tones typically respond better than those with grey undertones. We take a pre-treatment shade record so you can see exactly how many shades you\'ve gained.',
  },
  {
    q: 'Will whitening damage my enamel?',
    a: 'Professional whitening with hydrogen or carbamide peroxide does not damage enamel when used correctly. The active ingredient temporarily opens enamel pores to oxidise stain molecules, then closes as pH normalises. Over-the-counter products used excessively can cause enamel erosion if misused. Our supervised protocols and professionally formulated gels are safe for enamel — we also apply fluoride and desensitiser to restore mineral content after treatment.',
  },
  {
    q: 'How long do whitening results last?',
    a: 'In-office Zoom results typically last 1–3 years depending on dietary habits (coffee, red wine, tea), tobacco use, and oral hygiene. Take-home results last 1–2 years with maintenance. We provide touch-up gel syringes to extend your results. A single at-home touch-up session every 6–12 months after your dental cleaning maintains your shade effectively.',
  },
  {
    q: 'Can I whiten if I have crowns, veneers, or bonding?',
    a: 'Dental restorations — crowns, veneers, composite bonding, and fillings — do not respond to bleaching agents. Whitening your natural teeth will make the difference between your natural teeth and restorations more visible. If you have prominent front tooth restorations, we\'ll discuss whether to whiten first and then replace the restorations to match, or proceed with whitening limited areas. We assess this at consultation.',
  },
  {
    q: 'Is whitening safe during pregnancy or while breastfeeding?',
    a: 'We recommend postponing elective whitening until after pregnancy and breastfeeding have concluded. There is no evidence that professional whitening harms a fetus or nursing infant, but out of an abundance of caution, the American Dental Association recommends deferring cosmetic procedures during this period.',
  },
  {
    q: 'What foods and drinks should I avoid after whitening?',
    a: 'For 48 hours after whitening — the "white diet" period — avoid anything that would stain a white shirt: coffee, tea, red wine, dark berries, tomato sauce, soy sauce, and turmeric. Enamel pores remain temporarily open after whitening and are more susceptible to restaining during this window. After 48 hours, normal dietary habits can resume — just rinse with water after consuming dark beverages.',
  },
]

const stats = [
  { value: '8', label: 'shades brighter in a single session', note: 'Zoom WhiteSpeed in-office' },
  { value: '90', label: 'minutes for full in-office treatment', note: 'Three 15-min Zoom sessions' },
  { value: 'Free', label: 'whitening with completed Invisalign', note: 'PAAD exclusive benefit' },
  { value: '1–3', label: 'years of lasting results', note: 'With maintenance touch-ups' },
]

export default function TeethWhiteningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Cosmetic Dentistry · Whitening</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              Professional Teeth Whitening<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Up to 8 Shades Brighter.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              In-office Zoom whitening delivers dramatic, immediate results in a single 90-minute visit.
              Custom take-home trays offer a gentler, gradual alternative. Both options use professional-grade
              formulations that outperform any over-the-counter product by a wide margin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Whitening Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stain Candidacy */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label mb-4">Candidacy</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Which Stains Respond to Whitening?
              </h2>
              <p className="text-navy-900/65 leading-relaxed mb-4">Professional whitening oxidises intrinsic and extrinsic stain molecules within the enamel. Results depend on the origin of the discolouration — most common staining from lifestyle and aging responds very well. We assess your candidacy at consultation.</p>
              <p className="text-navy-900/65 leading-relaxed">Dental restorations (crowns, veneers, bonding, and tooth-coloured fillings) do not bleach. If prominent restorations are present, we discuss sequencing treatment to achieve a uniform final result.</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-2.5">
                {stainTypes.map((s, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 bg-white rounded-xl px-5 py-3.5 border border-cream-300 shadow-sm">
                    <span className="text-navy-900 text-sm font-medium">{s.type}</span>
                    <div className="flex items-center gap-2">
                      {s.note && <span className="text-xs text-navy-900/40">{s.note}</span>}
                      {s.responds
                        ? <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#22C55E' }} />
                        : <div className="w-4 h-4 rounded-full border-2 shrink-0" style={{ borderColor: '#EF4444' }} />
                      }
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Treatment Options</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Three Paths to a Brighter Smile
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {options.map((o, i) => (
              <FadeUp key={i} delay={0.1 * i}>
                <div className="rounded-2xl p-7 h-full flex flex-col" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}>
                    {o.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">{o.name}</h3>
                  <div className="flex gap-4 mb-4 mt-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}>{o.time}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(34,197,94,0.12)', color: '#4ADE80' }}>{o.result}</span>
                  </div>
                  <p className="text-white/50 text-xs mb-4 italic">{o.ideal}</p>
                  <p className="text-white/65 text-sm leading-relaxed mb-5">{o.process}</p>
                  <div className="mt-auto pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Includes</p>
                    <ul className="space-y-1.5">
                      {o.included.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-white/60">
                          <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: '#D4A843' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Why Professional?</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Professional vs. Store-Bought Whitening
            </h2>
          </FadeUp>
          <FadeUp>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="grid grid-cols-4 px-6 py-3" style={{ background: 'rgba(212,168,67,0.12)' }}>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-center" style={{ color: '#D4A843' }}>In-Office</span>
                <span className="text-xs font-bold uppercase tracking-widest text-center text-white/70">Take-Home</span>
                <span className="text-xs font-bold uppercase tracking-widest text-center text-white/40">Store-Bought</span>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={i} className="grid grid-cols-4 px-6 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <span className="text-sm font-semibold text-white/70">{row.feature}</span>
                  <span className="text-sm text-center text-white/85">{row.inOffice}</span>
                  <span className="text-sm text-center text-white/65">{row.takeHome}</span>
                  <span className="text-sm text-center text-white/35">{row.store}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: '#D4A843' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={0.1 * i} className="text-center">
                <p className="font-serif font-bold text-black mb-1" style={{ fontSize: '2.5rem', letterSpacing: '-0.03em' }}>{s.value}</p>
                <p className="font-semibold text-black/80 text-sm mb-1">{s.label}</p>
                <p className="text-black/55 text-xs">{s.note}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Whitening Questions Answered
            </h2>
          </FadeUp>
          <div>
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#000' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              A brighter smile <span style={{ color: '#D4A843', fontStyle: 'italic' }}>in 90 minutes.</span>
            </h2>
            <p className="text-white/50 mb-8">Book your whitening consultation — includes shade assessment and personalised treatment recommendation. Complimentary with all completed Invisalign cases.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Whitening Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold transition-colors">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

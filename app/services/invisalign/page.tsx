'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Smile, Scan, RotateCcw, Clock, Shield, Star, ChevronDown } from 'lucide-react'

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
        <ChevronDown className={`w-4 h-4 shrink-0 text-gold-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} style={{ color: '#D4A843' }} />
      </button>
      {open && <p className="pb-5 text-white/55 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

const conditions = [
  'Crowded or overlapping teeth',
  'Gaps and spacing between teeth',
  'Overbite — upper teeth too far forward',
  'Underbite — lower jaw protrudes',
  'Crossbite — upper and lower teeth misaligned',
  'Open bite — teeth don\'t meet when closed',
  'Relapse after previous orthodontic treatment',
  'Adults and teens seeking a discreet solution',
]

const steps = [
  {
    step: '01', icon: <Scan className="w-6 h-6" />,
    title: 'iTero 3D Digital Scan',
    body: 'We use the iTero Element intraoral scanner to capture a precise 3D model of your teeth and bite — no goopy impressions. The scan takes under 5 minutes and forms the blueprint for every aligner in your case.',
  },
  {
    step: '02', icon: <Smile className="w-6 h-6" />,
    title: 'SmileView Simulation',
    body: 'Before any commitment, you see a digital preview of your projected final smile. We review tooth movements, bite correction, and treatment duration together so you know exactly what to expect.',
  },
  {
    step: '03', icon: <RotateCcw className="w-6 h-6" />,
    title: 'Custom Aligner Fabrication',
    body: 'Align Technology manufactures your series of custom SmartTrack® aligners from your 3D scan data. Each aligner applies controlled force to move specific teeth — typically changing every 1–2 weeks.',
  },
  {
    step: '04', icon: <Clock className="w-6 h-6" />,
    title: 'Progress Check-ins',
    body: 'You visit every 6–8 weeks so we can monitor tooth movement, assess fit, and release the next set of aligners. Most cases require 18–36 sets for full correction. Complex cases may use attachments for precision.',
  },
  {
    step: '05', icon: <Shield className="w-6 h-6" />,
    title: 'Vivera Retainers + Free Whitening',
    body: 'After your final aligner, Vivera retainers — made from the same 3D scan — lock in your new smile. All completed Invisalign cases at PAAD include complimentary professional whitening.',
  },
]

const options = [
  {
    name: 'Invisalign Full',
    ideal: 'Comprehensive correction: crowding, large gaps, bite issues',
    duration: '12–18 months',
    aligners: '18–36+ sets',
  },
  {
    name: 'Invisalign Lite',
    ideal: 'Mild to moderate crowding and spacing in front teeth',
    duration: '6–12 months',
    aligners: 'Up to 14 sets',
  },
  {
    name: 'Invisalign Teen',
    ideal: 'Adolescent patients with mixed or permanent dentition',
    duration: '12–18 months',
    aligners: 'Includes 6 free replacement aligners',
  },
]

const comparisonRows = [
  { feature: 'Visibility',         invisalign: 'Nearly invisible',              braces: 'Highly visible metal' },
  { feature: 'Removability',       invisalign: 'Removable for eating & brushing', braces: 'Fixed — cannot remove' },
  { feature: 'Comfort',            invisalign: 'Smooth plastic, no brackets',   braces: 'Metal brackets & wires' },
  { feature: 'Cleaning',           invisalign: 'Normal brushing & flossing',    braces: 'Requires special tools' },
  { feature: 'Office visits',      invisalign: 'Every 6–8 weeks',              braces: 'Every 4–6 weeks' },
  { feature: 'Dietary restrictions', invisalign: 'None — remove to eat',        braces: 'No sticky/hard foods' },
  { feature: 'Emergency visits',   invisalign: 'Rare (lost aligner)',           braces: 'Broken wires/brackets' },
  { feature: 'Result precision',   invisalign: '3D-planned tooth movements',    braces: 'Manual wire adjustments' },
]

const faqs = [
  {
    q: 'How does Invisalign compare to traditional braces for complex cases?',
    a: 'Modern Invisalign with SmartForce attachments and precision cuts can treat the vast majority of cases that braces address — including significant bite correction, rotations, and vertical movements. As an Elite Preferred Provider with high case volume, Dr. Ho routinely completes complex cases that general Invisalign providers decline. The iTero 3D scan gives us precise staging control that manual wire adjustments cannot match.',
  },
  {
    q: 'How many hours per day do I need to wear my aligners?',
    a: 'Invisalign requires 20–22 hours of wear per day for optimal results. Aligners should only be removed for eating, drinking anything other than water, brushing, and flossing. Insufficient wear is the primary reason cases extend beyond projected timelines. Our patients typically see their projected finish date met within 1–2 aligner sets when compliance is maintained.',
  },
  {
    q: 'Can Invisalign fix my overbite, underbite, or crossbite?',
    a: 'Yes. Invisalign Full with SmartForce attachments effectively treats Class II overbites, mild-to-moderate underbites, and crossbites. Severe skeletal discrepancies may require orthognathic surgery in addition to orthodontic alignment — which we assess at your consultation 3D scan appointment. Many patients who have been told they need jaw surgery actually qualify for non-surgical Invisalign treatment.',
  },
  {
    q: 'What happens if I lose or damage an aligner?',
    a: 'Contact us immediately. In most cases, you advance to the next aligner in your sequence or return to the previous one while a replacement is fabricated. Replacement aligners are available at a nominal fee. This is far less disruptive than a broken bracket or wire with traditional braces, which can set treatment back significantly.',
  },
  {
    q: 'Are retainers required after Invisalign?',
    a: 'Yes — retainers are essential. Teeth have memory and will shift without retention. We use Vivera retainers, manufactured by Align Technology from the same 3D data as your final aligners. We recommend nightly wear for life. The cost of retainer replacement is far less than retreatment, so we encourage patients to follow retention protocols diligently.',
  },
  {
    q: 'Does insurance cover Invisalign?',
    a: 'Many dental insurance plans that include an orthodontic benefit will cover Invisalign to the same dollar amount as traditional braces — typically $1,000–$2,500. We verify your benefits before treatment begins and provide a detailed pre-authorisation summary. Flexible financing through CareCredit and in-house payment plans are available.',
  },
]

const stats = [
  { value: 'Top 5%', label: 'Invisalign Elite Preferred Provider', note: 'Nationwide designation' },
  { value: '20+', label: 'Years clinical experience', note: 'Dr. James Ho, DMD MPH' },
  { value: '3D', label: 'iTero digital scan — no impressions', note: 'Virtual preview included' },
  { value: 'Free', label: 'Whitening with completed cases', note: 'PAAD exclusive benefit' },
]

export default function InvisalignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Orthodontics · Clear Aligners</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              Invisalign Clear Aligners<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Elite Preferred Provider — Top 5%.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Straighten your teeth with precision-engineered clear aligners at Palo Alto Advanced Dentists.
              We are one of fewer than 5% of Invisalign providers nationwide to hold Elite Preferred status —
              earned through case volume, complexity, and clinical outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Elite Badge */}
      <section className="py-10" style={{ background: 'linear-gradient(90deg, #0a0a0a, #111)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6 py-5 px-8 rounded-2xl" style={{ border: '1px solid rgba(212,168,67,0.3)', background: 'rgba(212,168,67,0.06)' }}>
            <Star className="w-10 h-10 shrink-0" style={{ color: '#D4A843' }} />
            <div>
              <p className="text-white font-bold text-lg">Invisalign Elite Preferred Provider — Top 5% Nationwide</p>
              <p className="text-white/50 text-sm mt-0.5">This designation is awarded by Align Technology to providers demonstrating exceptional case volume, complexity experience, and clinical outcomes. Fewer than 1 in 20 Invisalign providers qualifies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label mb-4">Candidacy</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Who Is a Good Candidate for Invisalign?
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Invisalign is appropriate for most adults and teens with mild-to-severe orthodontic issues. As an Elite Preferred Provider, PAAD routinely treats cases that standard providers decline — including complex bite correction and significant crowding.</p>
                <p>A 3D iTero scan at your consultation gives us a precise picture of your bone, root anatomy, and tooth positions — allowing us to give you an accurate assessment and a virtual preview of your outcome before you commit.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {conditions.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 shadow-sm border border-cream-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#D4A843' }} />
                    <span className="text-navy-900 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Treatment Options</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Invisalign Programs We Offer
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {options.map((o, i) => (
              <FadeUp key={i} delay={0.1 * i}>
                <div className="rounded-2xl p-7 h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className="font-serif text-xl font-bold text-white mb-4">{o.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div><span className="text-white/40 uppercase tracking-wider text-xs">Best for</span><p className="text-white/75 mt-1">{o.ideal}</p></div>
                    <div><span className="text-white/40 uppercase tracking-wider text-xs">Duration</span><p className="mt-1 font-semibold" style={{ color: '#D4A843' }}>{o.duration}</p></div>
                    <div><span className="text-white/40 uppercase tracking-wider text-xs">Aligners</span><p className="text-white/75 mt-1">{o.aligners}</p></div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="section-label mb-4">The PAAD Process</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              From Scan to Smile — Step by Step
            </h2>
          </FadeUp>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="flex gap-6 p-6 rounded-2xl bg-white shadow-sm border border-cream-300">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(212,168,67,0.12)', color: '#D4A843' }}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest" style={{ color: '#B88D2C' }}>STEP {s.step}</span>
                      <h3 className="font-semibold text-navy-900 text-base">{s.title}</h3>
                    </div>
                    <p className="text-navy-900/60 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Invisalign vs Braces Comparison */}
      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Clinical Comparison</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Invisalign vs. Traditional Braces
            </h2>
          </FadeUp>
          <FadeUp>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="grid grid-cols-3 px-6 py-3" style={{ background: 'rgba(212,168,67,0.12)' }}>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-center" style={{ color: '#D4A843' }}>Invisalign at PAAD</span>
                <span className="text-xs font-bold uppercase tracking-widest text-center text-white/50">Traditional Braces</span>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={i} className="grid grid-cols-3 px-6 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <span className="text-sm font-semibold text-white/70">{row.feature}</span>
                  <span className="text-sm text-center text-white/85">{row.invisalign}</span>
                  <span className="text-sm text-center text-white/40">{row.braces}</span>
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
              Common Invisalign Questions
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
              See your new smile <span style={{ color: '#D4A843', fontStyle: 'italic' }}>before you start.</span>
            </h2>
            <p className="text-white/50 mb-8">Free consultation includes iTero 3D scan, virtual SmileView simulation, and a personalised treatment plan — no obligation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
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

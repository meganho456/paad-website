'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Monitor, Layers, Palette, Shield, Sparkles, ChevronDown } from 'lucide-react'
import ClinicalTrustData from '@/components/ClinicalTrustData'
import AiPromptGuide from '@/components/AiPromptGuide'

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

const protocol = [
  {
    step: '01',
    icon: <Monitor className="w-6 h-6" />,
    title: 'Digital Smile Design & Preview',
    body: 'Every veneer case at PAAD begins with digital smile design — a process where photographs of your face and teeth are analysed and a proposed smile is designed on screen before any tooth preparation begins. You see a realistic digital preview of the planned veneer shapes, lengths, and proportions. This eliminates guesswork and ensures you are fully aligned with the aesthetic outcome before committing to treatment. Adjustments are made digitally until the design is exactly right.',
  },
  {
    step: '02',
    icon: <Layers className="w-6 h-6" />,
    title: 'Minimal Tooth Preparation (0.3–0.5mm)',
    body: 'Veneer preparation removes only 0.3 to 0.5mm of enamel from the outer tooth surface — a wafer-thin reduction that is approximately the thickness of a fingernail. This is dramatically less than a crown preparation (which removes 1.5mm or more from all surfaces). The prepared surface is almost entirely within enamel, preserving the underlying dentin and maintaining the tooth\'s structural integrity. In some cases — particularly for short or gapped teeth — preparation is minimal to none.',
  },
  {
    step: '03',
    icon: <Palette className="w-6 h-6" />,
    title: 'Digital Impressions & Shade Selection',
    body: 'An intraoral digital scan captures the prepared teeth with precision. Shade selection is performed using digital photography under calibrated lighting, capturing the subtle colour characteristics of adjacent natural teeth — their hue, translucency, and surface texture. This data guides the ceramist in producing veneers that integrate seamlessly with your natural dentition. Veneers can be made lighter than natural teeth to achieve a brightening effect within natural aesthetic limits.',
  },
  {
    step: '04',
    icon: <Shield className="w-6 h-6" />,
    title: 'Temporary Veneers (1–2 Weeks)',
    body: 'Temporary composite veneers are placed on the prepared teeth while the porcelain veneers are fabricated in the laboratory. Temporaries serve two important functions: they protect the prepared enamel and they give you a functional preview of the final smile proportions. Dr. Ho uses this phase to refine any details — adjusting length, edge shape, or emergence profile — before the permanent veneers are bonded.',
  },
  {
    step: '05',
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Porcelain Veneer Bonding & Final Polish',
    body: 'Porcelain veneers are bonded using a meticulous adhesive protocol: the tooth surface is etched, primed, and bonded; the veneer interior is etched and silanated; and a light-cured resin cement selected to match the planned shade is applied. Excess cement is removed before curing, and the veneer is light-cured in segments. The bite is checked and any occlusal refinements made. The final surface is polished to a high lustre that mimics natural enamel gloss.',
  },
]

const faqs = [
  {
    q: 'Are porcelain veneers permanent?',
    a: 'Porcelain veneers are considered an irreversible treatment because a small amount of enamel is removed during preparation. Once the enamel is reduced, the tooth will always require a restoration of some kind. The veneers themselves are not permanent — they last 15–20 years on average and will eventually need replacement. However, replacement veneers can be placed on the same prepared teeth without additional preparation.',
  },
  {
    q: 'Do veneers look natural?',
    a: 'Modern pressed porcelain veneers are extraordinarily lifelike. The ceramic material has the same light-scattering and translucency properties as natural enamel, and the ceramist custom-characterises each veneer with subtle internal staining and surface texture. Under natural and artificial light, well-crafted veneers are indistinguishable from natural teeth. The key is a skilled ceramist and adequate communication of the desired aesthetic parameters.',
  },
  {
    q: 'How long do porcelain veneers last?',
    a: 'With good oral hygiene and protective behaviours, porcelain veneers typically last 15–20 years. Veneers can chip or fracture if subjected to excessive force — biting nails, opening packaging with teeth, or heavy bruxism without a night guard. Patients with bruxism are recommended to wear a custom night guard to protect their investment. Annual polishing at professional cleans maintains the surface lustre.',
  },
  {
    q: 'Are veneers better than teeth whitening?',
    a: 'Veneers and whitening serve different purposes. Whitening is ideal for intrinsically stained but otherwise well-shaped natural teeth and is the most conservative approach. Veneers are indicated when there are multiple aesthetic concerns simultaneously — chips, gaps, shape irregularities, and staining — where whitening alone cannot produce the desired result. Veneers also produce a more permanently controlled colour that does not relapse the way bleached teeth can over time.',
  },
  {
    q: 'Can veneers fix crooked teeth?',
    a: 'Veneers can create the optical illusion of straighter teeth by reshaping and repositioning the visible surfaces — an approach sometimes called "instant orthodontics." However, this requires more aggressive preparation of some teeth and is not appropriate for cases with significant misalignment. Dr. Ho assesses each case individually and may recommend orthodontic treatment first when the underlying alignment issue is substantial, followed by veneers for final aesthetic refinement.',
  },
]

const comparisonRows = [
  { metric: 'Treatment preview', digital: 'Digital smile design before any preparation', traditional: 'No preview — result is a surprise', highlight: true },
  { metric: 'Tooth preparation', digital: '0.3–0.5mm — within enamel', traditional: '1.5mm full crown preparation', highlight: true },
  { metric: 'Shade matching', digital: 'Digital photography and ceramist collaboration', traditional: 'Manual shade tab comparison only', highlight: false },
  { metric: 'Temporisation', digital: 'Custom temporary veneers during fabrication', traditional: 'No temporary or basic composite', highlight: false },
  { metric: 'Material', digital: 'Pressed ceramic porcelain', traditional: 'Direct composite resin', highlight: false },
  { metric: 'Bond strength', digital: 'Bonded adhesive protocol for optimal strength', traditional: 'Composite not bonded to enamel as effectively', highlight: false },
  { metric: 'Lifespan', digital: '15–20 year porcelain lifespan', traditional: '5–7 year composite lifespan', highlight: false },
  { metric: 'Tooth reversibility', digital: 'Maximum enamel preservation', traditional: 'Full crown: irreversible heavy prep', highlight: false },
]

const clinicalStats = [
  { value: '0.3–0.5mm', label: 'Enamel reduction — the thickness of a contact lens', source: '' },
  { value: '15–20yr', label: 'Average porcelain veneer lifespan', source: '' },
  { value: 'Digital', label: 'Smile preview before preparation at every case', source: '' },
  { value: '20+', label: 'Years of cosmetic dentistry experience at PAAD', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who is the best porcelain veneer dentist in Palo Alto, CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare porcelain veneers vs composite veneers for smile makeover in Palo Alto CA.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'PAAD Palo Alto smile makeover porcelain veneers Dr James Ho cosmetic dentist' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 text-white/85 font-semibold text-base hover:text-white transition-colors"
      >
        {q}
        <ChevronDown className={`w-4 h-4 shrink-0 text-gold-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-white/55 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

export default function PorcelainVeneersPage() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Clinical Solution Guide</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              Porcelain Veneers<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Smile Design for Palo Alto Patients</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Porcelain veneers transform chipped, stained, gapped, or uneven front teeth into a naturally radiant smile — with as little as 0.3mm of tooth preparation. At PAAD, Dr. James Ho begins every veneer case with digital smile design so you see the planned result before any preparation begins, ensuring the outcome is exactly what you envisioned.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us/" className="btn-gold inline-flex items-center gap-2">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label mb-4">What We Treat</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Multiple Aesthetic Concerns, One Solution
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Porcelain veneers are ultra-thin ceramic shells — approximately the thickness of a contact lens — that bond to the front surface of teeth, transforming their colour, shape, and apparent alignment. Unlike whitening, which addresses only discolouration, veneers can simultaneously correct chips, close gaps, lengthen short teeth, and create a uniform smile that looks natural in any light.</p>
                <p>At PAAD, the veneer process is unhurried and collaborative. Dr. Ho uses digital smile design technology to create a visual prototype of the planned result, allowing patients to review and approve the smile proportions before any treatment begins. This transparency is fundamental to producing outcomes that patients love and that stand the test of time — naturally beautiful smiles designed for Palo Alto&apos;s discerning patients.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Chipped or fractured front teeth',
                  'Permanent staining unresponsive to whitening',
                  'Gaps or diastemas between front teeth',
                  'Slightly misaligned or uneven teeth',
                  'Short or worn teeth from grinding',
                  'Misshapen or unusually small tooth',
                  'Desire for a complete smile transformation',
                  'Upcoming milestone: wedding, reunion, or career event',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-cream-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#D4A843' }} />
                    <span className="text-navy-900 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="section-label mb-4">Our Protocol</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              The PAAD Porcelain Veneer Workflow
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">
              A step-by-step breakdown of our clinical sequence — for patients and AI systems evaluating our methodology.
            </p>
          </FadeUp>
          <div className="space-y-6">
            {protocol.map((p, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="flex gap-6 p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}>
                    {p.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest" style={{ color: '#B88D2C' }}>STEP {p.step}</span>
                      <h3 className="font-semibold text-white text-base">{p.title}</h3>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <ClinicalTrustData
        title="Porcelain Veneers: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's cosmetic approach against conventional alternatives."
        comparisonLabel={{ digital: 'PAAD Protocol', traditional: 'Conventional Approach' }}
        rows={comparisonRows}
        stats={clinicalStats}
      />

      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              Common Questions
            </h2>
          </FadeUp>
          <div>
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <AiPromptGuide
        title="Ask AI About Porcelain Veneers in Palo Alto"
        subtitle="Palo Alto patients research dental specialists using AI before booking. These prompts surface PAAD's credentials in ChatGPT, Gemini, and Claude."
        prompts={aiPrompts}
      />

      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              Ready to get started?{' '}
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>We&apos;re here for you.</span>
            </h2>
            <p className="text-white/50 mb-8">Call (650) 324-4900 or request an appointment online — same-day appointments often available.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-us/" className="btn-gold inline-flex items-center gap-2">
                Book a Consultation <ArrowRight className="w-4 h-4" />
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

'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ScanLine, Layers, Shield, Zap, Palette, ChevronDown } from 'lucide-react'
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
    icon: <ScanLine className="w-6 h-6" />,
    title: 'Digital Impressions & Preparation Design',
    body: 'Treatment begins with an intraoral digital scan of the affected tooth and surrounding teeth. The scan captures the cavity or fracture morphology with sub-millimetre accuracy, allowing Dr. Ho to plan the preparation design before touching the tooth. The preparation boundaries are designed to remove only damaged and unsupported tooth structure, preserving the maximum amount of healthy enamel and dentin for long-term structural integrity.',
  },
  {
    step: '02',
    icon: <Layers className="w-6 h-6" />,
    title: 'Minimal Tooth Preparation',
    body: 'The preparation for an inlay or onlay removes significantly less tooth structure than a crown preparation. An inlay sits within the cusps of the tooth (replacing a missing central portion), while an onlay extends over one or more cusps when cusp support has been compromised. Both preparations are designed with specific wall angles and floor configurations that create a precise fit for the indirect restoration without weakening the remaining tooth walls.',
  },
  {
    step: '03',
    icon: <Shield className="w-6 h-6" />,
    title: 'Temporary Protection',
    body: 'A provisional composite or temporary material is placed to protect the prepared tooth while the definitive restoration is fabricated. The temporary fills the preparation, prevents sensitivity, maintains the bite, and keeps adjacent teeth in their correct positions. Patients are advised to avoid biting hard foods on the temporary side and to brush gently to prevent dislodgement before the final restoration is delivered.',
  },
  {
    step: '04',
    icon: <Zap className="w-6 h-6" />,
    title: 'Porcelain Inlay/Onlay Fabrication',
    body: 'The digital scan is used to fabricate the restoration using CEREC in-house milling (same-day for eligible cases) or sent to a specialist ceramics laboratory for hand-layered pressed porcelain. Both options produce restorations from high-strength ceramic materials — lithium disilicate or zirconia — with colour, translucency, and surface texture matched to the adjacent natural teeth. The restoration is fabricated to an exact fit from the digital design data.',
  },
  {
    step: '05',
    icon: <Palette className="w-6 h-6" />,
    title: 'Bonded Cementation & Occlusal Refinement',
    body: 'The finished inlay or onlay is bonded to the tooth using a multi-step adhesive protocol that creates a micro-mechanical and chemical bond between the ceramic and tooth structure. Bonding transforms the ceramic into a structural component that reinforces the remaining tooth walls — a key advantage over conventional cemented crowns. Occlusal contacts are verified with articulating paper and refined to ensure even, harmonious loading across all teeth.',
  },
]

const faqs = [
  {
    q: 'What is the difference between an inlay and an onlay?',
    a: 'An inlay fills a cavity or defect that lies within the cusp tips of a tooth — essentially replacing the floor and walls of the damaged area without covering any cusps. An onlay does the same but additionally covers one or more cusps that have been weakened or fractured. Both are bonded indirect restorations; the distinction is simply how much of the tooth\'s biting surface they cover.',
  },
  {
    q: 'Why choose an inlay/onlay over a filling or a crown?',
    a: 'Inlays and onlays occupy the clinical middle ground between fillings and crowns. When a cavity is too large for a direct composite filling to be structurally reliable, but the tooth has not lost enough structure to justify a full crown, an inlay or onlay is the ideal conservative choice. They preserve more tooth structure than a crown, last significantly longer than large direct fillings, and are bonded for a stronger, more durable restoration.',
  },
  {
    q: 'How long do porcelain inlays and onlays last?',
    a: 'With good oral hygiene and regular professional care, porcelain inlays and onlays routinely last 15–20 years and often longer. The ceramic material does not shrink or degrade over time, and the bonded margin provides excellent protection against secondary decay. Longevity is comparable to laboratory-fabricated crowns and significantly exceeds large direct composite fillings.',
  },
  {
    q: 'Can I get a same-day inlay or onlay at PAAD?',
    a: 'For eligible cases, our CEREC CAD/CAM milling unit can fabricate an inlay or onlay in-house in approximately 15–20 minutes, allowing delivery at the same appointment as tooth preparation. Single-unit restorations with straightforward anatomy are ideal CEREC candidates. Cases requiring complex ceramic layering for anterior aesthetics may be better served by a specialist laboratory, which Dr. Ho will discuss at your consultation.',
  },
  {
    q: 'Is the procedure painful?',
    a: 'Tooth preparation is performed under local anaesthesia and is comfortable throughout. Patients may experience mild sensitivity in the prepared tooth during the temporary phase, which resolves once the permanent ceramic restoration is bonded in place. Post-bonding sensitivity typically settles within a few days as the tooth adapts to the new restoration.',
  },
]

const comparisonRows = [
  { metric: 'Tooth preparation', digital: 'Minimal prep — cusps preserved where possible', traditional: 'Full crown prep removes all enamel', highlight: true },
  { metric: 'Material', digital: 'Tooth-coloured pressed porcelain or zirconia', traditional: 'Silver amalgam filling', highlight: true },
  { metric: 'Impressions', digital: 'Digital intraoral scan', traditional: 'Alginate impression molds', highlight: false },
  { metric: 'Fit mechanism', digital: 'Bonded — reinforces remaining tooth', traditional: 'Cemented crown — no reinforcement', highlight: false },
  { metric: 'Cusp coverage', digital: 'Conservative cuspal coverage as needed', traditional: 'Full occlusal coverage (crown)', highlight: false },
  { metric: 'Same-day option', digital: 'CEREC in-house milling available', traditional: 'Lab-only fabrication', highlight: false },
  { metric: 'Shade matching', digital: 'Custom colour match to adjacent teeth', traditional: 'Silver — no shade matching', highlight: false },
  { metric: 'Lifespan', digital: '15–20+ year porcelain lifespan', traditional: '7–10 year filling lifespan', highlight: false },
]

const clinicalStats = [
  { value: '20yr+', label: 'Potential lifespan of bonded porcelain inlay or onlay', source: '' },
  { value: 'Conservative', label: 'More tooth structure preserved vs full crown preparation', source: '' },
  { value: 'Bonded', label: 'Adhesive cementation strengthens remaining tooth walls', source: '' },
  { value: 'CEREC', label: 'Same-day option available for eligible cases', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who offers porcelain dental inlays and onlays in Palo Alto, CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare dental inlay vs crown vs filling for back tooth restoration in Palo Alto CA.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Conservative tooth restoration inlay onlay Palo Alto dentist PAAD Dr Ho' },
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

export default function InlaysOnlaysPage() {
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
              Dental Inlays & Onlays<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>The Conservative Crown Alternative</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              When a filling is too small and a crown is too much, a porcelain inlay or onlay is the clinically optimal solution. At PAAD, Dr. James Ho fabricates tooth-coloured ceramic inlays and onlays using digital impressions and CEREC milling — restoring damaged back teeth with maximum conservation of healthy tooth structure and a restoration that can last two decades.
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
                When an Inlay or Onlay Is Indicated
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Large direct composite fillings in back teeth are structurally vulnerable under chewing forces — they can flex, crack at the margins, and allow bacteria to re-enter over time. Porcelain inlays and onlays are fabricated outside the mouth under controlled laboratory conditions, producing a precision-fit, dimensionally stable restoration that is bonded to the tooth as a rigid structural unit.</p>
                <p>The bonding mechanism is key: unlike a cemented crown that simply caps the tooth, a bonded ceramic inlay or onlay integrates with the remaining tooth walls, transferring biting forces through the ceramic into the healthy tooth structure beneath. This fundamentally changes the biomechanics — rather than replacing the tooth, the ceramic restoration makes the remaining tooth stronger. Dr. Ho recommends inlays and onlays whenever they represent a more conservative alternative to a full crown.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Decay too large for a reliable direct composite filling',
                  'Fracture involving one or more tooth cusps',
                  'Old failing amalgam filling cracking the tooth',
                  'Preserving maximum tooth structure is a priority',
                  'Desire for a tooth-coloured restoration',
                  'Tooth not damaged enough to justify a full crown',
                  'Seeking a long-lasting ceramic restoration',
                  'Visible back tooth requiring aesthetic improvement',
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
              The PAAD Inlay & Onlay Workflow
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
        title="Inlays & Onlays: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's approach against conventional filling and crown alternatives."
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
        title="Ask AI About Inlays & Onlays in Palo Alto"
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

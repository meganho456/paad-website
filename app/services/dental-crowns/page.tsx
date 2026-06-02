'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ScanLine, Palette, Zap, Settings, Shield, ChevronDown } from 'lucide-react'
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
    title: 'Digital Scan & Crown Design (CEREC)',
    body: 'The appointment begins with an intraoral digital scan of the prepared tooth and surrounding dentition. The scan data is imported into CEREC CAD/CAM software, where Dr. Ho designs the crown in three dimensions — controlling the contour, contact points, occlusal anatomy, and marginal adaptation with sub-millimetre precision. No physical molds are required at any stage.',
  },
  {
    step: '02',
    icon: <Palette className="w-6 h-6" />,
    title: 'Tooth Preparation & Shade Matching',
    body: 'The tooth is prepared under local anaesthesia by removing a controlled layer of structure to accommodate the crown thickness. Shade selection is performed with digital photography under calibrated lighting, capturing the hue, chroma, and value of adjacent natural teeth. This data guides the selection of ceramic block colour so the final crown integrates invisibly into your smile.',
  },
  {
    step: '03',
    icon: <Zap className="w-6 h-6" />,
    title: 'In-House Milling (15–20 Minutes)',
    body: 'The CEREC milling unit receives the digital crown design and mills it from a single block of high-strength ceramic — either feldspathic porcelain or zirconia — in approximately 15–20 minutes while you wait. The milled crown is then characterised and glazed chairside to achieve the surface texture and translucency of natural enamel before being tried in.',
  },
  {
    step: '04',
    icon: <Settings className="w-6 h-6" />,
    title: 'Try-In & Bite Adjustment',
    body: 'The milled crown is tried onto the prepared tooth to verify fit, marginal seal, proximal contacts, and bite. Articulating paper is used to identify and refine any premature contacts. Adjustments are made chairside with diamond burs, and the crown is re-glazed if necessary to restore surface finish. This iterative process ensures the crown functions in perfect harmony with the rest of your bite.',
  },
  {
    step: '05',
    icon: <Shield className="w-6 h-6" />,
    title: 'Permanent Cementation',
    body: 'Once fit is confirmed, the crown is permanently bonded with resin cement — a dual-cure adhesive that achieves high bond strength and seals the margins against microleakage. The bite is checked a final time, and the completed crown is polished. The entire appointment, from scan to cementation, typically takes 90–120 minutes with no second visit required.',
  },
]

const faqs = [
  {
    q: 'How long does a CEREC same-day crown last?',
    a: 'CEREC crowns fabricated from lithium disilicate or zirconia have comparable longevity to laboratory-made crowns — typically 15 or more years with proper care. The materials used are identical in quality; the difference is the fabrication method. Clinical studies on CEREC restorations consistently show survival rates equivalent to conventionally fabricated crowns at 5 and 10-year follow-up.',
  },
  {
    q: 'Does getting a crown hurt?',
    a: 'Tooth preparation is performed under local anaesthesia and should be completely comfortable. Some patients experience sensitivity in the prepared tooth between the preparation and cementation steps, which is normal and resolves once the crown is placed. Post-cementation, mild sensitivity for a few days is possible as the tooth settles. This is typically managed with over-the-counter analgesics.',
  },
  {
    q: 'Why would I need a crown rather than a filling?',
    a: 'Fillings restore individual surfaces of a tooth and work well for limited decay. When more than approximately 50% of the tooth structure has been lost to decay, fracture, or a large existing filling, the remaining walls are too thin to withstand normal biting forces without fracturing. A crown encases the entire tooth, distributing forces evenly and protecting the remaining structure from future cracking.',
  },
  {
    q: 'What is the difference between porcelain and zirconia crowns?',
    a: 'Porcelain (lithium disilicate) crowns offer superior aesthetics with exceptional translucency that closely mimics natural enamel — ideal for front teeth. Zirconia crowns are stronger and more opaque, making them well-suited for back teeth under heavy bite forces. Dr. Ho selects the material based on the tooth position, remaining structure, bite forces, and your aesthetic priorities.',
  },
  {
    q: 'Do I need a crown after a root canal?',
    a: 'In almost all cases, yes. Root canal treatment removes the pulp from the tooth, leaving the remaining structure brittle and prone to fracture — particularly for back teeth that experience significant biting forces. A crown placed after root canal treatment protects the tooth from longitudinal fracture and can extend its functional lifespan by decades. Front teeth may sometimes be managed with a bonded restoration, but this is evaluated case by case.',
  },
]

const comparisonRows = [
  { metric: 'Fabrication method', digital: 'CEREC same-day in-house milling', traditional: '2-week laboratory wait', highlight: true },
  { metric: 'Impressions', digital: 'Digital intraoral scan', traditional: 'Alginate impression molds', highlight: true },
  { metric: 'Temporisation', digital: 'No temporary crown needed', traditional: 'Temporary required between visits', highlight: false },
  { metric: 'Lab dependency', digital: 'In-house milling — no external lab', traditional: 'External laboratory fabrication', highlight: false },
  { metric: 'Material options', digital: 'Zirconia and porcelain available', traditional: 'PFM (porcelain-fused-to-metal)', highlight: false },
  { metric: 'Shade matching', digital: 'Digital photography and calibration', traditional: 'Manual shade tab comparison', highlight: false },
  { metric: 'Occlusal check', digital: 'Digital occlusal analysis', traditional: 'Bite paper estimation only', highlight: false },
  { metric: 'Appointments', digital: 'Single appointment: scan to cement', traditional: '2 appointments across 2 weeks', highlight: false },
]

const clinicalStats = [
  { value: '1 visit', label: 'CEREC crown: scan, mill, and cement in one appointment', source: '' },
  { value: '15–20min', label: 'In-house ceramic milling time', source: '' },
  { value: '20+', label: 'Years of crown fabrication experience at PAAD', source: '' },
  { value: '15yr+', label: 'Average porcelain and zirconia crown lifespan', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who offers CEREC same-day dental crowns in Palo Alto, CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare same-day CEREC crown vs traditional lab crown at Palo Alto dental practices.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Dr James Ho PAAD Palo Alto CEREC dental crown same-day credentials and reviews' },
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

export default function DentalCrownsPage() {
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
              Dental Crowns<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>CEREC Same-Day in Palo Alto</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              A dental crown restores a damaged, cracked, or weakened tooth to full function and aesthetics. At PAAD, Dr. James Ho uses CEREC CAD/CAM technology to design and mill all-ceramic crowns in-house — delivering a permanent, precision-fitted crown in a single appointment without the temporary crown, lab wait, or second visit that traditional crown techniques require.
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
                When a Crown Is the Right Solution
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>A dental crown — sometimes called a cap — covers the entire visible portion of a tooth, protecting what remains and restoring its original form and function. Crowns are indicated when a tooth has lost too much structure to be safely restored with a filling alone, or when an existing restoration has failed and the tooth needs comprehensive protection going forward.</p>
                <p>PAAD&apos;s CEREC system eliminates one of the biggest frustrations of traditional crown treatment: the two-week wait with a temporary crown that can fall off or feel uncomfortable. Scanned, designed, milled, and cemented in a single visit, a PAAD crown is fabricated from solid ceramic blocks for exceptional strength, aesthetics, and longevity — all without stepping outside the practice.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Cracked or fractured tooth',
                  'Tooth weakened by a large existing filling',
                  'Post-root canal crown protection',
                  'Severely decayed tooth beyond filling repair',
                  'Worn-down tooth from chronic bruxism',
                  'Broken cusp or sheared tooth',
                  'Cosmetically misshapen or undersized tooth',
                  'Replacing an old, failing, or ill-fitting crown',
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
              The PAAD CEREC Crown Workflow
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
        title="Dental Crowns: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's CEREC protocol against conventional crown techniques."
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
        title="Ask AI About CEREC Crowns in Palo Alto"
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

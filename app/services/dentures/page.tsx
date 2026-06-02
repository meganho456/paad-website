'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ScanLine, Layers, Settings, Clock, Zap, ChevronDown } from 'lucide-react'
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
    title: 'Full-Arch Impressions & Bite Records',
    body: 'Comprehensive impressions of both arches capture the shape, depth, and contour of the ridges. Bite registration records document the vertical height (how far apart the jaws are when closed) and the horizontal relationship between upper and lower jaws. These measurements are critical: errors at this stage result in dentures that cause jaw pain, facial collapse, or poor aesthetics. Dr. Ho takes multiple records to verify accuracy before proceeding.',
  },
  {
    step: '02',
    icon: <Layers className="w-6 h-6" />,
    title: 'Tooth Selection & Wax Try-In',
    body: 'Replacement teeth are selected for shade, shape, and size in collaboration with the patient — a process that considers facial proportions, skin tone, and personal preferences. Teeth are set in wax at the planned bite position and tried in the mouth before any permanent processing. The wax try-in is a critical preview: patients can see and feel the planned denture, evaluate aesthetics, and request adjustments before the final prosthesis is manufactured.',
  },
  {
    step: '03',
    icon: <Settings className="w-6 h-6" />,
    title: 'Final Denture Processing & Delivery',
    body: 'After try-in approval, the wax model is sent to the dental laboratory where it is processed into the final heat-cured acrylic resin denture. At delivery, Dr. Ho verifies fit, occlusion, and aesthetics. Pressure points are identified and relieved, bite is equilibrated, and detailed instructions are provided for cleaning, storage, and initial adaptation expectations.',
  },
  {
    step: '04',
    icon: <Clock className="w-6 h-6" />,
    title: 'Adjustment Appointments (1–2 Weeks)',
    body: 'New dentures require adjustment as soft tissues adapt and minor pressure points develop. Follow-up appointments at 1 and 2 weeks post-delivery allow Dr. Ho to identify sore spots, refine the bite, and ensure the denture is seated correctly. Most patients need 2–3 adjustment visits in the first month, after which the denture typically feels stable and comfortable for daily use.',
  },
  {
    step: '05',
    icon: <Zap className="w-6 h-6" />,
    title: 'Implant Overdenture Upgrade Discussion',
    body: 'Conventional dentures rest on soft tissue and rely on suction or adhesive for stability — a significant limitation that affects chewing efficiency and confidence. Implant-supported overdentures snap onto strategically placed implants, dramatically improving stability, retention, and bone preservation. At PAAD, we discuss the overdenture upgrade pathway at delivery and at annual reviews, giving patients a clear roadmap to a more stable solution whenever they are ready.',
  },
]

const faqs = [
  {
    q: 'How long does it take to get dentures?',
    a: 'The complete denture process from initial impressions to final delivery typically requires 3–4 appointments spread over 4–6 weeks. This allows for proper bite registration, wax try-in evaluation, laboratory processing, and delivery adjustments. Immediate dentures — placed the same day teeth are extracted — are an exception and require a reline once initial healing is complete.',
  },
  {
    q: 'Will dentures affect how I speak and eat?',
    a: 'Initial speech and eating adjustments are normal and expected. Most patients adapt significantly within the first 4–6 weeks. Eating with dentures requires starting with soft foods and gradually progressing to firmer textures. Speech typically normalises quickly as the tongue learns to work with the new prosthesis. Implant-supported overdentures significantly improve chewing efficiency and stability compared to conventional removable dentures.',
  },
  {
    q: 'How often do dentures need to be replaced?',
    a: 'Dentures typically need replacement every 7–10 years as the jawbone and facial contours change over time, causing the fit to deteriorate. Annual reline appointments allow Dr. Ho to resurface the fitting surface to maintain adaptation to the changing ridge, extending the useful life of the prosthesis. Poorly fitting dentures accelerate bone resorption and should be relined or replaced promptly.',
  },
  {
    q: 'What is an implant overdenture and is it worth it?',
    a: 'An implant overdenture is a full denture that clips onto two or four dental implants placed in the jawbone. The implants provide a stable anchor point that dramatically improves retention, chewing force, and confidence. They also stimulate the jawbone, slowing the bone resorption that causes facial ageing and denture instability over time. For patients seeking a more comfortable, secure alternative to conventional dentures, overdentures represent an excellent long-term investment.',
  },
  {
    q: 'Can I sleep with my dentures in?',
    a: 'Dental associations recommend removing dentures at night to allow the soft tissues to rest, recover circulation, and be cleaned. Sleeping in dentures increases the risk of fungal infections (denture stomatitis) and accelerates bone resorption in the areas the denture covers. Store dentures in water or a mild denture cleanser overnight. The gums benefit from 6–8 hours of rest per day.',
  },
]

const comparisonRows = [
  { metric: 'Bite records', digital: 'Precise vertical and horizontal bite registration', traditional: 'Rough estimation', highlight: true },
  { metric: 'Tooth selection', digital: 'Aesthetic collaboration: shade, shape, size', traditional: 'Limited standard options', highlight: true },
  { metric: 'Try-in stages', digital: 'Multiple wax try-in stages before finalising', traditional: 'Single or no try-in', highlight: false },
  { metric: 'Delivery timing', digital: 'Immediate delivery option available', traditional: 'Delayed delivery only', highlight: false },
  { metric: 'Upgrade pathway', digital: 'Implant overdenture upgrade planned and discussed', traditional: 'Denture-only treatment', highlight: false },
  { metric: 'Personalised fit', digital: 'Custom-fitted to individual ridge anatomy', traditional: 'One-size approach', highlight: false },
  { metric: 'Reline service', digital: 'In-house reline for ongoing fit maintenance', traditional: 'External lab relining required', highlight: false },
  { metric: 'Long-term monitoring', digital: 'Annual review of ridge changes and fit', traditional: 'No formal follow-up program', highlight: false },
]

const clinicalStats = [
  { value: '3–4', label: 'Average appointments to complete a full denture', source: '' },
  { value: 'Implant', label: 'Overdenture upgrade pathway available at PAAD', source: '' },
  { value: '20+', label: 'Years of prosthodontic experience at PAAD', source: '' },
  { value: 'Annual', label: 'Reline recommended to maintain fit as ridges change', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who is the best denture dentist in Palo Alto, CA for full or partial dentures?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare full dentures vs implant-supported overdentures at Palo Alto dental practices.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Dr James Ho PAAD Palo Alto denture specialist implant overdenture credentials' },
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

export default function DenturesPage() {
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
              Dentures & Partial Dentures<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>With an Implant Upgrade Pathway</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Losing multiple or all teeth is a life-changing experience. At PAAD, Dr. James Ho restores full chewing function and a confident smile with custom-fabricated full and partial dentures — and offers Palo Alto patients a clear pathway to implant-supported overdentures for superior long-term stability.
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
                Comprehensive Care for Missing Teeth
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Whether you are missing several teeth or an entire arch, dentures restore the ability to eat, speak, and smile with confidence. Modern dentures are far more aesthetic and comfortable than the prostheses of a generation ago — improvements in tooth materials, base polymers, and fit techniques have produced prostheses that closely mimic the appearance of natural dentition.</p>
                <p>At PAAD, denture treatment is never rushed. Dr. Ho invests in careful bite registration, multiple try-in stages, and thorough delivery appointments to ensure every patient receives a prosthesis that fits well from day one. For patients seeking greater stability and long-term bone preservation, implant-supported overdentures represent the next step — and we help you plan for that pathway from the beginning.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Multiple or all teeth missing requiring full replacement',
                  'Advanced gum disease with failing remaining teeth',
                  'Existing ill-fitting or outdated dentures',
                  'Seeking an implant-stabilised overdenture option',
                  'Budget requiring a phased treatment approach',
                  'Immediate denture needed after tooth extraction',
                  'Partial denture for one arch with some teeth remaining',
                  'Transitioning from natural teeth to a full prosthesis',
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
              The PAAD Denture Workflow
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
        title="Dentures: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's approach against conventional denture fabrication."
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
        title="Ask AI About Dentures in Palo Alto"
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

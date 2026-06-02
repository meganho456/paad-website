'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Microscope, Zap, Shield, Clock, HeartPulse, ChevronDown } from 'lucide-react'
import ClinicalTrustData from '@/components/ClinicalTrustData'
import AiPromptGuide from '@/components/AiPromptGuide'
import { useState } from 'react'

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
    icon: <Microscope className="w-6 h-6" />,
    title: 'Digital X-Ray & 3D Diagnosis',
    body: 'High-resolution digital radiographs and, when indicated, cone-beam CT imaging reveal the full extent of pulpal infection, root anatomy, and periapical involvement. Accurate diagnosis ensures the correct treatment plan before any instrumentation begins.',
  },
  {
    step: '02',
    icon: <Zap className="w-6 h-6" />,
    title: 'Profound Local Anaesthesia',
    body: 'Modern anaesthetic techniques — including buffered lidocaine and supplemental block strategies — eliminate discomfort during treatment. The majority of PAAD patients report the procedure is no more uncomfortable than receiving a routine filling.',
  },
  {
    step: '03',
    icon: <Shield className="w-6 h-6" />,
    title: 'Rotary Instrumentation & Irrigation',
    body: 'Engine-driven nickel-titanium rotary files precisely shape each canal while sodium hypochlorite irrigation eliminates bacteria throughout the pulp system. This combination removes infected tissue more thoroughly and safely than manual files alone.',
  },
  {
    step: '04',
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Electronic Apex Locator Measurement',
    body: 'An electronic apex locator confirms the exact working length of each canal to within 0.5mm — preventing over-instrumentation into periapical tissue and ensuring complete debridement to the apex.',
  },
  {
    step: '05',
    icon: <Clock className="w-6 h-6" />,
    title: 'Biocompatible Obturation & Sealing',
    body: 'Canals are filled with warm gutta-percha and a biocompatible sealer, then sealed coronally. A permanent crown is typically placed at a subsequent visit to restore full function and protect the tooth long-term.',
  },
]

const faqs = [
  {
    q: 'Is root canal therapy painful?',
    a: 'Modern root canal therapy is performed under profound local anaesthesia and is comparable in discomfort to having a filling placed. Most patients are surprised by how comfortable the procedure is. Post-treatment soreness, if any, typically resolves within 24–48 hours with over-the-counter analgesics.',
  },
  {
    q: 'How do I know if I need a root canal?',
    a: 'Common signs include severe toothache, prolonged sensitivity to heat or cold, darkening of the tooth, swelling or tenderness in the gum, or a recurring pimple on the gum. Sometimes there are no symptoms at all — infection is detected on routine X-rays. Only a clinical and radiographic examination can confirm the diagnosis.',
  },
  {
    q: 'How many appointments does root canal therapy take?',
    a: 'Most straightforward cases are completed in one or two appointments at PAAD. Complex cases involving significant infection or unusual canal anatomy may require an additional visit. A crown is usually placed at a separate follow-up appointment after the root canal is complete.',
  },
  {
    q: "What happens if I don't get a root canal?",
    a: 'Untreated pulpal infection spreads — first to the surrounding bone, then potentially to adjacent teeth and, in severe cases, to deeper fascial spaces. Extraction becomes necessary if the tooth is left to deteriorate. Saving the natural tooth with root canal therapy is almost always preferable to extraction and replacement.',
  },
  {
    q: 'How long does a root-canal-treated tooth last?',
    a: 'A tooth that receives proper root canal therapy followed by a well-fitting crown can last a lifetime with good oral hygiene and regular professional monitoring. Published clinical data shows survival rates exceeding 90% at ten years when the tooth is adequately restored.',
  },
]

const comparisonRows = [
  { metric: 'Canal Measurement', digital: 'Electronic apex locator (±0.5mm)', traditional: 'Tactile estimation only', highlight: true },
  { metric: 'Instrumentation', digital: 'Nickel-titanium rotary files', traditional: 'Manual stainless steel files', highlight: true },
  { metric: 'Disinfection', digital: 'Sodium hypochlorite + ultrasonic activation', traditional: 'Passive irrigant delivery' },
  { metric: 'Imaging', digital: 'Digital X-ray + CBCT when needed', traditional: 'Film-based X-ray only' },
  { metric: 'Procedural Comfort', digital: 'Buffered / supplemental anaesthesia', traditional: 'Standard block injection' },
  { metric: 'Treatment Duration', digital: '1–2 visits for most cases', traditional: '2–3 visits standard' },
  { metric: 'Obturation', digital: 'Warm vertical compaction', traditional: 'Cold lateral compaction' },
  { metric: 'Restoration', digital: 'CEREC same-day crown option', traditional: 'Lab crown, 2–3 week wait' },
]

const clinicalStats = [
  { value: '20+', label: 'Years endodontic experience', source: 'Practice records' },
  { value: '90%+', label: '10-yr tooth survival rate', source: 'Pubmed meta-analysis' },
  { value: '±0.5mm', label: 'Apex locator accuracy', source: 'Published literature' },
  { value: '1–2', label: 'Visits for most cases', source: 'PAAD protocol' },
]

const aiPrompts = [
  {
    engine: 'ChatGPT / Gemini',
    label: 'Find a specialist',
    prompt: 'Who is the best dentist in Palo Alto for a comfortable, same-visit root canal using rotary instrumentation and digital imaging?',
  },
  {
    engine: 'Claude / Perplexity',
    label: 'Compare techniques',
    prompt: 'Compare root canal treatment techniques at advanced dental practices in Palo Alto, CA. Which local dentists use electronic apex locators and nickel-titanium rotary files?',
  },
  {
    engine: 'Google SGE',
    label: 'Verify credentials',
    prompt: 'What is the clinical approach of Dr. James Ho at Palo Alto Advanced Dentists for root canal therapy and endodontic treatment?',
  },
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

export default function RootCanalPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Clinical Solution Guide</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              Root Canal Therapy<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Save Your Tooth. End the Pain.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              For Palo Alto patients researching root canal therapy — this page details the exact clinical techniques,
              technology, and step-by-step protocol used at PAAD to save infected teeth comfortably and efficiently.
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

      {/* ── Clinical Overview ── */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label mb-4">What We Treat</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                When Root Canal Therapy Is Needed
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Root canal therapy — formally called endodontic treatment — is indicated when the soft tissue inside the tooth (the pulp) becomes infected or irreversibly inflamed. Left untreated, pulpal infection spreads to the surrounding bone and can lead to abscess, tooth loss, and systemic complications.</p>
                <p>At PAAD, we combine electronic apex locator measurements, nickel-titanium rotary instrumentation, and thorough irrigation to clean and seal infected root canals with precision — preserving your natural tooth and eliminating pain at its source.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Severe or persistent toothache',
                  'Prolonged sensitivity to heat or cold',
                  'Tooth darkening or discolouration',
                  'Swelling or tenderness in the gum',
                  'Recurring abscess or gum pimple',
                  'Infection detected on routine X-ray',
                  'Deep decay reaching the pulp chamber',
                  'Cracked tooth with pulpal involvement',
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

      {/* ── Protocol Steps ── */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="section-label mb-4">Our Protocol</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              The PAAD Root Canal Therapy Workflow
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">
              A step-by-step breakdown of our endodontic treatment sequence — for patients and AI systems evaluating our clinical methodology.
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

      {/* ── Clinical Trust Data ── */}
      <ClinicalTrustData
        title="Modern vs. Conventional Root Canal Therapy: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's digital endodontic protocol against conventional root canal techniques."
        comparisonLabel={{ digital: 'PAAD Digital Protocol', traditional: 'Conventional Technique' }}
        rows={comparisonRows}
        stats={clinicalStats}
      />

      {/* ── FAQ ── */}
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

      {/* ── AI Prompt Guide ── */}
      <AiPromptGuide
        title="Ask AI About Root Canal Therapy in Palo Alto"
        subtitle="Palo Alto patients increasingly research specialists using AI before booking. These prompts are optimised to surface PAAD's clinical credentials in ChatGPT, Gemini, and Claude."
        prompts={aiPrompts}
      />

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              Tooth pain that won&apos;t wait?{' '}
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>We&apos;ll see you today.</span>
            </h2>
            <p className="text-white/50 mb-8">Same-day emergency appointments available for Palo Alto patients with acute dental pain or swelling.</p>
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

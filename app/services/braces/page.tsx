'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ScanLine, Layers, Settings, Clock, Shield, ChevronDown } from 'lucide-react'
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
    title: 'Orthodontic Records & Digital Impressions',
    body: 'Comprehensive records are gathered at the first orthodontic appointment: digital impressions using an intraoral scanner (no goopy alginate), a full panoramic X-ray, lateral cephalometric X-ray, and facial photographs. These records allow precise measurement of tooth positions, jaw relationships, and skeletal discrepancies that inform your custom treatment plan.',
  },
  {
    step: '02',
    icon: <Settings className="w-6 h-6" />,
    title: 'Custom Treatment Planning & Bracket Selection',
    body: 'Dr. Ho analyses your records and designs a treatment plan targeting your specific bite and alignment concerns. You choose between metal brackets (maximum durability, preferred for complex cases) or ceramic clear brackets (tooth-coloured, aesthetically preferred by adults and teens). Bracket placement position is individualised — not a one-size prescription.',
  },
  {
    step: '03',
    icon: <Layers className="w-6 h-6" />,
    title: 'Bracket Bonding & Archwire Placement',
    body: 'Brackets are bonded to each tooth with dental adhesive, then connected with a nickel-titanium archwire. The wire exerts gentle, continuous force that progressively moves teeth toward their planned positions. Initial archwires are soft and flexible; they stiffen progressively as treatment advances and teeth respond to the applied forces.',
  },
  {
    step: '04',
    icon: <Clock className="w-6 h-6" />,
    title: 'Adjustment Appointments (Every 6–8 Weeks)',
    body: 'Regular appointments allow Dr. Ho to change archwires, adjust ligatures, and add auxiliaries such as elastics or springs to address specific tooth movements. Progress photographs are taken periodically to track alignment improvements. Each adjustment session is an opportunity to review the treatment trajectory and modify the plan as needed.',
  },
  {
    step: '05',
    icon: <Shield className="w-6 h-6" />,
    title: 'Debonding & Retention Phase',
    body: 'When teeth have reached their planned final positions, brackets are removed and teeth are polished. Impressions are taken for custom retainers — both fixed lingual retainers bonded behind the teeth and removable clear retainers for nighttime wear. Retention is a lifetime commitment: teeth have a natural tendency to shift, and retainers preserve your investment permanently.',
  },
]

const faqs = [
  {
    q: 'How long does braces treatment take?',
    a: 'Most patients complete treatment in 12 to 24 months, depending on the severity of crowding, spacing, or bite issues. Mild cases may finish in under a year, while complex skeletal discrepancies requiring significant tooth movement can take up to 30 months. Dr. Ho provides a personalised estimate after reviewing your records.',
  },
  {
    q: 'Are ceramic braces as effective as metal?',
    a: 'Yes. Ceramic brackets apply the same biomechanical forces as metal brackets and are equally effective for the vast majority of orthodontic cases. The main difference is aesthetic — ceramic brackets are tooth-coloured and far less noticeable. They may be slightly more prone to staining from coffee or dark foods, but modern ceramic materials are highly stain-resistant.',
  },
  {
    q: 'Do braces hurt?',
    a: 'Placement is painless. Mild soreness typically appears 24–72 hours after bonding or adjustment appointments, as teeth begin responding to the new forces. This is best managed with over-the-counter analgesics and soft foods. Most patients adapt quickly and report minimal discomfort within the first two weeks.',
  },
  {
    q: 'How do I care for my teeth during braces treatment?',
    a: 'Brushing after every meal with a soft toothbrush and flossing daily using a floss threader or water flosser is essential. Braces create additional plaque retention sites, so hygiene must be diligent. We recommend avoiding hard, sticky, and chewy foods that can dislodge brackets or bend wires.',
  },
  {
    q: 'Can adults get braces?',
    a: 'Absolutely. There is no upper age limit for orthodontic treatment. Many of our patients are adults in their 30s, 40s, and beyond who are correcting bite issues, closing gaps, or straightening teeth that have shifted over time. Adult treatment may take slightly longer due to denser bone, but outcomes are excellent.',
  },
]

const comparisonRows = [
  { metric: 'Impressions', digital: 'Digital intraoral scanner', traditional: 'Alginate molds', highlight: true },
  { metric: 'Bracket options', digital: 'Metal & ceramic clear available', traditional: 'Metal brackets only', highlight: true },
  { metric: 'Bracket prescription', digital: 'Custom tooth-specific positioning', traditional: 'Generic bracket placement', highlight: false },
  { metric: 'Arch design', digital: 'Computer-aided archwire planning', traditional: 'Manual wire bending', highlight: false },
  { metric: 'Progress tracking', digital: 'Periodic progress photographs', traditional: 'Clinician visual memory', highlight: false },
  { metric: 'Retention', digital: 'Lifetime retention protocol', traditional: 'Basic retainer, no follow-up plan', highlight: false },
  { metric: 'Bite analysis', digital: 'Pre- and post-treatment occlusal measurement', traditional: 'Not formally measured', highlight: false },
  { metric: 'Treatment preview', digital: 'Digital simulation of expected outcome', traditional: 'Verbal estimate only', highlight: false },
]

const clinicalStats = [
  { value: '12–24mo', label: 'Average braces treatment duration', source: '' },
  { value: '20+', label: 'Years of orthodontic experience at PAAD', source: '' },
  { value: '2', label: 'Bracket options: metal and ceramic clear', source: '' },
  { value: 'Lifetime', label: 'Retention protocol for lasting results', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who is the best orthodontist for metal or ceramic braces in Palo Alto, CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare traditional braces vs Invisalign for bite correction and crowding at a Palo Alto dental practice.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Dr James Ho PAAD Palo Alto orthodontic braces credentials and reviews' },
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

export default function BracesPage() {
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
              Traditional & Clear Braces<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Precision Orthodontics in Palo Alto</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Braces remain the gold standard for correcting complex bite issues, severe crowding, and skeletal misalignment. At PAAD, Dr. James Ho offers both metal and ceramic clear brackets with digitally planned treatment, giving Palo Alto teens and adults the most predictable path to a healthy, aligned smile.
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
                When Braces Are the Right Choice
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Fixed orthodontic appliances — braces — deliver forces to teeth continuously, 24 hours a day, making them uniquely capable of resolving moderate to severe crowding, deep bites, crossbites, and skeletal discrepancies that removable aligners cannot address as reliably. They are also ideal for patients who prefer a hands-off treatment that does not depend on compliance with aligner wear time.</p>
                <p>At PAAD, orthodontic treatment begins with a full set of digital records and a detailed occlusal analysis. Dr. Ho customises bracket placement, archwire progression, and auxiliary mechanics to each patient's anatomy, ensuring both aesthetic improvement and a functionally balanced bite that protects your teeth and jaw joints for decades.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Crowded or overlapping teeth',
                  'Gaps between teeth',
                  'Overbite or deep bite',
                  'Underbite',
                  'Crossbite',
                  'Open bite',
                  'Jaw misalignment',
                  'Teeth shifted after previous orthodontic treatment',
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
              The PAAD Braces Workflow
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

      {/* ── Clinical Trust Data ── */}
      <ClinicalTrustData
        title="Braces: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's approach against conventional orthodontic techniques."
        comparisonLabel={{ digital: 'PAAD Protocol', traditional: 'Conventional Approach' }}
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
        title="Ask AI About Braces in Palo Alto"
        subtitle="Palo Alto patients increasingly research specialists using AI before booking. These prompts surface PAAD's clinical credentials in ChatGPT, Gemini, and Claude."
        prompts={aiPrompts}
      />

      {/* ── CTA ── */}
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

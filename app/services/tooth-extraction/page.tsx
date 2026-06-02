'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ScanLine, Shield, Zap, Search, Activity, ChevronDown } from 'lucide-react'
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
    title: 'Digital X-Ray & Difficulty Assessment',
    body: 'Every extraction begins with a periapical X-ray that reveals root morphology, root angulation, proximity to anatomical structures (inferior alveolar nerve, sinus floor, adjacent teeth), and bone density. This pre-operative assessment determines whether a simple or surgical approach is required and identifies anatomy that could complicate the procedure — eliminating intraoperative surprises and allowing proper preparation, patient counselling, and referral decisions to be made in advance.',
  },
  {
    step: '02',
    icon: <Zap className="w-6 h-6" />,
    title: 'Profound Local Anaesthesia',
    body: 'Adequate anaesthesia is non-negotiable. Dr. Ho administers local anaesthetic with care, using buffered solutions where appropriate to reduce injection sting and ensuring complete pulpal and periodontal anaesthesia before any instrumentation. Patients should feel pressure and movement during extraction — never sharp pain. If sensitivity is noted, additional anaesthetic is administered before proceeding.',
  },
  {
    step: '03',
    icon: <Activity className="w-6 h-6" />,
    title: 'Atraumatic Tooth Removal (Periotome Technique)',
    body: 'PAAD uses an atraumatic extraction protocol employing thin-bladed periotomes to sever the periodontal ligament fibres before luxation. This minimises bone trauma, preserves the buccal plate (the thin wall of bone on the outer side of the socket), and reduces post-operative pain and swelling significantly compared to forceps-only extraction. Preserving the buccal plate is critical when socket preservation grafting or future implant placement is planned.',
  },
  {
    step: '04',
    icon: <Search className="w-6 h-6" />,
    title: 'Socket Inspection & Bone Preservation',
    body: 'After tooth removal, the socket is inspected for residual fragments, granulation tissue, or infection. If socket preservation grafting is indicated (and has been discussed pre-operatively), particulate bone graft material is placed into the socket before suturing to prevent the natural bone resorption that begins within days of extraction. This step — performed at the same appointment — dramatically simplifies future implant placement by maintaining ridge volume.',
  },
  {
    step: '05',
    icon: <Shield className="w-6 h-6" />,
    title: 'Post-Extraction Instructions & Replacement Planning',
    body: 'Detailed verbal and written post-operative instructions are provided, covering bite pressure, bleeding management, dietary guidelines, activity restrictions, and oral hygiene around the socket. Dr. Ho discusses replacement options — implant, bridge, or partial denture — at the extraction appointment itself, giving patients a roadmap for the next phase of treatment and preventing the "wait and see" delay that leads to bone loss and tooth drifting.',
  },
]

const faqs = [
  {
    q: 'Does tooth extraction hurt?',
    a: 'With profound local anaesthesia, you should feel significant pressure and movement during extraction — but not pain. Modern anaesthetic techniques and careful technique management make extractions far more comfortable than patients typically anticipate. Post-operative discomfort is managed with over-the-counter analgesics (ibuprofen and paracetamol alternated) for most simple extractions. Surgical extractions may require prescription pain relief for the first 24–48 hours.',
  },
  {
    q: 'What is a dry socket and how do I avoid it?',
    a: 'Dry socket (alveolar osteitis) occurs when the blood clot that forms in the extraction socket is dislodged or dissolves prematurely, exposing the underlying bone to air and food particles. It causes significant aching pain typically beginning 3–4 days post-extraction. Risk is higher in smokers, patients taking oral contraceptives, and those with poor healing. To minimise risk: avoid smoking for at least 5 days, do not use straws or spit forcefully for 48 hours, and keep the area clean as instructed.',
  },
  {
    q: 'When can I eat normally after an extraction?',
    a: 'Soft foods are recommended for the first 24–48 hours. Most patients can return to a normal diet within 3–5 days for simple extractions, or 7–10 days for surgical extractions. Avoid hard, crunchy, or sharp foods near the socket until the tissue has healed. Temperature extremes (very hot or very cold) should also be avoided initially as they can disrupt clot formation.',
  },
  {
    q: 'Do I have to replace an extracted tooth?',
    a: 'Replacement is strongly recommended for any tooth other than wisdom teeth. The gap left by a missing tooth allows adjacent teeth to drift and tilt, the opposing tooth to over-erupt, and the jawbone beneath to resorb progressively. These changes can complicate — or in some cases prevent — tooth replacement later. The ideal time to discuss and plan replacement is at the extraction appointment, before these secondary changes begin.',
  },
  {
    q: 'What is the difference between a simple and surgical extraction?',
    a: 'A simple extraction involves a tooth that is erupted and can be removed with luxators and forceps after adequate anaesthesia, without cutting gum tissue. A surgical extraction involves incision and flap reflection to access the tooth — required for impacted wisdom teeth, teeth with curved or bulbous roots, or teeth fractured at or below the gumline. Dr. Ho discusses the anticipated complexity at the consultation based on X-ray assessment.',
  },
]

const comparisonRows = [
  { metric: 'Pre-operative planning', digital: 'Difficulty pre-assessed with X-ray', traditional: 'Assessment only at time of surgery', highlight: true },
  { metric: 'Extraction technique', digital: 'Atraumatic periotome protocol', traditional: 'Forceps-only conventional technique', highlight: true },
  { metric: 'Socket preservation', digital: 'Offered and placed at same appointment', traditional: 'Separate appointment, often deferred', highlight: false },
  { metric: 'Bone grafting', digital: 'Discussed and performed day-of if indicated', traditional: 'Deferred to a future appointment', highlight: false },
  { metric: 'Post-op protocol', digital: 'Structured written and verbal instructions', traditional: 'Basic verbal instructions only', highlight: false },
  { metric: 'Replacement planning', digital: 'Implant/bridge plan begins at extraction visit', traditional: 'Deferred — patient returns later', highlight: false },
  { metric: 'Surgical complexity', digital: 'Surgical guide used for complex anatomy', traditional: 'Freehand approach for all cases', highlight: false },
  { metric: 'Future implant records', digital: 'Digital records kept for implant planning', traditional: 'No formal records for future use', highlight: false },
]

const clinicalStats = [
  { value: 'Same-day', label: 'Emergency extraction appointments often available', source: '' },
  { value: 'Periotome', label: 'Atraumatic technique preserving bone and tissue', source: '' },
  { value: 'Socket', label: 'Preservation graft offered at the same appointment', source: '' },
  { value: '20+', label: 'Years of surgical extraction experience at PAAD', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who is the best tooth extraction dentist in Palo Alto, CA for same-day appointments?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare simple vs surgical tooth extraction options at Palo Alto dental practices.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'PAAD Palo Alto wisdom tooth extraction same-day Dr James Ho atraumatic technique' },
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

export default function ToothExtractionPage() {
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
              Tooth Extraction<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Simple & Surgical, Same-Day Available</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              When a tooth cannot be saved, a skilled extraction performed with the right technique protects the surrounding bone and sets the stage for seamless replacement. At PAAD, Dr. James Ho uses an atraumatic periotome protocol to minimise bone trauma, offers same-day socket preservation grafting, and begins replacement planning at the extraction appointment itself — all in Palo Alto.
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
              <p className="section-label mb-4">When Extraction Is Indicated</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Protecting Future Options When a Tooth Must Go
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Tooth extraction is always a last resort — Dr. Ho exhausts every restorative and periodontal option before recommending removal. But when a tooth is beyond saving, the quality of the extraction significantly impacts the patient&apos;s future treatment options. An atraumatic extraction that preserves the surrounding bone maintains the ridge anatomy needed for implant placement, while a traumatic extraction can destroy bone and complicate or prevent future implant treatment.</p>
                <p>At PAAD, the extraction appointment is also the beginning of the replacement planning process. Socket preservation bone grafting can be placed at the same visit, maintaining ridge volume during the healing period. Dr. Ho ensures that patients leave the appointment knowing exactly what their replacement options are, what the timeline looks like, and what to expect during recovery — so nothing is left uncertain.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Severe decay beyond any restorative possibility',
                  'Advanced gum disease with mobile, painful tooth',
                  'Cracked tooth extending below the bone level',
                  'Impacted or partially erupted wisdom teeth',
                  'Orthodontic space creation for tooth alignment',
                  'Dental abscess not resolving with root canal treatment',
                  'Retained baby tooth blocking permanent eruption',
                  'Failed root canal or post-treatment failure',
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
              The PAAD Tooth Extraction Workflow
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
        title="Tooth Extraction: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's atraumatic approach against conventional extraction techniques."
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
        title="Ask AI About Tooth Extraction in Palo Alto"
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

'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, Scan, FileSearch, Layers, Activity, Shield } from 'lucide-react'
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
    icon: <Scan className="w-6 h-6" />,
    title: 'Clinical Examination & Bite Classification',
    body: 'We begin with a comprehensive clinical examination that assesses tooth positions, bite classification (Class I, II, or III), overbite and overjet measurement, midline alignment, and jaw symmetry. Crowding is quantified in millimetres of arch length discrepancy. Crossbite sites are mapped both anteriorly and posteriorly. This structured examination forms the clinical basis for treatment planning and ensures that no contributing factor — including skeletal jaw discrepancy or dental compensation — is overlooked.'
  },
  {
    step: '02',
    icon: <FileSearch className="w-6 h-6" />,
    title: 'Orthodontic Records (Photos, X-Rays, Digital Scans)',
    body: 'Comprehensive orthodontic records include standardised clinical photographs (frontal, profile, and intraoral views), a digital intraoral scan using the iTero scanner to generate precise 3D dental models, a panoramic radiograph for full-arch and root anatomy assessment, and a cephalometric (lateral skull) X-ray for skeletal analysis. These records allow us to measure jaw relationships, root inclinations, and growth potential — essential data for planning treatment in growing patients and for distinguishing dental from skeletal problems.'
  },
  {
    step: '03',
    icon: <Layers className="w-6 h-6" />,
    title: 'Treatment Plan Selection (Invisalign or Braces)',
    body: 'Based on your records and clinical findings, we present a personalised treatment plan that outlines the recommended approach — Invisalign clear aligners, fixed braces, or a combination — along with the anticipated treatment duration, number of appointments, estimated fees, and retention plan. As an Elite Preferred Invisalign Provider, we have the experience to manage complex cases with Invisalign that many practices would treat only with braces. For cases where braces are clinically superior, we recommend them without hesitation.'
  },
  {
    step: '04',
    icon: <Activity className="w-6 h-6" />,
    title: 'Active Treatment Phase (12–24 Months Average)',
    body: 'Active orthodontic treatment involves a series of appointments every 6-8 weeks for aligner progression (Invisalign) or wire adjustments (braces). Tooth movement is incremental and carefully controlled. We monitor tracking, levelling, alignment, and bite correction at every appointment, taking progress records at key milestones. For growing patients, we may incorporate functional appliances or expansion devices as part of a two-phase treatment plan to correct jaw relationships while growth is still occurring.'
  },
  {
    step: '05',
    icon: <Shield className="w-6 h-6" />,
    title: 'Retention & Long-Term Monitoring',
    body: 'The end of active treatment is not the end of orthodontic care. Teeth will relapse toward their original positions if not held in place with retainers. We prescribe both fixed lingual retainers (bonded wire on the inner surface of the front teeth) and removable retainers (Vivera or Essix) for comprehensive long-term retention. Retainer checks are included in the first year post-treatment. We monitor stability at maintenance appointments and replace retainers as needed to protect your investment for life.'
  },
]

const faqs = [
  {
    q: 'What is the difference between an overbite and an overjet?',
    a: 'An overbite refers to the vertical overlap of the upper front teeth over the lower front teeth — how much the upper teeth extend downward past the lower teeth when biting together. A normal overbite is about 2-3mm. An overjet refers to the horizontal distance between the upper and lower front teeth — how far the upper teeth protrude forward relative to the lower teeth. Both measurements are taken at the orthodontic records appointment and factor into treatment planning. Many patients have both, and correcting them often requires different clinical mechanics.'
  },
  {
    q: 'Can adults get orthodontic treatment?',
    a: 'Absolutely — there is no upper age limit for orthodontic treatment. Adults make up a significant and growing proportion of orthodontic patients, particularly for Invisalign. The biological process of tooth movement is the same at any age, though treatment may progress slightly more slowly in adults because there is no growth occurring to assist with jaw correction. Some adult patients also require periodontal pre-treatment to ensure that teeth can be safely moved through healthy bone and gum tissue.'
  },
  {
    q: 'My child is 8 years old — is it too early for orthodontic evaluation?',
    a: 'No — the American Association of Orthodontists recommends an initial orthodontic screening by age 7, when the first permanent molars and incisors have typically erupted. Early evaluation allows us to identify developing problems — such as crossbites, severe crowding, or underbites — that respond better to treatment when growth is still occurring. Not every child needs early treatment, but identifying those who do can prevent the need for more extensive intervention later.'
  },
  {
    q: 'How long does orthodontic treatment take?',
    a: 'Treatment duration depends on the severity of the orthodontic problem and the patient\'s compliance. Simple alignment cases may be completed in 6-9 months. Moderate cases typically take 12-18 months. Complex bite correction involving significant tooth movement and jaw relationship changes can take 18-24 months or longer. For Invisalign patients, the primary variable is aligner wear time — wearing aligners 20-22 hours per day as prescribed is the single most important thing you can do to stay on schedule.'
  },
  {
    q: 'Will I need to wear retainers forever?',
    a: 'Yes — in the sense that teeth will drift if retainers are abandoned completely. After treatment, we prescribe full-time retainer wear for the first few months, transitioning to nightly wear thereafter. Retainers should be worn nightly indefinitely to maintain results. This is not a burden unique to orthodontic patients — it is simply the biological reality of how teeth are held in the jawbone. We provide durable Vivera or fixed retainers and replace them as needed.'
  },
]

const comparisonRows = [
  { metric: 'Bite Classification', digital: 'Full Class I/II/III assessment with measurements', traditional: 'Basic visual assessment', highlight: true },
  { metric: 'Orthodontic Records', digital: 'Photos, cephalometric X-ray, digital scan', traditional: 'Physical impressions only', highlight: true },
  { metric: 'Treatment Options', digital: 'Invisalign and braces both offered', traditional: 'Braces only or referral out', highlight: false },
  { metric: 'Complex Case Experience', digital: 'Elite Invisalign Provider — managed in-house', traditional: 'Referred to specialist', highlight: false },
  { metric: 'Jaw Relationship Evaluation', digital: 'Skeletal and dental analysis', traditional: 'Teeth-only assessment', highlight: false },
  { metric: 'Progress Documentation', digital: 'Before/after digital comparison at milestones', traditional: 'Start and finish only', highlight: false },
  { metric: 'Growth Monitoring', digital: 'Cephalometric tracking for growing patients', traditional: 'Clinical observation only', highlight: false },
  { metric: 'Retention Protocol', digital: 'Fixed and removable retainers for life', traditional: 'Short-term retainer only', highlight: false },
]

const clinicalStats = [
  { value: '4M+', label: 'Americans in orthodontic treatment at any time', source: 'AAO, 2023' },
  { value: 'Both', label: 'Invisalign and braces offered — right tool for each case', source: 'PAAD Clinical Policy' },
  { value: 'Elite', label: 'Invisalign Preferred Provider status at PAAD', source: 'Align Technology' },
  { value: '20+', label: 'years of orthodontic experience at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which dentist in Palo Alto CA treats overbite, underbite, and crossbite with Invisalign or braces?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What are the orthodontic conditions treated by dentists in Palo Alto — and is Invisalign or braces better for my case?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does PAAD in Palo Alto have orthodontic experience with complex bite correction cases?' },
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

export default function OrthodonticConditionsPage() {
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
              Orthodontic Conditions<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>We Treat Every Bite Problem</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Crooked teeth, misaligned bites, and jaw discrepancies affect both oral health and confidence. At PAAD in Palo Alto, we diagnose and treat the full spectrum of orthodontic conditions using Invisalign, braces, or a combination — whichever delivers the best result for your unique case.
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
                Conditions We Correct at PAAD
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Orthodontic problems range from mild cosmetic concerns — slight crowding or a small gap — to complex bite issues involving the relationship between the upper and lower jaws. Misaligned bites are not just an aesthetic issue: they cause uneven tooth wear, increase the risk of jaw joint problems (TMD), make teeth harder to clean, and can result in premature tooth loss.</p>
                <p>At PAAD, we assess every orthodontic case using comprehensive records including digital scans, clinical photographs, and radiographs. We offer the full spectrum of treatment options — Invisalign and traditional braces — and as an Elite Preferred Invisalign Provider, we manage cases in-house that many practices would refer to an orthodontic specialist. Every treatment plan is built from your specific anatomy and goals, not a one-size-fits-all protocol.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Overbite — upper teeth too far forward',
                  'Underbite — lower jaw protrudes',
                  'Crossbite — upper and lower teeth don\'t align',
                  'Open bite — front teeth don\'t meet',
                  'Crowded teeth with insufficient space',
                  'Spacing gaps between teeth',
                  'Midline discrepancy',
                  'Jaw asymmetry affecting bite',
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
              The PAAD Orthodontic Workflow
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
        title="Orthodontic Conditions: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's comprehensive approach against conventional orthodontic assessment."
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
          <div className="bg-navy-900 rounded-2xl px-6 py-2">
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── AI Prompt Guide ── */}
      <AiPromptGuide
        title="Ask AI About Orthodontic Conditions in Palo Alto"
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

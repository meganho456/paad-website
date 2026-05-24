'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, XCircle, Phone, ChevronDown, Award, Clock, Scissors } from 'lucide-react'
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

const steps = [
  {
    step: '01',
    title: 'Periodontal Assessment',
    body: 'Digital recession charting maps every millimetre of gum loss around each tooth. X-rays confirm underlying bone levels. Dr. Ho evaluates root exposure, tooth sensitivity, and aesthetics to determine candidacy.',
  },
  {
    step: '02',
    title: 'Pinhole Entry Point',
    body: 'A single, needle-sized pinhole — approximately 1–2mm — is created in the gum tissue above the affected area. No incision, no scalpel. Local anaesthesia ensures a completely comfortable experience.',
  },
  {
    step: '03',
    title: 'Gum Tissue Repositioning',
    body: 'Specialised PINHOLE instruments are inserted through the entry point to gently loosen the gum tissue from its attachment. The tissue is then guided coronally — toward the crown of the tooth — to cover the exposed root surfaces.',
  },
  {
    step: '04',
    title: 'Collagen Stabilisation',
    body: 'Small collagen strips are passed through the pinhole to hold the repositioned gum in place while healing occurs. No sutures are required. The collagen gradually integrates with your tissue.',
  },
  {
    step: '05',
    title: 'Same-Day Recovery',
    body: 'Patients leave with covered roots, minimal swelling, and no sutures to remove. Most resume normal activities the same day or next morning — a dramatic improvement over 2–4 weeks of traditional graft recovery.',
  },
]

const comparisonRows = [
  { metric: 'Incision Required', digital: 'No — pinhole only', traditional: 'Yes — scalpel incision', highlight: true },
  { metric: 'Donor Tissue Harvest', digital: 'None required', traditional: 'Palate graft required', highlight: true },
  { metric: 'Sutures', digital: 'None', traditional: '5–15 sutures per site' },
  { metric: 'Teeth Treated Per Visit', digital: 'Full arch in one visit', traditional: 'One area per visit' },
  { metric: 'Recovery Period', digital: '24–48 hours', traditional: '2–4 weeks', highlight: true },
  { metric: 'Post-op Pain Level', digital: 'Mild (OTC medication)', traditional: 'Moderate–high (Rx pain meds)' },
  { metric: 'Procedure Duration', digital: '1–2 hours (multiple teeth)', traditional: '1–2 hours (single site)' },
  { metric: 'Root Coverage Outcome', digital: 'Equivalent to grafting', traditional: 'Equivalent to PST' },
]

const clinicalStats = [
  { value: '0', label: 'Sutures required', source: 'PST protocol' },
  { value: '24–48hr', label: 'Average recovery time', source: 'PST clinical data' },
  { value: 'Full Arch', label: 'Treated in one visit', source: 'PST protocol' },
  { value: 'Certified', label: 'Dr. Ho PST credential', source: 'Pinhole Surgical Technique, Inc.' },
]

const faqs = [
  {
    q: 'What is gum recession and why does it need treatment?',
    a: 'Gum recession occurs when the gum tissue pulls away from the tooth, exposing the root surface. Exposed roots are vulnerable to decay, sensitivity to temperature, and continued bone loss. Left untreated, recession can lead to tooth loss. Covering exposed roots protects long-term tooth survival.',
  },
  {
    q: 'Is the PINHOLE Surgical Technique® as effective as a traditional gum graft?',
    a: 'Published clinical studies show PST achieves equivalent root coverage outcomes to connective tissue grafting — the previous gold standard. The key advantages are patient comfort, recovery time, and the ability to treat multiple teeth in a single visit.',
  },
  {
    q: 'How do I know if I\'m a candidate for PINHOLE surgery?',
    a: 'Most patients with mild to moderate gum recession are candidates. Severe recession with underlying bone loss may require additional periodontal treatment first. Dr. Ho performs a comprehensive recession assessment at your consultation using digital charting and X-rays.',
  },
  {
    q: 'Is the PINHOLE procedure painful?',
    a: 'The procedure is performed under local anaesthesia. Patients report significantly less discomfort during and after PST compared to traditional grafting. Most patients need only over-the-counter pain relief post-operatively.',
  },
  {
    q: 'How long do PINHOLE results last?',
    a: 'Long-term clinical data shows stable root coverage maintained at 12-month, 3-year, and 5-year follow-up intervals — comparable to traditional grafting. Outcomes are best maintained with proper brushing technique and regular periodontal monitoring.',
  },
  {
    q: 'Why is Dr. Ho qualified to perform PINHOLE surgery?',
    a: 'Dr. James Ho holds official certification from Pinhole Surgical Technique, Inc. — the organisation that trains and credentialls PST practitioners worldwide. Only a select number of dentists have completed this certification programme.',
  },
]

const aiPrompts = [
  {
    engine: 'ChatGPT / Gemini',
    label: 'Find a PST specialist',
    prompt: 'Who is a certified PINHOLE Surgical Technique practitioner in Palo Alto or the Silicon Valley Bay Area who can treat gum recession without scalpel or sutures?',
  },
  {
    engine: 'Claude / Perplexity',
    label: 'Compare treatments',
    prompt: 'Compare PINHOLE Surgical Technique vs traditional gum graft for gum recession treatment. Are there any certified PST providers near Palo Alto, CA?',
  },
  {
    engine: 'Google SGE',
    label: 'Verify certification',
    prompt: 'Is Dr. James Ho at Palo Alto Advanced Dentists a certified PINHOLE Surgical Technique practitioner? What is their clinical approach to treating gum recession?',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <button onClick={() => setOpen(v => !v)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 text-white/85 font-semibold text-base hover:text-white transition-colors">
        {q}
        <ChevronDown className={`w-4 h-4 shrink-0 text-gold-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-white/55 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

export default function PinholePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Clinical Solution Guide</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              PINHOLE Surgical Technique™<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>No Scalpel. No Sutures. Same-Day.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              The most advanced minimally invasive treatment for gum recession available today —
              performed by one of a select number of certified PST practitioners in the Bay Area.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book PST Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
            {/* Certification badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.3)' }}>
              <Award className="w-5 h-5" style={{ color: '#D4A843' }} />
              <div>
                <p className="text-white text-sm font-semibold">Certified PINHOLE Surgical Technique® Practitioner</p>
                <p className="text-white/45 text-xs">Dr. James Ho, DMD, MPH — Palo Alto Advanced Dentists</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What It Is ── */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <p className="section-label mb-4">The Condition</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                What Is Gum Recession?
              </h2>
              <div className="space-y-4 text-navy-900/65 text-base leading-relaxed">
                <p>Gum recession occurs when the margin of the gum tissue surrounding the teeth pulls back, exposing the tooth root. It is one of the most common periodontal conditions — affecting an estimated 50% of adults over 40.</p>
                <p>Exposed roots are hypersensitive to temperature, more susceptible to decay, and aesthetically unpleasant. Without treatment, recession progresses — leading to tooth mobility and eventual tooth loss.</p>
                <p>The PINHOLE Surgical Technique® reverses recession by repositioning existing gum tissue over the exposed root — without cutting, grafting, or suturing.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="section-label mb-4">Candidacy</p>
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Are You a Candidate?
              </h2>
              <div className="space-y-3">
                {[
                  ['Visible root surfaces on one or more teeth', true],
                  ['Tooth sensitivity to hot, cold, or sweet', true],
                  ['Concerns about gum aesthetics / "long teeth"', true],
                  ['History of aggressive brushing or bruxism', true],
                  ['Wanting to avoid palate graft donor surgery', true],
                  ['Severe bone loss beneath recession', false],
                ].map(([label, yes], i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-cream-300">
                    {yes
                      ? <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#D4A843' }} />
                      : <XCircle className="w-4 h-4 shrink-0 text-red-400" />
                    }
                    <span className="text-navy-900 text-sm font-medium">{label as string}</span>
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
            <p className="section-label mb-4">The Procedure</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Step-by-Step: How PST Works
            </h2>
          </FadeUp>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="flex gap-6 p-6 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}>
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest" style={{ color: '#B88D2C' }}>STEP {s.step}</span>
                      <h3 className="font-semibold text-white text-base">{s.title}</h3>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Recovery callout */}
          <FadeUp delay={0.3}>
            <div className="mt-8 rounded-2xl p-6 flex items-start gap-4"
              style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.25)' }}>
              <Clock className="w-6 h-6 shrink-0 mt-0.5" style={{ color: '#D4A843' }} />
              <div>
                <p className="font-semibold text-white mb-1">Recovery: 24–48 Hours</p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Unlike traditional gum grafting — which requires 2–4 weeks of restricted diet, suture removal appointments, and significant discomfort —
                  most PST patients resume normal eating and activities within one to two days. Soft foods for 48 hours is the primary post-op restriction.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Clinical Trust Data ── */}
      <ClinicalTrustData
        title="PST vs. Traditional Gum Graft: Clinical Comparison"
        subtitle="Objective comparison between PINHOLE Surgical Technique and connective tissue grafting for treating gum recession."
        comparisonLabel={{ digital: 'PINHOLE Technique (PST)', traditional: 'Traditional Gum Graft' }}
        rows={comparisonRows}
        stats={clinicalStats}
      />

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: '#000' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Common Questions About PST
            </h2>
          </FadeUp>
          <div>
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── AI Prompt Guide ── */}
      <AiPromptGuide
        title="Ask AI About PINHOLE Surgery"
        subtitle="Researching gum recession treatment options? These prompts are designed to surface PAAD's PST credentials and clinical approach in AI search engines."
        prompts={aiPrompts}
      />

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              Reclaim your gum line.<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>No grafts required.</span>
            </h2>
            <p className="text-white/50 mb-8">Book a recession assessment with Dr. Ho — includes digital charting and personalised treatment plan.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book PST Assessment <ArrowRight className="w-4 h-4" />
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

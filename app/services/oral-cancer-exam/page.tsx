'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ClipboardList, Search, Activity, Zap, Shield, ChevronDown } from 'lucide-react'
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
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Medical & Risk History Review',
    body: 'Every oral cancer screening begins with a review of your medical and lifestyle history. Key risk factors include tobacco use (smoked or smokeless), heavy alcohol consumption, HPV infection, prolonged sun exposure to the lips, a personal or family history of oral cancer, and immunosuppression. Identifying elevated risk informs the intensity of the examination and the frequency of screening intervals.',
  },
  {
    step: '02',
    icon: <Search className="w-6 h-6" />,
    title: 'Visual Soft Tissue Examination',
    body: 'Dr. Ho conducts a systematic visual and tactile examination of all oral mucosal surfaces: lips (inner and outer), buccal mucosa (inner cheeks), hard and soft palate, floor of the mouth, tongue (dorsal, lateral, and ventral surfaces), retromolar areas, and oropharynx. Every surface is examined under bright illumination for colour changes, asymmetry, ulceration, white patches (leukoplakia), red patches (erythroplakia), or irregular surface texture.',
  },
  {
    step: '03',
    icon: <Activity className="w-6 h-6" />,
    title: 'Tactile Palpation of Neck & Lymph Nodes',
    body: 'Bimanual palpation of the neck — including the submandibular, submental, cervical, and supraclavicular lymph node chains — assesses for enlarged or indurated nodes that may indicate early metastatic spread from an oral or oropharyngeal primary lesion. This extra-oral examination is a critical component that distinguishes a thorough screening from a cursory intra-oral-only inspection.',
  },
  {
    step: '04',
    icon: <Zap className="w-6 h-6" />,
    title: 'VELscope Fluorescence Screening',
    body: 'For patients with visible lesions or elevated risk factors, VELscope fluorescence visualisation is used as an adjunct screening tool. VELscope emits a specific wavelength of blue-violet light that causes healthy oral mucosa to fluoresce. Tissue with abnormal cellular metabolism — such as dysplasia or early carcinoma — disrupts this fluorescence pattern, appearing as a dark loss of fluorescence visible to the examiner. VELscope does not diagnose cancer but identifies areas warranting closer attention or biopsy referral.',
  },
  {
    step: '05',
    icon: <Shield className="w-6 h-6" />,
    title: 'Biopsy Referral or Monitoring',
    body: 'If a suspicious lesion is identified, Dr. Ho documents its location, size, colour, and surface characteristics and provides a warm referral to an oral surgeon or specialist for incisional or excisional biopsy. Lesions that are suspicious but not immediately alarming are monitored at a 2-week follow-up appointment — any lesion that persists beyond 2 weeks without explanation warrants tissue sampling. Early detection at stage I or II dramatically improves survival outcomes.',
  },
]

const faqs = [
  {
    q: 'How common is oral cancer?',
    a: 'Oral cavity and oropharyngeal cancers affect approximately 54,000 Americans annually. The incidence of HPV-related oropharyngeal cancer has risen significantly over the past two decades, now accounting for the majority of oropharyngeal cancers — affecting non-smokers as well as tobacco users. Early detection is the single most important factor determining survival.',
  },
  {
    q: 'Does the oral cancer screening hurt?',
    a: 'Not at all. The visual and tactile examination is painless and takes approximately 5–10 minutes. VELscope examination is also completely non-invasive and non-contact. The entire screening is performed as part of your regular dental recall appointment at no additional chair time cost to routine care.',
  },
  {
    q: 'What does a suspicious oral lesion look like?',
    a: 'Concerning oral lesions include: white patches (leukoplakia) that cannot be wiped off, red or mixed red-and-white patches (erythroleukoplakia), non-healing ulcers present for more than 2 weeks, lumps or thickenings in the soft tissue, areas of numbness, and unexplained persistent pain. Any lesion with these features should be evaluated promptly — the vast majority will prove benign, but those that are malignant carry dramatically better outcomes if detected early.',
  },
  {
    q: 'Who should have annual oral cancer screenings?',
    a: 'All dental patients benefit from annual screening, and at PAAD this is included at every recall appointment. Patients with elevated risk — tobacco users, heavy alcohol consumers, HPV-positive individuals, those with prior oral cancer, and immunocompromised patients — may benefit from more frequent screening intervals. Dr. Ho will discuss your individual risk profile and recommend appropriate follow-up.',
  },
  {
    q: 'What happens if a biopsy confirms cancer?',
    a: 'Dr. Ho will coordinate a prompt referral to an oral and maxillofacial surgeon, ENT surgeon, or oncology team as appropriate. PAAD maintains referral relationships with specialists at Stanford Health Care and other Bay Area oncology centres to ensure Palo Alto patients receive rapid access to appropriate evaluation and treatment. The earlier the stage at detection, the broader the range of treatment options and the better the prognosis.',
  },
]

const comparisonRows = [
  { metric: 'Screening frequency', digital: 'Included at every recall appointment', traditional: 'Not routinely performed', highlight: true },
  { metric: 'Adjunct technology', digital: 'VELscope fluorescence screening available', traditional: 'Visual exam only', highlight: true },
  { metric: 'Extra-oral exam', digital: 'Neck and lymph node palpation included', traditional: 'Intra-oral examination only', highlight: false },
  { metric: 'Risk documentation', digital: 'Risk factors documented in patient record', traditional: 'Not formally recorded', highlight: false },
  { metric: 'Referral pathway', digital: 'Warm specialist referral with findings summary', traditional: 'Patient self-navigates referral', highlight: false },
  { metric: 'HPV counselling', digital: 'HPV risk awareness discussed', traditional: 'Not addressed', highlight: false },
  { metric: 'Findings recording', digital: 'Written findings and follow-up in clinical notes', traditional: 'Undocumented', highlight: false },
  { metric: 'Detection focus', digital: 'Early-stage detection as primary goal', traditional: 'Reactive — patient presents with symptoms', highlight: false },
]

const clinicalStats = [
  { value: '84%', label: '5-year survival if caught early (Stage I–II)', source: 'ACS oral cancer statistics' },
  { value: '39%', label: '5-year survival if caught late (Stage IV)', source: 'ACS oral cancer statistics' },
  { value: 'Every', label: 'Recall — oral cancer screening at every check-up at PAAD', source: '' },
  { value: '20+', label: 'Years of clinical experience screening for oral cancer', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which Palo Alto dentist includes oral cancer screening at every check-up?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare VELscope fluorescence oral cancer screening vs standard visual exam at Palo Alto dentists.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'PAAD Palo Alto oral cancer screening VELscope check-up Dr James Ho' },
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

export default function OralCancerExamPage() {
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
              Oral Cancer Screening<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Early Detection Saves Lives</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Oral cancer affects over 54,000 Americans annually, yet when caught at Stage I the 5-year survival rate exceeds 80%. At PAAD, Dr. James Ho includes a comprehensive oral cancer screening — including VELscope fluorescence evaluation — at every recall appointment for Palo Alto patients, because early detection is the single most powerful intervention available.
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
              <p className="section-label mb-4">Who Should Be Screened</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Why Every Dental Patient Deserves a Screening
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Oral cancer does not exclusively affect older tobacco users. The rising incidence of HPV-related oropharyngeal cancer means that non-smokers in their 30s, 40s, and 50s are now among the most rapidly growing patient groups. Because early-stage lesions are typically painless and small, they are easily missed — and often only discovered by a dentist performing a thorough soft tissue examination.</p>
                <p>At PAAD, we believe oral cancer screening should be a non-negotiable component of every dental recall appointment — not an optional add-on. Dr. Ho examines all mucosal surfaces systematically, palpates the neck lymph nodes, and uses VELscope fluorescence imaging for elevated-risk patients, creating a reliable safety net that gives Palo Alto patients the best chance of early detection.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Annual routine screening — included for all patients',
                  'Tobacco or alcohol use history',
                  'HPV-positive status or history',
                  'Persistent mouth sore or ulcer over 2 weeks',
                  'Unexplained lump or thickening in soft tissue',
                  'White or red patch on the oral mucosa',
                  'Difficulty swallowing or persistent hoarseness',
                  'Personal or family history of oral cancer',
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
              The PAAD Oral Cancer Screening Workflow
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
        title="Oral Cancer Screening: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's systematic screening against less comprehensive approaches."
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
        title="Ask AI About Oral Cancer Screening in Palo Alto"
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

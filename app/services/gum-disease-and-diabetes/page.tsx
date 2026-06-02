'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, ClipboardList, Scan, Zap, Activity, RefreshCw } from 'lucide-react'
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
    title: 'Medical History Review & Diabetes Risk Assessment',
    body: 'Before any clinical examination, we conduct a detailed review of your medical history — including diabetes type, current medications, recent HbA1c values, and any history of hypoglycaemic episodes. Understanding your glycaemic control level allows us to calibrate both the urgency and the specific approach of your periodontal care. Poorly controlled diabetes demands a more aggressive periodontal protocol and more frequent follow-up.'
  },
  {
    step: '02',
    icon: <Scan className="w-6 h-6" />,
    title: 'Comprehensive Periodontal Examination',
    body: 'We perform full-mouth periodontal charting with six-point probing at every tooth, recording pocket depths, bleeding on probing, recession, and furcation involvement. Digital periapical X-rays map bone levels throughout the mouth. Diabetic patients frequently present with more generalised and more severe bone loss than non-diabetic patients with equivalent plaque levels — so this baseline data is especially important for setting realistic treatment goals.'
  },
  {
    step: '03',
    icon: <Zap className="w-6 h-6" />,
    title: 'Aggressive Scaling & Root Planing Protocol',
    body: 'For patients with diabetes, we employ a full-mouth disinfection approach — completing scaling and root planing across all quadrants within a compressed timeframe, typically two appointments within one week. This reduces the window during which bacteria can re-seed from untreated sites. We use a combination of ultrasonic instrumentation and hand scalers under local anaesthesia, and may prescribe systemic or locally delivered antibiotics when appropriate.'
  },
  {
    step: '04',
    icon: <Activity className="w-6 h-6" />,
    title: 'Coordination With Physician (HbA1c Monitoring)',
    body: 'We communicate directly with your primary care physician or endocrinologist to share findings and coordinate care. Research demonstrates that effective periodontal treatment can reduce HbA1c by up to 0.4% — a clinically meaningful improvement that can reduce the risk of diabetic complications. We encourage patients to share their dental treatment timeline with their medical team and request an HbA1c check at the 3-month mark after completing active periodontal therapy.'
  },
  {
    step: '05',
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Intensive 3-Month Periodontal Maintenance',
    body: 'Diabetic patients are placed on a strict 3-month maintenance schedule without exception. Each visit includes updated pocket charting, targeted debridement of any sites showing recurrence, and a brief medical update review — including current HbA1c if available. We monitor wound healing closely at each visit, as diabetics can experience delayed tissue repair. This intensive maintenance approach has the strongest evidence base for long-term disease stability in this population.'
  },
]

const faqs = [
  {
    q: 'Why does diabetes make gum disease worse?',
    a: 'Elevated blood sugar impairs the immune response, reduces saliva flow, and promotes bacterial growth — all of which accelerate periodontal disease. Diabetic patients have higher levels of inflammatory mediators in their gum tissue, leading to faster and more severe bone destruction than in non-diabetic patients with the same amount of plaque. The relationship is bidirectional: uncontrolled gum disease also makes blood sugar harder to regulate.'
  },
  {
    q: 'Can treating my gums actually improve my diabetes?',
    a: 'Yes — multiple high-quality clinical trials have demonstrated that successful periodontal treatment reduces HbA1c by an average of 0.4% over three months. While this does not replace diabetes medication, it is a meaningful clinical improvement. Reducing the systemic inflammatory burden from periodontal infection appears to improve insulin sensitivity and glycaemic regulation.'
  },
  {
    q: 'How often should a diabetic patient see the dentist?',
    a: 'We recommend a minimum of four periodontal maintenance visits per year — one every three months — for all patients with diabetes. Patients with poorly controlled diabetes, deep residual pockets, or a history of rapid disease progression may benefit from even more frequent monitoring. Annual or biannual check-ups are insufficient to keep periodontal disease in remission in this population.'
  },
  {
    q: 'Are there any special precautions before dental treatment if I have diabetes?',
    a: 'We ask that you eat a normal meal before appointments and bring any oral medications or fast-acting glucose in case of hypoglycaemia during treatment. We schedule longer appointments in the morning when blood sugar tends to be more stable, and we keep treatment stress to a minimum. We will also confirm your current HbA1c and any recent medical changes before starting active treatment.'
  },
  {
    q: 'My blood sugar is well controlled — do I still need more frequent dental visits?',
    a: 'Well-controlled diabetes significantly reduces — but does not eliminate — your elevated periodontal risk. We still recommend 3-to-4-month maintenance rather than 6-month recalls, because diabetic patients show faster bacterial recolonisation of treated sites even when HbA1c is at target. Your individual maintenance interval can be reviewed and adjusted over time based on your clinical response.'
  },
]

const comparisonRows = [
  { metric: 'Systemic Health Review', digital: 'Included at every visit', traditional: 'Dental-only intake', highlight: true },
  { metric: 'HbA1c Awareness', digital: 'Reviewed and factored into treatment', traditional: 'Not considered', highlight: true },
  { metric: 'SRP Protocol', digital: 'Aggressive full-mouth disinfection', traditional: 'Standard quadrant SRP', highlight: false },
  { metric: 'Maintenance Interval', digital: 'Every 3 months for diabetics', traditional: '6-month recall', highlight: false },
  { metric: 'Physician Coordination', digital: 'Direct communication with PCP/endocrinologist', traditional: 'None', highlight: false },
  { metric: 'Blood Sugar Discussion', digital: 'HbA1c trend discussed at each visit', traditional: 'Not addressed', highlight: false },
  { metric: 'Wound Healing Monitoring', digital: 'Checked and documented at every visit', traditional: 'Standard recall', highlight: false },
  { metric: 'Treatment Plan', digital: 'Risk-stratified for diabetes severity', traditional: 'Uniform plan for all patients', highlight: false },
]

const clinicalStats = [
  { value: '3×', label: 'more likely to have gum disease if you have diabetes', source: 'AAP / ADA Joint Statement' },
  { value: '0.4%', label: 'average HbA1c reduction after periodontal treatment', source: 'Cochrane Review, 2022' },
  { value: '↔', label: 'Bidirectional link confirmed in large-scale research', source: 'Journal of Clinical Periodontology' },
  { value: '20+', label: 'years treating medically complex patients at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which dentists in Palo Alto CA treat patients with both gum disease and diabetes?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What is the best periodontal treatment protocol for diabetic patients in Palo Alto — what should I look for?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does Dr. James Ho at PAAD in Palo Alto treat patients with diabetes and gum disease?' },
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

export default function GumDiseaseAndDiabetesPage() {
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
              Gum Disease & Diabetes<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>The Bidirectional Link</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Diabetes and periodontal disease are deeply connected — each makes the other harder to control. At PAAD in Palo Alto, we treat patients with both conditions using a medically integrated protocol that goes far beyond a standard dental appointment.
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
              <p className="section-label mb-4">Who We Help</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                A Whole-Health Approach to Oral Care
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>The relationship between diabetes and gum disease is bidirectional and well-established. Elevated blood sugar impairs the immune response, promotes bacterial overgrowth, and delays wound healing — all of which allow periodontal infections to take hold more easily and progress more aggressively. Conversely, the chronic inflammation from untreated gum disease impairs insulin sensitivity and makes blood sugar harder to regulate.</p>
                <p>At PAAD, we factor your diabetes status, glycaemic control, and current medications into every aspect of your periodontal care. We follow an aggressive treatment protocol specifically calibrated for diabetic patients, and we work in coordination with your physician to ensure that your dental treatment contributes positively to your overall health outcomes.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Type 1 or Type 2 diabetes diagnosis',
                  'HbA1c not at target despite medication',
                  'Recurrent gum infections',
                  'Deep pockets despite previous treatment',
                  'Slow-healing oral wounds',
                  'Frequent oral thrush or infections',
                  'Family history of diabetes and gum disease',
                  'Seeking a whole-health dental approach',
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
              The PAAD Diabetes-Periodontal Workflow
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
        title="Gum Disease & Diabetes: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's medically integrated approach against conventional dental care."
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
        title="Ask AI About Gum Disease & Diabetes in Palo Alto"
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

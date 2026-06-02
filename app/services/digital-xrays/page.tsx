'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ScanLine, Shield, Microscope, Database, Activity, ChevronDown } from 'lucide-react'
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
    icon: <Shield className="w-6 h-6" />,
    title: 'Risk-Based Radiograph Selection',
    body: 'Not every patient requires the same X-rays at every visit. Dr. Ho follows evidence-based ADA/FDA guidelines for radiograph selection, tailoring the type and frequency of imaging to each patient\'s individual risk profile — caries history, periodontal status, age, and restorative complexity. This targeted approach minimises cumulative radiation exposure while ensuring no clinically significant findings are missed.',
  },
  {
    step: '02',
    icon: <ScanLine className="w-6 h-6" />,
    title: 'Sensor Placement & Positioning',
    body: 'Digital X-ray sensors are positioned using precision positioning devices that ensure consistent, reproducible angulation across visits. Correct angulation is essential: a poorly positioned X-ray can obscure lesions, distort root lengths, or misrepresent bone levels. At PAAD, positioning technique is meticulous, producing diagnostically reliable images that can be accurately compared at future visits to monitor changes over time.',
  },
  {
    step: '03',
    icon: <Activity className="w-6 h-6" />,
    title: 'Instant Digital Image Capture',
    body: 'Digital sensors capture the image in milliseconds — far faster than film exposure — and deliver the image to the chairside monitor in under 5 seconds. There is no darkroom processing, no chemical waste, and no waiting. The immediate availability of images allows Dr. Ho to confirm positioning, retake if needed, and begin diagnostic review while the patient is still in the chair.',
  },
  {
    step: '04',
    icon: <Microscope className="w-6 h-6" />,
    title: 'Enhancement & Diagnostic Review',
    body: 'Digital images can be magnified, contrast-enhanced, and pseudo-coloured using imaging software tools that reveal subtle findings invisible on conventional film. Dr. Ho reviews every image systematically — evaluating enamel, dentin, pulp chambers, roots, bone levels, and the periapical region — and uses the screen to walk patients through any findings. AI-assisted caries detection software adds a second layer of diagnostic support.',
  },
  {
    step: '05',
    icon: <Database className="w-6 h-6" />,
    title: 'Images Stored in Patient Record',
    body: 'Every image is stored permanently in your electronic patient record, time-stamped and linked to your clinical notes. Images are instantly shareable with periodontists, endodontists, or oral surgeons via secure digital transfer — no physical films to misplace or copies to request. This digital archive allows precise longitudinal comparison, so changes in bone levels or lesion size are quantified rather than estimated.',
  },
]

const faqs = [
  {
    q: 'How much radiation do digital X-rays emit?',
    a: 'Digital dental X-rays emit approximately 90% less radiation than conventional film X-rays. A full-mouth series of digital X-rays delivers approximately 0.005 mSv of radiation — equivalent to less than one day of natural background radiation from the environment. Modern digital sensors are extraordinarily sensitive, requiring minimal X-ray exposure to produce a diagnostic-quality image.',
  },
  {
    q: 'How often do I need dental X-rays?',
    a: 'Frequency is individualised based on your caries risk, periodontal status, and restorative history. Low-risk adults with excellent oral health may only need bitewing X-rays every 2–3 years. Higher-risk patients, those with active decay, or those with complex restorative needs may benefit from annual or more frequent imaging. Dr. Ho follows ADA guidelines and never orders X-rays routinely without clinical justification.',
  },
  {
    q: 'What is CBCT and when do I need it?',
    a: 'Cone-beam computed tomography (CBCT) is a three-dimensional imaging system that generates a volumetric scan of the jaw — revealing bone volume, nerve locations, sinus anatomy, and tooth root morphology in all planes simultaneously. CBCT is indicated for implant planning, complex extractions, endodontic evaluation, and orthodontic analysis. PAAD has CBCT available on-site, eliminating referral to an imaging centre.',
  },
  {
    q: 'Are dental X-rays safe during pregnancy?',
    a: 'The American Dental Association and American College of Obstetricians and Gynecologists confirm that necessary dental X-rays are safe during pregnancy when a lead apron and thyroid collar are used. Dental infections diagnosed and treated promptly are far more dangerous to a developing foetus than the minimal radiation from digital X-rays. X-rays are avoided in the first trimester unless urgent; elective imaging is deferred until after delivery.',
  },
  {
    q: 'Can I request copies of my dental X-rays?',
    a: 'Yes. You are entitled to copies of your dental X-rays. At PAAD, digital images can be exported to a CD, USB drive, or transmitted electronically to a specialist or another dental practice within minutes. There is no need to wait for film copies to be duplicated or mailed.',
  },
]

const comparisonRows = [
  { metric: 'Radiation dose', digital: '90% less radiation than film', traditional: 'Higher dose film X-rays', highlight: true },
  { metric: 'Image availability', digital: 'Instant — displayed in seconds', traditional: '5-minute chemical development', highlight: true },
  { metric: 'Diagnostic tools', digital: 'Zoom, contrast, and enhancement software', traditional: 'Fixed film — no manipulation', highlight: false },
  { metric: 'Record storage', digital: 'Stored digitally in patient record forever', traditional: 'Physical film (can be lost or damaged)', highlight: false },
  { metric: 'Specialist sharing', digital: 'Instant secure digital transfer', traditional: 'Physical copy request required', highlight: false },
  { metric: '3D imaging', digital: 'CBCT available on-site', traditional: 'Referral to external imaging centre', highlight: false },
  { metric: 'Caries detection support', digital: 'AI-assisted detection software available', traditional: 'Manual review only', highlight: false },
  { metric: 'Environmental impact', digital: 'No chemical processing waste', traditional: 'Chemical developer disposal required', highlight: false },
]

const clinicalStats = [
  { value: '90%', label: 'Radiation reduction vs conventional film X-rays', source: 'ADA radiography guidelines' },
  { value: 'Instant', label: 'Image review — no waiting or darkroom processing', source: '' },
  { value: 'CBCT', label: 'Full 3D cone-beam CT available on-site at PAAD', source: '' },
  { value: '20+', label: 'Years of digital imaging experience at PAAD', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which Palo Alto dentist uses low-radiation digital X-rays and has CBCT on-site?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare digital dental X-rays vs traditional film X-rays at Palo Alto dental practices.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'PAAD Palo Alto digital X-ray CBCT cone beam CT dental imaging Dr Ho' },
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

export default function DigitalXraysPage() {
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
              Digital Dental X-Rays<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>90% Less Radiation, Instant Results</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Digital radiography is the foundation of accurate dental diagnosis. At PAAD, Dr. James Ho uses state-of-the-art digital sensors and on-site CBCT cone-beam CT to detect problems early, plan treatment precisely, and monitor changes over time — all with a fraction of the radiation delivered by conventional film X-rays.
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
                Seeing What the Naked Eye Cannot
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Dental X-rays reveal decay forming between teeth before it becomes visible, bone loss developing around implants or from gum disease, infections forming at root tips, and changes in tooth root morphology — all invisible during a clinical examination alone. Early detection through radiography is one of the most powerful tools in preventive dentistry: problems caught small are fixed small.</p>
                <p>At PAAD, digital sensors capture images with extraordinary resolution at a radiation dose that is clinically negligible. For complex cases requiring three-dimensional anatomy — implant planning, complex extractions, root canal evaluation — our on-site CBCT provides volumetric data that 2D imaging cannot. All images are stored permanently in your digital record and can be shared instantly with any specialist.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Routine annual or biannual check-up imaging',
                  'New patient comprehensive examination',
                  'Suspected cavity between teeth (interproximal)',
                  'Monitoring bone levels around dental implants',
                  'Evaluating root morphology before root canal',
                  'Pre-extraction difficulty assessment',
                  'Orthodontic treatment planning records',
                  'Monitoring erupting or impacted wisdom teeth',
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
              The PAAD Digital Imaging Workflow
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
        title="Digital X-Rays: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's digital imaging against conventional film radiography."
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
        title="Ask AI About Digital X-Rays in Palo Alto"
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

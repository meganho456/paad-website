'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, ClipboardList, Scan, Zap, HeartPulse, RefreshCw } from 'lucide-react'
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
    title: 'Cardiac & Medication History Review',
    body: 'We begin every new patient visit with a thorough medical and medication history review. For patients with cardiovascular disease, this includes current anticoagulant or antiplatelet medications (warfarin, aspirin, clopidogrel), any history of heart attack, stroke, stent placement, or valve surgery, and whether antibiotic prophylaxis is indicated before dental procedures. This review directly shapes our treatment planning — it is not a form-filling exercise.'
  },
  {
    step: '02',
    icon: <Scan className="w-6 h-6" />,
    title: 'Full Periodontal Evaluation & Probing',
    body: 'We perform comprehensive full-mouth periodontal charting, measuring pocket depths at six points per tooth, recording bleeding on probing, recession, furcation involvement, and tooth mobility. Digital periapical radiographs assess bone levels throughout the mouth. Patients with cardiovascular disease often have an elevated systemic inflammatory burden, and identifying the extent of periodontal infection allows us to quantify how much of that burden originates from the mouth.'
  },
  {
    step: '03',
    icon: <Zap className="w-6 h-6" />,
    title: 'Anti-Infective Scaling & Root Planing',
    body: 'Our scaling and root planing protocol for cardiac patients emphasises thorough removal of all subgingival calculus and biofilm using a combination of ultrasonic scalers and hand instruments under local anaesthesia. We are particularly thorough because periodontal pathogens — including Porphyromonas gingivalis and Treponema denticola — are among the bacteria found in atherosclerotic plaques. Effective periodontal treatment reduces the seeding of these bacteria into the bloodstream and lowers systemic CRP levels.'
  },
  {
    step: '04',
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Communication With Cardiologist / PCP',
    body: 'We communicate directly with your cardiologist or primary care physician to share periodontal findings and confirm the appropriate approach to anticoagulant management before any invasive procedures. For patients at risk of infective endocarditis — including those with prosthetic heart valves or a history of prior endocarditis — we confirm prophylactic antibiotic protocols per current AHA guidelines before every surgical or invasive dental appointment.'
  },
  {
    step: '05',
    icon: <RefreshCw className="w-6 h-6" />,
    title: '3-Month Periodontal Maintenance With Systemic Tracking',
    body: 'Cardiac patients are enrolled in a strict 3-month periodontal maintenance schedule. At each visit we update pocket charting, perform targeted debridement, and inquire about any changes in cardiac medications or health status since the last visit. We track systemic inflammation markers where available and note any changes in gum health that may correlate with changes in cardiovascular status. This ongoing monitoring ensures that the mouth never becomes a silent driver of systemic inflammation.'
  },
]

const faqs = [
  {
    q: 'Is there a proven link between gum disease and heart disease?',
    a: 'Yes — multiple large-scale epidemiological studies and systematic reviews have established a statistically significant association between periodontal disease and cardiovascular disease, including coronary artery disease, heart attack, and stroke. Periodontal bacteria have been found in atherosclerotic plaques, and chronic gum infection raises systemic inflammatory markers such as CRP that are independently associated with cardiovascular risk. While causality is still being studied, the American Heart Association recognises the association as clinically meaningful.'
  },
  {
    q: 'Can treating gum disease help my heart?',
    a: 'Research shows that successful periodontal treatment reduces systemic CRP levels — a key inflammatory marker linked to cardiovascular risk. Several studies have shown improvements in endothelial function following gum disease treatment. While we cannot guarantee that treating your gums will prevent a heart attack, reducing chronic oral infection is a logical part of a comprehensive cardiovascular risk reduction strategy.'
  },
  {
    q: 'I am on blood thinners — is dental treatment safe?',
    a: 'Yes, with appropriate planning. We coordinate with your cardiologist or prescribing physician before any invasive dental procedures. For most patients on anticoagulants, the risk of a cardiac event from stopping the medication outweighs the bleeding risk of continuing it through dental treatment. We use local haemostatic measures during procedures and monitor healing carefully. Never stop a blood thinner before a dental appointment without your doctor\'s specific advice.'
  },
  {
    q: 'Do I need antibiotic prophylaxis before dental treatment?',
    a: 'According to current American Heart Association guidelines, antibiotic prophylaxis before dental procedures is recommended for patients with prosthetic heart valves, a history of infective endocarditis, certain congenital heart defects, and cardiac transplant recipients with valvulopathy. If you have any of these conditions, we will confirm the appropriate protocol with your cardiologist and prescribe prophylaxis accordingly. Most patients with other forms of cardiovascular disease — including coronary artery disease or hypertension — do not require prophylaxis.'
  },
  {
    q: 'How often should I see the dentist if I have heart disease?',
    a: 'We recommend 3-to-4-month periodontal maintenance visits for patients with cardiovascular disease and gum disease. This frequency keeps bacterial loads low, reduces systemic inflammation, and allows us to catch any disease recurrence early. For cardiac patients with well-controlled or mild gum disease, the interval may be extended over time — but we never recommend returning to annual cleanings for this population.'
  },
]

const comparisonRows = [
  { metric: 'Cardiac History Intake', digital: 'Full cardiac and medication review', traditional: 'Standard dental intake form', highlight: true },
  { metric: 'Anticoagulant Protocol', digital: 'Physician-confirmed protocol before procedures', traditional: 'No protocol — patient self-manages', highlight: true },
  { metric: 'Periodontal Treatment', digital: 'Anti-infective SRP with thorough debridement', traditional: 'Polish only', highlight: false },
  { metric: 'Maintenance Interval', digital: 'Every 3 months for cardiac patients', traditional: 'Annual recall', highlight: false },
  { metric: 'Physician Communication', digital: 'Direct communication with cardiologist', traditional: 'Isolated care', highlight: false },
  { metric: 'Systemic Inflammation Education', digital: 'CRP link explained to patient', traditional: 'Not discussed', highlight: false },
  { metric: 'Risk-Stratified Approach', digital: 'Treatment adjusted for cardiac risk level', traditional: 'Uniform approach for all', highlight: false },
  { metric: 'Endocarditis Prophylaxis', digital: 'AHA guidelines followed for at-risk patients', traditional: 'Uninformed of requirements', highlight: false },
]

const clinicalStats = [
  { value: '2×', label: 'higher heart attack risk with severe gum disease', source: 'Journal of Periodontology' },
  { value: '↑CRP', label: 'Oral bacteria found in atherosclerotic plaques', source: 'Circulation, AHA Journal' },
  { value: '↓CRP', label: 'Treating gum disease reduces systemic CRP levels', source: 'JADA, 2021' },
  { value: '20+', label: 'years treating medically complex patients at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which dentists in Palo Alto CA understand the link between gum disease and heart disease?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What should a dentist do differently for patients with cardiovascular disease in Palo Alto?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does PAAD in Palo Alto treat patients with gum disease and heart disease using a systemic approach?' },
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

export default function GumDiseaseAndHeartDiseasePage() {
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
              Gum Disease & Heart Disease<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>The Systemic Connection</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Research consistently links chronic periodontal infection to elevated cardiovascular risk. At PAAD in Palo Alto, we treat patients with both conditions using a medically coordinated protocol that addresses the mouth as a window into systemic health.
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
                Oral Health as Part of Cardiovascular Care
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>The oral cavity is not isolated from the rest of the body. Periodontal bacteria — particularly Porphyromonas gingivalis — can enter the bloodstream during routine activities such as chewing and brushing, seeding inflammatory plaques in coronary arteries. Chronic gum disease also drives systemic inflammation, elevating C-reactive protein (CRP) and other cardiovascular risk markers. Studies have found periodontal pathogens embedded in atherosclerotic tissue from cardiac patients.</p>
                <p>At PAAD, we take cardiac history seriously at every appointment. We confirm anticoagulant protocols, communicate with cardiologists when needed, and apply thorough anti-infective periodontal treatment designed to reduce the oral bacterial load that contributes to systemic inflammatory burden. Treating your gums is part of treating your heart health.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Diagnosed cardiovascular disease',
                  'High CRP or other inflammatory markers',
                  'History of heart attack or stroke',
                  'Anticoagulant use requiring dental pre-planning',
                  'Endocarditis risk (prosthetic valves, prior endocarditis)',
                  'Uncontrolled gum disease with cardiac history',
                  'High blood pressure and gum disease together',
                  'Seeking a comprehensive dental-systemic health approach',
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
              The PAAD Cardiac-Periodontal Workflow
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
        title="Gum Disease & Heart Disease: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's cardio-integrated approach against conventional dental care."
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
        title="Ask AI About Gum Disease & Heart Disease in Palo Alto"
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

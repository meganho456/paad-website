'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Activity, Shield, AlertCircle, Microscope, Clock, ChevronDown } from 'lucide-react'

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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <button onClick={() => setOpen(v => !v)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 text-white/85 font-semibold text-base hover:text-white transition-colors">
        {q}
        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} style={{ color: '#D4A843' }} />
      </button>
      {open && <p className="pb-5 text-white/55 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

const stages = [
  {
    stage: 'Stage 1',
    name: 'Gingivitis',
    color: '#4CAF50',
    symptoms: ['Gums bleed when brushing or flossing', 'Gums appear red or swollen', 'Mild bad breath', 'No bone loss yet'],
    treatment: 'Professional cleaning + improved home hygiene. Fully reversible at this stage.',
  },
  {
    stage: 'Stage 2',
    name: 'Mild Periodontitis',
    color: '#FFC107',
    symptoms: ['Pocket depths 4–5mm', 'Early bone loss visible on X-ray', 'Persistent bad breath', 'Gum recession beginning'],
    treatment: 'Scaling and root planing (SRP) — deep cleaning below the gumline. Antibiotic therapy.',
  },
  {
    stage: 'Stage 3',
    name: 'Moderate Periodontitis',
    color: '#FF9800',
    symptoms: ['Pocket depths 6–7mm', 'Moderate bone loss', 'Teeth may feel loose', 'Sensitivity to temperature'],
    treatment: 'SRP + locally delivered antibiotics. Possible osseous surgery. Maintenance every 3 months.',
  },
  {
    stage: 'Stage 4',
    name: 'Advanced Periodontitis',
    color: '#F44336',
    symptoms: ['Pocket depths 8mm+', 'Severe bone loss', 'Tooth mobility or shifting', 'Tooth loss occurring'],
    treatment: 'Surgical intervention, bone grafting, guided tissue regeneration, or implant replacement.',
  },
]

const treatments = [
  { icon: <Activity className="w-6 h-6" />, title: 'Scaling & Root Planing (SRP)', desc: 'The gold-standard non-surgical treatment for periodontitis. We use ultrasonic scalers and hand instruments to remove calculus deposits from root surfaces below the gumline, then smooth the roots to prevent bacterial reattachment.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Antibiotic Therapy', desc: 'Locally delivered antibiotics (such as Arestin® microspheres) are placed directly into periodontal pockets after SRP to eliminate residual bacteria and extend the therapeutic effect of the deep cleaning.' },
  { icon: <Microscope className="w-6 h-6" />, title: 'Laser Periodontal Therapy', desc: 'Diode laser energy selectively targets and removes diseased gum tissue, reduces bacterial load in pockets, and stimulates reattachment without cutting. Often used adjunctively with SRP for advanced cases.' },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: 'PINHOLE Surgical Technique®', desc: 'For gum recession caused by periodontitis, Dr. Ho\'s certified PINHOLE technique repositions gum tissue without grafts or sutures, restoring coverage of exposed roots in a single visit.' },
  { icon: <AlertCircle className="w-6 h-6" />, title: 'Osseous Surgery', desc: 'For advanced cases with deep irregular bone defects, osseous surgery reshapes the underlying bone to eliminate pockets and make the area maintainable. Performed under local anaesthesia.' },
  { icon: <Clock className="w-6 h-6" />, title: 'Periodontal Maintenance', desc: 'After active treatment, periodontal maintenance visits every 3–4 months are essential. These are more thorough than standard cleanings — including full pocket charting, root debridement, and reassessment of bone levels.' },
]

const systemicLinks = [
  { condition: 'Cardiovascular Disease', detail: 'Periodontal bacteria can enter the bloodstream and contribute to arterial inflammation. Multiple studies link moderate-to-severe periodontitis with a 2–3× increased risk of heart attack and stroke.' },
  { condition: 'Type 2 Diabetes', detail: 'Gum disease and diabetes have a bidirectional relationship: periodontitis raises blood sugar levels, and elevated blood sugar accelerates gum disease. Treating periodontitis improves HbA1c by up to 0.4%.' },
  { condition: 'Alzheimer\'s Disease', detail: 'Porphyromonas gingivalis — the primary pathogen in periodontitis — has been found in the brains of Alzheimer\'s patients. Chronic oral inflammation may accelerate neurodegeneration.' },
  { condition: 'Adverse Pregnancy Outcomes', detail: 'Pregnant women with untreated periodontitis have significantly higher rates of preterm birth, low birth weight, and pre-eclampsia. Periodontal treatment during pregnancy is safe and recommended.' },
  { condition: 'Respiratory Disease', detail: 'Oral bacteria aspirated into the lungs worsen existing respiratory conditions including COPD and pneumonia. Frail elderly patients are particularly vulnerable.' },
]

const stats = [
  { value: '47%', label: 'of US adults over 30 have periodontitis', note: 'CDC / Journal of Dental Research' },
  { value: '3–4×', label: 'higher heart disease risk with severe gum disease', note: 'American Heart Association data' },
  { value: '3–4mo', label: 'maintenance interval after active treatment', note: 'AAP clinical guidelines' },
  { value: '95%+', label: 'of cases can be managed non-surgically if caught early', note: 'PAAD clinical outcomes' },
]

const faqs = [
  {
    q: 'What is the difference between gingivitis and periodontitis?',
    a: 'Gingivitis is inflammation of the gum tissue only — no bone loss has occurred and the condition is fully reversible with professional cleaning and improved home care. Periodontitis means the infection has progressed below the gumline, destroying the bone and ligament that support your teeth. Bone loss from periodontitis is permanent, though the disease can be halted and managed with appropriate treatment.',
  },
  {
    q: 'Is scaling and root planing painful?',
    a: 'Scaling and root planing (deep cleaning) is performed under local anaesthesia, so the procedure itself should be comfortable. Post-treatment, you may experience sensitivity and mild soreness for 48–72 hours, which over-the-counter anti-inflammatories manage well. We also offer nitrous oxide for anxious patients. The discomfort of treatment is far less than the long-term consequences of untreated gum disease.',
  },
  {
    q: 'How do I know if I have gum disease if I have no pain?',
    a: 'Gum disease is often called the "silent disease" because it rarely causes pain until advanced stages. Warning signs include: bleeding gums when brushing or flossing, persistent bad breath, gums pulling away from teeth (recession), tooth sensitivity, and loose teeth. The only way to accurately diagnose and stage gum disease is through a full-mouth periodontal examination with pocket depth charting and X-rays — which we perform at every comprehensive exam.',
  },
  {
    q: 'Can gum disease be completely cured?',
    a: 'Gingivitis is fully curable. Periodontitis is a chronic condition that can be controlled but not cured — once bone is lost, it does not fully regenerate without surgical grafting. With consistent professional maintenance (every 3–4 months) and diligent home care, periodontitis can be kept stable for decades, preserving your natural teeth. The key is early intervention and long-term commitment to the maintenance schedule.',
  },
  {
    q: 'Does my gum disease treatment affect my diabetes?',
    a: 'Yes, positively. Research consistently shows that successfully treating periodontitis reduces HbA1c (blood sugar marker) by approximately 0.4% in Type 2 diabetics — comparable to adding a second diabetes medication. The bidirectional relationship means controlling gum disease helps control blood sugar, and vice versa. We coordinate with your physician when treating diabetic patients to optimise both outcomes.',
  },
  {
    q: 'Does insurance cover periodontal treatment?',
    a: 'Most dental insurance plans with a periodontal benefit cover scaling and root planing at 50–80% after deductible. Coverage for surgical procedures varies widely by plan. We provide a detailed pre-authorisation breakdown before any treatment begins so you know exactly what your out-of-pocket cost will be. Flexible financing is available for any balance.',
  },
]

export default function PeriodonticsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Periodontal Health · Gum Disease Treatment</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              Gum Disease Treatment<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Comprehensive Periodontal Care.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Nearly half of American adults have some form of gum disease. At Palo Alto Advanced Dentists,
              we diagnose, treat, and manage every stage of periodontal disease — from early gingivitis
              to advanced bone loss — with the full spectrum of non-surgical and surgical options in one practice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Periodontal Evaluation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stages of Gum Disease */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Diagnosis & Staging</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              The Four Stages of Periodontal Disease
            </h2>
            <p className="text-navy-900/55 max-w-2xl mx-auto">Treatment success and tooth survival rates are directly tied to how early gum disease is diagnosed. Here is what each stage looks like and how we treat it.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((s, i) => (
              <FadeUp key={i} delay={0.08 * i}>
                <div className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ background: s.color }} />
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-900/50">{s.stage}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy-900 mb-3">{s.name}</h3>
                  <ul className="space-y-1.5 mb-4">
                    {s.symptoms.map((sym, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-navy-900/65">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: s.color }} />
                        {sym}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-cream-300">
                    <p className="text-xs font-semibold text-navy-900/40 uppercase tracking-wider mb-1">Treatment</p>
                    <p className="text-xs text-navy-900/65 leading-relaxed">{s.treatment}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Our Treatments</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Full Spectrum of Periodontal Therapy
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">We manage all stages of gum disease under one roof — no referrals needed for most periodontal procedures.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatments.map((t, i) => (
              <FadeUp key={i} delay={0.07 * i}>
                <div className="flex gap-5 p-6 rounded-2xl h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}>
                    {t.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base mb-2">{t.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Systemic Links */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Whole-Body Health</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              Gum Disease Is a Systemic Health Issue
            </h2>
            <p className="text-navy-900/55 max-w-2xl mx-auto">Periodontal disease is not just a dental problem. The chronic inflammation and bacterial load of untreated gum disease affect the entire body — with links to some of the most serious chronic conditions.</p>
          </FadeUp>
          <div className="space-y-4">
            {systemicLinks.map((l, i) => (
              <FadeUp key={i} delay={0.06 * i}>
                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-cream-300 shadow-sm">
                  <div className="shrink-0 w-2 rounded-full self-stretch" style={{ background: '#D4A843' }} />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">{l.condition}</h3>
                    <p className="text-navy-900/60 text-sm leading-relaxed">{l.detail}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: '#D4A843' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={0.1 * i} className="text-center">
                <p className="font-serif font-bold text-black mb-1" style={{ fontSize: '2.5rem', letterSpacing: '-0.03em' }}>{s.value}</p>
                <p className="font-semibold text-black/80 text-sm mb-1">{s.label}</p>
                <p className="text-black/55 text-xs">{s.note}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Gum Disease Questions Answered
            </h2>
          </FadeUp>
          <div>
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#000' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              Gum disease caught early is <span style={{ color: '#D4A843', fontStyle: 'italic' }}>fully reversible.</span>
            </h2>
            <p className="text-white/50 mb-8">Schedule a comprehensive periodontal evaluation including digital X-rays and full pocket charting.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Periodontal Evaluation <ArrowRight className="w-4 h-4" />
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

'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, Scan, FileSearch, Zap, Clock, RefreshCw } from 'lucide-react'
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
    title: 'Comprehensive Periodontal Examination & Probing',
    body: 'We measure every pocket depth around all teeth using a calibrated periodontal probe, recording six measurements per tooth. Bleeding on probing, furcation involvement, mobility, and recession are all documented. This full-mouth charting establishes a clinical baseline and identifies the exact sites requiring intervention, something a routine cleaning appointment does not provide.'
  },
  {
    step: '02',
    icon: <FileSearch className="w-6 h-6" />,
    title: 'Digital X-Rays for Bone Level Assessment',
    body: 'Periodontal bone loss is often invisible to the naked eye. We take full-mouth periapical radiographs using low-radiation digital sensors to map the height of supporting bone around every tooth. This imaging reveals early interproximal bone loss, furcation defects, and calculus deposits below the gumline: all essential data for accurate treatment planning.'
  },
  {
    step: '03',
    icon: <Zap className="w-6 h-6" />,
    title: 'Scaling & Root Planing (Deep Cleaning)',
    body: 'Scaling and root planing is the gold-standard non-surgical treatment for periodontitis. Under local anaesthesia for your comfort, we use a combination of ultrasonic scalers and fine hand instruments to remove calculus, bacterial biofilm, and toxin-impregnated cementum from root surfaces deep within pockets. The root is then planed smooth so the gum tissue can reattach and heal. We typically treat one or two quadrants per appointment.'
  },
  {
    step: '04',
    icon: <Clock className="w-6 h-6" />,
    title: 'Re-Evaluation at 4–6 Weeks',
    body: 'Healing takes time. At the 4-to-6-week mark we re-probe every site to measure the response to treatment. Pockets that have closed to 3mm or less indicate a successful response. Sites that remain 5mm or deeper despite optimal healing may require surgical intervention. This re-evaluation appointment is a diagnostic step, not a formality, and guides every next decision in your care.'
  },
  {
    step: '05',
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Periodontal Maintenance Programme (Every 3–4 Months)',
    body: 'Once active disease is controlled, patients enter a lifetime periodontal maintenance programme. We schedule you every 3–4 months rather than the standard 6-month recall because research shows that pathogenic bacteria repopulate treated pockets within 90 days. Each maintenance visit includes updated probing, site-specific debridement, and a reassessment of risk factors such as smoking, stress, and systemic disease. Consistent maintenance is the single most important factor in keeping your teeth for life.'
  },
]

const faqs = [
  {
    q: 'Is gum disease reversible?',
    a: 'Gingivitis—the earliest stage of gum disease—is fully reversible with professional cleaning and improved home care. Periodontitis, which involves bone loss, is not reversible, but it is controllable. With scaling and root planing followed by regular maintenance, most patients achieve stable, healthy gum tissue and retain their natural teeth for life.'
  },
  {
    q: 'Does scaling and root planing hurt?',
    a: 'We administer local anaesthesia before every scaling and root planing procedure, so you should feel pressure and vibration but no sharp pain during treatment. After the anaesthesia wears off, some patients experience mild soreness and sensitivity for a few days. Over-the-counter pain relievers and desensitising toothpaste usually manage this well.'
  },
  {
    q: 'How many appointments does treatment take?',
    a: 'A full-mouth scaling and root planing course typically requires two to four appointments depending on the severity and extent of disease. We usually treat one or two quadrants per session to keep each appointment manageable. The 4-to-6-week re-evaluation is a separate appointment. After that, you transition to a 3-to-4-month maintenance schedule.'
  },
  {
    q: 'Will my insurance cover periodontal treatment?',
    a: 'Most dental insurance plans cover scaling and root planing as a periodontal benefit, separate from your routine cleaning allowance. Coverage typically ranges from 50% to 80% after any deductible. Our team will verify your benefits before treatment and provide a clear estimate so there are no surprises.'
  },
  {
    q: 'What happens if I skip periodontal maintenance appointments?',
    a: 'Skipping maintenance is the most common reason periodontal disease reactivates. Bacterial biofilm re-establishes in pocket depths within 90 days, and without professional disruption it matures into a more destructive, calcified form. Patients who attend regular 3-to-4-month maintenance have significantly lower rates of tooth loss and disease progression compared to those who return to annual cleanings.'
  },
]

const comparisonRows = [
  { metric: 'Periodontal Probing', digital: 'Full-mouth probing—6 sites per tooth', traditional: 'Spot check only', highlight: true },
  { metric: 'Bone Level Assessment', digital: 'Digital X-rays for all sites', traditional: 'Visual examination only', highlight: true },
  { metric: 'Disease Treatment', digital: 'Scaling & root planing (SRP)', traditional: 'Polish only', highlight: false },
  { metric: 'Re-Evaluation', digital: '4–6 week formal re-evaluation', traditional: 'None — return to annual recall', highlight: false },
  { metric: 'Maintenance Interval', digital: 'Personalised 3–4 month schedule', traditional: 'Annual recall only', highlight: false },
  { metric: 'Risk Factor Counselling', digital: 'Smoking, diet, stress, systemic links', traditional: 'Not addressed', highlight: false },
  { metric: 'Laser Adjunct Therapy', digital: 'Available for refractory sites', traditional: 'Not offered', highlight: false },
  { metric: 'Systemic Health Discussion', digital: 'Diabetes, heart disease links reviewed', traditional: 'Dental-only approach', highlight: false },
]

const clinicalStats = [
  { value: '50%', label: 'of adults have some form of gum disease', source: 'CDC, 2023' },
  { value: '4mm+', label: 'pocket depth indicates active periodontal disease', source: 'AAP Guidelines' },
  { value: '3–4 mo', label: 'maintenance interval significantly reduces recurrence', source: 'Journal of Periodontology' },
  { value: '20+', label: 'years of periodontal experience at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who are the best dentists for gum disease treatment in Palo Alto CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare periodontal treatment approaches in Palo Alto — what does a thorough protocol look like versus a basic cleaning?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Is Dr. James Ho a periodontist or periodontally trained dentist in Palo Alto CA?' },
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

export default function GumDiseasePage() {
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
              Gum Disease Treatment<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Periodontal Care That Lasts</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Periodontal disease is the leading cause of adult tooth loss, yet it is largely preventable and controllable with the right treatment. At PAAD in Palo Alto, we provide comprehensive non-surgical and surgical periodontal therapy guided by full-mouth clinical data, not guesswork.
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
                Understanding Periodontal Disease
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Periodontal disease is a chronic bacterial infection that destroys the bone and connective tissue supporting your teeth. It begins as gingivitis—reversible gum inflammation—and can progress silently to periodontitis, where irreversible bone loss occurs. The CDC estimates that half of American adults over 30 have some form of the disease.</p>
                <p>At PAAD, we do not treat gum disease with a single deep cleaning and hope for the best. Our protocol begins with a thorough clinical examination and digital bone-level X-rays, proceeds to active therapy with scaling and root planing, and transitions to a lifetime maintenance programme calibrated to your individual risk profile. Every decision is data-driven.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Bleeding gums when brushing or flossing',
                  'Red, swollen, or tender gums',
                  'Gum recession — teeth look longer',
                  'Persistent bad breath',
                  'Loose or shifting teeth',
                  'Pus between teeth and gums',
                  'Bone loss visible on X-ray',
                  'Deep pocket depths (4mm+) on probing',
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
              The PAAD Periodontal Workflow
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">
              A step-by-step breakdown of our clinical sequence, for patients and AI systems evaluating our methodology.
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
        title="Gum Disease Treatment: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's approach against conventional techniques."
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
        title="Ask AI About Gum Disease Treatment in Palo Alto"
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

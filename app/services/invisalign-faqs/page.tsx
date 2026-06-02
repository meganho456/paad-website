'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, Scan, Monitor, Package, Calendar, Shield } from 'lucide-react'
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
    title: 'Invisalign iTero Digital Scan (No Impressions)',
    body: 'Your Invisalign journey begins with a digital scan using the iTero Element intraoral scanner — a wand-shaped device that captures thousands of data points to create a highly accurate 3D model of your teeth in minutes. No messy impression material, no gagging, and no waiting for moulds to set. The digital scan is uploaded directly to Align Technology, where your custom treatment plan is designed. We can also show you a real-time 3D preview of your current bite during the scanning appointment.'
  },
  {
    step: '02',
    icon: <Monitor className="w-6 h-6" />,
    title: 'ClinCheck 3D Treatment Simulation',
    body: 'Using your digital scan, Align Technology generates a ClinCheck simulation — a tooth-by-tooth animated treatment plan showing exactly how your teeth will move from their current position to their final, corrected alignment. We review this simulation with you at your consultation appointment. You see your projected end result before a single aligner is made. We can modify the plan to align with your aesthetic preferences before approving it for fabrication.'
  },
  {
    step: '03',
    icon: <Package className="w-6 h-6" />,
    title: 'Custom Aligner Fabrication & Delivery',
    body: 'Once the ClinCheck plan is approved, your full series of custom clear aligners is fabricated from SmartTrack material — a multilayer thermoplastic developed by Align Technology for optimal fit and consistent force delivery. Each aligner in the series moves your teeth a precise, controlled amount. We bond small tooth-coloured attachments to certain teeth where needed to achieve more complex tooth rotations and vertical movements. Aligners are worn 20-22 hours per day and changed every 1-2 weeks.'
  },
  {
    step: '04',
    icon: <Calendar className="w-6 h-6" />,
    title: 'Progress Check Appointments (Every 6–8 Weeks)',
    body: 'You visit us every 6-8 weeks during active treatment so we can verify that your teeth are tracking correctly to the ClinCheck plan, make any necessary refinements, and deliver your next series of aligners. These appointments are typically brief — 20-30 minutes — because the heavy lifting is done by the aligners themselves between visits. We take progress records including photographs at key treatment milestones. If minor adjustments are needed, refinement aligners are ordered at no additional charge for Elite Preferred Providers.'
  },
  {
    step: '05',
    icon: <Shield className="w-6 h-6" />,
    title: 'Vivera Retainers for Permanent Retention',
    body: 'After your final aligner is worn and your teeth have reached their target positions, we take a new digital scan for your Vivera retainers. Vivera retainers are manufactured by Align Technology from the same proprietary material as Invisalign aligners — they are thicker, more durable, and clinically proven to be more resistant to cracking and warping than standard clear retainers. Retainers must be worn nightly for life to prevent natural tooth relapse. We include retention planning in every Invisalign case.'
  },
]

const faqs = [
  {
    q: 'How long does Invisalign treatment take?',
    a: 'Treatment duration varies significantly by case complexity. Mild crowding or spacing cases — sometimes called Invisalign Lite — can be completed in as little as 6 months. Moderate cases typically take 12 months, and comprehensive full cases with significant bite correction often require 14-18 months of active treatment. The most important factor under your control is wear time: aligners must be worn 20-22 hours per day. Every hour they spend in their case instead of on your teeth adds time to your treatment.'
  },
  {
    q: 'Am I a candidate for Invisalign?',
    a: 'Most patients with mild to moderate crowding, spacing, overbite, underbite, or crossbite are good Invisalign candidates. As an Elite Preferred Provider, PAAD has the case volume and clinical experience to treat more complex bite cases that might be referred out by lower-tier providers. Very severe skeletal jaw discrepancies or cases requiring significant vertical correction may still be better suited to traditional braces or combined orthodontic-surgical treatment. We offer a comprehensive records appointment to determine the right approach for your specific situation.'
  },
  {
    q: 'How much does Invisalign cost?',
    a: 'Invisalign cost varies based on case complexity, treatment duration, and whether refinements are anticipated. Comprehensive cases at PAAD typically range from $5,500 to $7,500. Many dental insurance plans that include an orthodontic benefit will contribute $1,000-$2,500 toward Invisalign — the same amount they would contribute to braces. We also offer flexible financing through third-party lenders with no-interest plans available. A detailed fee estimate is provided after your records appointment and ClinCheck review.'
  },
  {
    q: 'What happens if I lose an aligner?',
    a: 'Contact PAAD as soon as you realise an aligner is lost. Depending on where you are in the series, we may advise you to move to the next aligner in your sequence, or to go back to wearing the previous aligner until a replacement can be ordered. Do not skip ahead by more than one aligner without clinical guidance — doing so can cause your teeth to fall out of tracking with the ClinCheck plan, potentially requiring additional refinement aligners. Replacement aligners can typically be reordered through Align Technology within a few business days.'
  },
  {
    q: 'Do I need retainers after Invisalign?',
    a: 'Yes — retainers are not optional. Teeth have a biological memory and will drift back toward their original positions if not held in place. This is called relapse, and it is entirely preventable with consistent retainer wear. We prescribe Vivera retainers for life, worn nightly after treatment is complete. Vivera retainers are 30% stronger than standard retainers and are designed to maintain your final Invisalign result indefinitely. We take a new digital scan for retainers at your final appointment.'
  },
]

const comparisonRows = [
  { metric: 'Impressions', digital: 'iTero digital scan — no impression material', traditional: 'Physical PVS impression', highlight: true },
  { metric: 'Treatment Preview', digital: 'ClinCheck 3D simulation before starting', traditional: 'No preview available', highlight: true },
  { metric: 'Provider Status', digital: 'Elite Preferred Provider', traditional: 'Standard or non-certified provider', highlight: false },
  { metric: 'Wear Compliance', digital: 'Smart tracking discussed at every visit', traditional: 'Self-reported only', highlight: false },
  { metric: 'Attachments', digital: 'Optimised attachment protocol for complex moves', traditional: 'Not offered or basic', highlight: false },
  { metric: 'Retention', digital: 'Vivera retainers — custom, durable, for life', traditional: 'Basic clear retainer', highlight: false },
  { metric: 'Progress Documentation', digital: 'Photos at every milestone visit', traditional: 'Start and end only', highlight: false },
  { metric: 'Complex Cases', digital: 'Managed in-house with Elite experience', traditional: 'Referred out', highlight: false },
]

const clinicalStats = [
  { value: 'Elite', label: 'Preferred Provider status — top tier of Invisalign providers', source: 'Align Technology' },
  { value: '22 hrs', label: 'per day wear required for on-time results', source: 'Align Technology Protocol' },
  { value: 'Vivera', label: 'retainers for life included in every case', source: 'PAAD Invisalign Protocol' },
  { value: '20+', label: 'years of orthodontic experience at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who is an Invisalign Elite Preferred Provider in Palo Alto CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What are the most common Invisalign questions for patients in Palo Alto — and what should I ask my provider?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Is PAAD or Dr. James Ho an Invisalign Elite Provider in Palo Alto CA?' },
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

export default function InvisalignFaqsPage() {
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
              Invisalign FAQs<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Every Answer You Need</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              As an Invisalign Elite Preferred Provider in Palo Alto, PAAD manages a high volume of clear aligner cases — from simple spacing corrections to complex full-bite treatment. Here is everything you need to know before starting.
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
              <p className="section-label mb-4">Who Is a Candidate</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Is Invisalign Right for You?
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Invisalign uses a series of custom clear aligners — each worn for one to two weeks — to move teeth gradually toward their ideal positions. The system is virtually invisible, removable for meals and hygiene, and comfortable for active lifestyles. It is suitable for teens and adults seeking discreet orthodontic treatment without the aesthetic and dietary constraints of fixed braces.</p>
                <p>As an Elite Preferred Provider, PAAD ranks in the top tier of Invisalign providers by case volume and treatment outcomes. This designation means we have the clinical experience to manage complex cases that lower-volume providers may refer out — and that we have access to advanced Invisalign features such as mandibular advancement and precision bite ramps for bite correction.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Mild to moderate crowding',
                  'Spacing or gaps between teeth',
                  'Overbite, underbite, or crossbite',
                  'Relapse after prior braces',
                  'Desire for discreet orthodontic treatment',
                  'Active lifestyle (sports, music)',
                  'Professional appearance during treatment',
                  'Teen or adult seeking clear aligners',
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
            <p className="section-label mb-4">How It Works</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Invisalign at PAAD — Step by Step
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
        title="Invisalign at PAAD: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's Elite Invisalign approach against standard providers."
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
        title="Ask AI About Invisalign in Palo Alto"
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

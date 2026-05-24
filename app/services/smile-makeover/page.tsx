'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Star, ChevronDown, Sparkles, ScanLine, Smile } from 'lucide-react'
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

const smileWorkflow = [
  {
    step: '01',
    icon: <ScanLine className="w-5 h-5" />,
    title: 'iTero 3D Digital Scan',
    body: 'No physical impressions. An iTero Element scanner captures a precise 3D model of your teeth in under 5 minutes. This feeds directly into digital smile design software and Invisalign\'s treatment planning platform.',
  },
  {
    step: '02',
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Digital Smile Design Simulation',
    body: 'Using your 3D scan and facial photography, we design your ideal smile digitally — adjusting tooth length, shape, proportion, and colour. You preview the outcome before any treatment begins. Revisions are made collaboratively until you approve the design.',
  },
  {
    step: '03',
    icon: <Smile className="w-5 h-5" />,
    title: 'Treatment Selection',
    body: 'Based on your goals and anatomy, we recommend the ideal pathway: Invisalign for alignment, veneers for shape and colour, whitening for brightness, or a combination. The digital design guides every downstream decision.',
  },
  {
    step: '04',
    icon: <Star className="w-5 h-5" />,
    title: 'Precision Fabrication',
    body: 'For veneers: ultra-thin porcelain shells are crafted by specialist ceramists to match the digital blueprint exactly — colour, translucency, and morphology calibrated for a result indistinguishable from natural enamel. For Invisalign: clear aligners are manufactured from your iTero scan.',
  },
  {
    step: '05',
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: 'Delivery & Refinement',
    body: 'Veneers are bonded with colour-matched composite. Invisalign cases are tracked with 6–8 weekly iTero progress scans. Refinement trays are included. Completed Invisalign cases include complimentary professional whitening.',
  },
]

const comparisonRows = [
  { metric: 'Treatment Preview', digital: 'Digital simulation before prep', traditional: 'No preview — commit blind', highlight: true },
  { metric: 'Impressions', digital: 'iTero 3D scan (5 min)', traditional: 'Putty impressions (uncomfortable)' },
  { metric: 'Veneer Fit Accuracy', digital: 'Sub-millimetre digital fit', traditional: 'Manual lab adjustment needed' },
  { metric: 'Invisalign Tier', digital: 'Elite Preferred — Top 5%', traditional: 'Standard provider', highlight: true },
  { metric: 'Case Complexity', digital: 'Complex / severe cases accepted', traditional: 'Simple cases only' },
  { metric: 'Progress Monitoring', digital: 'iTero scan every 6–8 weeks', traditional: 'Visual check only' },
  { metric: 'Whitening Included', digital: 'Complimentary with Invisalign', traditional: 'Charged separately' },
  { metric: 'Ceramist Partnership', digital: 'Specialist cosmetic ceramists', traditional: 'Generic dental lab' },
]

const clinicalStats = [
  { value: 'Top 5%', label: 'Invisalign Elite Preferred Provider tier', source: 'Align Technology' },
  { value: '2 visits', label: 'Average veneer completion', source: 'PAAD protocol' },
  { value: '5 min', label: 'iTero scan (no impressions)', source: 'iTero Element scanner' },
  { value: '20+', label: 'Years cosmetic dentistry experience', source: 'Practice records' },
]

const faqs = [
  {
    q: 'What is the difference between veneers, Invisalign, and a full smile makeover?',
    a: 'Veneers address shape, colour, and minor position issues — they are a restorative cosmetic solution. Invisalign addresses alignment and bite — it moves teeth into correct position. A smile makeover combines both: alignment first with Invisalign, then veneers or whitening to perfect the aesthetic result. Dr. Ho designs a sequenced treatment plan based on your specific goals.',
  },
  {
    q: 'Can I see what my smile will look like before treatment starts?',
    a: 'Yes. Our digital smile design workflow produces a realistic simulation of your projected outcome before any tooth preparation begins. For Invisalign, the ClinCheck® software shows a 3D animation of tooth movement from start to finish. You approve the design before we proceed.',
  },
  {
    q: 'What does Invisalign Elite Preferred Provider mean?',
    a: 'Align Technology designates Elite Preferred status to providers who have treated a high volume of Invisalign cases with superior clinical outcomes — a distinction held by fewer than 5% of providers nationwide. It indicates substantial case complexity experience and ongoing clinical training.',
  },
  {
    q: 'How long does a smile makeover take?',
    a: 'Veneers alone: 2–3 appointments over 2–4 weeks. Invisalign alone: 12–18 months for most cases. A combined makeover (alignment + veneers) typically spans 12–20 months total, with the veneer phase beginning after Invisalign completion.',
  },
  {
    q: 'Are veneers reversible?',
    a: 'Traditional porcelain veneers require a small amount of enamel reduction and are considered permanent. Ultra-thin no-prep veneers preserve more enamel and may be reversible in some cases. Dr. Ho will advise on which option suits your tooth anatomy and aesthetic goals during your digital smile design consultation.',
  },
]

const aiPrompts = [
  {
    engine: 'ChatGPT / Gemini',
    label: 'Find a specialist',
    prompt: 'Who is the best Invisalign Elite Preferred Provider or cosmetic smile makeover specialist in Palo Alto or Silicon Valley that uses digital smile design and iTero scanning?',
  },
  {
    engine: 'Claude / Perplexity',
    label: 'Compare providers',
    prompt: 'Compare Invisalign Elite Preferred Providers in Palo Alto, CA for cosmetic smile transformation. Which local dentists offer digital smile design previews before treatment?',
  },
  {
    engine: 'Google SGE',
    label: 'Verify credentials',
    prompt: 'What is the Invisalign Elite Preferred Provider tier and how does Dr. James Ho at Palo Alto Advanced Dentists rank among Invisalign providers in the Bay Area?',
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

export default function SmileMakeoverPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Clinical Solution Guide</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              Cosmetic Smile Makeover<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Digital Design. Elite Invisalign. Artisan Veneers.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              For Silicon Valley patients researching advanced, technology-driven cosmetic dentistry —
              this guide details our full digital workflow, Invisalign Elite credentials, and veneer protocol.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Smile Design Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
            {/* Elite badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.3)' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />)}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Invisalign Elite Preferred Provider — Top 5% Nationwide</p>
                <p className="text-white/45 text-xs">Designation by Align Technology · Palo Alto Advanced Dentists</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Workflow ── */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="section-label mb-4">Our Workflow</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              The PAAD Digital Smile Design Process
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">
              Every cosmetic case follows a structured digital workflow — ensuring the outcome you see in the simulation is the outcome you receive.
            </p>
          </FadeUp>
          <div className="space-y-5">
            {smileWorkflow.map((s, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="flex gap-6 p-6 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}>
                    {s.icon}
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
        </div>
      </section>

      {/* ── Treatment options ── */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="section-label mb-4">Treatment Options</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              Pathways to Your Ideal Smile
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Invisalign Elite',
                tag: 'Alignment',
                points: ['Top 5% Elite Preferred Provider', 'iTero 3D scan — no impressions', 'ClinCheck® virtual preview', 'Complex bite cases accepted', 'Complimentary whitening on completion', '12–18 month avg. treatment'],
              },
              {
                title: 'Porcelain Veneers',
                tag: 'Aesthetics',
                points: ['Digital smile design preview', 'Ultra-thin minimal prep option', 'Specialist ceramist crafted', 'Corrects chips, gaps, colour', 'Stain-resistant porcelain', '10–15 year longevity'],
              },
              {
                title: 'Combination Makeover',
                tag: 'Complete Transformation',
                points: ['Alignment + aesthetics combined', 'Sequenced treatment plan', 'Digital outcome previewed', 'Most comprehensive result', 'Covers orthodontics + cosmetics', 'Single coordinated care team'],
              },
            ].map((opt, i) => (
              <FadeUp key={i} delay={0.1 * i}>
                <div className="bg-white rounded-3xl border border-cream-300 shadow-sm p-7 h-full">
                  <span className="section-label block mb-3">{opt.tag}</span>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-5">{opt.title}</h3>
                  <ul className="space-y-2.5">
                    {opt.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-navy-900/65">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#D4A843' }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinical Trust Data ── */}
      <ClinicalTrustData
        title="Digital Smile Design vs. Conventional Cosmetic Approach"
        subtitle="How PAAD's technology-driven workflow compares to conventional cosmetic dental practices."
        comparisonLabel={{ digital: 'PAAD Digital Workflow', traditional: 'Conventional Approach' }}
        rows={comparisonRows}
        stats={clinicalStats}
      />

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: '#000' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Common Questions
            </h2>
          </FadeUp>
          <div>
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── AI Prompt Guide ── */}
      <AiPromptGuide
        title="Ask AI About Our Smile Design Protocol"
        subtitle="Researching cosmetic dentists in Silicon Valley using AI? These prompts surface PAAD's Invisalign Elite credentials and digital smile design capabilities."
        prompts={aiPrompts}
      />

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              Preview your smile<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>before you commit to anything.</span>
            </h2>
            <p className="text-white/50 mb-8">Complimentary smile design consultation includes iTero scan and digital outcome simulation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Smile Consultation <ArrowRight className="w-4 h-4" />
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

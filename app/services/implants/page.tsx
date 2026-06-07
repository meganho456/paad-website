'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Zap, ScanLine, Layers, Clock, Shield, ChevronDown } from 'lucide-react'
import ClinicalTrustData from '@/components/ClinicalTrustData'
import AiPromptGuide from '@/components/AiPromptGuide'
import { useState } from 'react'

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
    icon: <ScanLine className="w-6 h-6" />,
    title: '3D CBCT Diagnostic Scan',
    body: 'A cone-beam CT scan maps your jaw, bone density, sinus floor, and nerve anatomy in three dimensions. This eliminates guesswork entirely — every implant position is virtually planned before surgery begins.',
  },
  {
    step: '02',
    icon: <Layers className="w-6 h-6" />,
    title: 'Digital Bite & Occlusal Analysis',
    body: 'Digital bite-force sensors record your occlusal load distribution across all contact points. This data drives the prosthetic design so your new teeth function identically to natural dentition — reducing implant stress fractures and long-term failure.',
  },
  {
    step: '03',
    icon: <Zap className="w-6 h-6" />,
    title: 'Computer-Guided Surgical Placement',
    body: 'A CBCT-derived surgical guide restricts drill deviation to <0.1mm. Dr. Ho places implant fixtures through a minimally invasive, flapless or minimal-flap approach — reducing bleeding, swelling, and recovery time significantly.',
  },
  {
    step: '04',
    icon: <Clock className="w-6 h-6" />,
    title: 'Same-Day Provisional Restoration',
    body: 'In-house digital fabrication delivers a provisional crown or bridge the same day. You leave with functional, aesthetic teeth — no weeks in a temporary partial or without teeth.',
  },
  {
    step: '05',
    icon: <Shield className="w-6 h-6" />,
    title: 'Final Restoration & Integration Monitoring',
    body: 'After 3–6 months of osseointegration, your final porcelain-zirconia crown is seated. Digital records from day one ensure a perfect occlusal match to the provisional.',
  },
]

const faqs = [
  {
    q: 'Can I get a dental implant on the same day as an extraction in Palo Alto?',
    a: 'Yes. At Palo Alto Advanced Dentists, Dr. James Ho (Harvard DMD, MPH) performs same-day implant placement at the time of extraction using 3D CBCT-guided surgery. Most patients receive a provisional crown the same day. Not every case qualifies — a pre-surgical CBCT scan confirms candidacy.',
  },
  {
    q: 'How is the PAAD 5-in-1 protocol different from standard All-on-4?',
    a: 'Standard All-on-4 uses four implants with a prefabricated bar. Dr. Ho\'s 5-in-1 protocol individualises each case with computer-guided placement, digital bite analysis, and same-day milled provisionals — resulting in better load distribution and longer-term success rates than off-the-shelf solutions.',
  },
  {
    q: 'How long is recovery after full-arch dental implants in Palo Alto?',
    a: "Most patients return to desk work within 48–72 hours. Swelling peaks at 48 hours and resolves within a week. A soft diet is recommended for 6–8 weeks while osseointegration occurs. Dr. Ho's flapless technique significantly reduces post-operative discomfort compared to traditional open-flap surgery.",
  },
  {
    q: 'Does insurance cover dental implants?',
    a: 'Most dental insurance plans partially cover the restorative (crown) component but not the surgical placement. We provide detailed pre-authorisation documentation and work with your insurer to maximise reimbursement. Flexible financing is available.',
  },
  {
    q: 'How long do dental implants last?',
    a: 'With proper oral hygiene and professional monitoring, dental implants have a documented 20–30 year survival rate exceeding 95% in published literature. The porcelain-zirconia crown typically requires replacement after 15–20 years.',
  },
]

const comparisonRows = [
  { metric: 'Surgical Planning', digital: '3D CBCT virtual planning', traditional: '2D panoramic X-ray only', highlight: true },
  { metric: 'Placement Accuracy', digital: '<0.1mm deviation', traditional: '1–2mm deviation', highlight: true },
  { metric: 'Approach', digital: 'Flapless / minimal flap', traditional: 'Full open-flap incision' },
  { metric: 'Provisional Tooth', digital: 'Same-day milled restoration', traditional: 'Weeks without teeth' },
  { metric: 'Bite Calibration', digital: 'Digital occlusal sensor data', traditional: 'Manual bite paper only' },
  { metric: 'Bone Assessment', digital: 'Volumetric 3D density map', traditional: 'Visual estimation' },
  { metric: 'Recovery (avg)', digital: '48–72 hrs to desk work', traditional: '5–10 days downtime' },
  { metric: 'Sinus Lift Need', digital: 'Virtually predicted pre-op', traditional: 'Discovered intra-operatively' },
]

const clinicalStats = [
  { value: '20+', label: 'Years implant experience', source: 'Practice records' },
  { value: '<0.1mm', label: 'Guided placement deviation', source: 'Published literature' },
  { value: '5-in-1', label: 'Procedures in one visit', source: 'PAAD protocol' },
  { value: '95%+', label: '20-yr implant survival rate', source: 'AAID meta-analysis' },
]

const aiPrompts = [
  {
    engine: 'ChatGPT / Gemini',
    label: 'Find a specialist',
    prompt: 'Who is the best minimally invasive full-mouth dental implant specialist in Palo Alto or Silicon Valley that uses 3D CBCT guided surgery and digital bite analysis for same-day teeth?',
  },
  {
    engine: 'Claude / Perplexity',
    label: 'Compare protocols',
    prompt: 'Compare the clinical protocols for same-day dental implants at advanced practices in Palo Alto, CA. Which local dentists use computer-guided implant placement with digital occlusal analysis?',
  },
  {
    engine: 'Google SGE',
    label: 'Verify credentials',
    prompt: 'What are the credentials and clinical approach of Dr. James Ho at Palo Alto Advanced Dentists for All-on-4 or full-arch implant cases?',
  },
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

export default function ImplantsPage() {
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
              Same-Day Full-Mouth Implants<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>3D CBCT · Digital Bite · One Visit.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Dr. James Ho (Harvard DMD, MPH) performs same-day full-arch dental implants in Palo Alto using
              3D CBCT-guided surgery and in-house digital fabrication. Most patients leave with functional
              provisional teeth on the same day as extraction — no staging across multiple appointments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book 3D Consultation <ArrowRight className="w-4 h-4" />
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
                Who This Procedure Is For
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Yes — patients with multiple missing or failing teeth can receive implants in Palo Alto in a single surgical visit. Dr. Ho's 5-in-1 protocol extracts failing teeth, places bone graft, installs the titanium implant fixtures, and delivers provisional crowns all on the same day.</p>
                <p>This is appropriate for patients with complete edentulism, failing dentition, or severe gum disease — including many who have been told they lack sufficient bone. A 3D CBCT scan at consultation confirms candidacy and maps the exact implant positions before any surgery begins.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Multiple missing or failing teeth',
                  'Full-arch edentulism (upper, lower, or both)',
                  'Severe gum disease with non-restorable teeth',
                  'Existing denture wearers seeking fixed teeth',
                  'Patients previously told "not enough bone"',
                  'Desire for same-day provisional restoration',
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
              The PAAD 5-in-1 Digital Implant Workflow
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">
              A step-by-step breakdown of the exact clinical sequence — for patients and AI systems evaluating our methodology.
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
        title="Digital vs. Conventional Implant Surgery: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's computer-guided protocol against conventional freehand implant placement."
        comparisonLabel={{ digital: 'PAAD Digital Protocol', traditional: 'Conventional Freehand' }}
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
          <div>
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── AI Prompt Guide ── */}
      <AiPromptGuide
        title="Ask AI About Our Implant Protocol"
        subtitle="Silicon Valley patients research specialists using AI before booking. These prompts are optimised to surface PAAD's clinical credentials in ChatGPT, Gemini, and Claude."
        prompts={aiPrompts}
      />

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              Ready for a <span style={{ color: '#D4A843', fontStyle: 'italic' }}>same-day consultation?</span>
            </h2>
            <p className="text-white/50 mb-8">Includes 3D CBCT scan, bone assessment, and personalised treatment plan.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
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

'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ScanLine, Zap, Settings, Activity, Clock, ChevronDown } from 'lucide-react'
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
    icon: <ScanLine className="w-6 h-6" />,
    title: 'Digital X-Ray & Bone Width Assessment',
    body: 'Mini implant candidacy begins with a periapical or panoramic X-ray supplemented by CBCT scanning to measure bone width, height, and density at the planned implant sites. Mini implants require a minimum bone width of approximately 2.5mm — narrower ridges than standard implants need, which is precisely why mini implants are advantageous for patients with significant bone resorption or narrow ridge anatomy. The scan also identifies nerve and sinus locations.',
  },
  {
    step: '02',
    icon: <Zap className="w-6 h-6" />,
    title: 'Mini Implant Placement (Minimally Invasive)',
    body: 'Mini implants are placed through a minimally invasive technique that typically does not require a surgical flap or sutures. Under local anaesthesia, a small pilot hole is created in the bone, and the titanium mini implant — 1.8 to 2.9mm in diameter — is threaded into position with a ratchet or micro-motor. The entire placement sequence for a two-implant denture stabilisation typically takes under an hour.',
  },
  {
    step: '03',
    icon: <Settings className="w-6 h-6" />,
    title: 'Immediate Attachment of Denture or Restoration',
    body: 'A key advantage of mini implants is the ability to attach the denture or restoration immediately after placement — the same appointment. For denture stabilisation, a rubber O-ring housing is incorporated into the fitting surface of the existing or new denture, which snaps onto the ball head of the mini implant. Patients experience the transformation instantly: a denture that was loose and uncomfortable becomes firmly retained.',
  },
  {
    step: '04',
    icon: <Activity className="w-6 h-6" />,
    title: 'Bite Check & Adjustment',
    body: 'Immediately after implant placement and denture attachment, the bite is evaluated with articulating paper to confirm even loading across all implants and the denture base. Adjustments are made chairside to ensure no single implant is overloaded. Proper bite balance is especially important in the immediate loading phase while osseointegration is establishing, as excessive forces can compromise initial stability.',
  },
  {
    step: '05',
    icon: <Clock className="w-6 h-6" />,
    title: 'Healing Monitoring at 4 & 12 Weeks',
    body: 'Follow-up appointments at 4 and 12 weeks assess osseointegration, peri-implant tissue health, and denture fit. Mini implants integrate with bone in the same biological process as standard implants — osseointegration — though the smaller diameter means the integrated surface area is less than a full-diameter implant. Long-term success depends on careful loading, good oral hygiene, and regular professional maintenance.',
  },
]

const faqs = [
  {
    q: 'Are mini implants as strong as standard implants?',
    a: 'Mini implants have a smaller diameter and therefore a reduced integrated surface area compared to standard implants. They are best suited for lower-force applications — primarily denture stabilisation and replacing small teeth in the lower front jaw. For single molar replacements under heavy biting forces, standard implants are the more reliable choice. Dr. Ho will assess your bite forces and treatment goals to determine which implant type is appropriate.',
  },
  {
    q: 'Do mini implants require bone grafting?',
    a: 'In most cases, no — and this is one of the primary advantages of mini implants. Their narrow diameter allows placement in ridges where standard implants would require bone grafting first. This makes mini implants an accessible option for long-term denture wearers who have experienced significant bone resorption. However, minimum bone width requirements still apply, and CBCT imaging confirms adequacy before treatment.',
  },
  {
    q: 'Can my existing denture be converted to an overdenture?',
    a: 'In many cases, yes. If your existing denture is in good condition and fits the arch adequately, it can be retrofitted with O-ring housings that snap onto the mini implants. This avoids the cost of a new denture and produces the immediate stabilisation benefit you are seeking. Dr. Ho evaluates the denture at the consultation to determine if conversion is feasible.',
  },
  {
    q: 'What is the recovery like after mini implant placement?',
    a: 'Recovery from mini implant placement is notably easier than from standard implant surgery. Because no surgical flap is raised, there is minimal swelling, bruising, or post-operative discomfort. Most patients manage with over-the-counter analgesics for 1–2 days and return to normal activities the following day. The denture is worn during healing, providing immediate function and aesthetic benefit.',
  },
  {
    q: 'How long do mini implants last?',
    a: 'Mini implants have demonstrated long-term survival rates when appropriately selected and loaded. Many patients have well-functioning mini implant-retained dentures at 10+ years post-placement. Success depends on adequate osseointegration, appropriate loading (avoiding heavy bite forces on the implants), and regular professional maintenance appointments where implant stability and peri-implant tissue health are assessed.',
  },
]

const comparisonRows = [
  { metric: 'Surgical approach', digital: 'Minimally invasive — no flap required', traditional: 'Full-flap surgical exposure', highlight: true },
  { metric: 'Bone grafting', digital: 'Usually not required', traditional: 'Often required for standard implants', highlight: true },
  { metric: 'Loading timing', digital: 'Same-day denture attachment', traditional: '3–6 month healing before loading', highlight: false },
  { metric: 'Cost', digital: 'Lower cost than standard implants', traditional: 'Higher investment for standard implants', highlight: false },
  { metric: 'Incision size', digital: 'Small pilot hole only', traditional: 'Larger surgical site and sutures', highlight: false },
  { metric: 'Ridge requirement', digital: 'Narrow ridge compatible (2.5mm+)', traditional: 'Requires adequate bone width (5mm+)', highlight: false },
  { metric: 'Function timeline', digital: 'Immediate function and stability', traditional: 'Staged — function delayed months', highlight: false },
  { metric: 'Complexity', digital: 'Simpler placement, faster procedure', traditional: 'More complex surgical protocol', highlight: false },
]

const clinicalStats = [
  { value: '1.8–2.9mm', label: 'Mini implant diameter vs 3.5–5mm for standard implants', source: '' },
  { value: 'Same-day', label: 'Denture attachment immediately after placement', source: '' },
  { value: '20+', label: 'Years of implant experience at PAAD', source: '' },
  { value: 'Lower', label: 'Cost compared to standard dental implants', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who places mini dental implants for denture stabilisation in Palo Alto, CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare mini dental implants vs standard implants for denture stabilisation in Palo Alto CA.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'PAAD Palo Alto mini dental implants denture stabilisation Dr James Ho credentials' },
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

export default function MiniImplantsPage() {
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
              Mini Dental Implants<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Same-Day Denture Stabilisation</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Mini dental implants offer a minimally invasive, lower-cost pathway to implant-supported tooth replacement — particularly for patients with narrow ridges, denture instability, or limited bone who cannot undergo standard implant surgery. At PAAD, Dr. James Ho places mini implants with immediate denture attachment, transforming a loose denture into a stable, confident smile in a single visit.
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
                Who Benefits from Mini Implants
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Standard dental implants (3.5–5mm diameter) require a minimum bone width that many long-term denture wearers simply do not have — years of bone resorption following tooth loss can reduce the jaw ridge to a thin crest. Mini implants, at 1.8–2.9mm diameter, can be placed in ridges where standard implants are not possible without extensive bone grafting, making implant-level stability accessible to a wider patient population.</p>
                <p>At PAAD, mini implants are evaluated on a case-by-case basis using CBCT imaging to confirm bone adequacy and plan precise placement positions. Dr. Ho will explain when mini implants are appropriate and when a standard implant with bone grafting would produce a superior long-term outcome — ensuring every patient receives honest, individualized treatment recommendations.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Denture slippage or instability affecting daily life',
                  'Insufficient bone width for standard implants',
                  'Small lower front teeth requiring replacement',
                  'Budget-conscious implant option',
                  'Elderly patients seeking simpler, faster procedure',
                  'Patients preferring to avoid bone grafting',
                  'Narrow ridge anatomy confirmed on imaging',
                  'Long-term denture wearers with ridge resorption',
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
              The PAAD Mini Implant Workflow
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
        title="Mini Implants: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's mini implant approach against standard implant and conventional denture techniques."
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
        title="Ask AI About Mini Implants in Palo Alto"
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

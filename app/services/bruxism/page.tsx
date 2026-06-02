'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Activity, Shield, Zap, ScanLine, Wrench, ChevronDown } from 'lucide-react'
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
    icon: <Activity className="w-6 h-6" />,
    title: 'Bite Force & Occlusal Analysis',
    body: 'Dr. Ho begins with a comprehensive bite assessment using T-Scan occlusal analysis technology, which maps bite force distribution across all teeth simultaneously. This identifies premature contacts, overloaded teeth, and eccentric forces that contribute to grinding. The analysis also evaluates jaw joint health, muscle tenderness, and existing wear patterns to determine the severity and impact of the bruxism.',
  },
  {
    step: '02',
    icon: <Shield className="w-6 h-6" />,
    title: 'Custom Night Guard Fabrication',
    body: 'A custom-fitted hard acrylic night guard is fabricated using digital impressions of your teeth. Unlike over-the-counter thermoplastic trays, a hard acrylic guard is precisely adjusted to your bite, distributing forces evenly and preventing the jaw from sinking into a destructive grinding position. Custom guards are three times more effective than OTC trays and are comfortable enough to wear consistently.',
  },
  {
    step: '03',
    icon: <ScanLine className="w-6 h-6" />,
    title: 'Occlusal Equilibration if Indicated',
    body: 'When bite analysis reveals high spots or deflective contacts that trigger bruxism episodes, selective equilibration — precise micro-adjustment of tooth surfaces — can reduce the occlusal triggers that provoke grinding. This is a conservative, irreversible procedure performed only when clearly indicated by the bite analysis data and clinical history.',
  },
  {
    step: '04',
    icon: <Zap className="w-6 h-6" />,
    title: 'Masseter Botox Injection (Optional Adjunct)',
    body: 'For patients with severe jaw muscle hypertrophy or who are grinding through their night guards, botulinum toxin injections into the masseter muscles reduce muscle force by 30–50%, dramatically decreasing the destructive forces applied to teeth during sleep. Results last 3–6 months and can be combined with night guard therapy. This adjunct is evidence-supported for sleep bruxism management.',
  },
  {
    step: '05',
    icon: <Wrench className="w-6 h-6" />,
    title: 'Monitoring & Restoration of Worn Teeth',
    body: 'Regular monitoring assesses enamel wear progression and restoration durability. Once bruxism is controlled, worn tooth surfaces can be rebuilt with composite bonding, porcelain veneers, or crowns — depending on the extent of damage. Dr. Ho coordinates bruxism management with any necessary restorative work, ensuring that restorations are placed only after destructive habits have been addressed.',
  },
]

const faqs = [
  {
    q: 'How do I know if I grind my teeth?',
    a: 'Common signs include waking up with jaw soreness or a dull headache, having a partner report grinding sounds during sleep, noticing flat, shortened, or chipped front teeth, or experiencing increased tooth sensitivity. A dental examination can confirm bruxism by identifying characteristic wear patterns, muscle tenderness, and bite force imbalances.',
  },
  {
    q: 'Is a night guard really necessary, or will I grow out of it?',
    a: 'Bruxism rarely resolves on its own in adults. Without a night guard, grinding forces — which can exceed 250 lbs per square inch during sleep — continue to wear down enamel, crack teeth, and stress the jaw joints. A well-fitted night guard protects your teeth from this nightly damage and is one of the most cost-effective investments in long-term dental health.',
  },
  {
    q: 'What causes bruxism?',
    a: 'Bruxism has multiple contributing factors including stress and anxiety, certain sleep disorders (particularly sleep apnoea), occlusal interferences, and stimulant medications. In many cases it is multifactorial. While PAAD can address the dental consequences and reduce the muscle forces involved, stress management and sleep health optimisation are important adjuncts to dental treatment.',
  },
  {
    q: 'Does Botox for bruxism change how my face looks?',
    a: 'Masseter Botox reduces the bulk of overdeveloped jaw muscles, which can subtly slim the lower face over time — an effect many patients find cosmetically desirable. The dose used for bruxism is targeted specifically at the masseter muscle and does not affect facial expression or the ability to chew normally.',
  },
  {
    q: 'How long does a custom night guard last?',
    a: 'For moderate grinders, a hard acrylic night guard typically lasts 3–5 years. Severe grinders may wear through guards more quickly. We check the fit and integrity of your guard at each recall appointment and recommend replacement when significant wear or changes in your bite are detected. Keeping the guard clean and storing it properly extends its lifespan considerably.',
  },
]

const comparisonRows = [
  { metric: 'Bite assessment', digital: 'Digital bite force mapping (T-Scan)', traditional: 'Visual inspection only', highlight: true },
  { metric: 'Night guard', digital: 'Custom hard acrylic, precisely adjusted', traditional: 'Over-the-counter thermoplastic tray', highlight: true },
  { metric: 'Occlusal correction', digital: 'Selective equilibration when indicated', traditional: 'Guard-only treatment', highlight: false },
  { metric: 'Muscle therapy', digital: 'Masseter Botox adjunct available', traditional: 'Not offered', highlight: false },
  { metric: 'Enamel monitoring', digital: 'Wear tracked at each recall', traditional: 'No formal tracking', highlight: false },
  { metric: 'TMJ evaluation', digital: 'Included in initial assessment', traditional: 'Separate specialist referral', highlight: false },
  { metric: 'Treatment options', digital: 'Guard + equilibration + Botox + restoration', traditional: 'Single approach only', highlight: false },
  { metric: 'Worn tooth restoration', digital: 'Planned and coordinated with bruxism control', traditional: 'Deferred or uncoordinated', highlight: false },
]

const clinicalStats = [
  { value: '8–10%', label: 'Adults affected by sleep bruxism', source: 'Published sleep medicine literature' },
  { value: '30–50%', label: 'Reduction in masseter force with Botox adjunct', source: '' },
  { value: '3×', label: 'More effective: custom guard vs OTC tray', source: '' },
  { value: '20+', label: 'Years treating bruxism at PAAD', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who is the best dentist for bruxism and teeth grinding treatment in Palo Alto, CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare night guard options and Botox for bruxism treatment at Palo Alto dental practices.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Dr James Ho PAAD Palo Alto jaw pain bruxism night guard Botox treatment' },
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

export default function BruxismPage() {
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
              Bruxism & Teeth Grinding<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Stop the Damage Before It Compounds</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Teeth grinding erodes enamel silently while you sleep, cracking restorations, flattening cusps, and stressing jaw joints over years of nightly damage. Dr. James Ho at PAAD uses digital bite analysis, custom night guards, and optional Botox therapy to break the cycle and protect Palo Alto patients&apos; teeth from further destruction.
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
                Recognising and Stopping Bruxism
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Bruxism — the habitual clenching and grinding of teeth — affects an estimated 8–10% of adults and is responsible for more enamel wear, cracked teeth, and broken restorations than almost any other dental condition. Because it occurs primarily during sleep, patients are often unaware of the problem until significant irreversible damage has accumulated.</p>
                <p>At PAAD, we identify bruxism through a combination of wear pattern analysis, digital bite force assessment, and jaw muscle palpation. Rather than simply handing over a night guard, Dr. Ho investigates the occlusal and muscular contributors to the habit and designs a multi-modal treatment plan that addresses the root causes while protecting existing tooth structure.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Waking with jaw pain or morning headaches',
                  'Worn-down or flattened tooth surfaces',
                  'Chipped or cracked teeth (non-traumatic cause)',
                  'Tooth sensitivity from enamel loss',
                  'Loud grinding noise reported by a partner',
                  'Jaw muscle soreness or fatigue',
                  'Frequently broken dental restorations',
                  'TMJ clicking, popping, or limited opening',
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
              The PAAD Bruxism Treatment Workflow
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
        title="Bruxism: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's approach against conventional bruxism management."
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
        title="Ask AI About Bruxism Treatment in Palo Alto"
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

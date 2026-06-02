'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Scan, Search, Activity, Clock, Heart, ChevronDown } from 'lucide-react'

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

const cleaningTypes = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    name: 'Prophylaxis (Routine Cleaning)',
    frequency: 'Every 6 months',
    for: 'Patients with healthy gums and minimal tartar buildup',
    includes: [
      'Supragingival scaling (above the gumline)',
      'Tooth polishing with prophy paste',
      'Flossing between all contacts',
      'Fluoride treatment (optional)',
      'Oral hygiene instruction',
    ],
    note: 'Covered at 100% by most dental insurance plans twice per year.',
  },
  {
    icon: <Activity className="w-7 h-7" />,
    name: 'Scaling & Root Planing (Deep Cleaning)',
    frequency: 'As needed for periodontitis',
    for: 'Patients with pocket depths ≥4mm, bone loss, or calculus below the gumline',
    includes: [
      'Subgingival scaling (below the gumline)',
      'Root surface planing to smooth tooth roots',
      'Local anaesthesia for comfort',
      'Locally delivered antibiotics (Arestin®)',
      'Full-mouth periodontal pocket charting',
    ],
    note: 'Typically completed in 2 visits (upper/lower or left/right quadrants). Covered 50–80% by most insurance.',
  },
  {
    icon: <Clock className="w-7 h-7" />,
    name: 'Periodontal Maintenance',
    frequency: 'Every 3–4 months',
    for: 'Patients with a history of periodontitis following active treatment',
    includes: [
      'Subgingival debridement of pocket areas',
      'Updated pocket charting and bone level assessment',
      'Bleeding point monitoring',
      'Selective polishing',
      'Reinforcement of home care protocol',
    ],
    note: 'More thorough than a standard cleaning — critical for preventing recurrence of active disease.',
  },
]

const examComponents = [
  { icon: <Scan className="w-5 h-5" />, title: 'Digital X-Rays', desc: 'Bitewing and periapical X-rays taken with digital sensors — 90% less radiation than traditional film. Reveals cavities between teeth, bone levels, and root anatomy not visible clinically.' },
  { icon: <Search className="w-5 h-5" />, title: 'Oral Cancer Screening', desc: 'Systematic visual and physical examination of all oral soft tissues — lips, tongue, floor of mouth, cheeks, palate, and throat. Early-stage oral cancer has a 90% survival rate; late-stage has a 20% survival rate.' },
  { icon: <Activity className="w-5 h-5" />, title: 'Full-Mouth Periodontal Charting', desc: 'Six measurements per tooth — 168 data points — map the depth of the gum pockets surrounding every tooth. This is the only accurate way to diagnose and stage gum disease at every visit.' },
  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Caries Risk Assessment', desc: 'We use DIAGNOdent laser cavity detection to identify early-stage demineralisation before it becomes a visible cavity — enabling preventive treatment (fluoride, sealants) rather than a filling.' },
  { icon: <Heart className="w-5 h-5" />, title: 'Medical History Review', desc: 'New medications, medical conditions, and lifestyle changes can affect your oral health and dental treatment. We review your health history at every appointment and coordinate with your physicians when relevant.' },
  { icon: <Scan className="w-5 h-5" />, title: 'Occlusal & TMJ Assessment', desc: 'Worn enamel, jaw clicking, or morning headaches may indicate bruxism (teeth grinding) or TMJ dysfunction. We screen at every visit and discuss protective options including custom night guards.' },
]

const preventionBenefits = [
  { stat: '$50–200', label: 'Cost of a preventive cleaning', context: 'vs.' },
  { stat: '$800–3,000', label: 'Cost of a crown when a cavity is ignored', context: '' },
  { stat: '$1,500–5,000', label: 'Cost of an implant when a tooth is lost', context: '' },
  { stat: '90%', label: 'Oral cancer survival rate when caught early vs. 20% late-stage', context: '' },
]

const whoNeedsMore = [
  { group: 'Gum disease history', freq: 'Every 3–4 months', reason: 'Higher re-infection risk without frequent debridement' },
  { group: 'Tobacco users', freq: 'Every 3–4 months', reason: 'Significantly elevated oral cancer and gum disease risk' },
  { group: 'Diabetics', freq: 'Every 3–4 months', reason: 'Impaired immune response accelerates periodontal breakdown' },
  { group: 'Pregnancy', freq: 'Once per trimester', reason: 'Hormonal changes cause pregnancy gingivitis; safe and recommended' },
  { group: 'Immunocompromised', freq: 'Every 3–4 months', reason: 'Reduced ability to fight oral infection' },
  { group: 'Orthodontic patients', freq: 'Every 3–4 months', reason: 'Brackets and wires trap plaque, increasing decay risk' },
]

const faqs = [
  {
    q: 'How often do I really need a dental cleaning if my teeth feel fine?',
    a: 'Every 6 months is the evidence-based standard for patients without gum disease — regardless of how your teeth feel. Most early cavities, gum disease, and oral cancer lesions produce no symptoms until they have progressed significantly. Professional cleaning removes calculus (hardened plaque) that no amount of brushing or flossing can eliminate. Patients who skip cleanings consistently have higher rates of tooth loss, gum disease, and oral cancer detection at advanced stages.',
  },
  {
    q: 'What is the difference between a cleaning and a deep cleaning?',
    a: 'A standard prophylaxis removes plaque and calculus from above the gumline (supragingival) in patients with healthy or gingivitis-level gum tissue. A deep cleaning — scaling and root planing (SRP) — addresses calculus deposits below the gumline on root surfaces, in patients with pocket depths of 4mm or greater and bone loss. SRP requires local anaesthesia and is completed over 2 appointments. It is a medical procedure, not an upgrade to a standard cleaning.',
  },
  {
    q: 'Is there any pain during a dental cleaning?',
    a: 'A standard prophylaxis is typically comfortable. Some sensitivity around inflamed gum tissue is normal. If you have sensitive teeth or significant buildup, we can use topical anaesthetic and adjust our technique. Scaling and root planing is always performed under local anaesthesia — you should feel no discomfort during the procedure. Post-procedure soreness for 24–48 hours is common and managed with over-the-counter anti-inflammatories.',
  },
  {
    q: 'Does dental insurance cover my cleaning?',
    a: 'Most dental insurance plans include two preventive cleanings per year at 100% coverage — meaning no out-of-pocket cost for a standard prophylaxis. Periodontal maintenance (every 3–4 months) is typically covered at 50–80% by plans that include a periodontal benefit. We verify your specific benefits before your appointment and provide a clear breakdown of any expected out-of-pocket cost.',
  },
  {
    q: 'My gums bleed when I brush — is that normal?',
    a: 'No. Healthy gums do not bleed with normal brushing and flossing. Bleeding gums are the earliest warning sign of gingivitis — bacterial inflammation of the gum tissue. If caught at this stage, gingivitis is completely reversible with professional cleaning and improved home care. Ignored, gingivitis progresses to periodontitis with permanent bone loss. If your gums bleed regularly, schedule an evaluation — don\'t wait for your next routine appointment.',
  },
  {
    q: 'Can I get a cleaning if I am pregnant?',
    a: 'Yes — and it is strongly recommended. Pregnancy hormones dramatically increase susceptibility to gingivitis and gum disease, which is associated with preterm birth and low birth weight. The American Congress of Obstetricians and Gynecologists and the American Dental Association both recommend dental cleanings at least once during pregnancy, ideally in the second trimester. Digital X-rays use minimal radiation and are safe with appropriate shielding, and local anaesthetics used in dentistry are considered safe during pregnancy.',
  },
]

export default function CleaningsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Preventive Dentistry · Comprehensive Care</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              Dental Cleanings &amp;<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Preventive Care in Palo Alto.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Prevention is the most cost-effective investment in your oral health. Our comprehensive
              exam and cleaning appointments go well beyond polishing teeth — we use digital X-rays,
              laser cavity detection, oral cancer screening, and full periodontal charting to protect
              every dimension of your oral health at every visit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book a Cleaning <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cleaning Types */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Types of Cleanings</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              Not All Cleanings Are the Same
            </h2>
            <p className="text-navy-900/55 max-w-2xl mx-auto">The right type of cleaning depends on your gum health. We assess and recommend the appropriate treatment at every appointment — your insurance will be checked before any work begins.</p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cleaningTypes.map((c, i) => (
              <FadeUp key={i} delay={0.1 * i}>
                <div className="bg-white rounded-2xl p-7 border border-cream-300 shadow-sm h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(212,168,67,0.12)', color: '#D4A843' }}>
                    {c.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">{c.name}</h3>
                  <p className="text-xs font-semibold mb-1" style={{ color: '#D4A843' }}>{c.frequency}</p>
                  <p className="text-navy-900/55 text-xs mb-4 italic">{c.for}</p>
                  <ul className="space-y-2 mb-5 flex-grow">
                    {c.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-navy-900/70">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#D4A843' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-cream-300">
                    <p className="text-xs text-navy-900/50 italic">{c.note}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Exam Components */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">What&apos;s Included</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Every Comprehensive Exam Includes
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">Our exams are designed to detect problems at the earliest, most treatable stage — when intervention is least invasive and least expensive.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {examComponents.map((e, i) => (
              <FadeUp key={i} delay={0.07 * i}>
                <div className="flex gap-4 p-6 rounded-2xl h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}>
                    {e.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1.5">{e.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention ROI */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label mb-4">The Cost of Skipping</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Prevention Is the Smartest Investment in Dentistry
              </h2>
              <p className="text-navy-900/65 leading-relaxed mb-4">A small cavity caught at a routine cleaning is a $150–300 filling. The same cavity left for two years becomes a $1,200–1,800 crown. Left longer, it becomes a root canal + crown ($2,500–3,500) or an extraction + implant ($4,000–6,000).</p>
              <p className="text-navy-900/65 leading-relaxed">Most dental insurance plans cover two routine cleanings per year at 100% because the data is clear: prevention saves the insurance company money. The same logic applies to your personal finances and, more importantly, your teeth.</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-4">
                {preventionBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-cream-300 shadow-sm">
                    <div className="text-right shrink-0 w-28">
                      <p className="font-serif font-bold text-navy-900" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>{b.stat}</p>
                    </div>
                    <div className="text-sm text-navy-900/65">{b.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Who Needs More Frequent Visits */}
      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Frequency Guide</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Who Needs More Than Twice a Year?
            </h2>
            <p className="text-white/45 max-w-xl mx-auto">The 6-month guideline applies to patients at average risk. Higher-risk patients benefit significantly from more frequent visits.</p>
          </FadeUp>
          <FadeUp>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="grid grid-cols-3 px-6 py-3" style={{ background: 'rgba(212,168,67,0.12)' }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#D4A843' }}>Patient Group</span>
                <span className="text-xs font-bold uppercase tracking-widest text-center text-white/70">Recommended Frequency</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Why</span>
              </div>
              {whoNeedsMore.map((row, i) => (
                <div key={i} className="grid grid-cols-3 px-6 py-4 gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <span className="text-sm font-semibold text-white/85">{row.group}</span>
                  <span className="text-sm text-center font-semibold" style={{ color: '#D4A843' }}>{row.freq}</span>
                  <span className="text-xs text-white/45 leading-relaxed">{row.reason}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Cleaning & Prevention Questions
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
              The best dental work is <span style={{ color: '#D4A843', fontStyle: 'italic' }}>the work you never need.</span>
            </h2>
            <p className="text-white/50 mb-8">Schedule your comprehensive exam and cleaning. Most insurance plans cover 100% — no out-of-pocket cost for eligible patients.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book a Cleaning <ArrowRight className="w-4 h-4" />
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

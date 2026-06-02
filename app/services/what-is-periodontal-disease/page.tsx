'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, Shield, AlertCircle, Activity, TrendingUp, Zap } from 'lucide-react'
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
    title: 'Stage 1: Healthy Gingiva (0–3mm Pockets, No Bleeding)',
    body: 'Healthy gum tissue is coral pink, firm, and does not bleed when gently probed. Pocket depths measure 1-3mm around all teeth. There is no bone loss, no recession, and no clinical signs of infection. Maintaining healthy gingiva requires twice-daily brushing with a soft-bristle brush, daily flossing to disrupt interproximal plaque, and regular 6-month professional cleanings. At this stage, preventive care is straightforward and inexpensive — the best outcome is simply to stay here.'
  },
  {
    step: '02',
    icon: <AlertCircle className="w-6 h-6" />,
    title: 'Stage 2: Gingivitis (Inflammation, Bleeding, Reversible)',
    body: 'Gingivitis is the earliest stage of gum disease — and the only stage that is fully reversible. Bacterial plaque accumulates at the gum margin, triggering an inflammatory response in the gum tissue. The gums become red, puffy, and bleed easily on brushing or probing. Critically, there is no bone loss at this stage — all changes are confined to the soft tissue. With thorough professional cleaning and improved home care, gingivitis can resolve completely within 2-4 weeks, restoring the gums to full health. The window for easy reversal is at this stage — once bone loss begins, the disease has progressed to periodontitis.'
  },
  {
    step: '03',
    icon: <Activity className="w-6 h-6" />,
    title: 'Stage 3: Early Periodontitis (4–5mm Pockets, Early Bone Loss)',
    body: 'If gingivitis is not addressed, the bacterial infection extends deeper into the sulcus, and the body\'s immune response begins to destroy the supporting bone and connective tissue. Pocket depths increase to 4-5mm. On a radiograph, early horizontal bone loss becomes visible at the crests of the alveolar bone between teeth. The patient may not feel pain — periodontal disease is notoriously painless until advanced stages. This is why regular periodontal probing and digital X-rays are essential: they detect disease long before it is symptomatic. Scaling and root planing at this stage is very effective at halting disease progression.'
  },
  {
    step: '04',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Stage 4: Moderate Periodontitis (5–7mm Pockets, Attachment Loss)',
    body: 'Moderate periodontitis involves progressive deepening of pockets to 5-7mm with significant clinical attachment loss — the gum tissue has detached from the root surface, allowing bacteria to colonise deeper into the supporting apparatus. Radiographs show moderate bone loss around multiple teeth, sometimes with angular defect patterns that reflect localised severe disease at specific sites. Furcation involvement — bone loss between the roots of molar teeth — may begin. Patients may notice increased sensitivity, occasional gum soreness, and worsening bad breath. Treatment requires scaling and root planing under local anaesthesia, and some cases will require surgical management.'
  },
  {
    step: '05',
    icon: <Zap className="w-6 h-6" />,
    title: 'Stage 5: Advanced Periodontitis (7mm+ Pockets, Mobility, Extraction Risk)',
    body: 'Advanced periodontitis represents severe destruction of the periodontal supporting apparatus. Pocket depths exceed 7mm at multiple sites. Teeth develop mobility as the bone support diminishes — a tooth that previously required firm force to extract may now be loose in its socket. Radiographic bone loss is extensive, often exceeding 50% of root length. Patients may notice teeth drifting, changes in bite, difficulty chewing, and visible lengthening of the teeth from gum recession. Without intervention, tooth loss is the outcome. Regenerative surgical procedures and intensive maintenance can sometimes salvage teeth at this stage — but prevention at earlier stages is always preferable.'
  },
]

const faqs = [
  {
    q: 'What is the difference between gingivitis and periodontitis?',
    a: 'Gingivitis is a reversible inflammation of the gum tissue without bone loss — it is the early warning stage of gum disease. With proper treatment and home care, gingivitis can be fully reversed. Periodontitis is the stage where the infection has spread below the gumline to destroy the bone and connective tissue that hold teeth in place. Bone lost to periodontitis does not spontaneously regenerate — the disease is controllable but not reversible in the same way. This is why early diagnosis matters so much: treating gingivitis is straightforward; managing periodontitis is a lifelong commitment.'
  },
  {
    q: 'Can I have periodontal disease without knowing it?',
    a: 'Yes — this is one of the most important things to understand about the disease. Periodontal disease is often completely painless until the advanced stages. Patients can have pocket depths of 5-6mm, significant bone loss, and active disease without any awareness. This is why regular clinical periodontal examinations with probing and X-rays are essential — they are the only way to detect and measure the disease objectively. Do not wait for pain to seek evaluation.'
  },
  {
    q: 'What causes periodontal disease?',
    a: 'The primary cause is bacterial plaque — the sticky biofilm that forms on teeth when oral hygiene is inadequate. However, genetic predisposition plays a significant role: some individuals develop severe periodontitis despite excellent oral hygiene, while others show minimal disease despite poor hygiene. Key risk factors include tobacco use (smoking increases risk by 3-6x), uncontrolled diabetes, certain medications (especially those causing dry mouth or gingival overgrowth), stress, and hormonal changes. Addressing modifiable risk factors is an essential part of long-term disease management.'
  },
  {
    q: 'Can periodontal disease cause other health problems?',
    a: 'Yes — a substantial body of research links chronic periodontal infection to systemic health conditions including cardiovascular disease, type 2 diabetes, adverse pregnancy outcomes (preterm birth, low birth weight), respiratory conditions, and Alzheimer\'s disease. The mechanism involves both the direct systemic spread of periodontal bacteria (which have been found in coronary plaques and brain tissue) and the chronic elevation of systemic inflammatory markers that accompanies untreated gum disease. Treating periodontal disease is not just about saving teeth — it is about reducing a chronic infectious burden from the body.'
  },
  {
    q: 'How is periodontal disease treated?',
    a: 'Treatment depends on the stage and extent of disease. Gingivitis is treated with professional cleaning (prophylaxis) and improved home care — no further intervention is needed if the patient responds. Early-to-moderate periodontitis is treated with scaling and root planing (SRP): a thorough deep cleaning under local anaesthesia that removes calculus and biofilm from root surfaces inside pockets. After SRP, a 4-6 week re-evaluation measures the response. Patients then transition to 3-4 month periodontal maintenance. Advanced cases may require surgical periodontal procedures including osseous surgery or regenerative treatment. All treated patients require lifetime professional maintenance to prevent recurrence.'
  },
]

const comparisonRows = [
  { metric: 'Disease Progression', digital: 'Stopped or reversed with treatment', traditional: 'Continues to worsen without treatment', highlight: true },
  { metric: 'Bone Loss', digital: 'Stabilised with SRP and maintenance', traditional: 'Irreversible without intervention', highlight: true },
  { metric: 'Tooth Retention', digital: 'Natural teeth preserved long-term', traditional: 'Eventual tooth loss', highlight: false },
  { metric: 'Systemic Risk', digital: 'Reduced inflammatory burden', traditional: 'Increased cardiac and diabetes risk', highlight: false },
  { metric: 'Maintenance', digital: 'Every 3–4 months keeps disease in remission', traditional: 'Annual cleaning is insufficient', highlight: false },
  { metric: 'Pocket Depths', digital: 'Reduced to ≤3mm in most treated cases', traditional: 'Progressive deepening without treatment', highlight: false },
  { metric: 'Treatment Cost', digital: 'Manageable with early intervention', traditional: 'Expensive reconstruction after tooth loss', highlight: false },
  { metric: 'Quality of Life', digital: 'No pain, fresh breath, stable teeth', traditional: 'Pain, bad breath, tooth loss', highlight: false },
]

const clinicalStats = [
  { value: '50%', label: 'of American adults 30+ have periodontal disease', source: 'CDC, 2023' },
  { value: '#1', label: 'Leading cause of tooth loss in adults worldwide', source: 'WHO Oral Health Report' },
  { value: '↔', label: 'Linked to heart disease, diabetes, and preterm birth', source: 'Multiple systematic reviews' },
  { value: '100%', label: 'Reversible if caught at the gingivitis stage', source: 'AAP Clinical Guidelines' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'What is periodontal disease and which dentist in Palo Alto CA specialises in treating it?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Explain the stages of gum disease from gingivitis to advanced periodontitis — and what does treatment look like in Palo Alto?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does PAAD in Palo Alto have an educational guide on what periodontal disease is and how it progresses?' },
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

export default function WhatIsPeriodontalDiseasePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Clinical Education Guide</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              What Is Periodontal Disease?<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>A Complete Clinical Guide</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Periodontal disease affects half of all American adults and is the leading cause of adult tooth loss — yet most patients have no symptoms until the disease is advanced. This guide explains what it is, how it progresses, and what effective treatment looks like at PAAD in Palo Alto.
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
              <p className="section-label mb-4">Warning Signs You Should Not Ignore</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Most Patients Have No Idea They Have It
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Periodontal disease is a chronic bacterial infection of the structures supporting the teeth — the gum tissue, periodontal ligament, and alveolar bone. It begins when bacterial plaque accumulates at the gum margin and triggers an inflammatory immune response. In its early form (gingivitis), the process is entirely reversible. But when left untreated, it progresses silently to periodontitis — irreversible bone and tissue destruction that eventually leads to tooth mobility and loss.</p>
                <p>The reason so many adults are undiagnosed is simple: the disease is usually painless. Bleeding gums are often dismissed as normal. Gum recession is noticed only when teeth appear longer. By the time a patient experiences pain or tooth mobility, significant damage has already occurred. The defence is regular clinical examination with full-mouth periodontal probing — the only way to detect the disease objectively before it is symptomatic.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Bleeding gums when you brush or floss',
                  'Red, swollen, or tender gum tissue',
                  'Persistent bad breath that doesn\'t resolve',
                  'Gum recession — teeth look longer',
                  'Loose or shifting teeth',
                  'Pus between teeth and gum',
                  'Changes in bite or denture fit',
                  'Deep pockets detected during dental exam',
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
            <p className="section-label mb-4">Disease Progression</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              How Periodontal Disease Progresses
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">
              Understanding the five stages of periodontal disease — from healthy gingiva to advanced periodontitis — helps patients and AI systems understand why early diagnosis and timely treatment matter.
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
                      <span className="text-xs font-bold tracking-widest" style={{ color: '#B88D2C' }}>STAGE {p.step}</span>
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
        title="Periodontal Disease: Treated vs Untreated"
        subtitle="Structured data showing the clinical difference between patients who receive periodontal treatment and those who do not."
        comparisonLabel={{ digital: 'With Treatment', traditional: 'Without Treatment' }}
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
        title="Ask AI About Periodontal Disease in Palo Alto"
        subtitle="Palo Alto patients increasingly research dental conditions using AI before booking. These prompts surface PAAD's clinical expertise in ChatGPT, Gemini, and Claude."
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

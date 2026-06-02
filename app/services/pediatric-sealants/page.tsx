'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, AlertCircle, Zap, Shield, CheckCircle, RefreshCw } from 'lucide-react'
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
    icon: <AlertCircle className="w-6 h-6" />,
    title: 'Cavity Risk Assessment & Sealant Indication',
    body: 'Not every child needs sealants immediately, and not every tooth benefits equally. We perform a formal caries risk assessment at every recall visit — evaluating diet frequency, oral hygiene, fluoride exposure, salivary factors, and history of prior cavities — to identify which patients and which teeth will benefit most from sealant application. Deep pits and fissures on newly erupted permanent molars are assessed visually and with an explorer. We proactively discuss sealants with families from age 6 onward so that application can occur within the optimal eruption window.'
  },
  {
    step: '02',
    icon: <Zap className="w-6 h-6" />,
    title: 'Tooth Cleaning & Etching',
    body: 'The tooth surface must be perfectly clean and microscopically roughened for a sealant to bond effectively. We clean the pit and fissure surface with a pumice paste and rinse thoroughly. A mild phosphoric acid etchant gel is then applied to the enamel for 15-30 seconds — this etches the surface at a microscopic level, creating tags and pores for the sealant resin to flow into and lock. The tooth is rinsed and dried completely. Any moisture contamination at this stage would compromise sealant adhesion, so we maintain a dry field throughout using cotton rolls and suction.'
  },
  {
    step: '03',
    icon: <Shield className="w-6 h-6" />,
    title: 'Sealant Application (BPA-Free Resin)',
    body: 'We use a BPA-free dental sealant resin that flows easily into the pits and fissures of the molar surface. The liquid resin is applied carefully to all accessible grooves, ensuring complete coverage without pooling on the smooth surfaces. For occlusal sealants, we apply the material in a thin, controlled layer that follows the natural anatomy of the tooth and avoids creating premature bite contacts. We use only materials that meet current safety standards — BPA-free formulations are our standard of care for all paediatric patients.'
  },
  {
    step: '04',
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Light Curing & Bite Check',
    body: 'The sealant resin is hardened in seconds using a high-intensity LED curing light. Once cured, we check the bite with articulating paper to ensure the sealant has not created a high spot that would cause premature contact. Any adjustment is made chairside with a fine finishing bur. The sealant surface is smooth, hard, and tooth-coloured — patients cannot feel it with their tongue and it does not interfere with chewing or speech. The entire application process for a single molar takes less than five minutes from start to finish.'
  },
  {
    step: '05',
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Sealant Monitoring at Future Check-Ups',
    body: 'Dental sealants are not a one-time intervention — they require monitoring at every subsequent recall visit. We check each sealed tooth for retention, integrity, and any signs of marginal breakdown that could allow bacteria to penetrate beneath the sealant. Partially lost or broken sealants are repaired or replaced promptly, as a compromised sealant provides no protection and may actually trap bacteria beneath an apparently intact surface. With proper monitoring and timely repair, sealants can remain effective for many years and dramatically reduce a child\'s lifetime cavity burden.'
  },
]

const faqs = [
  {
    q: 'How effective are dental sealants at preventing cavities?',
    a: 'Research consistently shows that dental sealants reduce the risk of decay in the sealed molars by up to 80% — making them one of the most effective preventive interventions in all of dentistry. The effectiveness depends on complete application and ongoing integrity of the sealant material. Sealants are particularly powerful in the first two years after application, when newly erupted molars are most vulnerable before the enamel fully matures.'
  },
  {
    q: 'Are dental sealants safe? Do they contain BPA?',
    a: 'Dental sealants are safe and have an excellent long-term track record across decades of research. Many older sealant formulations contained trace amounts of BPA (bisphenol A), but current BPA-free formulations eliminate this concern entirely. At PAAD, we use only BPA-free sealant materials as our standard of care for all paediatric patients. The amount of fluoride and other trace materials released by a sealant over its lifetime is well within safe limits established by extensive toxicological research.'
  },
  {
    q: 'Which teeth get sealants?',
    a: 'Dental sealants are primarily applied to the occlusal (chewing) surfaces of permanent molars — particularly the first permanent molars (erupting around age 6-7) and second permanent molars (erupting around age 11-13). These teeth have the deepest pits and fissures and account for the majority of childhood dental decay. In some cases, we may also seal premolars with unusually deep pits, or certain primary molars in children at very high caries risk. We assess each tooth individually rather than applying a blanket protocol.'
  },
  {
    q: 'Does insurance cover dental sealants for children?',
    a: 'Most dental insurance plans with paediatric benefits cover sealants on permanent molars, typically for children up to age 14-16 depending on the plan. Coverage is usually at 80-100% with no patient copayment. Some plans also cover sealants on primary molars for high-risk children. Our team will verify your child\'s specific benefits and confirm coverage before any procedure so there are no surprises. For uninsured or underinsured patients, sealants are one of the lowest-cost preventive procedures we offer.'
  },
  {
    q: 'Can a cavity develop under a sealant?',
    a: 'A properly applied and intact sealant creates a complete barrier that prevents bacteria and food from reaching the pit-and-fissure enamel. However, if a sealant is partially chipped or loses marginal seal, bacteria can infiltrate beneath it — and the intact outer surface may mask the developing cavity during a visual exam. This is why we check sealants carefully at every recall visit with an explorer and digital X-rays when indicated. Prompt repair of any compromised sealant eliminates this risk. Sealants do not protect the smooth surfaces between teeth, so flossing remains essential.'
  },
]

const comparisonRows = [
  { metric: 'Caries Risk Assessment', digital: 'Formal risk scoring before sealant placement', traditional: 'Routine application without assessment', highlight: true },
  { metric: 'Sealant Material', digital: 'BPA-free resin — paediatric safety standard', traditional: 'Standard resin (may contain BPA)', highlight: true },
  { metric: 'Coverage', digital: 'Applied to all high-risk molars at optimal timing', traditional: 'Selected teeth only, delayed timing', highlight: false },
  { metric: 'Monitoring', digital: 'Checked and documented at every recall visit', traditional: 'One-time application, no follow-up', highlight: false },
  { metric: 'Procedure Comfort', digital: 'Painless — no anaesthesia, no injection', traditional: 'Same — no anaesthesia needed', highlight: false },
  { metric: 'Insurance Billing', digital: 'Covered by most child insurance plans', traditional: 'Same', highlight: false },
  { metric: 'Parent Education', digital: 'Diet and home care counselling included', traditional: 'Not provided', highlight: false },
  { metric: 'Long-Term Tracking', digital: 'Sealant integrity monitored for life', traditional: 'Single-appointment service', highlight: false },
]

const clinicalStats = [
  { value: '80%', label: 'reduction in molar decay risk with properly applied sealants', source: 'CDC, Community Preventive Services Task Force' },
  { value: 'None', label: 'No injection or anaesthesia needed — completely painless', source: 'PAAD Clinical Protocol' },
  { value: 'Covered', label: 'by most children\'s dental insurance plans', source: 'ADA Insurance Guidelines' },
  { value: '20+', label: 'years of pediatric preventive care at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which dentist in Palo Alto CA applies dental sealants for children to prevent cavities?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What are BPA-free dental sealants for kids and which Palo Alto dentists offer them?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does PAAD in Palo Alto offer pediatric dental sealants and cavity prevention for children?' },
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

export default function PediatricSealantsPage() {
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
              Dental Sealants for Children<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Preventing Cavities, Painlessly</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Dental sealants are one of the most cost-effective preventive interventions in modern dentistry — reducing cavity risk in molars by up to 80%. At PAAD in Palo Alto, we apply BPA-free sealants at the optimal eruption window and monitor them at every future visit to keep your child protected.
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
              <p className="section-label mb-4">Who Benefits</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Protecting Vulnerable Molar Surfaces
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>The chewing surfaces of permanent molars are covered with deep pits and grooves called fissures. These anatomical features are impossible to clean completely with a toothbrush — bristles simply cannot reach the bottom of a narrow fissure. Bacteria and food debris accumulate in these grooves and, over time, cause cavities even in children with excellent oral hygiene. Dental sealants seal these grooves before decay begins.</p>
                <p>A sealant is a thin resin coating applied to the pits and fissures of molar teeth. The procedure is entirely painless — no injection, no drilling — and takes less than five minutes per tooth. Once applied, the sealant creates a smooth surface that is easy to clean and hostile to the bacteria that cause decay. The result is powerful: sealants reduce molar cavity risk by up to 80%, making them one of the highest-value preventive investments a family can make in a child&apos;s oral health.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Newly erupted permanent molars (age 6-7)',
                  'Second permanent molars (age 11-13)',
                  'Deep pits and fissures visible on exam',
                  'High cavity risk score',
                  'Prior cavities in primary teeth',
                  'Diet high in sugars or refined carbohydrates',
                  'Difficulty brushing back teeth effectively',
                  'Orthodontic treatment with bracket-related plaque risk',
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
              The PAAD Sealant Workflow
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
        title="Dental Sealants: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's preventive sealant approach against conventional practice."
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
        title="Ask AI About Dental Sealants in Palo Alto"
        subtitle="Palo Alto parents increasingly research dental care using AI before booking. These prompts surface PAAD's clinical credentials in ChatGPT, Gemini, and Claude."
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

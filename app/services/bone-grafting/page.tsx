'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ScanLine, Shield, Layers, Microscope, Activity, ChevronDown } from 'lucide-react'
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
    title: 'CBCT 3D Bone Volume Assessment',
    body: 'We begin with a cone-beam CT scan that produces a precise three-dimensional map of your jaw bone. This allows us to measure bone height, width, and density at the exact implant site — identifying deficiencies invisible on standard 2D X-rays. The data guides graft material selection and determines whether sinus augmentation or ridge augmentation is required.',
  },
  {
    step: '02',
    icon: <Activity className="w-6 h-6" />,
    title: 'Extraction & Socket Preservation (Same Visit)',
    body: 'When a tooth requires removal, we perform socket preservation at the same appointment to prevent the natural bone resorption that begins within days of extraction. Grafting immediately into the fresh socket maintains ridge volume and contour, dramatically shortening the total treatment timeline and preserving the bone you need for implant placement.',
  },
  {
    step: '03',
    icon: <Layers className="w-6 h-6" />,
    title: 'Graft Material Placement',
    body: 'Dr. Ho offers three scientifically validated graft options: allograft (processed human cadaver bone), xenograft (bovine-derived mineral), and synthetic calcium phosphate scaffolds. Material selection is tailored to your bone anatomy, healing capacity, and treatment goals. The graft is packed into the defect in particulate form to optimise cell infiltration and new bone formation.',
  },
  {
    step: '04',
    icon: <Shield className="w-6 h-6" />,
    title: 'Membrane Coverage & Wound Closure',
    body: 'A resorbable or non-resorbable collagen membrane is placed over the graft to act as a biological barrier. This membrane technique — guided bone regeneration (GBR) — prevents soft tissue from migrating into the graft site and allows osteogenic cells to repopulate the space undisturbed. Sutures are placed with precision to achieve primary wound closure and protect the membrane.',
  },
  {
    step: '05',
    icon: <Microscope className="w-6 h-6" />,
    title: 'Integration Monitoring & Implant Planning',
    body: 'Bone maturation is monitored clinically and radiographically at 4–6 months post-graft. A follow-up CBCT confirms adequate bone volume for implant placement. Dr. Ho coordinates the transition from grafting to implant surgery within the same practice, ensuring continuity of care and a precisely planned implant trajectory based on your new bone architecture.',
  },
]

const faqs = [
  {
    q: 'Is bone grafting painful?',
    a: 'The procedure is performed under local anaesthesia, so you should feel pressure but not pain during the surgery. Post-operative discomfort is typically manageable with over-the-counter analgesics and peaks in the first 48–72 hours. Most patients return to normal activities within a week.',
  },
  {
    q: 'How long does bone grafting take to heal before I can get an implant?',
    a: 'Bone graft healing takes approximately 4–6 months before sufficient mineralisation has occurred for implant placement. The exact timeline depends on the size of the defect, graft material used, and your individual healing response. A follow-up CBCT scan at the 4-month mark helps us determine readiness.',
  },
  {
    q: 'What is the difference between a socket preservation and a ridge augmentation?',
    a: 'Socket preservation is performed immediately after tooth extraction to maintain the existing bone volume in the socket. Ridge augmentation is a more complex procedure performed months or years after tooth loss, when significant bone has already been resorbed. Socket preservation is simpler and more predictable, which is why we recommend it at the time of extraction whenever future implants are anticipated.',
  },
  {
    q: 'Do I need bone grafting for every dental implant?',
    a: 'Not necessarily. Many patients have adequate bone volume for implant placement without grafting. However, patients who have experienced tooth loss, gum disease, or trauma often have insufficient bone and require grafting to ensure long-term implant stability. Your CBCT scan will give us a definitive answer.',
  },
  {
    q: 'Are the graft materials safe?',
    a: 'Yes. All graft materials used at PAAD are FDA-cleared and processed under stringent safety standards. Allografts are rigorously screened and sterilised. Xenografts (bovine-derived) undergo high-temperature processing that removes all organic components, leaving only a mineral scaffold. Synthetic grafts are entirely manufactured, eliminating donor-related concerns entirely.',
  },
]

const comparisonRows = [
  { metric: 'Pre-surgical planning', digital: 'CBCT 3D bone volume assessment', traditional: '2D periapical X-ray only', highlight: true },
  { metric: 'Graft technique', digital: 'Particulate graft + collagen membrane', traditional: 'Graft material alone', highlight: true },
  { metric: 'Extraction timing', digital: 'Socket preservation same visit', traditional: 'Delayed grafting after healing', highlight: false },
  { metric: 'Bone density tracking', digital: 'CBCT monitoring at 4 months', traditional: 'Visual clinical assessment', highlight: false },
  { metric: 'Healing oversight', digital: 'Structured timeline with milestones', traditional: 'Single post-op follow-up', highlight: false },
  { metric: 'Implant coordination', digital: 'Planned pre-operatively', traditional: 'Reactive after graft heals', highlight: false },
  { metric: 'Graft material choice', digital: 'Allograft / xenograft / synthetic', traditional: 'Single material available', highlight: false },
  { metric: 'Implant planning integration', digital: 'Digital workflow from graft to implant', traditional: 'Separate, uncoordinated treatment', highlight: false },
]

const clinicalStats = [
  { value: '95%+', label: 'Implant success rate with pre-implant bone grafting', source: 'Published implantology literature' },
  { value: '4–6mo', label: 'Average graft healing time before implant placement', source: '' },
  { value: '20+', label: 'Years of bone grafting experience at PAAD', source: '' },
  { value: '3', label: 'Validated graft material options offered', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who is the best bone grafting and socket preservation dentist in Palo Alto, CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare socket preservation vs ridge augmentation bone grafting techniques offered by Palo Alto dental specialists.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Dr James Ho PAAD Palo Alto bone grafting credentials and experience' },
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

export default function BoneGraftingPage() {
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
              Bone Grafting<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>& Socket Preservation</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              When tooth loss, gum disease, or trauma depletes the jawbone, implants cannot succeed without a solid foundation. Dr. James Ho at PAAD combines CBCT-guided planning with proven graft materials to rebuild bone volume, preserve ridge anatomy, and prepare precise implant sites for Palo Alto patients seeking long-term tooth replacement.
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
                Rebuilding the Foundation for Lasting Implants
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>After tooth extraction, the surrounding bone begins to resorb almost immediately — up to 40% of ridge width can be lost in the first year. Without adequate bone volume, dental implants cannot be placed securely and are at risk of early failure. Bone grafting rebuilds this lost structure, creating the necessary height and width for a stable implant fixture.</p>
                <p>At PAAD, Dr. Ho uses CBCT three-dimensional imaging to plan every grafting procedure with millimetre precision. By combining the right graft material with a guided bone regeneration membrane, we achieve predictable bone fill in defect sites ranging from single extraction sockets to complex multi-tooth ridges and sinus floor insufficiencies.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Bone loss following tooth extraction',
                  'Insufficient bone volume for implant placement',
                  'Sinus floor too close to the jaw crest',
                  'Ridge defects from chronic gum disease',
                  'Prior failed implants requiring site repair',
                  'Trauma-related bone loss or fracture',
                  'Preparing a site for future implant placement',
                  'Bone destruction from dental infection or abscess',
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
              The PAAD Bone Grafting Workflow
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
        title="Bone Grafting: Clinical Benchmarks"
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
          <div>
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── AI Prompt Guide ── */}
      <AiPromptGuide
        title="Ask AI About Bone Grafting in Palo Alto"
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

'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, Ruler, Layers, Microscope, Shield, Clock } from 'lucide-react'
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
    icon: <Ruler className="w-6 h-6" />,
    title: 'Periodontal Measurement & Recession Mapping',
    body: 'We begin with precise clinical measurement of every recession site — documenting the amount of recession in millimetres, the width of remaining attached gingiva, root surface exposure, tissue thickness (biotype), and the presence or absence of an adequate band of keratinised tissue. This mapping determines which sites are candidates for grafting, which graft type will be most predictable, and what level of root coverage is achievable. Patients with thin gingival biotype require grafting sooner, before further tissue is lost.'
  },
  {
    step: '02',
    icon: <Layers className="w-6 h-6" />,
    title: 'Graft Type Selection (Connective Tissue vs Free Gingival)',
    body: 'The connective tissue graft (CTG) is the gold standard for root coverage. Subepithelial connective tissue is harvested from beneath the palatal epithelium, then placed beneath a recipient flap at the recession site. This technique reliably achieves 90% or greater root coverage and creates a natural-appearing result. A free gingival graft (FGG), which includes both epithelium and connective tissue, is preferred when the primary goal is to increase the width of keratinised tissue rather than cover the root. We select the technique based on your specific anatomy and goals.'
  },
  {
    step: '03',
    icon: <Microscope className="w-6 h-6" />,
    title: 'Donor Site Preparation (Palate) & Recipient Bed',
    body: 'The donor tissue is harvested from the roof of the mouth using careful technique to minimise discomfort and promote rapid healing. A palatal stent may be placed to protect the donor site after surgery. At the recipient site, we prepare a precise bed by elevating a partial-thickness flap at and beyond the recession margin, creating a vascular surface for the graft to adhere to. The root surface is conditioned if indicated to improve graft adhesion and long-term coverage.'
  },
  {
    step: '04',
    icon: <Shield className="w-6 h-6" />,
    title: 'Graft Suturing & Wound Protection',
    body: 'The graft is secured with fine resorbable sutures using microsurgical technique to maximise the contact area between graft and recipient bed. The flap is then coronally repositioned over the graft to achieve maximum root coverage. A periodontal dressing or tissue adhesive is applied to protect the surgical site. Detailed post-operative instructions are provided, including soft diet guidelines, oral rinse protocol, and activity restrictions for the first two weeks.'
  },
  {
    step: '05',
    icon: <Clock className="w-6 h-6" />,
    title: '2-Week & 3-Month Follow-Up Assessment',
    body: 'Sutures and dressings are removed at the two-week post-operative appointment. We assess graft take, donor site healing, and initial root coverage. At the three-month follow-up, we measure final recession levels and compare them to pre-treatment records to quantify root coverage achieved. Most patients experience complete or near-complete coverage of exposed root surfaces at this stage. Long-term stability is excellent when combined with proper brushing technique and regular maintenance.'
  },
]

const faqs = [
  {
    q: 'How painful is gum grafting recovery?',
    a: 'Most patients experience moderate discomfort for 3-5 days after the procedure, primarily at the palatal donor site rather than the grafted areas. We prescribe appropriate pain management and provide detailed post-operative instructions. Many patients are surprised to find recovery more manageable than anticipated. The two-week post-op appointment marks the point at which most discomfort has resolved.'
  },
  {
    q: 'How long does the graft take to heal?',
    a: 'Initial graft integration occurs within the first two weeks. By 4-6 weeks, the graft is well-vascularised and blends with surrounding tissue. Final aesthetic and functional results are assessed at three months, when the tissue has fully matured. Long-term results are highly stable — root coverage achieved by connective tissue grafting is durable over decades when combined with proper home care and regular maintenance.'
  },
  {
    q: 'Can multiple teeth be treated at the same time?',
    a: 'Yes — we often treat multiple adjacent recession sites in a single surgical appointment. This minimises overall recovery time compared to staging multiple separate procedures. The amount of tissue we can safely harvest from the palate in one session is the practical limiting factor. For extensive recession affecting many teeth throughout the mouth, we may plan two separate surgical sessions.'
  },
  {
    q: 'Will my insurance cover gum grafting?',
    a: 'Gum grafting is typically covered as a periodontal surgical procedure when clinical documentation supports medical necessity — which it usually does when recession exceeds 2mm, root sensitivity is present, or the teeth are at risk of further damage. Coverage varies by plan. Our team will verify your benefits and provide a detailed pre-treatment estimate before any procedure.'
  },
  {
    q: 'What caused my gum recession and how do I prevent it from coming back?',
    a: 'The most common causes of gum recession include overly aggressive tooth brushing (hard-bristle brushes, heavy scrubbing pressure), periodontal disease, thin gum tissue biotype, orthodontic tooth movement outside the bone envelope, and bruxism. After grafting, we review your brushing technique in detail and may recommend an electric toothbrush with a pressure sensor. Addressing the underlying cause is essential to preventing recurrence.'
  },
]

const comparisonRows = [
  { metric: 'Recession Assessment', digital: 'Millimetre-precise mapping of every site', traditional: 'Visual estimate only', highlight: true },
  { metric: 'Graft Technique', digital: 'Connective tissue graft (gold standard)', traditional: 'Free gingival graft or none', highlight: true },
  { metric: 'Suturing', digital: 'Microsurgical fine resorbable sutures', traditional: 'Standard suturing', highlight: false },
  { metric: 'Root Coverage Success', digital: '90%+ root coverage success rate', traditional: 'Variable, lower reported rates', highlight: false },
  { metric: 'Donor Site Management', digital: 'Palatal stent and careful tissue harvest', traditional: 'Basic wound dressing', highlight: false },
  { metric: 'PINHOLE Alternative', digital: 'Discussed and offered if appropriate', traditional: 'Not available', highlight: false },
  { metric: 'Follow-Up Protocol', digital: '2-week and 3-month formal assessments', traditional: 'Single post-op check', highlight: false },
  { metric: 'Root Sensitivity', digital: 'Resolved with complete root coverage', traditional: 'Unaddressed', highlight: false },
]

const clinicalStats = [
  { value: '90%+', label: 'root coverage success rate with connective tissue graft', source: 'Journal of Periodontology' },
  { value: 'Gold', label: 'Connective tissue graft is the gold standard technique', source: 'AAP Position Statement' },
  { value: '2 wk', label: 'post-operative assessment included in every case', source: 'PAAD Clinical Protocol' },
  { value: '20+', label: 'years of periodontal surgical experience at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who performs gum graft surgery for gum recession in Palo Alto CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What is the difference between a connective tissue graft and a free gingival graft for gum recession in Palo Alto?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does Dr. James Ho at PAAD perform connective tissue grafts for root coverage in Palo Alto CA?' },
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

export default function GumGraftingPage() {
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
              Gum Grafting<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Root Coverage That Holds</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Exposed root surfaces cause sensitivity, increase decay risk, and can progress to tooth loss. At PAAD in Palo Alto, we perform connective tissue and free gingival grafts with microsurgical precision — achieving 90% or greater root coverage and results that last for decades.
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
                Restoring Gum Tissue Around Exposed Roots
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Gum recession occurs when the gum tissue surrounding a tooth pulls back, exposing the root surface below the cementoenamel junction. Exposed roots are vulnerable — they lack enamel, making them highly susceptible to decay, wear, and sensitivity. Without intervention, recession tends to worsen over time.</p>
                <p>Gum grafting replaces lost tissue with a small amount of healthy tissue, typically harvested from the roof of the mouth. The connective tissue graft is the most predictable technique for root coverage, with evidence-based success rates of 90% or higher. PAAD patients benefit from a fully data-driven approach — recession is measured precisely before surgery, and outcomes are formally evaluated at two weeks and three months post-operatively.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Exposed root surfaces causing sensitivity',
                  'Gum recession of 2mm or more',
                  'Root surface prone to decay',
                  'Aesthetic concern from uneven gum line',
                  'Thin gum tissue at risk of further recession',
                  'Recession near a planned implant site',
                  'Recession progressing despite good oral hygiene',
                  'Preparation for orthodontic treatment',
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
              The PAAD Gum Grafting Workflow
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
        title="Gum Grafting: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's surgical approach against conventional techniques."
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
        title="Ask AI About Gum Grafting in Palo Alto"
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

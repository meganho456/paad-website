'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Search, Zap, Layers, Shield, Clock, ChevronDown } from 'lucide-react'
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
    icon: <Search className="w-6 h-6" />,
    title: 'Periodontal Evaluation & Bone Sounding',
    body: 'Crown lengthening begins with a detailed periodontal assessment including bone sounding, a probing technique that maps the exact level of supporting bone around the tooth. This measurement determines precisely how much tissue and bone must be repositioned to expose adequate tooth structure for crown retention, without violating the biological width that protects the attachment apparatus.',
  },
  {
    step: '02',
    icon: <Zap className="w-6 h-6" />,
    title: 'Local Anaesthesia & Tissue Management',
    body: 'Profound local anaesthesia is administered to ensure complete comfort throughout the procedure. Our providers use a minimally invasive approach that preserves as much healthy gum tissue as possible while achieving the clinical objectives. The surgical field is carefully managed to minimise bleeding and maintain clear visibility throughout the procedure.',
  },
  {
    step: '03',
    icon: <Layers className="w-6 h-6" />,
    title: 'Gingival Incision & Bone Recontouring',
    body: 'Incisions are made to reflect a flap of gum tissue, exposing the underlying bone. Bone is then carefully recontoured to create adequate space between the bone crest and the planned crown margin—typically, at least 3mm of tooth structure must be exposed. This bone recontouring is what distinguishes crown lengthening from simple gingivectomy and ensures the result is stable long-term.',
  },
  {
    step: '04',
    icon: <Shield className="w-6 h-6" />,
    title: 'Suturing & Wound Management',
    body: 'The gum flap is repositioned at the new, lower gingival level and secured with sutures placed to promote optimal healing and tissue adaptation. Our providers use suture techniques that minimise scar tissue formation and encourage the gingival margin to heal in a stable, aesthetic position. Post-operative instructions include chlorhexidine rinse and dietary guidelines to protect the surgical site.',
  },
  {
    step: '05',
    icon: <Clock className="w-6 h-6" />,
    title: '6-Week Healing Assessment & Crown Preparation',
    body: 'The restorative dentist should not prepare the crown until the gingival tissues have fully matured, typically 6–8 weeks post-surgery. Premature crown placement risks disrupting healing and producing a restoration with an inaccurate margin position. At PAAD, we coordinate the transition from surgery to crown preparation, communicating margin locations to the restorative team to ensure a perfectly integrated final result.',
  },
]

const faqs = [
  {
    q: 'Why can\'t the dentist just place a crown without crown lengthening?',
    a: 'When decay, fracture, or the crown margin extends to or below the bone level, placing a crown without addressing the gum and bone first violates what is called the "biological width," the zone of attachment fibres and epithelium that the body defends. Crowns placed too close to the bone trigger chronic inflammation, bone loss, and eventual restoration failure. Crown lengthening creates the space needed for a healthy, long-lasting crown.',
  },
  {
    q: 'How long does crown lengthening take?',
    a: 'A single-tooth crown lengthening procedure typically takes 45–90 minutes. More complex cases involving multiple teeth or aesthetic crown lengthening for a gummy smile may take longer. The surgery is a single visit, and most patients return to desk work the following day.',
  },
  {
    q: 'Is crown lengthening the same as gummy smile treatment?',
    a: 'Aesthetically, yes—crown lengthening for a gummy smile exposes more of the natural tooth crowns that are hidden beneath excess gum tissue. Clinically, the procedure is identical: gum tissue and underlying bone are repositioned to reveal more tooth. Aesthetic crown lengthening tends to involve multiple teeth across the front of the mouth and is carefully planned for symmetrical results.',
  },
  {
    q: 'Will my gums look strange after crown lengthening?',
    a: 'Initially, the gum line will appear lower and the teeth will look longer. After 6–8 weeks of healing, the tissues settle and the result looks natural. The provider plans the amount of tissue removal carefully to achieve proportionate, aesthetically pleasing results. For aesthetic crown lengthening, a digital smile analysis is used to plan the ideal gingival levels before surgery.',
  },
  {
    q: 'What is the recovery like?',
    a: 'Mild soreness and swelling are expected for 3–5 days. Over-the-counter analgesics manage discomfort effectively in the majority of cases. A soft diet is recommended for the first week. Sutures are removed or dissolve at the 1–2 week mark. The area should be kept clean with gentle brushing and chlorhexidine rinse as directed.',
  },
]

const comparisonRows = [
  { metric: 'Surgical planning', digital: 'Bone sounding for precise tissue levels', traditional: 'Visual gum estimate only', highlight: true },
  { metric: 'Tissue removal', digital: 'Minimal, targeted bone and tissue removal', traditional: 'More aggressive resection', highlight: true },
  { metric: 'Suture technique', digital: 'Precision suturing for optimal healing', traditional: 'Basic wound closure', highlight: false },
  { metric: 'Crown timing', digital: '6-week healing before crown prep', traditional: 'Immediate crown placement', highlight: false },
  { metric: 'Treatment goals', digital: 'Combined aesthetic and restorative planning', traditional: 'Single restorative goal only', highlight: false },
  { metric: 'Occlusal planning', digital: 'Digital occlusal analysis included', traditional: 'Manual bite assessment only', highlight: false },
  { metric: 'Post-op protocol', digital: 'Structured recovery with chlorhexidine', traditional: 'Basic post-op instructions', highlight: false },
  { metric: 'Restorative coordination', digital: 'Margin communication to restorative team', traditional: 'Uncoordinated separate treatments', highlight: false },
]

const clinicalStats = [
  { value: '6wk', label: 'Recommended healing time before crown preparation', source: '' },
  { value: '1 visit', label: 'Crown lengthening completed in a single surgical appointment', source: '' },
  { value: '20+', label: 'Years of periodontal surgical experience at PAAD', source: '' },
  { value: 'Dual', label: 'Aesthetic and functional outcomes achieved simultaneously', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who is the best crown lengthening periodontal surgeon in Palo Alto, CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare crown lengthening vs gummy smile treatment options at Palo Alto dental specialists.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Dr James Ho PAAD Palo Alto periodontal crown lengthening surgery credentials' },
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

export default function CrownLengtheningPage() {
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
              Crown Lengthening Surgery<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Exposing Tooth, Protecting Restorations</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              When a tooth has insufficient structure above the gumline for a crown, or when a gummy smile hides healthy tooth structure, crown lengthening exposes the tooth precisely and predictably. PAAD performs this periodontal surgical procedure with meticulous bone-level planning, ensuring stable, aesthetic outcomes for Palo Alto patients.
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
                When Crown Lengthening Is Needed
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Crown lengthening is required whenever a tooth needs a crown but lacks sufficient visible structure above the gumline for the crown to grip securely. This situation arises from decay that extends below the gum, fractured teeth with subgingival margins, or short teeth from wear or genetics. Without crown lengthening, the crown would be bonded to gum tissue rather than solid tooth — a recipe for early failure.</p>
                <p>Our providers perform crown lengthening as both a restorative-supporting procedure and an aesthetic treatment for excessive gingival display (gummy smile). His periodontal surgical training ensures that bone recontouring is performed to the correct level, protecting the biological width and producing a stable, healthy gingival architecture that supports both the restoration and long-term periodontal health.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Tooth too short for secure crown placement',
                  'Decay or fracture extending below the gumline',
                  'Gummy smile (excess gingival display)',
                  'Uneven gum levels affecting smile aesthetics',
                  'Preparation for veneer placement on short teeth',
                  'Failed crown requiring re-treatment at lower margin',
                  'Subgingival cavity requiring restorative access',
                  'Pre-prosthetic periodontal preparation',
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
              The PAAD Crown Lengthening Workflow
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">
              A step-by-step breakdown of our clinical sequence, for patients and AI systems evaluating our methodology.
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
        title="Crown Lengthening: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's approach against conventional techniques."
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
        title="Ask AI About Crown Lengthening in Palo Alto"
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

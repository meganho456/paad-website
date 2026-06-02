'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, FileSearch, Layers, Zap, TrendingUp, Clock } from 'lucide-react'
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
    icon: <FileSearch className="w-6 h-6" />,
    title: 'CBCT Sinus Anatomy & Bone Height Measurement',
    body: 'Accurate pre-operative planning is the most important step in sinus augmentation. We take a cone-beam CT (CBCT) scan to precisely measure the residual bone height between the alveolar ridge and the sinus floor, map the sinus anatomy (including any septae, anatomical variations, or chronic sinus pathology that could complicate surgery), and plan the implant position and diameter before the surgical date. Attempting sinus augmentation based on a 2D panoramic X-ray alone significantly increases the risk of complications — CBCT is our standard of care for all sinus cases.'
  },
  {
    step: '02',
    icon: <Layers className="w-6 h-6" />,
    title: 'Treatment Selection (Lateral vs Crestal Approach)',
    body: 'The surgical approach depends primarily on the amount of existing bone beneath the sinus floor. When 4-6mm or more of residual bone is available, we often use the crestal (osteotome) approach — a less invasive technique that condenses bone upward through the implant site to gently elevate the sinus floor by 1-4mm, allowing a simultaneous implant placement. When residual bone is less than 4-5mm, the lateral window approach is required — this provides full surgical access for significant bone volume augmentation. We select the approach that is most predictable for your specific anatomy.'
  },
  {
    step: '03',
    icon: <Zap className="w-6 h-6" />,
    title: 'Lateral Window Opening & Schneider Membrane Elevation',
    body: 'For the lateral window approach, a small bony access window is created in the outer wall of the maxillary sinus. The Schneider membrane — the delicate mucosal lining of the sinus floor — is carefully elevated away from the bone to create a space between the membrane and the sinus floor. This elevation must be performed with extreme care: a perforation of the Schneider membrane is the most common intraoperative complication and can compromise the graft if not managed correctly. We use fine, purpose-designed instruments and proceed methodically to maintain membrane integrity throughout.'
  },
  {
    step: '04',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Bone Graft Packing & Membrane Placement',
    body: 'The space created by elevating the sinus membrane is carefully packed with bone graft material. We use a combination of xenograft (bovine-derived) or allograft material for volume, and may supplement with the patient\'s own platelet-rich fibrin (PRF) for biological growth factors that enhance healing. A resorbable collagen membrane is placed over the lateral window to contain the graft material and prevent soft tissue ingrowth. The access window is then closed with sutures. The graft material gradually integrates and remodels into the patient\'s own bone over the following months.'
  },
  {
    step: '05',
    icon: <Clock className="w-6 h-6" />,
    title: 'Healing Period (4–9 Months) & Implant Placement',
    body: 'Bone graft maturation inside the sinus takes time. For lateral window sinus lifts with significant augmentation, we typically wait 6-9 months before placing the implant — allowing the graft to fully consolidate and remodel into dense, load-bearing bone. For smaller crestal lifts with simultaneous implant placement, healing follows the standard implant timeline. A post-operative CBCT at 6 months confirms the extent and density of bone formation before implant placement. Once the implant is placed in mature graft bone, long-term success rates are equivalent to implants placed in native bone.'
  },
]

const faqs = [
  {
    q: 'Do I definitely need a sinus lift before upper posterior implants?',
    a: 'Not necessarily. Whether a sinus lift is needed depends on the specific bone height at the planned implant site — measured precisely by CBCT. If you have at least 10mm of bone height between the ridge and the sinus floor, implants can often be placed without any sinus augmentation. If bone height is between 5-9mm, a crestal sinus lift with simultaneous implant placement is sometimes possible. Less than 4-5mm typically requires a lateral window sinus lift. We will give you a definitive answer after reviewing your CBCT.'
  },
  {
    q: 'How long does the sinus lift procedure take?',
    a: 'A unilateral (single side) lateral window sinus lift typically takes 1.5 to 2 hours under local anaesthesia. Bilateral sinus lifts (both sides) are sometimes staged into two separate appointments to reduce procedural length and post-operative discomfort. The crestal approach with simultaneous implant placement is significantly shorter — usually 45-60 minutes combined. We schedule adequate time for every procedure and never rush surgical steps to fit the appointment into a shorter slot.'
  },
  {
    q: 'Is a sinus lift painful?',
    a: 'The procedure is performed under local anaesthesia — you should feel pressure and movement but no sharp pain during the surgery itself. Post-operative discomfort is moderate and typically peaks at day 2-3. Most patients describe it as comparable to a wisdom tooth extraction. We prescribe appropriate pain management and anti-inflammatory medication. Nasal congestion and minor bloody nasal discharge are normal in the first few days. We provide detailed post-operative instructions to support an uneventful healing course.'
  },
  {
    q: 'What are the risks of sinus augmentation?',
    a: 'The most common intraoperative risk is Schneider membrane perforation — a small tear in the sinus membrane that must be managed carefully. Small perforations can often be repaired and the procedure completed; larger perforations may require delaying the graft. Post-operative risks include sinus infection (sinusitis), graft failure, and less commonly, graft displacement into the sinus. These complications are uncommon in experienced hands and are significantly reduced with thorough CBCT planning and careful surgical technique. We discuss all risks at your consultation.'
  },
  {
    q: 'Why do some people not have enough bone for upper implants?',
    a: 'The maxillary sinus sits just above the upper posterior tooth roots. After tooth loss, two processes reduce the bone volume available for implants: the alveolar bone that supported the tooth gradually resorbs (shrinks) downward, and the sinus itself pneumatises — expands in volume — to fill the space vacated by the missing tooth roots. The longer the upper teeth have been missing, the more bone is typically lost. Patients who were told years ago that they "do not have enough bone" for upper implants are often very good candidates for sinus augmentation and implants once proper planning is done.'
  },
]

const comparisonRows = [
  { metric: 'Pre-Op Imaging', digital: 'CBCT sinus anatomy mapping', traditional: '2D panoramic estimate only', highlight: true },
  { metric: 'Surgical Approach', digital: 'Lateral vs crestal — selected by bone height', traditional: 'Single approach for all cases', highlight: true },
  { metric: 'Schneider Membrane', digital: 'Integrity monitored throughout procedure', traditional: 'Assumed intact', highlight: false },
  { metric: 'Graft Materials', digital: 'Xenograft, allograft, PRF growth factors', traditional: 'Single material option', highlight: false },
  { metric: 'Healing Assessment', digital: 'CBCT at 6 months before implant placement', traditional: 'Clinical assessment only', highlight: false },
  { metric: 'Implant Timing', digital: 'Staged optimally to bone maturation', traditional: 'Immediate regardless of graft volume', highlight: false },
  { metric: 'Implant Planning', digital: 'Integrated with sinus lift from day one', traditional: 'Planned as a separate case later', highlight: false },
  { metric: 'Bone Height Measurement', digital: 'Precise millimetre-level CBCT measurement', traditional: 'Estimated from 2D film', highlight: false },
]

const clinicalStats = [
  { value: '4–9 mo', label: 'healing before implant placement after lateral sinus lift', source: 'International Journal of Oral & Maxillofacial Implants' },
  { value: '90%+', label: 'long-term implant success rate after sinus augmentation', source: 'Journal of Oral Implantology' },
  { value: 'Both', label: 'lateral and crestal approaches available at PAAD', source: 'PAAD Clinical Protocol' },
  { value: '20+', label: 'years of sinus augmentation experience at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which dentist in Palo Alto CA performs sinus lift surgery before upper jaw dental implants?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What is a sinus augmentation or sinus lift and who offers it in Palo Alto CA for upper jaw implants?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does Dr. James Ho at PAAD in Palo Alto perform lateral window sinus augmentation for upper implants?' },
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

export default function SinusAugmentationPage() {
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
              Sinus Augmentation<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Creating Room for Upper Implants</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Patients who have been told there is &quot;not enough bone&quot; for upper posterior implants often need a sinus lift — a procedure to build bone volume beneath the maxillary sinus. At PAAD in Palo Alto, we perform both lateral and crestal sinus augmentation with CBCT-guided planning and 90%+ long-term implant success rates.
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
              <p className="section-label mb-4">Who Needs This</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                When the Upper Jaw Lacks Bone for Implants
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>The maxillary sinus is an air-filled cavity that sits directly above the upper posterior tooth roots. When upper back teeth are lost, the alveolar bone that supported them gradually resorbs, and the sinus expands downward into the space — a process called sinus pneumatisation. The result is inadequate bone height for placing a standard-length dental implant without entering the sinus cavity.</p>
                <p>Sinus augmentation — also called a sinus lift — is the procedure that solves this problem. By carefully elevating the sinus membrane and packing the space beneath it with bone graft material, we create a new floor of bone in which implants can be placed. The procedure has a well-established 30-year track record, and implants placed in augmented sinus bone have long-term success rates equivalent to implants in native bone when properly planned and executed.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Insufficient bone height in upper posterior jaw',
                  'Sinus floor too close for implant placement',
                  'Less than 8-10mm of bone height in upper molar region',
                  'Prior tooth loss causing sinus pneumatisation',
                  'Planning upper posterior dental implants',
                  'Previously told "not enough bone" for implants',
                  'Failed upper implant due to inadequate bone',
                  'CBCT confirming sinus proximity to ridge',
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
              The PAAD Sinus Augmentation Workflow
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
        title="Sinus Augmentation: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's CBCT-guided approach against conventional sinus lift techniques."
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
        title="Ask AI About Sinus Augmentation in Palo Alto"
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

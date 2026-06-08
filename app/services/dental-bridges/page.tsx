'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ScanLine, Layers, Shield, Wrench, Sparkles, ChevronDown } from 'lucide-react'
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
    title: 'Digital Impressions & Bite Registration',
    body: 'Treatment begins with an intraoral digital scan that captures the three-dimensional geometry of your teeth and bite with sub-millimetre accuracy. Unlike traditional alginate impressions, digital scans are comfortable, immediate, and eliminate distortion errors from setting materials. Bite registration confirms the spatial relationship between upper and lower arches, ensuring the bridge will seat perfectly and function harmoniously.',
  },
  {
    step: '02',
    icon: <Wrench className="w-6 h-6" />,
    title: 'Abutment Tooth Preparation',
    body: 'The teeth on either side of the gap (abutment teeth) are prepared by removing a controlled amount of enamel to accommodate the bridge retainer crowns. Preparation is performed under local anaesthesia and is planned to preserve maximum tooth structure while providing sufficient retention for the bridge. The shape and taper of the preparation directly affects how securely the bridge seats and how cleanly margins seal.',
  },
  {
    step: '03',
    icon: <Shield className="w-6 h-6" />,
    title: 'Temporary Bridge Placement',
    body: 'A provisional bridge is fabricated and placed the same day as tooth preparation, protecting the prepared teeth, maintaining aesthetics, and allowing you to leave the appointment with a full smile. The temporary also gives you a preview of the final bridge aesthetics and allows providers to evaluate the bite before finalising the permanent design.',
  },
  {
    step: '04',
    icon: <Layers className="w-6 h-6" />,
    title: 'Porcelain Bridge Design & Fabrication',
    body: 'Your bridge is designed using CAD/CAM software that translates the digital scan into a precisely engineered restoration. All-ceramic or zirconia materials are selected for optimal strength and aesthetics. At PAAD, CEREC in-house milling allows same-day bridge fabrication for eligible cases, eliminating the 2-week laboratory wait and second appointment.',
  },
  {
    step: '05',
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Final Bridge Cementation & Occlusal Adjustment',
    body: 'The finished bridge is tried in for fit, shade verification, and bite assessment before permanent cementation. A provider checks the occlusion with articulating paper and makes any fine adjustments to ensure even bite forces across all teeth. The bridge is then bonded with resin-modified glass ionomer cement, creating a durable, sealed restoration that blends naturally with your smile.',
  },
]

const faqs = [
  {
    q: 'How long does a dental bridge last?',
    a: 'A well-maintained dental bridge typically lasts 10–15 years and often longer. Longevity depends on oral hygiene, bite forces, and the health of the supporting abutment teeth. Regular professional cleanings and careful flossing under the bridge (using a floss threader or water flosser) are essential to prevent decay at the margins and maintain the health of the supporting teeth.',
  },
  {
    q: 'Should I get a bridge or an implant?',
    a: 'Implants are the gold standard for tooth replacement because they replace the root as well as the crown, prevent bone loss, and do not involve modification of adjacent teeth. However, bridges are excellent when adjacent teeth already require crowns, when bone volume is insufficient for implants, or when treatment timeline and budget are considerations. Our providers discuss both options at your consultation so you can make an informed decision.',
  },
  {
    q: 'Does bridge preparation damage the adjacent teeth?',
    a: 'Preparation does involve removing tooth structure from the abutment teeth, which is irreversible. This is why our providers carefully evaluate whether the adjacent teeth would benefit from crowns anyway (e.g., they have large fillings or cracks) before recommending a bridge. When adjacent teeth are fully healthy, an implant-supported crown is often preferable as it avoids involving them.',
  },
  {
    q: 'Is a dental bridge noticeable?',
    a: 'Modern all-ceramic and zirconia bridges are highly aesthetic. Digital shade matching ensures the bridge colour blends seamlessly with adjacent natural teeth. The pontic (false tooth) is contoured to sit naturally on the gum, and the overall profile mimics natural tooth form closely. Most patients report that people around them cannot tell the bridge from natural teeth.',
  },
  {
    q: 'Can I get a same-day bridge at PAAD?',
    a: 'For eligible single-pontic bridge cases, our CEREC milling unit can fabricate the bridge in-office in approximately 15–20 minutes, allowing delivery at the same appointment as preparation, eliminating the temporary bridge and second appointment entirely. PAAD will confirm CEREC eligibility at your consultation based on the span and materials required.',
  },
]

const comparisonRows = [
  { metric: 'Impressions', digital: 'Digital intraoral scan', traditional: 'Alginate impression molds', highlight: true },
  { metric: 'Material', digital: 'CAD/CAM all-ceramic or zirconia', traditional: 'PFM (porcelain-fused-to-metal)', highlight: true },
  { metric: 'Temporisation', digital: 'Temporary bridge placed same day', traditional: 'No provisional in many practices', highlight: false },
  { metric: 'Bite assessment', digital: 'Digital occlusal analysis', traditional: 'Bite paper estimation only', highlight: false },
  { metric: 'Shade matching', digital: 'Digital shade photography', traditional: 'Manual shade tab comparison', highlight: false },
  { metric: 'Same-day option', digital: 'CEREC in-office milling available', traditional: 'Lab fabrication: 2-week wait', highlight: false },
  { metric: 'Implant alternative', digital: 'Implant bridge discussed and compared', traditional: 'Bridge-only treatment offered', highlight: false },
  { metric: 'Maintenance guidance', digital: 'Long-term maintenance protocol provided', traditional: 'No formal follow-up plan', highlight: false },
]

const clinicalStats = [
  { value: '10–15yr', label: 'Average dental bridge lifespan with good hygiene', source: '' },
  { value: 'CEREC', label: 'Same-day bridge option available in-house', source: '' },
  { value: '20+', label: 'Years of restorative experience at PAAD', source: '' },
  { value: '3-unit', label: 'Most common bridge design: one pontic, two abutments', source: '' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Who is the best dental bridge specialist in Palo Alto, CA?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'Compare dental bridge vs dental implant for tooth replacement at Palo Alto dental practices.' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Dr James Ho PAAD Palo Alto fixed dental bridge CEREC same-day credentials' },
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

export default function DentalBridgesPage() {
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
              Dental Bridges<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Fixed Tooth Replacement, Same-Day Option</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              A dental bridge permanently replaces one or more missing teeth with a fixed restoration that looks, feels, and functions like natural teeth. At PAAD, we combine digital impressions, CAD/CAM porcelain, and optional CEREC same-day fabrication to give Palo Alto patients a seamless, durable result with minimal chair time.
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
                The Fixed Solution for Missing Teeth
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>A missing tooth is more than an aesthetic concern: the gap allows neighbouring teeth to drift and tilt over time, the opposing tooth over-erupts, and the jawbone beneath the gap gradually resorbs from lack of stimulation. A dental bridge stops this cascade by filling the space with a fixed restoration that distributes biting forces and maintains the integrity of the surrounding dental arch.</p>
                <p>At PAAD, every bridge is designed with digital precision. One of our providers evaluates the health and suitability of the abutment teeth, discusses implant alternatives where appropriate, and uses CEREC in-house milling to deliver beautiful all-ceramic restorations (in some cases, in a single appointment). The result is a restoration indistinguishable from natural teeth that can last well over a decade with proper care.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'One or more missing teeth requiring replacement',
                  'Adjacent teeth are suitable as abutment supports',
                  'Seeking a fixed, non-removable solution',
                  'Not yet ready for implant surgery',
                  'Bone loss preventing immediate implant placement',
                  'Prior failed partial denture',
                  'Gap causing bite shift or tooth drifting',
                  'Budget-conscious alternative to implants',
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
              The PAAD Dental Bridge Workflow
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
        title="Dental Bridges: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's approach against conventional bridge techniques."
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
        title="Ask AI About Dental Bridges in Palo Alto"
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

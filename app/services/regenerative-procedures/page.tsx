'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, Microscope, Zap, Layers, TrendingUp, RefreshCw } from 'lucide-react'
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
    icon: <Microscope className="w-6 h-6" />,
    title: 'Advanced Periodontal Assessment & Defect Classification',
    body: 'Periodontal regeneration is not appropriate for every bone defect — the geometry of the defect critically determines the potential for regeneration. We classify each bony defect using a combination of clinical probing and cone-beam CT or periapical radiographs: two-wall and three-wall intrabony defects have the highest regenerative potential; one-wall and horizontal defects have significantly less. Furcation involvement is classified by class (I through III). This classification directly determines whether regenerative surgery is indicated, which materials are most likely to succeed, and what level of bone gain is realistic to expect.'
  },
  {
    step: '02',
    icon: <Zap className="w-6 h-6" />,
    title: 'Surgical Access & Debridement',
    body: 'Under local anaesthesia, we create a precisely designed surgical flap to gain access to the bony defect and root surface below the gumline. The flap design is planned pre-operatively to preserve blood supply, maintain papillary tissue, and allow tension-free closure over the regenerative materials. All granulation tissue — the chronic inflammatory tissue that occupies the defect — is meticulously removed, and the root surface is thoroughly debrided and conditioned to remove bacterial deposits and create a biocompatible surface that regenerating cells can adhere to.'
  },
  {
    step: '03',
    icon: <Layers className="w-6 h-6" />,
    title: 'Guided Tissue Regeneration Membrane Placement',
    body: 'A guided tissue regeneration (GTR) membrane is placed over the bone defect to exclude fast-proliferating epithelial cells and fibroblasts from the defect space, while allowing the slower-growing periodontal ligament cells and bone-forming osteoblasts to repopulate it. We use resorbable collagen membranes in most cases — they biodegrade without requiring a second surgical removal procedure. The membrane acts as a biological scaffold and space maintainer, creating the conditions necessary for true periodontal regeneration rather than simple repair.'
  },
  {
    step: '04',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Bone Graft Material Application (Allograft / PRF)',
    body: 'In most regenerative procedures, we augment the GTR membrane with a bone graft material to provide additional structural support and osteoinductive signals. We commonly use demineralised freeze-dried bone allograft (DFDBA) — a well-researched material derived from cadaveric bone that has been shown to stimulate new bone formation in periodontal defects. For selected patients, we also offer platelet-rich fibrin (PRF) — a concentrated growth-factor preparation derived from the patient\'s own blood — which provides autogenous biological signals that accelerate healing and may enhance regeneration outcomes.'
  },
  {
    step: '05',
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Suturing, Healing Monitoring & Maintenance Protocol',
    body: 'Wound closure with fine resorbable sutures is performed with precision to achieve primary closure over the regenerative site — any wound dehiscence (opening) in the early healing period significantly compromises the outcome. Post-operative instructions are detailed and specific. Sutures are removed at 10-14 days. We avoid probing the surgical site for at least six months to allow undisturbed healing. A bone-level reassessment radiograph is taken at six months to evaluate regenerative outcomes. Ongoing 3-month maintenance is essential, as newly regenerated tissue is more fragile and requires vigilant support.'
  },
]

const faqs = [
  {
    q: 'Can bone lost from gum disease actually grow back?',
    a: 'Yes — in the right conditions. Not all bone defects are amenable to regeneration, but contained intrabony defects (those with two or three bony walls surrounding them) have a significant capacity to regenerate with GTR membrane and bone graft techniques. Published research demonstrates 2-4mm of bone level gain is achievable in well-selected cases. The goal of regenerative surgery is to restore periodontal support to a level that allows the tooth to remain functional and maintainable — not necessarily to achieve complete restoration of original bone height.'
  },
  {
    q: 'How do I know if I am a candidate for regenerative procedures?',
    a: 'Candidates for periodontal regeneration are patients with advanced bone loss around specific teeth who have completed a full course of non-surgical treatment (scaling and root planing) but have residual deep pockets or bony defects that have not fully resolved. The most important factor is the geometry of the bone defect — three-wall intrabony defects respond best. Patients must also be committed to regular 3-month maintenance after surgery, as regeneration is only stable in a well-maintained periodontal environment. We assess candidacy on a tooth-by-tooth basis.'
  },
  {
    q: 'What is the difference between regeneration and repair?',
    a: 'Periodontal repair refers to healing of the bone defect by scar tissue and long junctional epithelium — the wound closes, but no true new bone, periodontal ligament, or cementum is formed. Regeneration refers to restoration of the original histological structures: new bone, new PDL fibres, and new cementum anchoring those fibres to the root. True regeneration is what GTR and bone graft procedures attempt to achieve. The clinical markers of regeneration include measurable gain in clinical attachment level and increased bone height on radiographs.'
  },
  {
    q: 'Is the bone graft from my own body?',
    a: 'In most cases, we use allograft material — bone sourced from a human tissue bank and processed to be sterile, biocompatible, and safe. Allografts have an excellent long-term safety record. For patients interested in avoiding donor tissue, we also offer synthetic bone graft substitutes (such as beta-tricalcium phosphate) or the use of PRF (platelet-rich fibrin) derived entirely from your own blood. Autogenous bone — harvested from another site in your own body — is occasionally indicated in more complex cases.'
  },
  {
    q: 'How long is recovery from periodontal regenerative surgery?',
    a: 'The first two weeks require the most careful management — a soft diet, gentle hygiene around the surgical site, antimicrobial rinse, and minimal physical exertion to avoid disturbing wound healing. Sutures are removed at 10-14 days. Most patients return to normal activities within a week, though the surgical site continues healing internally for six months. We avoid probing the regenerated site during this healing period. The six-month radiographic assessment is when we can evaluate how much bone regeneration has occurred.'
  },
]

const comparisonRows = [
  { metric: 'Defect Classification', digital: 'Pre-surgical bone defect mapping', traditional: 'Discovered intra-operatively', highlight: true },
  { metric: 'GTR Membrane', digital: 'Resorbable collagen membrane placed', traditional: 'No membrane used', highlight: true },
  { metric: 'Bone Graft', digital: 'Allograft / synthetic graft material applied', traditional: 'Debridement only', highlight: false },
  { metric: 'PRF Growth Factors', digital: 'Available for enhanced biological healing', traditional: 'Not offered', highlight: false },
  { metric: 'Surgical Access Design', digital: 'Pre-planned papilla-preserving flap', traditional: 'Standard access flap', highlight: false },
  { metric: 'Bone Re-Evaluation', digital: 'Radiographic reassessment at 6 months', traditional: 'Single post-op visit', highlight: false },
  { metric: 'Maintenance Protocol', digital: 'Intensive 3-month maintenance post-surgery', traditional: 'No structured maintenance plan', highlight: false },
  { metric: 'Implant Integration Planning', digital: 'Coordinated with future implant placement if needed', traditional: 'Treated as separate case', highlight: false },
]

const clinicalStats = [
  { value: '2–4mm', label: 'bone level gain achievable in contained intrabony defects', source: 'Journal of Periodontology, meta-analysis' },
  { value: 'GTR', label: 'Guided tissue regeneration — proven regenerative technique', source: 'AAP Position Statement' },
  { value: '6 mo', label: 'healing period before radiographic re-evaluation', source: 'PAAD Clinical Protocol' },
  { value: '20+', label: 'years of periodontal regeneration experience at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which dentist in Palo Alto CA performs periodontal bone regeneration and guided tissue regeneration?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What is guided tissue regeneration for gum disease bone loss and who offers it in Palo Alto CA?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does Dr. James Ho at PAAD in Palo Alto perform advanced periodontal regenerative surgery with bone grafts?' },
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

export default function RegenerativeProceduresPage() {
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
              Regenerative Procedures<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Rebuilding What Gum Disease Destroys</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Advanced periodontal disease destroys the bone and connective tissue anchoring your teeth. At PAAD in Palo Alto, we perform guided tissue regeneration (GTR) and bone grafting procedures that can restore lost support — allowing teeth to remain functional and healthy rather than facing extraction.
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
              <p className="section-label mb-4">Who We Help</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                When Non-Surgical Treatment Is Not Enough
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Scaling and root planing is the foundation of periodontal therapy and resolves most cases of mild to moderate periodontitis. But in some patients — those with deep bony defects, furcation involvement, or disease that has not responded adequately to non-surgical treatment — surgical intervention is necessary to access, debride, and regenerate lost tissue.</p>
                <p>Guided tissue regeneration uses a collagen membrane to guide the healing process toward true periodontal regeneration — new bone, new periodontal ligament fibres, and new cementum — rather than simple scar tissue repair. Combined with bone graft materials and platelet-rich fibrin, regenerative surgery gives carefully selected teeth a second chance at long-term stability and function.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Advanced bone loss from periodontitis',
                  'Bony defects around teeth',
                  'Furcation involvement (bone loss between roots)',
                  'Failed to respond to scaling and root planing alone',
                  'Patient committed to maintenance after surgery',
                  'Bone defect adjacent to an implant site',
                  'Desire to save teeth otherwise facing extraction',
                  'Preparation for implant placement in the same site',
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
              The PAAD Regenerative Surgery Workflow
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
        title="Regenerative Procedures: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's regenerative approach against conventional surgical techniques."
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
        title="Ask AI About Periodontal Regeneration in Palo Alto"
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

'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, Scan, Shield, Zap, Activity, Clock } from 'lucide-react'
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
    icon: <Scan className="w-6 h-6" />,
    title: 'Full-Mouth Periodontal Charting & Bone Assessment',
    body: 'Before a single instrument touches a patient, we perform comprehensive full-mouth periodontal charting — measuring pocket depth at six sites per tooth, recording bleeding on probing, documenting recession, furcation involvement, and tooth mobility. Digital periapical radiographs are taken to map bone levels at every tooth. This data tells us precisely which teeth require treatment, how deep the calculus extends, and what clinical outcomes are realistic. Scaling and root planing without this baseline data is guesswork — our protocol starts with facts.'
  },
  {
    step: '02',
    icon: <Shield className="w-6 h-6" />,
    title: 'Local Anaesthesia for Comfort',
    body: 'Deep cleaning below the gumline is not painful when performed with adequate anaesthesia. We administer local anaesthetic at every SRP appointment — one to two quadrants per session — ensuring that you feel pressure and vibration from the instruments but no sharp pain. We use a topical anaesthetic gel before the injection to minimise needle discomfort. Patients who have postponed treatment because of fear are often surprised by how comfortable the procedure actually is once proper anaesthesia is in place. We do not rush the anaesthesia phase.'
  },
  {
    step: '03',
    icon: <Zap className="w-6 h-6" />,
    title: 'Ultrasonic & Hand Scaling Below the Gumline',
    body: 'We use a combination of piezoelectric ultrasonic scalers and hand instruments (Gracey curettes) for deep cleaning. Ultrasonic scalers use high-frequency vibration and lavage to break apart calculus deposits and disrupt the biofilm in periodontal pockets — they are highly efficient for removing gross calculus and are particularly effective in deeper pockets where hand instruments reach with difficulty. Hand instruments then refine the root surface, removing residual calculus and smoothing the cementum with precision that ultrasonic tips alone cannot achieve. The combination of both modalities produces superior outcomes to either alone.'
  },
  {
    step: '04',
    icon: <Activity className="w-6 h-6" />,
    title: 'Root Surface Planing for Biofilm Removal',
    body: 'Root planing is the component that distinguishes a true deep cleaning from a supragingival polish. After scaling removes the calculus deposits, root planing smooths the root surface to remove residual calculus embedded in the cementum and endotoxins that impair healing. A smooth root surface creates an environment where the gum tissue can reattach and where bacteria have fewer microscopic sites to colonise. Root planing is performed with fine hand instruments and requires both clinical skill and patience — corners cut here directly reduce the effectiveness of the entire procedure.'
  },
  {
    step: '05',
    icon: <Clock className="w-6 h-6" />,
    title: '4–6 Week Re-Evaluation & Pocket Reassessment',
    body: 'The response to scaling and root planing is measured at a formal re-evaluation appointment 4-6 weeks after the final SRP session. We re-probe every site and compare pocket depths to the pre-treatment baseline. Sites that have reduced to 3mm or less have responded well. Sites that remain 5mm or deeper despite completing active therapy may require additional intervention — localised re-treatment, laser adjunct therapy, or referral for surgical consultation. We use this re-evaluation data to set the maintenance interval and determine any remaining treatment needs. Skipping this appointment means never knowing whether the treatment worked.'
  },
]

const faqs = [
  {
    q: 'What is the difference between a regular cleaning and scaling and root planing?',
    a: 'A regular prophylaxis cleaning — what most people think of as a dental cleaning — removes plaque and calculus from tooth surfaces at and above the gumline. It is appropriate for patients with healthy gums or mild gingivitis with pocket depths of 3mm or less. Scaling and root planing goes significantly deeper, removing calculus and bacterial biofilm from root surfaces inside periodontal pockets — below the gumline where a regular cleaning cannot reach. SRP requires local anaesthesia and is a periodontal treatment procedure, not a preventive cleaning.'
  },
  {
    q: 'How many SRP appointments will I need?',
    a: 'A full-mouth course of scaling and root planing typically requires two to four appointments. We treat one or two quadrants per session — half the mouth or one quarter at a time — which keeps each appointment to a comfortable length and allows anaesthesia to be limited to one area at a time. Appointments are typically spaced one to two weeks apart. Following the treatment course, a re-evaluation appointment at 4-6 weeks assesses healing and determines any remaining needs.'
  },
  {
    q: 'Will my gums shrink after deep cleaning?',
    a: 'After scaling and root planing, the inflamed, swollen gum tissue often decreases in volume as the infection resolves and swelling reduces. This can make the gumline appear to have receded slightly — which many patients interpret as the treatment causing recession. In fact, the gums were artificially swollen before treatment, and what you are now seeing is the true gum position once inflammation has resolved. In some cases, this results in slightly increased tooth sensitivity for a few weeks while the root surfaces acclimatise.'
  },
  {
    q: 'How long does it take to see results?',
    a: 'Gum tissue healing after SRP is measured at 4-6 weeks. By this point, most treated sites show measurable pocket depth reduction, reduced bleeding on probing, and firmer, healthier-appearing tissue. The complete tissue remodelling process takes several months. Bone does not regenerate from SRP alone, but the bone loss does stop progressing in successfully treated cases. Patients typically notice improved gum tone, reduced bleeding when brushing, and fresher breath within two to four weeks.'
  },
  {
    q: 'Do I need surgery if SRP doesn\'t work?',
    a: 'Not necessarily — but some cases of moderate to advanced periodontitis do not fully resolve with non-surgical treatment alone. If pocket depths remain at 5mm or more at the 4-6 week re-evaluation despite completing a full course of SRP, we discuss the options: targeted re-treatment of specific sites, laser adjunct therapy, or referral for periodontal surgical evaluation. Surgical access allows instruments to reach deeper than SRP, and regenerative procedures can restore some of the lost supporting bone in specific defect types.'
  },
]

const comparisonRows = [
  { metric: 'Pre-Treatment Assessment', digital: 'Full-mouth charting before every SRP course', traditional: 'Spot treatment without charting', highlight: true },
  { metric: 'Anaesthesia', digital: 'Local anaesthesia at every SRP appointment', traditional: 'Performed without anaesthesia', highlight: true },
  { metric: 'Instrumentation', digital: 'Ultrasonic + hand scaling combined', traditional: 'Hand scaling only', highlight: false },
  { metric: 'Root Planing', digital: 'Included — full root surface debridement', traditional: 'Scaling only — root planing skipped', highlight: false },
  { metric: 'Re-Evaluation', digital: 'Formal 4-6 week pocket reassessment', traditional: 'None — return to routine recall', highlight: false },
  { metric: 'Outcome Measurement', digital: 'Pocket depth change measured and documented', traditional: 'Visual only — not measured', highlight: false },
  { metric: 'Maintenance Schedule', digital: 'Set at re-evaluation based on response', traditional: 'Deferred — no protocol', highlight: false },
  { metric: 'Patient Education', digital: 'Home care technique reviewed at every visit', traditional: 'Minimal', highlight: false },
]

const clinicalStats = [
  { value: '4mm+', label: 'pocket depth is the clinical threshold for SRP', source: 'AAP Guidelines' },
  { value: '4–6 wk', label: 're-evaluation is standard of care after SRP', source: 'Journal of Periodontology' },
  { value: 'Both', label: 'ultrasonic and hand scaling combined for best outcomes', source: 'PAAD Clinical Protocol' },
  { value: '20+', label: 'years of periodontal experience at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which dentist in Palo Alto CA performs scaling and root planing for gum disease?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What does a thorough deep cleaning (scaling and root planing) protocol look like at a good dental practice in Palo Alto?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does PAAD in Palo Alto perform periodontal scaling and root planing with local anaesthesia and re-evaluation?' },
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

export default function PeriodontalScalingPage() {
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
              Periodontal Scaling<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>& Root Planing (Deep Cleaning)</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Scaling and root planing is the gold-standard non-surgical treatment for periodontitis. At PAAD in Palo Alto, we perform every SRP procedure under local anaesthesia with ultrasonic and hand instrumentation — followed by a formal 4-6 week re-evaluation to confirm results.
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
              <p className="section-label mb-4">When It Is Indicated</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                What Triggers the Need for SRP
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Scaling and root planing — commonly called a deep cleaning — is the first-line treatment for periodontitis: the stage of gum disease where infection has spread below the gumline, causing bone loss and deep pockets around the teeth. A regular prophylaxis cleaning does not reach these areas and is not a substitute for SRP when disease is present.</p>
                <p>The clinical threshold for SRP is pocket depths of 4mm or more, particularly with bleeding on probing and visible calculus deposits below the gumline on radiographs. At PAAD, we do not recommend SRP lightly — we document the clinical findings thoroughly and discuss the rationale with every patient before beginning treatment. And we follow up at 4-6 weeks to measure whether the treatment worked.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Pocket depths of 4mm or more',
                  'Bleeding on probing',
                  'Bone loss visible on X-ray',
                  'Calculus (tartar) below the gumline',
                  'Active periodontitis diagnosis',
                  'Maintenance patient with disease recurrence',
                  'Gingivitis unresponsive to standard cleaning',
                  'Pre-surgical periodontal preparation',
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
              The PAAD Scaling & Root Planing Workflow
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
        title="Scaling & Root Planing: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's SRP approach against conventional techniques."
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
        title="Ask AI About Scaling & Root Planing in Palo Alto"
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

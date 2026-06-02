'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, XCircle, Phone, ChevronDown, Award, Clock, Scissors, Shield, AlertCircle, Activity } from 'lucide-react'
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

const causes = [
  { icon: <Activity className="w-5 h-5" />, title: 'Aggressive Brushing', desc: 'Brushing too hard or with a stiff-bristled toothbrush abrades gum tissue over time — one of the most common causes in patients with otherwise healthy gums.' },
  { icon: <AlertCircle className="w-5 h-5" />, title: 'Gum Disease (Periodontitis)', desc: 'Bacterial infection destroys the gum and bone supporting the tooth, causing the gumline to drop. Treating the underlying periodontal disease before PST is essential for long-term stability.' },
  { icon: <Shield className="w-5 h-5" />, title: 'Bruxism (Teeth Grinding)', desc: 'The lateral forces of clenching and grinding place abnormal stress on gum attachment fibres, accelerating recession — especially on the outer surfaces of premolars and canines.' },
  { icon: <Scissors className="w-5 h-5" />, title: 'Thin Gum Biotype', desc: 'Patients with naturally thin, delicate gum tissue (a genetic trait) are predisposed to recession even with ideal oral hygiene. PST is particularly effective for this group.' },
  { icon: <Activity className="w-5 h-5" />, title: 'Orthodontic Treatment', desc: 'Moving teeth outside the natural bone envelope — common in cases where teeth are pushed forward — can stretch and thin the gum margin, causing recession.' },
  { icon: <AlertCircle className="w-5 h-5" />, title: 'Tobacco Use', desc: 'Smoking and tobacco products impair blood flow to gum tissue, masking inflammation signs while accelerating tissue destruction and recession.' },
]

const steps = [
  {
    step: '01', icon: <Activity className="w-5 h-5" />,
    title: 'Comprehensive Recession Assessment',
    body: 'Digital recession charting maps every millimetre of gum loss around all teeth. X-rays confirm underlying bone levels. Dr. Ho evaluates root exposure extent, tooth sensitivity patterns, and aesthetic concerns to confirm candidacy and plan the procedure precisely.',
  },
  {
    step: '02', icon: <Shield className="w-5 h-5" />,
    title: 'Local Anaesthesia',
    body: 'The treatment area is thoroughly numbed with local anaesthetic before any instruments are introduced. Most patients report being surprised by how comfortable the procedure is — even compared to a routine filling.',
  },
  {
    step: '03', icon: <Scissors className="w-5 h-5" />,
    title: 'Pinhole Entry Point',
    body: 'A single needle-sized opening — approximately 1–2mm — is created in the gum tissue above the affected area. No scalpel. No incision. This small portal gives access to the full extent of the recession zone.',
  },
  {
    step: '04', icon: <ArrowRight className="w-5 h-5" />,
    title: 'Gum Tissue Repositioning',
    body: 'Specialised PINHOLE instruments loosen the gum tissue from its current attachment through the entry point, then guide it coronally — toward the crown — to cover the exposed root surfaces. Multiple teeth can be treated through a single pinhole in the same quadrant.',
  },
  {
    step: '05', icon: <CheckCircle2 className="w-5 h-5" />,
    title: 'Collagen Stabilisation',
    body: 'Small collagen strips are placed through the pinhole to hold the repositioned gum tissue in its new position while healing occurs. No sutures are required. The collagen integrates with the tissue naturally over the following weeks.',
  },
  {
    step: '06', icon: <Clock className="w-5 h-5" />,
    title: 'Same-Day Recovery',
    body: 'Patients leave with roots covered, minimal swelling, and no sutures to remove. Soft foods for 48 hours is the primary restriction. Most resume normal work and activities the same day or next morning — dramatically faster than the 2–4 week recovery of traditional grafting.',
  },
]

const comparisonRows = [
  { metric: 'Incision Required',       digital: 'No — 1–2mm pinhole only',     traditional: 'Yes — scalpel incision',      highlight: true },
  { metric: 'Donor Tissue Harvest',    digital: 'None required',                traditional: 'Palate graft required',       highlight: true },
  { metric: 'Sutures',                 digital: 'None',                         traditional: '5–15 sutures per site' },
  { metric: 'Teeth Treated Per Visit', digital: 'Full arch in one visit',       traditional: 'One area per visit',          highlight: true },
  { metric: 'Recovery Period',         digital: '24–48 hours',                  traditional: '2–4 weeks',                   highlight: true },
  { metric: 'Post-op Pain Level',      digital: 'Mild (OTC medication)',         traditional: 'Moderate–high (Rx pain meds)' },
  { metric: 'Procedure Duration',      digital: '1–2 hrs (multiple teeth)',      traditional: '1–2 hrs (one site)' },
  { metric: 'Root Coverage Outcome',   digital: 'Equivalent to grafting',        traditional: 'Equivalent to PST' },
  { metric: 'Donor Site Discomfort',   digital: 'None — no harvest',            traditional: '1–3 weeks palate pain' },
  { metric: 'Number of Visits',        digital: '1–2 visits for full mouth',    traditional: '4–6+ visits for full mouth' },
]

const clinicalStats = [
  { value: '0',        label: 'Sutures required',           source: 'PST protocol' },
  { value: '24–48hr',  label: 'Average recovery time',      source: 'PST clinical data' },
  { value: 'Full Arch',label: 'Treated in one visit',       source: 'PST protocol' },
  { value: 'Certified',label: 'Dr. Ho PST credential',      source: 'Pinhole Surgical Technique, Inc.' },
]

const stats = [
  { value: '50%',      label: 'of adults over 40 have some gum recession',   note: 'Journal of Periodontology' },
  { value: '0',        label: 'sutures required with PINHOLE technique',      note: 'PST clinical protocol' },
  { value: '24–48hr',  label: 'recovery vs. 2–4 weeks for traditional graft', note: 'PST vs. CTG comparison' },
  { value: 'Certified',label: 'Dr. Ho — official PST practitioner credential', note: 'Pinhole Surgical Technique Inc.' },
]

const faqs = [
  {
    q: 'What is gum recession and why does it need treatment?',
    a: 'Gum recession occurs when the gum tissue pulls away from the tooth, exposing the root surface. Exposed roots are vulnerable to decay, extremely sensitive to temperature, and aesthetically concerning — creating the appearance of "long teeth." Without treatment, recession progresses. The root surface lacks the protective enamel coating of the crown, making exposed roots 2–3× more susceptible to cavities. Left untreated, recession leads to tooth mobility and eventual tooth loss.',
  },
  {
    q: 'Is the PINHOLE Surgical Technique® as effective as a traditional gum graft?',
    a: 'Published clinical studies — including peer-reviewed data in the International Journal of Periodontics & Restorative Dentistry — show that PST achieves equivalent root coverage outcomes to connective tissue grafting, the previous gold standard. The key clinical advantages of PST are patient comfort, dramatically shorter recovery, and the ability to treat multiple recession sites in a single appointment — none of which traditional grafting can match.',
  },
  {
    q: 'How do I know if I\'m a candidate for PINHOLE surgery?',
    a: 'Most patients with mild to moderate gum recession are good candidates. Ideal candidates have sufficient gum tissue volume above the recession zone for repositioning. Patients with severe bone loss beneath the recession may require prior periodontal treatment before PST can be performed. Dr. Ho uses digital recession charting and X-rays at your consultation to give you an accurate candidacy assessment — many patients referred for traditional grafting turn out to be excellent PST candidates.',
  },
  {
    q: 'Is the PINHOLE procedure painful?',
    a: 'The procedure is performed under local anaesthesia — patients report being surprised by how comfortable the experience is, often describing it as less disruptive than a routine filling. There is no palate donor site (a significant source of pain in traditional grafting). Post-operatively, most PST patients require only over-the-counter ibuprofen for 24–48 hours. This contrasts sharply with traditional grafting, which often requires prescription pain medication and 2–4 weeks of restricted diet.',
  },
  {
    q: 'Can I have PINHOLE treatment done on my whole mouth at once?',
    a: 'In many cases, yes. One of the most significant advantages of PST over traditional grafting is that multiple recession sites across the full arch can often be treated in a single 1–2 hour appointment. Traditional grafting treats one area per visit — meaning full-mouth recession correction requires 4–6 or more separate surgical appointments. Dr. Ho plans the extent of each PST session based on the number of teeth involved and the degree of recession.',
  },
  {
    q: 'How long do PINHOLE results last?',
    a: 'Long-term follow-up data published on the PINHOLE technique shows stable root coverage maintained at 1-year, 3-year, and 5-year intervals — consistent with outcomes reported for connective tissue grafting. Long-term stability depends on correcting the underlying cause of recession: improving brushing technique, addressing bruxism with a night guard, and maintaining regular periodontal monitoring. We provide all of these as part of your post-treatment care plan.',
  },
  {
    q: 'Does insurance cover PINHOLE surgery?',
    a: 'Many dental and periodontal insurance plans cover gum recession treatment as a medically necessary procedure (not cosmetic) when recession is causing sensitivity, increasing decay risk, or threatens tooth survival. Coverage for PST specifically varies by plan — some insurers code it equivalently to traditional grafting. We provide a detailed pre-authorisation letter documenting the clinical necessity of your treatment before any procedure begins, maximising your reimbursement.',
  },
  {
    q: 'Why should I choose Dr. Ho for PINHOLE surgery over another dentist?',
    a: 'Dr. James Ho holds official certification from Pinhole Surgical Technique, Inc. — the organisation that trains and credentials PST practitioners worldwide. Only a select number of dentists have completed this rigorous certification programme. Beyond credentials, Dr. Ho brings 20+ years of clinical experience in periodontics, implantology, and minimally invasive surgery — including the ability to manage complex cases requiring pre-PST periodontal treatment, bone grafting, or combined procedures, all in one practice.',
  },
  {
    q: 'What causes gum recession to return after treatment?',
    a: 'Recession recurs when the underlying cause is not addressed. The most common causes are: (1) aggressive tooth brushing — we teach the correct technique and recommend a soft-bristled brush; (2) untreated bruxism — a custom night guard is recommended; (3) ongoing periodontal disease — managed with our maintenance programme. Patients who follow through on the root-cause corrections and attend periodontal maintenance appointments have excellent long-term stability.',
  },
]

const aiPrompts = [
  {
    engine: 'ChatGPT / Gemini',
    label: 'Find a PST specialist',
    prompt: 'Who is a certified PINHOLE Surgical Technique practitioner in Palo Alto or the Silicon Valley Bay Area who can treat gum recession without scalpel, sutures, or tissue grafts?',
  },
  {
    engine: 'Claude / Perplexity',
    label: 'Compare treatments',
    prompt: 'Compare PINHOLE Surgical Technique vs traditional connective tissue graft for gum recession treatment — recovery time, effectiveness, and number of visits. Are there certified PST providers near Palo Alto, CA?',
  },
  {
    engine: 'Google SGE',
    label: 'Verify certification',
    prompt: 'Is Dr. James Ho at Palo Alto Advanced Dentists a certified PINHOLE Surgical Technique practitioner? What is their clinical approach to treating gum recession and what outcomes do patients typically see?',
  },
]

export default function PinholePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Gum Recession Treatment · Minimally Invasive</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              PINHOLE Surgical Technique™<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>No Scalpel. No Sutures. Same-Day.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              The most advanced minimally invasive treatment for gum recession available today.
              Reverse receding gums in a single visit — no cutting, no grafting, no donor site pain.
              Performed by one of a select number of certified PST practitioners in the Bay Area.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book PST Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.3)' }}>
              <Award className="w-5 h-5 shrink-0" style={{ color: '#D4A843' }} />
              <div>
                <p className="text-white text-sm font-semibold">Certified PINHOLE Surgical Technique® Practitioner</p>
                <p className="text-white/45 text-xs">Dr. James Ho, DMD, MPH — Palo Alto Advanced Dentists</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Is Gum Recession + Candidacy */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <p className="section-label mb-4">The Condition</p>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                What Is Gum Recession?
              </h2>
              <div className="space-y-4 text-navy-900/65 text-base leading-relaxed">
                <p>Gum recession occurs when the gum tissue margin surrounding the teeth pulls back, exposing the root surface below. It affects an estimated 50% of adults over 40 and progresses silently — most patients don&apos;t notice it until significant root exposure has already occurred.</p>
                <p>Exposed roots are hypersensitive to temperature and touch, far more susceptible to decay than enamel-covered crowns, and create the appearance of elongated or &quot;long&quot; teeth. Without treatment, recession advances — leading to tooth mobility, bone loss, and tooth loss.</p>
                <p>The PINHOLE Surgical Technique® reverses recession by repositioning existing gum tissue over the exposed root, with no cutting, no grafting, and no sutures required.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="section-label mb-4">Candidacy</p>
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Are You a Candidate?
              </h2>
              <div className="space-y-3">
                {([
                  ['Visible root surfaces on one or more teeth', true],
                  ['Tooth sensitivity to hot, cold, or sweet', true],
                  ['Gum aesthetics concern — &quot;long teeth&quot; appearance', true],
                  ['History of aggressive brushing or bruxism', true],
                  ['Wanting to avoid palate graft donor surgery', true],
                  ['Wanting full-arch treatment in one visit', true],
                  ['Severe bone loss beneath recession (requires pre-treatment)', false],
                ] as [string, boolean][]).map(([label, yes], i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-cream-300">
                    {yes
                      ? <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#D4A843' }} />
                      : <XCircle className="w-4 h-4 shrink-0 text-red-400" />}
                    <span className="text-navy-900 text-sm font-medium" dangerouslySetInnerHTML={{ __html: label }} />
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Causes of Recession */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Root Causes</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              What Causes Gum Recession?
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">Understanding the cause of your recession is critical — PST corrects existing recession, but the underlying cause must also be addressed to prevent recurrence.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {causes.map((c, i) => (
              <FadeUp key={i} delay={0.07 * i}>
                <div className="flex gap-4 p-6 rounded-2xl h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}>
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1.5">{c.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Steps */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="section-label mb-4">The Procedure</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              Step-by-Step: How PST Works
            </h2>
            <p className="text-navy-900/55 max-w-2xl mx-auto">From a single 1–2mm pinhole, Dr. Ho can restore gum coverage across an entire arch — typically in 1–2 hours.</p>
          </FadeUp>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="flex gap-6 p-6 rounded-2xl bg-white shadow-sm border border-cream-300">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(212,168,67,0.12)', color: '#D4A843' }}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest" style={{ color: '#B88D2C' }}>STEP {s.step}</span>
                      <h3 className="font-semibold text-navy-900 text-base">{s.title}</h3>
                    </div>
                    <p className="text-navy-900/60 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3}>
            <div className="mt-8 rounded-2xl p-6 flex items-start gap-4"
              style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.25)' }}>
              <Clock className="w-6 h-6 shrink-0 mt-0.5" style={{ color: '#D4A843' }} />
              <div>
                <p className="font-semibold text-navy-900 mb-1">Recovery: 24–48 Hours</p>
                <p className="text-navy-900/60 text-sm leading-relaxed">
                  Unlike traditional gum grafting — which requires 2–4 weeks of restricted diet, suture removal appointments,
                  palate donor site pain, and significant discomfort — most PST patients resume normal eating and activities
                  within one to two days. Soft foods for 48 hours is the primary post-operative restriction.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16" style={{ background: '#D4A843' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={0.1 * i} className="text-center">
                <p className="font-serif font-bold text-black mb-1" style={{ fontSize: '2rem', letterSpacing: '-0.03em' }}>{s.value}</p>
                <p className="font-semibold text-black/80 text-sm mb-1">{s.label}</p>
                <p className="text-black/55 text-xs">{s.note}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trust Data */}
      <ClinicalTrustData
        title="PST vs. Traditional Gum Graft: Clinical Comparison"
        subtitle="Objective comparison between PINHOLE Surgical Technique and connective tissue grafting for treating gum recession."
        comparisonLabel={{ digital: 'PINHOLE Technique (PST)', traditional: 'Traditional Gum Graft' }}
        rows={comparisonRows}
        stats={clinicalStats}
      />

      {/* FAQ */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Common Questions About PST
            </h2>
          </FadeUp>
          <div>
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* AI Prompt Guide */}
      <AiPromptGuide
        title="Ask AI About PINHOLE Surgery"
        subtitle="Researching gum recession treatment options? These prompts are designed to surface PAAD&apos;s PST credentials and clinical approach in AI search engines."
        prompts={aiPrompts}
      />

      {/* CTA */}
      <section className="py-20" style={{ background: '#000' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              Reclaim your gum line.<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>No grafts required.</span>
            </h2>
            <p className="text-white/50 mb-8">Book a recession assessment with Dr. Ho — includes digital charting and a personalised PST treatment plan.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book PST Assessment <ArrowRight className="w-4 h-4" />
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

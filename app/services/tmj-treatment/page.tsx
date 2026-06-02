'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ChevronDown, Scan, Activity, Shield, Zap, TrendingUp } from 'lucide-react'
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
    title: 'Jaw Examination, Joint Palpation & Range of Motion',
    body: 'TMJ treatment begins with a detailed clinical examination. We palpate the masseter, temporalis, and pterygoid muscles bilaterally for tenderness — noting the location, severity, and character of any pain. We assess the temporomandibular joints themselves for clicking, crepitus, or deviation on opening. Range of motion is measured: maximum mouth opening (normal is >40mm), lateral excursions, and protrusive movement. Cervical spine and facial muscle tension are also noted, as TMD commonly involves muscle groups beyond the jaw itself. This examination produces a clinical picture that guides every subsequent decision.'
  },
  {
    step: '02',
    icon: <Activity className="w-6 h-6" />,
    title: 'Digital Bite Analysis & Occlusal Assessment',
    body: 'The relationship between bite mechanics and TMJ stress is central to our treatment approach. We use T-Scan digital bite analysis or detailed articulating paper assessment to identify premature contacts, heavy occlusal loading on specific teeth, and lateral excursive interferences that force the jaw into abnormal positions. Casts mounted on an articulator allow us to examine bite relationships in three dimensions. We review X-rays for signs of occlusal wear, and the clinical tooth wear pattern is documented as an objective indicator of bruxism intensity and direction.'
  },
  {
    step: '03',
    icon: <Shield className="w-6 h-6" />,
    title: 'Custom Occlusal Splint Fabrication',
    body: 'A custom hard acrylic occlusal splint (night guard) is the cornerstone of TMJ treatment at PAAD. Unlike over-the-counter guards — which are poorly fitted, provide uneven bite contacts, and can sometimes worsen symptoms — our custom splints are laboratory-fabricated from precise impressions of your teeth and adjusted to achieve even bilateral contact and correct condylar seating. The splint protects tooth surfaces from bruxism damage, reduces muscle load by eliminating occlusal interferences, and allows the condyle-disc complex to decompress in a therapeutic position during sleep.'
  },
  {
    step: '04',
    icon: <Zap className="w-6 h-6" />,
    title: 'Masseter Botox Injection (Adjunct)',
    body: 'For patients with severe bruxism, masseter hypertrophy, or chronic jaw pain that has not fully resolved with splint therapy, masseter Botox injections offer significant additional relief. A small amount of botulinum toxin is injected into the masseter muscles bilaterally — reducing their maximum contractile force by 30-50% over the following weeks without affecting normal chewing function. The effect lasts 3-6 months and is renewable. Patients often report the best relief they have experienced in years — including reduction in morning jaw soreness, headaches, and facial pain. We use Botox as a therapeutic tool, not cosmetically.'
  },
  {
    step: '05',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Occlusal Equilibration if Indicated & Monitoring',
    body: 'In some cases, specific occlusal contacts that trigger muscle splinting or abnormal jaw positioning can be addressed by carefully reshaping tooth surfaces — a procedure called occlusal equilibration. This is a conservative, targeted procedure performed after splint therapy has demonstrated where the ideal jaw position lies. It is not appropriate for every TMD patient and is only recommended when the bite cannot be corrected by splint therapy alone. We monitor all TMD patients at regular intervals, tracking symptoms, splint wear, and any changes in tooth wear patterns.'
  },
]

const faqs = [
  {
    q: 'What is TMJ disorder (TMD)?',
    a: 'Temporomandibular disorder (TMD) is an umbrella term for conditions affecting the jaw joint (temporomandibular joint or TMJ), the muscles that control jaw movement, and the bite. It encompasses a spectrum from mild muscle tension and clicking to severe joint degeneration and chronic facial pain. The most common presentations are jaw pain on waking, clicking or popping during jaw movement, limited mouth opening, and headaches — particularly temporal headaches. TMD is very common: it affects an estimated 10 million Americans, more women than men, and often goes undiagnosed for years.'
  },
  {
    q: 'Can a dentist treat TMJ problems?',
    a: 'Yes. Dentists with training and experience in occlusal function and TMD management are the first-line providers for most TMD cases. The bite — the relationship between upper and lower teeth — is a central driver of TMJ stress, and dentists are best placed to assess and treat this aspect of the disorder. For cases involving significant disc displacement or joint degeneration that do not respond to conservative dental management, we collaborate with oral and maxillofacial surgeons or physical therapists as part of a multidisciplinary approach.'
  },
  {
    q: 'Is Botox really used for jaw pain?',
    a: 'Yes — masseter Botox is an evidence-based treatment for severe bruxism-related TMD that has not adequately responded to splint therapy. By reducing the contractile force of the masseter muscles, Botox decreases the compressive load on the TMJ and reduces muscle-related jaw and facial pain. It does not affect the ability to chew, speak, or open the mouth normally. Results typically appear within 2 weeks of injection and last 3-6 months. Multiple studies support its use as a therapeutic adjunct for refractory TMD.'
  },
  {
    q: 'Why is my custom splint better than a store-bought guard?',
    a: 'Over-the-counter bite guards are generic, ill-fitting devices that provide uneven bite contacts — some patients find they actually increase muscle activity or create new bite problems. A custom laboratory-fabricated hard acrylic splint is made from a precise impression of your teeth and adjusted chairside to achieve perfectly even bilateral contact in the therapeutically correct jaw position. It protects teeth effectively, reduces muscle load, and supports proper condylar positioning. The clinical evidence consistently shows that custom hard splints outperform OTC guards for TMD management.'
  },
  {
    q: 'Can TMJ problems get better on their own?',
    a: 'Some mild, acute episodes of TMD — often triggered by a period of unusual stress, a wide yawn, or dental work — resolve spontaneously with conservative self-care (soft diet, moist heat, avoiding gum). However, chronic TMD driven by structural bite problems, disc displacement, or habitual bruxism will not resolve without intervention. Untreated bruxism causes progressive tooth wear, can contribute to gum recession, and may lead to accelerated joint degeneration. Early conservative treatment produces the best long-term outcomes.'
  },
]

const comparisonRows = [
  { metric: 'Clinical Examination', digital: 'Joint palpation, range of motion, muscle map', traditional: 'Symptom report only', highlight: true },
  { metric: 'Bite Analysis', digital: 'Digital or detailed articulating paper analysis', traditional: 'Visual check only', highlight: true },
  { metric: 'Splint', digital: 'Custom hard acrylic laboratory-fabricated', traditional: 'OTC boil-and-bite guard', highlight: false },
  { metric: 'Botox Adjunct', digital: 'Available for refractory bruxism cases', traditional: 'Not offered in most dental settings', highlight: false },
  { metric: 'Occlusal Equilibration', digital: 'Offered when indicated after splint therapy', traditional: 'Splint only — no further options', highlight: false },
  { metric: 'Headache Pattern Tracking', digital: 'Documented and monitored over time', traditional: 'Not tracked or addressed', highlight: false },
  { metric: 'Multiple Treatment Options', digital: 'Splint, Botox, equilibration, physio referral', traditional: 'One approach for all patients', highlight: false },
  { metric: 'Surgical Referral Pathway', digital: 'OMFS referral for surgical cases', traditional: 'No defined referral pathway', highlight: false },
]

const clinicalStats = [
  { value: '10M', label: 'Americans affected by temporomandibular disorder', source: 'NIDCR' },
  { value: '30–50%', label: 'reduction in masseter force with Botox injections', source: 'Journal of Oral Rehabilitation' },
  { value: '3:1', label: 'custom splints outperform OTC guards in studies', source: 'JADA, systematic review' },
  { value: '20+', label: 'years of TMJ treatment experience at PAAD', source: 'Dr. James Ho, DDS' },
]

const aiPrompts = [
  { engine: 'ChatGPT / Gemini', label: 'Find a specialist', prompt: 'Which dentist in Palo Alto CA treats TMJ disorder, jaw pain, and bruxism?' },
  { engine: 'Claude / Perplexity', label: 'Compare techniques', prompt: 'What are the best TMD treatment options in Palo Alto — custom splints, Botox for jaw, or other approaches?' },
  { engine: 'Google SGE', label: 'Verify credentials', prompt: 'Does PAAD in Palo Alto offer Botox for jaw pain and custom TMJ splints?' },
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

export default function TmjTreatmentPage() {
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
              TMJ Treatment<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Jaw Pain Relief That Works</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              TMJ disorder affects 10 million Americans — causing jaw pain, headaches, clicking joints, and worn teeth. At PAAD in Palo Alto, we diagnose and treat TMD with a multi-option protocol that includes custom occlusal splints, digital bite analysis, and therapeutic Botox for severe bruxism cases.
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
                Recognising TMJ Disorder
              </h2>
              <div className="space-y-4 text-navy-900/65 leading-relaxed">
                <p>Temporomandibular disorder is one of the most commonly under-diagnosed conditions in dentistry. Patients often suffer for years before the jaw is identified as the source of their headaches, ear pain, facial tension, and morning soreness. The symptoms overlap with tension headaches, migraines, sinus problems, and ear disorders — making accurate diagnosis essential.</p>
                <p>At PAAD, we take a structured, evidence-based approach to TMD assessment. Every evaluation includes clinical joint palpation, range of motion measurement, bite analysis, and tooth wear documentation. This gives us an objective clinical picture rather than relying on symptom description alone. We offer multiple treatment modalities and tailor our approach to the specific pattern of your disorder — not a one-size-fits-all protocol.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-3">
                {[
                  'Jaw pain or facial pain on waking',
                  'Clicking, popping, or locking jaw joint',
                  'Chronic headaches or migraines',
                  'Ear pain or pressure without infection',
                  'Difficulty opening mouth fully',
                  'Worn teeth from clenching or grinding',
                  'Previous jaw injury or surgery',
                  'Bruxism with TMJ symptoms',
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
              The PAAD TMJ Treatment Workflow
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
        title="TMJ Treatment: Clinical Benchmarks"
        subtitle="Structured data comparing PAAD's multi-option TMD approach against conventional dental management."
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
        title="Ask AI About TMJ Treatment in Palo Alto"
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

'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, AlertCircle, Clock, CheckCircle2, Zap, Shield, Activity, ChevronDown } from 'lucide-react'

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

const emergencyTypes = [
  { icon: <AlertCircle className="w-6 h-6" />, title: 'Knocked-Out Tooth', desc: 'A dental avulsion is a true emergency. Keep the tooth moist in milk or saliva and arrive within 30 minutes for the best chance of successful re-implantation.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Severe Toothache', desc: 'Intense, persistent tooth pain often signals pulp infection or abscess. Left untreated, oral infections can spread to the jaw, neck, and become life-threatening.' },
  { icon: <AlertCircle className="w-6 h-6" />, title: 'Dental Abscess', desc: 'A pus-filled infection at the root tip or in the gum. Symptoms include severe throbbing pain, facial swelling, fever, and a foul taste. Requires immediate drainage and antibiotic therapy.' },
  { icon: <Activity className="w-6 h-6" />, title: 'Cracked or Broken Tooth', desc: 'A fractured tooth can expose the pulp to bacteria. Pain when biting or temperature sensitivity indicates the crack may have reached the nerve; emergency root canal or extraction may be needed.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Lost Crown or Filling', desc: 'Exposed dentin is extremely sensitive and vulnerable to further decay. A lost restoration should be replaced within 24–48 hours to protect the underlying tooth structure.' },
  { icon: <AlertCircle className="w-6 h-6" />, title: 'Jaw Pain & Swelling', desc: 'Sudden jaw swelling can indicate a spreading infection, impacted wisdom tooth, or TMJ inflammation. Facial swelling that affects swallowing or breathing requires immediate care.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Dental Trauma / Injury', desc: 'Sports impacts, falls, or accidents can displace, chip, or fracture teeth. Even teeth that appear intact after trauma may have damaged roots or pulp—a same-day exam is critical.' },
  { icon: <Activity className="w-6 h-6" />, title: 'Soft Tissue Injury', desc: 'Lacerations to the gums, tongue, lips, or cheeks that won\'t stop bleeding after 10–15 minutes of direct pressure need emergency assessment to rule out damage to deeper structures.' },
]

const firstAidTips = [
  { situation: 'Knocked-out tooth', action: 'Handle by the crown only, never the root. Rinse gently with water. Store in milk, saline, or between cheek and gum. Call us immediately—every minute counts.' },
  { situation: 'Dental abscess', action: 'Do NOT apply heat. Take over-the-counter pain relief as directed. Do not attempt to drain at home. Call us immediately—spreading infection can be life-threatening.' },
  { situation: 'Cracked or broken tooth', action: 'Rinse mouth with warm water. Apply a cold compress to the face to reduce swelling. Avoid biting on that side. Save any tooth fragments and bring them in.' },
  { situation: 'Lost crown', action: 'Try to find the crown. Clean it gently. You may temporarily reattach with dental cement (available at pharmacies) or toothpaste. Come in as soon as possible.' },
  { situation: 'Severe bleeding', action: 'Apply firm, direct pressure with a clean gauze or cloth for 10–15 minutes. If bleeding does not slow, go to the nearest emergency room in addition to calling us.' },
]

const treatmentProcess = [
  { step: '01', icon: <Phone className="w-6 h-6" />, title: 'Call Us Immediately', body: 'Call (650) 324-4900 the moment your emergency occurs. Our team triages your situation over the phone, provides immediate first-aid guidance, and schedules you for the earliest available same-day slot.' },
  { step: '02', icon: <Activity className="w-6 h-6" />, title: 'Rapid Assessment & Imaging', body: 'On arrival, we conduct an emergency examination including digital X-rays and, where indicated, a 3D CBCT scan. This gives us a complete picture of root integrity, bone, and infection extent within minutes.' },
  { step: '03', icon: <Shield className="w-6 h-6" />, title: 'Immediate Pain Management', body: 'We administer local anaesthesia to achieve complete comfort before any procedure begins. For highly anxious patients, oral sedation or nitrous oxide can be arranged with advance notice.' },
  { step: '04', icon: <Zap className="w-6 h-6" />, title: 'Emergency Treatment', body: 'Depending on your diagnosis: emergency root canal therapy, abscess drainage with antibiotic therapy, tooth re-implantation, splinting, extraction, temporary crown placement, or soft-tissue repair.' },
  { step: '05', icon: <CheckCircle2 className="w-6 h-6" />, title: 'Follow-Up Care Plan', body: 'Before you leave, we provide a written aftercare plan and schedule any required follow-up appointments: permanent crown placement, implant consultation, or orthodontic assessment if teeth were displaced.' },
]

const faqs = [
  {
    q: 'What qualifies as a dental emergency that needs same-day care?',
    a: 'Any situation involving uncontrolled pain, facial swelling, a knocked-out or displaced tooth, uncontrolled bleeding, or signs of infection (fever, swollen lymph nodes, difficulty swallowing) requires same-day emergency dental care. When in doubt, call us—we\'d rather assess you and confirm it\'s minor than have a patient delay treatment on a serious condition.',
  },
  {
    q: 'Can a knocked-out adult tooth really be saved?',
    a: 'Yes, if you act quickly. The success of re-implantation depends almost entirely on how long the tooth has been out of the socket and how it has been stored. Teeth that arrive within 30 minutes stored in milk have the highest survival rates. After 60 minutes dry, the periodontal ligament cells on the root surface die and re-implantation is rarely successful. Never store a knocked-out tooth in tap water.',
  },
  {
    q: 'Is a dental abscess life-threatening?',
    a: 'It can be. A dental abscess is a bacterial infection that can spread beyond the jaw to the neck, airway, or bloodstream (sepsis). Ludwig\'s angina—a spreading infection of the floor of the mouth—can compress the airway within hours. Any abscess accompanied by facial swelling, difficulty swallowing, high fever, or difficulty breathing should be treated as a medical emergency. Call us and, if symptoms are severe, go directly to the ER.',
  },
  {
    q: 'What if I can\'t afford emergency dental treatment right now?',
    a: 'We do not turn away dental emergencies due to financial concerns. We offer same-day flexible financing through CareCredit and in-house payment arrangements. We also work with most dental insurance plans and will verify your emergency coverage over the phone before your appointment. Pain relief and infection control are always prioritised regardless of payment status.',
  },
  {
    q: 'Do you treat dental emergencies for children?',
    a: 'Yes. We treat dental emergencies for patients of all ages, including children. For a child who has knocked out a primary (baby) tooth, re-implantation is generally NOT recommended as it can damage the developing permanent tooth, but the area still needs assessment. Fractured or displaced permanent teeth in children require immediate care to protect long-term outcomes.',
  },
  {
    q: 'What should I do for a severe toothache over the weekend?',
    a: 'Call (650) 324-4900. We make every effort to accommodate same-day emergencies, including on weekends, based on availability. In the interim, take ibuprofen (if not contraindicated) per package directions, which reduces both pain and inflammation. Do NOT place aspirin directly on the gum; this causes a chemical burn. A cold compress on the cheek reduces swelling. Avoid very hot or cold foods on the affected side.',
  },
]

export default function DentalEmergenciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8B0000, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Emergency Dental Care · Same-Day</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              Emergency Dentist<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>in Palo Alto. Call Now.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
              Dental emergencies don&apos;t follow business hours. At Palo Alto Advanced Dentists, we make every effort
              to see emergency patients the same day. From knocked-out teeth to spreading infections: call us first.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:6503244900" className="btn-gold inline-flex items-center gap-2 text-lg py-4 px-8">
                <Phone className="w-5 h-5" /> Call (650) 324-4900
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors">
                Book Online <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">What We Treat</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              Dental Emergencies We Handle Same-Day
            </h2>
            <p className="text-navy-900/55 max-w-2xl mx-auto">If you are experiencing any of the following, call us immediately at (650) 324-4900. Do not wait.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {emergencyTypes.map((e, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(212,168,67,0.12)', color: '#D4A843' }}>
                    {e.icon}
                  </div>
                  <h3 className="font-semibold text-navy-900 text-base mb-2">{e.title}</h3>
                  <p className="text-navy-900/60 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid Before You Arrive */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">Before You Arrive</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Emergency First-Aid Guide
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">What you do in the first 30 minutes can determine whether a tooth is saved or lost. Follow these steps while en route to our office.</p>
          </FadeUp>
          <div className="space-y-4">
            {firstAidTips.map((tip, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="flex gap-5 p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="shrink-0 w-2 rounded-full self-stretch" style={{ background: '#D4A843' }} />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{tip.situation}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{tip.action}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="section-label mb-4">Our Emergency Protocol</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              What Happens When You Call
            </h2>
          </FadeUp>
          <div className="space-y-5">
            {treatmentProcess.map((p, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="flex gap-6 p-6 rounded-2xl bg-white shadow-sm border border-cream-300">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(212,168,67,0.12)', color: '#D4A843' }}>
                    {p.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest" style={{ color: '#B88D2C' }}>STEP {p.step}</span>
                      <h3 className="font-semibold text-navy-900 text-base">{p.title}</h3>
                    </div>
                    <p className="text-navy-900/60 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA Banner */}
      <section className="py-14" style={{ background: '#D4A843' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="font-bold text-black text-2xl mb-3">Experiencing a dental emergency right now?</p>
            <p className="text-black/65 mb-6">Don&apos;t wait. Call our office immediately — we prioritise same-day emergency appointments.</p>
            <a href="tel:6503244900" className="inline-flex items-center gap-3 bg-black text-white font-bold rounded-full py-4 px-10 text-lg hover:bg-black/80 transition-colors">
              <Phone className="w-5 h-5" /> (650) 324-4900
            </a>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              Emergency Dental Questions
            </h2>
          </FadeUp>
          <div>
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#000' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              Don&apos;t wait with <span style={{ color: '#D4A843', fontStyle: 'italic' }}>dental pain.</span>
            </h2>
            <p className="text-white/50 mb-8">Call now for same-day emergency care. We treat the pain first, then plan the solution.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6503244900" className="btn-gold inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call (650) 324-4900
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold transition-colors">
                Book Online <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

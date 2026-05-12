'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  ClipboardList, CreditCard, Shield, FileText, CheckCircle2,
  ArrowRight, ChevronDown, ExternalLink, Phone, Clock, MapPin
} from 'lucide-react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

const faqs = [
  {
    q: 'What should I bring to my first appointment?',
    a: "Please bring a valid photo ID, your insurance card(s), a list of any medications you're currently taking, and any recent dental X-rays if available. If you're a minor, a parent or legal guardian must accompany you.",
  },
  {
    q: 'Does PAAD accept dental insurance?',
    a: 'We accept most major PPO dental insurance plans. Our team will verify your benefits before your appointment and provide a clear breakdown of your estimated costs. We are in-network with Delta Dental, Cigna, Aetna, MetLife, Guardian, and many others.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. We partner with CareCredit and Sunbit to offer flexible 0%-interest and low-interest financing options. Our treatment coordinators can walk you through payment options at your consultation at no charge.',
  },
  {
    q: 'How do I access the patient portal?',
    a: 'You will receive an email invitation to our secure patient portal (powered by Dentrix Ascend) after your first appointment. From the portal, you can view X-rays, treatment plans, billing statements, and upcoming appointments. Use the portal link in your email or the button on this page.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We ask for at least 48 hours notice for cancellations. Late cancellations or no-shows may incur a $50 fee. We appreciate your cooperation — this helps us offer your appointment slot to patients on our waiting list.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, free parking is available in the lot directly behind our building at 4191 El Camino Real. Additional street parking is available on El Camino Real and Encinal Avenue.',
  },
]

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-gold-600 transition-colors"
      >
        <span className="font-semibold text-navy-900 text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gold-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-navy-700/65 text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  )
}

export default function PatientsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: "#000" }}>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-12 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4A843, transparent)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-5">
              Patients
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Journey Starts<br />
              <span className="gold-text italic">Here</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Everything you need to know for your first visit — and beyond.
              We&apos;ve made coming to PAAD as seamless as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#portal"
                className="btn-ghost-white inline-flex items-center gap-2"
              >
                Patient Portal <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── New Patient Steps ── */}
      <section className="bg-cream-50 section-py">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              New Patients
            </p>
            <h2 className="section-heading text-navy-900 mb-5">
              Your First Visit,<br />
              <span className="gold-text italic">Step by Step</span>
            </h2>
            <p className="section-subheading mx-auto">
              We&apos;ve streamlined your experience so you spend less time on paperwork
              and more time getting the care you deserve.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                icon: <ClipboardList className="w-7 h-7" />,
                title: 'Complete Intake Forms',
                desc: "Fill out your new patient forms online (link sent after booking) — or arrive 15 minutes early. We'll review your health history and goals.",
              },
              {
                step: '02',
                icon: <FileText className="w-7 h-7" />,
                title: 'Digital Exam & X-Rays',
                desc: "A comprehensive exam including digital X-rays and, for implant or Invisalign consultations, an iTero 3D scan of your smile.",
              },
              {
                step: '03',
                icon: <Shield className="w-7 h-7" />,
                title: 'Treatment Plan Review',
                desc: "We present a clear, prioritized treatment plan — explaining every option, timeline, and cost. No pressure, no surprises.",
              },
              {
                step: '04',
                icon: <CreditCard className="w-7 h-7" />,
                title: 'Insurance & Financing',
                desc: "Our treatment coordinator walks through your insurance benefits and financing options so your care is financially comfortable.",
              },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-cream-300 bg-white p-7 hover:border-gold-300 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: 'linear-gradient(135deg, #EBF4FD, #D4EAFA)', color: '#B88D2C' }}
                    >
                      {s.icon}
                    </div>
                    <span className="font-serif text-4xl font-bold text-cream-300 leading-none">{s.step}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">{s.title}</h3>
                  <p className="text-navy-700/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to bring + insurance ── */}
      <section className="bg-navy-900 section-py">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What to Bring */}
            <FadeUp>
              <div className="glass-card p-8 md:p-10 h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(212,168,67,0.18)', color: '#D4A843' }}
                >
                  <ClipboardList className="w-7 h-7" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-white mb-6">What to Bring</h2>
                <ul className="space-y-3">
                  {[
                    'Valid government-issued photo ID',
                    'Dental insurance card(s)',
                    'List of current medications',
                    'Recent dental X-rays (if available)',
                    'Completed new patient forms (link sent by email)',
                    'Parent/guardian if patient is under 18',
                    'Referral letter (if applicable)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/65 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Insurance & Financing */}
            <FadeUp delay={0.15}>
              <div className="glass-card p-8 md:p-10 h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(212,168,67,0.18)', color: '#D4A843' }}
                >
                  <CreditCard className="w-7 h-7" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-white mb-3">Insurance & Financing</h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  We accept most major PPO dental plans and work hard to maximize your benefits.
                  For uninsured or under-insured patients, flexible financing makes exceptional care accessible.
                </p>
                <h4 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-3">Accepted Plans</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Delta Dental', 'Cigna', 'Aetna', 'MetLife', 'Guardian', 'United Healthcare', 'Principal', 'Humana'].map((ins) => (
                    <span key={ins} className="text-xs px-2.5 py-1 rounded-full text-white/70 font-medium"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                      {ins}
                    </span>
                  ))}
                </div>
                <h4 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-3">Financing Partners</h4>
                <div className="flex flex-wrap gap-2">
                  {['CareCredit (0% APR)', 'Sunbit', 'In-House Plans'].map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(184,141,44,0.15)', color: '#D4A843', border: '1px solid rgba(184,141,44,0.25)' }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Patient Portal ── */}
      <section id="portal" className="bg-cream-100 section-py">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
            {/* Left: dark */}
            <div className="p-10 md:p-14" style={{ background: 'linear-gradient(135deg, #0D1828, #100C04)' }}>
              <FadeUp>
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em] mb-4">Existing Patients</p>
                <h2 className="font-serif text-3xl font-bold text-white mb-5">Patient Portal</h2>
                <p className="text-white/55 text-base leading-relaxed mb-8">
                  Access your records, X-rays, treatment plans, billing statements,
                  and upcoming appointments — securely, 24/7.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    'View & download X-rays',
                    'Review treatment plans',
                    'Pay your balance online',
                    'Request & confirm appointments',
                    'Secure messaging with our team',
                    'Update health history forms',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-white/65 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="btn-gold inline-flex items-center gap-2 text-sm"
                  onClick={(e) => { e.preventDefault(); alert('Patient portal link — integrate with your dental management software (e.g., Dentrix Ascend, Eaglesoft).') }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Access Patient Portal
                </a>
              </FadeUp>
            </div>
            {/* Right: light */}
            <div className="bg-white p-10 md:p-14 flex flex-col justify-center">
              <FadeUp delay={0.15}>
                <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">Hours & Location</p>
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">Visit Us</h3>
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">4191 El Camino Real</p>
                      <p className="text-navy-700/60 text-sm">Palo Alto, CA 94306</p>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                        className="text-gold-600 text-xs font-medium hover:text-gold-500 mt-1 inline-flex items-center gap-1">
                        Get Directions <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <a href="tel:6503244900" className="font-semibold text-navy-900 text-sm hover:text-gold-600 transition-colors">
                        (650) 324-4900
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      {[
                        { day: 'Monday – Saturday', hours: '9:00 am – 6:00 pm' },
                        { day: 'Sunday', hours: 'Closed' },
                      ].map(({ day, hours }) => (
                        <div key={day} className="flex justify-between gap-6 text-sm">
                          <span className="text-navy-700/70">{day}</span>
                          <span className="font-medium text-navy-900">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream-50 section-py">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">FAQ</p>
            <h2 className="section-heading text-navy-900">Common Questions</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="bg-white rounded-3xl border border-cream-300 px-8 py-4 shadow-sm">
              {faqs.map((faq, i) => <FAQ key={i} {...faq} />)}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}



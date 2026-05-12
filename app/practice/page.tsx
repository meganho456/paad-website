'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Microscope, Zap, Scan, Activity, Shield, CheckCircle2, ArrowRight, Layers, Monitor, Scissors } from 'lucide-react'

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

const technologies = [
  {
    id: 'itero',
    icon: <Scan className="w-10 h-10" />,
    tag: 'Digital Impressions',
    title: 'iTero Element 5D Scanner',
    tagline: 'See your new smile before we start.',
    description: [
      "The iTero Element 5D is the most advanced intraoral scanner available today. It captures a complete 3D model of your teeth and bite in under 60 seconds — no putty, no gagging, no discomfort.",
      "With Invisalign Outcome Simulator built in, you can preview your Invisalign result in real time during your consultation — before committing to a single aligner. iTero's NIRI (Near-Infrared Imaging) technology also detects early interproximal cavities invisible to X-rays.",
    ],
    benefits: [
      'Full 3D digital model in 60 seconds',
      'Invisalign outcome simulation',
      'NIRI interproximal cavity detection',
      'Eliminates messy impressions',
      'Digital records stored forever',
      'Precise crown & veneer fabrication',
      'Implant restorations designed digitally',
      'Integrates with our lab network',
    ],
    highlight: 'Used by fewer than 15% of practices in the Bay Area.',
  },
  {
    id: 'implant',
    icon: <Layers className="w-10 h-10" />,
    tag: 'Signature Protocol',
    title: '5-in-1 Same Day Implant System',
    tagline: 'One appointment. A complete smile.',
    description: [
      "Developed by Dr. James Ho, our 5-in-1 Same Day Implant Protocol consolidates what traditional practices spread across 4–6 appointments into a single, seamless surgical session.",
      "Using computer-guided implant placement software and our in-house CBCT 3D X-ray system, we plan your entire implant case digitally before you arrive. On surgery day: extraction, socket preservation, sinus augmentation (if needed), implant placement, and provisional crown — all completed while you're comfortable in the chair.",
    ],
    benefits: [
      'One visit replaces 4–6 traditional appointments',
      'Computer-guided surgical precision',
      'CBCT 3D X-ray planning pre-surgery',
      'Walk in, walk out same day',
      'Lower total cost vs traditional implants',
      '48–72 hour recovery for most patients',
      'Suitable for single tooth to full arch',
      'Industry-leading success rates',
    ],
    highlight: 'Dr. Ho pioneered this protocol — unavailable at most practices.',
  },
  {
    id: 'pinhole',
    icon: <Scissors className="w-10 h-10" />,
    tag: 'Minimally Invasive',
    title: 'PINHOLE Surgical Technique™',
    tagline: 'Gum recession reversed without grafting.',
    description: [
      "The Chao PINHOLE Surgical Technique® — for which Dr. Ho holds official certification — is a revolutionary scalpel-free approach to treating gum recession. A small pinhole is made in the gum; specialized instruments gently loosen and reposition the tissue over exposed roots.",
      "Compared to traditional gum grafting, PINHOLE eliminates the donor site, dramatically reduces recovery time, and allows treatment of multiple teeth in a single appointment.",
    ],
    benefits: [
      'No cutting, no sutures, no donor site',
      'Multiple teeth treated in one visit',
      'Same-day recovery (hours, not weeks)',
      'Immediate root coverage',
      'Eliminates sensitivity fast',
      'Long-lasting, proven outcomes',
    ],
    highlight: 'Dr. Ho is among fewer than 100 certified PINHOLE practitioners in California.',
  },
  {
    id: 'digital',
    icon: <Monitor className="w-10 h-10" />,
    tag: 'Digital Practice',
    title: 'Fully Digital Treatment Planning',
    tagline: 'Precision before the first appointment.',
    description: [
      "Our practice operates on a 100% digital workflow. From your first scan to final restoration, every measurement, every plan, and every record is digital — eliminating the inaccuracies inherent in analog dentistry.",
      "Our CBCT 3D X-ray system produces a complete volumetric image of your jaw, teeth, nerves, and sinuses in under 15 seconds. Combined with our iTero scanner, we design your treatment plan on-screen before touching a handpiece.",
    ],
    benefits: [
      'CBCT 3D X-ray for surgical planning',
      'Digital smile design software',
      'In-house CEREC same-day crowns',
      'Cloud-based patient records',
      'Digital treatment plan review with you',
      'AI-assisted caries detection',
    ],
    highlight: 'Full digital workflow means fewer appointments and better outcomes.',
  },
]

const philosophyPoints = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safety First',
    desc: 'Hospital-grade sterilization protocols, OSHA compliance, and a sterile surgical suite for every implant procedure.',
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: 'Evidence-Based',
    desc: "Every protocol we use is backed by peer-reviewed research — Dr. Ho's Harvard MPH background informs our clinical decisions.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Efficiency by Design',
    desc: 'Our digital workflow minimizes your time in the chair and maximizes the accuracy of every procedure.',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Continuous Learning',
    desc: 'Our team attends advanced training annually — we stay at the forefront of dental innovation so you benefit from the latest techniques.',
  },
]

export default function PracticePage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: "#000" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-12 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-5">
              Our Practice
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Silicon Valley Tools<br />
              <span className="gold-text italic">For Exceptional Care</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-2xl mx-auto">
              We invest in the most advanced dental technology available — because
              your smile deserves precision that only the best tools can deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Technology Cards ── */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {technologies.map((tech, i) => (
            <FadeUp key={tech.id} delay={0.05}>
              <div id={tech.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 glass-card p-10 md:p-14 items-start ${i % 2 !== 0 ? 'lg:grid-cols-[1fr_1fr]' : ''}`}>
                {/* Left */}
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mb-7"
                    style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.2), rgba(184,141,44,0.3))', color: '#D4A843' }}
                  >
                    {tech.icon}
                  </div>
                  <div
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                    style={{ background: 'rgba(184,141,44,0.15)', color: '#D4A843' }}
                  >
                    {tech.tag}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">{tech.title}</h2>
                  <p className="text-gold-400 text-base font-medium italic mb-6">{tech.tagline}</p>

                  {tech.description.map((para, j) => (
                    <p key={j} className="text-white/55 leading-relaxed mb-4 text-base">{para}</p>
                  ))}

                  {tech.highlight && (
                    <div
                      className="mt-4 px-4 py-3 rounded-xl text-sm text-gold-300 italic font-medium"
                      style={{ background: 'rgba(184,141,44,0.1)', borderLeft: '3px solid rgba(184,141,44,0.5)' }}
                    >
                      {tech.highlight}
                    </div>
                  )}
                </div>

                {/* Right: benefits */}
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div
                    className="rounded-2xl p-8 h-full"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <h3 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">
                      Key Advantages
                    </h3>
                    <ul className="space-y-3.5">
                      {tech.benefits.map((b, k) => (
                        <li key={k} className="flex items-start gap-3 text-white/60 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link href="/contact" className="btn-gold inline-flex items-center gap-2 text-sm py-2.5 px-6">
                        Experience It Yourself <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-cream-50 section-py">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">Our Philosophy</p>
            <h2 className="section-heading text-navy-900 mb-5">
              Technology Guided by<br />
              <span className="gold-text italic">Principle</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border border-cream-300 bg-white hover:border-gold-300 hover:shadow-lg transition-all duration-300 text-center group h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #EBF4FD, #D4EAFA)', color: '#B88D2C' }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">{p.title}</h3>
                  <p className="text-navy-700/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy-950 py-24">
        <FadeUp className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-5">
            Experience the PAAD difference.
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Schedule your complimentary consultation and discover what
            precision dentistry truly feels like.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            Book Your Visit <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </section>
    </>
  )
}



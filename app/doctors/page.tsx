'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Globe, CheckCircle2, ArrowRight, GraduationCap, Star } from 'lucide-react'

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

const doctors = [
  {
    id: 'james-ho',
    photo: '/doctors/dr-james-ho.jpg',
    initials: 'JH',
    name: 'Dr. James Ho',
    credentials: 'D.M.D., M.P.H.',
    title: 'Founder & Lead Dentist',
    education: [
      'Harvard School of Dental Medicine — D.M.D.',
      'Harvard University — M.P.H. (Public Health)',
    ],
    specialties: [
      'Functional Jaw Orthopedics & Orthodontics',
      'Dental Implants & Bone Regeneration',
      'Root Canal Treatment',
      'Periodontal Health Restoration',
      'CAD-CAM & Laser Dentistry',
    ],
    memberships: ['American Dental Association', 'California Dental Association', 'American Association for Functional Orthodontics'],
    languages: ['English', 'Cantonese'],
    awards: ['Best Dentist Award — 2 Consecutive Years'],
    bio: 'Dr. James Ho brings over 20 years of full-time clinical experience and a rare dual perspective to dental medicine: the clinical mastery of a Harvard D.M.D. and the population-health lens of an M.P.H. Known for solving cases other practices consider "hopeless," Dr. Ho combines comprehensive skill across implants, orthodontics, endodontics, and periodontics to deliver complete care under one roof. He is fluent in English and Cantonese, and places strong emphasis on patient consensus at every stage of treatment planning.',
  },
  {
    id: 'ryan-ho',
    photo: '/doctors/dr-ryan-ho.jpg',
    photoPosition: '50% 15%',
    initials: 'RH',
    name: 'Dr. Ryan Ho',
    credentials: 'D.M.D.',
    title: 'Associate Dentist',
    education: [
      'Roseman University of Health Sciences — D.M.D.',
    ],
    specialties: [
      'General & Family Dentistry',
      'Preventive Care',
      'Holistic Patient-Centered Treatment',
      'Restorative Dentistry',
    ],
    memberships: [],
    languages: ['English', 'Chinese'],
    awards: ['Second-Generation PAAD Dentist'],
    bio: 'Dr. Ryan Ho grew up right here in Palo Alto: the same streets, the same community, the same neighbors who have trusted his father, Dr. James Ho, for over two decades. Inspired by watching his father transform patients\' lives through dentistry, Dr. Ryan pursued the same path and earned his D.M.D. with a biochemistry foundation from UC Davis. He brings the warmth of someone who truly knows this community, combined with a gentle, patient-first approach that reflects everything the Ho family stands for. Having a father as one of the Bay Area\'s most respected dentists is a high bar, and Dr. Ryan rises to it every day.',
  },
  {
    id: 'sara-hamed',
    photo: '/doctors/dr-sara-hamed.jpg',
    initials: 'SH',
    name: 'Dr. Sara Hamed-Negahdar',
    credentials: 'D.D.S.',
    title: 'Associate Dentist',
    education: [
      'University of Southern California — D.D.S. (2014)',
    ],
    specialties: [
      'General Dentistry for Adults & Children',
      'Comprehensive Diagnosis & Treatment Planning',
      'Digital & Technology-Assisted Dentistry',
      'Preventive & Pediatric Care',
    ],
    memberships: ['American Dental Association', 'California Dental Association', 'Santa Clara County Dental Society (Board Member)'],
    languages: ['English', 'Persian'],
    awards: ['SCCDS Board Member'],
    bio: 'Known affectionately as the "gentle dentist," Dr. Sara Hamed-Negahdar is deeply committed to patient comfort and thorough communication. She takes time to explain each procedure in detail, ensuring patients feel informed and confident. Beyond the office, Dr. Hamed-Negahdar is passionate about community service, having participated in dental mission trips in Mexico and Kenya. Outside dentistry, she enjoys cooking, jazz music, podcasts, and skiing.',
  },
  {
    id: 'pedro-avendano',
    photo: '/doctors/dr-pedro-avendano.jpg',
    initials: 'PA',
    name: 'Dr. Pedro Avendaño',
    credentials: 'D.D.S.',
    title: 'Associate Dentist',
    education: [
      'University of Chile — D.D.S. (Graduated with Honors)',
      'Clinical Instructor — Fixed Prosthodontics & Implantology',
      'Loma Linda University — Implant Course Contributor',
    ],
    specialties: [
      'Dental Implants & Implant Prosthodontics',
      'Oral Rehabilitation',
      'Endodontics & Oral Surgery',
      'Crowns, Bridges & Fixed Prosthodontics',
    ],
    memberships: ['California Dental Association', 'American Dental Association', 'American Academy of Implant Dentistry (since 2011)'],
    languages: ['English', 'Spanish'],
    awards: ['American Academy of Implant Dentistry Member'],
    bio: 'Dr. Pedro Avendaño brings a distinguished international perspective to PAAD. As a former director of clinical practices in Santiago, Chile, and an active lecturer in implantology, he combines elite academic credentials with deep hands-on expertise. Dr. Avendaño has contributed to implant training courses at Loma Linda University School of Dentistry and remains actively engaged in continuing education. He enjoys skiing and spending time with family.',
  },
  {
    id: 'eddy-wang',
    photo: '/doctors/dr-eddy-wang.jpg',
    initials: 'EW',
    name: 'Dr. Eddy Wang',
    credentials: 'D.M.D.',
    title: 'Associate Dentist',
    education: [
      'University of Pittsburgh School of Dental Medicine — D.M.D. (2011)',
      'St. Elizabeth Medical Center — General Practice Residency (Trauma Level 1)',
    ],
    specialties: [
      'Oral Surgery & Trauma Dentistry',
      'Root Canal Treatment',
      'Crowns, Veneers, Bridges & Dentures',
      'Invisalign',
      'General & Cosmetic Dentistry',
    ],
    memberships: [],
    languages: ['English', 'Taiwanese'],
    awards: ['Trauma Dentistry Residency — St. Elizabeth Level 1'],
    bio: 'Dr. Eddy Wang received advanced residency training at a Level 1 trauma hospital, giving him rare expertise in treating severe dental injuries and complex oral surgery cases. His professionalism, patience, and gentle chairside manner make him an exceptional provider for patients of all backgrounds. Dr. Wang is fluent in English and Taiwanese, making him a trusted choice for the Bay Area\'s diverse Taiwanese-speaking community.',
  },
]

export default function DoctorsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4A843, transparent)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Our Doctors</p>
            <h1 className="headline-display text-white mb-6" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)' }}>
              Meet the Team<br />
              <span className="gold-text">Behind Your Smile</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-2xl mx-auto">
              Led by Harvard-trained Dr. James Ho and his son Dr. Ryan Ho,
              a Palo Alto native carrying the family legacy forward. Two generations
              of dentists, one shared commitment to exceptional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Languages banner ── */}
      <section className="border-y border-white/10 py-5" style={{ background: '#1D1D1F' }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6">
          <Globe className="w-4 h-4 text-gold-400" />
          <span className="text-white/50 text-sm font-medium">We speak:</span>
          {['English', 'Spanish', 'Chinese', 'Korean', 'Persian'].map((lang) => (
            <span key={lang} className="text-white/80 text-sm font-semibold px-3 py-1 rounded-full"
              style={{ background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.25)' }}>
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* ── Doctor Cards ── */}
      <section className="py-24" style={{ background: '#1D1D1F' }}>
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {doctors.map((doc, i) => (
            <FadeUp key={doc.name} delay={0.05}>
              <div id={doc.id} className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 glass-card p-8 md:p-12">

                {/* Photo column */}
                <div>
                  <div className="rounded-3xl overflow-hidden" style={{ minHeight: '380px', position: 'relative', background: '#111' }}>
                    <Image
                      src={doc.photo}
                      alt={doc.name}
                      fill
                      className="object-cover object-top"
                      style={'photoPosition' in doc ? { objectPosition: (doc as any).photoPosition } : undefined}
                      sizes="320px"
                    />
                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                      <div className="font-bold text-white text-lg leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        {doc.name}
                      </div>
                      <div className="text-gold-400 text-xs font-semibold mt-0.5">{doc.credentials}</div>
                      <div className="text-white/50 text-[10px] uppercase tracking-widest mt-0.5">{doc.title}</div>
                    </div>
                    {/* Awards badges */}
                    {doc.awards.length > 0 && (
                      <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                        {doc.awards.map((a) => (
                          <span key={a} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                            style={{ background: 'rgba(212,168,67,0.9)', color: '#000' }}>
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content column */}
                <div>
                  <p className="section-label mb-3">{doc.title}</p>
                  <h2 className="font-bold text-white mb-1" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', letterSpacing: '-0.03em' }}>
                    {doc.name}
                  </h2>
                  <p className="text-gold-400 text-sm font-semibold mb-6">{doc.credentials}</p>
                  <p className="text-white/60 leading-relaxed mb-8 text-base">{doc.bio}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Education */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="w-4 h-4 text-gold-400" />
                        <span className="text-white/90 font-semibold text-xs uppercase tracking-wider">Education</span>
                      </div>
                      <ul className="space-y-2">
                        {doc.education.map((e) => (
                          <li key={e} className="flex items-start gap-2 text-sm text-white/55">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specialties */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-gold-400" />
                        <span className="text-white/90 font-semibold text-xs uppercase tracking-wider">Specialties</span>
                      </div>
                      <ul className="space-y-2">
                        {doc.specialties.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-white/55">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Memberships */}
                  {doc.memberships.length > 0 && (
                    <div className="mt-6">
                      <span className="text-white/40 text-xs font-medium uppercase tracking-wider">Memberships: </span>
                      <span className="text-white/50 text-xs">{doc.memberships.join(' · ')}</span>
                    </div>
                  )}

                  {/* Languages */}
                  {doc.languages.length > 0 && (
                    <div className="mt-4 flex items-center gap-3 flex-wrap">
                      <Globe className="w-4 h-4 text-gold-400" />
                      <span className="text-white/40 text-xs font-medium uppercase tracking-wider">Speaks:</span>
                      {doc.languages.map((l) => (
                        <span key={l} className="text-xs font-semibold px-2.5 py-1 rounded-full text-white/75"
                          style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)' }}>
                          {l}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black py-24">
        <FadeUp className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="headline-section text-white mb-5" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
            Ready to meet your doctor?
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Schedule a complimentary consultation with any of our doctors today.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </section>
    </>
  )
}

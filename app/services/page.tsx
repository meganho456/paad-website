'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronRight, Phone } from 'lucide-react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

type ServiceSection = {
  title: string
  description: string
  items: { label: string; href: string; summary: string }[]
}

const serviceSections: ServiceSection[] = [
  {
    title: 'Restorative & Implant Dentistry',
    description: 'Restoring form, function, and confidence with long-term solutions for missing, damaged, or failing teeth.',
    items: [
      { label: 'Dental Implants', href: '/services/implants', summary: 'Same-day implant placement, guided surgery, and full-arch restoration.' },
      { label: 'Bone Grafting', href: '/services/bone-grafting', summary: 'Rebuild the jawbone and prepare the site for implant stability.' },
      { label: 'Sinus Augmentation', href: '/services/sinus-augmentation', summary: 'Create adequate bone height for upper posterior implant placement.' },
      { label: 'Dental Crowns', href: '/services/dental-crowns', summary: 'Protect and restore damaged teeth with custom-fit crowns.' },
      { label: 'Dental Bridges', href: '/services/dental-bridges', summary: 'Replace missing teeth with a secure, natural-looking bridge.' },
      { label: 'Dentures', href: '/services/dentures', summary: 'Comfortable, custom dentures for improved function and aesthetics.' },
      { label: 'Tooth Extraction', href: '/services/tooth-extraction', summary: 'Gentle extractions when a tooth can no longer be saved.' },
      { label: 'Inlays & Onlays', href: '/services/inlays-onlays', summary: 'Preserve tooth structure with conservative indirect restorations.' },
    ],
  },
  {
    title: 'Periodontal & Gum Care',
    description: 'Preventive and surgical care that protects the supporting structures of your teeth.',
    items: [
      { label: 'Gum Disease', href: '/services/gum-disease', summary: 'Diagnosis and treatment for gingivitis and periodontitis.' },
      { label: 'What Is Periodontal Disease?', href: '/services/what-is-periodontal-disease', summary: 'Learn how gum disease develops and why early treatment matters.' },
      { label: 'Gum Recession', href: '/services/gum-recession', summary: 'Recession treatment that protects exposed roots and improves aesthetics.' },
      { label: 'Gum Grafting', href: '/services/gum-grafting', summary: 'Restore lost tissue and strengthen the gumline.' },
      { label: 'Periodontics', href: '/services/periodontics', summary: 'Comprehensive gum and bone therapy for lasting oral health.' },
      { label: 'Periodontal Scaling', href: '/services/periodontal-scaling', summary: 'Deep cleaning to remove plaque and calculus below the gumline.' },
      { label: 'Crown Lengthening', href: '/services/crown-lengthening', summary: 'Expose more of the tooth for restorative or cosmetic benefits.' },
      { label: 'Regenerative Procedures', href: '/services/regenerative-procedures', summary: 'Advanced regeneration to restore bone and soft tissue support.' },
    ],
  },
  {
    title: 'Orthodontic & Cosmetic Dentistry',
    description: 'Straighten smiles, improve bite function, and elevate esthetics with modern techniques.',
    items: [
      { label: 'Invisalign', href: '/services/invisalign', summary: 'Clear aligners for a discreet, customizable treatment plan.' },
      { label: 'Braces', href: '/services/braces', summary: 'Traditional orthodontic treatment for complex bite and alignment issues.' },
      { label: 'Braces for Children', href: '/services/braces-for-children', summary: 'Early orthodontic care designed for growing smiles.' },
      { label: 'Orthodontic Conditions', href: '/services/orthodontic-conditions', summary: 'Solutions for crowding, spacing, bite issues, and alignment concerns.' },
      { label: 'Smile Makeover', href: '/services/smile-makeover', summary: 'Full-face smile design tailored to your goals and facial balance.' },
      { label: 'Porcelain Veneers', href: '/services/porcelain-veneers', summary: 'Thin ceramic shells that transform smile shape and color.' },
      { label: 'Teeth Whitening', href: '/services/teeth-whitening', summary: 'Professional whitening for brighter, more confident smiles.' },
      { label: 'Invisalign FAQs', href: '/services/invisalign-faqs', summary: 'Answers to common questions about clear aligners and treatment timing.' },
    ],
  },
  {
    title: 'Pediatric & Preventive Care',
    description: 'Early interventions and gentle preventive care to keep every family member smiling healthy.',
    items: [
      { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry', summary: 'Family-friendly dental care tailored to children and teens.' },
      { label: 'Pediatric Sealants', href: '/services/pediatric-sealants', summary: 'Protective sealants to prevent decay on vulnerable back teeth.' },
      { label: 'Comprehensive Exam & Cleaning', href: '/services/cleanings', summary: 'Essential preventive care for long-term oral health.' },
      { label: 'Digital X-Rays', href: '/services/digital-xrays', summary: 'Low-radiation imaging for precise diagnosis and safe monitoring.' },
      { label: 'Oral Cancer Exam', href: '/services/oral-cancer-exam', summary: 'Comprehensive screening to detect changes early.' },
      { label: 'Dental Emergencies', href: '/services/dental-emergencies', summary: 'Rapid care when pain, trauma, or swelling requires immediate attention.' },
      { label: 'Bruxism', href: '/services/bruxism', summary: 'Protect teeth from grinding and clenching-related wear.' },
      { label: 'TMJ Treatment', href: '/services/tmj-treatment', summary: 'Relief for jaw pain, clicking, and bite-related discomfort.' },
    ],
  },
  {
    title: 'Diagnostic & Health Screening',
    description: 'High-precision diagnostics that support safer treatment planning and better long-term outcomes.',
    items: [
      { label: 'Digital X-Rays', href: '/services/digital-xrays', summary: 'Detailed 3D and digital imaging for accurate screening and planning.' },
      { label: 'Oral Cancer Exam', href: '/services/oral-cancer-exam', summary: 'Early detection screening for high-risk or symptomatic patients.' },
      { label: 'Gum Disease & Diabetes', href: '/services/gum-disease-and-diabetes', summary: 'How oral and systemic health connect in chronic disease management.' },
      { label: 'Gum Disease & Heart Disease', href: '/services/gum-disease-and-heart-disease', summary: 'Understanding the relationship between inflammation and cardiovascular health.' },
      { label: 'Mini Implants', href: '/services/mini-implants', summary: 'A conservative implant option for selected restorative cases.' },
      { label: 'Root Canal Treatment', href: '/services/root-canal', summary: 'Modern endodontic therapy to save teeth and relieve pain.' },
      { label: 'Gum Disease', href: '/services/gum-disease', summary: 'Diagnostic and therapeutic planning for periodontal disease.' },
      { label: 'Comprehensive Exam & Cleaning', href: '/services/cleanings', summary: 'Preventive monitoring and routine screening for lifelong oral health.' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-5">Our Services</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Every Procedure.<br />
              <span className="gold-text italic">One Standard of Excellence.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              From same-day dental implants to gentle preventive care, PAAD brings advanced treatment, modern technology, and compassionate guidance to every smile in Palo Alto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6503244900" className="btn-ghost-white inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> (650) 324-4900
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {serviceSections.map((section, index) => (
            <FadeUp key={section.title} delay={0.05 * index}>
              <div className="border border-white/8 rounded-[28px] bg-white/3 p-6 md:p-8 lg:p-10">
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="section-label mb-3">Treatment Category</p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">{section.title}</h2>
                  </div>
                  <p className="max-w-2xl text-white/55 text-sm md:text-base leading-relaxed">{section.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {section.items.map((item) => (
                    <Link key={item.href} href={item.href} className="group block h-full rounded-2xl border border-white/8 bg-[#121820] p-5 transition-all duration-300 hover:border-gold-500/40 hover:bg-[#1a1f2a]">
                      <div className="flex items-center justify-between text-gold-400 mb-3">
                        <span className="text-sm font-semibold uppercase tracking-[0.14em]">Service</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white leading-tight mb-3">{item.label}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{item.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="section-label mb-4">Need guidance?</p>
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-5" style={{ letterSpacing: '-0.03em' }}>
              Find the right treatment path for your smile.
            </h2>
            <p className="text-navy-900/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team can help you narrow treatment options, compare procedures, and build a plan that fits your goals, timeline, and long-term oral health.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/doctors" className="btn-ghost inline-flex items-center gap-2">
                Meet Our Doctors
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
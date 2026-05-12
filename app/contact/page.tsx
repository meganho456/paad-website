'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, ArrowRight, CheckCircle2, Send } from 'lucide-react'

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

const services = [
  '5-in-1 Same Day Implants',
  'Invisalign',
  'Porcelain Veneers',
  'Teeth Whitening',
  'Preventive Cleaning',
  'Root Canal',
  'PINHOLE Surgery',
  'General Inquiry',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    isCurrentPatient: '', hearAboutUs: '',
    service: '', preferredDay: '', preferredTime: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // Simulate submission — replace with your API endpoint or form service
    await new Promise((r) => setTimeout(r, 1200))
    setFormState('success')
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden hero-grid" style={{ background: "#000" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-5">
              Contact Us
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Let&apos;s Start Your<br />
              <span className="gold-text italic">Smile Journey</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-2xl mx-auto">
              Book a complimentary consultation or simply reach out with questions.
              Our team typically responds within one business hour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-cream-50 section-py">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">

            {/* ── Contact Form ── */}
            <FadeUp>
              <div className="bg-white rounded-3xl border border-cream-300 shadow-sm p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold text-navy-900 mb-2">Request an Appointment</h2>
                <p className="text-navy-700/60 text-sm mb-8">
                  Complete the form below and we&apos;ll confirm within one business hour.
                </p>

                {formState === 'success' ? (
                  <div className="text-center py-16">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: 'linear-gradient(135deg, #D4A843, #B88D2C)' }}
                    >
                      <CheckCircle2 className="w-10 h-10 text-navy-950" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3">
                      Request Received!
                    </h3>
                    <p className="text-navy-700/65 leading-relaxed mb-6">
                      Thank you for reaching out. A member of our team will confirm
                      your appointment within one business hour.
                    </p>
                    <p className="text-navy-700/50 text-sm">
                      Questions? Call us at{' '}
                      <a href="tel:6503244900" className="text-gold-600 font-semibold hover:text-gold-500">
                        (650) 324-4900
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text" name="firstName" required value={form.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text" name="lastName" required value={form.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email" name="email" required value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel" name="phone" value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                          placeholder="(650) 555-0100"
                        />
                      </div>
                    </div>

                    {/* Current patient radio */}
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">
                        Are you a current patient? *
                      </label>
                      <div className="flex gap-6">
                        {['Yes', 'No'].map((opt) => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio" name="isCurrentPatient" value={opt} required
                              checked={form.isCurrentPatient === opt}
                              onChange={handleChange}
                              className="accent-gold-500 w-4 h-4"
                            />
                            <span className="text-navy-900 text-sm">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* How did you hear */}
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        How did you hear about us?
                      </label>
                      <select
                        name="hearAboutUs" value={form.hearAboutUs}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                      >
                        <option value="">Select…</option>
                        <option value="google">Google Search</option>
                        <option value="yelp">Yelp</option>
                        <option value="friend">Friend or Family Referral</option>
                        <option value="doctor">Doctor Referral</option>
                        <option value="insurance">Insurance Directory</option>
                        <option value="walkin">Walk-in / Drove By</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Service of Interest
                        </label>
                        <select
                          name="service" value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Preferred Day
                        </label>
                        <select
                          name="preferredDay" value={form.preferredDay}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                        >
                          <option value="">Any day works</option>
                          <option value="monday">Monday</option>
                          <option value="tuesday">Tuesday</option>
                          <option value="wednesday">Wednesday</option>
                          <option value="thursday">Thursday</option>
                          <option value="friday">Friday</option>
                          <option value="saturday">Saturday</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime" value={form.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                      >
                        <option value="">Any time works</option>
                        <option value="morning">Morning (9am – 12pm)</option>
                        <option value="afternoon">Afternoon (12pm – 6pm)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        Please describe the nature of your appointment
                      </label>
                      <textarea
                        name="message" rows={4} value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all resize-none"
                        placeholder="Tell us about your smile goals, any concerns, or questions you have…"
                      />
                    </div>

                    <p className="text-navy-700/45 text-xs">
                      By submitting, you consent to being contacted about your inquiry.
                      We never share your information with third parties.
                    </p>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="btn-gold w-full text-base py-4 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-navy-900/40 border-t-navy-900 rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Request Appointment
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Office Info */}
              <FadeUp delay={0.15}>
                <div className="bg-white rounded-3xl border border-cream-300 p-8 shadow-sm">
                  <h3 className="font-serif text-xl font-bold text-navy-900 mb-6">Visit Our Office</h3>
                  <ul className="space-y-5">
                    <li className="flex gap-3.5">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'linear-gradient(135deg, #EBF4FD, #D4EAFA)' }}>
                        <MapPin className="w-4 h-4 text-gold-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900 text-sm">4191 El Camino Real</p>
                        <p className="text-navy-700/55 text-sm">Palo Alto, CA 94306</p>
                        <a
                          href="https://maps.google.com/?q=4191+El+Camino+Real+Palo+Alto+CA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-600 text-xs font-medium hover:text-gold-500 mt-1 inline-block"
                        >
                          Open in Maps →
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-3.5">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'linear-gradient(135deg, #EBF4FD, #D4EAFA)' }}>
                        <Phone className="w-4 h-4 text-gold-500" />
                      </div>
                      <div>
                        <a href="tel:6503244900" className="font-semibold text-navy-900 text-sm hover:text-gold-600 transition-colors">
                          (650) 324-4900
                        </a>
                        <p className="text-navy-700/50 text-xs mt-0.5">Call or text</p>
                      </div>
                    </li>
                    <li className="flex gap-3.5">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'linear-gradient(135deg, #EBF4FD, #D4EAFA)' }}>
                        <Clock className="w-4 h-4 text-gold-500" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { day: 'Mon – Sat', hours: '9:00 am – 6:00 pm' },
                          { day: 'Sunday',    hours: 'Closed' },
                        ].map(({ day, hours }) => (
                          <div key={day} className="flex justify-between gap-4 text-sm">
                            <span className="text-navy-700/60 font-medium">{day}</span>
                            <span className="text-navy-900 font-semibold">{hours}</span>
                          </div>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeUp>

              {/* Map Placeholder */}
              <FadeUp delay={0.25}>
                <div
                  className="rounded-3xl overflow-hidden border border-cream-300 shadow-sm"
                  style={{ height: '220px', background: 'linear-gradient(135deg, #0D1828 0%, #2D2010 100%)', position: 'relative' }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <MapPin className="w-8 h-8 text-gold-400 mb-3" />
                    <p className="text-white font-semibold text-sm">4191 El Camino Real</p>
                    <p className="text-white/50 text-xs mb-4">Palo Alto, CA 94306</p>
                    <a
                      href="https://maps.google.com/?q=4191+El+Camino+Real+Palo+Alto+CA+94306"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold text-xs py-2 px-5 inline-flex items-center gap-1.5"
                    >
                      Open in Google Maps <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </FadeUp>

              {/* Emergency notice */}
              <FadeUp delay={0.3}>
                <div
                  className="rounded-2xl p-5"
                  style={{ background: 'rgba(184,141,44,0.1)', border: '1px solid rgba(184,141,44,0.3)' }}
                >
                  <p className="text-gold-700 font-semibold text-sm mb-1">Dental Emergency?</p>
                  <p className="text-navy-700/70 text-xs leading-relaxed mb-3">
                    Call us immediately — we reserve emergency slots every day for urgent cases.
                  </p>
                  <a href="tel:6503244900" className="text-gold-600 font-bold text-sm hover:text-gold-500 transition-colors">
                    (650) 324-4900
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



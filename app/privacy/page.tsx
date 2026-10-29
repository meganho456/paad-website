import Link from 'next/link'

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    body: [
      'We collect personal information you voluntarily provide when you use our website, including when you submit our contact or appointment-request form, call our office, or otherwise communicate with us. This may include your name, email address, phone number, appointment preferences (such as preferred day, time, and service of interest), whether you are a current patient, how you heard about us, and any message you choose to send us.',
      'We also automatically collect limited technical information when you visit our website, such as your IP address, browser type, device information, pages visited, and the time and date of your visit. This data is collected through cookies and analytics tools described below.',
    ],
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    body: [
      'We use the information we collect to respond to your inquiries and appointment requests, to provide and improve our dental services and website, to communicate with you about your care, and to comply with legal obligations. We do not sell your personal information to third parties.',
    ],
  },
  {
    id: 'how-we-share',
    title: '3. How We Share Your Information',
    body: [
      'We share your information only as necessary to operate our practice and website. Our online contact form is processed through Formspree, a third-party form service, which receives the information you submit so that we can respond to you. We use Google Analytics and Ahrefs Analytics to understand how visitors use our website; these tools collect anonymized usage data and do not identify you personally.',
      'We may also disclose information when required by law, such as in response to a court order or lawful government request, or to protect the rights, safety, or property of our practice, our patients, or the public.',
    ],
  },
  {
    id: 'cookies',
    title: '4. Cookies and Analytics',
    body: [
      'Our website uses cookies and similar technologies to remember your preferences, analyze site traffic, and improve your experience. Google Analytics sets cookies to collect aggregated, anonymized statistics about website usage. You can control cookies through your browser settings; disabling cookies may affect some website functionality.',
    ],
  },
  {
    id: 'security',
    title: '5. Data Security',
    body: [
      'We take reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our website uses encrypted (HTTPS) connections. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'hipaa',
    title: '6. Health Information (HIPAA)',
    body: [
      'As a dental practice, we comply with the Health Insurance Portability and Accountability Act (HIPAA) with respect to protected health information we maintain as part of providing dental care. Please note that this website and its contact form are general communication tools, not a secure patient portal. Do not submit detailed medical records, diagnoses, or other sensitive health information through the website contact form. If you need to share health information with us, please call our office at (650) 324-4900 so we can arrange a secure method.',
    ],
  },
  {
    id: 'your-rights',
    title: '7. Your Rights',
    body: [
      'California residents have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect about you, the right to request deletion of your personal information, the right to opt out of the sale or sharing of personal information (we do not sell personal information), and the right not to be discriminated against for exercising these rights.',
      'If you are located in the European Economic Area or the United Kingdom, you may have additional rights under the General Data Protection Regulation (GDPR), including the right to access, correct, restrict, or erase your personal data, and the right to data portability.',
      'To exercise any of these rights, contact us using the information in Section 11. We will verify your identity before fulfilling your request and will respond within the timeframes required by applicable law.',
    ],
  },
  {
    id: 'children',
    title: '8. Children\u2019s Privacy',
    body: [
      'Our website is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will take steps to delete it.',
    ],
  },
  {
    id: 'third-party-links',
    title: '9. Third-Party Links',
    body: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites, and we encourage you to review their privacy policies.',
    ],
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the \u201cLast updated\u201d date below. Your continued use of the website after changes are posted constitutes your acceptance of the updated policy.',
    ],
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    body: [
      'If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at: Palo Alto Advanced Dentists, 4191 El Camino Real, Palo Alto, CA 94306 \u00b7 Phone: (650) 324-4900.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: '#083B3E' }}>
        <div
          className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-12 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #14B8A6, transparent)' }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-5">Legal</p>
          <h1 className="font-newsreader text-4xl md:text-5xl text-white font-semibold leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-5 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            How we collect, use, and protect your personal information.
          </p>
          <p className="mt-4 text-white/50 text-sm">Last updated: October 29, 2026</p>
        </div>
      </section>

      {/* ── Policy Body ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-navy-800/80 leading-relaxed mb-10">
            Palo Alto Advanced Dentists (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy.
            This Privacy Policy explains what personal information we collect through our website
            at <span className="font-medium">www.paloaltoadvanceddentists.com</span>, how we use
            it, and the choices and rights you have regarding your information.
          </p>

          {sections.map((s) => (
            <div key={s.id} id={s.id} className="mb-10 scroll-mt-28">
              <h2 className="font-newsreader text-2xl text-navy-900 font-semibold mb-4">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-navy-800/75 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-12 pt-8 border-t border-navy-900/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-navy-800/60 text-sm">
              Questions about these terms?{' '}
              <Link href="/contact" className="text-brand-600 hover:text-brand-700 font-medium underline underline-offset-2">
                Contact our office
              </Link>
              .
            </p>
            <Link
              href="/terms"
              className="text-brand-600 hover:text-brand-700 text-sm font-medium underline underline-offset-2 whitespace-nowrap"
            >
              Read our Terms of Service &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

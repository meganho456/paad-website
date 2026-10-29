import Link from 'next/link'

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    body: [
      'By accessing or using the website at www.paloaltoadvanceddentists.com (the \u201cSite\u201d), you agree to be bound by these Terms of Service (\u201cTerms\u201d) and our Privacy Policy. If you do not agree to these Terms, please do not use the Site. These Terms apply to all visitors, users, and others who access the Site.',
    ],
  },
  {
    id: 'website-use',
    title: '2. Website Use',
    body: [
      'You may use the Site for lawful purposes only. You agree not to: (a) use the Site in any way that violates applicable federal, state, or local laws or regulations; (b) attempt to gain unauthorized access to the Site, its servers, or any related systems; (c) interfere with or disrupt the Site\u2019s operation; (d) submit false, misleading, or fraudulent information through our forms; or (e) use automated means, such as bots or scrapers, to access the Site without our prior written permission.',
      'We reserve the right to suspend or terminate your access to the Site at any time, without notice, if we believe you have violated these Terms.',
    ],
  },
  {
    id: 'medical-disclaimer',
    title: '3. Medical Disclaimer',
    body: [
      'The content on this Site \u2014 including text, images, videos, and descriptions of dental procedures \u2014 is provided for general informational and educational purposes only. It is not intended as, and should not be relied upon as, medical or dental advice, diagnosis, or treatment.',
      'Always seek the advice of a qualified dentist or other healthcare provider with any questions you may have regarding a dental condition or treatment. Never disregard professional advice or delay seeking it because of something you have read on this Site. If you think you may have a dental emergency, call our office at (650) 324-4900 or seek emergency care immediately.',
    ],
  },
  {
    id: 'appointments',
    title: '4. Appointment Requests',
    body: [
      'Submitting an appointment request through our online form does not confirm or guarantee an appointment. All requests are subject to review and confirmation by our office staff, who will contact you to schedule a visit. Online submissions are requests only and do not establish a dentist\u2013patient relationship.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    body: [
      'All content on the Site \u2014 including text, graphics, logos, images, videos, and software \u2014 is the property of Palo Alto Advanced Dentists or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.',
      'You may view and print pages from the Site for your personal, non-commercial use only. You may not reproduce, distribute, modify, display, or create derivative works from any Site content without our prior written permission.',
    ],
  },
  {
    id: 'third-party',
    title: '6. Third-Party Services and Links',
    body: [
      'The Site may contain links to third-party websites or use third-party services (such as form processing and analytics providers). We do not control and are not responsible for the content, policies, or practices of any third party. Your use of third-party sites and services is at your own risk.',
    ],
  },
  {
    id: 'disclaimer-warranties',
    title: '7. Disclaimer of Warranties',
    body: [
      'The Site is provided on an \u201cas is\u201d and \u201cas available\u201d basis, without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.',
    ],
  },
  {
    id: 'limitation-liability',
    title: '8. Limitation of Liability',
    body: [
      'To the fullest extent permitted by applicable law, Palo Alto Advanced Dentists and its owners, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site \u2014 even if we have been advised of the possibility of such damages. Our total liability for any claim arising from the Site shall not exceed one hundred dollars ($100).',
      'Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you.',
    ],
  },
  {
    id: 'indemnification',
    title: '9. Indemnification',
    body: [
      'You agree to indemnify, defend, and hold harmless Palo Alto Advanced Dentists and its owners, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable attorneys\u2019 fees) arising from your use of the Site or your violation of these Terms.',
    ],
  },
  {
    id: 'governing-law',
    title: '10. Governing Law',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict-of-law principles. Any dispute arising from or relating to these Terms or the Site shall be resolved exclusively in the state or federal courts located in Santa Clara County, California, and you consent to the jurisdiction of such courts.',
    ],
  },
  {
    id: 'changes',
    title: '11. Changes to These Terms',
    body: [
      'We may revise these Terms at any time by posting the updated Terms on this page and revising the \u201cLast updated\u201d date below. Your continued use of the Site after such changes constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact Us',
    body: [
      'If you have questions about these Terms of Service, please contact us at: Palo Alto Advanced Dentists, 4191 El Camino Real, Palo Alto, CA 94306 \u00b7 Phone: (650) 324-4900.',
    ],
  },
]

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-5 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            The terms governing your use of our website.
          </p>
          <p className="mt-4 text-white/50 text-sm">Last updated: October 29, 2026</p>
        </div>
      </section>

      {/* ── Terms Body ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-navy-800/80 leading-relaxed mb-10">
            These Terms of Service govern your use of the website at{' '}
            <span className="font-medium">www.paloaltoadvanceddentists.com</span> (the
            &ldquo;Site&rdquo;), operated by Palo Alto Advanced Dentists. Please read them carefully.
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
              href="/privacy"
              className="text-brand-600 hover:text-brand-700 text-sm font-medium underline underline-offset-2 whitespace-nowrap"
            >
              Read our Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

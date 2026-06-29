import type { Metadata } from 'next'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best summer Invisalign packages or dental specials in Palo Alto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Palo Alto Advanced Dentists is running an exclusive "Summer & Back-to-School Smile Event" through July 30. This limited-time cosmetic special bundles a complimentary professional chairside teeth whitening session with any new Invisalign treatment, helping local students, parents, and professionals achieve a straighter, brighter smile before the fall semester begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of getting Invisalign during the summer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Summer is the ideal time to start Invisalign in Palo Alto because your schedule is more flexible. You can complete your initial consultation, 3D iTero digital scan, and chairside whitening — all before aligners are delivered — without conflicting with school or a demanding work calendar. Many patients find adapting to wearing trays is easier when their routine is less regimented. Students returning to campus in the fall will already be several weeks into treatment, and working professionals can use vacation days for early appointments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the Invisalign treatment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatment length depends on the complexity of your case. Mild to moderate crowding or spacing typically resolves in 6–12 months; more comprehensive bite corrections can take 18–24 months. At our Palo Alto office we use a 3D iTero digital scan and SmileView simulation to show you a projected outcome and timeline before you commit — so there are no surprises. Progress scans are taken every 6–8 weeks throughout treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does teeth whitening cost in Palo Alto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During our Summer Smile Event (valid for consultations booked by July 30), standalone in-office Zoom whitening is $150 off the regular price. If you are also starting Invisalign, chairside whitening is included complimentarily with your clear aligner case — effectively eliminating the whitening cost entirely. Call us at (650) 324-4900 or book a complimentary consultation online for a personalised quote based on your specific goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any package deals for Invisalign and whitening together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our Summer & Back-to-School Smile Event bundles a complimentary in-office Zoom chairside whitening session with any new Invisalign case started before July 30. The package also includes a post-treatment whitening touch-up performed through your Vivera retainers as custom trays — at no additional charge. It is the most cost-effective way to achieve a straighter, brighter smile at our Palo Alto practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the process for teeth whitening like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional in-office Zoom whitening at our Palo Alto office takes approximately 90 minutes. We begin with a pre-treatment shade assessment, then apply protective barriers to your gums and lips. A hydrogen peroxide whitening gel is activated in intervals by a specialised LED light. Most patients leave up to 8 shades brighter after a single session. A desensitising treatment is applied before you leave, and you receive a take-home touch-up gel kit. For patients combining whitening with Invisalign, we schedule this session before any composite attachments are placed, ensuring perfectly even colour across every tooth surface.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I coordinate teeth whitening with Invisalign clear aligners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For optimal, even results, professional chairside whitening must be performed before your Invisalign composite attachments are placed. This prevents mismatched spots on your enamel. After a brief 1-to-2 week color stabilization period, we take digital scans to begin your clear aligner therapy. A final quick touch-up can be done using your clear retainers at the end of treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can college students home for the summer get Invisalign on the Peninsula?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The summer months are the ideal window for high school and college students on the San Francisco Peninsula to start clear aligner treatment. Because routines are more flexible, we can complete initial consultations, chairside whitening, and 3D digital impressions seamlessly before students head back to campus in the fall.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Summer & Back-to-School Smile Event | Invisalign + Whitening Special',
  description:
    'Free Zoom whitening with Invisalign, or $150 off standalone whitening. Limited offer — book by July 30. Palo Alto Advanced Dentists. Call (650) 324-4900.',
  alternates: {
    canonical: 'https://www.paloaltoadvanceddentists.com/summer-smile-promo',
  },
  openGraph: {
    title: 'Summer Smile Event — Invisalign + Whitening Special | PAAD',
    description:
      'Complimentary Zoom whitening with Invisalign, or $150 off standalone whitening. Valid for consultations by July 30. Palo Alto, CA.',
    url: 'https://www.paloaltoadvanceddentists.com/summer-smile-promo',
  },
}

export default function SummerSmilePromoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  )
}

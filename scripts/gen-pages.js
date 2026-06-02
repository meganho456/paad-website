const fs = require('fs')
const path = require('path')

function makePage(slug, h1line1, h1gold, label, intro, h2a, paras, bullets, h2b, cards, faqs, ctaHead, ctaSub) {
  return `'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle2, ChevronDown } from 'lucide-react'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>{children}</motion.div>
}
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <button onClick={() => setOpen(v => !v)} className="w-full text-left py-5 flex items-center justify-between gap-4 text-white/85 font-semibold hover:text-white transition-colors">
        {q}<ChevronDown className={\`w-4 h-4 shrink-0 transition-transform \${open ? 'rotate-180' : ''}\`} style={{ color: '#D4A843' }} />
      </button>
      {open && <p className="pb-5 text-white/55 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

export default function Page() {
  const bullets = ${JSON.stringify(bullets)}
  const cards = ${JSON.stringify(cards)}
  const faqs = ${JSON.stringify(faqs)}
  return (
    <>
      <section className="relative pt-40 pb-24 hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-4">${label} · <Link href="/services" className="hover:text-white/80 transition-colors">All Services</Link></p>
            <h1 className="font-serif font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}>
              ${h1line1}<br /><span style={{ color: '#D4A843', fontStyle: 'italic' }}>${h1gold}</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-3xl mb-8">${intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">Book Appointment <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors"><Phone className="w-4 h-4" /> (650) 324-4900</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-5" style={{ letterSpacing: '-0.03em' }}>${h2a}</h2>
              ${paras.map(p => `<p className="text-navy-900/65 leading-relaxed mb-4">${p}</p>`).join('\n              ')}
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-2.5 mt-10 lg:mt-14">
                {bullets.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-cream-300 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#D4A843' }} />
                    <span className="text-navy-900 text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-white mb-3" style={{ letterSpacing: '-0.03em' }}>${h2b}</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.map((c, i) => (
              <FadeUp key={i} delay={0.08 * i}>
                <div className="p-6 rounded-2xl h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className="font-semibold text-white mb-2">{c.t}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{c.b}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-10"><h2 className="font-serif text-3xl font-bold text-white" style={{ letterSpacing: '-0.03em' }}>Frequently Asked Questions</h2></FadeUp>
          <div>{faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#000' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>${ctaHead}</h2>
            <p className="text-white/50 mb-6">${ctaSub} Call (650) 324-4900 or request an appointment at Palo Alto Advanced Dentists.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">Request Appointment <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold transition-colors"><Phone className="w-4 h-4" /> (650) 324-4900</a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
`
}

const pages = [
  {
    slug: 'bone-grafting',
    h1line1: 'Bone Grafting', h1gold: 'for Dental Implants · Palo Alto, CA.',
    label: 'Oral Surgery',
    intro: 'Dental bone grafting rebuilds jaw bone volume lost through extraction, gum disease, or prolonged denture wear — creating the foundation needed for successful implant placement. Palo Alto Advanced Dentists offers socket preservation, ridge augmentation, and sinus lifts in-office.',
    h2a: 'Why Bone Grafting Is Necessary',
    paras: ['When a tooth is extracted, the jaw bone begins to resorb immediately — losing up to 25% of its width within the first year. Gum disease destroys bone around roots. Long-term denture wear causes progressive ridge resorption. For dental implants to succeed, sufficient bone density and volume must exist at the planned implant site.', 'Bone graft material — which may be your own bone, donor bone (allograft), bovine-derived (xenograft), or synthetic — is placed to stimulate new bone formation. Over 3–6 months, your body replaces the graft material with living bone, creating the volume needed for implant placement.'],
    bullets: ['Insufficient bone for implant placement', 'Socket preservation after tooth extraction', 'Ridge defect from trauma or infection', 'Sinus floor too low for upper implants', 'Bone loss from advanced gum disease', 'Preparing for implant-supported dentures'],
    h2b: 'Types of Bone Grafting',
    cards: [{ t: 'Socket Preservation', b: 'Placed immediately after extraction to prevent bone collapse. Dramatically improves implant outcomes. Strongly recommended at every extraction site intended for an implant.' }, { t: 'Ridge Augmentation', b: 'Rebuilds bone width or height along the jaw ridge when significant resorption has occurred. Membrane techniques guide new bone regeneration over 4–6 months.' }, { t: 'Sinus Lift', b: 'Elevates the sinus membrane and places graft material to increase bone height in the posterior upper jaw — required when the sinus has pneumatised into the implant zone.' }],
    faqs: [{ q: 'Is bone grafting painful?', a: 'Performed under local anaesthesia — the procedure is comfortable. Post-operative soreness is similar to a tooth extraction and managed with over-the-counter anti-inflammatories. Larger augmentations may warrant prescription relief for 3–5 days.' }, { q: 'How long until I can get the implant after grafting?', a: 'Socket preservation: 3–4 months. Ridge augmentation: 4–6 months. Sinus lift: 6–9 months. We confirm adequate bone with a 3D CBCT scan before scheduling your implant surgery.' }, { q: 'What is the graft material made of?', a: 'We select the most appropriate material for each case — freeze-dried human donor bone (allograft), bovine-derived mineral (xenograft), or synthetic calcium phosphate. All donor materials are sterile, processed to eliminate infectious risk, and FDA-regulated. In some cases, your own bone from another site is used.' }, { q: 'Does bone grafting always succeed?', a: 'Success rates exceed 95% for socket preservation and approximately 90% for larger augmentations. Success depends on blood supply, absence of infection, patient compliance, and not smoking. Smoking significantly impairs healing and is the most common cause of graft failure.' }],
    ctaHead: 'Build the foundation for a lasting implant.',
    ctaSub: 'We carefully plan every graft procedure for predictable, long-term outcomes.',
  },
  {
    slug: 'mini-implants',
    h1line1: 'Mini Dental Implants', h1gold: 'in Palo Alto, CA.',
    label: 'Implantology',
    intro: 'Mini dental implants (1.8–3mm diameter) can be placed with less bone volume and reduced surgical trauma compared to standard implants. They are particularly effective for stabilising loose lower dentures and replacing small teeth in narrow spaces.',
    h2a: 'When Mini Implants Are Appropriate',
    paras: ['Mini implants are appropriate when standard implants are not possible or practical. The most common use is denture stabilisation — snapping a lower denture onto 4–6 mini implants dramatically improves retention and chewing for patients who lack bone volume for standard implants. Mini implants also replace small teeth such as lower incisors where the available space is too narrow for a standard-diameter implant.', 'At PAAD, we use 3D CBCT imaging to assess bone volume and density before recommending implant type. Where standard implants are feasible, they remain our preferred option — they have a longer evidence base and superior strength for single-tooth and full-arch reconstructions.'],
    bullets: ['Loose lower denture needing stabilisation', 'Insufficient bone for standard implants', 'Replacing small teeth (lower incisors)', 'Faster return to function desired', 'Reduced surgical trauma preferred', 'Interim implants during full-arch treatment'],
    h2b: 'Mini vs. Standard Implants',
    cards: [{ t: 'Placement', b: 'Mini implants require less bone and a simpler one-stage procedure — often without incisions. Standard implants typically require a two-stage procedure with a healing period before restoration.' }, { t: 'Best Applications', b: 'Mini implants excel for denture retention and small tooth replacement. Standard implants are preferred for single tooth replacement in normal bone and for All-on-4 full-arch fixed restorations.' }, { t: 'Outcomes', b: 'Mini implants show 90%+ success rates for denture retention. Standard implants have 20-30 year evidence with 95%+ success rates. We set realistic expectations based on your specific case.' }],
    faqs: [{ q: 'How long do mini implants last?', a: 'Clinical studies show 90%+ success at 5–10 years for denture stabilisation applications. Long-term data is not as extensive as for standard implants. We select mini implants when clinically appropriate and manage expectations accordingly.' }, { q: 'Is mini implant placement painful?', a: 'Less invasive than standard implant surgery. Performed under local anaesthesia. Most patients experience minimal post-operative discomfort managed with over-the-counter ibuprofen. Many procedures complete in 1–2 hours with the restoration placed the same day.' }, { q: 'Can I eat normally after mini implants?', a: 'Implant-stabilised dentures restore significant chewing efficiency compared to conventional dentures. Most normal foods become accessible. We recommend avoiding very hard foods that generate extreme bite forces on the implants.' }, { q: 'Will insurance cover mini implants?', a: 'Dental insurance rarely covers implant placement. Some plans partially cover the restorative component. We provide a full cost breakdown before proceeding and offer flexible financing options.' }],
    ctaHead: 'Find out if mini implants are right for you.',
    ctaSub: 'We assess bone volume and goals to recommend the best implant solution.',
  },
  {
    slug: 'invisalign-faqs',
    h1line1: 'Invisalign FAQs', h1gold: 'From Palo Alto\'s Elite Preferred Provider.',
    label: 'Orthodontics',
    intro: 'As an Invisalign Elite Preferred Provider — top 5% of providers nationwide — Palo Alto Advanced Dentists has answered every Invisalign question. Here are the most common questions from our Palo Alto and Silicon Valley patients.',
    h2a: 'How Invisalign Works',
    paras: ['Invisalign uses a series of custom-made, removable clear aligners to gradually shift teeth into correct positions. Each aligner moves specific teeth by controlled increments — typically 0.2–0.3mm. You advance to the next aligner every 1–2 weeks. Most adult comprehensive cases require 18–36 aligners. The entire treatment is planned digitally using ClinCheck software before the first aligner is fabricated.', 'An iTero intraoral scanner captures a precise 3D model of your teeth — no goopy impressions. ClinCheck software maps every planned tooth movement from your current position to your final smile, and you see a virtual preview of your projected outcome before committing to treatment.'],
    bullets: ['How long does treatment take?', 'Does Invisalign hurt?', 'Can it fix my overbite or crossbite?', 'What can I eat with Invisalign?', 'How much does Invisalign cost?', 'Do I need retainers after treatment?', 'How is it different from mail-order aligners?', 'Am I a candidate for complex cases?'],
    h2b: 'Key Facts About Invisalign at PAAD',
    cards: [{ t: 'Wear Time', b: 'Aligners must be worn 20–22 hours per day — removed only for eating, drinking (except water), and oral hygiene. Compliance is the single biggest factor in achieving your projected treatment timeline.' }, { t: 'Diet', b: 'No dietary restrictions — a major advantage over braces. Remove aligners before any food or drink, brush before reinserting. You eat whatever you normally would.' }, { t: 'Comfort', b: 'Mild pressure for 1–3 days when switching to a new aligner indicates the aligner is working. Far less disruptive than traditional braces tightening appointments.' }],
    faqs: [{ q: 'Can Invisalign fix complex bite problems?', a: 'Yes. Modern Invisalign with SmartForce attachments treats the vast majority of bite issues — overbites, underbites, crossbites, open bites, and significant crowding. As an Elite Preferred Provider, Dr. Ho handles complex cases that general providers decline. A 3D iTero scan at consultation confirms candidacy and shows your projected outcome.' }, { q: 'How is Invisalign different from mail-order clear aligners?', a: 'Invisalign is prescribed and monitored by a licensed dentist who examines your teeth in person and oversees every stage of treatment. Mail-order services use remote monitoring — missing decay, gum disease, and bite problems that worsen during treatment. We strongly caution against mail-order aligners for any meaningful orthodontic movement.' }, { q: 'Does insurance cover Invisalign?', a: 'Most dental insurance plans with an orthodontic benefit cover Invisalign to the same amount as traditional braces — typically $1,000–$2,500. We verify your benefits at consultation. CareCredit financing and in-house payment plans spread the cost over your treatment period.' }, { q: 'Are retainers forever after Invisalign?', a: 'Teeth naturally shift back toward their original positions without retention. We provide Vivera retainers (manufactured by Align Technology from your final 3D scan data) and recommend nightly wear for life. Patients who wear retainers consistently maintain their results indefinitely.' }],
    ctaHead: 'See your new smile before you start.',
    ctaSub: 'Free iTero scan and SmileView simulation included at your Invisalign consultation.',
  },
  {
    slug: 'gum-recession',
    h1line1: 'Gum Recession Treatment', h1gold: 'in Palo Alto, CA.',
    label: 'Periodontics',
    intro: 'Gum recession — the gradual exposure of tooth roots as gum tissue pulls back — affects an estimated 50% of adults over 40. Left untreated, it causes sensitivity, decay, and tooth loss. At Palo Alto Advanced Dentists, we offer the minimally invasive PINHOLE Surgical Technique® and traditional gum grafting.',
    h2a: 'What Causes Gum Recession?',
    paras: ['Recession develops through several mechanisms. Aggressive tooth brushing — even with a soft brush — is the most common cause in patients with otherwise healthy gums, gradually eroding the gum margin. Periodontal disease destroys the attachment apparatus, causing the gumline to drop. Teeth positioned outside the normal bone envelope (common in orthodontic cases) have naturally thin overlying tissue.', 'Bruxism places abnormal forces on gum attachments. Tobacco use impairs blood flow and accelerates breakdown. Identifying and correcting the underlying cause is as important as treating the recession itself — without root-cause correction, recession will recur after treatment.'],
    bullets: ['Visible root exposure on front or back teeth', 'Tooth sensitivity to temperature or touch', 'Gum line appearing uneven or receding', 'Cosmetic concern — teeth appearing elongated', 'History of gum disease (periodontitis)', 'Previous aggressive brushing technique', 'Orthodontic treatment with teeth moved outward'],
    h2b: 'Treatment Options for Gum Recession',
    cards: [{ t: 'PINHOLE Surgical Technique®', b: 'No scalpel, no sutures, no donor site. A small pinhole allows instruments to reposition existing gum tissue over exposed roots. Full-arch treatment in one visit with 24–48 hour recovery. Dr. Ho is a certified PST practitioner.' }, { t: 'Connective Tissue Graft', b: 'Gold standard for significant recession. Palate tissue is placed under the existing gum margin to cover exposed roots. High predictability. 2–4 week recovery. Best for single sites with severe recession.' }, { t: 'Free Gingival Graft', b: 'Used when additional keratinised tissue volume is needed rather than just coverage — common for lower front teeth with very thin gum tissue. Thickens and stabilises the gum margin.' }],
    faqs: [{ q: 'Is gum recession reversible?', a: 'Recession can be surgically corrected — but this requires a clinical procedure, not spontaneous reversal. Existing root exposure is covered by repositioning or grafting tissue. Bone loss that may accompany recession from periodontal disease is not restored without separate bone grafting.' }, { q: 'PINHOLE or gum graft — which is better?', a: 'Both achieve equivalent root coverage outcomes in clinical studies. PINHOLE offers no incision, no sutures, no palate donor site discomfort, faster recovery, and full-arch treatment in one visit. Traditional grafting is preferred when significant tissue volume increase is needed beyond simple repositioning.' }, { q: 'Will recession come back after treatment?', a: 'Not if the underlying cause is addressed. We provide brushing technique guidance, night guard recommendations for bruxism, and ongoing periodontal maintenance. Patients who address root causes maintain excellent long-term stability.' }, { q: 'Does insurance cover recession treatment?', a: 'When recession causes clinical problems — sensitivity, increased decay risk, or tooth stability concerns — periodontal treatment is typically covered as medically necessary. Coverage varies by plan. We provide pre-authorisation documentation to maximise reimbursement.' }],
    ctaHead: 'Restore your gum line. Protect your teeth.',
    ctaSub: 'Schedule a recession evaluation with certified PST practitioner Dr. James Ho.',
  },
  {
    slug: 'gum-grafting',
    h1line1: 'Gum Grafting', h1gold: 'in Palo Alto, CA.',
    label: 'Periodontics',
    intro: 'Gum grafting — also called soft tissue grafting — surgically covers exposed tooth roots to eliminate sensitivity, reduce decay risk, and restore gum aesthetics. Palo Alto Advanced Dentists performs connective tissue grafts and free gingival grafts for lasting root coverage.',
    h2a: 'When Is Gum Grafting Needed?',
    paras: ['Gum grafting is indicated when gum recession has exposed root surfaces that cannot be adequately covered by repositioning existing tissue (as with the PINHOLE technique). This occurs when recession is severe, tissue volume is insufficient, or multiple sites across the arch require treatment simultaneously with maximum predictability.', 'A connective tissue graft harvests a thin piece of tissue from beneath the palate surface and places it under the existing gum margin at the recession site. The palate heals completely within 2–3 weeks. The graft integrates with the blood supply of the recipient site and gradually appears identical to surrounding natural gum tissue.'],
    bullets: ['Significant root exposure on one or more teeth', 'Insufficient tissue for PINHOLE repositioning', 'Severe sensitivity to heat, cold, or touch', 'Decay on exposed root surface', 'Cosmetic improvement of uneven gum line', 'Thin gum tissue predisposed to further recession'],
    h2b: 'Types of Gum Grafts',
    cards: [{ t: 'Connective Tissue Graft', b: 'Most common procedure. Subepithelial connective tissue from the palate is placed under the existing gum margin. Excellent aesthetics — the graft site blends naturally. Predictable 85–95% root coverage.' }, { t: 'Free Gingival Graft', b: 'Full-thickness palate tissue placed at the recession site when tissue volume increase is the primary goal. Slightly more visible healing but adds maximum keratinised tissue — ideal for thin lower front tooth gum tissue.' }, { t: 'Pedicle Graft', b: 'Adjacent gum tissue is rotated or advanced to cover the recession site — no palate donor needed. Only possible when healthy tissue exists adjacent to the recession area.' }],
    faqs: [{ q: 'How painful is gum grafting?', a: 'The surgery is performed under local anaesthesia — the procedure itself is comfortable. Post-operatively, both the graft site and the palate donor site are sore for 1–2 weeks. Most patients manage with prescription pain relief for the first 3–5 days. A soft diet is required for 2 weeks. Compared to PINHOLE, traditional grafting involves more post-operative discomfort but is sometimes clinically necessary.' }, { q: 'How successful is gum grafting?', a: 'Connective tissue grafts achieve 85–95% root coverage in clinical studies when performed by experienced practitioners. Long-term results at 5–10 year follow-up show stable coverage in patients who have addressed the underlying cause of recession and maintain proper brushing technique.' }, { q: 'How long is recovery from a gum graft?', a: 'The palate donor site heals in 2–3 weeks. The graft site integrates over 4–6 weeks. Full maturation and final aesthetic result occurs over 3–6 months as the grafted tissue adapts to its new location. Patients can typically return to normal eating and full activity within 2 weeks.' }, { q: 'Can multiple teeth be grafted at once?', a: 'Yes — we can graft multiple adjacent teeth in a single appointment. Treating several sites at once reduces the total number of surgical visits and anaesthesia events. The palate can provide sufficient donor tissue for up to 6–8 teeth in a single session, depending on palate anatomy.' }],
    ctaHead: 'Protect your roots with lasting gum coverage.',
    ctaSub: 'We assess whether PINHOLE or grafting is the right approach for your recession.',
  },
  {
    slug: 'periodontal-scaling',
    h1line1: 'Scaling & Root Planing', h1gold: 'Deep Cleaning in Palo Alto, CA.',
    label: 'Periodontics',
    intro: 'Scaling and root planing (SRP) is the gold-standard non-surgical treatment for periodontitis. It removes calculus deposits from root surfaces below the gumline and disrupts the bacterial biofilm responsible for gum disease — halting its progression and allowing tissue reattachment.',
    h2a: 'What Is Scaling & Root Planing?',
    paras: ['SRP goes beyond a routine cleaning. A standard prophylaxis (cleaning) removes plaque and calculus from the crown of the tooth — above the gumline — and is appropriate for patients with healthy or gingivitis-level gum tissue. Scaling and root planing specifically addresses root surfaces below the gumline, inside periodontal pockets of 4mm or greater depth.', 'Using ultrasonic scalers and hand instruments, we remove calculus from all root surfaces and then plane (smooth) the root to remove bacterial toxins and create a clean surface that allows gum tissue to reattach. SRP is typically completed over 2 appointments — treating one half of the mouth per visit under local anaesthesia.'],
    bullets: ['Periodontal pocket depths of 4mm or greater', 'Bleeding on probing at multiple sites', 'Calculus deposits below the gumline on X-ray', 'Bone loss visible on radiographs', 'Diagnosis of mild to moderate periodontitis', 'Gum disease returning after previous treatment'],
    h2b: 'What to Expect During & After SRP',
    cards: [{ t: 'During Treatment', b: 'Each quadrant or half-mouth session is performed under local anaesthesia — you should feel pressure but no pain. Sessions typically take 45–90 minutes. Ultrasonic instruments and hand scalers are used in combination for thorough debridement.' }, { t: 'Antibiotic Therapy', b: 'After scaling, locally delivered antibiotics (Arestin® minocycline microspheres) are placed in active pockets to extend the antimicrobial effect of treatment and further reduce pocket depths.' }, { t: 'Re-evaluation', b: 'At 4–8 weeks post-treatment, we perform a full re-evaluation including updated pocket charting. Most patients show significant pocket reduction and are transitioned to 3-month maintenance intervals.' }],
    faqs: [{ q: 'Does SRP hurt?', a: 'The procedure is performed under local anaesthesia, so it should be comfortable. After the anaesthesia wears off, the gum tissue may be sore for 24–48 hours. Over-the-counter ibuprofen is typically sufficient. Gum sensitivity to temperature may persist for 1–2 weeks as the tissue heals and tightens around the root.' }, { q: 'How many appointments does SRP take?', a: 'SRP is typically completed over 2 appointments on consecutive or near-consecutive visits — one per half of the mouth. Each appointment takes 45–90 minutes. A follow-up re-evaluation at 4–8 weeks assesses treatment response and determines next steps.' }, { q: 'Will SRP cure my gum disease?', a: 'SRP halts active gum disease and creates conditions for healing — but periodontitis is a chronic condition that requires ongoing management, not a single cure. After active treatment, 3-month maintenance visits are essential to prevent reactivation. Patients who maintain this schedule typically preserve their teeth long-term.' }, { q: 'Is SRP covered by insurance?', a: 'Most dental insurance plans with a periodontal benefit cover SRP at 50–80% after deductible. We verify your coverage before treatment and provide a pre-treatment estimate so you know your out-of-pocket cost. Flexible financing is available for any balance.' }],
    ctaHead: 'Stop gum disease before it costs you teeth.',
    ctaSub: 'Schedule a periodontal evaluation including full-mouth pocket charting.',
  },
  {
    slug: 'crown-lengthening',
    h1line1: 'Crown Lengthening', h1gold: 'in Palo Alto, CA.',
    label: 'Periodontal Surgery',
    intro: 'Crown lengthening is a surgical procedure that repositions the gum and bone to expose more tooth structure — either to allow crown placement on a badly broken-down tooth, or to reduce excessive gum tissue that creates a "gummy smile."',
    h2a: 'When Is Crown Lengthening Needed?',
    paras: ['There are two main indications for crown lengthening. The first is restorative: when a tooth has broken below the gumline or has deep decay that extends beneath the gum margin, a crown cannot be placed without first exposing sufficient tooth structure for the crown to grip. Crown lengthening surgery repositions the gum and underlying bone to expose the tooth structure needed for a stable crown margin.', 'The second indication is aesthetic: a "gummy smile" occurs when excess gum tissue covers too much of the tooth crown, making teeth appear short. Aesthetic crown lengthening reshapes the gum line to expose more of the natural tooth, creating a balanced, proportionate smile. This is often performed in combination with porcelain veneers for comprehensive smile transformation.'],
    bullets: ['Tooth broken below the gumline requiring crown', 'Deep decay extending under the gum margin', 'Crown margin too close to bone (biological width violation)', 'Gummy smile — excess gum tissue visible when smiling', 'Short-looking teeth despite normal tooth length', 'Pre-treatment for porcelain veneers or smile makeover'],
    h2b: 'The Crown Lengthening Procedure',
    cards: [{ t: 'Surgical Process', b: 'Performed under local anaesthesia in-office. Small incisions allow the gum tissue to be reflected and the underlying bone to be reshaped. Sutures are placed and typically removed after 7–10 days.' }, { t: 'Healing', b: 'Initial healing takes 2–4 weeks. Final tissue stabilisation occurs over 3–6 months — crowns or veneers are typically placed 6–8 weeks after crown lengthening to allow the tissue margin to settle.' }, { t: 'Results', b: 'Restorative crown lengthening creates the tooth exposure needed for a stable, long-lasting crown. Aesthetic crown lengthening creates a more balanced gum line that dramatically improves smile proportions.' }],
    faqs: [{ q: 'Is crown lengthening painful?', a: 'The procedure is performed under local anaesthesia — no pain during surgery. Post-operative soreness and swelling are expected for 3–7 days and managed with anti-inflammatories and cold compresses. Most patients return to normal activity within 2–3 days.' }, { q: 'How long after crown lengthening can I get my crown?', a: 'We typically wait 6–8 weeks for the gum tissue to stabilise before taking crown impressions or digital scans. Placing a crown too soon risks the final margin ending up in the wrong position as the tissue continues to settle.' }, { q: 'Will crown lengthening make my tooth look longer?', a: 'In restorative cases, yes — more tooth structure is exposed, which may make the tooth appear slightly longer. The aesthetic result blends well once the crown is placed. In aesthetic cases, the gum line is reshaped to expose more of the existing crown, making teeth appear correctly proportioned rather than longer.' }, { q: 'Does insurance cover crown lengthening?', a: 'When crown lengthening is required for restorative purposes (to place a crown), it is typically covered by dental insurance as a necessary procedure. Aesthetic crown lengthening for cosmetic purposes is generally not covered. We verify your specific benefits before treatment.' }],
    ctaHead: 'Prepare your tooth for the restoration it needs.',
    ctaSub: 'Dr. Ho evaluates every case for the least invasive, most effective approach.',
  },
  {
    slug: 'bruxism',
    h1line1: 'Bruxism & Teeth Grinding', h1gold: 'Treatment in Palo Alto, CA.',
    label: 'TMJ & Bite',
    intro: 'Bruxism — the habitual clenching or grinding of teeth, usually during sleep — affects an estimated 10–15% of adults and causes progressive enamel wear, cracked teeth, jaw pain, headaches, and gum recession. Palo Alto Advanced Dentists offers night guards, bite therapy, and Botox for bruxism management.',
    h2a: 'Signs and Consequences of Bruxism',
    paras: ['Most patients are unaware they grind their teeth — the habit occurs during sleep and is often first noticed by a partner or detected by a dentist during examination. The forces generated during sleep bruxism can exceed normal chewing forces by 6–10 times, causing rapid wear of enamel, micro-fractures in tooth structure, and damage to existing dental restorations.', 'Over time, untreated bruxism flattens and shortens the teeth, causes gum recession on the buccal (cheek-side) surfaces, leads to tooth sensitivity, and overloads the jaw joints and muscles — resulting in TMJ disorder, morning headaches, facial pain, and limited mouth opening.'],
    bullets: ['Flattened, worn-down tooth surfaces', 'Cracked or chipped teeth', 'Tooth sensitivity to temperature', 'Jaw pain or tightness on waking', 'Morning headaches (temporal region)', 'Partner reports grinding sounds at night', 'Cheek biting from clenching', 'Gum recession on outer tooth surfaces'],
    h2b: 'Treatment Options for Bruxism',
    cards: [{ t: 'Custom Night Guard', b: 'A hard acrylic splint worn over upper or lower teeth during sleep. Absorbs grinding forces, prevents enamel wear, and reduces muscle activity. The most common and effective first-line treatment.' }, { t: 'Botox for Bruxism', b: 'Botulinum toxin injected into the masseter muscles weakens them sufficiently to reduce grinding force without affecting normal chewing. Effective for severe cases. Lasts 4–6 months per treatment.' }, { t: 'Occlusal Equilibration', b: 'Selective reshaping of bite surfaces to eliminate interference points that trigger clenching. Recommended when bite discrepancies are contributing to the bruxism habit.' }],
    faqs: [{ q: 'Can bruxism be cured?', a: 'Bruxism is a chronic condition in most patients — it can be managed but not permanently eliminated for the majority. Night guards protect the teeth from the consequences of grinding without stopping the habit itself. Botox reduces the force of grinding. Stress management, sleep hygiene, and cognitive behavioural therapy address contributing psychological factors.' }, { q: 'Is a custom night guard better than store-bought?', a: 'Significantly better. Custom guards made from precise impressions of your teeth fit precisely, distribute forces evenly, and are made from durable acrylic. Over-the-counter boil-and-bite guards are imprecise, bulky, and can actually increase clenching activity. We recommend custom night guards exclusively.' }, { q: 'Can bruxism damage dental implants?', a: 'Yes — implants lack the periodontal ligament shock absorption that natural teeth have, making them more susceptible to the forces of bruxism. Night guard use is strongly recommended for all implant patients who grind. Unchecked bruxism is a significant risk factor for implant failure and prosthetic component fracture.' }, { q: 'How long does a night guard last?', a: 'A custom hard acrylic night guard typically lasts 3–7 years depending on the severity of grinding. We check the guard at your regular appointments and replace it when it becomes too thin or shows signs of failure. Patients with severe bruxism may wear through guards more quickly.' }],
    ctaHead: 'Protect your teeth before the grinding causes permanent damage.',
    ctaSub: 'We evaluate bite, wear patterns, and jaw health to recommend the right approach.',
  },
  {
    slug: 'dental-bridges',
    h1line1: 'Dental Bridges', h1gold: 'in Palo Alto, CA.',
    label: 'Prosthodontics',
    intro: 'A dental bridge is a fixed restoration that spans a gap left by one or more missing teeth. Porcelain crowns on the adjacent teeth support an artificial tooth (pontic) in the space, restoring your bite, smile, and preventing neighbouring teeth from shifting.',
    h2a: 'How Dental Bridges Work',
    paras: ['A traditional three-unit bridge consists of two dental crowns (abutments) placed on the teeth on either side of the gap, with a false tooth (pontic) suspended between them. The bridge is a single connected unit cemented permanently in place — it does not come out for cleaning. Proper flossing under the bridge with floss threaders or a water flosser is essential for hygiene.', 'At Palo Alto Advanced Dentists, bridges are fabricated from high-strength porcelain-fused-to-zirconia or lithium disilicate — providing natural appearance and durability. We discuss implant-supported replacement alongside bridge as an alternative, as implants do not require modifying the adjacent healthy teeth and offer superior long-term bone preservation.'],
    bullets: ['One or two adjacent missing teeth', 'Adjacent teeth already have crowns or large restorations', 'Patient prefers fixed solution to removable partial denture', 'Insufficient bone for implant placement', 'Faster treatment timeline desired', 'Budget considerations favouring bridge over implants'],
    h2b: 'Types of Dental Bridges',
    cards: [{ t: 'Traditional Bridge', b: 'Two crowns on adjacent teeth supporting a pontic. Most common type. Requires preparation (reducing) the abutment teeth. Highly durable — lasts 10–15 years with proper care.' }, { t: 'Cantilever Bridge', b: 'Pontic supported by a crown on only one adjacent tooth. Used when only one side has a healthy abutment. Higher stress on the single abutment — used selectively.' }, { t: 'Implant-Supported Bridge', b: 'Pontic supported by implants rather than natural teeth. No modification of adjacent teeth. Superior bone preservation. The preferred option when implants are feasible.' }],
    faqs: [{ q: 'How long do dental bridges last?', a: 'With proper care, traditional bridges last 10–15 years. Longevity depends on oral hygiene under the bridge, bite forces, and the health of the abutment teeth. Implant-supported bridges can last 20–30 years. We monitor bridges at every check-up for marginal integrity and abutment tooth health.' }, { q: 'Does getting a bridge hurt?', a: 'Bridge preparation is performed under local anaesthesia. The abutment teeth are reduced in size to accommodate the crown portion of the bridge — this is permanent alteration. Temporary bridges protect the prepared teeth while the permanent bridge is fabricated (1–2 weeks).' }, { q: 'Should I get a bridge or an implant?', a: 'Dental implants are generally preferred when clinically feasible — they do not require altering healthy adjacent teeth, preserve jaw bone, and have superior long-term outcomes. Bridges are appropriate when the adjacent teeth already need crowns, when bone is insufficient for implants, or when faster and more economical treatment is needed.' }, { q: 'How do I clean under a bridge?', a: 'Standard dental floss cannot pass through the bridge — use floss threaders, Superfloss, or a water flosser to clean under the pontic daily. We demonstrate the correct technique at bridge placement and check the hygiene of the bridge area at every maintenance appointment.' }],
    ctaHead: 'Replace your missing tooth with a natural-looking bridge.',
    ctaSub: 'We discuss all tooth replacement options including implants at your consultation.',
  },
  {
    slug: 'inlays-onlays',
    h1line1: 'Dental Inlays & Onlays', h1gold: 'in Palo Alto, CA.',
    label: 'Restorative Dentistry',
    intro: 'Inlays and onlays are precision porcelain or gold restorations that repair teeth too damaged for fillings but not damaged enough to require full crowns. They preserve more natural tooth structure than a crown while providing greater strength than a filling.',
    h2a: 'Inlays, Onlays & Their Differences',
    paras: ['An inlay fits within the cusps (bumps) of a back tooth — it replaces the core of a decayed or broken back tooth. An onlay extends beyond one or more cusps — sometimes called a "partial crown" — and covers more of the tooth surface when damage is more extensive. Both are fabricated in porcelain or gold and bonded permanently to the tooth.', 'The advantage of inlays and onlays over full crowns is conservation. A full crown requires removing significant tooth structure from all surfaces. Inlays and onlays remove only the damaged portion, preserving the maximum amount of healthy natural tooth. The advantage over composite fillings is strength — a well-fitted porcelain inlay/onlay is significantly more durable than a large direct filling.'],
    bullets: ['Large cavity not suitable for direct filling', 'Old amalgam filling failing or cracking the tooth', 'Damaged cusp requiring coverage', 'Tooth with insufficient structure for filling but enough for crown alternative', 'Preference for tooth-coloured restoration', 'Desire to preserve maximum natural tooth structure'],
    h2b: 'Porcelain vs. Gold Inlays/Onlays',
    cards: [{ t: 'Porcelain', b: 'Tooth-coloured — completely natural appearance. Bonds chemically to the tooth, strengthening the remaining structure. Slightly less durable than gold in extreme bite-force scenarios. Preferred for visible teeth.' }, { t: 'Gold', b: 'Most durable inlay/onlay material — lasts 20–30 years. Requires minimal tooth preparation. Visible gold colour makes it preferred for back molars where aesthetics are less critical. An excellent long-term investment.' }, { t: 'Composite', b: 'Can be placed chairside in a single visit. Less costly. Not as durable or wear-resistant as porcelain or gold. Appropriate for smaller restorations or when budget is the primary concern.' }],
    faqs: [{ q: 'How long do inlays and onlays last?', a: 'Porcelain inlays and onlays last 10–20 years with proper care. Gold restorations may last 20–30 years. Both significantly outlast large direct composite fillings, which typically require replacement within 5–10 years. We check margins and wear at your regular appointments.' }, { q: 'Does getting an inlay or onlay require two appointments?', a: 'Traditional inlays and onlays require two appointments — preparation and impression at the first, and bonding of the laboratory-fabricated restoration at the second. The process takes 1–2 weeks. We place a temporary in between. Some practices offer CAD/CAM same-day options for certain cases.' }, { q: 'Is an inlay/onlay better than a crown?', a: 'When tooth damage is limited to specific areas, an inlay or onlay is preferred — it preserves more tooth structure. When damage is extensive, a full crown provides better protection and a more predictable seal. We assess each tooth individually and recommend the most conservative restoration that will provide reliable long-term function.' }, { q: 'Are inlays/onlays covered by insurance?', a: 'Most dental insurance plans cover inlays and onlays as restorative procedures — coverage is typically similar to that for crowns (50–80% after deductible). We verify your specific benefits and provide an estimate before treatment.' }],
    ctaHead: 'Restore your tooth with the most conservative solution.',
    ctaSub: 'We assess every tooth to recommend the least invasive long-term restoration.',
  },
  {
    slug: 'digital-xrays',
    h1line1: 'Digital Dental X-Rays', h1gold: 'in Palo Alto, CA.',
    label: 'Diagnostic Technology',
    intro: 'Digital X-rays at Palo Alto Advanced Dentists use 90% less radiation than traditional film, produce instant high-resolution images, and allow precise diagnosis of cavities, bone levels, root anatomy, and pathology not visible to the naked eye.',
    h2a: 'Why Digital X-Rays Matter for Your Care',
    paras: ['The human eye can only see what is on the surface. Dental X-rays reveal decay between teeth (where most cavities begin), bone loss beneath the gumline, root anatomy for implant and root canal planning, cysts and tumours, impacted teeth, and the fit of existing restorations. Approximately 60% of dental pathology is only detectable on radiographs.', 'Our digital sensor technology captures diagnostic-quality images in seconds and displays them at the chair. We can enhance contrast, measure bone levels, and compare current images to previous ones side-by-side — improving diagnostic accuracy and facilitating clearer communication with patients about their oral health.'],
    bullets: ['Detect cavities between teeth not visible clinically', 'Assess bone levels around teeth and implants', 'Evaluate root anatomy before root canal or implant', 'Screen for cysts, tumours, and pathology', 'Plan implant placement with precise measurements', 'Monitor healing after treatment'],
    h2b: 'Types of X-Rays We Use',
    cards: [{ t: 'Bitewing X-Rays', b: 'The most common X-ray — shows the upper and lower back teeth in contact. Detects interproximal decay (between teeth) and bone levels. Taken annually for most patients.' }, { t: 'Periapical X-Rays', b: 'Shows the entire tooth from crown to root tip, including the surrounding bone. Used to diagnose root fractures, periapical infections, root length, and bone pathology around specific teeth.' }, { t: '3D CBCT (Cone Beam CT)', b: 'Three-dimensional X-ray providing comprehensive anatomical data. Used for implant planning, complex extractions, orthodontic assessment, and evaluation of jaw pathology. Available at PAAD for complex cases.' }],
    faqs: [{ q: 'Are dental X-rays safe?', a: 'Digital dental X-rays are extremely safe. A full set of bitewing X-rays exposes you to less radiation than a flight from San Francisco to Los Angeles. Our digital system uses 90% less radiation than traditional film. We also use lead aprons and thyroid collars as additional protection. X-rays are taken only when clinically indicated — we follow the ALARA principle (as low as reasonably achievable).' }, { q: 'How often do I need dental X-rays?', a: 'For most adults with good oral health, we recommend bitewing X-rays annually and a full-mouth series every 3–5 years. Patients with active decay, gum disease, or complex restorations may require X-rays more frequently. Pregnant patients are typically not X-rayed unless there is a clinical emergency.' }, { q: 'What can you see on a dental X-ray that you cannot see clinically?', a: 'Interproximal decay (the most common location for cavities), early bone loss, root anatomy, impacted teeth, periapical infections (abscesses at root tips), jaw cysts and tumours, the fit of crowns and fillings, and calculus deposits below the gumline. Clinical examination and X-rays together provide a complete diagnostic picture.' }, { q: 'Can I bring X-rays from my previous dentist?', a: 'Yes — if you have recent X-rays (within 12–24 months), we are happy to use them to avoid unnecessary radiation exposure. Most digital X-ray systems can exchange standard DICOM format images. Please request them from your previous dental office before your first appointment with us.' }],
    ctaHead: 'Accurate diagnosis is the foundation of great dental care.',
    ctaSub: 'Schedule a comprehensive exam including digital X-rays at Palo Alto Advanced Dentists.',
  },
  {
    slug: 'oral-cancer-exam',
    h1line1: 'Oral Cancer Screening', h1gold: 'in Palo Alto, CA.',
    label: 'Preventive Care',
    intro: 'Oral cancer kills one person every hour in the United States — not because it is hard to treat when caught early, but because it is too often caught late. At Palo Alto Advanced Dentists, comprehensive oral cancer screening is included at every exam appointment.',
    h2a: 'Why Oral Cancer Screening Saves Lives',
    paras: ['Oral cancer — including cancer of the lips, tongue, cheeks, floor of mouth, hard and soft palate, and throat — has a 90% 5-year survival rate when detected at Stage I. Detected at Stage IV, survival falls to approximately 20%. The difference is early detection. Most early oral cancers produce no pain and are invisible without systematic examination.', 'Risk factors include tobacco use (smoking and smokeless), heavy alcohol consumption, HPV infection (particularly HPV-16), sun exposure to the lips, personal or family history of cancer, and age over 40. However, approximately 25% of oral cancers occur in patients with no traditional risk factors — which is why universal screening at every dental visit is the standard of care.'],
    bullets: ['Tobacco users (smoking or smokeless)', 'Heavy alcohol consumption', 'HPV infection (particularly HPV-16)', 'Prolonged sun exposure to lips', 'Age over 40', 'Previous oral cancer diagnosis', 'Immunocompromised patients', 'No risk factors — but regular screening still recommended'],
    h2b: 'What Our Oral Cancer Screening Includes',
    cards: [{ t: 'Visual Examination', b: 'Systematic inspection of all oral soft tissues — lips, tongue (all surfaces), floor of mouth, cheeks, hard and soft palate, tonsils, and oropharynx. We look for unusual colour changes, lesions, lumps, or asymmetry.' }, { t: 'Physical Palpation', b: 'We gently feel the floor of the mouth, tongue, lymph nodes of the neck, and salivary glands for unusual masses, firmness, or tenderness. Many oral cancers are discovered by palpation before they become visible.' }, { t: 'Adjunctive Screening', b: 'When indicated, we use adjunctive tools including tissue staining or fluorescence devices to highlight areas of concern that may not be obvious under white light. Suspicious lesions are referred for biopsy.' }],
    faqs: [{ q: 'How long does an oral cancer screening take?', a: 'A thorough oral cancer screening adds only 3–5 minutes to your regular exam appointment. It is non-invasive and painless. We perform this screening as a standard component of every comprehensive examination — you do not need to request it separately.' }, { q: 'What happens if a suspicious lesion is found?', a: 'If we identify a lesion that warrants further evaluation, we document its appearance, location, and size, then typically monitor it at a 2-week follow-up. Many benign ulcers and irritations resolve in 2 weeks. Persistent lesions that have not resolved or lesions with features concerning for malignancy are referred to an oral surgeon or oral pathologist for biopsy.' }, { q: 'Is oral cancer related to HPV?', a: 'Yes. HPV-related oropharyngeal cancers (affecting the back of the throat and base of the tongue) have increased significantly over the past two decades and now account for more than 70% of oropharyngeal cancers in the US. HPV-positive oral cancers typically respond better to treatment than tobacco-related cancers. The HPV vaccine reduces the risk when administered before exposure.' }, { q: 'Should I be concerned about a white or red patch in my mouth?', a: 'Persistent white patches (leukoplakia) or red patches (erythroplakia) in the mouth warrant professional evaluation. White patches are benign in the majority of cases but carry a small risk of malignant transformation. Red patches carry a higher risk and should always be examined. Any lesion persisting for more than 2 weeks should be professionally assessed.' }],
    ctaHead: 'Early detection saves lives. Get screened at every visit.',
    ctaSub: 'Oral cancer screening is included at every exam at Palo Alto Advanced Dentists.',
  },
  {
    slug: 'tmj-treatment',
    h1line1: 'TMJ Treatment', h1gold: 'in Palo Alto, CA.',
    label: 'TMJ & Occlusion',
    intro: 'Temporomandibular joint (TMJ) disorder causes jaw pain, clicking, headaches, limited opening, and facial muscle fatigue — affecting an estimated 10–12 million Americans. At Palo Alto Advanced Dentists, we diagnose and treat TMJ disorders with splint therapy, bite correction, Botox, and physiotherapy referral.',
    h2a: 'Understanding TMJ Disorders',
    paras: ['The temporomandibular joint connects your jaw to your skull on each side. TMJ disorders (TMD) encompass a spectrum of conditions affecting the joint itself (articular disc displacement, arthritis, joint hypermobility) and the surrounding musculature (myofascial pain, bruxism-related muscle overload). Symptoms range from mild clicking with no pain to severe joint degeneration with limited jaw opening.', 'Common triggers include teeth grinding (bruxism), a bite that does not properly align (malocclusion), trauma to the jaw, arthritis, and stress-related muscle clenching. Diagnosis requires a comprehensive clinical examination, bite analysis, and often imaging — including panoramic X-rays or CBCT — to assess joint anatomy.'],
    bullets: ['Jaw pain or soreness on waking', 'Clicking, popping or grating sounds in the jaw', 'Headaches at the temples or behind the eyes', 'Difficulty opening or closing the mouth fully', 'Pain when chewing or yawning', 'Facial muscle fatigue or tightness', 'Ear pain or ringing (tinnitus)', 'Teeth grinding (bruxism) history'],
    h2b: 'TMJ Treatment Options at PAAD',
    cards: [{ t: 'Splint Therapy', b: 'A custom occlusal splint worn at night repositions the jaw in a more relaxed, neutral position — reducing muscle activity, disc pressure, and pain. First-line conservative treatment for most TMJ patients.' }, { t: 'Botox for TMJ', b: 'Botulinum toxin injected into the masseter and temporalis muscles reduces grinding force and muscle-generated joint compression. Highly effective for pain relief in bruxism-related TMJ disorders. Lasts 4–6 months.' }, { t: 'Bite Equilibration', b: 'Selective reshaping of tooth surfaces to eliminate bite interferences that trigger muscle guarding and joint loading. Recommended when occlusal analysis confirms bite discrepancy as a contributing factor.' }],
    faqs: [{ q: 'Is TMJ disorder serious?', a: 'TMJ disorder ranges from a minor inconvenience (occasional clicking without pain) to a significantly debilitating condition (severe pain, limited opening, inability to chew). Most cases fall in the mild-to-moderate range and respond well to conservative treatment. A small percentage develop permanent joint changes requiring specialist or surgical management.' }, { q: 'Can TMJ disorder resolve on its own?', a: 'Mild cases sometimes resolve with self-care — soft diet, heat/cold application, reducing jaw loading activities, stress management. However, untreated moderate-to-severe TMD typically worsens, particularly when bruxism is involved. Professional evaluation is warranted for symptoms lasting more than 2–3 weeks or significantly impacting quality of life.' }, { q: 'How does a night splint help TMJ?', a: 'The splint holds the jaw in a therapeutic position that reduces pressure on the articular disc and surrounding tissues, relaxes the elevator muscles, and prevents the teeth-grinding that overloads the joint. Most patients experience significant pain reduction within 2–4 weeks of consistent splint use.' }, { q: 'When should TMJ be referred to a specialist?', a: 'We refer to oral and maxillofacial surgeons or TMJ specialists when imaging shows significant joint degeneration, when conservative treatment fails after 3–6 months, when there is severely restricted jaw opening (trismus), or when the clinical picture suggests a condition requiring surgical intervention.' }],
    ctaHead: 'Jaw pain is not something you have to live with.',
    ctaSub: 'Let us evaluate your bite, joint health, and muscle function.',
  },
  {
    slug: 'braces',
    h1line1: 'Orthodontic Braces', h1gold: 'in Palo Alto, CA.',
    label: 'Orthodontics',
    intro: 'Traditional orthodontic braces remain the most powerful tool for correcting complex alignment, bite, and spacing issues. At Palo Alto Advanced Dentists, we offer metal and ceramic bracket systems alongside our Invisalign Elite program — ensuring every patient gets the orthodontic solution best matched to their clinical needs.',
    h2a: 'When Braces Are the Right Choice',
    paras: ['While Invisalign has expanded to treat most orthodontic conditions, braces retain distinct clinical advantages in specific scenarios. Severe rotations — particularly of round-rooted teeth like canines — are more reliably controlled with bracket-and-wire mechanics. Complex multi-plane tooth movements, significant skeletal discrepancies requiring growth modification in adolescents, and cases requiring precise vertical control of tooth eruption are areas where fixed appliances excel.', 'For adolescents especially, braces remove the compliance variable entirely — the appliance works continuously without requiring the patient to wear and change aligners. For complex adult cases, a combination approach is sometimes used: braces for the active correction phase followed by Invisalign Vivera retainers for retention.'],
    bullets: ['Severe crowding requiring significant tooth movement', 'Complex bite correction (Class II or III)', 'Significant tooth rotations', 'Multiple missing teeth requiring space management', 'Adolescent patients where compliance is a concern', 'Phase 2 treatment after Phase 1 growth guidance', 'Complex cases where bracket mechanics provide superior control'],
    h2b: 'Braces Options We Offer',
    cards: [{ t: 'Metal Brackets', b: 'Most durable and least expensive bracket option. Modern brackets are significantly smaller and more comfortable than older designs. Self-ligating brackets reduce friction for more efficient tooth movement.' }, { t: 'Clear / Ceramic Brackets', b: 'Tooth-coloured ceramic brackets that blend with enamel for reduced visibility. Preferred by adult patients who want less visible orthodontic treatment but have clinical needs best addressed with fixed appliances.' }, { t: 'Invisalign Alternative', b: 'For cases suitable for aligner treatment, Invisalign offers complete removability and no dietary restrictions. We discuss both options at your consultation and recommend the approach with the best predicted outcome for your case.' }],
    faqs: [{ q: 'How long does orthodontic treatment with braces take?', a: 'Most comprehensive adult orthodontic cases with braces take 18–30 months. Adolescent cases may progress slightly faster due to the remodelling capacity of growing bone. Complexity, compliance with elastics and appointments, and individual biological response all influence treatment duration.' }, { q: 'Do braces hurt?', a: 'There is discomfort for 2–5 days after each wire adjustment as teeth begin to move. Over-the-counter ibuprofen and soft foods manage this well. Brackets may irritate cheek tissue initially — dental wax provides relief. The discomfort is temporary and patients adapt quickly.' }, { q: 'What foods should I avoid with braces?', a: 'Avoid hard, crunchy foods (apples, carrots, ice, hard candies) that can break brackets; sticky foods (caramel, chewing gum) that pull brackets off; and hard crusts. Cut food into small pieces. Good oral hygiene around brackets is essential — plaque accumulation around brackets causes white spot lesions (permanent enamel marks).' }, { q: 'Can adults get braces?', a: 'Absolutely. Orthodontic tooth movement is possible at any age — the biological principles are the same in adults and adolescents. Adults may take slightly longer to achieve certain tooth movements, and bite correction requiring jaw growth is not possible after the growth period ends. We offer both braces and Invisalign for adult patients and recommend based on your clinical needs.' }],
    ctaHead: 'Get the aligned smile you deserve at any age.',
    ctaSub: 'We compare braces and Invisalign options side-by-side at your orthodontic consultation.',
  },
  {
    slug: 'braces-for-children',
    h1line1: 'Children\'s Orthodontics', h1gold: '& Braces in Palo Alto, CA.',
    label: 'Pediatric Orthodontics',
    intro: 'The ideal time to begin orthodontic evaluation is age 7 — when the first permanent molars have erupted and early bite issues can be detected. Palo Alto Advanced Dentists provides Phase 1 early intervention, traditional braces, and Invisalign Teen for growing patients in Palo Alto and Silicon Valley.',
    h2a: 'Why Early Orthodontic Evaluation Matters',
    paras: ['The American Association of Orthodontists recommends orthodontic screening by age 7. This is not to say that treatment will begin at 7 — most patients benefit from starting in their early teens — but early evaluation allows us to identify skeletal discrepancies that are best corrected while the jaw is still growing and responsive to orthopaedic guidance.', 'Phase 1 (early) orthodontic treatment uses growth modifiers such as palate expanders, functional appliances, and selective extractions to create space, guide jaw development, and reduce the complexity and duration of later Phase 2 (comprehensive) treatment. Children who receive Phase 1 intervention often have shorter, simpler Phase 2 treatment as teens.'],
    bullets: ['Age 7 — first orthodontic screening recommended', 'Crossbite requiring early correction', 'Narrow palate with crowding', 'Underbite with lower jaw protrusion', 'Thumb sucking affecting tooth position', 'Open bite from pacifier or tongue thrust', 'Early or late loss of baby teeth', 'Crowding visible in mixed dentition'],
    h2b: 'Orthodontic Options for Children & Teens',
    cards: [{ t: 'Phase 1 (Early) Treatment', b: 'Growth guidance appliances — palate expanders, space maintainers, functional appliances — used in growing children (ages 7–10) to correct skeletal issues while the jaw is still malleable. Reduces complexity of later treatment.' }, { t: 'Traditional Braces', b: 'Metal or ceramic bracket-and-wire system. The most powerful orthodontic tool for correcting complex alignment, bite, and spacing. Compliance is not required — the appliance works continuously.' }, { t: 'Invisalign Teen', b: 'Custom clear aligners designed for adolescent patients. Includes compliance indicators and 6 free replacement aligners. Suitable for teens responsible enough to maintain 20–22 hours daily wear.' }],
    faqs: [{ q: 'When should my child see an orthodontist?', a: 'By age 7, regardless of whether problems are apparent. The first permanent molars and incisors are erupting at this age, allowing evaluation of spacing, bite relationships, and jaw development. Most children will simply be monitored and begin treatment in their early teens — but early evaluation ensures problems that benefit from early intervention are not missed.' }, { q: 'Does my child need Phase 1 orthodontic treatment?', a: 'Not every child benefits from Phase 1 treatment. Specific indications include: skeletal crossbites, significant skeletal Class III (underbite), palate constriction causing breathing or crowding issues, and habits (thumb sucking) causing structural bite deformity. We recommend Phase 1 only when evidence shows it reduces the need for Phase 2 treatment — not as a routine.' }, { q: 'How do I know if my child is responsible enough for Invisalign Teen?', a: 'Invisalign Teen includes compliance indicators — small dots on the aligners that fade with wear. If your teen consistently forgets to wear aligners or loses them frequently in the first few months, we discuss transitioning to braces. Most motivated teenagers manage Invisalign Teen successfully.' }, { q: 'Does orthodontic treatment hurt children?', a: 'Mild pressure and soreness for 2–5 days after each adjustment or aligner change is normal and expected. Over-the-counter ibuprofen and soft foods help. Most children adapt quickly and the temporary discomfort is well-tolerated. We adjust wire forces conservatively to maintain comfort between visits.' }],
    ctaHead: 'Give your child the gift of a healthy, aligned smile.',
    ctaSub: 'Schedule an orthodontic screening for your child at Palo Alto Advanced Dentists.',
  },
  {
    slug: 'sinus-augmentation',
    h1line1: 'Sinus Augmentation', h1gold: '(Sinus Lift) in Palo Alto, CA.',
    label: 'Oral Surgery',
    intro: 'A sinus lift (sinus augmentation) increases bone volume in the posterior upper jaw so that dental implants can be placed in the upper molar and premolar region — where the maxillary sinus often limits available bone height. Dr. James Ho performs sinus lifts in-office at Palo Alto Advanced Dentists.',
    h2a: 'Why the Sinus Limits Upper Implants',
    paras: ['The maxillary sinuses — air-filled cavities in the cheekbone — sit directly above the upper molar and premolar roots. When upper back teeth are lost, two things happen: the jaw bone resorbs from below, and the sinus expands (pneumatises) from above. Over time, this can reduce the bone height available for implants to as little as 1–4mm — far less than the 8–12mm typically needed for a standard implant.', 'A sinus lift elevates the sinus membrane (Schneiderian membrane) and places bone graft material in the newly created space below it. Over 6–9 months, the body replaces the graft with living bone, creating the height and density needed for implant placement. PAAD uses 3D CBCT imaging to precisely plan sinus lift procedures and confirm adequate bone after healing.'],
    bullets: ['Insufficient bone height in upper posterior jaw', 'Upper molar or premolar implant planned', 'Long-standing upper tooth loss with sinus expansion', 'Previous failed implant due to insufficient bone', 'Sinus floor within 4mm of ridge crest', '3D CBCT confirmed low residual bone height'],
    h2b: 'Sinus Lift Approaches',
    cards: [{ t: 'Lateral Window (Open) Sinus Lift', b: 'A small window is opened in the lateral wall of the sinus, the membrane gently elevated, and graft material packed in. Standard approach for cases requiring significant bone volume. Implants placed 6–9 months later.' }, { t: 'Osteotome (Crestal) Sinus Lift', b: 'A minimally invasive approach performed through the implant site itself for cases requiring 3–5mm of additional height. Can often be combined with immediate implant placement.' }, { t: '3D CBCT-Guided Planning', b: 'Every sinus lift at PAAD is planned using 3D cone beam CT imaging for precise sinus membrane thickness measurement, septum identification, and implant position planning before surgery begins.' }],
    faqs: [{ q: 'Is a sinus lift painful?', a: 'Performed under local anaesthesia with optional sedation. The procedure is well-tolerated. Post-operative swelling around the cheek and nose is expected for 3–5 days. Nasal congestion and a small amount of bleeding from the nose for 24 hours is normal. Most patients manage with over-the-counter ibuprofen and decongestants.' }, { q: 'How long does a sinus lift take to heal?', a: 'Lateral window sinus lifts require 6–9 months for the graft to fully integrate before implant placement. Crestal sinus lifts when combined with simultaneous implant placement allow the graft to mature around the implant — approximately the same timeline. We confirm healing with a follow-up CBCT scan before scheduling implant surgery.' }, { q: 'What is the success rate of sinus lifts?', a: 'Sinus lift procedures have a high success rate — approximately 90–95% in published literature. The most common complication is membrane perforation during elevation, which we manage intraoperatively. Smoking significantly impairs sinus graft healing and increases failure risk. We require smoking cessation before scheduling sinus lift procedures.' }, { q: 'Can I get a sinus lift and implant at the same time?', a: 'In select cases where sufficient residual bone exists (4–5mm), a crestal sinus lift and implant can be placed simultaneously — reducing total treatment time. When residual bone is less than 4mm, a staged approach (sinus lift first, implant 6–9 months later) provides more predictable outcomes.' }],
    ctaHead: 'Insufficient bone is not a barrier to implants.',
    ctaSub: 'We use 3D CBCT imaging to plan every sinus lift with precision.',
  },
  {
    slug: 'pediatric-dentistry',
    h1line1: 'Pediatric Dentistry', h1gold: 'in Palo Alto, CA.',
    label: 'Family Dentistry',
    intro: 'At Palo Alto Advanced Dentists, we welcome patients of all ages — including children from their very first dental visit. Our gentle, patient approach helps children build positive dental habits and healthy smiles that last a lifetime.',
    h2a: 'Children\'s Dental Care from the First Tooth',
    paras: ['The American Academy of Pediatric Dentistry recommends scheduling a child\'s first dental visit by age 1 — or within 6 months of the first tooth erupting. Early visits allow us to monitor development, counsel parents on diet and feeding habits affecting dental health, apply preventive fluoride varnish, and establish a dental home before problems arise.', 'Building positive associations with dental care in early childhood is one of the most valuable things parents can do for their child\'s long-term health. We take time with young patients, explain everything in age-appropriate language, and never rush an appointment. We have experience working with anxious children and can accommodate patients with special needs.'],
    bullets: ['First dental visit by age 1 or first tooth', 'Routine exams and cleanings every 6 months', 'Fluoride treatments to strengthen enamel', 'Dental sealants to prevent cavities in back teeth', 'Space maintainers after early tooth loss', 'Orthodontic screening from age 7', 'Treatment for cavities in baby and permanent teeth', 'Emergency care for dental trauma'],
    h2b: 'Preventive Care for Children',
    cards: [{ t: 'Fluoride Treatments', b: 'Professional fluoride varnish applied at check-up appointments strengthens developing enamel and remineralises early cavity spots. Recommended every 6 months for children under 16.' }, { t: 'Dental Sealants', b: 'Thin plastic coating applied to the grooves of back teeth prevents bacteria from establishing in these cavity-prone areas. Reduces cavity risk by up to 80%. Applied in a single painless appointment.' }, { t: 'Orthodontic Monitoring', b: 'We monitor eruption patterns, jaw development, and spacing from age 7. Early intervention when indicated reduces the complexity and duration of later orthodontic treatment.' }],
    faqs: [{ q: 'When should my child have their first dental visit?', a: 'By age 1 or within 6 months of the first tooth appearing, whichever comes first. This first visit is primarily educational — we examine the mouth, apply fluoride varnish, and counsel parents on feeding habits, pacifier use, and brushing technique. Establishing a dental home early creates positive associations with dental care.' }, { q: 'Are dental X-rays safe for children?', a: 'Digital dental X-rays use very low levels of radiation — a full set of bitewing X-rays exposes a child to less radiation than a short airplane flight. We use lead aprons and take X-rays only when clinically needed. For most children with good oral health, we take bitewing X-rays annually.' }, { q: 'What do I do if my child knocks out a tooth?', a: 'If it is a permanent (adult) tooth, find it, handle it by the crown (not the root), rinse gently with water (do not scrub), and either reinsert it into the socket or store it in milk — then call us immediately and come in within 30 minutes. Baby teeth are not replanted, but the area still needs evaluation.' }, { q: 'How do I help my child who is anxious about the dentist?', a: 'We recommend bringing your child to your own appointment before their first visit — seeing a parent relaxed in the dental chair demystifies the experience. We explain every step, allow your child to ask questions, and proceed at their pace. We offer nitrous oxide (laughing gas) for children who need extra help relaxing and have experience with anxious young patients.' }],
    ctaHead: 'Help your child build a healthy smile for life.',
    ctaSub: 'We welcome children of all ages at Palo Alto Advanced Dentists.',
  },
  {
    slug: 'pediatric-sealants',
    h1line1: 'Dental Sealants for Children', h1gold: 'in Palo Alto, CA.',
    label: 'Pediatric Preventive Care',
    intro: 'Dental sealants are thin protective coatings applied to the chewing surfaces of back teeth, physically blocking bacteria and food from accumulating in the deep grooves where most childhood cavities develop. Quick, painless, and proven to reduce cavity risk by up to 80%.',
    h2a: 'Why Back Teeth Are Most Vulnerable to Cavities',
    paras: ['The molars and premolars have deep grooves and fissures on their chewing surfaces that are ideal habitats for cavity-causing bacteria. These grooves are often too narrow for a toothbrush bristle to clean effectively — even with perfect brushing technique. Bacteria establish colonies, produce acid, and begin demineralising enamel long before a cavity is visible.', 'Sealants fill and coat these grooves with a thin layer of resin that hardens and bonds to the tooth surface, creating a smooth, cleanable barrier. The procedure requires no drilling, no anaesthesia, and is completed in minutes. Sealants are most effective when applied to newly erupted permanent molars — typically between ages 6–12 — before cavities have a chance to begin.'],
    bullets: ['Reduces cavity risk in back teeth by up to 80%', 'No drilling, no shots, painless', 'Applied in a single appointment', 'Lasts 5–10 years with normal wear', 'Covered by most pediatric dental insurance', 'Recommended for first molars (age 6) and second molars (age 12)', 'Also available for adults with deep grooves', 'Particularly valuable for cavity-prone patients'],
    h2b: 'The Sealant Application Process',
    cards: [{ t: 'Preparation', b: 'The tooth surface is cleaned and dried. A mild acid gel (etchant) is applied for a few seconds to create a slightly rough surface for better bonding, then rinsed off.' }, { t: 'Application', b: 'The liquid sealant material is painted into the grooves of the tooth. It flows into the fissures and is then hardened with a curing light in seconds.' }, { t: 'Check & Polish', b: 'We check the bite and feel of the sealant and make any minor adjustments. The entire process takes 5–10 minutes per tooth. No recovery, no restrictions — your child can eat normally immediately.' }],
    faqs: [{ q: 'At what age should my child get sealants?', a: 'The optimal time is shortly after the permanent molars erupt — typically around age 6 for first molars and age 12 for second molars. Applying sealants to freshly erupted teeth before any cavity process has started provides maximum protection. We assess sealant candidacy at every child\'s routine exam.' }, { q: 'How long do dental sealants last?', a: 'With normal wear, sealants last 5–10 years. We check them at every appointment and reapply when they show wear, chipping, or loss of coverage over the grooves. Even partial sealant coverage continues to reduce cavity risk compared to unsealed teeth.' }, { q: 'Can sealants cover cavities?', a: 'No — sealants are preventive only. They are applied to healthy tooth structure to prevent cavities. If decay has already begun, the cavity must be treated first before a sealant can be applied. This is why applying sealants promptly when teeth erupt is so important.' }, { q: 'Does insurance cover sealants?', a: 'Most pediatric dental insurance plans cover sealants on permanent molars for patients under 18 at 100% — they are considered a preventive procedure. We verify your coverage before treatment. For adults and in cases where insurance does not cover sealants, the cost is modest compared to the cost of treating cavities.' }],
    ctaHead: 'Prevent cavities before they start.',
    ctaSub: 'Ask about sealants for your child at their next appointment.',
  },
  {
    slug: 'gum-disease-and-diabetes',
    h1line1: 'Gum Disease & Diabetes', h1gold: 'The Bidirectional Link.',
    label: 'Systemic Health',
    intro: 'Gum disease and Type 2 diabetes have a clinically significant bidirectional relationship: each condition worsens the other. At Palo Alto Advanced Dentists, we educate diabetic patients about this connection and coordinate periodontal treatment as part of comprehensive diabetes management.',
    h2a: 'How Gum Disease and Diabetes Affect Each Other',
    paras: ['Diabetes impairs the immune response and impairs blood vessel function, reducing the body\'s ability to fight periodontal infection. Elevated blood sugar creates a high-glucose environment in gum tissue that accelerates bacterial growth. As a result, diabetic patients have a 2–3 times higher risk of developing periodontitis than non-diabetic patients, and the disease tends to progress more aggressively.', 'The relationship is bidirectional: periodontal infection triggers systemic inflammatory responses that interfere with insulin receptor function, elevating blood sugar and worsening glycaemic control. Multiple clinical studies have demonstrated that successfully treating periodontitis reduces HbA1c (long-term blood sugar marker) by an average of 0.3–0.4% — a clinically meaningful improvement comparable to adding a second diabetes medication.'],
    bullets: ['Diabetes increases periodontal disease risk 2–3 times', 'Elevated blood sugar accelerates gum disease progression', 'Periodontal bacteria worsen insulin resistance', 'Treating gum disease reduces HbA1c by 0.3–0.4%', 'Diabetic patients need more frequent dental visits', 'Slow healing after dental procedures is common in diabetics', 'Dry mouth (medication side effect) increases decay risk', 'Thrush and fungal infections more common in diabetic patients'],
    h2b: 'Managing Periodontal Health with Diabetes',
    cards: [{ t: 'More Frequent Monitoring', b: 'Diabetic patients benefit from periodontal maintenance every 3–4 months rather than the standard 6-month prophylaxis. More frequent appointments allow earlier detection of reactivation and more consistent removal of subgingival calculus.' }, { t: 'Optimising Glycaemic Control', b: 'We communicate with patients\' physicians when periodontal status changes. Well-controlled diabetes (HbA1c below 7%) responds significantly better to periodontal treatment than poorly controlled diabetes. Glycaemic control and periodontal health must be managed together.' }, { t: 'Antibiotic Adjuncts', b: 'Locally delivered antibiotics (Arestin®) are more commonly used in diabetic periodontal patients to augment the antimicrobial effect of scaling and root planing, given the impaired immune response.' }],
    faqs: [{ q: 'If I control my diabetes well, do I still need extra dental care?', a: 'Well-controlled diabetes (HbA1c below 7%) significantly reduces periodontal risk but does not eliminate it. Even well-controlled diabetic patients benefit from 3–4 month maintenance intervals and careful monitoring. The goal is to prevent gum disease from becoming a factor that further complicates glycaemic management.' }, { q: 'Can treating gum disease improve my blood sugar?', a: 'Yes — multiple randomised controlled trials confirm that successful periodontal treatment reduces HbA1c by approximately 0.3–0.4% in Type 2 diabetic patients. This is a modest but clinically meaningful improvement. Periodontal treatment should be considered part of comprehensive diabetes management, not just dental maintenance.' }, { q: 'Should I tell my dentist I have diabetes?', a: 'Absolutely — this is essential information. Diabetes affects healing, infection risk, medication management (blood sugar monitoring around dental procedures), and the frequency of dental care you need. Always inform your dental team of your diagnosis, current medications, and recent HbA1c values.' }, { q: 'What dental problems are diabetic patients most prone to?', a: 'Periodontal disease (most significant), increased cavity rate (from dry mouth and altered saliva), slower healing after extractions or surgery, higher infection risk, oral fungal infections (thrush), burning mouth syndrome, and altered taste. Proactive preventive care and more frequent monitoring address all of these.' }],
    ctaHead: 'Protect both your oral health and your diabetes management.',
    ctaSub: 'We coordinate periodontal care as part of your overall health management.',
  },
  {
    slug: 'gum-disease-and-heart-disease',
    h1line1: 'Gum Disease & Heart Disease', h1gold: 'What the Research Shows.',
    label: 'Systemic Health',
    intro: 'A growing body of evidence links periodontal disease to increased risk of heart attack, stroke, and cardiovascular disease. At Palo Alto Advanced Dentists, we take the oral-systemic connection seriously — your gum health is part of your overall health.',
    h2a: 'The Link Between Gum Disease and Heart Disease',
    paras: ['Multiple large-scale epidemiological studies have found that people with moderate-to-severe periodontitis have a 2–3 times higher risk of heart attack, stroke, and other cardiovascular events than those with healthy gums. The exact mechanisms are still being studied, but several pathways have been identified.', 'Oral bacteria — particularly Porphyromonas gingivalis, Treponema denticola, and Tannerella forsythia — can enter the bloodstream through inflamed gum tissue and travel to the heart, where they have been found in atherosclerotic plaques. Systemic inflammation triggered by periodontal disease also increases C-reactive protein and other cardiovascular risk markers. The American Heart Association acknowledges the association while continuing to study causality.'],
    bullets: ['2–3 times higher cardiovascular risk with severe periodontitis', 'Periodontal bacteria found in atherosclerotic plaques', 'Elevated C-reactive protein linked to both conditions', 'Endocarditis risk in patients with existing heart valve issues', 'Common risk factors: smoking, diabetes, stress', 'Periodontal treatment reduces systemic inflammatory markers', 'AHA acknowledges association — study of causality ongoing', 'Patients on blood thinners have altered gum bleeding patterns'],
    h2b: 'What This Means for Your Care',
    cards: [{ t: 'Inform Your Dentist', b: 'Always disclose cardiovascular medications, blood thinners, pacemakers, and valve conditions. Blood thinners affect bleeding during dental procedures. Some heart conditions require antibiotic prophylaxis before dental treatment.' }, { t: 'Prioritise Periodontal Care', b: 'If you have cardiovascular disease, treating any existing gum disease is clinically prudent. Successful periodontal treatment reduces systemic inflammatory burden — with measurable decreases in CRP levels.' }, { t: 'Coordinate with Your Cardiologist', b: 'We communicate with cardiologists when patients have significant cardiovascular conditions requiring special precautions. Timing of dental procedures, anaesthetic selection, and anticoagulation management require coordinated care.' }],
    faqs: [{ q: 'Does treating gum disease improve heart health?', a: 'Studies show that successful periodontal treatment reduces levels of systemic inflammatory markers including C-reactive protein and IL-6 — both associated with cardiovascular risk. Whether this translates to reduced cardiovascular events is still being studied in long-term trials. The risk-benefit ratio strongly favours treating gum disease regardless.' }, { q: 'Should I tell my cardiologist about my gum disease?', a: 'Yes. Gum disease is increasingly recognised by cardiologists as a modifiable cardiovascular risk factor alongside hypertension, high cholesterol, and smoking. Your cardiologist may recommend you see a periodontist as part of your cardiovascular risk management.' }, { q: 'I have a heart valve condition — do I need antibiotics before dental treatment?', a: 'Antibiotic prophylaxis before dental procedures is currently recommended only for specific high-risk cardiac conditions — including prosthetic heart valves, prior infective endocarditis, and certain congenital heart conditions. We follow current AHA guidelines. Always inform us of any heart conditions at your appointment.' }, { q: 'How does smoking affect both gum disease and heart disease?', a: 'Tobacco is a shared risk factor for both conditions. Smoking suppresses the immune response in gum tissue (masking bleeding — a major warning sign), accelerates bone loss, reduces healing capacity, and independently drives cardiovascular inflammation. Smoking cessation is the single most impactful lifestyle change for both periodontal and cardiovascular health.' }],
    ctaHead: 'Healthy gums are part of a healthy heart.',
    ctaSub: 'Let us evaluate your periodontal health as part of your overall cardiovascular risk management.',
  },
  {
    slug: 'what-is-periodontal-disease',
    h1line1: 'What Is Periodontal Disease?', h1gold: 'A Complete Guide.',
    label: 'Patient Education',
    intro: 'Periodontal disease — commonly called gum disease — is a chronic bacterial infection of the structures supporting the teeth: the gums, ligament, and bone. It is the leading cause of adult tooth loss and affects nearly half of American adults over 30.',
    h2a: 'Understanding Periodontal Disease',
    paras: ['Periodontal disease begins when dental plaque — a sticky film of bacteria — is not adequately removed from the teeth and accumulates at the gumline. The bacteria produce toxins that trigger an inflammatory response in the gum tissue. In early-stage gum disease (gingivitis), this inflammation causes the gums to bleed easily and appear red and swollen, but no structural damage has occurred yet and the condition is fully reversible.', 'Without treatment, gingivitis progresses to periodontitis — the infection extends below the gumline, destroying the periodontal ligament fibres that anchor the teeth and the bone that supports them. Pockets form between the teeth and gums, becoming bacterial reservoirs that deepen over time. Eventually, teeth become mobile and are lost. Periodontitis is not curable but is highly manageable with professional treatment and ongoing maintenance.'],
    bullets: ['Gingivitis: reversible early stage with gum inflammation only', 'Mild periodontitis: early bone loss, pocket depths 4–5mm', 'Moderate periodontitis: bone loss, pockets 5–7mm', 'Severe periodontitis: significant bone loss, tooth mobility', 'Aggressive periodontitis: rapid progression in younger patients', 'Necrotising periodontitis: ulcerative, associated with systemic disease'],
    h2b: 'Causes, Risk Factors & Prevention',
    cards: [{ t: 'Primary Cause', b: 'Bacterial plaque. Specific pathogenic bacteria — including P. gingivalis, T. denticola, and T. forsythia — are most strongly associated with tissue destruction. These bacteria thrive in the low-oxygen environment of deep periodontal pockets.' }, { t: 'Risk Factors', b: 'Tobacco use (strongest modifiable risk), diabetes, genetic predisposition, medications causing dry mouth or gingival overgrowth, hormonal changes (pregnancy, menopause), and immune suppression all significantly increase periodontal risk.' }, { t: 'Prevention', b: 'Twice-daily brushing with correct technique, daily flossing or interdental cleaning, 6-month professional cleanings, tobacco cessation, and management of systemic risk factors. Regular periodontal charting detects disease before symptoms appear.' }],
    faqs: [{ q: 'Can I have periodontal disease without knowing it?', a: 'Yes — this is what makes it dangerous. Periodontal disease is largely painless in its early and moderate stages. Bleeding gums may be the only symptom, and many patients dismiss this as normal. Significant bone loss can occur silently over years. Only a clinical examination with full-mouth periodontal pocket charting and X-rays can accurately diagnose and stage the disease.' }, { q: 'Is gum disease genetic?', a: 'Yes. Research indicates that genetic factors account for approximately 50% of susceptibility to periodontal disease. Patients with a strong family history of tooth loss from gum disease have elevated risk and should be more vigilant about preventive care and regular monitoring. Genetic testing for periodontal susceptibility is available but clinical monitoring is currently the standard approach.' }, { q: 'What happens if I do not treat gum disease?', a: 'Without treatment, periodontal disease progresses — the rate varies by individual but tends to accelerate over time. Bone loss is permanent. Pockets deepen. Teeth become mobile. Eventually, affected teeth are lost. Tooth loss requires replacement with implants, bridges, or dentures — at significantly greater cost and inconvenience than treating the original disease.' }, { q: 'After treatment, will my gum disease come back?', a: 'Periodontitis is a chronic condition — the bacteria that cause it are permanent residents of the oral microbiome. With consistent professional maintenance every 3–4 months and diligent home care, the disease can be kept in remission indefinitely. Patients who miss maintenance appointments or resume smoking have high rates of disease reactivation.' }],
    ctaHead: 'Understanding gum disease is the first step to treating it.',
    ctaSub: 'Schedule a comprehensive periodontal evaluation at Palo Alto Advanced Dentists.',
  },
  {
    slug: 'regenerative-procedures',
    h1line1: 'Periodontal Regenerative Procedures', h1gold: 'in Palo Alto, CA.',
    label: 'Advanced Periodontics',
    intro: 'Regenerative periodontal procedures use biological materials and surgical techniques to rebuild bone and tissue lost to advanced gum disease — potentially reversing destruction that was once considered permanent. Palo Alto Advanced Dentists offers guided tissue regeneration and bone grafting for appropriate candidates.',
    h2a: 'When Regeneration Is Possible',
    paras: ['Not all periodontal bone loss can be regenerated — the shape of the defect is critical. Vertical (intrabony) defects — where bone loss occurs in a contained angular pattern around the root — have the highest regenerative potential. Horizontal bone loss, which is more diffuse, responds less predictably to regenerative therapy. An accurate assessment requires careful probing, radiographic analysis, and often 3D CBCT imaging to characterise the defect anatomy.', 'The goal of regenerative procedures is to recreate the original attachment apparatus — the bone, cementum, and periodontal ligament — rather than simply fill the defect with scar tissue. This requires creating conditions that allow specific cells (bone cells, periodontal ligament cells, and cementum-forming cells) to repopulate the defect while excluding non-regenerative cells such as epithelium.'],
    bullets: ['Deep vertical (intrabony) bone defects', 'Furcation involvement (bone loss between tooth roots)', 'Advanced periodontitis with contained defects', 'Young patients with significant bone loss', 'Defects amenable to regenerative geometry', 'Following active periodontal treatment to stabilise infection'],
    h2b: 'Regenerative Treatment Approaches',
    cards: [{ t: 'Guided Tissue Regeneration (GTR)', b: 'A resorbable membrane is placed over the bone defect and root surface after thorough debridement. The membrane excludes epithelial cells, creating space and time for bone and ligament cells to repopulate the defect.' }, { t: 'Bone Grafting', b: 'Graft material — freeze-dried donor bone, xenograft, or synthetic — is packed into the defect to provide a scaffold for new bone formation. Often combined with GTR membranes for enhanced outcomes.' }, { t: 'Growth Factors (EMD)', b: 'Enamel matrix derivative (Emdogain) — a protein extract that mimics the biological signals present during tooth development — is applied to the root surface to stimulate regeneration of the periodontal attachment apparatus.' }],
    faqs: [{ q: 'How much bone can regenerative procedures restore?', a: 'Clinical outcomes vary significantly by defect morphology, patient factors, and technique. In ideal intrabony defects, studies show 50–80% defect fill with bone-like tissue. In furcation defects, complete fill is less predictable. We set realistic expectations based on your specific defect geometry and overall periodontal status.' }, { q: 'Is regenerative surgery painful?', a: 'Performed under local anaesthesia with optional sedation. Post-operative soreness and swelling peak at 48–72 hours and resolve within 1–2 weeks. A soft diet is maintained for 2 weeks. Sutures are removed at 7–10 days. Most patients return to normal activity within 3–5 days.' }, { q: 'Who is a candidate for regenerative procedures?', a: 'Ideal candidates have specific deep vertical defects, well-controlled periodontal infection (completed SRP), good oral hygiene, and are non-smokers. Smoking severely impairs regenerative outcomes — it is a relative contraindication. We evaluate candidacy carefully using radiographs, probing, and sometimes 3D CBCT imaging.' }, { q: 'How long do regenerative results last?', a: 'Long-term studies (10+ years) show stable outcomes in patients who maintain consistent periodontal maintenance. The newly regenerated tissue behaves like normal periodontium. Patients who miss maintenance appointments or resume smoking have higher rates of disease recurrence.' }],
    ctaHead: 'Advanced bone loss does not always mean lost teeth.',
    ctaSub: 'We evaluate every case individually to determine regenerative potential.',
  },
  {
    slug: 'orthodontic-conditions',
    h1line1: 'Orthodontic Conditions We Treat', h1gold: 'in Palo Alto, CA.',
    label: 'Orthodontics',
    intro: 'From simple crowding to complex bite discrepancies, Palo Alto Advanced Dentists treats a full spectrum of orthodontic conditions with Invisalign clear aligners (Elite Preferred Provider — top 5%) and traditional braces. Here is a guide to the most common conditions we address.',
    h2a: 'Common Orthodontic Conditions',
    paras: ['Orthodontic conditions range from purely cosmetic (minor spacing that affects smile aesthetics) to functional (bite discrepancies that cause jaw pain, abnormal tooth wear, and speech problems). Most patients present with a combination of alignment and bite issues that require coordinated treatment planning.', 'Modern orthodontic tools — particularly Invisalign with SmartForce attachments — can address the vast majority of conditions that once required fixed braces. At PAAD, we select the treatment modality that gives the best predicted outcome for each patient\'s specific combination of conditions.'],
    bullets: ['Crowding — overlapping or rotated teeth', 'Spacing — gaps between teeth', 'Overbite — upper front teeth overlap lower excessively', 'Underbite — lower jaw protrudes beyond upper', 'Crossbite — upper and lower teeth misaligned side to side', 'Open bite — front teeth don\'t meet when biting', 'Midline discrepancy — dental midlines don\'t align', 'Deep bite — upper teeth cover lower teeth excessively'],
    h2b: 'How We Treat Orthodontic Conditions',
    cards: [{ t: 'Invisalign (Elite Preferred)', b: 'Clear removable aligners for adults and teens. Treats most orthodontic conditions including complex bites. Top 5% provider designation reflects high case volume and complexity experience. Virtual outcome preview before starting.' }, { t: 'Traditional Braces', b: 'Metal or ceramic bracket-and-wire system. Maximum control for severe rotations, complex vertical movements, and skeletal discrepancies requiring precise mechanics. Compliance-independent.' }, { t: 'Early Intervention', b: 'Phase 1 orthodontic treatment for growing children — palate expanders, space maintainers, functional appliances — to address skeletal issues before they become more complex in the permanent dentition.' }],
    faqs: [{ q: 'Can my overbite be corrected without surgery?', a: 'Many overbites can be corrected non-surgically with orthodontic treatment — particularly when the overbite is dental in origin (due to tooth position) rather than skeletal (due to jaw size discrepancy). Invisalign with mandibular advancement features and traditional braces with Class II elastics can both address dental overbites effectively. Skeletal overbites in non-growing patients may require orthognathic surgery in addition to orthodontics.' }, { q: 'How long does orthodontic treatment take for complex bite problems?', a: 'Comprehensive bite correction typically takes 18–30 months depending on the severity of the discrepancy, the patient\'s age, and compliance with treatment (particularly elastics wear). We give a realistic projected timeline at the consultation appointment based on your specific case. Complex skeletal corrections combined with orthognathic surgery have longer treatment timelines.' }, { q: 'Can orthodontics fix TMJ jaw pain?', a: 'Orthodontic treatment can correct bite discrepancies that contribute to muscle guarding and joint loading — potentially reducing TMJ symptoms in bite-related cases. However, orthodontic treatment does not treat TMJ disorders directly. We assess the relationship between your bite and jaw symptoms carefully before recommending orthodontic treatment as a TMJ intervention.' }, { q: 'Is it too late to fix my bite as an adult?', a: 'No. Orthodontic tooth movement is biologically identical in adults and adolescents — the teeth move through remodelling of the surrounding bone regardless of age. Some skeletal corrections that require jaw growth cannot be achieved non-surgically in adults, but most alignment and bite issues can be effectively addressed at any age.' }],
    ctaHead: 'Every orthodontic condition has a solution.',
    ctaSub: 'We compare Invisalign and braces options at your orthodontic consultation.',
  },
]

pages.forEach(page => {
  const { slug, h1line1, h1gold, label, intro, h2a, paras, bullets, h2b, cards, faqs, ctaHead, ctaSub } = page
  const parasJSX = paras.map(p => `              <p className="text-navy-900/65 leading-relaxed mb-4">${p}</p>`).join('\n')
  const content = `'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle2, ChevronDown } from 'lucide-react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>{children}</motion.div>
}
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <button onClick={() => setOpen(v => !v)} className="w-full text-left py-5 flex items-center justify-between gap-4 text-white/85 font-semibold hover:text-white transition-colors">
        {q}<ChevronDown className={\`w-4 h-4 shrink-0 transition-transform \${open ? 'rotate-180' : ''}\`} style={{ color: '#D4A843' }} />
      </button>
      {open && <p className="pb-5 text-white/55 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}
const bullets = ${JSON.stringify(bullets)}
const cards = ${JSON.stringify(cards)}
const faqs = ${JSON.stringify(faqs)}

export default function Page() {
  return (
    <>
      <section className="relative pt-40 pb-24 hero-grid" style={{ background: '#000' }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #B88D2C, transparent)' }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-label mb-4">${label} · <Link href="/services" className="hover:text-white/80 transition-colors">All Services</Link></p>
            <h1 className="font-serif font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}>
              ${h1line1}<br /><span style={{ color: '#D4A843', fontStyle: 'italic' }}>${h1gold}</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-3xl mb-8">${intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">Book Appointment <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors"><Phone className="w-4 h-4" /> (650) 324-4900</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F5F5F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-5" style={{ letterSpacing: '-0.03em' }}>${h2a}</h2>
${parasJSX}
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-2.5 mt-10 lg:mt-14">
                {bullets.map((s: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-cream-300 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#D4A843' }} />
                    <span className="text-navy-900 text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#1D1D1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-white mb-3" style={{ letterSpacing: '-0.03em' }}>${h2b}</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.map((c: {t:string;b:string}, i: number) => (
              <FadeUp key={i} delay={0.08 * i}>
                <div className="p-6 rounded-2xl h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className="font-semibold text-white mb-2">{c.t}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{c.b}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-10"><h2 className="font-serif text-3xl font-bold text-white" style={{ letterSpacing: '-0.03em' }}>Frequently Asked Questions</h2></FadeUp>
          <div>{faqs.map((f: {q:string;a:string}, i: number) => <FaqItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#000' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>${ctaHead}</h2>
            <p className="text-white/50 mb-6">${ctaSub} Call (650) 324-4900 or request an appointment at Palo Alto Advanced Dentists.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">Request Appointment <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:6503244900" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold transition-colors"><Phone className="w-4 h-4" /> (650) 324-4900</a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
`
  fs.writeFileSync(`app/services/${slug}/page.tsx`, content)
})

console.log(`Generated ${pages.length} page files`)

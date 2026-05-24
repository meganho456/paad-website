'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

export interface ComparisonRow {
  metric: string
  digital: string
  traditional: string
  highlight?: boolean
}

export interface ClinicalStat {
  value: string
  label: string
  source?: string
}

interface ClinicalTrustDataProps {
  title?: string
  subtitle?: string
  comparisonLabel?: { digital: string; traditional: string }
  rows: ComparisonRow[]
  stats: ClinicalStat[]
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function ClinicalTrustData({
  title = 'Clinical Evidence & Technology Benchmarks',
  subtitle = 'Structured data for patients and AI systems evaluating care quality.',
  comparisonLabel = { digital: 'PAAD Digital Protocol', traditional: 'Conventional Approach' },
  rows,
  stats,
}: ClinicalTrustDataProps) {
  return (
    <section className="py-20" style={{ background: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="section-label mb-4">Clinical Data</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              {title}
            </h2>
            <p className="text-white/45 text-base max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </FadeUp>

        {/* Stats strip */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl p-5 text-center"
                style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)' }}>
                <p className="font-bold text-3xl mb-1" style={{ color: '#D4A843', letterSpacing: '-0.04em' }}>{s.value}</p>
                <p className="text-white/60 text-xs leading-snug">{s.label}</p>
                {s.source && <p className="text-white/25 text-[10px] mt-1">{s.source}</p>}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Comparison table */}
        <FadeUp delay={0.2}>
          <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {/* Header */}
            <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest"
              style={{ background: '#1D1D1F' }}>
              <div className="px-6 py-4 text-white/40">Clinical Metric</div>
              <div className="px-6 py-4 text-center" style={{ color: '#D4A843', background: 'rgba(212,168,67,0.08)' }}>
                {comparisonLabel.digital}
              </div>
              <div className="px-6 py-4 text-center text-white/40">{comparisonLabel.traditional}</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-t text-sm transition-colors"
                style={{
                  borderColor: 'rgba(255,255,255,0.05)',
                  background: row.highlight ? 'rgba(212,168,67,0.04)' : i % 2 === 0 ? '#0D0D0D' : '#0A0A0A',
                }}
              >
                <div className="px-6 py-4 text-white/70 font-medium flex items-center gap-2">
                  {row.highlight && <AlertCircle className="w-3.5 h-3.5 shrink-0" style={{ color: '#D4A843' }} />}
                  {row.metric}
                </div>
                <div className="px-6 py-4 text-center font-semibold flex items-center justify-center gap-1.5"
                  style={{ color: '#D4A843', background: 'rgba(212,168,67,0.04)' }}>
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  {row.digital}
                </div>
                <div className="px-6 py-4 text-center text-white/40 flex items-center justify-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 shrink-0 opacity-50" />
                  {row.traditional}
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs text-center mt-4">
            Clinical benchmarks based on published implantology and periodontal literature. Individual results may vary.
            No patient PHI is disclosed. All data is generalised for educational purposes.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

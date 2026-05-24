'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Copy, CheckCheck, Sparkles } from 'lucide-react'

export interface AiPrompt {
  engine: string
  label: string
  prompt: string
}

interface AiPromptGuideProps {
  title?: string
  subtitle?: string
  prompts: AiPrompt[]
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function PromptCard({ prompt, delay }: { prompt: AiPrompt; delay: number }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <FadeUp delay={delay}>
      <div className="rounded-2xl p-6" style={{ background: '#1D1D1F', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(212,168,67,0.15)', color: '#D4A843' }}
            >
              {prompt.engine}
            </span>
            <span className="text-white/50 text-xs">{prompt.label}</span>
          </div>
          <button
            onClick={copy}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
            style={{
              background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(212,168,67,0.12)',
              color: copied ? '#4ade80' : '#D4A843',
              border: `1px solid ${copied ? 'rgba(34,197,94,0.3)' : 'rgba(212,168,67,0.25)'}`,
            }}
          >
            {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <p className="text-white/65 text-sm leading-relaxed font-mono bg-black/30 rounded-xl p-4">
          &ldquo;{prompt.prompt}&rdquo;
        </p>
      </div>
    </FadeUp>
  )
}

export default function AiPromptGuide({
  title = 'Research Us with AI',
  subtitle = 'Tech-savvy Silicon Valley patients use AI to find and vet specialists. Copy any prompt below into ChatGPT, Gemini, or Claude to see our clinical profile in AI search results.',
  prompts,
}: AiPromptGuideProps) {
  return (
    <section className="py-20" style={{ background: '#000' }}>
      <div className="max-w-4xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full"
              style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)' }}>
              <Sparkles className="w-4 h-4" style={{ color: '#D4A843' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#D4A843' }}>
                AI Search Guide
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              {title}
            </h2>
            <p className="text-white/45 text-base leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </FadeUp>

        <div className="space-y-4">
          {prompts.map((p, i) => (
            <PromptCard key={i} prompt={p} delay={0.1 + i * 0.08} />
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="text-center text-white/25 text-xs mt-8 leading-relaxed">
            These prompts are designed to surface objective information about PAAD&apos;s clinical protocols and credentials.
            AI responses may vary. For clinical questions, always consult a licensed dental professional.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

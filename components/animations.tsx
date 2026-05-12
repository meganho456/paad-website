'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, type MotionValue } from 'framer-motion'

/* ── FadeUp ─────────────────────────────────────────── */
export function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── ScaleReveal ────────────────────────────────────── */
export function ScaleReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── WordReveal helpers (hooks can't live inside .map) ─ */
function AnimatedWord({
  word,
  idx,
  total,
  progress,
}: {
  word: string
  idx: number
  total: number
  progress: MotionValue<number>
}) {
  const start   = idx / total
  const end     = Math.min((idx + 2) / total, 1)
  const opacity = useTransform(progress, [start, end], [0.12, 1])
  return (
    <motion.span className="inline-block mr-[0.28em]" style={{ opacity }}>
      {word}
    </motion.span>
  )
}

/* ── WordReveal ─────────────────────────────────────── */
export function WordReveal({
  text,
  className = '',
  style,
}: {
  text: string
  className?: string
  style?: React.CSSProperties
}) {
  const ref    = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.05'],
  })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <AnimatedWord
          key={i}
          word={word}
          idx={i}
          total={words.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}

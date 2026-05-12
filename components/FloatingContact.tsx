'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, Copy, Check } from 'lucide-react'

/* ── SVG icons ──────────────────────────────────────── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

function WeChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c-.035-.218-.053-.44-.053-.666 0-3.865 3.743-7 8.354-7 .14 0 .279.003.418.01C16.85 4.244 13.11 2.188 8.69 2.188zm-2.75 4.564a1.073 1.073 0 1 1 0 2.146 1.073 1.073 0 0 1 0-2.146zm5.5 0a1.073 1.073 0 1 1 0 2.146 1.073 1.073 0 0 1 0-2.146zM24 15.466c0-3.398-3.26-6.154-7.285-6.154s-7.285 2.756-7.285 6.154c0 3.399 3.26 6.155 7.285 6.155.963 0 1.88-.16 2.724-.45a.71.71 0 0 1 .595.082l1.584.927a.27.27 0 0 0 .14.046.245.245 0 0 0 .245-.245c0-.06-.024-.12-.04-.176l-.324-1.233a.492.492 0 0 1 .178-.554C23.02 19.44 24 17.545 24 15.466zm-10.027-1.25a.894.894 0 1 1 0-1.788.894.894 0 0 1 0 1.788zm5.484 0a.894.894 0 1 1 0-1.788.894.894 0 0 1 0 1.788z" />
    </svg>
  )
}

/* ── WeChat Modal ───────────────────────────────────── */
function WeChatModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false)
  const wechatId = 'paad_wechat'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(wechatId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 24 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative rounded-3xl p-8 text-center max-w-xs w-full"
        style={{ background: '#1D1D1F', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <X className="w-3.5 h-3.5 text-white/60" />
        </button>

        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{ background: 'linear-gradient(135deg, #07C160, #06AE56)' }}
        >
          <WeChatIcon className="w-9 h-9 text-white" />
        </div>

        <h3 className="font-bold text-white mb-1.5" style={{ fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
          Add us on WeChat
        </h3>
        <p className="text-white/45 text-sm mb-6">Search for our WeChat ID:</p>

        <div
          className="flex items-center justify-between gap-3 rounded-2xl px-5 py-3.5 mb-3"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <span className="font-bold text-white text-lg tracking-wide">{wechatId}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
            style={{ color: copied ? '#07C160' : '#D4A843' }}
          >
            {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
          </button>
        </div>
        <p className="text-white/30 text-xs">Tap Copy · paste in WeChat search</p>
      </motion.div>
    </motion.div>
  )
}

/* ── Single floating button ─────────────────────────── */
function FloatBtn({
  label,
  icon,
  bg,
  shadow,
  onClick,
  href,
  delay,
}: {
  label: string
  icon: React.ReactNode
  bg: string
  shadow: string
  onClick?: () => void
  href?: string
  delay: number
}) {
  const [hovered, setHovered] = useState(false)

  const inner = (
    <>
      {/* label pill that slides in on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold text-white px-3 py-1.5 rounded-xl pointer-events-none"
            style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(10px)' }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {/* icon */}
      <span className="relative z-10">{icon}</span>
    </>
  )

  const sharedProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    className: 'relative flex items-center justify-center w-12 h-12 rounded-full text-white transition-transform duration-200 hover:scale-110 active:scale-95',
    style: { background: bg, boxShadow: `0 4px 18px ${shadow}` } as React.CSSProperties,
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {href ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" {...sharedProps}>
          {inner}
        </a>
      ) : (
        <button onClick={onClick} {...sharedProps}>
          {inner}
        </button>
      )}
    </motion.div>
  )
}

/* ── Main export ────────────────────────────────────── */
export default function FloatingContact() {
  const [wechatOpen, setWechatOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {wechatOpen && <WeChatModal onClose={() => setWechatOpen(false)} />}
      </AnimatePresence>

      {/* Always-visible vertical stack — bottom-right */}
      <div className="fixed right-5 bottom-8 z-[100] flex flex-col items-center gap-3">

        {/* Phone */}
        <FloatBtn
          delay={0.1}
          label="Call (650) 324-4900"
          href="tel:6503244900"
          bg="linear-gradient(135deg, #D4A843, #B88D2C)"
          shadow="rgba(212,168,67,0.5)"
          icon={<Phone className="w-5 h-5" />}
        />

        {/* WhatsApp */}
        <FloatBtn
          delay={0.18}
          label="WhatsApp (650) 440-9971"
          href="https://wa.me/16504409971"
          bg="linear-gradient(135deg, #25D366, #128C7E)"
          shadow="rgba(37,211,102,0.45)"
          icon={<WhatsAppIcon className="w-5 h-5" />}
        />

        {/* WeChat */}
        <FloatBtn
          delay={0.26}
          label="WeChat: paad_wechat"
          bg="linear-gradient(135deg, #07C160, #06AE56)"
          shadow="rgba(7,193,96,0.45)"
          onClick={() => setWechatOpen(true)}
          icon={<WeChatIcon className="w-5 h-5" />}
        />

      </div>
    </>
  )
}

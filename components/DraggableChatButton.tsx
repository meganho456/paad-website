'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

function AIChatIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <path
        d="M4 6C4 4.9 4.9 4 6 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8l-4 4V6z"
        stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none"
      />
      <path
        d="M14 9l1.2 2.8L18 13l-2.8 1.2L14 17l-1.2-2.8L10 13l2.8-1.2L14 9z"
        fill="white" opacity="0.9"
      />
    </svg>
  )
}

declare global {
  interface Window {
    tidioChatApi?: {
      on: (event: string, cb: () => void) => void
      open: () => void
      show: () => void
      hide: () => void
    }
  }
}

export default function DraggableChatButton() {
  const [ready, setReady] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setReady(true)
    const dismissed = localStorage.getItem('paad-chat-tooltip-v3')
    if (!dismissed) {
      setTimeout(() => setShowTooltip(true), 1800)
    }

    // When Tidio chat closes, hide the widget (so only our button shows)
    const onClose = () => window.tidioChatApi?.hide()
    const interval = setInterval(() => {
      if (window.tidioChatApi) {
        clearInterval(interval)
        window.tidioChatApi.hide()
        window.tidioChatApi.on('close', onClose)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const dismissTooltip = () => {
    setShowTooltip(false)
    localStorage.setItem('paad-chat-tooltip-v3', '1')
  }

  const openChat = () => {
    window.tidioChatApi?.show()
    window.tidioChatApi?.open()
  }

  return (
    <>
      {/* Full-viewport drag boundary */}
      <div ref={constraintsRef} className="fixed inset-0 z-[98] pointer-events-none" />

      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={constraintsRef}
        dragElastic={0.08}
        onDragStart={dismissTooltip}
        className="fixed bottom-24 right-5 z-[101] cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'none' }}
      >
        {/* Tooltip bubble */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 6 }}
              transition={{ duration: 0.22 }}
              className="absolute bottom-full right-0 mb-3"
              style={{ width: '220px' }}
            >
              <button
                onClick={dismissTooltip}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center z-10"
                style={{ background: 'rgba(100,100,100,0.85)' }}
              >
                <X className="w-3 h-3 text-white" />
              </button>
              <div
                className="relative rounded-2xl px-4 py-3 text-sm font-semibold leading-snug"
                style={{ background: 'rgba(255,255,255,0.95)', color: '#C0392B', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
              >
                Try our new GenAI chatbot!<br />Drag the icon to move it.
                {/* Tail pointing down-right toward button */}
                <span
                  className="absolute right-5 -bottom-2 w-0 h-0"
                  style={{
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '9px solid rgba(255,255,255,0.95)',
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat button — dark circle with AI icon */}
        <button
          onClick={openChat}
          className="flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-150 hover:scale-110 active:scale-95 select-none"
          style={{
            background: '#1a1a1a',
            boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
          }}
        >
          <AIChatIcon />
        </button>
      </motion.div>
    </>
  )
}

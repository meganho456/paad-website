'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

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
    const dismissed = localStorage.getItem('paad-chat-tooltip-dismissed')
    if (!dismissed) {
      setTimeout(() => setShowTooltip(true), 1800)
    }

    // When Tidio chat closes, hide its container again
    const onClose = () => {
      const el = document.getElementById('tidio-chat')
      if (el) el.style.display = 'none'
    }
    const interval = setInterval(() => {
      if (window.tidioChatApi) {
        clearInterval(interval)
        window.tidioChatApi.on('close', onClose)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const dismissTooltip = () => {
    setShowTooltip(false)
    localStorage.setItem('paad-chat-tooltip-dismissed', '1')
  }

  const openChat = () => {
    const el = document.getElementById('tidio-chat')
    if (el) el.style.display = 'block'
    if (window.tidioChatApi) {
      window.tidioChatApi.open()
    }
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
        className="fixed bottom-6 left-6 z-[101] cursor-grab active:cursor-grabbing"
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
              className="absolute bottom-full left-0 mb-3"
              style={{ width: '200px' }}
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
                Try our chat! Drag the icon to move it freely.
                {/* Tail pointing down-left */}
                <span
                  className="absolute left-5 -bottom-2 w-0 h-0"
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

        {/* Chat button */}
        <button
          onClick={openChat}
          className="flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold shadow-lg transition-transform duration-150 hover:scale-105 active:scale-95 select-none"
          style={{
            background: 'rgba(255,255,255,0.95)',
            color: '#1a1a1a',
            boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <MessageCircle className="w-4 h-4" style={{ color: '#D4A843' }} />
          Chat with us
        </button>
      </motion.div>
    </>
  )
}

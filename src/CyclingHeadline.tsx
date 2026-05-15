/**
 * CyclingHeadline — AnimatePresence + mode="wait"
 *
 * Coda.co hero: three words cycle endlessly. Each word exits (slides up + fades)
 * before the next enters (slides up + fades in). mode="wait" guarantees no overlap.
 *
 * Bug 02 prevention: key={word} on the motion element. Without it, Motion
 * can't distinguish exiting vs entering content — animation fires once then dies.
 */

import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

const WORDS = ["CUSTOMIZE", "MONETIZE", "MAXIMIZE"]
const CYCLE_MS = 2500

export function CyclingHeadline() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % WORDS.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="min-h-screen grid place-items-center text-center">
      <div>
        <p className="text-sm tracking-[0.3em] uppercase opacity-60 mb-4">
          Grow with us
        </p>
        <div className="h-[8em] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={WORDS[index]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-7xl md:text-8xl font-bold text-[var(--color-brand)]"
            >
              {WORDS[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <p className="text-xl mt-6 opacity-70">
          Ready to grow? We're ready to go.
        </p>
      </div>
    </section>
  )
}

/**
 * LogoStrip — Variants + staggerChildren
 *
 * Coda.co partner logos: wave-like reveal as they scroll into view.
 * Parent variant orchestrates children via staggerChildren=0.1.
 * Each child fades + slides independently but timed by the parent.
 *
 * Uses whileInView on the parent — children inherit the trigger.
 * Only opacity + y animations (no height/top — Bug 03 prevention).
 */

import { motion } from "motion/react"
import type { Variants } from "motion/react"

const LOGOS = [
  "Moonton",
  "Garena",
  "Shopee",
  "Grab",
  "Gojek",
  "Tokopedia",
  "Bukalapak",
  "Traveloka",
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function LogoStrip() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12 opacity-60">
          Trusted by the best
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {LOGOS.map(name => (
            <motion.div
              key={name}
              variants={itemVariant}
              className="bg-white/5 rounded-xl p-6 flex items-center justify-center border border-white/10"
            >
              <span className="text-lg font-medium opacity-80">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

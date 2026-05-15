/**
 * RevealCard — whileInView
 *
 * Coda.co product cards: fade + slide up when they scroll into view.
 * viewport.once=true — product content shouldn't re-animate every time you scroll back.
 * viewport.amount=0.3 — card needs to be 30% visible before triggering.
 *
 * Only animates opacity + y (transform properties). Paul Lewis rule.
 */

import { motion } from "motion/react"

const CARDS = [
  {
    title: "Coda Webstore",
    description: "Launch your own storefront. Customize everything, own the customer relationship.",
  },
  {
    title: "Codapay",
    description: "Accept payments globally. One integration, every local payment method.",
  },
  {
    title: "Coda Distribution",
    description: "Reach players where they are. Distribute across 50+ markets from one dashboard.",
  },
]

export function RevealCard() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="opacity-70 text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              <span className="text-[var(--color-brand)] text-sm font-medium">
                Learn more →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

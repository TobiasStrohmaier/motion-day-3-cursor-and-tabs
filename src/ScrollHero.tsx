/**
 * ScrollHero — useScroll + useTransform
 *
 * Status: DONE. This is yesterday's reach point — the only primitive we
 * built live in class on 12.05.2026.
 *
 * 💡 Why this matters:
 *   `scrollYProgress` is a MotionValue, not React state. It updates 60 times
 *   per second while you scroll, and React re-renders ZERO times during it.
 *   The DOM reads the new value through Motion's subscription mechanism,
 *   the GPU compositor applies the transform, and main thread stays idle.
 *
 *   Mandy's reflection: "useScroll und useMotionValue sind performant,
 *   weil Motion nicht ständig neu rendert."
 *
 * 🔬 DevTools moment (will do live):
 *   1. Open DevTools → Performance tab
 *   2. Click record, scroll the page slowly for 3 seconds, click stop
 *   3. Look at the Main thread track — mostly idle
 *   4. Look at the Compositor track — busy doing transform work
 *   5. That asymmetry is the whole point of MotionValues
 */

import { motion, useScroll, useTransform } from "motion/react"

export function ScrollHero() {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <motion.section
      style={{ opacity, y, scale }}
      className="min-h-screen grid place-items-center text-center"
    >
      <div>
        <h1 className="text-6xl font-bold">Hello, Motion.</h1>
        <p className="text-xl mt-4 opacity-70">
          Scroll runter — schau, was passiert.
        </p>
      </div>
    </motion.section>
  )
}

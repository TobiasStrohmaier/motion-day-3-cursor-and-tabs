/**
 * CursorFollower — useMotionValue + useSpring
 *
 * Status: STUB. We build this together today, Block B.
 *
 * What it does:
 *   A small dot that follows the mouse cursor with spring physics. It does
 *   not jump — it eases. And it uses ZERO React re-renders to animate.
 *
 * Why a MotionValue instead of useState:
 *   The mouse moves 60+ times per second. If we stored mouseX in useState,
 *   React would re-render the component 60+ times per second. That is the
 *   single most common Junior performance bug in React animation code.
 *   A MotionValue is a subscribable primitive that bypasses React's render
 *   cycle entirely.
 *
 * Why useSpring on top of useMotionValue:
 *   The raw mouse position is jittery. useSpring wraps the raw value in
 *   physics — stiffness controls how aggressive the chase is, damping
 *   controls how much overshoot is allowed. Two numbers, one feel.
 *
 * Reference implementation:
 *   See Mandy's hello-motion/src/App.tsx CursorFollower component.
 *   She used stiffness 150, damping 15 — soft and floaty.
 *
 * 🔬 DevTools moment (will do live after build):
 *   1. Open DevTools → 3-dot menu → More tools → Rendering
 *   2. Enable "Paint flashing" — move your mouse
 *   3. The cursor div does NOT flash green (no repaint)
 *   4. Enable "Layer borders" — the cursor div is on its own composited layer
 *   5. That is the proof that transform animation skips the main thread.
 *
 * 💡 Engineering Punkt (Paul Lewis, Google Chrome perf team):
 *   "Transform and opacity are the only properties the compositor handles
 *    without main-thread work."
 */

import { motion, useMotionValue, useSpring } from "motion/react"
import { useEffect } from "react"
import { SPRING_PRESETS } from "./motion.config"

export function CursorFollower() {
  // === BEGIN BUILD 1 — Raw mouse position as MotionValues ===
  //
  // Hint:
  //   const mouseX = useMotionValue(0)
  //   const mouseY = useMotionValue(0)
  //
  // Why two values: x and y are independent axes. The spring on x does not
  // need to know about y. Independent MotionValues = independent springs.
  //
  // === END BUILD 1 ===

  // === BEGIN BUILD 2 — Spring-wrapped derived MotionValues ===
  //
  // Hint:
  //   const springX = useSpring(mouseX, SPRING_PRESETS.smooth)
  //   const springY = useSpring(mouseY, SPRING_PRESETS.smooth)
  //
  // SPRING_PRESETS lives in motion.config.ts so you can change the feel
  // in one place. Open that file — that pattern is itself the architecture
  // lesson of this lecture.
  //
  // === END BUILD 2 ===

  // === BEGIN BUILD 3 — useEffect with mousemove + cleanup ===
  //
  // Hint:
  //   useEffect(() => {
  //     const handle = (e: MouseEvent) => {
  //       mouseX.set(e.clientX - 16)  // -16 centers the 32px dot on cursor
  //       mouseY.set(e.clientY - 16)
  //     }
  //     window.addEventListener("mousemove", handle)
  //     return () => window.removeEventListener("mousemove", handle)
  //   }, [mouseX, mouseY])
  //
  // The cleanup return is non-negotiable. Without it, Hot Module Reload
  // doubles up listeners and you have a slow memory leak.
  //
  // === END BUILD 3 ===

  // === BEGIN BUILD 4 — Render the dot ===
  //
  // Hint:
  //   return (
  //     <motion.div
  //       style={{ x: springX, y: springY }}
  //       className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[var(--color-brand)] pointer-events-none mix-blend-difference z-50"
  //     />
  //   )
  //
  // Three things to remember:
  //   - `fixed top-0 left-0` is the anchor. Animation runs over Transform, not over left/top.
  //   - `pointer-events-none` prevents the dot from intercepting clicks on real UI.
  //   - `mix-blend-difference` makes the dot visible on BOTH dark and light backgrounds.
  //
  // === END BUILD 4 ===

  return null // ← delete this when build is done
}

/**
 * TabBar — layoutId + FLIP
 *
 * Status: STUB. We build this together today, Block C.
 *
 * What it does:
 *   A pill-style tab bar. Click a tab. The brand-colored pill background
 *   GLIDES from the old tab to the new tab. It does not jump. It does not
 *   crossfade. It travels.
 *
 * Why layoutId is special:
 *   The pill div in the OLD active tab and the pill div in the NEW active
 *   tab are two different DOM elements. They mount and unmount on click.
 *   Motion sees the shared `layoutId="tab-indicator"` and treats them as
 *   ONE animated entity. It measures First position, Last position, Inverts
 *   with a transform, then Plays the transform back to identity. FLIP.
 *
 * Why React state is the right choice here:
 *   `active` is a DISCRETE value — one of 4 tab names. Not a continuous
 *   stream. Discrete = state. Continuous = MotionValue. That's the rule
 *   the CursorFollower demonstrated from the other side.
 *
 * Reference implementation:
 *   See Mandy's hello-motion/src/App.tsx TabBar component.
 *   She used spring stiffness 500, damping 35 — snappy and crisp.
 *
 * 🔬 DevTools moment (will do live after build):
 *   1. Open DevTools → Elements panel
 *   2. Right-click the active pill → Inspect
 *   3. Click a different tab — watch the indicator div UNMOUNT from the
 *      old button and MOUNT inside the new button in real time
 *   4. Open Animations drawer (3-dot menu → More tools → Animations)
 *   5. Slow to 25%, click another tab — see the FLIP transform tick frame by frame
 *
 * 💡 Engineering Punkt:
 *   Animation between elements that are not the same element. That's the
 *   trick layoutId pulls off. It's what every smooth tab indicator on
 *   Linear, Vercel, Stripe, and Cal.com is built on.
 */

import { motion } from "motion/react"
import { useState } from "react"
import { SPRING_PRESETS } from "./motion.config"

const TABS = ["Home", "Pricing", "Profile", "About"] as const
type TabName = (typeof TABS)[number]

export function TabBar() {
  // === BEGIN BUILD 1 — Active tab state ===
  //
  // Hint:
  //   const [active, setActive] = useState<TabName>("Home")
  //
  // Why typed: the TABS array is `as const`, so TabName is a union of the
  // 4 string literals. setActive("Wrong") gives a TypeScript error before
  // it compiles. Junior bug prevention.
  //
  // === END BUILD 1 ===

  // === BEGIN BUILD 2 — Render the nav with buttons ===
  //
  // Hint structure:
  //   return (
  //     <nav className="flex gap-2 p-2 bg-white/10 rounded-2xl mx-auto w-fit my-12">
  //       {TABS.map(tab => (
  //         <button
  //           key={tab}
  //           onClick={() => setActive(tab)}
  //           className="relative px-4 py-2 text-sm font-medium z-10"
  //         >
  //           {tab}
  //           {active === tab && (
  //             <motion.div
  //               layoutId="tab-indicator"
  //               className="absolute inset-0 bg-[var(--color-brand)] rounded-full -z-10"
  //               transition={SPRING_PRESETS.snappy}
  //             />
  //           )}
  //         </button>
  //       ))}
  //     </nav>
  //   )
  //
  // Three things to remember:
  //   - `key={tab}` for the React map. Required, unrelated to layoutId.
  //   - `layoutId="tab-indicator"` SHARED across all 4 buttons but only
  //      ONE renders at a time (conditional `active === tab`).
  //   - z-stack: button text is z-10, pill is -z-10. So text stays on top.
  //
  // === END BUILD 2 ===

  return null // ← delete this when build is done
}

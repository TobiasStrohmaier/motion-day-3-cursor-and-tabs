/**
 * App.tsx — the wiring layer
 *
 * Three Motion primitives, three components, one app. This is composition.
 *   - ScrollHero        — useScroll + useTransform   (DONE, from yesterday)
 *   - CursorFollower    — useMotionValue + useSpring (STUB, build today)
 *   - TabBar            — layoutId + FLIP            (STUB, build today)
 *
 * 💡 Why three separate files instead of one:
 *   Production-grade Motion code lives in small components. Each primitive
 *   has its own concerns — a single fat App.tsx is the wrong place to learn
 *   what the primitive IS. Mandy's hello-motion follows the same pattern.
 */

import { NextSection } from "./NextSection"
import { CursorFollower } from "./CursorFollower"
import { TabBar } from "./TabBar"
import { CyclingHeadline } from "./CyclingHeadline"
import { RevealCard } from "./RevealCard"
import { LogoStrip } from "./LogoStrip"

export default function App() {
  return (
    <main>
      <CursorFollower />
      <CyclingHeadline />
      <TabBar />
      <RevealCard />
      <LogoStrip />
      <NextSection />
    </main>
  )
}

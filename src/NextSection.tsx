/**
 * NextSection — anchor section
 *
 * Status: DONE. Nothing to build here. This is just a second full-screen
 * section so that ScrollHero has something to scroll TO.
 *
 * Without this, scrollYProgress never moves and the hero animation looks
 * broken. Engineering Punkt: every Motion demo needs a real scrollable
 * page, not an empty viewport. Mandy's repo has the same pattern.
 */

export function NextSection() {
  return (
    <section className="min-h-screen grid place-items-center bg-white/5">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Du hast gescrollt.</h2>
        <p className="text-lg opacity-70 mt-3">
          Das Hero ist auf dem Weg, du bist hier.
        </p>
      </div>
    </section>
  )
}

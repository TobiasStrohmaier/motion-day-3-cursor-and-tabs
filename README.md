# Motion Day 3 — Cursor &amp; Tabs

Live-build template for **Mittwoch 13.05.2026** — W2 Motion module, Day 3.

This repo continues from where Tuesday's class stopped (`useScroll`). You build two new primitives with us today:
- `CursorFollower` (useMotionValue + useSpring)
- `TabBar` (layoutId + FLIP)

Then we compose all three in one app and watch the result in DevTools.

## Clone &amp; run

```bash
git clone https://github.com/OthmanAdi/motion-day-3-cursor-and-tabs.git
cd motion-day-3-cursor-and-tabs
bun install
bun run dev
```

Open `http://localhost:5173`. You should see the ScrollHero text and "Du hast gescrollt." Nothing else, yet. CursorFollower and TabBar render `null` — they are stubs you fill in.

## What's already done

| File | Status | What |
|---|---|---|
| `src/ScrollHero.tsx` | ✅ DONE | useScroll + useTransform — yesterday's reach point |
| `src/NextSection.tsx` | ✅ DONE | anchor section so the hero has room to scroll |
| `src/index.css` | ✅ DONE | Tailwind v4 + 3-layer @theme tokens |
| `src/motion.config.ts` | ✅ DONE | shared spring presets (smooth / snappy / bounce) |

## What you build today

| File | Status | What | Block |
|---|---|---|---|
| `src/CursorFollower.tsx` | 🔨 STUB | useMotionValue + useSpring + useEffect with cleanup | B |
| `src/TabBar.tsx` | 🔨 STUB | useState + layoutId conditional indicator | C |
| `src/App.tsx` | ✅ wires it | Three primitives composed | D |

Each stub has `// === BEGIN BUILD N ===` and `// === END BUILD N ===` markers. Ahmad walks you through. Hint code is inside the markers — type it together, don't paste.

## 🔬 Watch in DevTools

Each primitive has a designated DevTools observation. See `docs/WATCH_IN_DEVTOOLS.md` for the full cheat sheet.

Short version:
- **CursorFollower** → Rendering panel → "Paint flashing" + "Layer borders"
- **TabBar** → Elements panel + Animations drawer at 25% speed

## 💡 Why this repo exists

See `docs/WHY_THIS_REPO.md` — short architecture note. Read it after class, not during.

## Stack

Vite 6 + React 19 + TypeScript + Tailwind v4 + motion 11. No `framer-motion`. The package was renamed. Imports come from `motion/react`.

## License

MIT.

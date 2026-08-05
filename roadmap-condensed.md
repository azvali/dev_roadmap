# Dev Roadmap — Condensed Master Plan

**49 weeks (47 content + 2 flex) · ~600 hours at 12 hrs/wk · backend starts Week 17 · front-end closes Week 16**

This plan is **frozen until the JS gate (Week 7)**. After that, adjustments happen only at phase boundaries, 20 minutes max, just-in-time.

---

## The shape of every week (12 hrs)

| Day   | Time      | Job                                                                      |
| ----- | --------- | ------------------------------------------------------------------------ |
| Mon   | 2h        | New material + immediate small exercise                                  |
| Tue   | 2h        | Drills — repetition on the week's topic                                  |
| Thu   | 2h        | Build — apply it to the project                                          |
| Fri   | 10–15 min | **Teach-it video** — explain the week's core concept to camera, no notes |
| Sat   | 4h        | Build-heavy + timed from-memory work                                     |
| Sun   | 1h        | Review, retro ("what's still shaky?"), plan next week                    |
| Daily | 10 min    | **Anki** — every miss becomes a card in your own words                   |

Days are movable; the shape (2+2+2+4+1) is not. Protect the ratio: ~60% building, ~30% consuming, ~10% review.

## Standing rules

1. **AI writes zero project code.** It explains, quizzes, reviews. Predict before paste — if you can't say what a snippet does, don't run it.
2. **Gates are hard.** Fail → 48h targeted drills → retest. Never advance on a fail.
3. Everything after Phase 4 is **TypeScript, `strict: true`**, no exceptions.
4. **Every project ships:** deployed link + real README. "Done locally" is not done.
5. **CLI Git only** until narrating what the buttons do is trivial.
6. If a week drifts past 30% videos/reading, stop consuming and build.
7. No roadmap edits until the JS gate.

## Known deferrals — decided, not forgotten

- **AZ-204: PARKED until after the capstone — decided.** No cert study during these 49 weeks; if an Azure-shop opportunity demands it sooner, that's a deliberate re-decision, not a drift.
- **DS&A / NeetCode:** cut with job prep, but it's real technical ability, not resume polish. The daily kata keeps the muscle warm; budget a separate 4–6 weeks of NeetCode (~45 problems, hash-map-heavy) whenever interviews get real. It is **not** inside these 49 weeks.
- **Deliberately absent — do not panic-add later:** GraphQL, react-hook-form, Redux, Kubernetes, AWS breadth, microservices implementation, Prisma depth. Each is an afternoon-sized pickup on the job from this foundation.

## Phase map

| #   | Phase                            | Weeks | Project                        |
| --- | -------------------------------- | ----- | ------------------------------ |
| 2   | CSS                              | 1–2   | AYORSIX one-pager (deployed)   |
| 3   | JavaScript                       | 3–7   | Ride Log (vanilla)             |
| ⟂   | Flex A                           | 8     | Retests / rest                 |
| 4   | TypeScript                       | 9–10  | Ride Log → strict TS           |
| 5   | React                            | 11–13 | Ride Planner                   |
| 6   | Next.js                          | 14–16 | The blog, finished             |
| 7   | Node · Express · REST · NestJS   | 17–24 | Garage API v1 + Nest port      |
| 8   | PostgreSQL + Drizzle             | 25–30 | Garage API v2                  |
| 9   | Auth & security                  | 31–32 | MotoLog                        |
| 10  | Testing · Docker · CI/CD         | 33–36 | MotoLog v2 (proven)            |
| 11  | Advanced backend + system design | 37–42 | MotoLog v3                     |
| ⟂   | Flex B                           | 43    | Fresh brain before design week |
| 12  | Capstone                         | 44–49 | Track-Day Booking Platform     |

---

# PHASE 2 — CSS (Weeks 1–2)

**Goal:** predict box dimensions on paper · build any common layout from memory · flex vs grid with reasons · mobile-first by default.
**Absorbs Phase 1's remainder:** Git verbals open Week 1, the PR workflow lives inside the project, recovery kit in Week 1 Sunday.

### Week 1 — The layout model

- **Mon (2h):**
  - First 5 min, cold, out loud: the three trees + why staging exists; fetch vs pull + when you'd deliberately fetch
  - Box model math: content / padding / border / margin — the missed question (`width: 200px; padding: 20px; border: 5px` → renders 250px)
  - `box-sizing: border-box` + the universal reset; units: `rem` for type/spacing, `max-width` containers
  - Drill: 10 predict-the-width problems on paper → verify each in DevTools
- **Tue (2h):**
  - Flexbox model: main vs cross axis; `flex-direction` rotates what `justify-content` / `align-items` control
  - grow / shrink / basis; `flex: 1` = `1 1 0`; the `min-width: 0` text-won't-shrink gotcha
  - Resource: Josh Comeau's interactive flexbox guide
- **Thu (2h):**
  - Flex patterns, each built once with the guide then once without: navbar · media object · wrapping card row · sticky footer
  - Flexbox Froggy, full run, timed
- **Fri:** teach-it — main axis vs cross axis in 90 seconds
- **Sat (4h):**
  - Grid: `fr`, `repeat()`, `minmax()`, `auto-fit` vs `auto-fill`, the signature `repeat(auto-fit, minmax(250px, 1fr))`
  - Template areas · holy grail layout · Grid Garden full run
  - Choose-the-tool ×5: flex or grid for described layouts, with reasons
- **Sun (1h):**
  - Recovery-kit speed run on a scratch repo: `--amend`, `revert` vs `reset` (soft/mixed/hard), `stash` — 30 min
  - Sketch-the-output snippets; scaffold the project repo as PR #1
- **Daily (15 min):** Git cycle drill on a scratch repo — branch → edit → conventional commit → push → PR → merge. Under 5 minutes without thinking by Friday.

### Week 2 — Responsive + ship

- **Mon (2h):**
  - Mobile-first, precisely: base styles = smallest viewport, layer with `min-width` queries, breakpoints where **content** breaks
  - Convert 3 desktop-first snippets to mobile-first
- **Tue (2h):**
  - `:root` design tokens · dark theme via `prefers-color-scheme` · `clamp()` headline · `aspect-ratio` · `max-width: 100%` media
- **Thu (2h):**
  - Build: sticky header + hero + gear grid — each section its own branch → PR, conventional commits
- **Fri:** teach-it — define mobile-first + write the min-width pattern from memory
- **Sat (4h):**
  - Build: spec table restyle, contact form with `:focus-visible`, footer; one transitions polish hour on cards/buttons
  - Manufacture and resolve one merge conflict on purpose
  - Gate rehearsal: navbar + auto-fit grid from memory, blank file, ≤30 min
- **Sun (1h):** **GATE**

### Project — AYORSIX one-pager (~8h, threaded)

Sticky header · `clamp()` hero + CTA · auto-fit gear grid with hover polish · R6 spec table (Week 1 HTML reused) · styled form · footer. Dark by default, mobile-first, ~2 breakpoints, clean 320→1440px.
**Process requirement:** every section on its own branch, merged via PR, conventional commits, one resolved conflict — the history is half the deliverable.
**Done =** validator clean · Lighthouse a11y ≥ 95 · deployed · README.

### Gate — all cold

1. The box-model question, perfect (including `border-box` + the reset)
2. Flex (1D, content-out) vs grid (2D, layout-in) in one breath + choose-the-tool 5/5
3. Mobile-first definition + min-width pattern from memory
4. Timed: navbar + responsive card grid, blank file, ≤30 min
5. Site live; repo history shows the full PR workflow (absorbs the Git gate)

---

# PHASE 3 — JavaScript Mastery (Weeks 3–7)

**The phase the roadmap exists for. Untouched.** Built from your four assessed gaps: closures, async ordering, the var/setTimeout loop, `reduce`.
**Backbone:** javascript.info — do every chapter's tasks. MDN as reference. Videos ≤ 30%.
**Hardest rules apply here:** AI writes zero code in this repo, and TypeScript exempts you from none of it — types vanish at runtime.

### Week 3 — Scope, closures, `this`

- **Mon (2h):**
  - `var` (function-scoped) vs `let`/`const` (block); hoisting + TDZ; declarations vs expressions
  - Loop question, level 1: `for (var i…) setTimeout(...)` → `3 3 3`; why `let` → `0 1 2` (fresh binding per iteration)
  - js.info 2.4, 6.4
- **Tue (2h):**
  - Closures: a function bundled with the environment it was created in — it keeps that environment alive
  - The canonical counter; loop question level 2 (all callbacks share one `var` binding)
  - js.info 6.3 — **all 9 tasks**
- **Thu (2h):**
  - Closure applications from blank files: `createAccount` (private state) · `once` · `memoize` · `makeAdder`
- **Fri:** teach-it — the loop question, levels 1–2, ≤2 min
- **Sat (4h):**
  - `this`: the four call-site rules (`new` → explicit → implicit → default); the extracted-method bug; arrows have no own `this` (js.info 4.4, 6.10–6.11)
  - Drill block: start 15 predict-the-output snippets on paper (var/let, TDZ, `this` in 4 call sites) — answer first, run second
- **Sun (1h):**
  - Finish the 15; misses → Anki in your own words
  - Re-implement `makeCounter`, `once`, `memoize` cold
  - Start the kata habit: one Codewars kata daily from here on — 8kyu now, step up to 7kyu when 8s feel trivial, 6kyu by the backend phases

### Week 4 — Arrays + `reduce`

- **Mon (2h):**
  - `map` / `filter` / `find`: return values, purity, chaining
  - `for…of` vs `for…in` + the added-property trap (js.info 5.5, do the tasks)
  - `Map` & `Set` — when object keys fail you (js.info 5.7, 30 min); you'll use a real `Map` in Phase 11's socket registry
- **Tue (2h):**
  - `reduce` from zero: signature `(acc, cur) => acc`, the seed, hand-trace tables — sum, max, count, flatten
- **Thu (2h):**
  - `groupBy`, `countBy`, `keyBy` from scratch
  - The mastery classic: re-implement `map`, `filter`, `find` using only `reduce`
- **Fri:** teach-it — live-code `groupBy` from a blank file
- **Sat (4h):**
  - Real shapes: ride/maintenance records — total miles per bike, cost by category, average by type
  - 10 reduce katas; hand-trace anything that surprises you
- **Sun (1h):** the trio (`groupBy`/`countBy`/`keyBy`) cold again; Anki

### Week 5 — Event loop + async

- **Mon (2h):**
  - Call stack → Web APIs → macrotask queue (`setTimeout`) vs **microtask queue** (promises, drained first)
  - Predict ordering on paper; loop question level 3 (queue timing)
  - Philip Roberts + Jake Archibald talks — ~20% watch, 80% predict in writing
- **Tue (2h):**
  - Callbacks → promises: states, chaining, `.then` returns a **new** promise (js.info 11.2–11.4)
- **Thu (2h):**
  - `async/await` as syntax over promises; `try/catch` around `await`; `Promise.all` / `allSettled` / `race`
  - Convert 3 chains both directions until fluent (js.info 11.8)
- **Fri:** teach-it — narrate the event loop with one mixed snippet
- **Sat (4h):**
  - `fetch` for real: `response.ok`, `fetchJSON(url)` that throws on `!ok`
  - `weather.js` on Open-Meteo (free, no key) → temp/precip/wind → a `goodRidingDay` boolean, console-only
  - Async gauntlet: 10 fresh ordering snippets on paper
- **Sun (1h):** score the gauntlet — **5/5 or a new set tomorrow morning**

### Week 6 — Modules, errors, light classes + build

- **Mon (2h):**
  - What `new` does (create → link prototype → bind `this` → return); class syntax; `class ValidationError extends Error` — deliberately light (js.info 9.1–9.2)
  - Last 30 min: **the browser debugger** — breakpoints, step over/into, watch, call stack. Retire console.log-only debugging now, not in month six
- **Tue (2h):**
  - ES modules: `export`/`import` named vs default, module scope (js.info 13.1–13.2)
- **Thu (2h):**
  - Errors on purpose: `try/catch/finally`, `throw` — and the boundary: `try/catch` can't catch async-callback throws; rejections need `.catch` or an awaited `try/catch` (js.info 10.1–10.2)
- **Fri:** teach-it — where does a rejection go?
- **Sat (4h):**
  - **Build Ride Log:** validated add-form with inline errors · list render · filter + delete via **event delegation** (one container listener)
- **Sun (1h):** wire the `reduce` stats readout; versioned localStorage skeleton

### Week 7 — Consolidation + THE RE-TEST

- **Mon (2h):** cold re-implement the Week 3 closure set; hammer whatever wobbles
- **Tue (2h):** `groupBy` + map-via-reduce cold; a fresh async-ordering gauntlet
- **Thu (2h):** `this` snippets; harden Ride Log — weather widget loading/error/offline states, corruption-safe storage; **deploy**
- **Fri:** teach-it — pick your weakest gap, explain it fluently
- **Sat (4h):** **THE GATE** (below)
- **Sun (1h):** written retro — which drills earned their keep; prune Anki

### Project — Ride Log, vanilla (~10–12h, Weeks 6–7)

Validated form with inline errors · filter + delete via delegation · `reduce` stats · corruption-safe versioned localStorage · weather widget with loading/error/offline. ES modules, zero console errors, survives hard refresh, deployed.

### Gate — the re-test, built from your assessed misses, all cold

1. Closures: define in ≤2 sentences; `makeCounter` + `once` from blank files; one real-world sighting
2. Async ordering: 5 fresh snippets — **5/5**
3. Loop question: output + full narration (shared binding → closure capture → queue timing) + two fixes
4. `for…of` vs `for…in` + the trap
5. `reduce`: cost-grouped-by-bike + `countBy`, blank file, no scaffold
6. `this`: 4 snippets predicted
7. Where rejections go; what catches a post-`await` throw; what `try/catch` can't catch
8. **Timed:** filterable/deletable list + validated add-form with delegation — ≤45 min, no references, no AI
9. Deployed, working

---

# ⟂ WEEK 8 — FLEX A

Priority order: (1) failed-gate retests · (2) life/work overflow · (3) rest, ride, or pull ahead.
Using it is not falling behind — it **is** the plan. Do **not** start TypeScript with a shaky gate item.

---

# PHASE 4 — TypeScript (Weeks 9–10)

**Treat as learning, not review.** Moves fast only because it sits on the JS you just proved.
**Backbone:** TS Handbook + Matt Pocock's free Beginner's TypeScript tutorial (start Mon, finish across the week).
**Rule activates at phase end:** everything from here is TS, `strict: true`, forever.

### Week 9 — The type system

- **Mon (2h):**
  - `tsc --init`, **`strict: true` immediately** (loose mode teaches a false dialect), run with `tsx`
  - The golden habit: annotate function boundaries, let inference handle locals
  - Handbook: "The Basics," "Everyday Types"; start Pocock's tutorial
- **Tue (2h):**
  - `interface` vs `type` (interfaces for shapes, aliases for unions — one sentence, move on) · optional `?` · `readonly`
  - Unions + literals: `type Bike = 'R6' | 'Grom'`
- **Thu (2h):**
  - Narrowing (`typeof`, truthiness, `in`) + **discriminated unions** — the weekly-forever pattern:
    `{ status: 'loading' } | { status: 'error'; message } | { status: 'success'; data }`
  - Exhaustiveness via `never`; Handbook "Narrowing" — DU section twice
- **Fri:** teach-it — discriminated unions + exhaustiveness
- **Sat (4h):**
  - Functions: param/return annotations, typing callbacks; watch inference flow through a `filter → map → reduce` chain
  - Drill: model 6 domains from your life as types, no references (ride · maintenance record · IG post · portfolio holding · exhaust listing · flow-run result)
- **Sun (1h):**
  - 10 broken snippets — read the compiler error **first**, predict the fix, then fix
  - Convert 5 Phase-3 utilities (`groupBy`, `once`, `fetchJSON`…) to typed versions

### Week 10 — Generics, utility types, the outside world

- **Mon (2h):**
  - Generics: `function first<T>(arr: T[]): T | undefined`; constraints with `extends`; `ApiResponse<T>`
  - You've consumed these forever (`Promise<T>`) — now you write them
- **Tue (2h):**
  - Utility types + `keyof`/`typeof`: `Partial`, `Pick`, `Omit`, `Record`, `ReturnType`
  - The load-bearing example: `type RideUpdate = Partial<Omit<Ride, 'id'>>` — that's a PATCH body; you build the endpoint in Phase 7
- **Thu (2h):**
  - `unknown` vs `any` (`unknown` forces proof; every `any` is a lie you pay for later); `as` minimized
  - The gate sentence: **types vanish at runtime — typing a fetch response is a promise, not a check** (Zod is the check, Phase 7)
  - Write `fetchJSON<T>`; type Open-Meteo's real payload by hand
- **Fri:** teach-it — `unknown` vs `any` in ≤2 sentences
- **Sat (4h):**
  - **Project:** convert Ride Log to strict TS — new branch, rename `.js` → `.ts`, the error list is the worklist
  - Model `Ride`, `MaintenanceRecord`, `AppState`; storage parses to `unknown` and narrows; weather widget on the DU; typed DOM
- **Sun (1h):**
  - Finish: **zero `any`** (≤2, each with a one-line justification)
  - README section: what the compiler caught (there will be real bugs — document them)
  - **GATE**

### Gate — all cold

1. Headline: unseen JSON payload (~15 fields, nesting, array, nullable, literal status) → accurate types, ≤10 min
2. `interface` vs `type` · `unknown` vs `any` — ≤2 sentences each
3. Blank-file generic: `pluck<T, K extends keyof T>(arr: T[], key: K): T[K][]`
4. 3 scenarios → right utility type (PATCH body / config defaults / lookup table)
5. 3-state DU + exhaustive switch that breaks compilation when a case is added
6. Conversion merged, builds clean

---

# PHASE 5 — React (Weeks 11–13)

**Your two assessed gaps — the re-render model and effects — keep full depth.** Your edge: you hand-built state→render→DOM in Phase 3; React is that pattern industrialized.
**Stack:** Vite + React + TS strict. React Router skipped — your router is Next's, one phase away.
**Backbone:** react.dev — listed pages are assignments; do their challenges.

### Week 11 — Model, components, state (gap #1)

- **Mon (2h):**
  - UI as a function of state — you write `render(state)`, React diffs; scaffold `npm create vite@latest` (react-ts)
  - JSX rules · purity ("Keeping Components Pure") · typed props, destructured, `children`
- **Tue (2h):**
  - Lists + keys: identity across re-renders — why index keys corrupt state on reorder
  - Conditional rendering + the `count && <X/>`-renders-`0` gotcha
  - Build Ride Log's display layer as typed presentational components on hard-coded props — no state yet, on purpose
- **Thu (2h):**
  - `useState`, verbatim: **the setter doesn't change the variable — it schedules a re-render; React calls your function again and `useState` hands the new value to that call**
  - Pages: "State: A Component's Memory," "Render and Commit"
- **Fri:** teach-it — "what happens when you call a setter," 90 seconds
- **Sat (4h):**
  - The snapshot aha: triple `setN(n + 1)` renders 1 and logs 0 — each render's handlers close over that render's values (Week 3 closures pay off); fix = updater form; batching ("State as a Snapshot" — the most important page)
  - Immutable updates (spread, `map`/`filter` — reference equality is how React sees change) · lifting state
  - The gate sentence: **props owned by parent; state owned by component; anything computable is derived — calculate during render, store nowhere**
- **Sun (1h):**
  - Wire components to real state: add (controlled form), delete, filter, stats derived at render
  - 8 predict-the-render drills

### Week 12 — Effects (gap #2)

- **Mon (2h):**
  - Effects synchronize with **external systems** (network, timers, subscriptions) — not "code after render," not derived data, not event logic
  - Deps array = every reactive value read inside; `[]` vs omitted; **the exhaustive-deps lint rule is law**
- **Tue (2h):**
  - Cleanup runs before each re-run and on unmount; StrictMode double-mount is a smoke alarm, not a bug; interval demo
- **Thu (2h):**
  - Fetch-in-effect done right: `WeatherState` DU as state + **race guard** (ignore flag / AbortController in cleanup — responses return out of order)
- **Fri:** teach-it — the three "you might not need an effect" cases
- **Sat (4h):**
  - "You Might Not Need an Effect" — read twice; then `useRef` (DOM handles + mutable non-render values)
  - 8 effect predictions on paper (runs when? loops? missing dep?)
  - Build debounced search as effect + cleanup
- **Sun (1h):** scaffold Ride Planner; spot-search skeleton

### Week 13 — The remainder + ship

- **Mon (2h):**
  - Custom hooks (`useDebounce`, `useLocalStorage<T>`); Rules of Hooks + why (call order)
  - `useReducer` with DU actions — compiler-enforced transitions
- **Tue (2h):**
  - Context for **ambient** values only (theme/user — not a data cache); provider + `useTheme()` that throws outside it
  - Zustand for the small global remainder: typed `create()`, selectors, `persist`
- **Thu (2h):**
  - Perf, measured: parent re-render → children re-render, usually fine; **Profiler first**; `memo`/`useMemo`/`useCallback` for measured problems + referential stability. Never vibes.
- **Fri:** teach-it — props vs state vs derived, one Ride Planner example each
- **Sat (4h):** ship Ride Planner — remaining features, async UX polish (skeletons, retry, empty)
- **Sun (1h):** deploy + README (derived-data and client-state choices explained); **GATE**

### Project — Ride Planner (~14–16h, Weeks 12–13)

Debounced spot search (Open-Meteo geocoding) · saved spots in Zustand+persist, seeded with your corridor · 7-day forecast per spot (fetch-in-effect + race guard) · `scoreDay()` ported from Phase 3, pure, **derived at render** · "best day this week" banner, computed not stored · full async UX · °F/°C toggle.
**Done =** TS strict · **zero eslint-disable on exhaustive-deps** · no Profiler render storms · deployed · README.

### Gate — all cold

1. Gap #1: setter → schedule → re-render → snapshot → batching, ≤90s; triple-setN predicted (rendered _and_ logged)
2. Gap #2: deps rule, `[]` vs omitted, cleanup timing, the three don't-use-an-effect cases
3. Gap #3: props vs state vs derived, ≤3 sentences + examples
4. 5 effect snippets — 5/5
5. Why index keys break; what `key` actually does
6. Timed: blank Vite app → fetched list with DU states, derived search filter, add form — ≤60 min, no references, no AI
7. Deployed, README written

---

# PHASE 6 — Next.js (Weeks 14–16)

**The blog un-freezes and gets finished** — by someone who can defend every route. Tailwind arrives here in-context.
**Backbone:** Next.js docs, App Router.

### Week 14 — App Router + the RSC boundary (your named gap)

- **Mon (2h):**
  - File routing: `page` / `layout` (persists, nests) / `loading` / `error` / `not-found` · dynamic `[slug]` · route groups
  - Scaffold a **playground app** — the blog waits
- **Tue (2h):**
  - Server vs client, precisely: components are **server by default** — zero JS shipped, can read secrets/DBs, can't use state/effects
  - **`"use client"` marks a boundary, not a component: that file and everything it imports joins the client bundle**
  - Client can't import server — but can receive it as `children`; rule: push `"use client"` to the leaves. Read the doc page twice.
- **Thu (2h):**
  - `<Link>` prefetching · `useRouter`/`usePathname` (client-only — notice why) · `metadata` export
  - Tailwind setup: utilities map to CSS you own; `sm:`/`md:` are `min-width` queries — mobile-first natively
- **Fri:** teach-it — `"use client"` in 90 seconds
- **Sat (4h):**
  - Boundary drills: **classify 12 components** server/client with one-line reasons (nav with active state, post body, like button, search input, theme toggle, date formatter…)
  - Break it on purpose: `useState` in a server component; import server into client — read the errors until they're old friends
  - Playground shell: two routes, nested layout, one interactive island done right
- **Sun (1h):** finish the shell; self-run the RSC quiz

### Week 15 — Data, rendering, mutations + the audit

- **Mon (2h):**
  - Server components can be `async` — await data directly: no effect, no loading juggle, secrets stay server-side
  - Articulate where client fetching still fits vs where server fetching replaces it
  - **TanStack Query** (~1h): refactor one Ride Planner fetch — queries, `staleTime`, invalidation, one mutation. Name exactly what it automates vs your hand-rolled Phase 5 version; that articulation is the point
- **Tue (2h):**
  - The blog's core decision: **static** by default (built once, CDN) · **dynamic** when the request matters (`cookies()`, `searchParams`) · **ISR** bridges (`revalidate = 3600`, `revalidatePath`)
  - `generateStaticParams` pre-builds `[slug]`
- **Thu (2h):**
  - Streaming: `loading.tsx` = route Suspense; wrap slow sections · `error.tsx` with reset
  - Route handlers (`app/api/…/route.ts`) — quietly your first hand-written server code; build a JSON endpoint + an RSS handler
- **Fri:** teach-it — static vs dynamic vs ISR with one example each
- **Sat (4h):**
  - Server actions: `"use server"` mutations from forms · first one-page taste of **Zod** · `revalidatePath` · `useActionState` — playground guestbook end-to-end
  - **THE AUDIT:** open the frozen blog repo with five phases of new eyes; expected verdict: keep intent/content/assets, rebuild structure fresh; write it as `AUDIT.md` — timeboxed to this session
- **Sun (1h):** fresh blog scaffold; MDX pipeline start

### Week 16 — The blog, rebuilt + shipped

- **Mon (2h):** MDX pipeline — posts in `/content` with frontmatter · `gray-matter` + `next-mdx-remote` · typed `Post` model · `getAllPosts()` / `getPost(slug)`
- **Tue (2h):** `[slug]` pages — `generateStaticParams` (SSG) · syntax highlighting via `rehype-pretty-code` · prev/next links
- **Thu (2h):** index + `?tag=` filter (know what it does to rendering) · SEO: `generateMetadata` per post, `sitemap.ts`, `robots.ts`, RSS promoted from Week 15
- **Fri:** teach-it — walk each route's rendering strategy
- **Sat (4h):**
  - Contact form: server action + Zod + `useActionState` · dark mode with `"use client"` on the toggle only
  - **Write and publish THE post** — "The setTimeout loop question, three levels deep" is sitting fully drafted in your gate answers
- **Sun (1h):** deploy on Vercel · README rendering-strategy table (route → static/dynamic/ISR → why) · **GATE**

### Gate — all cold

1. Your named gap: `"use client"` — what it marks, what happens to the import graph, why leaves — ≤90s
2. RSC quiz, 9/10 (server + `useState`? client importing server + workaround? where can `process.env.SECRET` live? why is `useRouter` client-only? bundle-size effect?)
3. Per blog route: static/dynamic/ISR and why; what `revalidate` and `revalidatePath` each do
4. Timed: add `/rides/[slug]` trip reports end-to-end (MDX, `generateStaticParams`, `generateMetadata`, index) — ≤90 min, docs allowed, no AI
5. Live on Vercel · post published · sitemap + RSS resolving

**→ Front-end curriculum closes here. Everything after is backend.**

---

# PHASE 7 — Node · Express · REST · NestJS (Weeks 17–24)

**The backend core begins.** Two bridges: your Phase 3 JS _is_ Node (same runtime, no DOM), and your Ally work is the other side of this glass — you've consumed Graph/SharePoint REST for a year; now you build what you've been calling.

### Week 17 — The Node runtime

- **Mon (2h):**
  - V8 + libuv: one JS thread + non-blocking I/O + small thread pool — why Node eats APIs, chokes on CPU-bound
  - Loop phases (timers → poll → check) · `setImmediate` · `process.nextTick`
  - **The law: a blocked loop blocks every request in flight.** Drill: busy-loop starves a timer — feel it once, remember forever
  - Node guides: "The Node.js Event Loop," "Don't Block the Event Loop"
- **Tue (2h):** CJS vs ESM (read both, write ESM) · `node:` prefix · `package.json` for real: scripts, deps vs devDeps, semver `^`/`~`, why lockfiles commit
- **Thu (2h):** `fs/promises` · `path` · `crypto.randomUUID` · `EventEmitter` — build a tiny emitter logger · last 30 min: `node --inspect` + VS Code attach — the server-side debugger
- **Fri:** teach-it — the event-loop law + what happens to other requests
- **Sat (4h):**
  - Streams: `readFile` on 2GB = 2GB RAM; chunks instead · `pipeline()` not bare `.pipe` (error handling) · backpressure in one sentence
  - Drill: copy a 500MB junk file both ways, watch `process.memoryUsage()` — numbers in notes
  - `process.env` + dotenv · exit codes · SIGTERM graceful shutdown
- **Sun (1h):** the forever-pattern: **`config.ts` parsing env through a Zod schema at boot** — refuse to start misconfigured

### Week 18 — HTTP by hand → Express

- **Mon (2h):**
  - Bare `node:http`: req/res **are streams**, hand-rolled routing, hand-parsed body — one hour of this pain is correct
  - Scaffold Express + TS
- **Tue (2h):** the middleware pipeline — an ordered chain of `(req, res, next)`; **order is architecture** (logging → parsing → routes → 404 → error) · `pino-http` with request IDs from day one
- **Thu (2h):** centralized errors — the 4-arg middleware · `AppError` hierarchy (your Phase 3 `ValidationError`, load-bearing) · log rich, respond clean, never leak stacks
- **Fri:** teach-it — why middleware order is architecture
- **Sat (4h):**
  - **Zod at the boundary:** schemas for body/params/query · a `validate(schema)` middleware factory that 400s with structured issues · `z.infer` = one definition → runtime check + static type
  - **Layered architecture:** routes → controllers (HTTP in/out) → services (rules) → repositories (storage) — Phase 8 swaps the bottom layer and nothing above changes
  - Scaffold Garage: config, pino, errors, health route, one vertical slice (`GET /api/v1/bikes`) through all four layers, in-memory Map
- **Sun (1h):** finish the slice; first Bruno requests

### Week 19 — REST design (the design week)

- **Mon (2h):** nouns not verbs (`/bikes`, `/bikes/:id/maintenance`) · sub-resources for ownership · idempotency (GET/PUT/DELETE yes, POST no — retries make it matter) · PUT vs PATCH. Skim Microsoft + Zalando API guidelines; steal judgment.
- **Tue (2h):** status codes precisely: 201+`Location` vs 200 vs 204 · 400 vs 422 (pick a house rule) · **401 vs 403** · 404 also hides others' resources · 409 · 429 · 500
- **Thu (2h):** **one error shape for the whole API — RFC 9457 Problem Details**, wired into the error middleware so every throw exits in that shape. Read the RFC — it's short.
- **Fri:** teach-it — 401 vs 403, 400 vs 422
- **Sat (4h):**
  - Cursor vs offset pagination (cursor = your list default) · whitelisted filter/sort (never interpolate user fields) · URL versioning `/v1`, decided once
  - **The Ally bridge:** open Graph docs and recognize everything — `@odata.nextLink` _is_ cursor pagination; `$filter`/`$orderby` are your params; Graph's error object is 9457's cousin
  - **Whiteboard the complete Garage surface on paper** — every route, code, error, page param
- **Sun (1h):** finalize and commit as `DESIGN.md` — next week's spec

### Weeks 20–21 — Build Garage API v1

**Week 20:**

- **Mon (2h):** bikes CRUD, full vertical slice (route → controller → service → repo → Bruno → commit → PR)
- **Tue (2h):** maintenance CRUD start
- **Thu (2h):** cursor pagination implementation
- **Fri:** teach-it — how your cursor works
- **Sat (4h):** filter/sort whitelist · parts CRUD
- **Sun (1h):** Bruno collection catch-up — happy + error cases per endpoint

**Week 21:**

- **Mon (2h):** CORS locked to your front-end origins — read MDN's CORS page properly once
- **Tue (2h):** graceful shutdown wired for real (SIGTERM → stop accepting → drain → close)
- **Thu (2h):** error-contract consistency pass · README paragraph: route handlers vs a standalone service — when each
- **Fri:** teach-it — narrate a request through every middleware to a 9457 error
- **Sat (4h):** deploy to Railway/Render · full Bruno pass against production
- **Sun (1h):** status-code quiz self-run (gate rehearsal)

### Week 22 — NestJS: why, modules, DI

- **Mon (2h):**
  - Everything you hand-assembled, Nest provides as convention — less freedom, more team consistency
  - Map it: module ≈ feature folder · controller ≈ routes+controller · provider ≈ service · `@Injectable` + constructor injection ≈ your wiring, automated
  - Scaffold with the CLI; read the request-lifecycle diagram
- **Tue (2h):** DI for real — the container constructs and shares providers; declare in a constructor, Nest supplies. Why: testability (swap real repo for fake), single instances, explicit graphs
- **Thu (2h):** feature modules, imports/exports · `@nestjs/config` with a Zod schema at boot — same refuse-to-start rule, the Nest way
- **Fri:** teach-it — DI in your own words
- **Sat (4h):** stand up a `bikes` module (controller + service + in-memory repo provider) mirroring the Express version
- **Sun (1h):** notes: what the framework removed vs what it imposed

### Week 23 — Pipes, guards, interceptors, filters

- **Mon (2h):** pipes = validation: `ValidationPipe` or a Zod pipe reusing your schemas — your `validate()` middleware, promoted to a concept
- **Tue (2h):** guards = authorization: `CanActivate` · a `@Roles()` decorator + `RolesGuard` — Phase 9's RBAC previewed as the framework's extension point
- **Thu (2h):** interceptors (request-ID, timing — cross-cutting without touching routes) + exception filters: **RFC 9457 as a global filter** so Nest errors match your Express contract exactly
- **Fri:** teach-it — where each of the four sits in the request lifecycle
- **Sat (4h):** port a full vertical slice through all four
- **Sun (1h):** commit 3 sentences: what Nest enforced that Express left to discipline

### Week 24 — Parity, testing preview, judgment

- **Mon (2h):** repo provider toward a real DB shape (Drizzle patterns arrive in Phase 8; TypeORM/Prisma at awareness — Nest docs lead with them)
- **Tue (2h):** `@nestjs/testing` — override providers with fakes (DI's whole point) · unit-test a service · one supertest e2e
- **Thu (2h):** the interview answer: **Express for small services and full control; Nest when a team needs enforced structure and growth is coming** — you've built both, so you can defend either
- **Fri:** teach-it — when you'd choose which, and why
- **Sat (4h):** Nest slice to parity on core resources
- **Sun (1h):** commit `NEST-VS-EXPRESS.md` comparing the two implementations · **GATE**

### Project — Garage API v1 (Express) + Nest port (~30h, threaded)

Surface: `/api/v1/bikes` CRUD · `/bikes/:id/maintenance` CRUD, cursor-paginated, filterable, whitelist-sorted · `/parts` CRUD. All Zod-validated · all errors RFC 9457 · 201s with `Location` · request-ID logs end to end · committed Bruno collection · deployed · `DESIGN.md` committed.

### Gate — all cold

1. **Headline whiteboard:** fresh domain (track-day events + rider registrations) → resource model, endpoints, codes, pagination, error contract — ≤30 min, defended aloud
2. Status-code quiz, 10 scenarios — 9/10
3. Node's concurrency model + the event-loop law + what happens to other requests during a heavy sync loop
4. Middleware ordering as architecture; sketch throw → 9457 response
5. Streams + backpressure, one sentence
6. Timed: add a complete new resource (all four layers, validation, errors, Bruno) — ≤60 min, no AI
7. Nest: modules/providers/DI mapped to Express layers · lifecycle positions of pipes/guards/interceptors/filters · when you'd choose which

---

# PHASE 8 — PostgreSQL + Drizzle (Weeks 25–30)

**Deep SQL — one of the highest-leverage, most durable backend skills.** The bridge: **`GROUP BY` is `reduce`** — every Phase 3 stat is a one-line aggregate here.

### Week 25 — Foundations + joins (the merged week, heavy)

- **Mon (2h):**
  - Postgres in one container: `docker run -e POSTGRES_PASSWORD=… -p 5432:5432 postgres:16` (first Docker touch, deliberately minimal)
  - `psql` + a GUI — drills live in `psql` · SELECT/WHERE/ORDER BY/LIMIT · types: `text`, `numeric`, `uuid`, **`timestamptz` always**
  - SQLBolt lessons 1–6, one sitting
- **Tue (2h):** DDL + constraints as the last line of defense: PK, NOT NULL, UNIQUE, CHECK, FK + `ON DELETE` (CASCADE vs RESTRICT is a design decision) · INSERT/UPDATE/DELETE **with `RETURNING`**
- **Thu (2h):**
  - NULL three-valued logic (`NULL = NULL` isn't true) · `IS NULL` · `COALESCE` · `CASE` · `ILIKE`
  - INNER JOIN mechanics: two- then three-table, aliases, join on FKs
- **Fri:** teach-it — the anti-join idiom
- **Sat (4h):**
  - LEFT JOIN ("all bikes, even unmaintained") · the **anti-join** (`LEFT JOIN … WHERE right.id IS NULL`) · self-joins
  - pgexercises.com: **Basic category complete**
- **Sun (1h):** build the practice schema (riders/bikes/rides) · 15 queries cold

### Week 26 — Aggregations + CTEs (the heart)

- **Mon (2h):** GROUP BY = reduce, industrialized: COUNT/SUM/AVG/MIN/MAX · **HAVING vs WHERE** · every non-aggregate column is grouped · rebuild every Phase 3 stat as SQL (miles per bike, cost per category, rides per month with `date_trunc`)
- **Tue (2h):** subqueries — scalar, correlated, `IN`/`EXISTS`, when each reads best · UNION/INTERSECT/EXCEPT
- **Thu (2h):** **CTEs (`WITH`)** for readable pipelines · rewrite one Monday monster as a CTE chain · recursive at recognition · the Postgres idiom: `DISTINCT ON` for "latest maintenance per bike"
- **Fri:** teach-it — HAVING vs WHERE
- **Sat (4h):** pgexercises: **Joins + Aggregates complete**
- **Sun (1h):** 10 queries cold, incl. one anti-join and one `LEFT JOIN + COALESCE` totals — the gate's exact shape

### Week 27 — Schema design + migrations

- **Mon (2h):** relationships: 1:N = FK on the many side · M:N = junction with its own columns (`part_usages`: quantity, unit_cost) · 1:1 rarely · snake_case, one convention, kept
- **Tue (2h):** normalization working rule: **every fact lives in exactly one place** · denormalization is a _measured_ read optimization that usually loses to caching
- **Thu (2h):** migrations = the database's Git: **drizzle-kit** — TS schema → `generate` (**read every emitted SQL file**) → `migrate` · rule: after first deploy, never edit an applied migration; add only
- **Fri:** teach-it — justify each ON DELETE choice
- **Sat (4h):** **Garage schema on paper first** — `bikes`, `maintenance_records`, `parts`, `part_usages`; FKs, `CHECK (miles >= 0)`, `timestamptz DEFAULT now()` everywhere → Drizzle schema → first migration
- **Sun (1h):** seed script **including a faker-powered 100k-row maintenance seed** (needed Week 29)

### Week 28 — Drizzle + raw SQL, two fluencies

- **Mon (2h):** `pgTable`, column builders, `references()` · connect via node-postgres `Pool` — what a pool is, why serverless complicates it (one paragraph now)
- **Tue (2h):** CRUD + joins in Drizzle · **enable query logging and read what your ORM writes** — the whole reason Drizzle was chosen · (30-min Prisma skim for job-listing vocabulary)
- **Thu (2h):** the raw lane: `pool.query('… WHERE bike_id = $1', [bikeId])` — **parameterized always**; string-built SQL is how injection happens · when raw beats the builder: reporting queries
- **Fri:** teach-it — injection + the fix in one sentence
- **Sat (4h):** **THE SWAP:** port Garage's repositories from in-memory to Drizzle/Postgres — services, controllers, routes, Bruno change ~zero lines
- **Sun (1h):** screenshot the diff for the README (the layered-architecture thesis, proven) · full Bruno pass

### Week 29 — Indexes, EXPLAIN, transactions + ship v2

- **Mon (2h):** B-tree: what indexes accelerate (WHERE equality/range, JOIN keys, ORDER BY), what they cost (every write) · composite + **leftmost-prefix rule** · the interview-permanent gotcha: **Postgres does not auto-index FKs — you do**. Use The Index, Luke: "Anatomy" + WHERE chapter
- **Tue (2h):** **the required experiment:** query the 100k seed by `bike_id` + date range → `EXPLAIN ANALYZE` (Seq Scan, note ms) → add the composite index → re-run (Index Scan, note ms) → **before/after committed to README**
- **Thu (2h):** transactions: BEGIN/COMMIT/ROLLBACK · the canonical case: _record maintenance AND decrement part stock — both or neither_ · `db.transaction(async tx => …)` · isolation vocabulary (Read Committed default)
- **Fri:** teach-it — the stock transaction
- **Sat (4h):**
  - When NoSQL fits, honestly: **Postgres until proven otherwise** — `jsonb` covers most urges; wrong reason: "SQL seemed hard"
  - Cash the Phase 6 backlog: blog view counter on a tiny table (Neon free tier + route handler, 90 min)
  - Raw-SQL reporting endpoints: cost-per-mile, monthly spend, top categories
- **Sun (1h):** ship v2 · deploy · `drop db → migrate → seed` clean in one command

### Week 30 — Window functions + performance

- **Mon (2h):** **window functions** (the interview separator): `OVER (PARTITION BY … ORDER BY …)` · ROW_NUMBER/RANK/LAG/LEAD · running totals · mental model: aggregate _without collapsing rows_ · compute "rides ranked by distance per bike" + "month-over-month cost delta"
- **Tue (2h):** EXPLAIN deeply: seq vs index vs bitmap heap scan · nested loop vs hash vs merge join · estimated vs actual rows (bad estimates = bad plans) · take 3 queries slow → fast, record plans
- **Thu (2h):** indexing strategy from plans: partial, covering (`INCLUDE`), GIN for `jsonb` · when an index hurts · why the planner ignores yours — add only what query patterns justify
- **Fri:** teach-it — read an EXPLAIN aloud
- **Sat (4h):**
  - **N+1**: spot it in your own query log, fix with a join or batched `IN` · pooling: why connection-per-request dies, sizing, serverless (PgBouncer)
  - Read-scaling you can defend: replicas + read-your-writes lag · partitioning awareness · where a cache sits
  - Take a deliberately slow endpoint → diagnose → fix → `PERFORMANCE.md` with before/after
- **Sun (1h):** **GATE**

### Project — Garage API v2 (~16–20h, threaded)

Repos on Postgres, services untouched (screenshot) · `part_usages` junction with the **stock transaction** — over-consumption rolls back, proven in Bruno · raw-SQL reporting endpoints · cursor pagination backed by a real composite index · EXPLAIN before/after in README.

### Gate — all cold

1. On paper: total maintenance cost per bike **including zero-record bikes** — LEFT JOIN + COALESCE + GROUP BY, three tables, perfect
2. Fresh domain (gear closet: items, categories, wear-logs) → full schema ≤15 min, ON DELETEs defended aloud
3. Read an EXPLAIN ANALYZE: scan types, the estimate mismatch, the fix
4. Indexes: cost of one · when you'd skip one · leftmost-prefix · why FKs need explicit indexes
5. Write the stock transaction; name the default isolation level
6. Injection: parameterized form + the attack in one sentence
7. Window function cold: rides ranked per bike
8. v2 deployed · `drop → migrate → seed` clean in one command

---

# PHASE 9 — Auth & Security (Weeks 31–32)

**Understand the mechanics deeply enough to reason and debug · implement the core once · then integrate a real provider like 99% of production work.** Full strength: **RBAC + ownership + the attack suite.** Your differentiator: the **Entra bridge**.
**Boundary rule:** personal sandboxes only — never employer tenants.
**Backbone:** The Copenhagen Book + OWASP cheat sheets.

### Week 31 — Sessions, tokens, the decision

- **Mon (2h):**
  - Credential storage: never plaintext, never a _fast_ hash — SHA-256 is wrong _because_ it's fast; **argon2id**, timing-safe compare
  - The session loop, **implemented once against MotoLog's DB (~40 lines):** verify hash → session row → cookie `HttpOnly; Secure; SameSite=Lax` → middleware loads session+user → logout deletes the row
- **Tue (2h):**
  - CSRF: cookies ride along automatically, so another site can _cause_ authenticated requests — that's the attack · `SameSite=Lax` blocks most · Origin checks on mutations
  - Harden: rate-limit `/auth/login` per-IP + per-account · **generic failures** ("invalid credentials" — never which field)
- **Thu (2h):**
  - JWTs honestly: `header.payload.signature` · claims (`sub`, `exp`, `iss`, `aud`) · HS256 vs RS256 (private-sign/public-verify — how Entra scales)
  - **Signed ≠ encrypted** — paste one into jwt.io and read it · verify with `jose`, never decode-and-trust · the `alg: none` tale
  - Access + refresh with rotation · **localStorage tokens = the tutorial default and the wrong one** (XSS exfiltrates)
- **Fri:** teach-it — sessions vs JWT, the decision framework
- **Sat (4h):**
  - The decision framework: sessions = instant revocation, one lookup — right default for a browser app on its own backend · JWTs = right when the _distributed_ problem is real · commit `AUTH-NOTES.md` in your words
  - Drill the rapid-fire bank until boring · attack your own login with a 100-attempt loop, watch 429s land
- **Sun (1h):** consolidate; Anki the bank

### Week 32 — OAuth/OIDC, the Entra bridge, RBAC + ship

- **Mon (2h):**
  - **The Rosetta Stone** — map every Entra concept you already use to the spec: app registration = OAuth client · the redirect dance = authorization-code flow + PKCE · scopes/consent = scopes · **ID token (OIDC — who you are)** vs **access token (OAuth — what you may call)** · Entra's keys = JWKS
  - Annotate Microsoft's auth-code-flow doc with "I've configured this part" notes — your bridge artifact
- **Tue (2h):**
  - **Implement the core once:** build the redirect URL (client_id, redirect_uri, `state`, PKCE challenge) → callback verifies `state` → exchange code + verifier **server-side** → fetch profile → upsert user → create _your_ session
  - The punchline: **OAuth outsources identification; your session still runs the show**
- **Thu (2h):** now use a service, like the job: wire **Auth.js or Clerk** into MotoLog — email/password + GitHub sign-in converging on one identity · name exactly what the library automated from Tuesday
- **Fri:** teach-it — **the Entra narration to camera** (it's a gate item; record until fluent)
- **Sat (4h):**
  - **RBAC + ownership (full strength):** `requireRole('admin')` is the easy half · the hard half: **every user-resource query carries `WHERE user_id = $me`** · cross-user access returns **404, not 403** · the bug class this kills: **IDOR**
  - Commit the **Bruno attack suite:** A on B's data → 404 · non-admin on admin → 403 · forged session → 401
  - OWASP speed-map to concrete mitigations · helmet, strict CORS, `npm audit` · secrets hygiene
- **Sun (1h):** deploy full stack (API + Postgres on Railway/Render, minimal Next front end on Vercel) · **attack suite green against production** · **GATE**

### Project — MotoLog (~14–16h, threaded)

The required multi-user app — your ride-log domain's final form (vanilla → typed → multi-user is the portfolio arc). Express or your Nest slice (your call, defend it) · Drizzle/Postgres · provider auth with the mechanics understood underneath · per-user bikes/rides/maintenance with **ownership in every query** · roles + admin endpoints · RFC 9457, request-ID logs, helmet, rate limits, strict CORS · minimal Next front end · **deployed with seeded demo creds in the README**.

### Gate — all cold

1. To camera: how a session and a token are each issued, validated, expired, revoked — ≤4 min, fluent
2. **The Entra narration:** auth-code + PKCE end to end — every redirect, every parameter, who holds what secret, ID vs access token — spec _and_ Entra vocabulary, ≤5 min
3. Sessions vs JWT: the framework + one concrete scenario each
4. Rapid-fire: argon2 · HttpOnly/SameSite · CSRF · IDOR + fix · why 404 not 403 · why "invalid credentials" stays vague
5. Point to exactly what your provider handles vs what your code still owns
6. **Live: the attack suite runs green against production**
7. Deployed, demo creds working

---

# PHASE 10 — Testing · Docker · CI/CD (Weeks 33–36)

**This IS technical ability.** Sits before advanced backend so Phase 11 adds every feature _to a green pipeline_ — the actual professional loop. The continuity gem: your Phase 9 attack suite becomes automated tests that run on every commit, forever.

### Week 33 — Backend testing

- **Mon (2h):** test _behavior_, not implementation · the testing trophy (integration-heavy for backends) · Vitest on the pure core: Zod schemas, cursor encoding, `scoreDay`, stats math · read Dodds' "Write tests. Not too many. Mostly integration."
- **Tue (2h):** supertest integration against a dedicated test DB: register → login → cookie carries → CRUD, full surface
- **Thu (2h):** DB strategy: truncate-between-tests (simple, honest) vs transaction-rollback · seed factories (`makeUser()`, `makeRide(overrides)`) so tests read like specs
- **Fri:** teach-it — what you test at each layer, and why
- **Sat (4h):** **port the attack suite to supertest** — A can't touch B's anything (404s), non-admin → 403, forged/expired sessions → 401. This suite is MotoLog's constitution; CI will enforce it.
- **Sun (1h):** the transaction-rollback test · pagination edges · everything green ×3

### Week 34 — Front-end tests + E2E

- **Mon (2h):** React Testing Library: query by role/label — your Phase 1 a11y habits literally make components testable · Ride Planner's score display + form validation with `user-event`
- **Tue (2h):** MSW: mock the network at the boundary, not the fetch function · loading/error/empty states, deterministic
- **Thu (2h):** Playwright: record once to learn the API, then hand-write
- **Fri:** teach-it — why one solid E2E beats twelve flaky ones
- **Sat (4h):** the one E2E, rock-solid against a seeded env: register → login → add bike → log ride → dashboard shows it → logout
- **Sun (1h):** stabilize all suites — green ×3 straight; flaky = fix or delete today

### Week 35 — Docker

- **Mon (2h):**
  - Images vs containers vs registries — build/run/ps/exec/logs live for an hour
  - The API Dockerfile: **multi-stage** (deps → TS build → slim runtime) · `.dockerignore` · cache-friendly ordering (lockfile → `npm ci` → source) · **narrate every line**
- **Tue (2h):** production-grade: **non-root user** · devDeps never leak into the final stage · `HEALTHCHECK` · pinned base tag · measure image size before/after multi-stage — receipts
- **Thu (2h):** compose: `docker compose up` = api + postgres + test DB · env wiring · named volumes · healthcheck gating api on postgres readiness (Redis + worker join in Phase 11 when they exist)
- **Fri:** teach-it — multi-stage builds in 90 seconds
- **Sat (4h):**
  - Run the integration suite against the compose Postgres — why "works on my machine" dies here
  - Drill rehearsal: blank repo → dockerize a fresh small Express app, multi-stage, non-root — ≤45 min, no references
- **Sun (1h):** repeat the drill if over time; notes

### Week 36 — CI/CD

- **Mon (2h):** Actions anatomy: workflow, triggers, jobs, runners · the pipeline: every push/PR → install → lint → typecheck → **test with a postgres service container** → build · dependency caching
- **Tue (2h):** make the gate real: **required status checks + branch protection on `main`** — no direct pushes, even from you · open a deliberately broken PR, watch the merge button lock
- **Thu (2h):** Vercel: preview deploy per PR, production on merge · **why the API doesn't live on Vercel** — long-lived DB connections + (soon) a worker are not a serverless fit
- **Fri:** teach-it — the pipeline aloud: PR vs merge, preview vs prod
- **Sat (4h):** CD for the API: deploy hook fired only after green CI on `main` · secrets in GitHub Environments, never the repo · walk the loop end to end: push → CI + preview → merge → green → prod ships itself
- **Sun (1h):** **GATE** (the timed items)

### Project — MotoLog v2, proven

Unit + integration + automated attack suite + the transaction test · one green Playwright flow · multi-stage non-root Dockerfile + compose boots clean on a wiped machine · CI required on every PR, CD on `main`, badges that mean something · honest coverage notes (no 100% theater).

### Gate

1. What you test at each layer + why behavior — 2 min, one example each
2. Timed: integration test for a new endpoint **including its authz-failure case** — ≤30 min
3. Timed: dockerize a fresh app (multi-stage, non-root) — ≤45 min unaided
4. Timed: CI from scratch on a fresh repo (lint/typecheck/test with pg service/build) — ≤45 min unaided
5. Explain the pipeline aloud, incl. why the API ≠ Vercel
6. Multi-stage / layer caching / compose-vs-k8s at awareness

---

# PHASE 11 — Advanced Backend + System Design (Weeks 37–42)

**The destination — untouched.** Every tool solves a problem you can now _feel_: slow reports (cache), work that shouldn't block a request (queues), files that shouldn't transit your server (presigned), silence when things break (observability). Every feature ships with tests; compose + CI grow as you build.

### Week 37 — Redis + caching

- **Mon (2h):** Redis itself — an hour in `redis-cli`: strings + SET/GET/EXPIRE/TTL (80% of real usage), hashes, sorted sets at recognition · `ioredis` · add redis to compose now that it's real
- **Tue (2h):** cache-aside: hit? return : query → `SET … EX ttl` → return · key discipline day one: `motolog:v1:stats:user:{id}` · TTL is a _design decision_ — how stale can stats be? 60s is usually honest
- **Thu (2h):** **invalidation** — three strategies: TTL-only (bounded staleness, often right) · delete-on-write (precise, requires knowing your key space) · versioned keys · plus stampedes: hot key expires, 200 requests hit the DB — jittered TTLs, lock/refresh-ahead at conversation level
- **Fri:** teach-it — your invalidation choice and why
- **Sat (4h):**
  - Hand-roll the fixed-window rate limiter (`INCR; EXPIRE; reject if > N`) → swap `express-rate-limit` onto its Redis store — limits survive restarts
  - **Move sessions from Postgres to Redis** behind the same interface (~2h because you layered it) — your app tier just went **stateless**. Remember that word; Week 41 pays it off.
  - Cache MotoLog's two heaviest reporting endpoints · **measure p50/p95 with autocannon before and after**
- **Sun (1h):** delete-on-write wired to the mutations that touch them · integration test asserting the cached path _and_ the invalidation · numbers in README — caching claims without measurements are vibes

### Week 38 — Jobs + uploads

- **Mon (2h):** why queues: slow, retryable, or non-urgent work doesn't belong in the request path — and `setTimeout` loses work on crash · **BullMQ**: queues, workers as a _separate process_, retries with backoff, repeatables · worker joins compose + CI
- **Tue (2h):** build two jobs: welcome email (console transport or Resend free tier) + monthly riding report · **the professional rule: a job may run twice — design so duplicates are harmless** (idempotency keys, upserts, already-sent checks)
- **Thu (2h):** uploads done right — files shouldn't transit your API (memory, double bandwidth, blocked loop) · the **presigned flow**: client asks → API authorizes (type/size/ownership) + signs a short-lived PUT URL → direct upload → confirm → API records the key · Cloudflare R2 via `@aws-sdk/client-s3`
- **Fri:** teach-it — "a job may run twice"
- **Sat (4h):** build bike photos end-to-end: presigned PUT → `bike_photos` row (`pending → ready`) → confirm enqueues a **sharp** thumbnail job → presigned GET · ownership checks on every step
- **Sun (1h):** Bull Board behind admin auth · break things on purpose: kill the worker mid-job (watch the retry) · feed a poison job (watch it exhaust into the failed set)

### Week 39 — Realtime + observability

- **Mon (2h):** the ladder: polling (honestly fine more often than admitted) → SSE (server→client, plain HTTP) → WebSockets (bidirectional, persistent) · the upgrade handshake · build with bare `ws`; socket.io noted as the convenience you can now evaluate
- **Tue (2h):** authenticated notifications: report job completes → WS pushes "ready" to that user's sockets · **authenticate the handshake via the session cookie** · heartbeats · `userId → sockets` map · README footnote: multi-instance realtime needs Redis pub/sub — recognized, deferred
- **Thu (2h):** logging that pays rent: pino levels used deliberately · **child loggers carrying the request ID end to end** · **redaction** — tokens/PII never hit logs · Sentry free tier: throw on purpose, watch it arrive with stack + breadcrumbs
- **Fri:** teach-it — `/healthz` vs `/readyz`
- **Sat (4h):**
  - `/healthz` (process up) vs `/readyz` (DB + Redis reachable) — different questions, different consumers · compose healthchecks updated · per-route duration middleware · external pinger + email alert
  - **THE CHAOS DRILL:** stop the Postgres container while the app runs — watch `/readyz` flip, Sentry light up, the logs tell a coherent request-ID story
- **Sun (1h):** fix what chaos exposed · document the drill so it's re-runnable

### Week 40 — OpenAPI + living docs

- **Mon (2h):** OpenAPI 3.1 generated **from the Zod schemas you already have** (`zod-openapi`): one definition → runtime validation + TS types + docs · serve Swagger UI/Scalar at `/docs`
- **Tue (2h):** document all of MotoLog: every route, schemas, your RFC 9457 model as a shared error component, examples
- **Thu (2h):** generate a typed client from the spec and **consume your own API through it** — the payoff of a real contract
- **Fri:** teach-it — contract-first vs code-first, one sentence
- **Sat (4h):** `/docs` live and accurate against production · begin v3 feature integration
- **Sun (1h):** v3 integration continues

### Week 41 — System design I

- **Mon (2h):** **life of a request, drawn until automatic:** DNS → CDN → LB → stateless app instances (_possible because sessions moved to Redis_) → cache → DB · vertical vs horizontal · statelessness as the unlock · how an LB sheds a dead instance · System Design Primer study guide
- **Tue (2h):** load balancing: L4 vs L7, round-robin vs least-connections, why stateless kills sticky sessions · CDNs: what they cache, cache-control as the contract
- **Thu (2h):** caching in the whole picture: browser / CDN / app / DB layers, read patterns, invalidation, stampedes — you've _built_ the app layer; now place it
- **Fri:** teach-it — life of a request, narrated
- **Sat (4h):**
  - Back-of-envelope estimation: QPS, storage, bandwidth from user counts
  - One worked design: **"ride-logging platform for 1M users"** — components justified, bottleneck named
  - Re-draw both from blank pages, narrated aloud, twice
- **Sun (1h):** commit `SYSTEM-DESIGN.md` sketching MotoLog as if it had to scale

### Week 42 — System design II + ship

- **Mon (2h):** data at scale: replication (primary/replica, async lag, read-your-writes) · sharding (partition keys, cross-shard pain) · CAP/PACELC stated plainly — what you give up under a partition; eventual consistency as a choice
- **Tue (2h):** async architecture, labeled: queues as decoupling + load-smoothing (you _built_ this) · at-least-once + idempotency · outbox at recognition
- **Thu (2h):** monolith vs microservices, the honest take: **modular monolith until org scale forces a split** — services solve org problems, not perf problems, at your scale · the senior answer: "monolith first, extract when a seam and a team both demand it"
- **Fri:** teach-it — CAP, plainly
- **Sat (4h):** two timed designs, ≤45 min each, whiteboard + narrate: URL shortener (or notification fan-out) + one from MotoLog's future · "it depends, and here's on what" at every box
- **Sun (1h):** land v3 on the deployed app · whole system green · **GATE**

### Project — MotoLog v3 (threaded)

Cache with receipts · Redis rate limiting · Redis sessions (stateless tier) · BullMQ worker + Bull Board · presigned photo uploads + thumbnails · authenticated WS notifications · pino redaction + Sentry + health endpoints + uptime alert · `/docs` live. Every addition tested and in compose + CI.

### Gate — all cold

1. Cache-aside + your invalidation choice + stampede mitigation
2. Aloud: "users want PDF export of their year — how?" → enqueue, worker renders, notify · retries + idempotency named unprompted
3. Narrate the presigned flow — who talks to whom, what's validated where, why the file never touches your API
4. **Draw life-of-a-request from memory** + why your tier scales horizontally
5. Monolith position, defended
6. Replication + CAP plainly · when you'd shard, on what key
7. Timed: the 1M-user design — ≤45 min, estimate included, bottleneck named
8. Timed practical: cached endpoint with correct delete-on-write — ≤45 min, no AI
9. v3 deployed · chaos drill re-runnable

---

# ⟂ WEEK 43 — FLEX B

Retests · overflow · rest. Design week deserves a fresher brain than any other week in this plan.
If genuinely clear: sketch capstone ERD ideas on paper for fun — **write no code.**

---

# PHASE 12 — Capstone: Track-Day Booking Platform (Weeks 44–49)

**Pure build. Job-readiness thread deleted.** Your world (Gingerman, Grattan, Waterford Hills as seed data), demands every phase, and contains a genuinely hard problem: **never sell seat 21 of 20 under concurrent load.**
**Stack:** Express · TS strict · Drizzle/Postgres · Redis · BullMQ · ws · Zod · pino/Sentry · OpenAPI · Docker compose · Actions · lean Next.js front end · deployed.

### Week 44 — Design week (no code until the paper is right)

- **Mon (2h):** ERD on paper — users, organizations, tracks, events, run_groups (with capacity), bookings, waitlist_entries, notifications
- **Tue (2h):** complete API contract → `DESIGN.md` — routes, codes, pagination, RFC 9457
- **Thu (2h):** 5–8 **ADRs**, ~10 lines each ("Sessions over JWT because… · atomic update over row locks because… · modular monolith because…") + risk list, concurrency #1
- **Fri:** teach-it — narrate the ERD
- **Sat (4h):** scaffold: repo, `/api` + `/web` as **npm workspaces** with a shared package for Zod schemas/types (one hour that saves twenty), compose, CI green on hello-world
- **Sun (1h):** port your auth — third time building it, it takes a day, which is itself proof the roadmap worked

### Week 45 — The management plane

- **Mon (2h):** orgs + tracks CRUD
- **Tue (2h):** events CRUD
- **Thu (2h):** run-groups + capacity model
- **Fri:** teach-it — the ownership rules of the plane
- **Sat (4h):** **role + ownership authz** across the plane — organizers touch only their org's events (Phase 9 patterns, no hand-holding) · OpenAPI growing alongside
- **Sun (1h):** attack-style checks for organizer boundaries

### Week 46 — THE INVARIANT (the capstone's heart)

- **Mon (2h):** the atomic conditional update, inside the booking transaction:
  ```sql
  UPDATE run_groups
  SET booked_count = booked_count + 1
  WHERE id = $1 AND booked_count < capacity;
  -- rowCount = 0 → full → 409
  ```
  One statement, atomic by nature — no race window. Plus `UNIQUE (rider_id, event_id)` killing double-books.
- **Tue (2h):** the 409 contract end-to-end + waitlist-entry creation on full
- **Thu (2h):** `SELECT … FOR UPDATE` on a branch — compare, write when-each-fits
- **Fri:** teach-it — narrate why there's no race window
- **Sat (4h):** **prove it under fire:** a committed load script fires 100 concurrent booking attempts at a 20-seat group → **exactly 20 succeed, 80 receive 409, the DB never oversells**
- **Sun (1h):** make the script a **CI test** — the single best engineering artifact in your portfolio

### Week 47 — Cancellation + waitlist (Phase 11, composed)

- **Mon (2h):** cancel → transaction frees the seat
- **Tue (2h):** **promotion job** — worker claims the seat for the first waitlisted rider _using the same atomic update_ (promotions and fresh bookings race safely by construction)
- **Thu (2h):** idempotency — a retried promotion cannot double-claim
- **Fri:** teach-it — walk the cancel → promote → notify chain
- **Sat (4h):** notify by email + WS push · edge cases enumerated **in tests, not comments**
- **Sun (1h):** green pipeline check · Bull Board sanity

### Week 48 — Production kit + lean front end

- **Mon (2h):** cache event listings/details with delete-on-write · rate limits
- **Tue (2h):** Sentry · health endpoints · `/docs` complete
- **Thu (2h):** front end: browse events (**ISR — say why**) + event detail with live seat count
- **Fri:** teach-it — why ISR for the browse page
- **Sat (4h):** booking flow — the 409 renders as "run group full → join waitlist" · rider dashboard
- **Sun (1h):** organizer dashboard — good, clean, done; the API is the star and the README says so

### Week 49 — Harden, prove, ship

- **Mon (2h):** load-test booking + waitlist paths (autocannon) · slowest endpoints through the EXPLAIN playbook · `PERFORMANCE.md` before/after
- **Tue (2h):** attack suite ported · one Playwright booking flow
- **Thu (2h):** architecture diagram + ERD + ADRs finalized · README that walks a stranger from "what is this" to "I just booked a seat" in five minutes
- **Fri:** teach-it — the full system, five minutes
- **Sat (4h):** production deploy · seeded demo accounts (rider + organizer creds in README) · **concurrency test green in CI** against the real setup
- **Sun (1h):** **FINAL CHECKLIST** · done · (stretch: the 3-min demo video — you're a motovlogger, it's a home game)

### Capstone pitfalls

- **Scope creep:** payments, reviews, messaging = post-done stretch. The invariant is the star; protect its screen time.
- **Skipping design week** — the one week that prevents the four bad ones.
- **Front-end gold-plating** — nobody evaluates this project's CSS.

---

# FINAL CHECKLIST

- [ ] Capstone deployed · demo creds working
- [ ] **Concurrency test green in CI** — 100 attempts, 20 seats, exactly 20/80, never oversells
- [ ] All phase gates passed — no skipped stamps
- [ ] MotoLog v3 live: cache receipts, jobs, realtime, `/docs`, chaos drill re-runnable
- [ ] Garage v1 + v2, blog, Ride Planner, Ride Log — all deployed with real READMEs
- [ ] Every repo history shows the workflow: branches, PRs, conventional commits

**47 content weeks + 2 flex · ~600 hours · six deployed projects · twelve gates.**
The standing rules graduate with you: _predict before paste_ becomes _read before merge_ · the gates become your definition of done · the Friday teach-it becomes the code review. Kickstand up.

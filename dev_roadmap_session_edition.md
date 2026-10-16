# Dev Roadmap — Session Edition

49 weeks (47 content + 2 flex) · ~600 hours at 12 hrs/wk · backend starts Week 17 · this edition covers Weeks 9–49

The phases, projects, gates and backend depth are the same as the master plan. Only the _how_ changes: every day is a session script you paste to Claude, plus daily time stuck alone.

---

## How to use this file

Copy a week, paste it to Claude, and say "let's do Monday." Claude runs the session; you code in VS Code.

### The session loop (Mon / Tue / Thu)

1. **Warm-up (10 min)** — Claude asks 2–3 cold recall questions from earlier days. Answer without looking.
2. **Concept (20–30 min)** — Claude explains one idea at a time in plain words. You type every example yourself.
3. **Reps (30–40 min)** — small VS Code exercises, easy → tricky. Predict the output before you run anything.
4. **Check (10 min)** — the check questions. Miss one → Claude breaks it into a smaller piece, rebuilds, re-asks. Every miss → Anki.
5. **Solo (20–30 min, 30–45 min from Phase 7)** — one problem with Claude closed. Google, docs and error messages only. Show Claude the finished result, not the process.

A session ends when the check passes, not when the clock does.

### The weekly shape (12 hrs)

| Day   | Time      | Job                                                                                          |
| ----- | --------- | -------------------------------------------------------------------------------------------- |
| Mon   | 2h        | Session: new concept                                                                         |
| Tue   | 2h        | Session: second concept                                                                      |
| Thu   | 2h        | Session: apply it                                                                            |
| Fri   | 15 min    | Teach-it: explain the week's core idea to Claude cold, no notes; Claude only asks follow-ups |
| Sat   | 4h        | Solo day: short kickoff with Claude → ~3h building alone → Claude reviews it like a PR       |
| Sun   | 1h        | Review: misses → Anki, retro, paste next week (or GATE)                                      |
| Daily | 10–15 min | Anki + one Codewars kata, solo (8kyu → 7kyu → 6kyu by the backend phases)                    |

Days are movable; the shape is not. Split: ~45% sessions with Claude, ~45% solo building, ~10% review.

### Standing rules

- **Videos are gone.** Readings became **solo hunts** inside each day's Solo block.
- **Claude explains, quizzes and reviews. Claude writes zero project code.** You type everything.
- **Predict before you run.** If you can't say what a snippet does, don't run it.
- **Solo means Claude is closed.** Google, MDN, official docs, error messages, Stack Overflow are allowed. No AI of any kind, AI autocomplete off too.
- **Stuck in Solo → the hint ladder.** Ask for a hint, never the answer.
- **Gates are hard.** Fail → 48h targeted drills → retest. Never advance on a fail.
- Everything after Phase 4 is TypeScript, `strict: true`, no exceptions.
- Every project ships: deployed link + real README. "Done locally" is not done.
- CLI Git only. Branches, PRs, conventional commits on every project.
- Roadmap edits only at phase boundaries, 20 minutes max.

### The Solo block: getting unstuck alone

1. **Read the error fully** — file, line, message. The answer is often right there.
2. **Guess, then test.** Add a `console.log` or a breakpoint. Shrink the code to the smallest piece that still breaks.
3. **Search well:**
   - Quote the key part of the error, drop your own names: `"is not assignable to type" typescript`
   - Name the tool + concept: `typescript generic keyof constraint`
   - Official docs first — MDN, TS Handbook, react.dev, Next.js docs, Node docs, Express docs, Postgres docs, Drizzle docs. Add the site to the query: `mdn array reduce`, `postgres docs window functions`
   - Stack Overflow: confirm it's really your problem, prefer answers that explain why, check the date
4. **25-minute timer.** Still truly stuck → hint ladder.

**The hint ladder** (one rung at a time; stop as soon as you're moving):

1. "Am I looking in the right area?" — Claude answers yes or no only
2. "What concept should I search for?"
3. "Which doc page should I read?"
4. "Give me a smaller version of this problem."

Never: "write it for me."

**SOLO-LOG.md** — after every Solo block, one line in the repo: what blocked you · which search unblocked you.

### Known deferrals — decided, not forgotten

- **AZ-204:** parked until after the capstone. If an Azure-shop opportunity demands it sooner, that's a deliberate re-decision, not drift.
- **DS&A / NeetCode:** not inside these 49 weeks. The daily kata keeps the muscle warm; budget a separate 4–6 weeks (~45 problems, hash-map-heavy) when interviews get real.
- **Deliberately absent — do not panic-add:** GraphQL, react-hook-form, Redux, Kubernetes, AWS breadth, microservices implementation, Prisma depth.

### Phase map

| #   | Phase                            | Weeks | Project                    |
| --- | -------------------------------- | ----- | -------------------------- |
| 4   | TypeScript                       | 9–10  | Ride Log → strict TS       |
| 5   | React                            | 11–13 | Ride Planner               |
| 6   | Next.js                          | 14–16 | The blog, finished         |
| 7   | Node · Express · REST · NestJS   | 17–24 | Garage API v1 + Nest port  |
| 8   | PostgreSQL + Drizzle             | 25–30 | Garage API v2              |
| 9   | Auth & security                  | 31–32 | MotoLog                    |
| 10  | Testing · Docker · CI/CD         | 33–36 | MotoLog v2                 |
| 11  | Advanced backend + system design | 37–42 | MotoLog v3                 |
| ⟂   | Flex B                           | 43    | Rest / retests             |
| 12  | Capstone                         | 44–49 | Track-Day Booking Platform |

---

# PHASE 4 — TypeScript (Weeks 9–10)

**Goal:** model any payload accurately, reason with unions and generics, and convert Ride Log to strict TS. Rule activates at phase end: everything from here is TS, `strict: true`, forever.

## Week 9 — The type system

### Mon — Setup and the basics

- **Concept:** TS checks code before it runs; types vanish at runtime. `tsc --init`, `strict: true` immediately (loose mode teaches a false dialect), run with `tsx`. Golden habit: annotate function boundaries, let inference handle locals.
- **Warm-up:** define a closure in 2 sentences · predict one promise vs `setTimeout` ordering snippet · when is `this` decided for a regular function vs an arrow function?
- **Reps:** scratch project with strict on · annotate params + returns on 5 functions, leave locals inferred · predict an inferred type before hovering, ×5 · break 3 things on purpose and read each error
- **Check:** Why strict from day one? What does `tsx` do that `tsc` doesn't? Where do you annotate, and where don't you?
- **Solo:** find out what `noImplicitAny` does and whether `strict` turns it on. Write a function that errors only because of it.

### Tue — Shapes

- **Concept:** `interface` vs `type` (interfaces for object shapes, aliases for unions — one sentence, move on) · optional `?` · `readonly` · unions + literals: `type Bike = 'R6' | 'Grom'`
- **Warm-up:** where do you annotate? · what does `noImplicitAny` catch?
- **Reps:** model `Ride` as an interface · a `Bike` literal union · readonly `id`, then try to change it · a function that accepts a `Bike` and rejects `'Ninja'`
- **Check:** interface vs type in one sentence · predict what happens when a plain `string` is assigned to a `Bike`, and why
- **Solo:** find "excess property checks" in the TS Handbook. Write one snippet that triggers it and one that sneaks past it through a variable.

### Thu — Narrowing and discriminated unions

- **Concept:** narrowing with `typeof`, truthiness, `in` · discriminated unions — the weekly-forever pattern: `{ status: 'loading' } | { status: 'error'; message: string } | { status: 'success'; data: T }` · exhaustiveness via `never`
- **Warm-up:** literal unions · `readonly` · explain Tuesday's excess property check
- **Reps:** narrow `string | number` · narrow with `in` · a `WeatherState` union + `render()` with `switch` · add an `'offline'` case and watch `never` break the compile
- **Check:** What is the discriminant? Why does `never` catch a missing case? Predict one narrowing snippet.
- **Solo:** model a `FlowRun` result (`succeeded` / `failed` / `running` / `cancelled`) and write an exhaustive `describeRun()`. Don't open Claude until it compiles.

### Fri — Teach-it

Discriminated unions + exhaustiveness, to Claude, cold.

### Sat — Functions and domain modeling (solo day)

- **Kickoff (1h):** type params, returns and callbacks like `(ride: Ride) => boolean`; watch inference flow through a `filter` → `map` → `reduce` chain.
- **Solo build (2.5h):** model 6 domains from your life as types, no references: ride · maintenance record · IG post · portfolio holding · exhaust listing · flow-run result. Each needs at least one union, one optional field, one readonly field. Write one typed function per domain.
- **Review (30 min):** Claude critiques all 6.

### Sun — Compiler errors and the port

- **Review:** misses → Anki, short retro.
- **Solo:** Claude hands you 10 broken snippets — read the compiler error first, predict the fix, fix alone.
- **Solo:** convert `once`, `makeCounter`, `memoize`, `groupBy`, `fetchJSON` to typed versions. Anything that needs generics → `// TODO generics`, finish Week 10 Monday.

## Week 10 — Generics, utility types, the outside world

### Mon — Generics

- **Concept:** generics capture a type and carry it through: `first<T>(arr: T[]): T | undefined` · constraints with `extends` · `ApiResponse<T>`. You've consumed `Promise<T>` forever; now you write them.
- **Warm-up:** discriminated union + `never` · `in` narrowing · where you annotate
- **Reps:** `first<T>`, `last<T>` · `findById<T extends { id: string }>` · `ApiResponse<T>` · finish Sunday's `// TODO generics` utilities, including `groupBy`
- **Check:** What does `T` capture? What does `extends` do inside a generic? Predict the inferred return type of 2 calls.
- **Solo:** write `type Result<T> = { ok: true; value: T } | { ok: false; error: string }` and `safeParseInt(s: string): Result<number>`.

### Tue — Utility types

- **Concept:** `Partial`, `Pick`, `Omit`, `Record`, `ReturnType` · `keyof` / `typeof` in type position. The load-bearing example: `type RideUpdate = Partial<Omit<Ride, 'id'>>` — that's a PATCH body; you build the endpoint in Phase 7.
- **Warm-up:** generic constraints · `Result<T>` from memory
- **Reps:** `RideUpdate` · mileage as `Record<Bike, number>` · `Pick` for a list-row view · `ReturnType` of a function · derive a type from a config object with `typeof`
- **Check:** 3 scenarios → right utility (PATCH body / config defaults / lookup table) · what does `keyof Ride` produce?
- **Solo:** `pluck<T, K extends keyof T>(arr: T[], key: K): T[K][]` from a blank file (gate item). Stuck → search "indexed access types".

### Thu — `unknown` vs `any`, typing the outside world

- **Concept:** `unknown` forces proof; every `any` is a lie you pay for later; `as` minimized. Types vanish at runtime — typing a fetch response is a promise, not a check (Zod is the check, Phase 7).
- **Warm-up:** `pluck` cold · `RideUpdate` from memory
- **Reps:** narrow an `unknown` to `Ride` with an `isRide(x): x is Ride` guard · write the `any` version and find the bug it hides · write `fetchJSON<T>`
- **Check:** `unknown` vs `any` in ≤2 sentences · why doesn't `fetchJSON<Ride>` guarantee a `Ride`?
- **Solo:** find the Open-Meteo docs yourself, call the real API in your browser, read the raw JSON, type the payload by hand.

### Fri — Teach-it

`unknown` vs `any` in ≤2 sentences, cold.

### Sat — Ride Log → strict TS (solo day)

- **Kickoff (20 min):** plan with Claude — branch name, what to convert first. No code help.
- **Solo build (3h):** new branch, rename `.js` → `.ts`; the error list is your worklist. Model `Ride`, `MaintenanceRecord`, `AppState`; storage parses to `unknown` and narrows; weather widget on the DU; typed DOM — find out yourself why `querySelector` returns `Element | null`.
- **Review (40 min):** Claude reviews the diff like a PR.

### Sun — Finish + GATE

- **Finish:** zero `any` (≤2, each with a one-line justification). README section: what the compiler caught (there will be real bugs — document them).
- **GATE** (below).

### Phase 4 gate — all cold, Claude as examiner

- [ ] Unseen JSON payload (~15 fields, nesting, array, nullable, literal status) → accurate types, ≤10 min
- [ ] interface vs type · `unknown` vs `any` — ≤2 sentences each
- [ ] Blank-file generic: `pluck<T, K extends keyof T>(arr: T[], key: K): T[K][]`
- [ ] 3 scenarios → right utility type (PATCH body / config defaults / lookup table)
- [ ] 3-state DU + exhaustive switch that breaks compilation when a case is added
- [ ] Conversion merged, builds clean

---

# PHASE 5 — React (Weeks 11–13)

**Goal:** close your two assessed gaps — the re-render model and effects — at full depth. Your edge: you hand-built state → render → DOM in Phase 3; React is that pattern industrialized. Stack: Vite + React + TS strict. No React Router (your router is Next's, one phase away). Solo hunts point to react.dev — its challenges are fair game.

## Week 11 — Model, components, state (gap #1)

### Mon — UI as a function of state

- **Concept:** you write `render(state)`, React diffs the DOM. JSX rules · purity (same input → same output, no side effects during render) · typed props, destructured, `children`.
- **Warm-up:** DU + exhaustive switch · `Partial<Omit<Ride, 'id'>>` — what is it for? · `unknown` vs `any`
- **Reps:** `npm create vite@latest` (react-ts) · a typed `RideCard` with props · a `Layout` with `children` · break purity on purpose (mutate a prop) and explain what goes wrong
- **Check:** What does "pure component" mean? Where do props come from, and can a child change them?
- **Solo:** find react.dev's "Keeping Components Pure" page and do one of its challenges without Claude.

### Tue — Lists, keys, conditional rendering

- **Concept:** keys = identity across re-renders — index keys corrupt state on reorder · conditional rendering + the `count && <X/>` renders-`0` gotcha
- **Warm-up:** what does purity mean? · typed props with `children`
- **Reps:** render a ride list with stable keys · reorder it with index keys and an input inside each row — watch state jump · fix with real ids · trigger the `0` bug and fix it
- **Check:** What does `key` actually do? Why do index keys break on reorder? Why does `count && <X/>` print `0`?
- **Solo:** build Ride Log's display layer as typed presentational components on hard-coded props — no state yet, on purpose.

### Thu — `useState`

- **Concept:** the setter doesn't change the variable — it schedules a re-render; React calls your function again and `useState` hands the new value to that call. Render → commit.
- **Warm-up:** keys and identity · the `0` gotcha
- **Reps:** counter · a toggle · a controlled input · log the state right after calling the setter and predict the log first
- **Check:** what happens, step by step, when you call a setter? Why does the log right after it show the old value?
- **Solo:** read react.dev's "Render and Commit" page on your own, then explain it to Claude in 3 sentences.

### Fri — Teach-it

"What happens when you call a setter," 90 seconds.

### Sat — Snapshots, immutability, lifting state (solo day)

- **Kickoff (1h):** the snapshot aha — triple `setN(n + 1)` renders 1 and logs 0; each render's handlers close over that render's values (Week 3 closures pay off). Fix = updater form `setN(n => n + 1)`. Batching. Immutable updates (spread, `map`/`filter` — reference equality is how React sees change). Lifting state. The gate sentence: props owned by parent; state owned by component; anything computable is derived — calculate during render, store nowhere.
- **Solo build (2.5h):** react.dev "State as a Snapshot" + "Updating Arrays in State" challenges, alone. Then wire Ride Log components to real state: add (controlled form), delete, filter, stats derived at render.
- **Review (30 min):** Claude reviews for stored-derived-state and mutation bugs.

### Sun — Review

- 8 predict-the-render drills from Claude, answer on paper first
- Misses → Anki; retro

## Week 12 — Effects (gap #2)

### Mon — What effects are for

- **Concept:** effects synchronize with external systems (network, timers, subscriptions) — not "code after render," not derived data, not event logic. Deps array = every reactive value read inside; `[]` vs omitted; the exhaustive-deps lint rule is law.
- **Warm-up:** triple `setN` — predict render and log · props vs state vs derived
- **Reps:** document title effect · an effect with `[]` vs no array — predict how often each runs · remove a dep and read the lint warning
- **Check:** What is an effect for? What does `[]` mean vs no array? Why is exhaustive-deps law?
- **Solo:** find the react.dev page "Synchronizing with Effects" and do its first challenge alone.

### Tue — Cleanup

- **Concept:** cleanup runs before each re-run and on unmount · StrictMode double-mount is a smoke alarm, not a bug
- **Warm-up:** deps rule · `[]` vs omitted
- **Reps:** an interval without cleanup (watch it leak) → add cleanup · a window resize listener with cleanup · predict StrictMode's mount/unmount/mount logs
- **Check:** when exactly does cleanup run? Why does StrictMode mount twice in dev?
- **Solo:** build a stopwatch (start/stop/reset) with correct cleanup, no Claude.

### Thu — Fetch in an effect, done right

- **Concept:** `WeatherState` DU as state + a race guard (an `ignore` flag or `AbortController` in cleanup) — responses return out of order.
- **Warm-up:** cleanup timing · interval leak and fix
- **Reps:** fetch weather in an effect with DU state · change the city fast and reproduce the race · fix with an `ignore` flag · fix again with `AbortController`
- **Check:** why do fetch races happen? What does the cleanup do in each fix?
- **Solo:** look up `AbortController` on MDN and find out what error a fetch throws when aborted, and how to ignore it.

### Fri — Teach-it

The three "you might not need an effect" cases.

### Sat — Not needing effects, refs, debounced search (solo day)

- **Kickoff (1h):** "You Might Not Need an Effect" — derived data, event logic, resetting state with a key. `useRef` for DOM handles and mutable non-render values.
- **Solo build (2.5h):** read "You Might Not Need an Effect" yourself (twice) · 8 effect predictions on paper (runs when? loops? missing dep?) · build a debounced search as effect + cleanup.
- **Review (30 min):** Claude checks the predictions and the debounce.

### Sun — Scaffold

- Scaffold Ride Planner; spot-search skeleton
- Misses → Anki; retro

## Week 13 — The remainder + ship

### Mon — Custom hooks and `useReducer`

- **Concept:** custom hooks (`useDebounce`, `useLocalStorage<T>`) · Rules of Hooks and why (call order) · `useReducer` with DU actions — compiler-enforced transitions
- **Warm-up:** race guard · when not to use an effect
- **Reps:** extract `useDebounce` from Saturday's search · write `useLocalStorage<T>` · a reducer with `{ type: 'add' } | { type: 'delete' } | ...` and an exhaustive switch
- **Check:** why must hooks be called in the same order every render? When would you pick `useReducer` over `useState`?
- **Solo:** find react.dev's "Reusing Logic with Custom Hooks" and write a `useOnlineStatus` hook alone.

### Tue — Context and Zustand

- **Concept:** context for ambient values only (theme, user — not a data cache) · a provider + `useTheme()` that throws outside it · Zustand for the small global remainder: typed `create()`, selectors, `persist`
- **Warm-up:** Rules of Hooks · reducer with DU actions
- **Reps:** theme context + `useTheme()` guard · a Zustand store for saved spots · selectors · `persist`
- **Check:** what belongs in context vs Zustand vs local state? Why does a selector matter?
- **Solo:** find Zustand's docs and work out how `persist` versions/migrates stored data. Add a version to your store.

### Thu — Performance, measured

- **Concept:** parent re-render → children re-render, usually fine · Profiler first · `memo` / `useMemo` / `useCallback` only for measured problems and referential stability. Never vibes.
- **Warm-up:** context vs Zustand · `persist`
- **Reps:** record a Profiler session · create a real slow child · fix it with `memo` + `useCallback` and measure again
- **Check:** when is `memo` useless? What does `useCallback` actually keep stable?
- **Solo:** find what React DevTools' "Highlight updates" does and use it on Ride Planner.

### Fri — Teach-it

Props vs state vs derived, one Ride Planner example each.

### Sat — Ship Ride Planner (solo day)

- **Kickoff (15 min):** list remaining features with Claude.
- **Solo build (3h):** remaining features + async UX polish (skeletons, retry, empty states).
- **Review (45 min):** Claude reviews like a PR.

### Sun — Deploy + GATE

- Deploy + README (derived-data and client-state choices explained)
- **GATE** (below)

### Project — Ride Planner (~14–16h, Weeks 12–13)

Debounced spot search (Open-Meteo geocoding) · saved spots in Zustand + persist, seeded with your corridor · 7-day forecast per spot (fetch-in-effect + race guard) · `scoreDay()` ported from Phase 3, pure, derived at render · "best day this week" banner, computed not stored · full async UX · °F/°C toggle. **Done =** TS strict · zero `eslint-disable` on exhaustive-deps · no Profiler render storms · deployed · README.

### Phase 5 gate — all cold

- [ ] Gap #1: setter → schedule → re-render → snapshot → batching, ≤90s; triple `setN` predicted (rendered and logged)
- [ ] Gap #2: deps rule, `[]` vs omitted, cleanup timing, the three don't-use-an-effect cases
- [ ] Gap #3: props vs state vs derived, ≤3 sentences + examples
- [ ] 5 effect snippets — 5/5
- [ ] Why index keys break; what `key` actually does
- [ ] Timed: blank Vite app → fetched list with DU states, derived search filter, add form — ≤60 min, no references, no AI
- [ ] Deployed, README written

---

# PHASE 6 — Next.js (Weeks 14–16)

**Goal:** un-freeze the blog and finish it as someone who can defend every route. Tailwind arrives here in context. Solo hunts point to the Next.js App Router docs.

## Week 14 — App Router + the RSC boundary (your named gap)

### Mon — File routing

- **Concept:** `page` / `layout` (persists, nests) / `loading` / `error` / `not-found` · dynamic `[slug]` · route groups
- **Warm-up:** setter → re-render · effect cleanup timing
- **Reps:** scaffold a playground app (the blog waits) · two routes · a nested layout · a `[slug]` route · a route group
- **Check:** what persists across navigation, a layout or a page? What does a route group change in the URL?
- **Solo:** find in the Next docs what `not-found.tsx` vs `notFound()` do, and trigger both.

### Tue — Server vs client components

- **Concept:** components are server by default — zero JS shipped, can read secrets/DBs, can't use state/effects. `"use client"` marks a boundary, not a component: that file and everything it imports joins the client bundle. Client can't import server — but can receive it as `children`. Rule: push `"use client"` to the leaves.
- **Warm-up:** layout vs page · dynamic routes
- **Reps:** a server component reading `process.env` · a client `LikeButton` with state · pass a server component into a client wrapper as `children`
- **Check:** what does `"use client"` mark? What happens to imports below it? Why push it to the leaves?
- **Solo:** find the Next docs page on server and client components and read the composition section twice. Then explain the `children` workaround to Claude.

### Thu — Navigation, metadata, Tailwind

- **Concept:** `<Link>` prefetching · `useRouter` / `usePathname` are client-only (work out why) · `metadata` export · Tailwind: utilities map to CSS you own; `sm:` / `md:` are min-width queries — mobile-first natively
- **Warm-up:** the boundary in one sentence · `children` workaround
- **Reps:** nav with active link via `usePathname` · page `metadata` · style the shell with Tailwind, mobile-first
- **Check:** why is `useRouter` client-only? What does `md:` map to in plain CSS?
- **Solo:** set up Tailwind from its own install docs, no Claude.

### Fri — Teach-it

`"use client"` in 90 seconds.

### Sat — Boundary drills (solo day)

- **Kickoff (30 min):** how to classify a component server vs client.
- **Solo build (3h):** classify 12 components with one-line reasons (nav with active state, post body, like button, search input, theme toggle, date formatter…) · break it on purpose: `useState` in a server component; import server into client — read the errors until they're old friends · playground shell: two routes, nested layout, one interactive island done right.
- **Review (30 min):** Claude checks the 12 classifications.

### Sun — Review

- Finish the shell; self-run an RSC quiz with Claude
- Misses → Anki

## Week 15 — Data, rendering, mutations + the audit

### Mon — Server data fetching + TanStack Query

- **Concept:** server components can be `async` — `await` data directly: no effect, no loading juggle, secrets stay server-side. Where client fetching still fits. TanStack Query (~1h): queries, `staleTime`, invalidation, one mutation.
- **Warm-up:** server vs client classification ×3 · why `useRouter` is client-only
- **Reps:** an async server component fetching posts · refactor one Ride Planner fetch to TanStack Query
- **Check:** name exactly what TanStack Query automates vs your hand-rolled Phase 5 version
- **Solo:** find in the TanStack Query docs what `staleTime` vs `gcTime` mean, and set both deliberately.

### Tue — Static vs dynamic vs ISR

- **Concept:** static by default (built once, CDN) · dynamic when the request matters (`cookies()`, `searchParams`) · ISR bridges (`revalidate = 3600`, `revalidatePath`) · `generateStaticParams` pre-builds `[slug]`
- **Warm-up:** async server components · what TanStack Query automates
- **Reps:** a static page · make it dynamic by reading `cookies()` and watch the build output change · add `revalidate` · `generateStaticParams` for slugs
- **Check:** what makes a route dynamic? What does `revalidate` do vs `revalidatePath`?
- **Solo:** run `next build` and read the route table yourself — find in the docs what each symbol means.

### Thu — Streaming and route handlers

- **Concept:** `loading.tsx` = route-level Suspense; wrap slow sections · `error.tsx` with `reset` · route handlers (`app/api/…/route.ts`) — quietly your first hand-written server code
- **Warm-up:** static/dynamic/ISR · `generateStaticParams`
- **Reps:** a slow section wrapped in Suspense · an `error.tsx` with reset · a JSON route handler
- **Check:** what does `loading.tsx` wrap? What runs a route handler, the browser or the server?
- **Solo:** build an RSS route handler from the RSS spec, found on your own.

### Fri — Teach-it

Static vs dynamic vs ISR, one example each.

### Sat — Server actions + THE AUDIT (solo day)

- **Kickoff (45 min):** server actions — `"use server"` mutations from forms · a first one-page taste of Zod · `revalidatePath` · `useActionState`.
- **Solo build (2.5h):** playground guestbook end-to-end with a server action. Then THE AUDIT: open the frozen blog repo with five phases of new eyes. Expected verdict: keep intent/content/assets, rebuild structure fresh. Write it as `AUDIT.md`, timeboxed to this session.
- **Review (45 min):** Claude reviews the guestbook and `AUDIT.md`.

### Sun — Fresh start

- Fresh blog scaffold; MDX pipeline start
- Misses → Anki

## Week 16 — The blog, rebuilt + shipped

### Mon — MDX pipeline

- **Concept:** posts in `/content` with frontmatter · `gray-matter` + `next-mdx-remote` · a typed `Post` model · `getAllPosts()` / `getPost(slug)`
- **Warm-up:** server actions in one sentence · `useActionState`
- **Reps:** parse one post's frontmatter · type `Post` · write `getAllPosts()` sorted by date · render one post
- **Check:** where does this code run? What happens if frontmatter is missing a field — and how do you make TS force you to handle it?
- **Solo:** read the `next-mdx-remote` README yourself and wire custom components into MDX.

### Tue — Post pages

- **Concept:** `[slug]` pages with `generateStaticParams` (SSG) · syntax highlighting via `rehype-pretty-code` · prev/next links
- **Warm-up:** `getPost` · what SSG means
- **Reps:** the `[slug]` route · `generateStaticParams` · prev/next from `getAllPosts()`
- **Check:** when is each post page built? What happens to a slug added after build?
- **Solo:** set up `rehype-pretty-code` from its docs alone.

### Thu — Index, tags, SEO

- **Concept:** index + `?tag=` filter (know what it does to rendering) · SEO: `generateMetadata` per post, `sitemap.ts`, `robots.ts`, RSS promoted from Week 15
- **Warm-up:** SSG for `[slug]` · ISR vs static
- **Reps:** tag filter via `searchParams` · `generateMetadata` · `sitemap.ts` · `robots.ts`
- **Check:** what does reading `searchParams` do to the index route's rendering?
- **Solo:** validate your sitemap and RSS with an online validator you find yourself.

### Fri — Teach-it

Walk each route's rendering strategy.

### Sat — Contact form, dark mode, THE post (solo day)

- **Kickoff (15 min):** plan the contact form.
- **Solo build (3h):** contact form with server action + Zod + `useActionState` · dark mode with `"use client"` on the toggle only · write and publish THE post — "The setTimeout loop question, three levels deep" (drafted in your gate answers).
- **Review (45 min):** Claude reviews the form and edits the post for clarity (you make the edits).

### Sun — Deploy + GATE

- Deploy on Vercel · README rendering-strategy table (route → static/dynamic/ISR → why)
- **GATE** (below)

### Phase 6 gate — all cold

- [ ] Your named gap: `"use client"` — what it marks, what happens to the import graph, why leaves — ≤90s
- [ ] RSC quiz, 9/10 (server + `useState`? client importing server + workaround? where can `process.env.SECRET` live? why is `useRouter` client-only? bundle-size effect?)
- [ ] Per blog route: static/dynamic/ISR and why; what `revalidate` and `revalidatePath` each do
- [ ] Timed: add `/rides/[slug]` trip reports end-to-end (MDX, `generateStaticParams`, `generateMetadata`, index) — ≤90 min, docs allowed, no AI
- [ ] Live on Vercel · post published · sitemap + RSS resolving

**→ Front-end curriculum closes here. Everything after is backend.**

---

# PHASE 7 — Node · Express · REST · NestJS (Weeks 17–24)

**Goal:** the backend core. Your Phase 3 JS _is_ Node (same runtime, no DOM), and your Ally work is the other side of this glass — you've consumed Graph/SharePoint REST for a year; now you build what you've been calling. **Solo blocks grow to 30–45 min from here** — backend work is mostly reading Node, Express and Postgres docs alone.

## Week 17 — The Node runtime

### Mon — V8, libuv, the event-loop law

- **Concept:** one JS thread + non-blocking I/O + a small thread pool — why Node eats APIs and chokes on CPU-bound work. Loop phases (timers → poll → check) · `setImmediate` · `process.nextTick`. The law: a blocked loop blocks every request in flight.
- **Warm-up:** browser microtask vs macrotask ordering · `"use client"` in one sentence
- **Reps:** predict ordering of `setTimeout` / `setImmediate` / `nextTick` / promise snippets · a busy-loop that starves a timer — feel it once
- **Check:** what happens to other requests while one does a heavy sync loop? Where does `nextTick` run relative to promises?
- **Solo:** find the Node guides "The Node.js Event Loop" and "Don't Block the Event Loop." Pick one claim from each and prove it with a snippet.

### Tue — Modules and package.json

- **Concept:** CJS vs ESM (read both, write ESM) · `node:` prefix · `package.json` for real: scripts, deps vs devDeps, semver `^` / `~`, why lockfiles are committed
- **Warm-up:** the event-loop law · `nextTick` vs promise
- **Reps:** the same module in CJS and ESM · a `scripts` block · predict which versions `^1.2.3` and `~1.2.3` allow
- **Check:** deps vs devDeps — what goes where? Why commit the lockfile?
- **Solo:** find what `npm ci` does differently from `npm install` and when you'd use each.

### Thu — Core modules + debugger

- **Concept:** `fs/promises` · `path` · `crypto.randomUUID` · `EventEmitter` · the server-side debugger: `node --inspect` + VS Code attach
- **Warm-up:** CJS vs ESM · semver
- **Reps:** read/write a JSON file with `fs/promises` · build paths with `path.join` · a tiny emitter-based logger · attach the debugger and step through it
- **Check:** why `path.join` instead of string concatenation? What does an emitter decouple?
- **Solo:** set up a VS Code `launch.json` for Node debugging from the VS Code docs, alone.

### Fri — Teach-it

The event-loop law + what happens to other requests.

### Sat — Streams, env, shutdown (solo day)

- **Kickoff (1h):** `readFile` on 2GB = 2GB RAM; chunks instead · `pipeline()` not bare `.pipe` (error handling) · backpressure in one sentence · `process.env` + dotenv · exit codes · SIGTERM graceful shutdown.
- **Solo build (2.5h):** copy a 500MB junk file both ways (readFile vs stream), watch `process.memoryUsage()`, record numbers in notes · a script that handles SIGTERM cleanly.
- **Review (30 min):** Claude reviews numbers + shutdown handler.

### Sun — The forever-pattern

- **Solo:** `config.ts` parsing env through a Zod schema at boot — refuse to start misconfigured. Find the Zod docs yourself.
- Misses → Anki; retro

## Week 18 — HTTP by hand → Express

### Mon — Bare `node:http`

- **Concept:** `req` / `res` are streams · hand-rolled routing · hand-parsed body. One hour of this pain is correct.
- **Warm-up:** streams + backpressure · Zod config at boot
- **Reps:** a bare server with 2 routes · parse a JSON body by hand · return correct status codes and headers
- **Check:** why is the request body a stream? What does Express save you from?
- **Solo:** scaffold Express + TS on your own from the Express docs.

### Tue — The middleware pipeline

- **Concept:** an ordered chain of `(req, res, next)`; order is architecture (logging → parsing → routes → 404 → error) · `pino-http` with request IDs from day one
- **Warm-up:** bare http pain points · Express scaffold
- **Reps:** a timing middleware · reorder middleware and predict what breaks · `pino-http` with request IDs
- **Check:** what happens if the JSON parser comes after the routes? What does calling `next()` do?
- **Solo:** find in the pino docs how to generate custom request IDs and log one per request.

### Thu — Centralized errors

- **Concept:** the 4-arg error middleware · `AppError` hierarchy (your Phase 3 `ValidationError`, load-bearing) · log rich, respond clean, never leak stacks
- **Warm-up:** middleware order · request IDs
- **Reps:** `AppError`, `NotFoundError`, `ValidationError` · the error middleware · throw from a route and from an async route
- **Check:** how does Express know it's an error middleware? What happens to an async throw in Express 4 vs 5?
- **Solo:** find out which Express version you installed and how it handles rejected promises — prove it.

### Fri — Teach-it

Why middleware order is architecture.

### Sat — Zod at the boundary + layers (solo day)

- **Kickoff (1h):** Zod schemas for body/params/query · a `validate(schema)` middleware factory that 400s with structured issues · `z.infer` = one definition → runtime check + static type. Layers: routes → controllers (HTTP in/out) → services (rules) → repositories (storage). Phase 8 swaps the bottom layer and nothing above changes.
- **Solo build (2.5h):** scaffold Garage: config, pino, errors, health route, one vertical slice (`GET /api/v1/bikes`) through all four layers on an in-memory Map.
- **Review (30 min):** Claude reviews the layer boundaries.

### Sun — Finish the slice

- Finish the slice; first Bruno requests (find Bruno's docs yourself)
- Misses → Anki

## Week 19 — REST design (the design week)

### Mon — Resources and methods

- **Concept:** nouns not verbs (`/bikes`, `/bikes/:id/maintenance`) · sub-resources for ownership · idempotency (GET/PUT/DELETE yes, POST no — retries make it matter) · PUT vs PATCH
- **Warm-up:** the 4 layers · `validate(schema)`
- **Reps:** design routes for 3 small domains on paper · decide PUT vs PATCH for 4 scenarios
- **Check:** what does idempotent mean, and why do retries make it matter?
- **Solo:** skim the Microsoft REST API Guidelines and the Zalando guidelines; steal 3 rules and write them in your own words.

### Tue — Status codes, precisely

- **Concept:** 201 + `Location` vs 200 vs 204 · 400 vs 422 (pick a house rule) · 401 vs 403 · 404 also hides others' resources · 409 · 429 · 500
- **Warm-up:** nouns not verbs · PUT vs PATCH
- **Reps:** 15 scenario → status code drills, rapid-fire
- **Check:** 401 vs 403 · 400 vs 422 — your house rule and why
- **Solo:** find the MDN pages for 409 and 429 and note which headers each should carry.

### Thu — One error shape

- **Concept:** RFC 9457 Problem Details, wired into the error middleware so every throw exits in that shape
- **Warm-up:** 5 status code scenarios
- **Reps:** a `toProblem(err)` function · wire it into the error middleware · send 4 different failures and check the shape
- **Check:** what fields does a Problem Details object have, and which are required?
- **Solo:** find and read RFC 9457 yourself — it's short. Note one thing you didn't expect.

### Fri — Teach-it

401 vs 403, 400 vs 422.

### Sat — Pagination, filters, the Ally bridge (solo day)

- **Kickoff (1h):** cursor vs offset pagination (cursor = your list default) · whitelisted filter/sort (never interpolate user fields) · URL versioning `/v1`, decided once.
- **Solo build (2.5h):** open the Graph docs and recognize everything — `@odata.nextLink` is cursor pagination; `$filter` / `$orderby` are your params; Graph's error object is 9457's cousin. Then whiteboard the complete Garage surface on paper — every route, code, error, page param.
- **Review (30 min):** Claude attacks your design.

### Sun — DESIGN.md

- Finalize and commit `DESIGN.md` — next week's spec

## Week 20 — Build Garage API v1 (part 1)

### Mon — Bikes CRUD

- **Concept:** a full vertical slice: route → controller → service → repo → Bruno → commit → PR
- **Warm-up:** status codes ×5 · the 9457 shape
- **Reps:** POST (201 + Location), GET one, GET list, PATCH, DELETE (204) — each through all 4 layers
- **Check:** which layer owns "bike name must be unique"? Which owns the 201?
- **Solo:** write the Bruno requests for every bikes route, happy + error, alone.

### Tue — Maintenance CRUD

- **Concept:** sub-resources: `/bikes/:id/maintenance` · 404 when the parent doesn't exist
- **Warm-up:** vertical slice order · which layer owns what
- **Reps:** maintenance create + list under a bike · parent-missing 404
- **Check:** why nest maintenance under bikes instead of `/maintenance?bikeId=`?
- **Solo:** finish the remaining maintenance routes alone.

### Thu — Cursor pagination

- **Concept:** encode a cursor (e.g. base64 of `{createdAt, id}`) · `limit` + `nextCursor` · stable ordering with a tiebreaker
- **Warm-up:** offset vs cursor — why cursor?
- **Reps:** encode/decode cursor · paginate the maintenance list · test page boundaries
- **Check:** why does the cursor need a tiebreaker? What breaks with offset when rows are inserted?
- **Solo:** find how Stripe's or GitHub's API paginates and compare to yours in 3 lines.

### Fri — Teach-it

How your cursor works.

### Sat — Filter/sort + parts (solo day)

- **Kickoff (15 min):** plan the whitelist approach.
- **Solo build (3h):** filter/sort whitelist · parts CRUD, full slice.
- **Review (45 min):** Claude reviews for injection-shaped mistakes and layer leaks.

### Sun — Bruno catch-up

- Bruno collection: happy + error cases per endpoint
- Misses → Anki

## Week 21 — Build Garage API v1 (part 2) + deploy

### Mon — CORS

- **Concept:** what CORS protects, preflight, locking origins to your front ends
- **Warm-up:** cursor pagination · whitelist sorting
- **Reps:** call your API from a page on another port and read the error · configure `cors` with an allowlist · trigger a preflight
- **Check:** who enforces CORS, the browser or the server? Does CORS stop curl?
- **Solo:** read MDN's CORS page properly once and note when a preflight happens.

### Tue — Graceful shutdown, for real

- **Concept:** SIGTERM → stop accepting → drain in-flight → close → exit
- **Warm-up:** CORS in one sentence · preflight triggers
- **Reps:** wire shutdown into the server · send SIGTERM during a slow request and watch it finish
- **Check:** why does a platform send SIGTERM? What happens to in-flight requests without draining?
- **Solo:** find how Railway or Render signals shutdown and how long it waits.

### Thu — Consistency pass

- **Concept:** every error leaves in 9457 shape; every 201 has `Location`; every list paginates the same way
- **Warm-up:** shutdown steps · 9457 fields
- **Reps:** walk every route with Bruno and fix inconsistencies
- **Check:** route handlers (Next) vs a standalone service — when each?
- **Solo:** write the README paragraph on route handlers vs a standalone service.

### Fri — Teach-it

Narrate a request through every middleware to a 9457 error.

### Sat — Deploy (solo day)

- **Kickoff (15 min):** deployment checklist.
- **Solo build (3h):** deploy to Railway or Render from their docs · full Bruno pass against production.
- **Review (45 min):** Claude reviews logs and config.

### Sun — Rehearsal

- Status-code quiz self-run (gate rehearsal)
- Misses → Anki

## Week 22 — NestJS: why, modules, DI

### Mon — What Nest is

- **Concept:** everything you hand-assembled, Nest provides as convention — less freedom, more team consistency. Module ≈ feature folder · controller ≈ routes + controller · provider ≈ service · `@Injectable` + constructor injection ≈ your wiring, automated.
- **Warm-up:** the 4 layers · middleware order
- **Reps:** scaffold with the Nest CLI · map each generated file to its Express equivalent
- **Check:** what's the Nest equivalent of your service layer? Of your router?
- **Solo:** find the Nest request-lifecycle diagram in the docs and redraw it from memory.

### Tue — Dependency injection

- **Concept:** the container constructs and shares providers; declare in a constructor, Nest supplies. Why: testability (swap real repo for fake), single instances, explicit graphs.
- **Warm-up:** Nest ↔ Express mapping
- **Reps:** a `BikesService` injected into a controller · a repo provider injected into the service · swap it for a fake
- **Check:** what does DI buy you in tests? What's a provider's default scope?
- **Solo:** find how to register a provider with `useClass` vs `useValue` and use each once.

### Thu — Feature modules + config

- **Concept:** feature modules, `imports` / `exports` · `@nestjs/config` with a Zod schema at boot — same refuse-to-start rule
- **Warm-up:** DI in one sentence · `useClass` vs `useValue`
- **Reps:** a `BikesModule` exporting its service · import it elsewhere · Zod-validated config
- **Check:** what happens if you use a provider from a module that doesn't export it?
- **Solo:** read the Nest config docs and make the app refuse to boot without `DATABASE_URL`.

### Fri — Teach-it

DI in your own words.

### Sat — Bikes module (solo day)

- **Kickoff (15 min):** what to mirror from Express.
- **Solo build (3h):** a bikes module (controller + service + in-memory repo provider) mirroring the Express version.
- **Review (45 min):** Claude compares the two.

### Sun — Notes

- Notes: what the framework removed vs what it imposed
- Misses → Anki

## Week 23 — Pipes, guards, interceptors, filters

### Mon — Pipes

- **Concept:** pipes = validation · `ValidationPipe` or a Zod pipe reusing your schemas — your `validate()` middleware promoted to a concept
- **Warm-up:** DI · modules + exports
- **Reps:** a Zod pipe · apply it to body and params · send bad data
- **Check:** where does a pipe run in the lifecycle?
- **Solo:** find the Nest docs on custom pipes and add a `ParseCursorPipe`.

### Tue — Guards

- **Concept:** guards = authorization · `CanActivate` · a `@Roles()` decorator + `RolesGuard` — Phase 9's RBAC previewed
- **Warm-up:** pipes vs middleware
- **Reps:** a guard that checks a fake header · a `@Roles()` decorator with `Reflector`
- **Check:** guard vs pipe — what question does each answer?
- **Solo:** find how to apply a guard globally vs per-route.

### Thu — Interceptors + exception filters

- **Concept:** interceptors (request ID, timing — cross-cutting without touching routes) · exception filters: RFC 9457 as a global filter so Nest errors match your Express contract exactly
- **Warm-up:** guard vs pipe · `@Roles()`
- **Reps:** a timing interceptor · a global 9457 filter · compare error output with the Express API
- **Check:** where does each of the four sit in the lifecycle?
- **Solo:** make Nest's built-in `HttpException`s also exit in 9457 shape.

### Fri — Teach-it

Where each of the four sits in the request lifecycle.

### Sat — Full slice (solo day)

- **Solo build (3.5h):** port a full vertical slice through all four (pipe, guard, interceptor, filter).
- **Review (30 min):** Claude reviews.

### Sun — Three sentences

- Commit 3 sentences: what Nest enforced that Express left to discipline
- Misses → Anki

## Week 24 — Parity, testing preview, judgment

### Mon — Repo toward a real DB shape

- **Concept:** shape the repo provider toward a real DB; Drizzle comes in Phase 8. TypeORM/Prisma at awareness only (Nest docs lead with them).
- **Warm-up:** the four lifecycle pieces · global vs per-route
- **Reps:** make the repo interface async and DB-shaped · keep the in-memory impl behind it
- **Check:** why should the service never know which repo implementation it has?
- **Solo:** skim the Nest database docs and write one line on why you're not using TypeORM.

### Tue — Testing with DI

- **Concept:** `@nestjs/testing` — override providers with fakes (DI's whole point) · unit-test a service · one supertest e2e
- **Warm-up:** `useValue` providers
- **Reps:** a service unit test with a fake repo · one e2e test of `GET /bikes`
- **Check:** why is overriding a provider easier than mocking imports?
- **Solo:** find how to override a provider in a testing module and add a second test alone.

### Thu — The judgment call

- **Concept:** Express for small services and full control; Nest when a team needs enforced structure and growth is coming — you've built both, so you can defend either
- **Warm-up:** what Nest enforced
- **Reps:** argue both sides for 3 scenarios with Claude
- **Check:** pick Express or Nest for a solo weekend API and a 10-dev team API, and defend each
- **Solo:** draft `NEST-VS-EXPRESS.md`.

### Fri — Teach-it

When you'd choose which, and why.

### Sat — Parity (solo day)

- **Solo build (3.5h):** Nest slice to parity on core resources.
- **Review (30 min):** Claude reviews.

### Sun — GATE

- Commit `NEST-VS-EXPRESS.md` · **GATE** (below)

### Project — Garage API v1 (Express) + Nest port (~30h, threaded)

Surface: `/api/v1/bikes` CRUD · `/bikes/:id/maintenance` CRUD, cursor-paginated, filterable, whitelist-sorted · `/parts` CRUD. All Zod-validated · all errors RFC 9457 · 201s with `Location` · request-ID logs end to end · committed Bruno collection · deployed · `DESIGN.md` committed.

### Phase 7 gate — all cold

- [ ] Headline whiteboard: fresh domain (track-day events + rider registrations) → resource model, endpoints, codes, pagination, error contract — ≤30 min, defended aloud
- [ ] Status-code quiz, 10 scenarios — 9/10
- [ ] Node's concurrency model + the event-loop law + what happens to other requests during a heavy sync loop
- [ ] Middleware ordering as architecture; sketch throw → 9457 response
- [ ] Streams + backpressure, one sentence
- [ ] Timed: add a complete new resource (all four layers, validation, errors, Bruno) — ≤60 min, no AI
- [ ] Nest: modules/providers/DI mapped to Express layers · lifecycle positions of pipes/guards/interceptors/filters · when you'd choose which

---

# PHASE 8 — PostgreSQL + Drizzle (Weeks 25–30)

**Goal:** deep SQL — one of the highest-leverage, most durable backend skills. The bridge: `GROUP BY` is `reduce` — every Phase 3 stat is a one-line aggregate here. Drills live in `psql`. Solo hunts point to the Postgres docs, SQLBolt, pgexercises.com and the Drizzle docs.

## Week 25 — Foundations + joins (heavy week)

### Mon — Postgres up, first queries

- **Concept:** Postgres in one container: `docker run -e POSTGRES_PASSWORD=… -p 5432:5432 postgres:16` (first Docker touch, deliberately minimal) · `psql` + a GUI · `SELECT` / `WHERE` / `ORDER BY` / `LIMIT` · types: `text`, `numeric`, `uuid`, always `timestamptz`
- **Warm-up:** the 4 layers · which layer Phase 8 swaps
- **Reps:** start the container · connect with `psql` · create one table · 10 basic queries, predicting the result rows first
- **Check:** why `timestamptz` over `timestamp`? Why `numeric` for money?
- **Solo:** SQLBolt lessons 1–6 in one sitting, no Claude.

### Tue — DDL and constraints

- **Concept:** constraints are the last line of defense: PK, `NOT NULL`, `UNIQUE`, `CHECK`, FK + `ON DELETE` (`CASCADE` vs `RESTRICT` is a design decision) · `INSERT` / `UPDATE` / `DELETE` with `RETURNING`
- **Warm-up:** `timestamptz` · basic `SELECT` from memory
- **Reps:** riders/bikes tables with every constraint type · violate each one on purpose and read the error · `RETURNING`
- **Check:** `CASCADE` vs `RESTRICT` — pick one for bikes → maintenance and defend it
- **Solo:** find `ON DELETE SET NULL` in the Postgres docs and invent a case where it's right.

### Thu — NULL logic + inner joins

- **Concept:** NULL three-valued logic (`NULL = NULL` isn't true) · `IS NULL` · `COALESCE` · `CASE` · `ILIKE` · `INNER JOIN` mechanics: two then three tables, aliases, joining on FKs
- **Warm-up:** constraint types · `ON DELETE` choice
- **Reps:** 5 NULL predictions · `COALESCE` defaults · two-table then three-table join
- **Check:** why does `WHERE x = NULL` return nothing? What rows does an inner join drop?
- **Solo:** pgexercises.com — start the Basic category alone.

### Fri — Teach-it

The anti-join idiom.

### Sat — Outer joins (solo day)

- **Kickoff (45 min):** `LEFT JOIN` ("all bikes, even unmaintained") · the anti-join (`LEFT JOIN … WHERE right.id IS NULL`) · self-joins.
- **Solo build (3h):** pgexercises.com Basic category complete · 5 LEFT JOIN and 3 anti-join problems you write yourself.
- **Review (15 min):** Claude checks the anti-joins.

### Sun — Practice schema

- Build the practice schema (riders/bikes/rides) · 15 queries cold

## Week 26 — Aggregations + CTEs (the heart)

### Mon — GROUP BY = reduce

- **Concept:** `COUNT` / `SUM` / `AVG` / `MIN` / `MAX` · `HAVING` vs `WHERE` · every non-aggregate column must be grouped
- **Warm-up:** anti-join from memory · LEFT JOIN vs INNER JOIN
- **Reps:** rebuild every Phase 3 stat as SQL — miles per bike, cost per category, rides per month with `date_trunc`
- **Check:** `HAVING` vs `WHERE` · why does selecting an ungrouped column error?
- **Solo:** pgexercises.com — start Aggregates alone.

### Tue — Subqueries and set operations

- **Concept:** scalar, correlated, `IN` / `EXISTS` subqueries — when each reads best · `UNION` / `INTERSECT` / `EXCEPT`
- **Warm-up:** `HAVING` vs `WHERE` · rides per month
- **Reps:** a scalar subquery · a correlated subquery · rewrite one `IN` as `EXISTS` · `UNION` vs `UNION ALL`
- **Check:** when is `EXISTS` clearer than a join? `UNION` vs `UNION ALL`?
- **Solo:** find in the Postgres docs why `NOT IN` with NULLs is a trap, and prove it.

### Thu — CTEs and `DISTINCT ON`

- **Concept:** CTEs (`WITH`) for readable pipelines · recursive at recognition · the Postgres idiom: `DISTINCT ON` for "latest maintenance per bike"
- **Warm-up:** correlated subquery · `NOT IN` + NULL trap
- **Reps:** rewrite a Monday monster as a CTE chain · latest maintenance per bike with `DISTINCT ON`
- **Check:** what does `DISTINCT ON` need in `ORDER BY` to work right?
- **Solo:** find a recursive CTE example in the docs and adapt it to a parts hierarchy.

### Fri — Teach-it

`HAVING` vs `WHERE`.

### Sat — pgexercises marathon (solo day)

- **Solo build (3.5h):** pgexercises Joins + Aggregates categories complete.
- **Review (30 min):** bring your 3 hardest to Claude.

### Sun — The gate's exact shape

- 10 queries cold, including one anti-join and one LEFT JOIN + `COALESCE` totals

## Week 27 — Schema design + migrations

### Mon — Relationships

- **Concept:** 1:N = FK on the many side · M:N = a junction table with its own columns (`part_usages`: quantity, unit_cost) · 1:1 rarely · `snake_case`, one convention, kept
- **Warm-up:** latest-per-group · LEFT JOIN + COALESCE
- **Reps:** model 3 relationships on paper · build the junction table · query through it
- **Check:** where does the FK go in 1:N? Why does a junction table get its own columns?
- **Solo:** design a gear-closet schema (items, categories, wear-logs) alone and bring it for review.

### Tue — Normalization

- **Concept:** working rule: every fact lives in exactly one place · denormalization is a measured read optimization that usually loses to caching
- **Warm-up:** junction tables · FK placement
- **Reps:** find 3 duplicated facts in a bad schema Claude gives you and fix them
- **Check:** what goes wrong when a fact lives in two places?
- **Solo:** look up "update anomaly" and write an example from your domain.

### Thu — Migrations with drizzle-kit

- **Concept:** migrations = the database's Git · drizzle-kit: TS schema → generate (read every emitted SQL file) → migrate · rule: after first deploy, never edit an applied migration; only add
- **Warm-up:** normalization rule · update anomaly
- **Reps:** a Drizzle schema for one table · generate · read the SQL · migrate · add a column via a new migration
- **Check:** why never edit an applied migration?
- **Solo:** set up drizzle-kit from its docs alone, including the config file.

### Fri — Teach-it

Justify each `ON DELETE` choice.

### Sat — Garage schema (solo day)

- **Kickoff (15 min):** what Garage needs.
- **Solo build (3h):** Garage schema on paper first — bikes, maintenance_records, parts, part_usages; FKs, `CHECK (miles >= 0)`, `timestamptz DEFAULT now()` everywhere → Drizzle schema → first migration.
- **Review (45 min):** Claude reviews the schema and migration SQL.

### Sun — Seed

- **Solo:** seed script including a faker-powered 100k-row maintenance seed (needed Week 29). Find faker's docs yourself.

## Week 28 — Drizzle + raw SQL, two fluencies

### Mon — Drizzle basics + pooling

- **Concept:** `pgTable`, column builders, `references()` · connect via node-postgres `Pool` — what a pool is, why serverless complicates it (one paragraph now)
- **Warm-up:** migrations rule · M:N junction
- **Reps:** connect · insert · select · predict the SQL Drizzle will emit
- **Check:** what does a pool save you? What happens if every request opened its own connection?
- **Solo:** find the node-postgres docs on pooling and note the default pool size.

### Tue — CRUD + joins in Drizzle

- **Concept:** CRUD + joins in Drizzle · enable query logging and read what your ORM writes — the whole reason Drizzle was chosen · (30-min Prisma skim for job-listing vocabulary)
- **Warm-up:** pool in one sentence
- **Reps:** a join in Drizzle · log the SQL · compare with your handwritten version
- **Check:** where did Drizzle's SQL differ from yours, if at all?
- **Solo:** skim Prisma's docs for 30 min and write 3 differences from Drizzle.

### Thu — The raw lane

- **Concept:** `pool.query('… WHERE bike_id = $1', [bikeId])` — parameterized always; string-built SQL is how injection happens · raw beats the builder for reporting queries
- **Warm-up:** Drizzle join · query logging
- **Reps:** a raw parameterized query · a string-built query, then inject it on purpose · fix it
- **Check:** injection + the fix in one sentence
- **Solo:** find the OWASP SQL Injection Prevention Cheat Sheet and note its top defense.

### Fri — Teach-it

Injection + the fix, one sentence.

### Sat — THE SWAP (solo day)

- **Kickoff (15 min):** plan the swap.
- **Solo build (3h):** port Garage's repositories from in-memory to Drizzle/Postgres — services, controllers, routes and Bruno should change ~zero lines.
- **Review (45 min):** Claude reviews the diff.

### Sun — Proof

- Screenshot the diff for the README (the layered-architecture thesis, proven) · full Bruno pass

## Week 29 — Indexes, EXPLAIN, transactions + ship v2

### Mon — B-tree indexes

- **Concept:** what indexes accelerate (`WHERE` equality/range, JOIN keys, `ORDER BY`), what they cost (every write) · composite + leftmost-prefix rule · the interview-permanent gotcha: Postgres does not auto-index FKs — you do
- **Warm-up:** injection fix · the swap thesis
- **Reps:** index on paper for 5 queries · predict which use a composite `(bike_id, performed_at)` index
- **Check:** leftmost-prefix rule · why every index slows writes
- **Solo:** read Use The Index, Luke — "Anatomy of an Index" and the WHERE chapter — alone.

### Tue — The required experiment

- **Concept:** reading `EXPLAIN ANALYZE` at a basic level — Seq Scan vs Index Scan, actual time
- **Warm-up:** leftmost-prefix · FK indexes
- **Reps:** query the 100k seed by `bike_id` + date range → `EXPLAIN ANALYZE` (Seq Scan, note ms) → add the composite index → re-run (Index Scan, note ms)
- **Check:** what changed in the plan and why?
- **Solo:** commit the before/after to the README in your own words.

### Thu — Transactions

- **Concept:** `BEGIN` / `COMMIT` / `ROLLBACK` · the canonical case: record maintenance AND decrement part stock — both or neither · `db.transaction(async tx => …)` · isolation vocabulary (Read Committed is the default)
- **Warm-up:** EXPLAIN before/after
- **Reps:** the stock transaction in `psql` · the same in Drizzle · force a failure mid-transaction and confirm rollback
- **Check:** what does Read Committed guarantee and not guarantee?
- **Solo:** find the Postgres docs on isolation levels and summarize the 3 in one line each.

### Fri — Teach-it

The stock transaction.

### Sat — Reports + blog counter (solo day)

- **Kickoff (30 min):** when NoSQL fits, honestly — Postgres until proven otherwise; `jsonb` covers most urges; wrong reason: "SQL seemed hard."
- **Solo build (3h):** blog view counter on a tiny table (Neon free tier + route handler, 90 min) · raw-SQL reporting endpoints: cost-per-mile, monthly spend, top categories.
- **Review (30 min):** Claude reviews the reports.

### Sun — Ship v2

- Ship v2 · deploy · drop db → migrate → seed clean in one command

## Week 30 — Window functions + performance

### Mon — Window functions (the interview separator)

- **Concept:** `OVER (PARTITION BY … ORDER BY …)` · `ROW_NUMBER` / `RANK` / `LAG` / `LEAD` · running totals · mental model: an aggregate _without_ collapsing rows
- **Warm-up:** `GROUP BY` vs window — what's the difference in output rows?
- **Reps:** rides ranked by distance per bike · month-over-month cost delta with `LAG` · a running total
- **Check:** `ROW_NUMBER` vs `RANK` · what does `PARTITION BY` do?
- **Solo:** find the Postgres window functions tutorial and do its examples on your own schema.

### Tue — EXPLAIN, deeply

- **Concept:** seq vs index vs bitmap heap scan · nested loop vs hash vs merge join · estimated vs actual rows (bad estimates = bad plans)
- **Warm-up:** rides ranked per bike, cold
- **Reps:** take 3 queries slow → fast, recording the plans
- **Check:** what does a big gap between estimated and actual rows tell you?
- **Solo:** find what `ANALYZE` (the command, not the EXPLAIN option) does and run it.

### Thu — Indexing strategy from plans

- **Concept:** partial, covering (`INCLUDE`), GIN for `jsonb` · when an index hurts · why the planner ignores yours · add only what query patterns justify
- **Warm-up:** scan types · estimate mismatch
- **Reps:** a partial index · a covering index · prove the planner ignoring an index on a tiny table
- **Check:** when would you skip an index?
- **Solo:** find in the docs when a GIN index helps `jsonb` queries.

### Fri — Teach-it

Read an EXPLAIN aloud.

### Sat — N+1, pooling, scaling (solo day)

- **Kickoff (1h):** N+1 — spot it in your query log, fix with a join or batched `IN` · pooling: why connection-per-request dies, sizing, serverless (PgBouncer) · read-scaling you can defend: replicas + read-your-writes lag · partitioning awareness · where a cache sits.
- **Solo build (2.5h):** take a deliberately slow endpoint → diagnose → fix → `PERFORMANCE.md` with before/after.
- **Review (30 min):** Claude reviews `PERFORMANCE.md`.

### Sun — GATE

### Project — Garage API v2 (~16–20h, threaded)

Repos on Postgres, services untouched (screenshot) · `part_usages` junction with the stock transaction — over-consumption rolls back, proven in Bruno · raw-SQL reporting endpoints · cursor pagination backed by a real composite index · EXPLAIN before/after in README.

### Phase 8 gate — all cold

- [ ] On paper: total maintenance cost per bike including zero-record bikes — LEFT JOIN + COALESCE + GROUP BY, three tables, perfect
- [ ] Fresh domain (gear closet: items, categories, wear-logs) → full schema ≤15 min, `ON DELETE`s defended aloud
- [ ] Read an `EXPLAIN ANALYZE`: scan types, the estimate mismatch, the fix
- [ ] Indexes: cost of one · when you'd skip one · leftmost-prefix · why FKs need explicit indexes
- [ ] Write the stock transaction; name the default isolation level
- [ ] Injection: parameterized form + the attack in one sentence
- [ ] Window function cold: rides ranked per bike
- [ ] v2 deployed · drop → migrate → seed clean in one command

---

# PHASE 9 — Auth & Security (Weeks 31–32)

**Goal:** understand the mechanics deeply enough to reason and debug · implement the core once · then integrate a real provider like 99% of production work. Full strength: RBAC + ownership + the attack suite. Your differentiator: the Entra bridge. **Boundary rule: personal sandboxes only — never employer tenants.** Solo hunts point to The Copenhagen Book and the OWASP cheat sheets.

## Week 31 — Sessions, tokens, the decision

### Mon — Passwords + the session loop

- **Concept:** never plaintext, never a fast hash — SHA-256 is wrong _because_ it's fast; argon2id; timing-safe compare. The session loop (~40 lines): verify hash → session row → cookie `HttpOnly; Secure; SameSite=Lax` → middleware loads session + user → logout deletes the row.
- **Warm-up:** the stock transaction · parameterized queries
- **Reps:** hash and verify with argon2 · a sessions table · login → cookie → middleware → logout
- **Check:** why is a fast hash bad for passwords? What does each cookie flag stop?
- **Solo:** find The Copenhagen Book's password storage page and check your implementation against it.

### Tue — CSRF + hardening

- **Concept:** cookies ride along automatically, so another site can cause authenticated requests — that's the attack · `SameSite=Lax` blocks most · `Origin` checks on mutations · rate-limit `/auth/login` per-IP + per-account · generic failures ("invalid credentials" — never which field)
- **Warm-up:** cookie flags · session loop steps
- **Reps:** a forged cross-site form against your app (watch `SameSite` stop it) · an `Origin` check middleware · a login rate limit
- **Check:** why does CSRF work at all? Why stay vague on login failure?
- **Solo:** find the OWASP CSRF Prevention Cheat Sheet and list which defenses you have.

### Thu — JWTs, honestly

- **Concept:** `header.payload.signature` · claims (`sub`, `exp`, `iss`, `aud`) · HS256 vs RS256 (private-sign/public-verify — how Entra scales) · signed ≠ encrypted · verify with `jose`, never decode-and-trust · the `alg: none` tale · access + refresh with rotation · localStorage tokens = the tutorial default and the wrong one (XSS exfiltrates)
- **Warm-up:** CSRF in one sentence · rate limiting
- **Reps:** sign and verify a JWT with `jose` · paste one into jwt.io and read it · tamper with the payload and watch verification fail
- **Check:** signed vs encrypted · why is localStorage the wrong place for tokens?
- **Solo:** find the story of the `alg: none` vulnerability and explain it to Claude in 3 sentences.

### Fri — Teach-it

Sessions vs JWT, the decision framework.

### Sat — The decision + attacking yourself (solo day)

- **Kickoff (45 min):** sessions = instant revocation, one lookup — the right default for a browser app on its own backend · JWTs = right when the distributed problem is real.
- **Solo build (3h):** commit `AUTH-NOTES.md` in your own words · attack your own login with a 100-attempt loop and watch the 429s land.
- **Review (15 min):** Claude runs the rapid-fire bank until it's boring.

### Sun — Consolidate

- Anki the rapid-fire bank: argon2 · HttpOnly/SameSite · CSRF · IDOR · 404 vs 403 · vague failures

## Week 32 — OAuth/OIDC, the Entra bridge, RBAC + ship

### Mon — The Rosetta Stone

- **Concept:** app registration = OAuth client · the redirect dance = authorization-code flow + PKCE · scopes/consent = scopes · ID token (OIDC — who you are) vs access token (OAuth — what you may call) · Entra's keys = JWKS
- **Warm-up:** sessions vs JWT framework · RS256
- **Reps:** draw the auth-code + PKCE flow from memory · label each step with Entra vocabulary
- **Check:** ID token vs access token · what PKCE protects against
- **Solo:** find Microsoft's auth-code-flow doc and annotate it with "I've configured this part" notes — your bridge artifact.

### Tue — OAuth core, once by hand

- **Concept:** build the redirect URL (`client_id`, `redirect_uri`, `state`, PKCE challenge) → callback verifies `state` → exchange code + verifier server-side → fetch profile → upsert user → create _your_ session. The punchline: OAuth outsources identification; your session still runs the show.
- **Warm-up:** the flow, narrated
- **Reps:** GitHub OAuth by hand against a personal OAuth app
- **Check:** what is `state` for? Who ever sees the client secret?
- **Solo:** find GitHub's OAuth app docs and set up the app registration alone.

### Thu — Use a service, like the job

- **Concept:** wire Auth.js or Clerk into MotoLog — email/password + GitHub sign-in converging on one identity · name exactly what the library automated from Tuesday
- **Warm-up:** OAuth hand-built steps
- **Reps:** install and configure the provider · both sign-in methods · one identity
- **Check:** list what the library does vs what your code still owns
- **Solo:** set it up from the library's own docs; Claude only reviews.

### Fri — Teach-it

The Entra narration to camera (it's a gate item; record until fluent).

### Sat — RBAC + ownership (solo day)

- **Kickoff (45 min):** `requireRole('admin')` is the easy half · the hard half: every user-resource query carries `WHERE user_id = $me` · cross-user access returns 404, not 403 · the bug class this kills: IDOR.
- **Solo build (3h):** ownership in every query · roles + admin endpoints · Bruno attack suite: A on B's data → 404 · non-admin on admin → 403 · forged session → 401 · helmet, strict CORS, `npm audit`, secrets hygiene.
- **Review (15 min):** Claude reviews against the OWASP Top 10 — you map each to a mitigation first.

### Sun — Deploy + GATE

- Deploy full stack (API + Postgres on Railway/Render, minimal Next front end on Vercel) · attack suite green against production · **GATE**

### Project — MotoLog (~14–16h, threaded)

The required multi-user app — your ride-log domain's final form (vanilla → typed → multi-user). Express or your Nest slice (your call, defend it) · Drizzle/Postgres · provider auth with the mechanics understood underneath · per-user bikes/rides/maintenance with ownership in every query · roles + admin endpoints · RFC 9457, request-ID logs, helmet, rate limits, strict CORS · minimal Next front end · deployed with seeded demo creds in the README.

### Phase 9 gate — all cold

- [ ] To camera: how a session and a token are each issued, validated, expired, revoked — ≤4 min, fluent
- [ ] The Entra narration: auth-code + PKCE end to end — every redirect, every parameter, who holds what secret, ID vs access token — spec and Entra vocabulary, ≤5 min
- [ ] Sessions vs JWT: the framework + one concrete scenario each
- [ ] Rapid-fire: argon2 · HttpOnly/SameSite · CSRF · IDOR + fix · why 404 not 403 · why "invalid credentials" stays vague
- [ ] Point to exactly what your provider handles vs what your code still owns
- [ ] Live: the attack suite runs green against production
- [ ] Deployed, demo creds working

---

# PHASE 10 — Testing · Docker · CI/CD (Weeks 33–36)

**Goal:** this IS technical ability. It sits before advanced backend so Phase 11 adds every feature to a green pipeline. The continuity gem: your Phase 9 attack suite becomes automated tests that run on every commit, forever.

## Week 33 — Backend testing

### Mon — Unit tests on the pure core

- **Concept:** test behavior, not implementation · the testing trophy (integration-heavy for backends) · Vitest on the pure core: Zod schemas, cursor encoding, `scoreDay`, stats math
- **Warm-up:** IDOR + fix · why 404 not 403
- **Reps:** 5 Vitest tests on pure functions · a test that tests implementation (bad) vs one that tests behavior (good)
- **Check:** why are backends integration-heavy? What's wrong with testing implementation details?
- **Solo:** find and read Kent C. Dodds' "Write tests. Not too many. Mostly integration." Write 3 takeaways in your words.

### Tue — Integration tests with supertest

- **Concept:** supertest against a dedicated test DB: register → login → cookie carries → CRUD, full surface
- **Warm-up:** behavior vs implementation
- **Reps:** a test DB config · register + login test · an authenticated CRUD test carrying the cookie
- **Check:** why a separate test DB? What makes a test flaky?
- **Solo:** find how supertest's `agent` keeps cookies and use it.

### Thu — DB strategy + factories

- **Concept:** truncate-between-tests (simple, honest) vs transaction-rollback · seed factories (`makeUser()`, `makeRide(overrides)`) so tests read like specs
- **Warm-up:** supertest agent · test DB
- **Reps:** truncate before each test · `makeUser()` and `makeRide(overrides)` · rewrite 2 tests using them
- **Check:** trade-offs of truncate vs rollback
- **Solo:** find Vitest's docs on `beforeEach` / setup files and move the truncate there.

### Fri — Teach-it

What you test at each layer, and why.

### Sat — The attack suite, automated (solo day)

- **Solo build (3.5h):** port the attack suite to supertest — A can't touch B's anything (404s), non-admin → 403, forged/expired sessions → 401. This suite is MotoLog's constitution; CI will enforce it.
- **Review (30 min):** Claude hunts for gaps in coverage.

### Sun — Edges

- The transaction-rollback test · pagination edges · everything green ×3

## Week 34 — Front-end tests + E2E

### Mon — React Testing Library

- **Concept:** query by role/label — your Phase 1 a11y habits make components testable · `user-event`
- **Warm-up:** factories · the attack suite in one sentence
- **Reps:** test Ride Planner's score display · test form validation with `user-event`
- **Check:** why query by role instead of test IDs?
- **Solo:** find RTL's "Which query should I use?" page and fix one test that uses the wrong query.

### Tue — MSW

- **Concept:** mock the network at the boundary, not the fetch function · loading/error/empty states, deterministic
- **Warm-up:** query priority
- **Reps:** an MSW handler · test loading, error and empty states
- **Check:** why mock at the network boundary instead of mocking `fetch`?
- **Solo:** set up MSW for Vitest from its docs alone.

### Thu — Playwright

- **Concept:** record once to learn the API, then hand-write · locators · auto-waiting
- **Warm-up:** MSW vs mocking fetch
- **Reps:** record a flow · rewrite it by hand with role locators
- **Check:** why does Playwright not need manual sleeps?
- **Solo:** find Playwright's best-practices page and apply 2 rules.

### Fri — Teach-it

Why one solid E2E beats twelve flaky ones.

### Sat — The one E2E (solo day)

- **Solo build (3.5h):** the one E2E, rock-solid against a seeded env: register → login → add bike → log ride → dashboard shows it → logout.
- **Review (30 min):** Claude reviews for flakiness risks.

### Sun — Stabilize

- All suites green ×3 straight; flaky = fix or delete today

## Week 35 — Docker

### Mon — Images, containers, the Dockerfile

- **Concept:** images vs containers vs registries · `build` / `run` / `ps` / `exec` / `logs` · the API Dockerfile: multi-stage (deps → TS build → slim runtime) · `.dockerignore` · cache-friendly ordering (lockfile → `npm ci` → source)
- **Warm-up:** one E2E vs many · RTL query priority
- **Reps:** an hour of live Docker commands · write the multi-stage Dockerfile and narrate every line
- **Check:** image vs container · why copy the lockfile before the source?
- **Solo:** find Docker's "build cache" docs and break your cache on purpose, then fix the order.

### Tue — Production-grade images

- **Concept:** non-root user · devDeps never leak into the final stage · `HEALTHCHECK` · pinned base tag
- **Warm-up:** multi-stage stages · cache ordering
- **Reps:** add a non-root user · `HEALTHCHECK` · measure image size before/after multi-stage
- **Check:** why non-root? Why pin the base tag?
- **Solo:** find how to inspect image layers (`docker history`) and explain your biggest layer.

### Thu — Compose

- **Concept:** `docker compose up` = api + postgres + test DB · env wiring · named volumes · healthcheck gating api on postgres readiness (Redis + worker join in Phase 11)
- **Warm-up:** non-root · HEALTHCHECK
- **Reps:** compose file with three services · `depends_on` with `condition: service_healthy` · named volume
- **Check:** why gate on healthcheck instead of plain `depends_on`?
- **Solo:** find the Compose docs on env files and move secrets out of the compose file.

### Fri — Teach-it

Multi-stage builds in 90 seconds.

### Sat — Run it all in containers (solo day)

- **Solo build (3h):** run the integration suite against the compose Postgres — why "works on my machine" dies here · drill rehearsal: blank repo → dockerize a fresh small Express app, multi-stage, non-root — ≤45 min, no references.
- **Review (1h):** Claude reviews the Dockerfile.

### Sun — Repeat

- Repeat the drill if over time; notes

## Week 36 — CI/CD

### Mon — GitHub Actions anatomy

- **Concept:** workflow, triggers, jobs, runners · the pipeline: every push/PR → install → lint → typecheck → test with a postgres service container → build · dependency caching
- **Warm-up:** compose healthchecks · multi-stage
- **Reps:** write the workflow · add a postgres service container · add caching
- **Check:** job vs step · what does a service container give you?
- **Solo:** find the GitHub docs on service containers and get the DB tests green in CI alone.

### Tue — Make the gate real

- **Concept:** required status checks + branch protection on `main` — no direct pushes, even from you
- **Warm-up:** the pipeline stages in order
- **Reps:** enable branch protection · open a deliberately broken PR and watch the merge button lock
- **Check:** what does a required check actually block?
- **Solo:** find how to require a specific job name as a status check.

### Thu — Vercel previews

- **Concept:** a preview deploy per PR, production on merge · why the API doesn't live on Vercel — long-lived DB connections + (soon) a worker don't fit serverless
- **Warm-up:** branch protection
- **Reps:** connect the front end to Vercel · open a PR and use the preview URL
- **Check:** why does the API not belong on Vercel?
- **Solo:** find how Vercel sets env vars per environment (preview vs production) and configure both.

### Fri — Teach-it

The pipeline aloud: PR vs merge, preview vs prod.

### Sat — CD for the API (solo day)

- **Solo build (3.5h):** a deploy hook fired only after green CI on `main` · secrets in GitHub Environments, never the repo · walk the loop end to end: push → CI + preview → merge → green → prod ships itself.
- **Review (30 min):** Claude reviews the workflow.

### Sun — GATE (the timed items)

### Project — MotoLog v2, proven

Unit + integration + automated attack suite + the transaction test · one green Playwright flow · multi-stage non-root Dockerfile + compose boots clean on a wiped machine · CI required on every PR, CD on main, badges that mean something · honest coverage notes (no 100% theater).

### Phase 10 gate

- [ ] What you test at each layer + why behavior — 2 min, one example each
- [ ] Timed: integration test for a new endpoint including its authz-failure case — ≤30 min
- [ ] Timed: dockerize a fresh app (multi-stage, non-root) — ≤45 min unaided
- [ ] Timed: CI from scratch on a fresh repo (lint/typecheck/test with pg service/build) — ≤45 min unaided
- [ ] Explain the pipeline aloud, including why the API ≠ Vercel
- [ ] Multi-stage / layer caching / compose-vs-k8s at awareness

---

# PHASE 11 — Advanced Backend + System Design (Weeks 37–42)

**Goal:** the destination. Every tool solves a problem you can now feel: slow reports (cache), work that shouldn't block a request (queues), files that shouldn't transit your server (presigned URLs), silence when things break (observability). Every feature ships with tests; compose + CI grow as you build.

## Week 37 — Redis + caching

### Mon — Redis itself

- **Concept:** strings + `SET` / `GET` / `EXPIRE` / `TTL` (80% of real usage), hashes, sorted sets at recognition · `ioredis` · Redis joins compose now that it's real
- **Warm-up:** the pipeline stages · why the API ≠ Vercel
- **Reps:** an hour in `redis-cli` · connect with ioredis · add Redis to compose
- **Check:** what happens to a key after its TTL? Why is Redis fast?
- **Solo:** find the Redis docs on data types and pick one you didn't use for a use case in MotoLog.

### Tue — Cache-aside

- **Concept:** hit? return : query → `SET … EX ttl` → return · key discipline from day one: `motolog:v1:stats:user:{id}` · TTL is a design decision — how stale can stats be? 60s is usually honest
- **Warm-up:** `SET` with expiry · key naming
- **Reps:** cache-aside around a stats query · log hits vs misses
- **Check:** why version the key (`v1`)? How do you pick a TTL?
- **Solo:** measure the endpoint with and without the cache using `autocannon` (find its docs yourself).

### Thu — Invalidation + stampedes

- **Concept:** TTL-only (bounded staleness, often right) · delete-on-write (precise, requires knowing your key space) · versioned keys · stampedes: a hot key expires and 200 requests hit the DB — jittered TTLs, lock/refresh-ahead at conversation level
- **Warm-up:** cache-aside flow · TTL choice
- **Reps:** delete-on-write after a mutation · simulate a stampede · add jitter
- **Check:** which invalidation strategy fits MotoLog stats, and why?
- **Solo:** find an article or doc on "cache stampede" and summarize the 3 mitigations in your words.

### Fri — Teach-it

Your invalidation choice and why.

### Sat — Rate limiting, sessions, measured caching (solo day)

- **Kickoff (30 min):** the fixed-window limiter algorithm · why moving sessions to Redis makes the app tier stateless (Week 41 pays it off).
- **Solo build (3h):** hand-roll the fixed-window rate limiter (`INCR`; `EXPIRE`; reject if > N) → swap `express-rate-limit` onto its Redis store · move sessions from Postgres to Redis behind the same interface · cache MotoLog's two heaviest reporting endpoints · measure p50/p95 before and after.
- **Review (30 min):** Claude reviews.

### Sun — Prove it

- Delete-on-write wired to the mutations that touch cached data · integration test asserting the cached path and the invalidation · numbers in README — caching claims without measurements are vibes

## Week 38 — Jobs + uploads

### Mon — Queues with BullMQ

- **Concept:** slow, retryable or non-urgent work doesn't belong in the request path — and `setTimeout` loses work on crash · BullMQ: queues, workers as a separate process, retries with backoff, repeatables · the worker joins compose + CI
- **Warm-up:** cache invalidation choice · stateless tier
- **Reps:** a queue + worker · a job that fails twice then succeeds with backoff · a repeatable job
- **Check:** why a separate worker process? What does `setTimeout` lose on crash?
- **Solo:** set up BullMQ from its docs alone, including connection config.

### Tue — Two real jobs + idempotency

- **Concept:** a welcome email (console transport or Resend free tier) + a monthly riding report · the professional rule: a job may run twice — design so duplicates are harmless (idempotency keys, upserts, already-sent checks)
- **Warm-up:** retries + backoff
- **Reps:** the welcome email job · the monthly report job · run each twice and prove no double effect
- **Check:** why might a job run twice? Name 3 ways to make it harmless.
- **Solo:** find how BullMQ's `jobId` option can dedupe jobs and use it.

### Thu — Presigned uploads

- **Concept:** files shouldn't transit your API (memory, double bandwidth, blocked loop) · the presigned flow: client asks → API authorizes (type/size/ownership) + signs a short-lived PUT URL → direct upload → confirm → API records the key · Cloudflare R2 via `@aws-sdk/client-s3`
- **Warm-up:** "a job may run twice"
- **Reps:** generate a presigned PUT URL · upload with curl · generate a presigned GET URL
- **Check:** what does the API validate, and when? Why does the file never touch the API?
- **Solo:** find the R2 docs for S3 compatibility and configure the client alone.

### Fri — Teach-it

"A job may run twice."

### Sat — Bike photos end-to-end (solo day)

- **Solo build (3.5h):** presigned PUT → `bike_photos` row (pending → ready) → confirm enqueues a `sharp` thumbnail job → presigned GET · ownership checks on every step.
- **Review (30 min):** Claude reviews the ownership checks.

### Sun — Break things

- Bull Board behind admin auth · kill the worker mid-job (watch the retry) · feed a poison job (watch it exhaust into the failed set)

## Week 39 — Realtime + observability

### Mon — The realtime ladder

- **Concept:** polling (honestly fine more often than admitted) → SSE (server → client, plain HTTP) → WebSockets (bidirectional, persistent) · the upgrade handshake · build with bare `ws`; socket.io is the convenience you can now evaluate
- **Warm-up:** presigned flow · idempotent jobs
- **Reps:** a polling endpoint · an SSE endpoint · a bare `ws` echo server
- **Check:** when is polling the right answer? SSE vs WebSockets?
- **Solo:** find the MDN page on the WebSocket handshake and identify the upgrade headers in DevTools.

### Tue — Authenticated notifications

- **Concept:** the report job completes → WS pushes "ready" to that user's sockets · authenticate the handshake via the session cookie · heartbeats · a `userId → sockets` Map · README footnote: multi-instance realtime needs Redis pub/sub — recognized, deferred
- **Warm-up:** SSE vs WS · handshake headers
- **Reps:** authenticate the handshake · the user → sockets registry · push on job completion · heartbeats
- **Check:** why does one instance's Map break with two instances?
- **Solo:** find how to detect dead connections with ping/pong in the `ws` docs.

### Thu — Logging + Sentry

- **Concept:** pino levels used deliberately · child loggers carrying the request ID end to end · redaction — tokens/PII never hit logs · Sentry free tier
- **Warm-up:** multi-instance realtime problem
- **Reps:** child loggers · redact the cookie and auth headers · throw on purpose and watch it arrive in Sentry with stack + breadcrumbs
- **Check:** what should never be logged? What does a child logger carry?
- **Solo:** set up Sentry for Node from its docs alone.

### Fri — Teach-it

`/healthz` vs `/readyz`.

### Sat — Health + THE CHAOS DRILL (solo day)

- **Kickoff (20 min):** `/healthz` (process up) vs `/readyz` (DB + Redis reachable) — different questions, different consumers.
- **Solo build (3h):** both endpoints · compose healthchecks updated · per-route duration middleware · an external pinger + email alert · THE CHAOS DRILL: stop the Postgres container while the app runs — watch `/readyz` flip, Sentry light up, the logs tell a coherent request-ID story.
- **Review (40 min):** walk Claude through the chaos drill's logs.

### Sun — Fix

- Fix what chaos exposed · document the drill so it's re-runnable

## Week 40 — OpenAPI + living docs

### Mon — Spec from Zod

- **Concept:** OpenAPI 3.1 generated from the Zod schemas you already have (`zod-openapi`): one definition → runtime validation + TS types + docs · serve Swagger UI or Scalar at `/docs`
- **Warm-up:** healthz vs readyz · the chaos story
- **Reps:** generate a spec for the bikes routes · serve `/docs`
- **Check:** what does "one definition" buy you?
- **Solo:** set up `zod-openapi` from its README alone.

### Tue — Document everything

- **Concept:** every route, schemas, your RFC 9457 model as a shared error component, examples
- **Warm-up:** spec from Zod
- **Reps:** document all of MotoLog · add examples · a shared Problem Details component
- **Check:** why a shared error component?
- **Solo:** find the OpenAPI 3.1 spec section on components and reuse one schema 3 times.

### Thu — Typed client

- **Concept:** generate a typed client from the spec and consume your own API through it — the payoff of a real contract
- **Warm-up:** shared components
- **Reps:** generate the client · call 3 routes through it · change a schema and watch the client break the build
- **Check:** contract-first vs code-first — which is yours?
- **Solo:** find a client generator (e.g. openapi-typescript) and set it up from its docs.

### Fri — Teach-it

Contract-first vs code-first, one sentence.

### Sat — Docs live + v3 integration (solo day)

- **Solo build (3.5h):** `/docs` live and accurate against production · begin v3 feature integration.
- **Review (30 min):** Claude spot-checks the docs against real responses.

### Sun — Integration

- v3 integration continues

## Week 41 — System design I

### Mon — Life of a request

- **Concept:** DNS → CDN → load balancer → stateless app instances (possible because sessions moved to Redis) → cache → DB · vertical vs horizontal scaling · statelessness as the unlock · how a load balancer sheds a dead instance
- **Warm-up:** the presigned flow · why sessions in Redis
- **Reps:** draw it from a blank page 3 times, narrating aloud
- **Check:** why can your tier scale horizontally now?
- **Solo:** find the System Design Primer study guide and pick your path through it.

### Tue — Load balancing + CDNs

- **Concept:** L4 vs L7, round-robin vs least-connections, why stateless kills sticky sessions · CDNs: what they cache, `Cache-Control` as the contract
- **Warm-up:** life of a request, cold
- **Reps:** 5 scenarios → which LB algorithm · write `Cache-Control` headers for 4 resource types
- **Check:** L4 vs L7 · `no-cache` vs `no-store`
- **Solo:** find MDN's `Cache-Control` page and check every header you wrote.

### Thu — Caching in the whole picture

- **Concept:** browser / CDN / app / DB layers, read patterns, invalidation, stampedes — you've built the app layer; now place it
- **Warm-up:** `Cache-Control` · LB algorithms
- **Reps:** mark each cache layer on your request diagram with what it holds and its TTL
- **Check:** which layer would you add first for a read-heavy public page?
- **Solo:** find how a real company describes its caching layers (an engineering blog) and map it to yours.

### Fri — Teach-it

Life of a request, narrated.

### Sat — Estimation + one worked design (solo day)

- **Kickoff (45 min):** back-of-envelope estimation: QPS, storage, bandwidth from user counts.
- **Solo build (3h):** one worked design: "ride-logging platform for 1M users" — components justified, bottleneck named · re-draw from blank pages, narrated aloud, twice.
- **Review (15 min):** Claude plays interviewer.

### Sun — SYSTEM-DESIGN.md

- Commit `SYSTEM-DESIGN.md` sketching MotoLog as if it had to scale

## Week 42 — System design II + ship

### Mon — Data at scale

- **Concept:** replication (primary/replica, async lag, read-your-writes) · sharding (partition keys, cross-shard pain) · CAP/PACELC plainly — what you give up under a partition; eventual consistency as a choice
- **Warm-up:** life of a request · estimation
- **Reps:** pick shard keys for 3 domains and name the cross-shard query that hurts
- **Check:** read-your-writes problem in one sentence · when would you shard, on what key?
- **Solo:** find the Postgres docs on streaming replication and summarize sync vs async.

### Tue — Async architecture

- **Concept:** queues as decoupling + load-smoothing (you built this) · at-least-once + idempotency · the outbox pattern at recognition
- **Warm-up:** CAP plainly
- **Reps:** diagram MotoLog's jobs as an async architecture · identify where an outbox would help
- **Check:** what problem does the outbox solve?
- **Solo:** find a write-up of the transactional outbox pattern and explain it to Claude.

### Thu — Monolith vs microservices

- **Concept:** modular monolith until org scale forces a split — services solve org problems, not perf problems, at your scale · the senior answer: "monolith first, extract when a seam and a team both demand it"
- **Warm-up:** outbox in one sentence
- **Reps:** find the seams in MotoLog where a split could happen someday
- **Check:** defend your monolith position against a microservices fan
- **Solo:** write a one-page ADR: "Modular monolith for MotoLog."

### Fri — Teach-it

CAP, plainly.

### Sat — Timed designs (solo day)

- **Solo build (3h):** two timed designs, ≤45 min each, whiteboard + narrate: URL shortener (or notification fan-out) + one from MotoLog's future · "it depends, and here's on what" at every box.
- **Review (1h):** Claude plays interviewer on both.

### Sun — Ship v3 + GATE

- Land v3 on the deployed app · whole system green · **GATE**

### Project — MotoLog v3 (threaded)

Cache with receipts · Redis rate limiting · Redis sessions (stateless tier) · BullMQ worker + Bull Board · presigned photo uploads + thumbnails · authenticated WS notifications · pino redaction + Sentry + health endpoints + uptime alert · `/docs` live. Every addition tested and in compose + CI.

### Phase 11 gate — all cold

- [ ] Cache-aside + your invalidation choice + stampede mitigation
- [ ] Aloud: "users want PDF export of their year — how?" → enqueue, worker renders, notify · retries + idempotency named unprompted
- [ ] Narrate the presigned flow — who talks to whom, what's validated where, why the file never touches your API
- [ ] Draw life-of-a-request from memory + why your tier scales horizontally
- [ ] Monolith position, defended
- [ ] Replication + CAP plainly · when you'd shard, on what key
- [ ] Timed: the 1M-user design — ≤45 min, estimate included, bottleneck named
- [ ] Timed practical: cached endpoint with correct delete-on-write — ≤45 min, no AI
- [ ] v3 deployed · chaos drill re-runnable

---

# ⟂ WEEK 43 — FLEX B

Priority order: (1) failed-gate retests · (2) life/work overflow · (3) rest. Design week deserves a fresher brain than any other week. If genuinely clear: sketch capstone ERD ideas on paper for fun — write no code. Using it is not falling behind; it is the plan.

---

# PHASE 12 — Capstone: Track-Day Booking Platform (Weeks 44–49)

**Goal:** pure build. Your world (Gingerman, Grattan, Waterford Hills as seed data), every phase demanded, and one genuinely hard problem: **never sell seat 21 of 20 under concurrent load.** Stack: Express · TS strict · Drizzle/Postgres · Redis · BullMQ · ws · Zod · pino/Sentry · OpenAPI · Docker compose · Actions · lean Next.js front end · deployed.

Capstone sessions are mostly solo. Claude's role shifts to design reviewer and PR reviewer. Warm-ups stay; checks become reviews.

## Week 44 — Design week (no code until the paper is right)

### Mon — ERD

- **Warm-up:** junction tables · `ON DELETE` choices · the stock transaction
- **Solo (1.5h):** ERD on paper — users, organizations, tracks, events, run_groups (with capacity), bookings, waitlist_entries, notifications
- **Review (30 min):** Claude attacks the ERD

### Tue — API contract

- **Warm-up:** status codes ×5 · cursor pagination
- **Solo (1.5h):** complete API contract → `DESIGN.md` — routes, codes, pagination, RFC 9457
- **Review (30 min):** Claude attacks the contract

### Thu — ADRs + risks

- **Warm-up:** sessions vs JWT · monolith position
- **Solo (1.5h):** 5–8 ADRs, ~10 lines each ("Sessions over JWT because… · atomic update over row locks because… · modular monolith because…") + a risk list with concurrency as #1
- **Review (30 min):** Claude challenges each ADR

### Fri — Teach-it

Narrate the ERD.

### Sat — Scaffold (solo day)

- **Solo build (3.5h):** repo, `/api` + `/web` as npm workspaces with a shared package for Zod schemas/types (one hour that saves twenty), compose, CI green on hello-world. Find the npm workspaces docs yourself.
- **Review (30 min):** Claude reviews the structure.

### Sun — Auth

- Port your auth — third time building it, it takes a day, which is itself proof the roadmap worked

## Week 45 — The management plane

### Mon — Orgs + tracks CRUD

- **Warm-up:** the 4 layers · validate middleware
- **Solo (1.5h):** orgs + tracks CRUD, full slices with Bruno
- **Review (30 min):** PR review

### Tue — Events CRUD

- **Warm-up:** sub-resources · 201 + Location
- **Solo (1.5h):** events CRUD
- **Review (30 min):** PR review

### Thu — Run groups + capacity

- **Warm-up:** `CHECK` constraints · composite indexes
- **Solo (1.5h):** run-groups + the capacity model (`capacity`, `booked_count`, `CHECK (booked_count <= capacity)`)
- **Review (30 min):** PR review

### Fri — Teach-it

The ownership rules of the management plane.

### Sat — Authz across the plane (solo day)

- **Solo build (3.5h):** role + ownership authz — organizers touch only their org's events (Phase 9 patterns, no hand-holding) · OpenAPI growing alongside
- **Review (30 min):** Claude tries to break the boundaries

### Sun — Boundary tests

- Attack-style tests for organizer boundaries

## Week 46 — THE INVARIANT (the capstone's heart)

### Mon — The atomic conditional update

- **Concept:** inside the booking transaction:
  ```sql
  UPDATE run_groups
  SET booked_count = booked_count + 1
  WHERE id = $1 AND booked_count < capacity;
  -- rowCount = 0 → full → 409
  ```
  One statement, atomic by nature — no race window. Plus `UNIQUE (rider_id, event_id)` killing double-books.
- **Warm-up:** transactions · Read Committed
- **Reps:** run it in `psql` from two terminals at once · implement in the booking service
- **Check:** why is there no race window? What does the UNIQUE constraint stop that the update doesn't?
- **Solo:** find the Postgres docs on how `UPDATE` takes row locks under Read Committed and explain why this is safe.

### Tue — 409 + waitlist

- **Warm-up:** the atomic update, cold
- **Solo (1.5h):** the 409 contract end to end + waitlist-entry creation on full
- **Review (30 min):** PR review

### Thu — `SELECT … FOR UPDATE`, compared

- **Warm-up:** 409 vs 422 house rule
- **Solo (1.5h):** implement `SELECT … FOR UPDATE` on a branch · write when each approach fits
- **Review (30 min):** Claude reviews the comparison

### Fri — Teach-it

Why there's no race window.

### Sat — Prove it under fire (solo day)

- **Solo build (3.5h):** a committed load script fires 100 concurrent booking attempts at a 20-seat group → exactly 20 succeed, 80 receive 409, the DB never oversells
- **Review (30 min):** Claude checks the script actually runs concurrently

### Sun — Into CI

- Make the script a CI test — the single best engineering artifact in your portfolio

## Week 47 — Cancellation + waitlist (Phase 11, composed)

### Mon — Cancel

- **Warm-up:** the invariant · idempotent jobs
- **Solo (1.5h):** cancel → a transaction frees the seat
- **Review (30 min):** PR review

### Tue — Promotion job

- **Warm-up:** BullMQ retries · `jobId` dedupe
- **Solo (1.5h):** promotion job — the worker claims the seat for the first waitlisted rider using the same atomic update (promotions and fresh bookings race safely by construction)
- **Review (30 min):** PR review

### Thu — Idempotency

- **Warm-up:** "a job may run twice"
- **Solo (1.5h):** a retried promotion cannot double-claim — prove it with a test
- **Review (30 min):** PR review

### Fri — Teach-it

Walk the cancel → promote → notify chain.

### Sat — Notify + edge cases (solo day)

- **Solo build (3.5h):** notify by email + WS push · edge cases enumerated in tests, not comments
- **Review (30 min):** Claude hunts for missing edge cases

### Sun — Sanity

- Green pipeline check · Bull Board sanity

## Week 48 — Production kit + lean front end

### Mon — Cache + rate limits

- **Warm-up:** delete-on-write · stampedes
- **Solo (1.5h):** cache event listings/details with delete-on-write · rate limits
- **Review (30 min):** PR review

### Tue — Observability + docs

- **Warm-up:** healthz vs readyz · redaction
- **Solo (1.5h):** Sentry · health endpoints · `/docs` complete
- **Review (30 min):** PR review

### Thu — Front end: browse

- **Warm-up:** static vs dynamic vs ISR
- **Solo (1.5h):** browse events (ISR — say why) + event detail with a live seat count
- **Review (30 min):** PR review

### Fri — Teach-it

Why ISR for the browse page.

### Sat — Booking flow (solo day)

- **Solo build (3.5h):** booking flow — the 409 renders as "run group full → join waitlist" · rider dashboard
- **Review (30 min):** PR review

### Sun — Organizer dashboard

- Good, clean, done; the API is the star and the README says so

## Week 49 — Harden, prove, ship

### Mon — Load + performance

- **Warm-up:** EXPLAIN reading
- **Solo (1.5h):** load-test booking + waitlist paths (autocannon) · slowest endpoints through the EXPLAIN playbook · `PERFORMANCE.md` before/after
- **Review (30 min):** Claude reviews the numbers

### Tue — Tests

- **Solo (2h):** attack suite ported · one Playwright booking flow

### Thu — Documentation

- **Solo (1.5h):** architecture diagram + ERD + ADRs finalized · a README that walks a stranger from "what is this" to "I just booked a seat" in five minutes
- **Review (30 min):** Claude reads the README as a stranger

### Fri — Teach-it

The full system, five minutes.

### Sat — Ship (solo day)

- **Solo build (4h):** production deploy · seeded demo accounts (rider + organizer creds in README) · concurrency test green in CI against the real setup

### Sun — FINAL CHECKLIST

- Done. (Stretch: a 3-minute demo video — you're a motovlogger, it's a home game.)

### Capstone pitfalls

- **Scope creep:** payments, reviews, messaging = post-done stretch. The invariant is the star; protect its screen time.
- **Skipping design week** — the one week that prevents the four bad ones.
- **Front-end gold-plating** — nobody evaluates this project's CSS.

---

# FINAL CHECKLIST

- [ ] Capstone deployed · demo creds working
- [ ] Concurrency test green in CI — 100 attempts, 20 seats, exactly 20/80, never oversells
- [ ] All phase gates passed — no skipped stamps
- [ ] MotoLog v3 live: cache receipts, jobs, realtime, `/docs`, chaos drill re-runnable
- [ ] Garage v1 + v2, blog, Ride Planner, Ride Log — all deployed with real READMEs
- [ ] Every repo history shows the workflow: branches, PRs, conventional commits
- [ ] SOLO-LOG.md shows 40 weeks of getting yourself unstuck

The standing rules graduate with you: predict before paste becomes read before merge · the gates become your definition of done · the Friday teach-it becomes the code review · the Solo block becomes the job. Kickstand up.

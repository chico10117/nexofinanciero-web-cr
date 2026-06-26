# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

`AGENTS.md` holds the contribution conventions (structure, coding style, commit/PR guidelines). This file covers architecture and the non-obvious wiring. Read both.

## What this is

A marketing/content site for **Nexo Financiero CR** (a Costa Rican accounting/tax/finance firm). Spanish-language (`es-CR`), SSR-rendered, and mostly static content pages plus a static blog. Supabase is wired in, but the public pages do not currently query it.

## Commands

Use **Bun** (`bun.lock` is the lockfile).

- `bun run dev` — Vite dev server.
- `bun run build` / `bun run build:dev` — production / development build.
- `bun run preview` — preview the build.
- `bun run lint` — ESLint + Prettier checks (`bun run format` to auto-fix).
- `bunx tsc --noEmit` — type-check only.

No test framework is configured. Validate changes with `lint`, `tsc --noEmit`, `build`, and a `dev` smoke test.

## Stack & build pipeline

TanStack Start + TanStack Router (file-based) + React 19, Tailwind v4, shadcn/Radix UI, served via Nitro targeting **Cloudflare**.

`vite.config.ts` wires the build directly with first-party plugins: `@tailwindcss/vite`, `@tanstack/react-start/plugin/vite`, `vite-tsconfig-paths`, Nitro for production builds, and `@vitejs/plugin-react`. Keep TanStack Start before React so route generation and server compilation work correctly.

## Routing

File-based routes live in `src/routes/`; see `src/routes/README.md` for the full convention table.

- `src/routes/__root.tsx` is the only layout/app shell — `RootShell` is the `<html>` document, `RootComponent` wraps every page with `Header` / `Footer` / `WhatsAppFloat` and the `QueryClientProvider`. It also owns global `<head>` meta, Google Fonts links, and the `AccountingService` JSON-LD. Per-page SEO goes in each route's `head()`.
- `src/routeTree.gen.ts` is **generated** — never edit by hand.
- The blog detail route file is `blog_.$slug.tsx`. The trailing `_` on `blog_` is deliberate: it opts the `/blog/$slug` route out of nesting under the `/blog` list route's layout. (A non-suffixed `blog.$slug.tsx` was deleted in favor of this.)
- Server routes are plain handlers: `sitemap[.]xml.ts` exposes `/sitemap.xml` via `server.handlers.GET` and enumerates `BLOG_POSTS` for URLs.

## Content model

Blog posts are **static data, not a CMS**: `src/lib/blog-posts.ts` exports `BLOG_POSTS`, where each post's body is an ordered array of typed `BlogBlock`s (`p`, `h2`, `h3`, `ul`, `ol`, `quote`) rendered by the blog route. To add a post, append to that array — the list page, detail route, and sitemap all read from it. `getPostBySlug` powers the detail loader (`throw notFound()` on miss).

## Supabase integration

Three client flavors in `src/integrations/supabase/` (all generated — header `Do not edit`):

- `client.ts` — browser/anon client (`VITE_SUPABASE_*`, falls back to `process.env` during SSR). Exported as a lazy `Proxy` so the client is only constructed on first use.
- `client.server.ts` — **service-role** admin client that bypasses RLS. Import it lazily _inside_ server handlers (`const { supabaseAdmin } = await import("@/integrations/supabase/client.server")`); a top-level import is only safe in other `*.server.ts` modules, because route and `*.functions.ts` files ship to the client bundle.
- `auth-middleware.ts` / `auth-attacher.ts` — request-scoped, RLS-respecting client for user-authenticated queries.

The custom `fetch` wrapper handles the new opaque Supabase API key format (`sb_publishable_` / `sb_secret_`): it sets the `apikey` header and strips the bearer `Authorization` header those keys don't use.

## SSR error handling

`src/server.ts` is the custom server entry (wired via `tanstackStart.server.entry` in the Vite config). It wraps the TanStack Start fetch handler to catch SSR failures — including h3's habit of swallowing in-handler throws into a `{"unhandled":true,"message":"HTTPError"}` 500 body — and renders `renderErrorPage()` instead. Client/runtime errors are surfaced through the `errorComponent` in `__root.tsx`.

## Conventions worth remembering

- Imports use the `@/*` alias for `src`. UI primitives are shadcn (`new-york` style, `slate` base) in `src/components/ui/` — reuse them before writing custom components/CSS.
- `bunfig.toml` enforces a 24h supply-chain delay on new packages (`minimumReleaseAge`). Confirm with the user before adding exclusions.
- This is TanStack Start, **not** Next.js/Remix: no `src/pages/`, no `app/layout.tsx`, and avoid `server-only`-style packages.

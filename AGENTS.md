# Repository Guidelines

## Project Structure & Module Organization
This is a TanStack Start + Vite React app written in TypeScript. Source code lives in `src/`. Routes are file-based under `src/routes/`; keep `src/routes/__root.tsx` as the app shell and do not edit generated `src/routeTree.gen.ts`. Shared site layout components are in `src/components/site/`, reusable shadcn/Radix UI primitives in `src/components/ui/`, hooks in `src/hooks/`, utilities and content helpers in `src/lib/`, and Supabase clients/types in `src/integrations/supabase/`. Static files belong in `public/`, global styles in `src/styles.css`, and Supabase local config in `supabase/`.

## Build, Test, and Development Commands
Use Bun because this repo tracks `bun.lock`.

- `bun install`: install dependencies.
- `bun run dev`: start the local Vite dev server.
- `bun run build`: create the production build.
- `bun run build:dev`: build in development mode.
- `bun run preview`: preview the built app locally.
- `bun run lint`: run ESLint and Prettier checks.
- `bun run format`: format files with Prettier.
- `bunx tsc --noEmit`: run a TypeScript-only check when needed.

## Coding Style & Naming Conventions
Use TypeScript, React function components, and the `@/*` path alias for imports from `src`. Follow two-space indentation and Prettier settings: double quotes, semicolons, trailing commas, and `printWidth` 100. Prefer Tailwind utilities and existing UI primitives before custom CSS. Use PascalCase for React components, camelCase for functions and variables, and route filenames matching TanStack Router conventions such as `blog.$slug.tsx`.

## Testing Guidelines
No test framework is currently configured. When adding tests, keep them close to the code they cover using names like `Component.test.tsx` or `helper.test.ts`, and add the matching package script. Until then, validate changes with `bun run lint`, `bunx tsc --noEmit`, `bun run build`, and a local smoke test through `bun run dev`.

## Commit & Pull Request Guidelines
Recent history uses short, imperative subjects such as `Added 8 Spanish blog posts`, plus generic `Changes` commits. Prefer clearer subjects that describe the user-visible change, for example `Add services page metadata`. Pull requests should include a brief summary, linked issue or task when available, screenshots for visual changes, and the exact validation commands run. Note any environment or Supabase configuration changes explicitly.

## Security & Configuration Tips
Do not commit secrets from `.env`. Keep server-only Supabase code in `*.server.ts` modules, and avoid importing Next.js-only packages such as `server-only`; this project uses TanStack Start conventions.

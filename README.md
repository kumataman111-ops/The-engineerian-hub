# Engineerian Hub

A responsive manufacturing capability catalog for Engineerian Hub, featuring automotive child parts, laser cutting, surface grinding, metal press work, and VMC machining.

Built with React 19, TanStack Start, TypeScript, Vite, and the Netlify TanStack adapter. Styling uses custom CSS with Tailwind available. Lucide supplies interface icons. The catalog includes client-side category filters, search, individual capability pages, and a downloadable text overview. Component diagrams are illustrative SVGs; the hero image is AI-generated and served through Netlify Image CDN.

## Local development

Use Node.js 22.13 or later and pnpm. Install dependencies with `pnpm install`, then run `pnpm dev`. For Netlify platform emulation, use `netlify dev --port 8889`.

## Content

Edit `src/data/products.ts` to update capabilities. No pricing, contact details, certifications, or numerical manufacturing specifications are asserted. This site is a catalog, with no checkout or inquiry submission. The downloadable overview is generated in the browser from the same catalog data.

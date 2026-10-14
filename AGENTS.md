# Engineerian Hub

## Architecture

This is a manufacturing capability catalog built with TanStack Start, React 19, TypeScript, and Vite, deployed using the Netlify TanStack adapter. File-based routes live in `src/routes`. Do not edit the generated route tree.

- `src/routes/index.tsx`: home page, catalog filters/search, mobile navigation, and text catalog download.
- `src/routes/products/$productId.tsx`: capability details and missing-record handling.
- `src/routes/__root.tsx`: HTML document, global styles, and social metadata.
- `src/data/products.ts`: five static manufacturing capability descriptions and illustrative applications.
- `src/components/PartIllustration.tsx`: inline SVG component forms; each gradient has a unique identifier.
- `src/styles.css`: responsive charcoal, ivory, and lime visual system.
- `public/img/machining.png`: generated illustrative hero photography, served through Image CDN.

## Conventions and decisions

Keep typed TanStack Links for internal routes. Browser APIs must remain inside event handlers or effects. Catalog filters and search are transient UI state. No database, authentication, checkout, or inquiry delivery is implemented or needed for this static catalog. Capability entries are source-controlled content, not user-created records.

The business manufactures automotive child parts and performs laser cutting, surface grinding, metal press work, and VMC machine work. Keep descriptions honest: images and component shapes are illustrative. Do not invent stock products, prices, certifications, contact information, tolerances, materials, or capacity numbers. Downloads use the catalog data to prevent copy drifting between surfaces. Preserve accessible controls, mobile layouts, and reduced-motion behavior.

The hero asset was created using the Google SDK through Netlify AI Gateway during setup. No AI request runs in the visitor experience. Do not expose credentials or environment values. Do not add an og:image; the platform supplies it.

## Verification

This environment validates automatically. Do not run build, dev-server, typecheck, or test commands during agent changes. Review edited files instead. Local-development instructions for maintainers are in README.md.

# Bobbins India AI contributor instructions

This file is for AI coding assistants. Human maintainers should begin with [`README.md`](README.md).

## Read before changing the website

1. Read [`README.md`](README.md) for setup, content sources, deployment and troubleshooting.
2. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) for design, writing, accessibility and engineering standards.
3. Inspect the relevant implementation before editing. If the documentation and code disagree, verify the intended behavior, fix the implementation or documentation as appropriate, and keep both synchronized.

## Non-negotiable rules

- Treat `src/data/products.ts` as the product source of truth and `src/data/categoryContent.ts` as the category-content source of truth.
- Do not invent dimensions, materials, standards, certifications, prices, availability, ratings, reviews or company claims.
- Preserve existing product IDs and category slugs unless a redirect from the old URL is added.
- Keep visible company details, metadata, structured data and prerendered equivalents synchronized.
- Never commit secrets, environment files, customer enquiries or private reference material.
- Preserve mobile usability, keyboard access, semantic HTML and reduced-motion behavior.
- Run `npm run check` before committing. Review affected routes in the Vercel preview before merging to `main`.

Keep this file short. Put operational guidance in `README.md` and reusable contribution standards in `CONTRIBUTING.md` so instructions have one clear home.

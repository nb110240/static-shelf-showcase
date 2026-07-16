# Contributing to the Bobbins India website

This guide defines the shared quality standard for design, content and code changes. For local setup, product maintenance, deployment and troubleshooting, use [`README.md`](README.md).

## Before you begin

1. Create a short-lived branch from the latest `main`.
2. Read the relevant source files before editing.
3. Keep the change focused and avoid unrelated redesigns or dependency upgrades.
4. Use the Vercel preview to review the finished change before merging.

The website serves B2B buyers at cable, wire and industrial manufacturing companies. Many visitors arrive from Google, referrals or WhatsApp and browse on mobile connections. They need to identify a suitable reel, confirm specifications and request a quote quickly.

## Brand and company naming

- **Bobbins India** is the public-facing brand.
- **Sudhir Enterprise** is the legal business name and should appear where legal identity is relevant.
- The brand personality is professional, established, trusted and technically precise.
- The company is a manufacturer. Avoid startup language, exaggerated sales claims and generic corporate filler.

When company facts change, update every location listed in [Updating homepage content and company details](README.md#updating-homepage-content-and-company-details).

## Preferred language

Use these terms consistently across interface copy, metadata and documentation:

| Prefer | Avoid |
| --- | --- |
| product catalog | catalogue, product showcase when referring to the full catalog |
| product family | collection, department |
| enquiry | inquiry |
| request a quote | buy now, order now |
| product ID | SKU unless the field is specifically structured-data `sku` |
| specifications | specs in formal customer-facing copy |
| Bobbins India | BobbinsIndia, Bobbins India Pvt. Ltd. |

Write short, factual sentences. Use sentence case for headings and controls unless an established product name requires otherwise. Define uncommon abbreviations on first use. Keep measurements and labels consistent with the existing product data, including `Flange Dia`, `Barrel Dia`, `Traverse`, `Overall Width` and `Bore`.

Never add unverified prices, stock status, capacities, standards, certifications, customer names, ratings or performance claims. Ask for a source when a requested claim is not supported by approved company information.

## Design direction

The visual foundation is “precision blueprint”: clean modern layouts, subtle engineering-grid details, restrained color and precise typography.

- Brand blue: `#178fbe`
- Dark navy: `#0a1628`
- Display and headings: Syne
- Body: Outfit
- Specifications and technical labels: IBM Plex Mono
- Theme: light mode

Avoid dense marketplace layouts, generic stock photography, glowing gradients, glassmorphism, excessive animation and decorative elements that compete with product information.

## UX principles

1. **Lead with specifications.** Show dimensions, applications and selection details before marketing language.
2. **Use restraint to build trust.** Favor whitespace, real product photography and clear hierarchy over decoration.
3. **Make the next action obvious.** Each view should have one visually dominant action appropriate to the task.
4. **Design mobile-first.** Navigation, comparison, tables, forms and contact actions must work at narrow widths without horizontal page scrolling.
5. **Present products consistently.** Use stable aspect ratios, contained images, consistent backgrounds and the same specification order.
6. **Make failure states useful.** When the enquiry API is unavailable, offer accurate email and WhatsApp alternatives without claiming that a message was sent.

## Accessibility requirements

- Use semantic elements and a logical heading order.
- Ensure every control has an accessible name and visible keyboard focus.
- Keep text and interactive controls at WCAG AA contrast or better.
- Provide meaningful alt text for informative images and empty alt text for decorative images.
- Do not communicate meaning through color alone.
- Respect reduced-motion preferences and avoid motion required to understand content.
- Test changed flows using only a keyboard.

## Performance requirements

- Optimize large photography before committing it; follow the limits in [Updating images](README.md#updating-images).
- Lazy-load below-the-fold media where appropriate and prevent layout shifts by preserving dimensions or aspect ratio.
- Avoid adding a dependency when the existing stack or a small local utility can solve the problem clearly.
- Keep route-level code splitting intact and review bundle-size changes shown by `npm run build`.
- Test important pages at a mobile width and on a throttled connection when adding media or animation.

## Content, SEO and GEO requirements

- Give every indexable page a unique, descriptive title and meta description.
- Keep canonical URLs on `https://bobbinsindia.net`.
- Preserve meaningful internal links between the homepage, catalog, product families and products.
- Write content that answers real buyer questions: application, dimensions, compatibility, material options, quantities and quotation requirements.
- Keep visible React content and matching static content in `scripts/prerender.mjs` synchronized.
- Use structured data only for facts visible on, or directly supported by, the page.
- Do not manually edit `public/sitemap.xml`; `npm run build` regenerates it.
- Add redirects when changing an indexed URL.

## Engineering conventions

- Use TypeScript and existing project patterns.
- Prefer the `@/` import alias for files under `src/`.
- Reuse existing shadcn/ui components and design tokens before creating new primitives or one-off colors.
- Keep shared company and contact values in `src/lib/constants.ts` where possible.
- Keep product data in `src/data/products.ts` and category guidance in `src/data/categoryContent.ts`.
- Handle loading, empty, error and success states explicitly.
- Do not weaken the security headers in `vercel.json` to make an integration work without understanding the impact.
- Do not edit generated files in `dist/` or commit local `.env` files.

## Commit and pull-request standard

Use a concise imperative commit subject with a conventional prefix when practical:

```text
feat: add reel comparison filters
fix: preserve selected product on enquiry
docs: clarify production handoff
chore: update build tooling
```

A pull request should explain what changed, why it changed, how it was tested and any operational follow-up. Include desktop and mobile screenshots for visible changes.

## Definition of done

A change is ready to merge when:

- [ ] The content is factual and uses the preferred terminology.
- [ ] The affected desktop and mobile layouts have been reviewed.
- [ ] Keyboard access, focus states and meaningful image text have been checked.
- [ ] Metadata, structured data and prerendered content remain synchronized when affected.
- [ ] Enquiry fallbacks and error states remain accurate when affected.
- [ ] `npm run check` passes.
- [ ] No secret, customer data, generated build output or private reference file is staged.
- [ ] The Vercel preview has been reviewed and the pull request explains the verification performed.

After merging, follow the production checks in the [`README.md` release checklist](README.md#release-checklist).

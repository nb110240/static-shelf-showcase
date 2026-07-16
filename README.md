# Bobbins India Website

Production website and product catalog for **Bobbins India**, the public-facing brand of **Sudhir Enterprise**, a Mumbai manufacturer of industrial bobbins, spools and reels.

- Live site: [bobbinsindia.net](https://bobbinsindia.net)
- GitHub: [nb110240/static-shelf-showcase](https://github.com/nb110240/static-shelf-showcase)
- Hosting: Vercel project `static-shelf-showcase`
- Production branch: `main`

This README is the operating guide for maintainers. Read the access checklist before making production changes.

## Start here

| If you need to… | Read… |
| --- | --- |
| Set up the website locally | [First-time local setup](#first-time-local-setup) |
| Change products, categories or images | [Updating products](#updating-products), [categories](#adding-or-changing-a-category) and [images](#updating-images) |
| Change the contact form | [Contact form and email delivery](#contact-form-and-email-delivery) |
| Understand SEO or GEO | [SEO and GEO architecture](#seo-and-geo-architecture) |
| Release a change | [Git and release workflow](#git-and-release-workflow) and the [release checklist](#release-checklist) |
| Make design, copy or code changes | [`CONTRIBUTING.md`](CONTRIBUTING.md) |

Documentation responsibilities are intentionally separated:

- `README.md` explains setup, content maintenance, deployment and troubleshooting.
- `CONTRIBUTING.md` defines design, writing, accessibility and engineering standards.
- `CLAUDE.md` gives AI coding assistants a short set of repository-specific instructions and points them to the two documents above.

## What is in the repository

The site includes:

- A responsive marketing homepage
- A searchable catalog of 111 products across 16 product families at the time of writing
- Permanent category and product URLs
- Product comparison and enquiry flows
- Static HTML prerendering for SEO and AI/search discovery
- Product, breadcrumb, FAQ and organization structured data
- Vercel Analytics and Speed Insights
- A Vercel serverless enquiry API using Resend
- A real static `404.html` so unknown URLs return HTTP 404

## Maintainer access checklist

The repository contains the application code, images, configuration and deployment instructions. Accounts and secrets must be handed over separately and must never be committed.

The maintainer should have access to:

1. **GitHub repository** — collaborator or organization access to `nb110240/static-shelf-showcase`.
2. **Vercel project** — access to `static-shelf-showcase` in the `nb110240s-projects` team. GitHub access is enough to trigger deployments, but Vercel access is needed to inspect logs, manage domains and change environment variables.
3. **Domain and DNS** — access to the registrar/DNS provider for `bobbinsindia.net` and `bobbinsindia.com`.
4. **Resend** — access to the email-delivery account and its verified sending domain.
5. **Search tools** — Google Search Console and Bing Webmaster Tools, if accounts have been created.
6. **Lovable** — optional. The site can be maintained entirely through GitHub and a local editor.

Grant account access directly. Do not send passwords or API keys in GitHub issues, commits, pull requests or chat messages.

## Technology

- React 18 and TypeScript
- Vite 5
- React Router
- Tailwind CSS and shadcn/ui
- Vercel static hosting and serverless functions
- Resend for enquiry email delivery
- Vercel Analytics and Speed Insights

Use Node.js 22 and npm, matching GitHub Actions. If you use `nvm`, the included `.nvmrc` selects the correct major version.

## First-time local setup

Install Git, Node.js 22 and npm. Then run:

```bash
git clone https://github.com/nb110240/static-shelf-showcase.git
cd static-shelf-showcase
npm ci
npm run dev
```

The Vite development site runs at [http://localhost:8080](http://localhost:8080).

If you use `nvm`, run `nvm use` before `npm ci`. Use `npm ci` for a clean, reproducible install from `package-lock.json`; use `npm install` only when intentionally changing dependencies.

`npm run dev` serves the React site, but it does not emulate the Vercel serverless function. To test `/api/enquiry`, copy `.env.example` to `.env.local`, replace the placeholder values with development credentials and run `npx vercel dev`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite development server with hot reload |
| `npm run docs:check` | Check documentation structure and local links |
| `npm run typecheck` | Run TypeScript without producing files |
| `npm run lint` | Run ESLint |
| `npm run build` | Generate the sitemap, build Vite and prerender all public routes |
| `npm run preview` | Preview the built site locally |
| `npm run check` | Run type checking, linting and the complete production build |
| `npx vercel dev` | Run the site with the local Vercel enquiry API |
| `npx vercel --prod` | Manually deploy the current checkout to production |

Run `npm run check` before opening or merging a pull request.

## Repository map

```text
api/
  enquiry.ts                 Vercel serverless contact-form endpoint
public/
  hero-main.webp             Homepage hero image
  og-default.png             Default social sharing image
  robots.txt                 Search and AI crawler rules
  sitemap.xml                Generated during npm run build
scripts/
  check-documentation.mjs     Validates documentation structure and local links
  generate-sitemap.mjs       Builds sitemap URLs from catalog data
  prerender.mjs              Produces crawlable HTML for every public route
src/
  assets/                    Product, category, logo and homepage images
  components/                Shared interface sections and controls
  data/products.ts           Product catalog and category image mapping
  data/categoryContent.ts    Category URLs, summaries and buyer guidance
  lib/constants.ts           Website URL, email, phone and WhatsApp constants
  pages/                     Route-level React pages and metadata
  App.tsx                    Application routes and global services
vercel.json                  Clean URLs and production security headers
CONTRIBUTING.md              Design, copy, accessibility and code standards
CLAUDE.md                    Instructions for AI coding assistants
.env.example                 Safe template for local enquiry-email settings
.nvmrc                       Node.js version used by maintainers and CI
```

Do not edit `dist/`; it is generated and ignored by Git. Do not manually edit `public/sitemap.xml`; the build regenerates it from the catalog.

## Updating products

The catalog source of truth is [`src/data/products.ts`](src/data/products.ts).

To add a product:

1. Add an optimized image to `src/assets/`.
2. Import the image near the top of `src/data/products.ts`.
3. Add a product object to the `products` array.
4. Run `npm run check`.
5. Open the generated product route locally and verify the dimensions, mobile layout and enquiry link.

Example:

```ts
{
  id: "example-250",
  name: "Example 250 Reel",
  description: "A concise, factual description of the reel and its application.",
  category: "Cable Delivery",
  image: example250Image,
  features: [
    "Model: Example 250",
    "Flange Dia: 250mm",
    "Barrel Dia: 125mm",
    "Traverse: 140mm",
    "Overall Width: 165mm",
    "Bore: 30mm",
  ],
}
```

Product rules:

- `id` must be unique, lowercase and URL-safe. It becomes `/products/<id>`.
- Do not casually change an existing `id`; search engines and shared links may already use it.
- `category` must exactly match a key in `src/data/categoryContent.ts`.
- Keep specifications factual and use consistent labels such as `Flange Dia`, `Barrel Dia`, `Traverse`, `Overall Width` and `Bore`.
- Do not invent certifications, load ratings, materials or standards.
- Product pages, structured data and sitemap entries are generated automatically during the build.

## Adding or changing a category

A category is represented in three places:

1. Product objects in `src/data/products.ts`
2. The category entry in `src/data/categoryContent.ts`
3. The `categoryImages` mapping at the bottom of `src/data/products.ts`

Every category entry needs:

- A permanent URL slug
- A display title
- A factual summary
- Typical applications
- A selection checklist
- A category image

After changing a slug, add a Vercel redirect from the old URL instead of silently breaking it.

## Updating images

Use:

- `src/assets/` for images imported by React components or catalog data
- `public/` for files that must keep a fixed URL, including the hero, social image and icons

Important files:

| File | Used for |
| --- | --- |
| `public/hero-main.webp` | Homepage hero |
| `public/og-default.png` | Default Open Graph/Twitter image |
| `src/assets/logo.png` | Header and hero wordmark |
| `src/assets/home-studio.webp` | Homepage company/product collage |
| `src/assets/*` | Product and category photography |

Image guidance:

- Prefer WebP for large website photography and JPEG for ordinary product photos.
- Keep product images below roughly 200 KB where quality permits.
- Remove unnecessary transparent padding and use a consistent crop/background.
- Write meaningful alt text when introducing a new image component.
- Run the production build after replacing an image; Vite changes the hashed asset filename automatically.

## Updating homepage content and company details

Common homepage sections:

- Hero: `src/components/Hero.tsx`
- Product finder: `src/components/ProductFinder.tsx`
- Product showcase: `src/components/ScrollShowcase.tsx`
- Capabilities: `src/components/Capabilities.tsx`
- Company story: `src/components/About.tsx`
- Enquiry form: `src/components/EnquiryForm.tsx`
- Contact/footer: `src/components/Footer.tsx`

Company-wide constants live in `src/lib/constants.ts`. If the legal name, address or contact details change, also review:

- `src/components/Footer.tsx`
- `src/components/StructuredData.tsx`
- `src/pages/Privacy.tsx`
- The `organization` object in `scripts/prerender.mjs`

Keep the visible contact details and structured data synchronized.

## Contact form and email delivery

The browser submits enquiries to `POST /api/enquiry`. The function validates the submission, filters obvious spam, rate-limits repeated requests and sends an email through Resend.

Environment variables are documented in `.env.example`:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Resend API credential |
| `ENQUIRY_TO_EMAIL` | Recommended | Inbox that receives enquiries. The API defaults to `sales@bobbinsindia.com`. |
| `ENQUIRY_FROM_EMAIL` | Required for branded production email | Sender on a Resend-verified domain. The development fallback is Resend's onboarding sender. |

Configure production values in **Vercel → Project Settings → Environment Variables**. Never commit the real values.

Example Vercel CLI setup:

```bash
npx vercel link
npx vercel env add RESEND_API_KEY production
npx vercel env add ENQUIRY_TO_EMAIL production
npx vercel env add ENQUIRY_FROM_EMAIL production
npx vercel --prod
```

The sending address must belong to a domain verified in Resend. A suitable value looks like:

```text
Bobbins India Website <website@send.bobbinsindia.net>
```

After deployment, submit a clearly labeled test enquiry and confirm that it reaches the destination inbox. When delivery is unavailable, the interface shows direct WhatsApp and email alternatives instead of claiming success.

## SEO and GEO architecture

SEO means search engine optimization. GEO means generative engine optimization: making the site's factual content easy for AI-powered search and answer systems to discover and understand. The site is a React application, but public pages are also emitted as static HTML so crawlers do not need JavaScript to understand the catalog.

`npm run build` performs three stages:

1. `scripts/generate-sitemap.mjs` derives public URLs from product and category data.
2. Vite compiles the React application and hashed assets.
3. `scripts/prerender.mjs` generates unique HTML, metadata and JSON-LD for the homepage, catalog, categories, products, privacy page, comparison page and 404 page.

When editing SEO content, review both the React page metadata and its matching prerender content:

- Homepage: `src/pages/Index.tsx`
- Catalog: `src/pages/Products.tsx`
- Categories: `src/pages/CategoryPage.tsx`
- Products: `src/pages/ProductPage.tsx`
- Global organization data: `src/components/StructuredData.tsx`
- Static equivalents: `scripts/prerender.mjs`
- Crawler policy: `public/robots.txt`

Do not add fake prices, ratings, reviews, certifications or availability data to structured data. Bobbins India uses quotation-based B2B sales.

## Git and release workflow

Recommended workflow:

```bash
git checkout -b update/descriptive-name
# make changes
npm run check
git add <changed-files>
git commit -m "type: concise description"
git push -u origin update/descriptive-name
```

Open a pull request, review the preview deployment and merge into `main` only when it is ready.

### Automatic Vercel deployments

The repository is connected to Vercel through Vercel's native GitHub integration. No maintainer's computer, local Vercel CLI session or separate deploy workflow is required.

```text
Push a branch → GitHub validation + Vercel preview → review and merge → Vercel production deployment
```

- A branch or pull-request push creates a Vercel preview without replacing production.
- A merge or direct push to `main` creates a production deployment and updates the production domains when the build succeeds.
- The GitHub Actions workflow validates documentation, TypeScript, lint and the production build. Vercel performs the deployment separately and reports it as a GitHub deployment.
- Direct pushes to `main` work, but pull requests are recommended so the validation and preview can be reviewed first.

Do not add a second token-based GitHub Actions deployment while the native integration is active. It would create duplicate builds and require a long-lived `VERCEL_TOKEN` secret. If the native connection is ever removed, reconnect the GitHub repository in **Vercel → Project Settings → Git** rather than committing credentials.

Production domains:

- `https://bobbinsindia.net`
- `https://www.bobbinsindia.net`

## Release checklist

Before merging:

- [ ] Run `npm run check`
- [ ] Review the homepage at desktop and mobile widths
- [ ] Review any changed category and product pages
- [ ] Confirm there is no horizontal scrolling on mobile
- [ ] Test search, filters and product comparison if touched
- [ ] Verify enquiry, WhatsApp, email and telephone links if touched
- [ ] Check titles, descriptions, canonical URLs and social images
- [ ] Ensure no `.env`, API key, customer data or private file is staged
- [ ] Review the Vercel preview deployment

After merging:

- [ ] Confirm the Vercel production deployment is `Ready`
- [ ] Check the homepage and one changed product URL
- [ ] Confirm a made-up URL returns HTTP 404
- [ ] Confirm `robots.txt` and `sitemap.xml` return HTTP 200
- [ ] Send a labeled contact-form test when email configuration changed

Useful production checks:

```bash
curl -I https://bobbinsindia.net/
curl -I https://bobbinsindia.net/products/pt-1
curl -I https://bobbinsindia.net/this-page-should-not-exist
curl -I https://bobbinsindia.net/robots.txt
curl -I https://bobbinsindia.net/sitemap.xml
```

Expected results are `200` for real pages and `404` for the made-up URL.

## Security and repository hygiene

- Never commit `.env` files, Resend keys, Vercel tokens or customer enquiries.
- `node_modules/`, `dist/`, `.vercel/`, QA screenshots and local reference images are intentionally ignored or excluded from deployment.
- Use `npm audit --omit=dev` to check deployed dependencies.
- Review dependency upgrades and run the full check before merging.
- Keep the security headers in `vercel.json` when adding third-party services; update the Content Security Policy only for domains the site genuinely needs.

## Troubleshooting

### A new product is visible in React but missing from the sitemap

Run `npm run build`. The sitemap and static HTML are build outputs derived from `src/data/products.ts`.

### A category route redirects to the catalog

Check that the product `category` exactly matches the key in `src/data/categoryContent.ts` and that the category slug is unique.

### The enquiry form shows fallback buttons

Check the Vercel function logs and confirm `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` exist in the production environment. Confirm the sender domain is verified in Resend, then redeploy.

### A direct product URL returns 404 after deployment

Run the full production build and confirm `scripts/prerender.mjs` reports the expected route count. Do not restore a catch-all SPA rewrite; that would reintroduce soft 404s.

### Local preview does not run the enquiry API

That is expected with `npm run dev`. Use `npx vercel dev` to emulate Vercel functions.

## Contribution and design standards

Before changing visuals, copy or shared behavior, read [`CONTRIBUTING.md`](CONTRIBUTING.md). It defines the brand direction, preferred terminology, accessibility requirements and definition of done. Keep this README focused on operating the website; update `CONTRIBUTING.md` when a team-wide standard changes.

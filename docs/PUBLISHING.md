# Building and deploying the site

## Local development

Node.js 22 or newer.

    npm ci
    npm run dev      # http://127.0.0.1:4321
    npm run check    # build dist/ and validate links, assets and anchors
    npm run build    # build dist/ only

Markdown lives in `content/`. `dist/` is generated and never committed.

## What gets published

`scripts/build.mjs` copies only:

- `assets/site.css` and `assets/favicon.svg`
- every path listed in `site.config.json` → `publicAssets`

`scripts/check.mjs` fails if the built asset set differs from that list, so an
extra file cannot slip into the published output. To publish a new figure or
manuscript, add it to `publicAssets` and reference it from a page.

## Deployment

`.github/workflows/pages.yml` runs on every push to `master` and on manual
dispatch:

1. `npm ci`
2. `npm audit --audit-level=moderate`
3. `npm run check` — builds `dist/` and validates it
4. uploads `dist/` and deploys to GitHub Pages

One-time setup: repository Settings → Pages → **Source: GitHub Actions**. Do not
choose a branch folder; the branch root is authoring source, not built output.

`site.config.json` sets the canonical `url` (used for `<link rel="canonical">`)
and `indexable`, which controls whether pages carry `noindex` and whether
`robots.txt` allows crawling.

## Content conventions

- One `<h1>` per page; the template supplies navigation and footer.
- Links between pages use site-absolute paths such as `/research/ssg/`.
- Do not link to files outside the repository; `npm run check` only validates
  what ends up in `dist/`.
- State the evidence status of every document: peer-reviewed, technical report,
  preprint, or working notes. Do not describe an unreviewed draft as a result.

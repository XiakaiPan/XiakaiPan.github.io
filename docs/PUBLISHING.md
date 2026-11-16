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
## Caching

GitHub Pages serves **every** file with `Cache-Control: max-age=600` and does not
allow overriding response headers (there is no `_headers`, `.htaccess` or
equivalent). A visitor can therefore hold a page for up to ten minutes after a
deploy before their browser revalidates.

What is handled here:

- `scripts/build.mjs` appends a content fingerprint to the stylesheet and icon
  URLs, e.g. `site.css?v=20c9613388`. A changed file gets a new URL and is
  fetched immediately; an unchanged file keeps its cache.
- HTML page URLs cannot be fingerprinted, so their ten-minute window remains.
  GitHub still sends `ETag` and `Last-Modified`, so the refresh after that window
  is a cheap 304 rather than a full download.

If a page must never be served stale, that requires control of the headers:
serve a custom domain through a proxy that can rewrite response headers (for
example a Cloudflare response-header transform rule setting `no-cache`), or host
on a platform that supports a `_headers` file.

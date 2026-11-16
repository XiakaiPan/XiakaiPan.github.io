# Local development, review and deployment

## Repository split

The site is split across two repositories, and content only ever moves one way.

| Repository | Visibility | Contents |
|---|---|---|
| `my-research` | private | Complete record: draft pages, historical/candidate PDFs, LaTeX source archives, authoring metadata |
| `XiakaiPan.github.io` | **public** | Outward-facing site only: pages, publishable assets, build tooling, release notes |

Consequences worth keeping in mind:

- Anything committed here is public from the moment it is pushed.
- Do not add draft manuscripts, source archives, private history or authoring
  metadata here. Put them in `my-research`.
- Do not refer to files outside the repository; `npm run check` only validates
  links inside the built site.

## Local development

Node.js 22+.

    npm ci
    npm run dev      # http://127.0.0.1:4321
    npm run check    # builds dist/ and validates links, assets and anchors
    npm run build    # builds dist/ only

Markdown lives in `content/`. `dist/` is generated and never committed.

## What actually gets published

`scripts/build.mjs` copies only:

- `assets/site.css` and `assets/favicon.svg`
- every path listed in `site.config.json` → `publicAssets`

`scripts/check.mjs` fails if the built asset set differs from that allowlist, so
an accidental extra file cannot reach the published artifact. To publish a new
figure or manuscript, add it to `publicAssets` and reference it from a page.

## Deployment

`.github/workflows/pages.yml` runs on every push to `master` and on manual
dispatch:

1. `npm ci`
2. `npm audit --audit-level=moderate`
3. `npm run check` — builds `dist/` and validates it
4. `npm run release:check` — reports disclosure-approval status (non-blocking)
5. uploads `dist/` and deploys to GitHub Pages

One-time setup: Settings → Pages → **Source: GitHub Actions**. Do not choose a
branch folder; the branch root is authoring source.

`site.config.json` must set `url` to the real origin (`https://xiakaipan.github.io`)
so canonical links are correct, and `indexable: true` for the site to be
indexable at all.

## Disclosure approval

`publication-approval.json` is the per-file record of whether a manuscript or
figure may be distributed publicly. Each entry binds a file to its Git blob SHA;
editing a file invalidates its recorded SHA and requires re-review.

`npm run release:check` verifies that record and reports what is missing. In the
current workflow it is **reported, not enforced** — the site still deploys so the
outward-facing pages stay reachable. That is a deliberate tradeoff: the gate
documents the owner's judgement rather than acting as an access control.

Before treating the published site as a cleared release:

1. Review each manuscript in full for authorship, employer/coauthor rights, data
   provenance and any future submission policy.
2. Record real reviewer and basis values in `publication-approval.json`.
3. Run `npm run check && npm run release:check` and confirm it passes.
4. Verify the live site: home page, one deep link, a PDF, the CV download,
   `/robots.txt`, `/404.html`, and a phone-width viewport.

Do not record fabricated approvals to make the check pass.

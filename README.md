# Xiakai Pan — Research Portfolio

Public research site: Three Models, SSG (including Agent workloads), TSG, the
Research Statement, academic CV and industry resume, and ten previously
published TinyLab RISC-V articles.

Live at **https://xiakaipan.github.io/** once Pages is enabled.

## Two repositories, one direction

| Repository | Visibility | Holds |
|---|---|---|
| `my-research` | private | The **complete** record: draft pages, historical and candidate PDFs, LaTeX source archives, authoring metadata, the site's own private history |
| this repository | **public** | Only outward-facing content: the pages, the publishable figures and manuscripts, the build scripts, and the release notes |

Nothing private is added here. Anything that must stay private, or that is only
of historical interest, belongs in `my-research`.

## Local preview

Requires Node.js 22+.

    git clone https://github.com/XiakaiPan/XiakaiPan.github.io.git
    cd XiakaiPan.github.io
    npm ci
    npm run dev

Open http://127.0.0.1:4321 and edit `content/`, `assets/` or
`site.config.json`. Validate and build:

    npm run check
    npm run build

The standalone site lands in `dist/`. Only the paths listed in
`site.config.json` → `publicAssets`, plus `site.css` and `favicon.svg`, are
copied into `dist/`; the check fails if the built asset set diverges from that
allowlist.

## Deployment

`.github/workflows/pages.yml` builds and validates, then publishes `dist/` as a
GitHub Pages artifact on every push to `master`, and can also be run manually
from the Actions tab.

One-time setup: repository Settings → Pages → **Source: GitHub Actions**.
Never select a branch folder — the branch root is authoring source, not the
built site.

No build secrets are required. `dist/` is not committed.

## Files

- `content/index.md` — homepage
- `content/statement.md` — Research Statement
- `content/research.md`, `content/research/*.md` — research method and projects
- `content/publications.md` — manuscripts, preprints and evidence status
- `content/cv.md`, `content/resume.md` — academic CV and industry resume
- `content/writing.md` — published TinyLab articles
- `assets/` — figures and manuscripts that may be published
- `site.config.json` — navigation, canonical URL, public asset allowlist
- `publication-approval.json` — per-file disclosure sign-off record
- `scripts/` — build, check, release-check, local server

## Disclosure status

`publication-approval.json` records whether each manuscript and figure may be
distributed. It currently shows `approved: false` and is **not** enforced by the
deploy: the site builds and publishes regardless, so that the outward-facing
pages stay reachable while the review is completed. Run

    npm run release:check

to see the exact remaining items, and read `REVIEW_BEFORE_PUBLISH.md` for the
outstanding human review.

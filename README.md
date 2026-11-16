# Xiakai Pan — Research Portfolio (private staging)

Markdown-first personal research site for PhD and research-oriented industry applications. The site emphasizes research method, distinct research objects, and verifiable evidence.

Current structure: Three Models (methodology), parallel SSG (heterogeneous AI execution, **including Agent workloads**) and TSG (evolving human–AI tasks). SSG-DT is a performance-modeling direction. Historical Agent-SSG is no longer a standalone active research series.

## Run locally

Node.js 22+, npm, and authenticated GitHub access are required.

    git clone --branch draft/research-site-2026-10 https://github.com/XiakaiPan/XiakaiPan.github.io.git
    cd XiakaiPan.github.io
    npm ci
    npm run dev
    npm run check
    npm run build

Preview on http://127.0.0.1:4321; built static files in dist/.

## Content

- content/index.md — Homepage and selected evidence
- content/statement.md — Research Statement
- content/research.md and content/research/*.md — Methods, SSG, SSG-DT and TSG
- content/research/agent-ssg.md — Private archived draft, excluded from build
- content/publications.md — Publication/evidence status
- content/cv.md and content/resume.md — Academic and industry materials
- site.config.json — Navigation, SEO, candidate public assets manifest
- docs/ and legacy/ — Maintenance, provenance and old site

## Publication boundary

No deployment or public visibility change has been made. Build uses an explicit asset allowlist, but the SSG/TSG PDFs and figure candidates still require disclosure/rights review before public hosting. CI does not verify publication safety. Read [review checklist](REVIEW_BEFORE_PUBLISH.md), [publishing](docs/PUBLISHING.md) and [development](docs/DEVELOPMENT.md).

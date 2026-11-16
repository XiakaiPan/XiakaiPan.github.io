# Xiakai Pan — Research Portfolio

This PRIVATE repository is the single source of truth for the website and PhD/Research application materials.

Research: Three Models (method), SSG (heterogeneous execution including Agent workloads), TSG (evolving human–AI tasks). The old standalone Agent-SSG page is an excluded historical draft.

## Local editing (Node.js 22+)

    git clone https://github.com/XiakaiPan/XiakaiPan.github.io.git
    cd XiakaiPan.github.io
    npm ci
    npm run dev

Visit http://127.0.0.1:4321. Edit content/, assets/, or site.config.json and refresh. The latest website branch before merge is draft/research-site-2026-10.

    npm run check
    npm run build

Standalone static output is dist/. Never deploy the repository root.

## Files

- content/index.md — homepage
- content/statement.md — Research Statement
- content/research.md and content/research/*.md — research methods/projects
- content/publications.md — paper status and evidence
- content/cv.md and content/resume.md — application materials
- assets/ — source images and PDFs, including PRIVATE historical files
- site.config.json — navigation, canonical site URL, public asset allowlist
- publication-approval.json — exact-blob publication review approvals
- scripts/ — build, check, release-check, local server
- .github/workflows/publish.yml — MANUAL approved-only Pages release

## Public release protection

There is no automatic deployment. The local site includes *candidate* PDF and PNG assets, whose publication rights have NOT been fully verified.

After legitimate PDF, image, employer/coauthor and venue review, update the exact-file approval records and indexable flag, then run:

    npm run check
    npm run release:check

The second command is intentionally BLOCKED until real approvals are recorded. Pages requires repository Settings → Pages → Source: GitHub Actions, a compatible private-repo plan, and explicit manual dispatch. Never make this source repository public merely to host Pages.

See docs/PUBLISHING.md and REVIEW_BEFORE_PUBLISH.md for the full handoff.

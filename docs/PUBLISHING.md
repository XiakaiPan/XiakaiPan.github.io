# Local development, approval and deployment

## Single-repository workflow

Source: XiakaiPan/XiakaiPan.github.io. The complete site, build scripts, drawings, candidate PDFs, CI and release workflow are committed here. Clone the default branch after merging the website PR:

    git clone https://github.com/XiakaiPan/XiakaiPan.github.io.git
    cd XiakaiPan.github.io
    npm ci
    npm run dev

Open http://127.0.0.1:4321. Markdown is under content/. Run npm run check or npm run build for standalone dist/. Keep the repository PRIVATE.

## What is actually published?

scripts/build.mjs copies only the paths listed in site.config.json publicAssets plus site.css and favicon; it does not recursively publish all of assets/. The archived Agent-SSG PDF, TSG source archive and TLI/Workbench historical PDFs remain private. The release workflow uploads only dist/.

However, publicAssets currently includes candidate SSG and TSG PDFs and figures. Each requires full content and disclosure approval. A green build does NOT mean a PDF is safe or licensed for distribution. Confirm all authorship, employer and coauthor rights, third-party materials, data provenance, follow-up submission rules and contact information.

publication-approval.json defaults to approved:false for the site and every asset. Each asset is bound to its Git blob SHA. After reviewing the exact file, set its approved flag and real reviewer and basis. Final site review requires a reviewer, date and approved:true; only then set indexable:true in site.config.json. Editing an asset invalidates its original SHA and requires renewed review. Never enter fabricated approvals to make a workflow pass.

    npm run check
    npm run release:check

The release check deliberately fails while approval is incomplete.

## GitHub Pages

GitHub Pages can publish from Private repositories only on eligible GitHub plans. In Settings → Pages select GitHub Actions as Source. Once the PR is merged into master and the review is actually completed, open Actions → Publish approved research website → Run workflow → APPROVED_AND_REVIEWED.

This manual-only workflow runs npm ci, npm audit, build, internal link/asset checks, release-review verification, then uploads only dist/ using official GitHub Pages actions. It never publishes on push or PR merge. Keep source Private; do not expose Git history, archived papers or authoring docs.

The planned canonical site is https://xiakaipan.github.io/. Confirm the real deployment URL, PDF links, desktop/mobile layout, indexing and public accessibility. Browser/manual checks cannot be replaced by CI. If Private Pages is unavailable, use another static host for only the verified dist/ output with the same release gate.

Current release status: BLOCKED by unverified document-level/IP authorization and unknown Pages settings; no claim of live deployment.

# Local development, review and private-repository deployment

The full editable website source, PDF candidates, research drafts and tools live exclusively in the PRIVATE XiakaiPan/XiakaiPan.github.io repository. With Node.js 22+, run npm ci and npm run dev; preview at http://127.0.0.1:4321. Run npm run check to validate generated content; npm run build produces static dist/.

## Release approval

The build packages only site.config.json publicAssets plus CSS and favicon; unrelated historical PDF/source archives stay private. Current SSG and TSG paper PDFs and some figures are still candidates, not approved for public release. Complete full-text, author, coauthor/employer/IP, data provenance and future conference-policy review first.

publication-approval.json defaults to approved:false. Each approved file must be documented by a real reviewer/basis and exact Git blob hash. Fill final reviewedAt and approval only after the actual review. npm run release:check verifies this gate and a real HTTPS canonical domain.

## Free hosting with a separate private showcase repo

GitHub Free Pages requires a public source repository. Use Cloudflare Pages Free, which supports a private GitHub repo.

1. In the authoring repo, run bash scripts/setup-showcase-repo.sh XiakaiPan/research-portfolio using your authenticated local gh CLI. This creates a NEW PRIVATE repo with only a harmless placeholder.
2. Connect ONLY the new private showcase repository to Cloudflare Pages Git integration; production branch main, output directory public, no build command.
3. Read the actual assigned pages.dev URL in Cloudflare. Set site.config.json url to it and indexable to true if approved for indexing.
4. Complete file-by-file disclosure approval, then run npm run check, npm run release:check, and bash scripts/export-showcase.sh XiakaiPan/research-portfolio.
5. The export copies only reviewed dist/ into showcase public/, and Cloudflare hosts that directory. Verify public URL, PDF links, mobile rendering and external links after release.

The former direct GitHub Pages workflow in the source repository has been retired. The research source remains private, the showcase repo is private, but its hosted public/ files are accessible to website visitors.

See docs/SHOWCASE.md for detailed instructions and REVIEW_BEFORE_PUBLISH.md for unresolved safety checks.

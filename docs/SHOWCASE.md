# Private showcase repository — Cloudflare Pages Free

## Architecture

This repository is the only editable PRIVATE website source. A second PRIVATE GitHub repository, proposed as XiakaiPan/research-portfolio, contains ONLY reviewed static artifacts under public/. No authoring Markdown, old paper drafts, original source history or unpublished source archive is copied.

GitHub Free Pages needs a PUBLIC repository. Cloudflare Pages Free supports PRIVATE GitHub repositories while serving a PUBLIC pages.dev website. Repo privacy does not protect files already deployed to the website.

## Create a private showcase

On your Mac:

    brew install gh
    gh auth login
    git clone https://github.com/XiakaiPan/XiakaiPan.github.io.git
    cd XiakaiPan.github.io
    bash scripts/setup-showcase-repo.sh XiakaiPan/research-portfolio

This creates a private repo containing only a noindex placeholder. The current GitHub connector cannot directly create new repositories, so this one authenticated local command is required.

## Connect Cloudflare

In Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git → GitHub, grant access ONLY to the new showcase repository, not the research source.

Production branch: main. Build command: blank. Build output directory: public. Root directory: repository root. Confirm the actual pages.dev URL issued by Cloudflare, rather than assuming a hostname.

## Publish only approved work

First inspect the complete SSG and TSG PDFs, figures, public claims, employer/coauthor permissions and future conference restrictions. Keep publication-approval.json false until each item has been approved on its exact bytes.

Then set site.config.json url to the actual HTTPS pages.dev/custom origin and set indexable=true when ready to be indexed. Complete the author/reviewer, basis, date and exact SHA approvals in publication-approval.json.

    npm ci
    npm run check
    npm run release:check
    bash scripts/export-showcase.sh XiakaiPan/research-portfolio

Export refuses to proceed without valid approval and pushes only dist/ into the new private repository public/ folder. Cloudflare auto-deploys that content if Git integration is enabled.

Continue editing only the original source repository and preview locally at http://127.0.0.1:4321. Repeat approval and export for every public update. A modified PDF/figure invalidates its previous content hash.

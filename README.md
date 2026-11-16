# Xiakai Pan — Research Portfolio (private authoring source)

Single repository for the editable site: Three Models, SSG including Agent workloads, TSG, Research Statement, CV/Resume, and ten previously published TinyLab RISC-V articles.

## Local preview

Requires Node.js 22+ and GitHub access:

    git clone https://github.com/XiakaiPan/XiakaiPan.github.io.git
    cd XiakaiPan.github.io
    npm ci
    npm run dev

Open http://127.0.0.1:4321. Edit content/, assets/ or site.config.json and refresh. Validate and build:

    npm run check
    npm run build

The generated static site lives in dist/. Only explicitly allowlisted candidates enter dist/; the entire research source/history is NEVER a published artifact.

## Free hosting while keeping both GitHub repositories private

Use a second deployment-only private GitHub repository with Cloudflare Pages Free, which supports private Git sources. Proposed name: XiakaiPan/research-portfolio. Only reviewed dist/ outputs are transferred; the first commit is a harmless placeholder.

On your Mac, authenticate the GitHub CLI and create that private repo:

    brew install gh
    gh auth login
    bash scripts/setup-showcase-repo.sh XiakaiPan/research-portfolio

Then connect ONLY the showcase repo to Cloudflare Pages (main branch, public output directory, no build command). See docs/SHOWCASE.md. This GitHub connector cannot itself create repositories; the script uses your authenticated local GitHub CLI.

After all PDF/IP and text approvals, set site.config.json url to the actual Cloudflare HTTPS domain and complete publication-approval.json accurately. Publish only reviewed output:

    npm run check
    npm run release:check
    bash scripts/export-showcase.sh XiakaiPan/research-portfolio

Export refuses to operate without real approvals and matching file hashes. A private GitHub repository does not make its hosted website private. Do NOT expose this research source repo.

## Where to work

- content/index.md — homepage
- content/statement.md — Research Statement
- content/research.md, content/research/*.md — SSG, TSG, Three Models, SSG-DT
- content/publications.md — manuscripts and evidence
- content/writing.md — ten TinyLab RISC-V articles
- content/cv.md, content/resume.md — application materials
- site.config.json — candidate assets and final canonical URL
- publication-approval.json — fail-closed public release record
- docs/SHOWCASE.md — private showcase and Cloudflare setup
- REVIEW_BEFORE_PUBLISH.md — pending disclosure review

The former direct GitHub Pages workflow was retired; it cannot deliver GitHub Free Pages from a private repository.

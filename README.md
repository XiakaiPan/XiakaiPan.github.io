# Xiakai Pan — Research Portfolio

Source for <https://xiakaipan.github.io>, a personal research site.

## What the site covers

A methodological position and two parallel research lines.

- **[Three Models of World Modeling](https://xiakaipan.github.io/research/three-models/)** —
  how formal, simulation and statistical models compose, and why measurement
  stays outside the triangle.
- **[SSG — System Substrate Graph](https://xiakaipan.github.io/research/ssg/)** —
  one representation of how an AI workload is scheduled onto a system, from
  operator kernels through distributed training, inference and RL to agent
  workloads.
- **[TSG — Task Substrate Graph](https://xiakaipan.github.io/research/tsg/)** —
  a formal model of tasks that persist and evolve across actors, specifications
  and implementations.

The site also carries a research statement, an academic CV in Chinese and
English, a publications list that states the evidence status of each document,
and ten previously published technical articles on RISC-V virtualization.

## Local preview

Node.js 22 or newer.

    git clone https://github.com/XiakaiPan/XiakaiPan.github.io.git
    cd XiakaiPan.github.io
    npm ci
    npm run dev

Then open <http://127.0.0.1:4321>. Editing anything under `content/`,
`assets/` or `site.config.json` rebuilds and is visible after a refresh.

    npm run check    # build and validate every link, asset and anchor
    npm run build    # build dist/ only

The site is plain static HTML: no framework, no client-side routing, no CDN
requests. Fonts and styling are local, so a build has no network dependency.

## Writing content

Pages are Markdown files under `content/` with YAML front matter:

```yaml
---
title: "Page title"
permalink: /section/page/
description: "One-line summary used for the page metadata."
---
```

`permalink` is the route and must be unique. Heading anchors are generated
automatically. Internal links are written as site-absolute paths (`/research/ssg/`)
and are checked by `npm run check`.

Figures and PDFs live under `assets/`. Files listed in `site.config.json` →
`publicAssets`, together with the stylesheet and favicon, are the only assets
copied into `dist/`; anything else in the tree is not published.

## Deployment

A push to `master` builds, validates and publishes `dist/` to GitHub Pages
through `.github/workflows/pages.yml`. The workflow can also be started by hand
from the Actions tab. Pages is configured with **Source: GitHub Actions**, not a
branch folder, because the branch root is authoring source rather than built
output.

## Licence

Text, figures and manuscripts are licensed under
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/): share
unmodified with attribution, no commercial use, no derivatives. The build
scripts are all rights reserved. See [LICENSE](LICENSE) for the exact scope.

## Contact

xiakpan@gmail.com

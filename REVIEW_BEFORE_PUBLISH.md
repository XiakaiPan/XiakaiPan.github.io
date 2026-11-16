# Final publication review — November 2026

## Confirmed changes

- [x] Editable source, website pages, research notes, CV/Resume and scripts live in the private XiakaiPan/XiakaiPan.github.io repository.
- [x] SSG website author credit is **Xiakai Pan** only, with no project/paper affiliation. Historical anonymized PDF has NOT been modified.
- [x] Ten TinyLab RISC-V virtualization articles are indexed in content/writing.md; TinyLab splits the name into XiaKai Pan (4), XiakaiPan (4), panxiakai (2).
- [x] Agent execution is part of SSG, not a separate active Agent-SSG series.
- [x] Builder packages only publicAssets candidates. Draft manuscripts and source archives outside the allowlist are not exported.
- [x] Free private-GitHub showcase workflow is prepared: scripts/setup-showcase-repo.sh and scripts/export-showcase.sh.
- [x] Direct GitHub Pages publishing workflow removed to avoid the Free/private plan mismatch.
- [x] Exact-blob approval gates remain disabled by default; publishing tools refuse unreviewed releases.

## Still needed before displaying full research manuscripts

- [ ] Author/rightsholder and any employer/coauthor approval for the complete SSG manuscript and its H20/A800 data and diagrams.
- [ ] Complete TSG manuscript confidentiality, ownership, and future submission-policy review.
- [ ] Review all candidate SVG/PNG figures and check metadata/rights.
- [ ] Verify public CV, contact details, external links, PDF and mobile display.
- [ ] Run private showcase creation script on an authenticated machine; GitHub connector has no repository-create action.
- [ ] Connect new private repo to Cloudflare Pages Free, record actual pages.dev URL, then complete publication-approval.json and export.

## Current verdict

**Research source is ready for local editing. Public site containing manuscripts remains NOT APPROVED.** The new showcase can initially contain only a harmless placeholder. No release permission should be inferred from passing CI.

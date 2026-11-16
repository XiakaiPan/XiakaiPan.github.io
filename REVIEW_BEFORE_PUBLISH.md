# Publication safety and delivery audit — 16 Nov 2026

## Checks completed

- [x] Complete personal website source resides in this GitHub repository.
- [x] Agent-SSG is now an SSG workload scope; standalone historical page excluded.
- [x] Existing work is separated into peer-reviewed publication, technical report, preprint and research notes.
- [x] Build copies only explicit public candidate assets, never the entire private assets tree.
- [x] The release workflow is manual-only and blocked without documented per-asset approval and exact blob matching.
- [x] Canonical URL preset; site remains noindex during staging.
- [x] Vulnerable yaml 2.8.1 dependency updated to 2.9.1; CI has an npm audit gate.

## Not established by automated tools

- [ ] Full-text review and employer/coauthor disclosure rights for the 13-page SSG PDF and H20/A800 numerical findings.
- [ ] Full-text review, ownership and future submission policy of the 27-page TSG PDF.
- [ ] Complete licensing/metadata inspection of every research diagram, including the large SSG PNG.
- [ ] Independent verification of CV/contact, bibliography and external links.
- [ ] Desktop/mobile browser, GitHub Pages settings and live site availability.

A private GitHub repository does not mean that a Pages website is private. Do not flip repository visibility.

## Decision

**NOT YET APPROVED FOR PUBLICATION**. No author/employer/coauthor approvals have been invented. publication-approval.json is intentionally false. The workflow is ready for review and manual deployment after authentic rights/content approval and Pages activation.

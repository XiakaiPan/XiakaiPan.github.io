# Research website publication review — 16 November 2026

This branch is **private staging**, not approval to publish. A successful CI check does not verify research claims or PDF confidentiality.

## Content status

- [x] Research-method-first homepage, Research Statement, academic CV and industry resume.
- [x] Former Agent-SSG integrated into SSG Agent workload scope; historical standalone page excluded.
- [x] September ASPLOS rapid-rejected SSG submission no longer labeled as an active submission or peer-reviewed article.
- [x] Three Models described as a research note, not a completed standalone paper.
- [x] SSG-DT and new Agent execution evidence correctly marked as proposed or pending.
- [ ] Verify author names, bibliographic data, experience and academic facts.

## Intellectual-property gate — required before deployment

- [ ] Review **entire SSG PDF**, H20/A800 data, coauthor contributions and any employer disclosure restrictions.
- [ ] Review **entire TSG PDF**, novel unpublished material and policies of any future submission venue.
- [ ] Inspect every PNG/SVG in the publicAssets whitelist for confidential diagrams, attribution and licenses.
- [ ] Confirm whether the public contact email and all personal claims are correct.
- [ ] Reconfirm applicable policies for future anonymous review. ASPLOS rapid rejection settles only that submission's live-review status.

## Technical release gate

- [ ] Run npm ci && npm run check and inspect successful CI.
- [ ] Check desktop/mobile rendering, long tables, PDFs, links and accessibility.
- [ ] Deploy **dist only**, not repository root; keep the source repository private when possible.
- [ ] Set production URL/basePath and search indexing only after content approval.
- [ ] Inspect actual public build output; noindex is not access control.

The manifest packages candidate PDFs and figures but **does not itself approve publication**. For a disallowed asset, remove both the publicAssets item and every page link to it before deployment.

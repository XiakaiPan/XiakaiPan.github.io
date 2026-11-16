# Publication review — November 2026

Final shape decided on 16 November 2026: the **private `my-research` repository
holds the complete record**, and **this repository is the public half**, served
at https://xiakaipan.github.io/ via GitHub Pages.

## Completed

- [x] Agent-SSG is an SSG workload scope, not a separate active series.
- [x] Author credit on the SSG pages is **Xiakai Pan** only.
- [x] Ten TinyLab RISC-V virtualization articles indexed in `content/writing.md`
      (TinyLab filed them under XiaKai Pan, XiakaiPan and panxiakai).
- [x] Obsolete "anonymized for review" wording removed; the September submission
      is described as a technical manuscript, not an active submission.
- [x] Contact address corrected to `xiakpan@gmail.com` across index, CV and
      resume.
- [x] Builder copies only the `publicAssets` allowlist; `check.mjs` fails if the
      published asset set diverges from it.
- [x] Private-only material removed from this repository: Agent-SSG manuscript,
      TLI and Workbench drafts, TSG source archive, two non-published figures,
      the excluded draft page, `docs/CONTENT_SOURCES.md`, and `legacy/`.
      All of it is archived in `my-research` (`archive/personal-site/` and the
      `repos/*` paper trees), verified by SHA-256.
- [x] Cloudflare show-case scaffolding and the extra private repository plan
      abandoned in favour of GitHub Pages on this public repository.
- [x] GitHub Pages workflow restored (`.github/workflows/pages.yml`).

## Outstanding human review

- [ ] Author/rightsholder and any employer/coauthor approval for the published
      SSG technical report and its H20/A800 data and diagrams.
- [ ] Complete TSG manuscript confidentiality, ownership and future
      submission-policy review.
- [ ] Review the published SVG/PNG figures for confidentiality and rights.
- [ ] Verify CV facts, contact address and external links on the live site.
- [ ] Confirm desktop and phone rendering, PDFs and the CV download live.
- [ ] Fill `publication-approval.json` with real reviewer and basis values, then
      confirm `npm run release:check` passes.

## Current verdict

**The outward-facing site is publishable; the manuscript disclosure review is not
complete.** `publication-approval.json` still records `approved: false` for every
entry. The deploy workflow reports that state without blocking, so the site stays
reachable while the review finishes. No release permission should be inferred
from the site being online.

## Repository history — cleaned 16 November 2026

This repository is public, so its commit history is public too. Earlier commits
carried two addresses that were removed on 16 November 2026:

- a 163.com mailbox whose local part was the mobile number
- an employer address at baidu.com

The exact strings are deliberately not reproduced here. Both were rewritten out
with `git filter-repo`: author and committer identities now use the GitHub
noreply address, and the historical `_config.yml` blobs that contained the
addresses were scrubbed. Verified afterwards across all reachable objects: no
occurrence in author/committer fields, blob contents, or commit messages. Stale
branches were deleted so only `master` remains.

Every commit id changed, so any old clone must be re-cloned rather than pulled.

Caveat worth knowing: a host may keep rewritten objects reachable by exact hash
for a while. The repository was private throughout, so nothing was exposed while
those objects existed. If a hard guarantee is ever needed, recreate the
repository (delete and push the current tree again) rather than relying on the
rewrite alone.

The remaining historical addresses in the log belong to third parties (the 2020
GitHub Learning Lab authors); they are public GitHub identities and are left
untouched.

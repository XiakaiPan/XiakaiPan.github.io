# Research content synchronization — 31 October 2026

Repository baseline: `bb958ad53e339e2c9c082a770107883349ea7d0a`, branch `draft/research-site-2026-10`, Draft PR #10. The repository is private. This update changes research content and explanatory SVG text; it does not deploy, merge, or change visibility.

## Sources read

| Source snapshot | Stable source reference | SHA-256 of source bytes | Website use |
|---|---|---|---|
| `ssg_dt_paper_draft_2026.10.4.3.1.md` | `libfile_36fbb44b73348191a74e1d1d0f96ab16` | `c0b5703eaba7ef385ce1aabd9c6a84533f0035cf6d4561662a624147129c9130` | SSG-DT page, research indexes, twin figure |
| `agent_ssg_paper_draft_2026.10.4.3.1.md` | `libfile_aadf193ed9f881918f2f9312f1709b35` | `45a2d346789b4667a7b3243769787d947638522c73bbd8f1c6b9b02ddcc7a781` | Agent-SSG page, research indexes, architecture figure |
| `tsg_paper_draft_2026.10.4.3.1.md` | `libfile_f30abbd57334819186976917ef732d91` | `1e4df4453e2c9a6bc4f6b07d49503a63a61fe080dfad5d5ca33518a62f05448a` | TSG page, context/CMA/evolution figure, indexes |
| `SSG_working_draft_v2_lean_framing_architecture.md` | `libfile_5d9091826f4881918dd3494edea7b3a5` | `3f7df35cc933adcd805139a2816bb5bc89c866d6f14de7e1a65b53a1f5b8fec0` | Supplemental SSG semantics; does not supersede the attached September submission |

The three calendar-versioned drafts were the newest matching manuscript snapshots returned by Library search. The base SSG lean-framing draft was an older supporting source (29 August metadata); the repository's September submission remains its attached historical artifact. No standalone Three Models draft was resolved in that search. Its page is aligned to the supplied research-program discussion and methodological passages in the current drafts, rather than presented as a completed independent paper.

## Interpretation and evidence

- The Agent-SSG October draft explicitly marks architecture and evaluation as proposed, with results pending. Older website speedups, cache-hit/transfer improvements, and rebinding timings are not asserted as current verified findings. The September PDF remains immutable and available as a historical snapshot.
- The SSG-DT snapshot has a stale 19 October headline, but an explicit 28 October version/literature update. Use the full snapshot ID as authoritative. One early research-question sentence includes Agent workflows, while the paper-family scope and later boundaries explicitly exclude Agent DT. The website follows the repeated explicit boundary: Operator/Trainfer SSG-DT; Agent-SSG-DT is future work dependent on both tracks.
- TSG Context = Owner × Location × Operation(CDC); Actor identifies concrete activity and is a core graph coordinate. Component means reusable capability/structure/unit in the current draft, rather than every consumed input. Instantiation applies the formalism; Intra-/Inter-Task Evolve are the dynamics. Edge algebra and task-identity/adoption semantics remain open.
- Comparisons with PAP, FAOP, DeltaDB, Athanor, SCARCE, Euler, CIG, Cyclotron, Primus, and megakernel systems summarize the drafts' positioning. They are not independently revalidated literature findings or integration claims in this change.
- Keep the six attached PDF/source files and four PNG figures unchanged. Historical version-table descriptions remain attributed to their original snapshots. New source drafts contain internal notes and are not copied wholesale into publicly built assets.

## Maintenance

Update current content and historical artifact metadata separately. A new content summary is not a new compiled PDF release. Retain old URLs; attach a new PDF only when its bytes, source snapshot, authorship, and release status are available. Preserve current section anchors used by the homepage and research index.


## Research portfolio update — 16 November 2026

Presentation update only, not new experimental evidence or a new manuscript.

- The author confirmed that Agent-SSG is now **integrated into SSG's Agent workload scope**; the old standalone page is draft-only and its PDF is excluded from dist.
- Public SSG text discusses Workload/System/Schedule, OpHierarchy/DomainHierarchy, CMC/CRS and Build–Traverse–Translate from later research discussions, but does **not** attribute unverified November results to the archived September paper.
- The September ASPLOS submission received rapid rejection; SSG is now presented as an unreviewed historical technical manuscript.
- Three Models has a research note, not a standalone paper PDF. SSG and TSG have version-specific candidate PDF assets that still require disclosure review.
- The homepage, Statement, Research, Publications, CV and Resume provide different reading paths into one evidence-based research portfolio.
- Only site.config.json publicAssets plus required CSS/favicon are packaged. This does not authorize deployment or publication.

## Author web edition and evidence-first site update — 16 November 2026

An original 13-page September 2026 anonymous SSG manuscript is preserved privately. The author-edition PDF adds one Xiakai Pan cover (no affiliation), preserving original manuscript content as pages 2–14. The file is reproducible from scripts/make-ssg-author-report.mjs and verified by CI for total pages, PDF metadata and extracted text identity; it does not introduce revised scientific results. The public asset whitelist now selects the author edition rather than the anonymous source. Site sections emphasize Overview → Key Figures/Evidence → Full Paper on SSG and TSG; Three Models is still a research note. All candidate approvals remain false until genuine disclosure review.

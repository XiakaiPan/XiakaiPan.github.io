---
title: "Publications and Manuscripts"
permalink: /publications/
description: "Direct PDF downloads, arXiv/conference submission snapshots, and version lineage across SSG and TSG"
---

# Publications and Manuscripts

Current working drafts and historical PDF/source snapshots are indexed separately. The October draft identifiers describe current research content; the linked September and August files retain their original versions. A submission reference does not imply acceptance or a publicly accessible arXiv record.

## Current Working Drafts — 28 October 2026

| Track | Snapshot | Current focus and evidence | Detailed content |
|---|---|---|---|
| **Agent-SSG** | `2026.10.4.3.1` · v0.7 | Dynamic execution regions, effects, lower-level authority, trace witnesses; experimental protocol, results pending | [Current research page](/research/agent-ssg/) |
| **SSG-DT** | `2026.10.4.3.1` | Rule-guided cross-scale generation, attributable physical execution, held-out twin prediction; no measured DT results | [Current research page](/research/ssg-dt/) |
| **TSG** | `2026.10.4.3.1` | Formal evolving-task model; context/core distinction, CMA, evolution, and PAP/FAOP/DeltaDB comparisons | [Current research page](/research/tsg/) |

These pages summarize the current drafts. No October compiled PDF is attached; historical files below remain unchanged.

<div class="jump-bar">
  <span class="jump-label">Jump to Track</span>
  <a class="btn-pill primary" href="#series-a-system-substrate-graph-ssg">Series A: SSG Manuscripts &darr;</a>
  <a class="btn-pill primary" href="#series-b-task-substrate-graph-tsg-and-precursors">Series B: TSG &amp; Precursors &darr;</a>
  <a class="btn-pill" href="#companion-design-specifications-and-in-progress-tracks">In-Progress Tracks &darr;</a>
  <a class="btn-pill" href="/research/">Visual Research Map &rarr;</a>
</div>

---

## Series A: System Substrate Graph (SSG)

<div class="paper-anchor-box" id="paper-ssg-asplos27">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">1. SSG: A Unified System Substrate Graph for Cross-Scale AI Computing</span>
    <span class="badge">ASPLOS'27 Submission Snapshot &middot; Sep-V2.4.7 (2026-09-14)</span>
  </div>
  <div class="paper-meta">
    <strong>Authors:</strong> Xiakai Pan <em>et al.</em> &middot; <strong>Format:</strong> ACM <code>sigplan</code> (11-page body + references &amp; appendices).<br>
    <strong>Summary:</strong> Introduces the unified Compute&ndash;Memory&ndash;Communication (CMC) substrate graph (<code>AbstractSSG &rarr; CalibratedSSG &rarr; InstantiatedSSG</code>), paired <code>OpHierarchy</code> / <code>DomainHierarchy</code>, bounded strategy enumeration, and an executable Backend Realizer evaluated across intra-device kernels (H20), distributed Trainfer (8&times;A800), composite GQA/MoE subgraphs, and out-of-core RS-DSA profiles.<br>
    <strong>Lineage:</strong> <code>Roadmap v1.5.2 (2026-08-06) &rarr; Aug-V2.4.3 &rarr; Aug-V3.0 &rarr; Aug-V4.3.2 &rarr; Sep-V2.4.7 (submission snapshot)</code>.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf">Download PDF (Sep-V2.4.7, 485 KB) &nearr;</a>
    <a class="btn-pill" href="/research/ssg/">SSG Research Page &amp; 3D Space &rarr;</a>
    <a class="btn-pill" href="/research/ssg/#version-history">Full Version Table &rarr;</a>
  </div>
</div>

<div class="paper-anchor-box" id="paper-agent-ssg-mlsys27">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">2. Agent-SSG: A Unified Substrate Graph for Heterogeneous Agentic AI Systems</span>
    <span class="badge">Historical Agent-SSG Manuscript &middot; Sep-V5.2.1 (2026-09-19)</span>
  </div>
  <div class="paper-meta">
    <strong>Authors:</strong> Xiakai Pan <em>et al.</em> &middot; <strong>Format:</strong> 11-page technical manuscript.<br>
    <strong>Summary:</strong> Historical formulation of the agent/model/operator hierarchy and host–device resource coupling. The October draft supersedes the current design/evidence description; numerical performance and runtime-overhead claims in this old snapshot are not endorsed as verified current results.<br>
    <strong>Lineage:</strong> <code>Sep-V5.0 (2026-09-16) &rarr; Sep-V5.1 &rarr; Sep-V5.2.1 (historical) &rarr; October design/protocol draft</code>.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/agent-ssg/v0.1/agent-ssg-mlsys27-v5.2.1.pdf">Download PDF (Sep-V5.2.1, 146 KB) &nearr;</a>
    <a class="btn-pill" href="/research/agent-ssg/">Agent-SSG Research Page &amp; Architecture &rarr;</a>
    <a class="btn-pill" href="/research/agent-ssg/#version-history">Full Version Table &rarr;</a>
  </div>
</div>

---

## Series B: Task Substrate Graph (TSG) and Precursors

<div class="paper-anchor-box" id="paper-tsg-preprint">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">3. Task Substrate Graph: Representing Evolving Human&ndash;AI Tasks</span>
    <span class="badge">Historical TSG Submission Candidate &middot; Sep-V3.1.14 / PDF v3.1.13 (2026-09-20)</span>
  </div>
  <div class="paper-meta">
    <strong>Author:</strong> Xiakai Pan &middot; <strong>Format:</strong> 9-page preprint manuscript + LaTeX source archive.<br>
    <strong>Summary:</strong> Historical formulation of semantic situation and task structure; current context is <code>Owner &times; Location &times; Operation(CDC)</code>, with Actor at activity/node level. Describes the task substrate graph <code>G_T = (V_T, E_T)</code> with <code>Spec = R &times; T &times; C</code>, activity-relative <code>Component / Model / Artifact (CMA)</code> roles, and <code>Instantiation</code> + <code>Intra-Task</code> / <code>Inter-Task Evolve</code> across research, engineering, and creative workflows.<br>
    <strong>Lineage:</strong> <code>TLI Aug-V4.2 + Workbench Aug-V0.1 &rarr; TSG Sep-V3.1 &rarr; Sep-V3.1.13 (PDF) &rarr; Sep-V3.1.14 (historical source) &rarr; October formal research draft</code>.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf">Download PDF (Sep-V3.1.13, 132 KB) &nearr;</a>
    <a class="btn-pill" href="/assets/papers/tsg/v0.1/tsg-preprint-v3.1.14-source.tar.gz">Download v3.1.14 Source (.tar.gz, 19 KB) &nearr;</a>
    <a class="btn-pill" href="/research/tsg/">TSG Research Page &amp; 3-Aspect Diagram &rarr;</a>
  </div>
</div>

<div class="paper-anchor-box" id="paper-tli-precursor">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">4. Thought&ndash;Language Interface (TLI): Typed Cognitive Alignment for Human&ndash;AI Co-Creation</span>
    <span class="badge">TSG Precursor Manuscript A &middot; Aug-V4.2 (2026-08-19)</span>
  </div>
  <div class="paper-meta">
    <strong>Author:</strong> Xiakai Pan &middot; <strong>Format:</strong> 20-page technical manuscript.<br>
    <strong>Summary:</strong> Establishes the typed <code>Intent (Emotion &times; Function &times; Performance)</code> and <code>Operation Structure (Representation &times; Transformation &times; Constraints)</code> interface between human cognitive intent and language-model generation; subsequently integrated as the node-level <code>Spec = R &times; T &times; C</code> contract in TSG.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/tsg/v0.1/tli-aug-v4.2.pdf">Download PDF (Aug-V4.2, 568 KB) &nearr;</a>
    <a class="btn-pill" href="/research/tsg/#historical-lineage-tli-and-workbench-to-tsg">See Role in TSG Lineage &rarr;</a>
  </div>
</div>

<div class="paper-anchor-box" id="paper-workbench-precursor">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">5. Personal Research &amp; Creation Workbench: Auditable Knowledge Accumulation with Multi-Model Deliberation</span>
    <span class="badge">TSG Precursor Manuscript B &middot; Aug-V0.1 (2026-08-19)</span>
  </div>
  <div class="paper-meta">
    <strong>Author:</strong> Xiakai Pan &middot; <strong>Format:</strong> 12-page system &amp; workflow manuscript.<br>
    <strong>Summary:</strong> Presents the file-first entity-relation workbench (468 materials, 140 themes, explicit <code>dissents_from</code> multi-model panel deliberation, and human approval gates) that serves as the persistent object substrate and empirical testbed for TSG.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/tsg/v0.1/workbench-aug-v0.1.pdf">Download PDF (Aug-V0.1, 480 KB) &nearr;</a>
    <a class="btn-pill" href="/research/tsg/#historical-lineage-tli-and-workbench-to-tsg">See Role in TSG Lineage &rarr;</a>
  </div>
</div>

---

## Companion Design Specifications and In-Progress Tracks

| Track / Specification | Status &amp; Wave | Focus &amp; Relationship | Link |
|---|---|---|---|
| **Three Models of World Modeling** | Methodology Foundation (`v1.5.2`) | Barycentric `Formal x Simulation x Statistical` method triangle (`FP -> PP -> LP`) and external `Measurement` anchor | **[Methodology Page](/research/three-models/)** |
| **SSG-DT: Structure-Preserving Digital Twin** | Wave 2 (`T1/T2 x PP`, in progress) | Rule-guided execution generation, physical attribution, and conditional prediction over `InstantiatedSSG`; current draft `2026.10.4.3.1`, results pending | **[SSG-DT Page](/research/ssg-dt/)** |

[Back to Home](/) &middot; [Visual Research Overview](/research/) &middot; [Curriculum Vitae (CV)](/cv/)

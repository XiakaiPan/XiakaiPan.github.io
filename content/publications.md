---
title: "Publications and Manuscripts"
permalink: /publications/
description: "Papers, submitted manuscripts, and working drafts on SSG, TSG, and related work, with direct PDF links."
---

# Publications and Manuscripts

Titles and page counts below match the attached PDFs. Status labels say exactly what each document is: peer-reviewed, submitted, preprint, or working draft.

<div class="jump-bar">
  <a class="btn-pill primary" href="#peer-reviewed">Peer-reviewed &darr;</a>
  <a class="btn-pill" href="#manuscripts">Manuscripts &darr;</a>
  <a class="btn-pill" href="#current-drafts-october-2026">Current drafts &darr;</a>
  <a class="btn-pill" href="#earlier-tsg-drafts">Earlier TSG drafts &darr;</a>
</div>

## Peer-reviewed

<ul class="paper-list">
  <li><span class="pl-title">Style Adaptation module: Enhancing detector robustness to inter-manufacturer variability in surface defect detection</span><span class="pl-meta">Chen Li, Xiakai Pan, et al. &middot; <em>Computers in Industry</em>, 2024</span><a href="https://doi.org/10.1016/j.compind.2024.104084">DOI</a></li>
</ul>

## Manuscripts

<div class="paper-anchor-box" id="paper-ssg-asplos27">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">System Substrate Graph: One Cross-Scale Representation of Workload, System, and Schedule for AI Computing</span>
    <span class="badge">Submitted &middot; September 2026</span>
  </div>
  <div class="paper-meta">
    <strong>Format:</strong> 13 pages, ACM format, anonymized for review.<br>
    <strong>Summary:</strong> Treats execution as <code>Schedule(Workload, System)</code>. AbstractSSG describes the workload, CalibratedSSG the hardware and software capabilities, and a Parallel &times; Pipeline schedule maps one onto the other; InstantiatedSSG records the result as Compute, Remap, and Sync. Evaluated on H20 operators, 8&times;A800 training/inference/RL plans, and live Qwen3 GQA/MoE model paths, with negative results reported alongside positive ones.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf">PDF (485 KB) &nearr;</a>
    <a class="btn-pill" href="/research/ssg/">Project page &rarr;</a>
  </div>
</div>

<div class="paper-anchor-box blue" id="paper-tsg-preprint">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">Task Substrate Graph: A Formal Model of Evolving Human&ndash;AI Tasks</span>
    <span class="badge">Preprint &middot; 24 September 2026</span>
  </div>
  <div class="paper-meta">
    <strong>Author:</strong> Xiakai Pan &middot; <strong>Format:</strong> 27 pages.<br>
    <strong>Summary:</strong> Situates a task by Owner, Location = (Intent, Discipline), and an Operation in Consume, Digest, Create. The structural core is <code>G_T = (V_T, E_T)</code> with <code>V_T &sube; Actor &times; Spec &times; Impl</code>; Component, Model, and Artifact are activity-relative roles; tasks change through Intra-Task and Inter-Task Evolve.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf">PDF (132 KB) &nearr;</a>
    <a class="btn-pill" href="/assets/papers/tsg/v0.1/tsg-preprint-v3.1.14-source.tar.gz">LaTeX source of next revision (19 KB) &nearr;</a>
    <a class="btn-pill" href="/research/tsg/">Project page &rarr;</a>
  </div>
</div>

<div class="paper-anchor-box" id="paper-agent-ssg-mlsys27">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">Agent-SSG: Cross-Layer Scheduling of Agent Workflows on Heterogeneous AI Systems</span>
    <span class="badge">Working draft &middot; September 2026</span>
  </div>
  <div class="paper-meta">
    <strong>Format:</strong> 6 pages, anonymized.<br>
    <strong>Summary:</strong> An earlier formulation of scheduling agent tool calls, model inference, and GPU operators as one execution. The October revision replaces it with a design and evaluation protocol; numerical claims in this draft are not presented as current results.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/agent-ssg/v0.1/agent-ssg-mlsys27-v5.2.1.pdf">PDF (146 KB) &nearr;</a>
    <a class="btn-pill" href="/research/agent-ssg/">Project page &rarr;</a>
  </div>
</div>

## Current Drafts (October 2026)

These revisions have no compiled PDF yet. Their content is summarized on the project pages.

| Project | Snapshot | What the draft contains | Evidence status |
|---|---|---|---|
| [Agent-SSG](/research/agent-ssg/) | `2026.10.4.3.1` &middot; v0.7 | Dynamically revealed agent workloads, effect-aware tool overlap, Agent&rarr;Model&rarr;Operator refinement, matched ablation protocol | Design and protocol; no measurements yet |
| [SSG-DT](/research/ssg-dt/) | `2026.10.4.3.1` | Rule-guided generation of legal execution variants, physical attribution, held-out counterfactual prediction | Design and protocol; no measured twin results yet |
| [TSG](/research/tsg/) | `2026.10.4.3.1` | Refined context/core split, CMA roles, evolution semantics, comparison with DeltaDB, Athanor, FAOP, PAP and others | Formal model; empirical validation open |

## Earlier TSG Drafts

Two August 2026 drafts that TSG later unified. Kept for lineage.

<ul class="paper-list">
  <li id="paper-tli-precursor"><span class="pl-title">Task-Level Intelligence: Task Substrate Graphs for Recursive Intelligent Creation</span><span class="pl-meta">Working draft &middot; August 2026 &middot; 29 pp. &middot; introduced the TSG name and the Representation / Transformation / Constraint specification</span><a href="/assets/papers/tsg/v0.1/tli-aug-v4.2.pdf">PDF</a> &middot; <a href="/research/tsg/#historical-lineage-tli-and-workbench-to-tsg">Lineage</a></li>
  <li id="paper-workbench-precursor"><span class="pl-title">Toward an AI-Native Workbench: Unifying Consume, Digest, and Create through Location and Materialization</span><span class="pl-meta">Working draft &middot; August 2026 &middot; 28 pp. &middot; introduced Consume / Digest / Create and the activity-centred workbench view</span><a href="/assets/papers/tsg/v0.1/workbench-aug-v0.1.pdf">PDF</a> &middot; <a href="/research/tsg/#historical-lineage-tli-and-workbench-to-tsg">Lineage</a></li>
</ul>

## Methodology

[Three Models of World Modeling](/research/three-models/) (Formal, Simulation, Statistical, checked against measurement) is planned as a separate methodology paper. No manuscript is attached yet.

[Home](/) &middot; [Research](/research/) &middot; [CV](/cv/)

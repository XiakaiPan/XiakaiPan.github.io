---
title: Research
permalink: /research/
description: "Overview of Three Models methodology, SSG execution research and TSG task research."
---

# Research

My work studies **explicit structural models for complex AI systems**, with separate questions of what is legal, what can be executed, what can be predicted and what has been observed. Three Models is a methodological perspective; SSG and TSG are two parallel research lines, not two mandatory layers of one compiler.

<figure class="hero-figure">
<img src="/assets/figures/research-program-overview.svg" alt="Three Models methodology above SSG and TSG, with Agent workloads inside SSG">
<figcaption>Updated November 2026: the former Agent-SSG line is integrated into SSG as Agent workload scope. SSG-DT is a performance-modeling direction within the SSG research program.</figcaption>
</figure>

<div class="jump-bar">
<a class="btn-pill primary" href="/statement/">Research Statement</a>
<a class="btn-pill" href="/research/three-models/">Three Models</a>
<a class="btn-pill" href="/research/ssg/">SSG</a>
<a class="btn-pill" href="/research/tsg/">TSG</a>
<a class="btn-pill" href="/publications/">Evidence</a>
</div>

## Methodological Perspective: Three Models

| Model | Core question | Validation |
|---|---|---|
| **Formal** | What structure and transformations are admissible? | Explicit definitions, invariants and counterexamples |
| **Simulation** | What dynamics follow under stated assumptions? | Predictions compared with held-out observations |
| **Statistical** | What can be inferred or learned from experience? | Generalization, regret, estimation and empirical tests |

Physical measurements and observed task histories remain external to these models. Read the [Three Models research note](/research/three-models/); there is no standalone paper PDF yet.

## Research Line A: SSG — AI Computing Execution

**Research object:** heterogeneous mapping and execution of AI workloads.

- **Representation:** Workload, System and Schedule; OpHierarchy and DomainHierarchy; Compute–Memory–Communication (CMC) and selected Compute–Remap–Sync (CRS).
- **Mechanism:** Build independent workload and system descriptions; Traverse legal choices domain by domain; Translate selected structures using target-supported backends.
- **Scope:** operators and composite model graphs; training, inference, RL; dynamically revealed Agent, tool and model calls.
- **Evidence:** a [2026 technical manuscript](/assets/papers/ssg/author-2026-11/ssg-technical-report-xiakai-pan.pdf) with bounded H20 and A800 results, including limitations and numerical failures.

**Agent-level execution is part of SSG, not a separate Agent-SSG project.** A previous Agent-SSG working draft remains a private historical record, not a current paper. [SSG-DT](/research/ssg-dt/) explores performance prediction over selected SSG execution structures; validated twin results remain pending.

[SSG details and measurements](/research/ssg/) · [SSG-DT research](/research/ssg-dt/)

## Research Line B: TSG — Evolving Human–AI Tasks

**Research object:** a persistent task across human/model activities and revisions.

- **Formal structure:** Actor × Spec × Impl with contextual Owner, Location (Intent/Discipline) and Consume/Digest/Create operations.
- **Exchange roles:** Component, Model and Artifact are relative to activities, not exclusive file types.
- **Dynamics:** instantiation and intra-/inter-task evolution, with open questions about identity, evidence and admissible reuse.
- **Evidence:** [2026 preprint](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf) with formal definitions and illustrative trajectories; empirical comparison remains open.

[TSG formalism and history](/research/tsg/)

## Evidence and Research Maturity

| Work | Public evidence candidate | Status |
|---|---|---|
| Three Models | [Research note](/research/three-models/) | Methodological account; no standalone paper |
| SSG | [Technical manuscript](/assets/papers/ssg/author-2026-11/ssg-technical-report-xiakai-pan.pdf) | Measured H20/A800 cases; not peer-reviewed |
| SSG Agent workload | [Integrated SSG research](/research/ssg/#workload-scope-operators-models-and-agents) | Execution scope; new end-to-end validation needed |
| SSG-DT | [Modeling proposal](/research/ssg-dt/) | No measured digital-twin results yet |
| TSG | [Preprint](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf) | Formal research; empirical generalization open |
| Applied computer vision | [Journal DOI](https://doi.org/10.1016/j.compind.2024.104084) | Peer-reviewed, 2024 |

[Publications and materials](/publications/) · [Research Statement](/statement/)

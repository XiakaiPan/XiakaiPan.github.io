---
title: Research
permalink: /research/
description: "Research overview: Three Models methodology, System Substrate Graph (SSG), and Task Substrate Graph (TSG)."
---

# Research

My research investigates how **implicit structure** in AI computing execution and human–AI collaborative work can become **explicit substrate representations** for implementation, analysis, and evolution.

The program connects one methodological foundation (**[Three Models](/research/three-models/)**) with two parallel research series (**[SSG](/research/ssg/)** for the AI computing world and **[TSG](/research/tsg/)** for the evolving task world).

<div class="jump-bar">
  <span class="jump-label">On This Page</span>
  <a class="btn-pill primary" href="#manuscript-and-artifact-index">Manuscript &amp; PDF Index &darr;</a>
  <a class="btn-pill" href="#foundation-three-models-of-world-modeling">1. Three Models</a>
  <a class="btn-pill" href="#series-a-system-substrate-graph-ssg">2. Series A: SSG</a>
  <a class="btn-pill" href="#series-b-task-substrate-graph-tsg">3. Series B: TSG</a>
</div>

<figure class="hero-figure">
  <img src="/assets/figures/research-program-overview.svg" alt="Architectural map of Three Models, SSG series, and TSG series">
  <figcaption><strong>Figure 1 · Architectural Map of the Research Program.</strong> SSG and TSG are parallel in scope—one models execution substrates (Compute, Memory, Communication), while the other models persistent task substrates (<code>Actor &times; Spec &times; Impl</code> and <code>CMA</code>). Both draw on the <em>Three Models</em> methodology without reducing one domain to the other.</figcaption>
</figure>

## Manuscript and Artifact Index

Compiled historical manuscripts and current working-draft descriptions are indexed separately:

| Series / Track | Current research content | Evidence / artifact status | Research page |
|---|---|---|---|
| **Three Models** | Formal, Simulation, Statistical contracts and shared empirical reference | Independent methodology paper planned; no standalone manuscript attached | [Methodology](/research/three-models/) |
| **SSG** | Workload–System–Schedule; Parallel × Pipeline; CMC → CRS; paired hierarchies | [Sep-V2.4.7 PDF](/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf) retained as submission snapshot | [SSG](/research/ssg/) |
| **Agent-SSG** | Dynamic workload, effect-aware overlap, optional model/operator refinement, dispatch witnesses | `2026.10.4.3.1` · 28 October · design/protocol, results pending; [historical PDF](/assets/papers/agent-ssg/v0.1/agent-ssg-mlsys27-v5.2.1.pdf) | [Agent-SSG](/research/agent-ssg/) |
| **SSG-DT** | Rule-guided generation, physical attribution, execution frontiers, held-out counterfactual prediction | `2026.10.4.3.1` · updated 28 October · proposed design/evaluation, no measured DT results | [SSG-DT](/research/ssg-dt/) |
| **TSG** | Context; Actor × Spec × Impl; activity-relative CMA; Intra-/Inter-Task Evolve | `2026.10.4.3.1` · 28 October · formal research draft; [historical PDF](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf) and [source](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.14-source.tar.gz) | [TSG](/research/tsg/) |
| **TSG precursors** | TLI and Workbench historical formulations | [TLI PDF](/assets/papers/tsg/v0.1/tli-aug-v4.2.pdf) · [Workbench PDF](/assets/papers/tsg/v0.1/workbench-aug-v0.1.pdf) | [Historical lineage](/research/tsg/#historical-lineage-tli-and-workbench-to-tsg) |

---

## Foundation — Three Models of World Modeling

**Formal · Simulation · Statistical (anchored against external Measurement)**

<figure class="hero-figure">
  <img src="/assets/figures/three-models-triangle.svg" alt="Three Models barycentric method triangle with external measurement anchor">
  <figcaption><strong>Figure 2 · The Method Triangle &amp; External Measurement Anchor.</strong> Formal defines structure and admissibility; Simulation predicts conditional behavior; Statistical learns regularities and decisions from data. Engineering prototypes occupy interior barycentric points (FP &rarr; PP &rarr; LP), all audited against real hardware/empirical measurement outside the triangle.</figcaption>
</figure>

- **Formal models (Legality):** Explicit objects, relations, invariants, and admissible transformations.
- **Simulation models (Value & Dynamics):** State transitions, calibrated cost models, and counterfactual interventions.
- **Statistical models (Search & Amortization):** Parameter estimation from observations and learned policies over legal spaces.

[Explore Three Models methodology &rarr;](/research/three-models/)

---

## Series A — System Substrate Graph (SSG)

**Modeling the execution world of AI computing**

SSG studies a unified representation for **Workload, System, and Schedule** built on Compute, Memory, and Communication (CMC). Rather than treating operator compilers, distributed training/inference frameworks, and agent runtimes as separate worlds, SSG factorizes them along a **3D research space**:

<figure class="hero-figure">
  <img src="/assets/figures/ssg-research-space-3d.svg" alt="SSG 3D Research Space across Workload/System scope, Model Capability, and Productization Investment">
  <figcaption><strong>Figure 3 · SSG 3D Planning Cube &amp; Wave Envelopes.</strong> Axis 1 spans T1 (Operators), T2 (Trainfer: Training + Inference + RL), and T3 (Heterogeneous Agent + Host/Device mixtures). Axis 2 progresses through Function (FP), Performance (PP), and Learnable (LP) prototypes. Axis 3 governs MVP &rarr; MMP engineering investment.</figcaption>
</figure>

- **[SSG (Core Representation & Realization)](/research/ssg/):** Cross-scale `AbstractSSG -> CalibratedSSG -> InstantiatedSSG` pipeline, bounded enumeration, and supported kernel/framework realization (**[PDF Sep-V2.4.7](/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf)**).
- **[Agent-SSG (Cross-Level Composition)](/research/agent-ssg/):** Extending the workload scope (Tick T3) to coding agents, tool calls, Host CPU/NUMA staging, and GPU model/operator execution (current draft `2026.10.4.3.1`; [historical PDF](/assets/papers/agent-ssg/v0.1/agent-ssg-mlsys27-v5.2.1.pdf)).
- **[SSG-DT (Execution / Simulation Correspondence)](/research/ssg-dt/):** Structure-preserving performance prediction, compositional error attribution, and counterfactual hardware/software co-design.

---

## Series B — Task Substrate Graph (TSG)

**Modeling the evolving task world of human–AI collaboration**

TSG investigates how long-horizon tasks persist and evolve as work moves across humans, AI models, sessions, and harnesses—without collapsing the task into a prompt, chat log, or static workflow DAG.

<figure class="hero-figure">
  <img src="/assets/figures/tsg-three-aspects.svg" alt="TSG Three Aspects: Task Graph Structure, Activity-Relative CMA Roles, and Evolution">
  <figcaption><strong>Figure 4 · Three Core Aspects of TSG.</strong> (1) Semantic situation (<code>Owner &times; Location &times; Operation(CDC)</code>; current Actor identified per activity) and structural core <code>V_T &sube; Actor &times; Spec(R,T,C) &times; Impl</code>; (2) Activity-relative exchange roles (<code>Component · Model · Artifact</code>); (3) Instantiation of the formalism, followed by <code>Intra-Task</code> and <code>Inter-Task</code> evolution.</figcaption>
</figure>

[Explore TSG research, manuscripts &amp; version history &rarr;](/research/tsg/)


## Relationships Between Research Tracks

SSG and Agent-SSG establish execution foundations at different workload/system scopes. SSG-DT develops prediction over supported Operator/Trainfer realizations. A future **Agent-SSG-DT** would depend jointly on Agent-SSG execution and SSG-DT modeling; it is not yet an attached manuscript. Learnable prototypes remain a further capability direction. Each scope/capability cell has its own MVP → MMP engineering progression.

TSG is parallel to this portfolio. It can describe the research process developing SSG and can delegate computational activities to a substrate such as Agent-SSG, but neither series requires reducing its research object to the other. Three Models is an independent methodology paper, not a publication prerequisite for either series.

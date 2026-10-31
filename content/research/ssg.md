---
title: "System Substrate Graph (SSG)"
permalink: /research/ssg/
description: "Unified Workload-System-Schedule representation across operators, training/inference/RL, and heterogeneous hardware"
---

[Research](/research/) / SSG series

# System Substrate Graph (SSG)

**Modeling the AI computing execution world &middot; Unified Workload &times; System &times; Schedule representation**

SSG investigates how a single substrate graph built from **Compute, Memory, and Communication (CMC)** can represent, enumerate, and realize legal execution strategies across intra-device kernels (Warp / CTA / SM) and inter-device distributed workloads (DP / TP / PP / EP).

<div class="jump-bar">
  <span class="jump-label">Quick Jump</span>
  <a class="btn-pill primary" href="/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf">Download Paper PDF (Sep-V2.4.7) &nearr;</a>
  <a class="btn-pill" href="#ssg-3d-research-space">3D Research Space &darr;</a>
  <a class="btn-pill" href="#core-architecture-abstract-calibrated-and-instantiated-ssg">Core Architecture &darr;</a>
  <a class="btn-pill" href="#manuscripts-and-artifacts">Manuscript &amp; Abstract &darr;</a>
  <a class="btn-pill" href="#version-history">Version History &darr;</a>
</div>

<div class="paper-anchor-box">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">SSG: A Unified System Substrate Graph for Cross-Scale AI Computing</span>
    <span class="badge">ASPLOS'27 Submission Snapshot &middot; Sep-V2.4.7 (Promoted 2026-09-14)</span>
  </div>
  <div class="paper-meta">
    <strong>Target &amp; Format:</strong> ASPLOS 2027 submission cycles &middot; 11-page body + references &amp; appendices (<code>acmart sigplan</code>).<br>
    <strong>Key Contribution:</strong> Factorizing the <code>M &times; N &times; K</code> workload&ndash;schedule&ndash;system explosion via paired <code>OpHierarchy</code> and <code>DomainHierarchy</code>, bounded strategy enumeration, and an executable Backend Realizer evaluated on NVIDIA H20 and A800.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf">Open Compiled PDF (Sep-V2.4.7, 485 KB) &nearr;</a>
    <a class="btn-pill" href="#manuscripts-and-artifacts">Read Full Abstract &amp; Scope &darr;</a>
    <a class="btn-pill" href="#version-history">View Draft &amp; Freeze Lineage &darr;</a>
  </div>
</div>

## SSG 3D Research Space

Rather than conflating kernel codegen, distributed scheduling, performance simulation, and agent orchestration into a single monolithic claim, the SSG program is organized as a **three-axis planning cube** with explicit wave gates:

<figure class="hero-figure">
  <img src="/assets/figures/ssg-research-space-3d.svg" alt="SSG 3D Research Space spanning Workload & System Scope, Model Capability (FP/PP/LP), and MVP/MMP Investment">
  <figcaption><strong>Figure 1 &middot; SSG 3D Research Space &amp; Cumulative Wave Staging.</strong> <strong>Axis 1 (Workload &amp; System):</strong> T1 (Operators &amp; Subgraphs) &rarr; T2 (Trainfer = Training + Inference + RL) &rarr; T3 (Heterogeneous Agent + Host/Device mixtures). <strong>Axis 2 (Model Capability):</strong> Function Prototype (FP) &rarr; Performance Prototype (PP / <a href="/research/ssg-dt/">SSG-DT</a>) &rarr; Learnable Prototype (LP). <strong>Axis 3 (Investment):</strong> MVP (paper evidence) &rarr; MMP (frozen spec extensible by third parties).</figcaption>
</figure>

## Core Architecture: Abstract, Calibrated and Instantiated SSG

Between open frontend IRs (PyTorch FX, ONNX, Triton, StableHLO) and closed vendor backends, SSG provides a hardware-independent **Schedule &amp; Resource Orchestration IR** built around three graph objects and a **Build&ndash;Traverse&ndash;Translate (BTT)** pipeline:

<div class="fig-grid">
  <figure class="hero-figure">
    <img src="/assets/figures/ssg-mnk-overview-paper.png" alt="MNK factorization overview from SSG ASPLOS27 paper">
    <figcaption><strong>Figure 2 &middot; Factorizing the M &times; N &times; K Space (Paper &sect;1).</strong> Instead of hand-crafting per-cell implementations for every workload, schedule, and hardware target, SSG shares a unified Workload/Schedule substrate across system bindings.</figcaption>
  </figure>
  <figure class="hero-figure">
    <img src="/assets/figures/ssg-workload-system-paper.png" alt="Paired Workload and System hierarchies in SSG">
    <figcaption><strong>Figure 3 &middot; Paired Workload &amp; System Hierarchies (Paper &sect;3).</strong> Workload data tiles (<code>DT</code>) and intermediate memories (<code>IM</code>) align structurally with hardware compute cores (<code>CC</code>), memory tiers (<code>Mem</code>), and candidate communication edges.</figcaption>
  </figure>
</div>

| Stage | Graph Object | Structural Elements | Role in Pipeline |
|---|---|---|---|
| **1. Software Workload** | `AbstractSSG` | `ComputeNode`, `MemoryNode` (GM anchors), `CommunicationEdge` | Canonical workload IR imported via `cg2ssg` across operators and MacroOps |
| **2. Hardware System** | `CalibratedSSG` (`Substrate`) | `Node` (compute/memory), `Domain` tree (`parent__child`), candidate `PhysicalEdge` | Encodes hardware hierarchy capacities, legal communication primitives (`lsu`, `cp.async`, `tma`, `nvlink`), and sync scopes |
| **3. SW &times; HW Binding** | `InstantiatedSSG` | Committed per-Domain tiling, placement, pipeline stages, and selected `edge_id`s | Verified legal execution plan consumed by the **Backend Realizer** (or **[SSG-DT](/research/ssg-dt/)** simulator) |

### Evaluation Groups in Paper 1 (`Sep-V2.4.7`)

<div class="fig-grid">
  <figure class="hero-figure">
    <img src="/assets/figures/ssg-g1-strategy-space.png" alt="Group 1 enumerated strategy space projection">
    <figcaption><strong>Figure 4 &middot; Group 1: Operator Strategy Enumeration &amp; Legality.</strong> Bounded enumeration projects legal candidate strategies across Domain boundaries and memory-movement primitives on NVIDIA H20.</figcaption>
  </figure>
  <figure class="hero-figure">
    <img src="/assets/figures/ssg-g3-fusion-ladder.png" alt="Group 3 GQA subgraph fusion ladder">
    <figcaption><strong>Figure 5 &middot; Group 3: Subgraph Realization &amp; Fusion Ladder.</strong> Progressive cross-operator realization (QKV projection &rarr; RMSNorm/RoPE &rarr; Attention) with numerical correctness verification.</figcaption>
  </figure>
</div>

- **Group 1 (Intra-Device Operators):** Bounded enumeration, legality filtering, and CUDA/Triton realization for GEMM on NVIDIA H20.
- **Group 2 (Distributed Trainfer &mdash; Training / Inference / RL):** Cross-device DP &times; TP &times; PP strategy trade-offs, pipeline ratio sweeps, and disaggregated prefill/decode analysis on 8&times;A800.
- **Group 3 (Composite Model Subgraphs):** Multi-operator GQA producer/consumer chains and MoE routing/expert execution paths, plus out-of-core **RS-DSA** capability-profile validation (Appendix B).

## Manuscripts and Artifacts

### Primary Manuscript: *SSG: A Unified System Substrate Graph for Cross-Scale AI Computing*

- **Current Version:** `Sep-V2.4.7[cursor]` (HotCRP submission snapshot `asplos27-sep-paper2050`, promoted 2026-09-14).
- **Direct PDF:** **[ssg-asplos27-v2.4.7.pdf](/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf)** (11 pages body + references &amp; appendices).
- **Claim Modality:** *Attainability and structural coverage*, not universal superiority over hand-tuned vendor libraries. Calibrated runtime prediction and hardware co-design are explicitly scoped to **[SSG-DT](/research/ssg-dt/)**.

## Version History

| Date | Version Tag | Artifact / Snapshot | Substantive Changes &amp; Provenance |
|---|---|---|---|
| **2026-09-14** | `Sep-V2.4.7` | **[PDF v2.4.7](/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf)** (`59648bc`) | Promoted HotCRP ASPLOS'27 submission to live paper SoT; finalized 11-page rapid-review intro, G1&ndash;G3 measured figures (H20 &amp; A800), and RS-DSA appendix. |
| **2026-08-29** | `Aug-V4.3.2` | Frozen archive (`Sep-pre-V2.4.7`) | Completed D1&ndash;D21 alignment decisions, honesty wording audit on unmeasured cells, and paired Workload&ndash;System TikZ diagrams (`482ad83`). |
| **2026-08-18** | `Aug-V3.0` | Frozen archive (`Aug-pre-V4`) | Four-lane review synthesis (`9ab8a15`); landed measured experiment figures and unified `AbstractSSG / CalibratedSSG / InstantiatedSSG` prose. |
| **2026-08-14** | `Aug-V2.4.3` | Draft snapshot (`1b24d45`) | First complete 11-page ACM `acmart` LaTeX build and related-work integration (including TAOT, CUDA Tile IR, and CuTe dialect comparisons). |
| **2026-08-06** | `Roadmap v1.5.2` | Design spec (`d-ssg-research-roadmap`) | Established the 3D Planning Cube (`Workload&System x Model Capability x Investment`), Wave 1&ndash;4 envelopes, and external Measurement anchor. |

[Explore Companion Track: Agent-SSG &rarr;](/research/agent-ssg/) &middot; [Explore Companion Track: SSG-DT &rarr;](/research/ssg-dt/) &middot; [All Publications](/publications/)
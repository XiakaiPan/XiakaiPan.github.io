---
title: "System Substrate Graph (SSG)"
permalink: /research/ssg/
description: "Workload-System-Schedule across operators, model workloads, and Agent execution"
---

[Research](/research/) / SSG series

# System Substrate Graph (SSG)

**Heterogeneous execution · Workload × System × Schedule · Operator, Model and Agent workloads**

SSG studies how explicit **Compute, Memory, Communication (CMC)** structures represent and constrain execution across operator kernels, training/inference/RL and dynamically revealed Agent/tool/model workloads. Extending a representation does not itself prove end-to-end executability or performance.

<div class="jump-bar">
  <span class="jump-label">Quick Jump</span>
  <a class="btn-pill primary" href="/assets/papers/ssg/author-2026-11/ssg-technical-report-2026-11.pdf">Full Paper PDF &nearr;</a>
  <a class="btn-pill" href="#measured-results">Measured Results &darr;</a>
  <a class="btn-pill" href="#workload-scope-operators-models-and-agents">Workload Scope &darr;</a>
  <a class="btn-pill" href="#key-figures-and-evidence">Figures &amp; Mechanism &darr;</a>
  <a class="btn-pill" href="#full-paper-and-versions">Full Paper &amp; Versions &darr;</a>
  <a class="btn-pill" href="#version-history">Version History &darr;</a>
</div>

<div class="paper-anchor-box">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">System Substrate Graph: One Cross-Scale Representation of Workload, System, and Schedule for AI Computing</span>
    <span class="badge">Technical manuscript · 2026 · not peer-reviewed</span>
  </div>
  <div class="paper-meta">
    <strong>Authors:</strong> Xiakai Pan, Peichao Han<br>
    <strong>Format:</strong> 14-page author edition: cover plus original 13-page ACM-format manuscript, unchanged.<br>
    <strong>Contributions:</strong> (1) paired Op and System hierarchies over shared Compute&ndash;Memory&ndash;Communication, bound by a Parallel &times; Pipeline schedule and materialized as Compute&ndash;Remap&ndash;Sync; (2) a Build / Traverse / Translate architecture that separates graph transformation from strategy mapping; (3) a three-group evaluation on H20 and 8&times;A800 that reports representation, legality, correctness, and measured performance as separate evidence states.
  </div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/ssg/author-2026-11/ssg-technical-report-2026-11.pdf">Author edition PDF (14 pp.) &nearr;</a>
    <a class="btn-pill" href="#measured-results">Measured results &darr;</a>
    <a class="btn-pill" href="#version-history">Versions &darr;</a>
  </div>
</div>

## Overview: Research Question and Scope

SSG asks whether explicit Workload, System, and Schedule structures can make otherwise fragmented AI execution decisions expressible, constrained, translatable, and experimentally testable. Its central design is a separation of workload structure, resource capabilities, legal mapping, and target-specific realization.

### Scope and Evidence Boundaries

SSG now treats **Agent/tool/model execution as a Workload scope**, alongside operators and model training/inference/RL. The former Agent-SSG label is historical and no longer designates an independent active research line. SSG-DT is a predictive modeling direction, not the definition of the functional substrate.

A public research overview emphasizes the representation and evidence boundaries, rather than internal execution roadmaps and experimental resource plans.

## Key Figures and Evidence

The figures describe the structural motivation, workload/system hierarchies, bounded strategy space, and implementation evidence from the historical manuscript. They are not evidence of unmeasured generality across all Agent workloads or accelerators.

### Core Architecture: Abstract, Calibrated and Instantiated SSG

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

### Execution Semantics: CMC to CRS

**CMC (Compute–Memory–Communication)** describes workload/system structure before a mapping is chosen. **CRS (Compute–Remap–Sync)** describes the selected execution. The relationship is not a one-to-one renaming: a logical communication relation can become a local layout change, a transfer, a collective, or no materialized transfer when a realization removes the boundary.

`AbstractSSG(W)` and `CalibratedSSG(S)` are independent Build outputs. Traverse binds them with a Schedule **domain by domain** and chooses among the supported compute resources (which may include scalar, vector and tensor units), partitions, Remap and Sync decisions. Instantiate records that mapping; Translate realizes it with a supported backend. Hardware-specific execution templates belong at the Translate boundary, not in the shared middle representation. The System object's historical name, CalibratedSSG, does not imply digital-twin timing calibration.

### Schedule as Parallel × Pipeline

The lean-framing working draft organizes Schedule into **Parallel** (partitioning, replication, ownership, and placement) and **Pipeline** (staging, ordering, buffering, and overlap). DP/TP/EP/FSDP and PP/1F1B are specific projections or compositions within those families. The schematic `M × N × K` authoring surface motivates reuse across hardware, workloads, and strategies; it is not a proved asymptotic complexity reduction.

Compute tiling semantics separate **Input Partializability, Output Finalization, and Ordering Constraint (IPOFOC)**. Compute–compute fusion needs compatible partitions, finalization, and ordering. Compute–Remap fusion additionally depends on the selected execution and target capabilities. Remap requirements can originate in workload communication, hardware layout adaptation, or mapping/execution boundaries.

## Workload Scope: Operators, Models, and Agents

| Workload scope | Execution question | Evidence |
|---|---|---|
| **Operator / Subgraph** | Tiling, compute-unit selection, fusion and memory movement | Bounded H20 operator experiments in the September manuscript |
| **Model / Trainfer** | Training, inference and RL scheduling and model-subgraph execution | Selected 8×A800 framework experiments in the September manuscript |
| **Agent / Tool / Model** | Dynamically revealed tasks, CPU tool calls, model invocation and traceable cross-layer dispatch | Integrated SSG research direction; new end-to-end measurements pending |

The earlier **Agent-SSG** name is retained only for historical provenance; its execution scope is now **part of SSG**, not an independent graph formalism or paper. Dynamic workloads require explicit dependencies, effects and execution witnesses. No Agent speedup is inherited from earlier operator/model measurements.

The [SSG-DT](/research/ssg-dt/) extension develops prediction and hardware/software what-if analyses over supported SSG execution plans. Its results remain unvalidated at the general level. TSG remains an independent task-world research line.

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
- **Group 2 (Trainfer framework experiments):** The attached submission reports selected DP/TP/PP and prefill/decode studies on A800. Representational coverage of training/inference/RL does not establish every scale-out or RL execution path as physically validated.
- **Group 3 (Composite Model Subgraphs):** Multi-operator GQA producer/consumer chains and MoE routing/expert execution paths, plus **RS-DSA** capability-profile discussion (Appendix B), distinct from measured cross-hardware portability.

## Measured Results

Numbers reported in the September 2026 technical manuscript (&sect;5&ndash;7). They cover single-node H20 and 8&times;A800 configurations only.

| Scope | Result | How to read it |
|---|---|---|
| **Operator: GEMM (H20)** | 2,892&ndash;2,988 legal candidates per shape; generated kernels reach **49.6&ndash;110.1% of cuBLAS** on nine FP16 shapes, elementwise identical to the reference | Best-in-pool per shape, not automatic selection |
| **Operator: correctness funnel** | 194 of 482 measured variants (40.2%) fail correctness; 77 pipelined variants fail while their 77 parallel pairs pass | Legality and correctness are reported as separate stages |
| **Operator: row reduction** | **1.09&ndash;2.79&times;** CUB throughput on all 66 declared cases | Mostly from one fused launch vs. two library launches |
| **Framework: inference (8&times;A800)** | Qwen3-8B at offered load 512: DP4&times;TP2 reaches 7,781 tok/s, **+57% over TP8** | The best binding moves with load; one Schedule vocabulary covers DP/TP/PP |
| **Framework: transport** | PP2&times;TP4 vs. TP8 ratio spans 0.59&ndash;1.03 on NVLink and 0.86&ndash;3.40 with P2P disabled (Qwen3-8B) | The preferred binding also moves with the System input |
| **Framework: training / RL** | SFT scales 1.316&times; from 4 to 8 devices (65.8% efficiency); two RL resource partitions give 13.05 s and 22.32 s step times | Plans emitted to framework-native execution |
| **Model path: Qwen3 MoE** | A mixed execution configuration records 205.0 tok/s, 95.6% of framework decode throughput, with substantially slower prefill | Graph capture records 48 fallbacks, so decode replay can use the framework implementation. This measures the mixed configuration, not isolated SSG-router throughput or an end-to-end speedup |

## Full Paper and Versions

**[Download the complete SSG Technical Report — Xiakai Pan and Peichao Han, Author Web Edition (PDF, 14 pages)](/assets/papers/ssg/author-2026-11/ssg-technical-report-2026-11.pdf).**

The new first page identifies the author, without institutional affiliation; pages 2–14 preserve the original anonymous September 2026 technical manuscript unchanged. The additional cover is **not a revised experiment or a peer-reviewed publication**. The original 13-page anonymous PDF remains in the private source repository, rather than being shipped as a second public paper.

### Manuscript Scope and Status

### *System Substrate Graph: One Cross-Scale Representation of Workload, System, and Schedule for AI Computing*

- **Status:** September 2026 technical manuscript (Sep-V2.4.7), not peer-reviewed; later research content is kept distinct from this historical snapshot.
- **Public PDF:** **[Author Web Edition — full technical report](/assets/papers/ssg/author-2026-11/ssg-technical-report-2026-11.pdf)** (14 pages, including the new cover).
- **Claim Modality:** *Attainability and structural coverage*, not universal superiority over hand-tuned vendor libraries. Calibrated runtime prediction and hardware co-design are explicitly scoped to **[SSG-DT](/research/ssg-dt/)**.

## Version History

**2026-11-16 — [SSG Author Web Edition (PDF)](/assets/papers/ssg/author-2026-11/ssg-technical-report-2026-11.pdf):** attribution cover plus unchanged original body, not a new scientific version.


| Date | Version Tag | Artifact / Snapshot | Substantive Changes &amp; Provenance |
|---|---|---|---|
| **2026-09-14** | `Sep-V2.4.7` | Private anonymous historical PDF | Historical manuscript: revised introduction, G1&ndash;G3 measured figures (H20 and A800), RS-DSA appendix. |
| **2026-08-29** | `Aug-V4.3.2` | Internal draft | Terminology alignment, wording audit of unmeasured claims, paired Workload&ndash;System diagrams. |
| **2026-08-18** | `Aug-V3.0` | Internal draft | First measured experiment figures; unified `AbstractSSG / CalibratedSSG / InstantiatedSSG` terminology. |
| **2026-08-17** | `Aug-V2.4.3` | Internal draft | First complete ACM-format build; related work including TAOT, CUDA Tile IR, and CuTe. |
| **2026-08-06** | `Roadmap v1.5.2` | Research plan | Three-axis research space (scope &times; model capability &times; engineering maturity), staged waves, measurement kept separate from simulation. |

[SSG-DT modeling direction &rarr;](/research/ssg-dt/) &middot; [All Publications](/publications/)

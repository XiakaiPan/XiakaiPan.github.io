---
title: "SSG-DT: Structure-Preserving Digital Twin"
permalink: /research/ssg-dt/
description: "Calibrated multi-fidelity simulation and hardware/software co-design on the System Substrate Graph"
---

[Research](/research/) / [SSG series](/research/ssg/) / SSG-DT

# SSG-DT: Structure-Preserving Digital Twin

**Performance Prototype (PP) of SSG &middot; Calibrated simulation &amp; counterfactual hardware/software co-design**

While **[Paper 1 (SSG)](/research/ssg/)** establishes the formal representation and executable Backend Realizer (**Function Prototype, FP**), **SSG-DT** develops the **Performance Prototype (PP)** along the Model Capability axis: a calibrated, structure-preserving digital twin that consumes the exact same `InstantiatedSSG` plans to predict latency, memory traffic, and bottleneck shifts across multi-fidelity regimes (`D1 / D2 / D3`).

<div class="jump-bar">
  <span class="jump-label">On This Page</span>
  <a class="btn-pill primary" href="#execution-and-simulation-structural-correspondence">Structural Correspondence &darr;</a>
  <a class="btn-pill" href="#multi-fidelity-ladder-d1-d2-d3">Multi-Fidelity (D1/D2/D3) &darr;</a>
  <a class="btn-pill" href="#roadmap-and-manuscript-status">Roadmap &amp; Status &darr;</a>
  <a class="btn-pill" href="/research/ssg/">Base SSG Paper (Sep-V2.4.7) &rarr;</a>
</div>

<figure class="hero-figure">
  <img src="/assets/figures/ssg-dt-correspondence.svg" alt="SSG-DT Structure-Preserving Execution-Simulation Correspondence">
  <figcaption><strong>Figure 1 &middot; Structure-Preserving Execution&ndash;Simulation Correspondence.</strong> A single committed <code>InstantiatedSSG</code> drives both real execution (Path A: Backend Realizer &rarr; CUDA/Triton/NCCL) and calibrated performance simulation (Path B: SSG-DT &rarr; D1/D2/D3). Neither path flattens the graph into an ad-hoc analytical formula, guaranteeing node- and edge-level attribution alignment.</figcaption>
</figure>

## Execution and Simulation Structural Correspondence

Most performance models for deep learning either rely on coarse analytical roofline formulas (which miss schedule-dependent pipelining and memory-bank conflicts) or cycle-level hardware simulators (which cannot scale to multi-GPU training/inference). SSG-DT enforces a **strict structural isomorphism** between execution and simulation:

- **Shared Input Contract:** SSG-DT takes the exact `InstantiatedSSG` produced by the Resolver (`Build -> Traverse -> Translate`)&mdash;with committed tile sizes, memory placements, pipeline stages, and selected `PhysicalEdge` primitives.
- **Calibration from Micro-Benchmarks &amp; Realizer Runs:** Hardware node efficiencies (`eta_compute`) and edge transfer curves (`BW_eff(size, stride, contention)`) in `CalibratedSSG` are fitted against physical micro-benchmarks and audited against Path A Realizer traces.
- **Counterfactual Hardware Co-Design:** By perturbing `CalibratedSSG` parameters (e.g., SM/TMA bandwidth ratios, L2 capacity, inter-node scale-up vs. scale-out links, or **RS-DSA** specialized engines), SSG-DT evaluates candidate architectures over the full enumerated strategy space without requiring silicon.

## Multi-Fidelity Ladder: D1 / D2 / D3

| Fidelity Tier | Granularity | Primary Mechanism | Target Use Case |
|---|---|---|---|
| **D1 &middot; Analytical Roofline** | Subgraph / MacroOp | Peak capacity &amp; bottleneck bound over `CalibratedSSG` capacities | Fast pruning during large-scale `Traverse` enumeration (`10^4+` candidates/sec) |
| **D2 &middot; Event-Driven Critical Path** | Tile / Pipeline Stage | Token/tile dependency DAG with async overlap (`cp.async`, `tma`, double-buffering) and collective queuing | Accurate strategy ranking and intra-/inter-device trade-off attribution |
| **D3 &middot; Contention-Calibrated Hybrid** | Sub-tile / Shared Resource | Calibrated contention penalties for shared memory banks, L2 cache pressure, and NVLink/PCIe arbitration | High-fidelity audit of top-*k* strategies and counterfactual DSA architecture studies |

## Roadmap and Manuscript Status

Within the **[SSG 3D Research Space](/research/ssg/#ssg-3d-research-space)** (`d-ssg-research-roadmap v1.5.2`), SSG-DT corresponds to **Wave 2 (`T1/T2 x PP`)**:

- **Foundation Landed in Paper 1 (`Sep-V2.4.7`):** The `CalibratedSSG` hardware substrate schema, capability profiles (including **RS-DSA** out-of-core validation in Appendix B), and the `InstantiatedSSG` dual-consumption interface are already frozen and verified in the **[SSG ASPLOS'27 submission](/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf)**.
- **Active SSG-DT Track (`in progress`):** Expanding D2/D3 calibrated event simulation, cross-hardware transfer validation (H20 / A800 / counterfactual DSA profiles), and systematic ranking-fidelity audits against measured Realizer sweeps.

[Back to SSG Series Overview &rarr;](/research/ssg/) &middot; [Explore Companion Track: Agent-SSG &rarr;](/research/agent-ssg/) &middot; [Explore Methodology: Three Models &rarr;](/research/three-models/)
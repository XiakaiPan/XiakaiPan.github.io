---
draft: true
title: "Agent-SSG: Agent-to-Operator Execution"
permalink: /research/agent-ssg/
description: "Dynamically revealed workloads, effect-aware scheduling, and traceable Agent–Model–Operator execution"
---

[Research](/research/) / [SSG series](/research/ssg/) / Agent-SSG

# Agent-SSG (historical archive — merged into SSG)

**Private source only:** this historical draft is no longer a separate active public project. Agent execution is integrated into [SSG](/research/ssg/#workload-scope-operators-models-and-agents).

**A Unified Workload–System–Schedule Substrate for Agent-to-Operator Execution**

An agent alternates model inference, repository inspection, compilation, tests, and external state updates. The critical path crosses CPU tools and GPU execution, while the scheduling choices inside a model call usually belong to another runtime. Agent-SSG investigates whether those choices can participate in one executable Workload–System–Schedule representation, continuing from **Agent → Model → Operator** wherever a backend exposes the required control.

<div class="jump-bar">
<a class="btn-pill primary" href="#architecture-l0-l1-l2-on-heterogeneous-substrates">Architecture</a>
<a class="btn-pill" href="#dynamic-workload-and-legal-overlap">Dynamic Workload</a>
<a class="btn-pill" href="#key-findings-and-evaluation">Evaluation Protocol</a>
<a class="btn-pill" href="#version-history">Versions</a>
</div>

**Current working draft:** `2026.10.4.3.1` · 28 October 2026 (manuscript v0.7). **Status:** proposed design and experimental protocol; measured results remain pending. The [September PDF](/assets/papers/agent-ssg/v0.1/agent-ssg-mlsys27-v5.2.1.pdf) is retained as a historical snapshot. Its numerical claims are not carried forward as verified results of this revision.

## Architecture: L0 / L1 / L2 on Heterogeneous Substrates

<figure class="hero-figure">
<img src="/assets/figures/agent-ssg-architecture.svg" alt="Proposed Agent–Model–Operator hierarchy paired with supported CPU–GPU resources">
<figcaption><strong>Proposed scope.</strong> Agent/tool regions can remain opaque; model regions refine into lower-level SSG structure only through implemented adapters. The wider hardware hierarchy illustrates representational scope. Initial validation targets a single CPU–GPU node.</figcaption>
</figure>

| Object | Extension | Execution contract |
|---|---|---|
| **Workload / AbstractSSG** | Agent, tool, and model-invocation regions; hierarchical refinement; data, completion, and effect-ordering edges | Preserve inputs, visibility, completion, and effects when a region is refined |
| **System / CalibratedSSG** | CPU pools, host memory, accelerator partitions, transfer paths, and runtime capabilities | A resource is selectable only through a supported executor or backend adapter |
| **Schedule / InstantiatedSSG** | Placement, temporal overlap, eligible model configurations, and lower-level operator strategies | Translate the selected plan into actual dispatches and retain their identities |

**Build** constructs the currently known workload and capability-aware system. **Traverse** selects a legal mapping through the paired hierarchies. **Translate** dispatches tool executors, model adapters, and supported SSG realizations. An opaque RPC is a valid leaf; drawing operator descendants beneath it does not establish control over their execution.

## Dynamic Workload and Legal Overlap

At scheduling instant `t`, `W_t = (V_t, E_t, R_t, F_t)` records known regions, typed dependencies, refinement relations, and runtime affordances. A tool or model response can reveal additional work: `W_(t+1) = Extend(W_t, ΔW_t)`. The scheduler does not know unresolved future branches; full future traces belong only to a separately labeled oracle comparison.

Each tool region needs a conservative effect summary: reads, writes, external side effects, and completion/visibility requirements. Overlap requires both dependency independence and absence of effect conflicts. Unknown or non-replayable effects restrict reordering. For example, independent read-only inspections may overlap, but a test that consumes a patch must observe the completed write.

**Authorization is a separate contract.** A dependency-safe tool call may still lack permission. The latest draft uses PAP/Touba as a comparator for guarded admission and responsibility; Agent-SSG schedules admitted operations and retains any admission witness through refinement. This is a proposed interface, not an implemented Touba integration or a security proof.

## Refinement Witness and Execution Coverage

A proposed witness connects `(agent region, model region, operator region, schedule, artifact, dispatch event)`. This makes it possible to ask whether an upper-level choice changed the lower-level artifact that actually ran. The witness is an audit mechanism under investigation, rather than a proof of semantic equivalence.

Coverage must be reported separately at each stage:

**Represented → Legal → Selected → Realized → Executed → Measured.**

A motivating experiment is a scheduling reversal: a model-only tuner favors one operator strategy, while another leaves resources available for a CPU/GPU stage on the agent's critical path and completes the entire task sooner. The draft treats this as a hypothesis to test, not an observed result.

## Key Findings and Evaluation

**This section describes planned tests; no current performance findings are asserted.** The primary workload is an inference-only coding agent with repository inspection, generation, patching, compilation/testing, and dynamic continuation. A bounded non-coding workflow tests representation reuse.

| Experimental arm | Agent / CPU scheduling | Refined model / operator choices | Question |
|---|---|---|---|
| B0 · Layered | Existing harness/runtime | Serving defaults | Practical reference |
| B1 · Agent-only | Enabled | Fixed | Benefit from upper-level scheduling |
| B2 · SSG-only | Fixed | Enabled | Benefit from lower-level choices |
| B3 · Agent-SSG | Enabled | Enabled | Additional cross-boundary benefit |

All arms need equivalent models, tool semantics, candidate choices, resource budgets, and success criteria. A strong modular competitor should receive the same telemetry and lower-level controls, testing the value of the common representation separately from access to extra knobs.

Measure task completion distributions, success/quality parity, CPU/GPU queues, host/device memory peaks, transfers, scheduler overhead, and critical-path attribution. Minimum execution evidence requires a real model invocation with at least two realizable lower-level variants and an observed consequence of a dependency-safe cross-boundary choice. Sequential and GPU-saturated tasks provide negative controls.

## Relationship to Neighboring Systems

The draft compares program-aware serving and workflow systems including Parrot, SGLang, Teola, Autellix, AgentWeave, Murakkab, and Agent.xpu. DAG scheduling, flow decomposition, heterogeneous placement, and profile-guided optimization already have substantial precedents. The narrower hypothesis is **executable continuity into the common SSG operator-level representation**, with measurable benefits in optimization, integration, reuse, or auditing.

[TSG](/research/tsg/) studies persistent task meaning and evolution. An executable projection from a TSG instance is one possible input, but Agent-SSG also accepts ordinary harness workloads without a TSG dependency. Agent-level digital-twin validation belongs to a future **Agent-SSG-DT**, jointly dependent on Agent-SSG and [SSG-DT](/research/ssg-dt/).

## Version History

| Date | Snapshot | Role |
|---|---|---|
| 2026-10-28 | `2026.10.4.3.1` · v0.7 | Current design/protocol: dynamic refinement, effects, execution witnesses, matched ablations, PAP admission boundary; no new measurements |
| 2026-10-19 | `2026.10.3.1.1` | FAOP typed-workflow comparison and dynamic scheduling boundary |
| 2026-09-19 | [Sep-V5.2.1 PDF](/assets/papers/agent-ssg/v0.1/agent-ssg-mlsys27-v5.2.1.pdf) | Historical manuscript; retained unchanged, distinct from the current evidence status |

[SSG](/research/ssg/) · [SSG-DT](/research/ssg-dt/) · [Publications](/publications/)

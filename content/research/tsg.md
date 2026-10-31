---
title: "Task Substrate Graph (TSG)"
permalink: /research/tsg/
description: "A formal model of evolving tasks: semantic context, Actor–Spec–Impl, CMA exchange roles, and intra-/inter-task evolution"
---

[Research](/research/) / TSG series

# Task Substrate Graph (TSG)

**A Formal Model of Evolving Tasks**

TSG investigates how a task can remain a persistent object while its actors, specifications, implementations, and relationships change. Humans, programs, models, and harnesses can realize the work at different times. The research object is the task's evolving structure, including changes to what the work means and what counts as a valid result.

**Current working draft:** `2026.10.4.3.1` · 28 October 2026. The draft develops a formal model and its boundaries; complete edge algebra, task-identity criteria, evolution policy, and general empirical validation remain open. The [September PDF](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf) and [source archive](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.14-source.tar.gz) are retained as historical artifacts, not relabeled as the October draft. The preprint is not yet publicly listed on arXiv.

<div class="paper-anchor-box blue">
  <div class="paper-anchor-header">
    <span class="paper-anchor-title">Task Substrate Graph: A Formal Model of Evolving Human&ndash;AI Tasks</span>
    <span class="badge">Preprint &middot; 24 September 2026 &middot; 27 pp.</span>
  </div>
  <div class="paper-meta"><strong>One-line idea:</strong> make the task, rather than the agent, session, or workflow, the persistent object of intelligent work, with an explicit structure that can be revised and reused.</div>
  <div class="paper-actions">
    <a class="btn-pill primary" href="/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf">PDF (132 KB) &nearr;</a>
    <a class="btn-pill" href="/assets/papers/tsg/v0.1/tsg-preprint-v3.1.14-source.tar.gz">Next-revision LaTeX source &nearr;</a>
    <a class="btn-pill" href="#historical-lineage-tli-and-workbench-to-tsg">Earlier drafts &darr;</a>
  </div>
</div>

<div class="jump-bar">
<a class="btn-pill primary" href="#tsg-three-core-aspects">Core Model</a>
<a class="btn-pill" href="#instantiation-and-two-scopes-of-evolution">Task Dynamics</a>
<a class="btn-pill" href="#negative-evidence-and-specification-revision">Evidence</a>
<a class="btn-pill" href="#neighboring-systems-and-semantic-boundaries">Comparisons</a>
<a class="btn-pill" href="#version-history">Versions</a>
</div>

## TSG Three Core Aspects

<figure class="hero-figure">
<img src="/assets/figures/tsg-three-aspects.svg" alt="TSG semantic context, Actor–Spec–Impl task graph, activity-relative CMA, and two evolution scopes">
<figcaption><strong>Context, graph, exchange, and evolution.</strong> Owner records persistent responsibility. Current activity identifies an Actor in a semantic Location and CDC operation. Instantiation applies the formalism to a task; the resulting graph evolves within and across task boundaries.</figcaption>
</figure>

### Semantic Context and Structural Core

The contextual coordinates are **Owner × Location × Operation**, with `Location = (Intent, Discipline)` and `Operation ∈ {Consume, Digest, Create}`. Owner answers whose task persists through handoffs. Actor identifies who is undertaking a concrete activity. Intent can describe exploration, explanation, optimization, or creation; Discipline locates the domain. These coordinates can be attached recursively to subtasks.

**Consume** acquires or observes state; **Digest** structures information into understanding; **Create** externalizes or modifies structure. They are primitive operation classes, not a mandatory three-step pipeline. Lightweight reading can retain a thin, implicit specification.

The structural core is `G_T = (V_T, E_T)`, with `V_T ⊆ Actor × Spec × Impl`. A node relates an Actor to a Spec through an Impl:

| Coordinate | Meaning | What can vary |
|---|---|---|
| **Actor** | Human, AI, program, or collective undertaking an activity | Replace the executor; assign contextual reviewer/implementer roles |
| **Spec** | Relatively stable meaning and validity conditions | Elaborate or revise the specification as evidence changes |
| **Impl** | One concrete realization: procedure, prompt, program, workflow, experiment, or document structure | Substitute a realization under the applicable Spec |

Inside Spec, **RTC = (Representation, Transformation, Constraint)** specifies the structured object, its meaningful/admissible changes, and conditions to preserve. RTC is internal to Spec, rather than another graph axis. Typed edge families may include dependency, flow, refinement, realization, synchronization, replacement, and evidential influence; a complete edge algebra is still under development.

### Activity-Relative CMA Roles

**Component, Model, Artifact** describe exchange roles relative to an activity. They are not globally exclusive file types or additional dimensions of the core graph.

| Role | Meaning in the current draft | Example |
|---|---|---|
| **Component** | Reusable capability, structure, or functional unit | Software module, retrieval capability, experiment procedure, task fragment |
| **Model** | Representation used to reason about the task or an external domain | Formal grammar, simulator, statistical predictor, or reified task graph |
| **Artifact** | Materialized output or state carrier | Code, document, dataset, figure, checkpoint, serialized graph |

A file may materialize a Model and serve as an Artifact in another activity. A concrete TSG graph is itself a Formal Task Model; reifying it allows it to be exchanged as a Model. Such recursive reuse does not identify all Models with TSG.

## Instantiation and Two Scopes of Evolution

**Instantiation** applies the formalism to context: `Instantiate(TSG, Context_T) ⇒ G_T`. It is not a third runtime dynamic or a separate graph instance for every step.

**Intra-Task Evolve** changes one persistent graph: `G_T(t) → G_T(t+Δt)`. Changes can replace an Actor or Impl, revise Spec/RTC, add or remove edges, revise CMA bindings, or branch and merge work. Whether a revision preserves task identity is an open semantic obligation, rather than something established by sharing a thread ID.

**Inter-Task Evolve** captures how reusable Components, Models, Artifacts, or graph structures change another task. Reuse needs to consider the receiving Spec and inherited assumptions. Copying an artifact or observing successful reuse does not by itself establish a general admissibility theory.

## Negative Evidence and Specification Revision

A failed experiment can reveal an implementation defect, insufficient measurement, or a limitation in the motivating hypothesis. The proposed evolution account distinguishes **observed outcome → interpretation (Digest) → proposed Spec/Impl revision → check and adoption**. Recording a failure establishes history; showing which admissible choices it changes requires further evidence.

Relations such as `informed_by`, `supports`, `refutes`, `refines`, and `validates` have different strengths. They are candidate relation types to formalize, not established primitives. Chronological proximity alone cannot supply causality or validity.

For example, in an SSG-DT research task, an inaccurate prediction is an Artifact of an experiment. Diagnosis may change the implementation, the representation of contention, or the evaluation constraints. TSG would record which of these changed and why, while SSG-DT models the physical computation under study.

## Neighboring Systems and Semantic Boundaries

The current draft treats persistent execution and research systems as substantive comparators:

| Neighbor | Relevant capability described in the draft | Remaining TSG question |
|---|---|---|
| **Delta / DeltaDB** | Conversation, code operations, worktrees, and collaborative history | When does an edit revise Impl, change Spec, or create a distinct task? |
| **Athanor** | Durable experiment records, jobs, results, and checkpoint lineage | How do experiments revise task meaning and admissible RTC? |
| **CIG** | Explicit evidence/hypothesis/intervention/outcome improvement state | Can semantic task evolution be represented beyond a fixed improvement target? |
| **Euler** | Domain-specific research contracts, obligations, evidence, and verified facts | Which structures generalize beyond its mathematical domain? |
| **CORTEX / GitSwarm** | Verified reuse or cumulative contribution lineage | How does adopted experience change the receiving task's Spec and identity? |
| **SCARCE** | Cross-task commitments and actor-relationship state | Which relations belong to actor context, and which govern a particular task? |
| **FAOP / PAP–Touba** | Typed workflows and rewriting; responsibility and guarded dispatch | How do workflow/authorization contracts relate to changing task specifications? |

These comparisons follow the October manuscript and are not new integration claims. In particular, task ownership does not confer operational permission, and evolution of task meaning does not replace a runtime's authorization mechanism.

## Relationship to Three Models, SSG, and a Workbench

[Three Models](/research/three-models/) supplies a general modeling perspective. TSG is currently a formal task-world research line; it need not reproduce SSG's FP/PP/LP engineering sequence. [SSG](/research/ssg/) models computation and can realize selected computational activities. Conversely, a TSG instance can represent the research process that constructs SSG. These are parallel research series with possible interfaces, rather than a mandatory frontend/backend chain.

A future Workbench would retain task snapshots, active specifications, object lineage, evidence, substitutions, and adoption decisions across human and AI actors. The formal model does not prescribe one scheduler, approval protocol, or harness. Open research includes task boundaries, RTC semantics, edge composition, CMA typing, and evaluation against strong persistence/reuse baselines.

## Current Draft Lineage

| Date | Snapshot | Change |
|---|---|---|
| 2026-10-28 | `2026.10.4.3.1` | PAP/Touba responsibility and admission comparison; retains earlier formal structure and literature |
| 2026-10-19 | `2026.10.3.1.1` | FAOP workflow normalization/type/effect comparison |
| Earlier October revisions | Athanor/SCARCE archive line | Experiment lineage, actor relationships, DeltaDB, and task/evolution boundaries |

## Historical Lineage: TLI and Workbench to TSG

The TSG manuscript synthesizes two earlier August 2026 research tracks into a single substrate formalism:

| Stage | Manuscript | Core Focus | How It Entered TSG |
|---|---|---|---|
| **Precursor A** | **[Task-Level Intelligence: Task Substrate Graphs for Recursive Intelligent Creation](/assets/papers/tsg/v0.1/tli-aug-v4.2.pdf)** (`Aug-V4.2`, 29 pp.) | Asks what lies above the agent harness; introduces the TSG name and typed Intent / Representation / Transformation / Constraint specifications | Became the step-level `Spec = R x T x C` and `Intent(E x F x P)` coordinates inside `V_T` |
| **Precursor B** | **[Toward an AI-Native Workbench: Unifying Consume, Digest, and Create](/assets/papers/tsg/v0.1/workbench-aug-v0.1.pdf)** (`Aug-V0.1`, 28 pp.) | Organizes AI work around persistent human activity instead of applications; introduces Consume / Digest / Create and Location | Became the persistent object layer `O`, `CDC` macro-operations, and empirical case-study workbench |
| **Unified Track** | **[Task Substrate Graph: A Formal Model of Evolving Human&ndash;AI Tasks](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf)** (`Sep-V3.1.13`, 27 pp.) | Substrate-level task graph `G_T`, activity-relative `CMA` roles, and `Instantiation` / `Intra-Task` / `Inter-Task Evolve` | Unifies step-level cognitive specs and hub-level lifecycle into a general task-world substrate |

## Version History

| Date | Version Tag | Artifact / Snapshot | Substantive Changes &amp; Provenance |
|---|---|---|---|
| **2026-09-20** | `Sep-V3.1.14` | **[Source .tar.gz](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.14-source.tar.gz)** | Representation-framing revision; reframed runtime protocols (`propose -> apply`, approval gates) as reference implementation choices rather than core graph semantics. |
| **2026-09-20** | `Sep-V3.1.13` | **[Compiled PDF](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf)** | Preprint dated 24 September (27 pages): restored architecture figures, 24-entry bibliography, three end-to-end human&ndash;AI task traces. |
| **2026-09-18** | `Sep-V3.1` | Draft milestone | Completed four-axis context (`Owner x Actor x Location x CDC`) and `CMA` role formalization across research, engineering, and creative tasks. |
| **2026-08-19** | `TLI Aug-V4.2` | **[Precursor PDF](/assets/papers/tsg/v0.1/tli-aug-v4.2.pdf)** | *Task-Level Intelligence* draft (29 pages): TSG name, typed `IRTC` specifications, multi-domain protocols. |
| **2026-08-19** | `Workbench Aug-V0.1` | **[Precursor PDF](/assets/papers/tsg/v0.1/workbench-aug-v0.1.pdf)** | *Toward an AI-Native Workbench* draft (28 pages): Consume / Digest / Create, Location, and materialization across tools. |

[Explore Companion Series: SSG &rarr;](/research/ssg/) &middot; [Explore Methodology: Three Models &rarr;](/research/three-models/) &middot; [All Publications](/publications/)

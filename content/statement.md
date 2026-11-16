---
title: Research Statement
permalink: /statement/
description: "Research problems, modeling methods and evidence: AI execution systems and evolving human–AI tasks."
---

# Research Statement

**Structural modeling of complex AI systems — from execution to evolving tasks**

## Motivation and Method

Important choices in AI systems are frequently scattered across compilers, runtime heuristics, hardware configurations, and human–AI workflows. Their hidden assumptions become visible when a system moves to a different device, workload, model, or task context. My research asks whether **explicit representation, constraints, and transformation rules** can turn these choices into something explainable, executable, and testable.

This approach grew out of work across computer architecture, simulation, machine learning, and industrial systems. I am interested in modeling contracts rather than a universal ontology: a useful model has clear objects, admissible changes, observable consequences, and failure conditions.

I use three complementary methods. **Formal models** describe objects, relations, constraints and legal transformations. **Simulation models** predict conditional state and performance evolution under declared assumptions. **Statistical models** estimate patterns and learn decisions from data. Empirical measurement remains an external reference for testing these models. This is the subject of my [Three Models research note](/research/three-models/); it is a methodological direction, not a claim of a completed universal theory.

## Research Line I: SSG — Heterogeneous AI Execution

The first developed research object is AI computation over heterogeneous computing systems. A kernel tiling, a model-parallel execution plan, and an agent's tool/model calls are ordinarily described by separate systems. SSG studies how the **Workload–System–Schedule** relationship can be made explicit while preserving constraints at each execution scale.

The shared mechanism is **Build → Traverse → Translate**. Build constructs independent workload and system structures. Traverse chooses a mapping across operation and resource-domain hierarchies, including legal compute resources, partitions, remapping, and synchronization. Translate realizes the selected structure using a supported target backend. The shared representation uses Compute–Memory–Communication (CMC); selected execution can be represented as Compute–Remap–Sync (CRS). Hardware-specific templates should not be smuggled into the hardware-independent middle representation.

SSG's workload range is **operators → model training/inference/RL → agent/tool/model execution**. The former Agent-SSG line is now incorporated into SSG's Agent workload scope; it is not a separate active research series. Agent-level dynamics and cross-hardware execution remain research questions, not established results.

The [2026 SSG manuscript](/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf) reports limited H20 and A800 implementations, measured performance, numerical failures, and fallback behavior. Those results support claims only within their tested settings. A related [SSG-DT direction](/research/ssg-dt/) investigates calibrated performance prediction over selected execution plans, but measured twin validation remains pending.

## Research Line II: TSG — Persistent and Evolving Tasks

The second research object is the **task itself**: work that survives changes of actor, model, tool, session, and implementation. A workflow trace can record what occurred without saying whether a new action changed the implementation, the specification, or the identity of the task.

TSG investigates task structures with **Actor × Spec × Impl**, semantic context, activity-relative Component/Model/Artifact roles, and intra-/inter-task evolution. The aim is to reason about changing assumptions, evidence, and reuse across long-horizon human–AI work. The [2026 TSG preprint](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf) offers an initial formulation and examples; task identity criteria, relation algebra, and empirical advantage over existing persistence systems remain open.

SSG and TSG are two distinct research objects. SSG can realize computational activities that a TSG instance represents, while TSG can model the work of researching SSG. Neither requires the other as a mandatory pipeline stage.

## Evidence and Future Questions

My preferred research loop is **problem framing → representation → working realization → observation → model revision**. I distinguish what is defined, what can be executed, what has been measured, and what remains a hypothesis. For SSG, this includes negative correctness and fallback evidence as well as successful timings. For TSG, it means testing formal definitions against counterexamples and real task histories rather than asserting that an attractive graph vocabulary is sufficient.

Questions worth pursuing include how execution representations remain reusable across workload and hardware changes; when formal search spaces preserve useful implementations; how predictive models can be calibrated and falsified; and when task evolution should revise an existing specification rather than spawn another task. Which questions deserve sustained investment must be decided through evidence and collaborations.

I am interested in research settings combining intellectual ownership with **real engineering collaboration, experimental resources, and publication**. My background spans CPU/NPU architecture, GPU inference, compilers/runtimes, and applied machine learning. See my [research overview](/research/), [publications](/publications/), and [CV](/cv/) for detailed artifacts and attribution.

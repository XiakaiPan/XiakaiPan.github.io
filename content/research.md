---
title: Research
permalink: /research/
---



# Research

My research investigates how **implicit structure** in computing and human–AI work can become explicit representations for implementation, analysis, and evolution.

The program has one methodological foundation and two **parallel research series**. These are directions of investigation, not claims that all planned systems have been implemented.

## Foundation — Three Models of World Modeling

**Formal · Simulation · Statistical**

A conceptual framework distinguishing three complementary modeling contracts for the same domain:

- **Formal models:** objects, relations, legal states, and transformations.
- **Simulation models:** state transitions, dynamics, and counterfactual interventions.
- **Statistical models:** data-driven estimation, learning, and decision-making.

**Status:** methodological working manuscript; not a peer-reviewed publication.

## Series A — System Substrate Graph (SSG)

**Modeling the execution world of AI computing**

SSG studies a unified representation for the relations among **Workload, System, and Schedule**, built around compute, memory, and communication. Its longer-term research space has three dimensions:

| Workload scope | Modeling / prototype capability | Maturity |
|---|---|---|
| Operator → Training/Inference/RL → Agent | Functional → Performance → Learnable | MVP → MMP |

Selected research directions:

- **SSG:** representation and realization coverage across workloads, systems, and scheduling strategies. Bounded operator/model execution prototypes exist; universal optimization is not claimed.
- **Agent-SSG:** refinement of agent workloads toward model invocations and operator strategies across heterogeneous CPU/GPU resources. Cross-level optimization remains under active evaluation.
- **SSG-DT:** structure-preserving performance modeling and simulation based on instantiated SSG execution structures. Predictive fidelity and counterfactual transfer are active research questions.

**Status:** mixed working manuscript, prototype, and planned evaluation stages. Specific unverified performance or publication claims are intentionally excluded.

## Series B — Task Substrate Graph (TSG)

**Modeling the evolving task world of human–AI collaboration**

TSG investigates persistent and evolving task structures through **Actor × Spec × Impl**, task identity, instantiation, and intra-/inter-task evolution.

The research concerns how humans and AI systems develop, revise, hand off, and reuse tasks *across* models, sessions, and harnesses, rather than equating the task with a prompt, chat history, or execution DAG.

**Status:** evolving formal-model manuscript; broad empirical validation and formal proofs remain open.

## Relationship

SSG and TSG are parallel in research scope: one models AI-computing execution, the other models evolving human–AI tasks. They can interact without requiring one to be reduced to the other. Three Models is the overarching methodological investigation, not a prerequisite for either series.

## Research pages

- [Three Models](/research/three-models/) — methodology.
- [SSG](/research/ssg/) — execution representation.
- [Agent-SSG](/research/agent-ssg/) — cross-level composition.
- [SSG-DT](/research/ssg-dt/) — execution/simulation correspondence.
- [TSG](/research/tsg/) — evolving task structures.


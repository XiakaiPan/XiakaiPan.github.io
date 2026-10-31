---
title: "Three Models of World Modeling"
permalink: /research/three-models/
description: "Formal, Simulation, and Statistical contracts with an external measurement anchor"
---

[Research](/research/) / Methodology

# Three Models of World Modeling

**Formal &middot; Simulation &middot; Statistical &mdash; anchored against external Measurement**

Three Models investigates how complementary modeling contracts can represent the same domain while maintaining distinct responsibilities and falsification criteria: **Formal makes structure and admissibility explicit; Simulation predicts conditional behavior; Statistical learns regularities, estimates, or decisions from data.**

<div class="jump-bar">
  <span class="jump-label">On This Page</span>
  <a class="btn-pill primary" href="#barycentric-prototypes-in-ssg-and-tsg">Barycentric Prototypes &darr;</a>
  <a class="btn-pill" href="#why-measurement-stays-outside-the-triangle">Measurement Anchor &darr;</a>
  <a class="btn-pill" href="#manuscripts-and-artifacts">Manuscripts &amp; Lineage &darr;</a>
  <a class="btn-pill" href="/research/ssg/">Series A: SSG &rarr;</a>
  <a class="btn-pill" href="/research/tsg/">Series B: TSG &rarr;</a>
</div>

<figure class="hero-figure">
  <img src="/assets/figures/three-models-triangle.svg" alt="Three Models barycentric method triangle and external measurement anchor">
  <figcaption><strong>Figure 1 &middot; Method Triangle &amp; External Reality Anchor.</strong> Formal, Simulation, and Statistical models are combined rather than used in isolation. SSG prototypes sit inside the triangle as Function, Performance, and Learnable Prototypes; the triangle is a qualitative map, not a set of numeric weights. Real-world measurement stands outside the triangle as the shared calibration and audit anchor.</figcaption>
</figure>

## Core Research Question

How can different modeling paradigms share the same domain objects and observations without blurring the boundary between **structural legality**, **mechanistic prediction**, **data-driven search**, and **real-world measurement**?

## Three Complementary Contracts

| Paradigm | Core Responsibility | Canonical Objects | Validation Criterion |
|---|---|---|---|
| **Formal Model** | **Legality &amp; Structure** | Graphs, types, constraints, admissible transformations (`R x T x C`) | Well-formedness, invariant preservation, compilability, bounded enumeration |
| **Simulation Model** | **Value &amp; Dynamics** | State transitions, critical paths, calibrated node/edge costs, counterfactuals | Compositional fidelity, ranking correlation, cross-generation transfer |
| **Statistical Model** | **Search &amp; Amortization** | Parameter estimators, residual attribution, learned scheduling policies | Sample efficiency, regret vs. exact/enumerated optima, generalization |
| *External Anchor* | **Empirical Reality** | Real hardware execution (H20/A800), trace logs, task evolution histories | Reproducible physical measurement (kept distinct from Simulation) |

## Barycentric Prototypes in SSG and TSG

In our research roadmap, SSG prototypes combine the methods over a shared representation. The triangle is a qualitative design aid: no normalized numerical weights or universal progression are established. TSG is an independent formal research line and need not follow this sequence:

1. **Function Prototype (FP) &mdash; Formal dominant, Sim auxiliary, Stat &approx; 0:**
   Establishes the unified representation (`AbstractSSG`, `CalibratedSSG`, `InstantiatedSSG` or `TSG` formalism), checks legality constraints and establishes executability on supported paths through a Backend Realizer.
2. **Performance Prototype (PP / Digital Twin) &mdash; Simulation dominant, Stat auxiliary, Formal as substrate:**
   Calibrates node/edge parameters against measured runs, predicts cross-scale behavior compositionally, and supports counterfactual hardware/software co-design (**[SSG-DT](/research/ssg-dt/)**).
3. **Learnable Prototype (LP) &mdash; Statistical dominant, Sim as reward, Formal as hard constraint:**
   Trains amortized policies to emit legal transformation sequences without exhaustive search, potentially using legality checks and calibrated predictions as training signals, with their coverage and errors accounted for.

## Why Measurement Stays Outside the Triangle

A central methodological rule (formalized in **SSG Roadmap v1.5.2**) is that **Measurement is not folded into Simulation**. If real hardware measurement were treated as just another simulation vertex, the core scientific claim of a digital twin&mdash;*that calibrated prediction can replace costly measurement across a defined design space*&mdash;could not be stated or falsified. Keeping Measurement as an external reference line ensures every prototype stage has an explicit empirical audit gate.

## Manuscripts and Artifacts

Three Models is planned as an independent methodology paper. No standalone manuscript is attached. Its proposed contribution concerns contracts, composition, shared objects, and validation across modeling methods, rather than the invention of the three methods themselves:

- **Integrated into SSG Research Roadmap (`v1.5.2`, Aug 2026):** Formalizes the `Formal x Sim x Stat` barycentric trajectory, the external Measurement reference line, and the FP &rarr; PP &rarr; LP prototype progression. See **[SSG Research Page](/research/ssg/) with direct PDF anchors**.
- **Applied in TSG Foundation (`Sep-V3.1.14`, Sep 2026):** Distinguishes formal task-graph representation (`G_T` and `Spec = R x T x C`) from runtime execution traces and empirical workbench evolution. See **[TSG Research Page](/research/tsg/) with direct PDF anchors**.

[Back to Research Overview](/research/) &middot; [Publications and Manuscripts](/publications/)

## Shared Objects and Distinct Validation

The three paradigms can model the same object without sharing a validation criterion. A learned transition model may supply a simulator; an executable formal model may also generate a simulation. These overlaps make contracts more useful than a mutually exclusive taxonomy. Statistical modeling can perform prediction and system identification as well as search, while simulation supplies consequences under assumptions rather than selecting the objective by itself.

For SSG, shared plan identity connects legal structures, conditional timing predictions, and learned selection. For TSG, the current contribution is the formal account of context, task structure, exchange roles, and evolution. A future task simulator or learned evolution policy would need independent definitions and evidence. Neither series waits for publication of the methodology paper.

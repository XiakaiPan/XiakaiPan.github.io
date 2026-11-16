---
title: Xiakai Pan
permalink: /
description: "Research methods, objects and evidence across heterogeneous AI execution and evolving human–AI tasks."
---

# Xiakai Pan (潘夏凯)

**AI Systems Research · Computer Architecture · Compilers/Runtimes · Agent Systems**

I study how complex AI systems can be made **explicitly representable, transformable, and testable**. Two objects currently anchor this work: the execution of AI workloads on heterogeneous resources, and the structure and evolution of persistent human–AI tasks. My methods combine formal reasoning, models of system dynamics, statistical learning, and independent empirical evidence.

The current research lines are **[System Substrate Graph (SSG)](/research/ssg/)** and **[Task Substrate Graph (TSG)](/research/tsg/)**. A broader methodological perspective, **[Three Models](/research/three-models/)**, informs both without assuming that task structure and hardware execution are the same object.

I am a heterogeneous computing engineer at Baidu, previously working on NPU architecture and performance modeling at Li Auto. M.S., Tsinghua University; B.S., Nankai University. I am open to research collaborations, PhD opportunities, and research-oriented systems roles.

<div class="jump-bar">
<a class="btn-pill primary" href="/statement/">Research Statement</a>
<a class="btn-pill" href="/research/">Research</a>
<a class="btn-pill" href="/publications/">Papers &amp; Evidence</a>
<a class="btn-pill" href="/cv/">Academic CV</a>
<a class="btn-pill" href="/resume/">Industry Resume</a>
<a class="btn-pill" href="mailto:xiakpan@gmail.com">Contact</a>
</div>

## Research Method

The recurring question is: **what representation makes the assumptions and admissible transformations of a complex system visible, and how can that representation be tested against reality?**

<div class="card-grid">
<div class="series-card"><div><div class="series-kicker">Formal</div><h3>Structure and validity</h3><p>Objects, relations, invariants, and permissible transformations. What can a system legally do?</p></div></div>
<div class="series-card blue"><div><div class="series-kicker">Simulation</div><h3>Dynamics and prediction</h3><p>State, resources, timing and interventions. What follows if we choose a particular execution?</p></div></div>
<div class="series-card amber"><div><div class="series-kicker">Statistical</div><h3>Estimation and search</h3><p>Patterns, learned predictors and decision policies. What can be inferred or amortized from experience?</p></div></div>
</div>

These are complementary modeling **contracts**, not mutually exclusive kinds of software. **Measurement is an external validation anchor**, not a fourth synonym for simulation. [Read the Three Models research note](/research/three-models/). It is a working methodological account, not a completed standalone paper.

## Research Map

<figure class="hero-figure">
<img src="/assets/figures/research-program-overview.svg" alt="Three Models methodology and parallel SSG and TSG research lines; SSG includes operator, model, and agent workloads.">
<figcaption>SSG investigates execution across operators, model workloads, and agents, with SSG-DT as a proposed predictive extension. TSG investigates persistent task structure and evolution. Their research questions remain distinct.</figcaption>
</figure>

<div class="card-grid">
<div class="series-card">
<div><div class="series-kicker">Research line A · AI computing execution</div><h3><a href="/research/ssg/">SSG — System Substrate Graph</a></h3>
<p>Workload, System, Schedule, and a Build–Traverse–Translate mechanism for heterogeneous realization. The workload range includes operator kernels, model training/inference/RL, and agent/tool/model execution. The earlier Agent-SSG designation is now integrated into SSG rather than a separate project.</p>
<p class="card-status"><span class="status done">2026 technical manuscript</span> H20 and A800 measurements; more general Agent and hardware coverage remains research in progress.</p></div>
<div class="card-links"><a class="btn-pill primary" href="/research/ssg/">Project &amp; evidence</a><a class="btn-pill" href="/assets/papers/ssg/author-2026-11/ssg-technical-report-2026-11.pdf">Author-edition PDF</a></div>
</div>
<div class="series-card blue">
<div><div class="series-kicker">Research line B · human–AI tasks</div><h3><a href="/research/tsg/">TSG — Task Substrate Graph</a></h3>
<p>A formal account of persistent, evolving tasks: Actor–Spec–Impl, contextual ownership, Component/Model/Artifact roles, and intra-/inter-task evolution. Its identity and validation questions remain open.</p>
<p class="card-status"><span class="status wip">2026 preprint</span> Formal concepts and example trajectories; general empirical validation pending.</p></div>
<div class="card-links"><a class="btn-pill primary" href="/research/tsg/">Project &amp; evidence</a><a class="btn-pill" href="/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf">Preprint PDF</a></div>
</div>
</div>

## Selected Evidence

These numbers come from the [2026 SSG technical manuscript](/assets/papers/ssg/author-2026-11/ssg-technical-report-2026-11.pdf). They describe bounded configurations, not a general optimization guarantee.

<div class="stat-grid">
<div class="stat"><div class="stat-num">2,892–2,988</div><div class="stat-label">Legal GEMM candidates per H20 shape</div><p>Enumerated strategies; legality and numerical correctness are reported separately.</p></div>
<div class="stat"><div class="stat-num">49.6–110.1%</div><div class="stat-label">of cuBLAS on nine FP16 GEMM shapes</div><p>Best measured generated kernel per shape, not automated optimal selection.</p></div>
<div class="stat"><div class="stat-num">+57%</div><div class="stat-label">Inference throughput in one configuration</div><p>Qwen3-8B on 8×A800, DP4×TP2 versus TP8 at offered load 512.</p></div>
</div>

Other evidence includes a [peer-reviewed industrial vision paper](https://doi.org/10.1016/j.compind.2024.104084), a [TSG preprint](/publications/#tsg-preprint), and research notes that distinguish proposed mechanisms from implemented outcomes.

## Application and Collaboration Materials

[Research Statement](/statement/) · [Publications and Manuscripts](/publications/) · [Academic CV](/cv/) · [Industry Resume](/resume/) · [Writing](/writing/) · [GitHub](https://github.com/XiakaiPan)

Contact: [xiakpan@gmail.com](mailto:xiakpan@gmail.com)

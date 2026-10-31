---
title: Xiakai Pan
permalink: /
description: "AI systems, compilers/runtimes, and accelerator architecture: one representation for how AI workloads are mapped onto hardware."
---

# Xiakai Pan (潘夏凯)

**AI systems &middot; compilers and runtimes &middot; accelerator architecture**

I build representations that make AI execution decisions explicit and checkable. A GEMM tiling, a TP/PP choice for an LLM, and the scheduling of an agent's tool calls are normally decided by different compilers, frameworks, and runtimes. My main project, **SSG (System Substrate Graph)**, describes all of them as one mapping of a *Workload* onto a *System* through a *Schedule*, and uses that description to generate and select real executions on GPUs. A parallel project, **TSG (Task Substrate Graph)**, applies the same structural approach to long-running human&ndash;AI work.

Currently a heterogeneous computing engineer at Baidu (Kunlun accelerator operators, vLLM integration). Previously NPU architecture and performance modeling at Li Auto. M.S., Tsinghua University.

<div class="jump-bar">
  <a class="btn-pill primary" href="#ssg-results-at-a-glance">Results &darr;</a>
  <a class="btn-pill" href="#research-map">Research map &darr;</a>
  <a class="btn-pill" href="#papers">Papers &darr;</a>
  <a class="btn-pill" href="/cv/">CV</a>
  <a class="btn-pill" href="https://github.com/XiakaiPan">GitHub &nearr;</a>
</div>

## SSG Results at a Glance

<div class="stat-grid">
  <div class="stat"><div class="stat-num">2,892+</div><div class="stat-label">legal schedules per GEMM shape</div><p>Enumerated from one representation on NVIDIA H20. Generated kernels reach <strong>49.6&ndash;110.1% of cuBLAS</strong> across nine shapes with elementwise-identical output.</p></div>
  <div class="stat"><div class="stat-num">1.09&ndash;2.79&times;</div><div class="stat-label">vs. CUB on 66 row reductions</div><p>Mostly from emitting one fused launch where the library needs two. Reported as a launch-structure effect, not a general kernel speedup.</p></div>
  <div class="stat"><div class="stat-num">+57%</div><div class="stat-label">throughput from a different parallel binding</div><p>Qwen3-8B on 8&times;A800: DP4&times;TP2 vs. TP8 at offered load 512. The best binding changes with load, which the same Schedule vocabulary expresses.</p></div>
  <div class="stat"><div class="stat-num">40.2%</div><div class="stat-label">of measured GEMM variants fail correctness</div><p>Negative results are reported with their structure: 77 pipelined variants fail while their 77 parallel pairs pass. Legal is not the same as correct.</p></div>
</div>

<p class="source-note">Source: <a href="/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf">SSG submitted manuscript</a> (September 2026), &sect;5&ndash;7. Single-node H20 and 8&times;A800 configurations only.</p>

## Research Map

<figure class="hero-figure">
  <img src="/assets/figures/research-program-overview.svg" alt="Research map: Three Models methodology above two parallel series, SSG for AI execution and TSG for evolving tasks">
  <figcaption><strong>One methodology, two parallel series.</strong> <em>Three Models</em> (Formal, Simulation, Statistical, checked against measurement) is the shared way of building models. <strong>SSG</strong> models how AI workloads execute on hardware. <strong>TSG</strong> models how human&ndash;AI tasks persist and change. Neither series depends on the other.</figcaption>
</figure>

<div class="card-grid">
  <div class="series-card">
    <div>
      <div class="series-kicker">Main project &middot; AI execution</div>
      <h3><a href="/research/ssg/">SSG &mdash; System Substrate Graph</a></h3>
      <p><code>Execution = Schedule(Workload, System)</code>. One representation spans operators (H20 GEMM, reductions), distributed training/inference/RL (8&times;A800), and live Qwen3 GQA/MoE paths. It generates candidates, checks legality, and emits runnable code or framework plans.</p>
      <p class="card-status"><span class="status done">Submitted</span> September 2026 manuscript with measured results.</p>
    </div>
    <div class="card-links">
      <a class="btn-pill primary" href="/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf">PDF &nearr;</a>
      <a class="btn-pill" href="/research/ssg/">Overview &rarr;</a>
    </div>
  </div>
  <div class="series-card">
    <div>
      <div class="series-kicker">SSG extensions &middot; in progress</div>
      <h3><a href="/research/agent-ssg/">Agent-SSG</a> and <a href="/research/ssg-dt/">SSG-DT</a></h3>
      <p><strong>Agent-SSG</strong> extends the scope upward: schedule an agent's CPU tool calls and GPU model calls together, down to operator choices. <strong>SSG-DT</strong> extends capability: a digital twin that predicts unmeasured executions from the same plan.</p>
      <p class="card-status"><span class="status wip">Design stage</span> Protocols written; measurements pending.</p>
    </div>
    <div class="card-links">
      <a class="btn-pill" href="/research/agent-ssg/">Agent-SSG &rarr;</a>
      <a class="btn-pill" href="/research/ssg-dt/">SSG-DT &rarr;</a>
    </div>
  </div>
  <div class="series-card blue">
    <div>
      <div class="series-kicker">Parallel series &middot; human&ndash;AI tasks</div>
      <h3><a href="/research/tsg/">TSG &mdash; Task Substrate Graph</a></h3>
      <p>A formal model that treats the task itself, not the agent or chat session, as the persistent object. Nodes are <code>Actor &times; Spec &times; Impl</code>; objects play activity-relative Component / Model / Artifact roles; tasks evolve within and across task boundaries.</p>
      <p class="card-status"><span class="status done">Preprint</span> September 2026; October revision in progress.</p>
    </div>
    <div class="card-links">
      <a class="btn-pill primary" href="/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf">PDF &nearr;</a>
      <a class="btn-pill" href="/research/tsg/">Overview &rarr;</a>
    </div>
  </div>
</div>

Methodology: [Three Models of World Modeling](/research/three-models/) &middot; Full index with versions: [Research](/research/)

## Papers

<ul class="paper-list">
  <li><span class="pl-title">System Substrate Graph: One Cross-Scale Representation of Workload, System, and Schedule for AI Computing</span><span class="pl-meta">Submitted manuscript &middot; September 2026 &middot; 13 pp.</span><a href="/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf">PDF</a> &middot; <a href="/research/ssg/">Project page</a></li>
  <li><span class="pl-title">Task Substrate Graph: A Formal Model of Evolving Human&ndash;AI Tasks</span><span class="pl-meta">Xiakai Pan &middot; Preprint &middot; September 2026 &middot; 27 pp.</span><a href="/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf">PDF</a> &middot; <a href="/research/tsg/">Project page</a></li>
  <li><span class="pl-title">Agent-SSG: Cross-Layer Scheduling of Agent Workflows on Heterogeneous AI Systems</span><span class="pl-meta">Working draft &middot; September 2026 &middot; 6 pp. &middot; superseded by an October design revision</span><a href="/assets/papers/agent-ssg/v0.1/agent-ssg-mlsys27-v5.2.1.pdf">PDF</a> &middot; <a href="/research/agent-ssg/">Project page</a></li>
  <li><span class="pl-title">Style Adaptation module: Enhancing detector robustness to inter-manufacturer variability in surface defect detection</span><span class="pl-meta">Chen Li, Xiakai Pan, et al. &middot; <em>Computers in Industry</em>, 2024 &middot; peer-reviewed</span><a href="https://doi.org/10.1016/j.compind.2024.104084">DOI</a></li>
</ul>

Earlier TSG precursor drafts and full version histories: [Publications](/publications/).

## Contact

Open to conversations about research and engineering roles, and collaborations, in AI systems, compilers/runtimes, performance modeling, and agent infrastructure.

[GitHub](https://github.com/XiakaiPan) &middot; [CV](/cv/) &middot; [Writing](/writing/)

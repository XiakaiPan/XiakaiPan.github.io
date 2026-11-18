---
title: Academic CV
permalink: /cv/
description: "Academic CV of Xiakai Pan: machine learning systems research, computer architecture, publications, and engineering experience."
---

# Xiakai Pan (潘夏凯)

**Machine Learning Systems · AI Infrastructure · Computer Architecture**

[Research Statement](/statement/) · [Research](/research/) · [Publications](/publications/) · [GitHub](https://github.com/XiakaiPan)

Contact: [xiakpan@gmail.com](mailto:xiakpan@gmail.com). A PDF CV is available on request.

## Research Interests

I study how machine learning workloads map to heterogeneous accelerators, with an emphasis on compiler representations, execution scheduling, and performance modeling for large-model inference. I also study how long-horizon human–AI tasks retain state and carry work across sessions. My [Three Models](/research/three-models/) note describes how I use formal, simulation, and statistical modeling, with independent measurement as a check on their claims.

## Education

- **Tsinghua University** — Master’s degree in Data Science and Information Technology, 2021–2024.
- **Nankai University** — Bachelor’s degree in Chemistry, 2017–2021; additional studies in Chinese Language and Literature.

## Selected Research

### SSG — System Substrate Graph

*Baidu · Project lead · 2025–present*

- Led the design of a unified **Workload–System–Schedule** intermediate representation that exposes computation, memory, communication, and hardware hierarchy to the scheduler. Designed the **Build–Traverse–Translate** workflow to turn feasible schedules into executable plans.
- Evaluated generated FP16 GEMM kernels against cuBLAS on NVIDIA H20. In a Qwen3-8B inference experiment on **8×A800** at offered load 512, **DP4×TP2 delivered 57% higher throughput than TP8**. This result is specific to the reported configuration.

[Project and evaluation](/research/ssg/) · [Predictive execution modeling direction](/research/ssg-dt/)

### Computer Architecture and Simulation

*Tsinghua University · Graduate research · 2021–2024*

- Contributed to an out-of-order superscalar RISC-V processor design and tapeout project. Built a cycle-accurate simulation framework and implemented the out-of-order execution module.
- Built a multithreaded prototype combining Spike’s functional execution with SST performance modeling to study microarchitectural parameters such as issue width and buffer capacity.

### TSG — Task Substrate Graph

*Independent research · 2026–present*

Proposed a representation that separates the actor, task specification, and implementation so long-horizon tasks can be resumed and revised across sessions and executors. Built a personal workbench prototype for task-state recovery, handoffs, and revision tracking. The prototype records interaction traces for future evaluation of agent adaptation.

[Project and limitations](/research/tsg/)

## Publications & Preprints

- **Peer-reviewed journal article.** Chen Li, **Xiakai Pan**, et al. *Style Adaptation module: Enhancing detector robustness to inter-manufacturer variability in surface defect detection.* **Computers in Industry** (2024). [Read ↗](https://doi.org/10.1016/j.compind.2024.104084)
- **Technical report.** **Xiakai Pan** and Chaohan Pei. *System Substrate Graph: One Cross-Scale Representation of Workload, System, and Schedule for AI Computing.* Author web edition (2026). [Read ↗](/assets/papers/ssg/author-2026-11/ssg-technical-report-2026-11.pdf)
- **Self-hosted preprint.** **Xiakai Pan**. *Task Substrate Graph: A Formal Model of Evolving Human–AI Tasks* (2026). [Read ↗](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf)

## Professional Experience

### Baidu — Heterogeneous Computing Engineer

*September 2025–present*

- Adapted and tuned AWQ operators for accelerators and integrated them into vLLM. Worked on data layout, KV-cache updates, and kernel fusion for inference.

### Li Auto — NPU Architecture and Modeling Engineer

*July 2024–September 2025*

- **First-generation NPU:** Built a performance model of a mesh interconnect and used it to evaluate routing policies.
- **Second-generation NPU:** Developed a functional model of a configurable vector compute unit for quantization and attention workloads.
- **Third-generation NPU:** Built a gem5 performance model of vector coprocessor lanes to support architecture search.
- Developed operators and a graph-mapping and scheduling formulation based on the chip performance model; also contributed to runtime, driver, and firmware design and implementation.

### Earlier Internships

- **Borui Jingxin · NPU Architecture Modeling** (November 2023–January 2024): integrated a model into an NVDLA-based simulation environment and verified Linux boot.
- **PLCT Lab · RISC-V Virtualization Research** (July 2022–January 2023): studied RISC-V hypervisor extensions and KVM support in Spike and QEMU. Published [ten technical articles on RISC-V virtualization](/writing/) at TinyLab in 2023.

## Selected Technical Skills

C/C++ and Python · CUDA/Triton · vLLM · TVM/MLIR · gem5/SST/Spike/QEMU · functional and performance modeling · workload mapping and execution scheduling

*Updated November 18, 2026.*

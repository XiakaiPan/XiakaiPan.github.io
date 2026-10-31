---
title: CV
permalink: /cv/
---



# Xiakai Pan (潘夏凯)

**AI Computing & Task Intelligence**  
Research Engineer · Computer Architecture · Compiler/Runtime · AI Systems

[Research](/research/) · [Publications](/publications/) · [GitHub](https://github.com/XiakaiPan)

## Research Focus

My research focuses on structural modeling for AI computing and evolving human–AI tasks: **Three Models** (formal, simulation, statistical), the **SSG** series for workload–system–schedule execution modeling, and the parallel **TSG** series for persistent task structures and evolution.

## Experience

### Baidu — Heterogeneous Computing Engineer
**September 2025 – Present**

- GPU/NPU execution infrastructure, inference operator implementation and runtime adaptation.
- AWQ-related Kunlun accelerator operator optimization and integration with vLLM.
- Research prototypes for cross-scale execution representation and scheduling.

### Li Auto — NPU Architecture and Modeling Engineer
**July 2024 – September 2025**

- Accelerator functional/performance modeling, on-chip interconnect and routing studies.
- Vector compute/memory modeling, architectural exploration using gem5, and workload-guided hardware/software co-design.
- Operator, compiler, runtime, driver, and firmware integration.

### Borui Jingxin — NPU Architecture Modeling Intern
**November 2023 – January 2024**

NVDLA-related simulation environments, documentation, and model integration.

### PLCT Lab — RISC-V Virtualization Research Intern
**July 2022 – January 2023**

RISC-V hypervisor extensions, KVM, QEMU, and Spike; [public technical article](https://tinylab.org/riscv-kvm-mem-virt-impl/).

## Education

**Tsinghua University** — Master's degree, Data Science and Information Technology (2021–2024). Research in CPU architecture, simulation, and virtualization.

**Nankai University** — Bachelor's degree, Chemistry (2017–2021); additional studies in Chinese language and literature, with research experience in machine learning.

## Research & Technical Projects

- **SSG (System Substrate Graph):** one representation of `Execution = Schedule(Workload, System)` that enumerates legal schedules and emits runnable code or framework plans. On H20, generated GEMM kernels reach 49.6&ndash;110.1% of cuBLAS across nine shapes; on 8&times;A800, the same Schedule vocabulary expresses DP/TP/PP bindings for Qwen3 inference, SFT, and RL. Manuscript submitted September 2026.
- **Agent-SSG / SSG-DT:** design-stage extensions: joint scheduling of agent tool calls, model inference, and GPU operators; and a digital twin that predicts unmeasured executions from the same plan.
- **TSG (Task Substrate Graph):** a formal model of persistent, evolving human&ndash;AI tasks (preprint, September 2026).
- **Computer architecture:** superscalar performance modeling, functional/performance hybrid simulation, and RISC-V virtualization.

## Publication

**Chen Li, Xiakai Pan**, et al. *Style Adaptation module: Enhancing detector robustness to inter-manufacturer variability in surface defect detection.* **Computers in Industry**, 2024. [DOI](https://doi.org/10.1016/j.compind.2024.104084).

Manuscripts and preprints (not peer-reviewed): see [Publications](/publications/).

## Technical Areas

C/C++ · Python · GPU/NPU Operators · CUDA/Triton · TVM/MLIR/XLA · vLLM · AI Inference · gem5/SST/Spike/QEMU · Functional/Performance Modeling · Heterogeneous Scheduling · Agent Systems.

---

*CV updated October 2026. This public-oriented summary intentionally excludes private contact information, proprietary architectural detail, unpublished benchmark claims, and unverified acceptance claims.*

[Download Markdown CV](/downloads/Xiakai_Pan_CV.md)


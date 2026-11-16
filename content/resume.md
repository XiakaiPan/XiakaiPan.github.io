---
title: Industry Resume
permalink: /resume/
description: "Concise research-oriented industry resume for heterogeneous AI computing and systems research."
---

# Xiakai Pan (潘夏凯)

**AI Systems Research · Heterogeneous Computing · Compilers/Runtimes**

[Email](mailto:panxiakai@gmail.com) · [GitHub](https://github.com/XiakaiPan) · [Research Statement](/statement/) · [Academic CV](/cv/)

## Profile

Research-oriented systems engineer experienced in computer architecture, accelerator modeling, GPU/NPU execution, and compilers/runtimes. Current research focuses on explicit structural representations for AI execution (SSG) and persistent human–AI tasks (TSG).

## Selected Technical and Research Evidence

- **SSG:** Workload–System–Schedule, Build–Traverse–Translate and CMC/CRS execution modeling; operator, model and Agent workload scope. A [2026 technical manuscript](/assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf) reports best generated H20 GEMM kernels at **49.6–110.1% of cuBLAS** across nine FP16 shapes and a **+57%** Qwen3-8B throughput comparison on 8×A800 at one offered load. These are specific reported configurations, not universal guarantees.
- **TSG:** formal research into evolving human–AI task structures, reusable artifacts and specification changes; [2026 preprint](/assets/papers/tsg/v0.1/tsg-preprint-v3.1.13.pdf).
- **Architecture:** NPU functional/performance models, vector/memory and interconnect studies; gem5/SST-based simulation; RISC-V virtualization.
- **Peer-reviewed work:** [industrial computer vision, Computers in Industry (2024)](https://doi.org/10.1016/j.compind.2024.104084).

## Experience

**Baidu — Heterogeneous Computing Engineer (Sep 2025–Present)**  
GPU/NPU inference operators and runtimes; vLLM-related adaptation and research prototypes.

**Li Auto — NPU Architecture and Modeling Engineer (Jul 2024–Sep 2025)**  
Microarchitecture modeling, system-level performance exploration and compiler/runtime integration.

**Borui Jingxin — Architecture Modeling Intern (Nov 2023–Jan 2024)**  
NVDLA simulation and model integration.

**PLCT Lab — RISC-V Virtualization Intern (Jul 2022–Jan 2023)**  
KVM/QEMU/Spike virtualization; [published technical article](https://tinylab.org/riscv-kvm-mem-virt-impl/).

## Education and Tools

**Tsinghua University** — M.S., Data Science and Information Technology (2024).  
**Nankai University** — B.S., Chemistry (2021).

C/C++, Python, CUDA/Triton, TVM/MLIR/XLA, vLLM, gem5/SST/QEMU/Spike, AI inference and heterogeneous scheduling.

---

For research direction, contributions and limits, see the [Research Statement](/statement/) and [full Publications list](/publications/).

---
title: Writing
permalink: /writing/
description: "Technical articles and research notes by Xiakai Pan, including a ten-article RISC-V virtualization series."
---

# Writing

My earlier technical writing focuses on **RISC-V virtualization, operating systems, simulators and Linux/KVM internals**. The articles below were published on TinyLab (泰晓科技) in April–June 2023, during work related to PLCT Lab. The original site indexed them under three spelling variants of my name: XiaKai Pan, XiakaiPan and panxiakai.

## RISC-V Virtualization — Ten Technical Articles

Rather than a single tutorial, this is a series spanning practical Host/Guest setup, privileged execution, memory virtualization, exception and interrupt mechanisms, and their implementations in Spike, QEMU, KVM and kvmtool. Dates below are TinyLab publication dates, not the earlier manuscript creation dates.

| Date (2023) | Original article | Topic |
|---|---|---|
| Apr 25 | [用 QEMU/Spike+KVM 运行 RISC-V Host/Guest Linux](https://tinylab.org/riscv-kvm-qemu-spike-linux-usage/) | End-to-end system setup and Guest boot |
| May 02 | [RISC-V 虚拟化模式切换简析](https://tinylab.org/riscv-kvm-virt-mode-switch/) | Privilege modes, H extension, and Host/Guest transitions |
| May 09 | [RISC-V KVM 虚拟化：用户态程序](https://tinylab.org/riscv-kvm-user-app/) | KVM API, kvmtool and QEMU userspace components |
| May 16 | [RISC-V 内存虚拟化简析（一）](https://tinylab.org/riscv-kvm-mem-virt-1/) | Address translation, privileged instructions and CSR |
| May 25 | [RISC-V 内存虚拟化简析（二）](https://tinylab.org/riscv-kvm-mem-virt-2/) | Svinval, S-/H-mode memory and simulator implementation |
| May 30 | [RISC-V 架构 H 扩展中的 Trap 处理](https://tinylab.org/riscv-kvm-virt-trap/) | Trap/exception/interrupt semantics in QEMU and Spike |
| Jun 06 | [RISC 内存虚拟化在 KVM 及 kvmtool 中的实现](https://tinylab.org/riscv-kvm-mem-virt-impl/) | G-stage translation, memory allocation and HFENCE |
| Jun 13 | [RISC-V 异常处理在 KVM 中的实现](https://tinylab.org/riscv-kvm-excp-impl/) | KVM trap-exit and exception handling |
| Jun 20 | [RISC-V KVM 中断处理的实现（一）](https://tinylab.org/riscv-kvm-int-impl-1/) | QEMU/Spike interrupt handling |
| Jun 30 | [RISC-V KVM 中断处理的实现（二）](https://tinylab.org/riscv-kvm-int-impl-2/) | Interrupt injection, PLIC/CLINT, MMIO, kvmtool and KVM |

**Original publisher:** [TinyLab / 泰晓科技](https://tinylab.org/authors/). All links point to the publisher's original articles; the website does not redistribute their text or image assets.

## Research Notes

My newer work in **AI Systems**, including [Three Models](/research/three-models/), [SSG](/research/ssg/) and [TSG](/research/tsg/), is maintained as a separate research series. See the [Research Statement](/statement/) and [Publications](/publications/) for current manuscripts and evidence.

[Home](/) · [Research](/research/) · [CV](/cv/)

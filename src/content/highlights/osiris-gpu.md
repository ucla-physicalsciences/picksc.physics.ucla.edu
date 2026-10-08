---
title: OSIRIS on GPUs
theme: computing
paper:
  title: Acceleration of the particle-in-cell code Osiris with graphics processing units
  authors: R. P. Lee, J. R. Pierce, K. G. Miller, M. Almanza, A. Tableman, V. K. Decyk, R. A. Fonseca, E. P. Alves, W. B. Mori
  citation: J. Plasma Phys. 91, E8 (2025)
  doi: 10.1017/S0022377824001569
date: 2025-01-07
image: ../../assets/research/osiris-gpu.png
imageAlt: Three-dimensional OSIRIS simulation of the Weibel instability showing tangled magnetic filaments, and a 2D laser-wakefield simulation with dynamic load-balancing partitions.
figureCredit: Fig. 3, Lee et al., J. Plasma Phys. (2025), CC BY 4.0
featured: true
---
A CUDA extension to OSIRIS brings GPU acceleration to the full code, with excellent weak scaling on NERSC's Perlmutter. Node for node, the GPU version runs up to 14 times faster and is about 7 times more energy efficient than the optimized CPU code.

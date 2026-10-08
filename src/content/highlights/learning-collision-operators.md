---
title: Learning collision operators with differentiable simulators
theme: data-driven
paper:
  title: Learning collision operators from plasma phase space data using differentiable simulators
  authors: D. D. Carvalho, P. J. Bilbao, W. B. Mori, L. O. Silva, E. P. Alves
  citation: J. Plasma Phys. 92, E76 (2026)
  doi: 10.1017/S0022377826101755
date: 2026-06-01
image: ../../assets/research/collision-operators.png
imageAlt: Workflow diagram of learning advection and diffusion coefficients from PIC phase-space data with a differentiable Fokker–Planck solver and gradient-based optimization.
figureCredit: Fig. 2, Carvalho et al., J. Plasma Phys. (2026), CC BY 4.0
featured: true
---
A differentiable Fokker–Planck solver, trained by gradient descent on particle-in-cell phase-space data, learns the collision operator that best describes the plasma dynamics. The learned operators beat particle-track estimates and agree closely with theory.

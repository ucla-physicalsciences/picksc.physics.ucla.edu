---
title: AI/ML for plasma physics
subtitle: Coupling machine learning with kinetic simulations to accelerate discovery
order: 2
# image: ../../assets/areas/ai-ml.png
imageAlt: ""
figureCredit: ""
publications:
  - 10.1103/PhysRevResearch.4.033192
  - 10.1103/9fq1-vpqz
  - 10.1017/s0022377826101755
---
Plasmas are many-body systems whose nonlinear dynamics span an enormous range of spatial and temporal scales, which makes them challenging to describe with simple theories and to fully measure in experiments. We are developing machine-learning methods that work together with our first-principles kinetic simulations and with experimental data to accelerate discovery:

- **Reduced models from simulation data:** we use AI/ML to discover physically consistent, data-driven models of complex plasma phenomena, in the form of interpretable equations, directly from the data of our first-principles kinetic simulations.
  - A key target is learning kinetic-fluid closure models that bridge the gap between kinetic and fluid descriptions across different phenomena.
  - We showed, for example, that sparse regression can recover the hierarchy of plasma models, from the Vlasov equation to magnetohydrodynamics, from particle-in-cell data.
  - To keep learned models physically consistent, we embed fundamental symmetries, such as Lorentz and Galilean invariance, through data augmentation. We also use differentiable simulators to learn operators, such as collision operators, directly from plasma phase-space data.
- **Better simulation algorithms:** these approaches also open a path to more accurate and efficient algorithms for multiscale plasma simulations.
- **Experiments:** we are developing physics-informed machine-learning tools that blend partial experimental measurements with theoretical plasma models. The aim is to reconstruct the full state of the plasma, including quantities that are difficult or impossible to measure directly, and to guide how data are collected in high-repetition-rate experiments.

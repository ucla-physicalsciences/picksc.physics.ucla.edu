---
title: "Our software"
group: "overview"
order: 0
legacy: "software-overview.html"
repo: "https://github.com/UCLA-Plasma-Simulation-Group"
---

## Methodology

The particle-in-cell (PIC) technique has a rich history and its use in plasma physics continues to grow.
Interesting perspectives on the history and philosophy behind PIC for plasma simulation can be found in [1-3].

For plasmas, charged particles interact self consistently via the electromagnetic fields they themselves produce.
The PIC model works at the most fundamental, microscopic level. As a result, it is generally the most compute-intensive
model in plasma physics. PIC codes are used in almost all areas of plasma physics, including magnetic and inertial
fusion energy research, plasma-based acceleration and light sources, space physics, astrophysics, ion propulsion,
and plasma processing. PIC algorithms are also used in cosmology, accelerator physics, and semiclassical quantum
simulations.

Unlike molecular dynamics codes that are widely used in chemistry, where particles interact as binary pairs,
particles in PIC codes interact via fields which are calculated on a grid from a numerical solution to a set of
differential equations. This is possible whenever there is some differential equation that “describes” the
fields in terms of particle sources. There are a variety of PIC codes in common use.

These codes are differentiated by the kinds of forces retained in the model. The simplest is the electrostatic
force, described by a Poisson equation. More complex are the Darwin (non-radiative electromagnetics), and fully
electromagnetic and relativistic models. There are also other types of models including gyrokinetic, quasi-static,
and quantum models. Because PIC codes contain the richest physics, they are increasingly being used to validate
reduced plasma descriptions, such as fluid models. Due to the power of computers and the increasing sophistication
of the codes, PIC codes are also being used to model complex phenomena and experiments in full three dimensions.
Although the standard PIC algorithm is based on normalized parameters so that one simulation represents a
family of cases, phenomena that depend on absolute units are increasingly being added into PIC codes,
such as two body collisions, ionization, radiation reaction, and QED effects.

## Our software today

The UCLA Plasma Simulation Group has a long history of developing and using PIC software, with a focus on
high-frequency plasma phenomena in which electron kinetics is important. We develop and maintain the production
codes OSIRIS, QuickPIC, QPAD and UPIC-EMMA, and the Vlasov–Fokker–Planck code OSHUN, in which the distribution
function is expanded in spherical harmonics in momentum space and a linearized Landau–Boltzmann collision model
is used. We also maintain the UPIC Framework for rapidly building parallel PIC codes, a hierarchy of skeleton
codes, and educational software.

These codes use a variety of field solvers, current deposits, current smoothing and boundary conditions, and they
include binary collision and field ionization models. Data structures and algorithms for many-core and GPU
architectures, first explored in our skeleton codes, are now part of the production codes: OSIRIS, for example,
runs on GPUs.

Much of this work was supported by PICKSC, the NSF-funded Particle-in-Cell and Kinetic Simulation Software Center
at UCLA, whose aim was to make the group's codes openly available to the community. Today OSIRIS, QuickPIC, QPAD,
OSHUN, the UPIC Framework and the skeleton codes are all open source; see the individual pages and our
[GitHub organization](https://github.com/UCLA-Plasma-Simulation-Group).

## References

1. C. K. Birdsall and A. B. Langdon, “Plasma Physics via Computer Simulation,” McGraw-Hill, New York (1985).

2. R. W. Hockney and J. W. Eastwood, “Computer Simulation using Particles,” McGraw-Hill, New York (1981).

3. J. M. Dawson, “Particle Simulation of Plasmas,” Rev. of Modern Phys. 55, 403
(1983). [doi link](http://dx.doi.org/10.1103/RevModPhys.55.403)

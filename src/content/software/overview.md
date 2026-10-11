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
and plasma processing. PIC algorithms are also used in cosmology, accelerator physics, and semi classical quantum
simulations.

Unlike molecular dynamics codes that are widely used in chemistry, where particles interact as binary pairs,
particles in PIC codes interact via fields which are calculated on a grid from a numerical solution to a set of
differential equations. This is possible whenever there is some differential equation that “describes” the
fields in terms of particle sources. There are a variety of PIC codes in common use.

These codes are differentiated by the kinds of forces retained in the model. The simplest is the electrostatic
force, described by a Poisson equation. More complex are the Darwin (non-radiative electromagnetics), and fully
electromagnetic and relativistic models. There are also other types of models including gyrokinetic, quasi-static,
and quantum models Because PIC codes contain the richest physics, they are increasingly being used to validate
reduced plasma descriptions, such as fluid models. Due to the power of computers and the increasing sophistication
of the codes, PIC are also being used to model complex phenomenon and experiments in full three dimensions.
Although the standard PIC algorithm is based on normalized parameters so that one simulation represents a
family of cases, phenomenon that depends on absolute units are increasingly being added into PIC codes,
such as two body collisions, ionization, radiation reaction, and QED effects.

## PICKSC software activities

The UCLA plasma simulation group has an extensive history in developing and using PIC software. The current
activities mostly center around software for studying high frequency plasma phenomenon for which electron
kinetics is important.

The group has developed and maintained both Frameworks for rapidly building parallel PIC codes as well as
widely used production and educational codes. These codes use a variety of field solvers, current deposits,
current smoothing, and boundary conditions, and they also include binary collisional and field ionization
models. They also include data structures and algorithms useful for next generation many core platforms
including GPUs and Intel Phis. Besides the parallel PIC Framework (UPIC), the group is home to several
3D production PIC codes OSIRIS, UPIC-EMMA, MAGTAIL, and QuickPIC. The group is also home to a novel
multi-dimensional Vlasov Fokker Planck code called OSHUN in which the distribution function is expanded
into spherical harmonics in momentum space and a linearized Landau-Boltzman collision model is employed.

Activities within PICKSC are aimed at moving the Framework and some production codes into an Open Source
environmentas well as extracting some modules from the production codes into the UPIC Framework.

For example, currently UPIC only supports FFT based field solvers and in the near term we will be adding
finite difference solvers as well as rigorous charge conserving current deposits. Currently, illustrative
fully self-contained codes referred to skeleton codes are freely available. We anticipate UPIC 2.0 to
be available later this year. OSHUN is available through an Open Source license with a commercial exception.
UPIC-EMMA will be available through an Open Source license with a commercial exception later this year.

## References

1. C. K. Birdsall and A. B. Langdon, “Plasma Physics via Computer Simulation,” McGraw-Hill, New York (1985).

2. R. W. Hockney and J. W. Eastwood, “Computer Simulation using Particles,” McGraw-Hill, New York (1981).

3. J. M. Dawson, “Particle Simulation of Plasmas,” Rev. of Modern Phys. 55, 403
(1983). [doi link](http://dx.doi.org/10.1103/RevModPhys.55.403)

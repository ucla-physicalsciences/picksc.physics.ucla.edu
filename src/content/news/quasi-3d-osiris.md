---
title: "Implementation of a Quasi-3D algorithm into OSIRIS"
date: 2015-01-15
datePrecision: year
image: ./images/quasi-3d.jpeg
archive: true
---

PICKSC member Asher Davidson has recently published an article in the Journal of Computational Physics detailing
the implementation of a quasi-3D algorithm into OSIRIS.

For many plasma physics problems, three-dimensional and kinetic effects are very important. However, such simulations
are very computationally intensive. Fortunately, there is a class of problems for which there is nearly azimuthal symmetry
and the dominant three-dimensional physics is captured by the inclusion of only a few azimuthal harmonics. Recently, it
was proposed [1] to model one such problem, laser wakefield acceleration, by expanding the fields and currents in azimuthal
harmonics and truncating the expansion. The complex amplitudes of the fundamental and first harmonic for the fields were
solved on an r–z grid and a procedure for calculating the complex current amplitudes for each particle based on its motion
in Cartesian geometry was presented using a Marder’s correction to maintain the validity of Gauss’s law. In this paper,
we describe an implementation of this algorithm into OSIRIS using a rigorous charge conserving current deposition method
to maintain the validity of Gauss’s law. We show that this algorithm is a hybrid method which uses a particles-in-cell
description in r–z and a gridless description in ϕ. We include the ability to keep an arbitrary number of harmonics and
higher order particle shapes. Examples for laser wakefield acceleration, plasma wakefield acceleration, and beam loading
are also presented and directions for future work are discussed.

**References**

[A. Davidson, et. al., J. Comp. Phys. 281,1063 (2015)](http://dx.doi.org/10.1016/j.jcp.2014.10.064).

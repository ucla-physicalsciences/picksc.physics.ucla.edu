---
title: "3D OpenMP/MPI code benchmarks"
date: 2015-12-01
datePrecision: year
image: ./images/openmpi-img.jpg
archive: true
---

Viktor Decyk has developed fully 3D versions of skeleton PIC codes illustrating the hybrid parallel
algorithmic techniques for utilizing both OpenMP and MPI. These skeleton codes have recently been
benchmarked on the Edison machine at NERSC.

For the electromagnetic code on a problem size of 1024^3 grids with 27 particles/cell, one can see good
scaling up to nearly 100,000 cores, nearly the entire Edison machine. There are 10 FFTs per time step, and
the particle time gives about 2 psec/particle/time step at 98,304 cores.

Electrostatic, electromagnetic, and Darwin versions are available. These codes may be accessed here on
the [OpenMP/MPI skeleton code subpage](/software/openmp-mpi) or at our
[GitHub repository for skeleton codes](https://github.com/UCLA-Plasma-Simulation-Group/PIC-skeleton-codes).

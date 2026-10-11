---
title: "New QuickPIC branch"
date: 2018-05-03
datePrecision: month
image: ./images/software-release-img.jpg
archive: true
---

We have added a new branch in our QuickPIC repository ([available here](https://github.com/UCLA-Plasma-Simulation-Group/QuickPIC-OpenSource/tree/cori_vec)).

In addition to the MPI-OpenMP hybrid algorithm, this branch contains new 2D particle subroutines (in
source/part2d\_lib77.f) using vectorization algorithm.

The vectorization algorithm is originally from the UPIC
[Skeleton Code](/software/skeleton-codes). The algorithm in QuickPIC is transformed from the original one to one that solves the
Quasi-Static-Approximation PIC model. It also has been modified to enable MPI.

A simple profiling tool is added in the code to show the computing time consumed on the interested procedures.
The code can be compiled and run on Cori at NERSC. On a single KNL node with 68 threads, the total time spent on
one particle per step is 3.82 ns (including 1 iteration).

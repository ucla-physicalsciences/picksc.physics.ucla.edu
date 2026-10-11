---
title: "KNL Timings"
date: 2018-05-15
datePrecision: year
image: ./images/intel-knl.jpg
archive: true
---

PICKSC researchers have been updating our software to take full advantage of the many-core Intel Knight’s
Landing (KNL) nodes.

An OpenMP 3D electrostatic code from [UPIC 2.0](/software/upic-framework) has achieved a performance of 850 psec/particle-step on a
single Intel KNL node. On a large memory KNL such as the 96 GB node on the Cori machine at
[NERSC](http://www.nersc.gov/users/computational-systems/cori/), a PIC
simulation with a billion particles will run in about one second per time step.

A new branch of QuickPIC has also been compiled and run on Cori at NERSC. On a single
KNL node with 68 threads, the total time spent on one particle per step is 3.82 ns (including 1 iteration).

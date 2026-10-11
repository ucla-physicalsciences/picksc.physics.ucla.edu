---
title: "OSIRIS is now GPU and Intel Phi enabled"
date: 2014-11-02
datePrecision: year
image: ./images/cuda.png
archive: true
---

PICKSC members, notably Adam Tableman, Viktor Decyk, and Ricardo Fonseca, have developed strategies for porting
PIC codes to many-core architectures including GPUs and Intel Phi processors. Some of these ideas have been
implemented into OSIRIS so that it is GPU and Intel Phi enabled.

The GPU version of OSIRIS is fully operational in one, two and three dimensions, with support for most of the
features of OSIRIS. Dynamic GPU load balancing/tuning is included and the code is fully MPI ready and capable of
running on thousands of GPU nodes, with tailored support for Fermi and Kepler generations.

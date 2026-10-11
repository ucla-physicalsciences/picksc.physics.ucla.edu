---
title: "Vectorization"
group: "skeleton"
order: 4
legacy: "vectorization.html"
---

The 2D codes illustrate how to use vectorization with the Intel Processors. Two approaches are illustrated. One
uses the Intel SSE2 vector intrinsics, which is a low level data parallel language closely related to the native
assembly instructions. This gives the best performance but requires substantial effort and expertise. The other
approach uses compiler directives and often requires reorganization of the data structures and loops, but is
much simpler.

For the 2D electrostatic:  

- no-vec = 35 nsec/particle/timestep
- compiler vec = 18 nsec/particle/timestep
- SSE2 = 12 nsec/particle/timestep

For the 2-1/2D electromagnetic:  

- no-vec = 100 nsec/particle/timestep
- compiler vec = 60 nsec
- SSE2 = 34 nsec

With SSE2 intrinsics one typically obtains about 3x speedup compared to no vectorization. Compiler
vectorization achieves about 2x speedup. (All timings are on a 2.67GHz Intel Nehalem processor.)

1. 2D Vector Electrostatic Spectral code: [vpic2](/downloads/vpic2.tar.gz)

2. 2-1/2D Vector Electromagnetic Spectral code: [vbpic2](/downloads/vbpic2.tar.gz)

The following 3D codes illustrate how to use vectorization with the Intel PHI Coprocessors. Two
approaches are illustrated. One uses the Intel Knight’s Corner (KNC) MIC vector intrinsics, which is
a low level data parallel language closely related to the native assembly instructions. This gives the
best performance but requires substantial effort and expertise. The other approach uses compiler directives
and often requires reorganization of the data structures and loops, but is much simpler. Only a single
core of the PHI is used.

For the 3D electrostatic:  

- no-vec = 547 nsec/particle/timestep
- compiler vec = 264 nsec/particle/timestep
- KNC = 198 nsec/particle/timestep

For the 3D electromagnetic:  

- no-vec = 1031 nsec/particle/timestep
- compiler vec = 589 nsec/particle/timestep
- KNC = 469 nsec/particle/timestep

3. 3D Vector Electrostatic Spectral code: [vpic3](/downloads/vpic3.tar.gz)

4. 3D Vector Electromagnetic Spectral code: [vbpic3](/downloads/vbpic3.tar.gz)

Want to contact the developer? Send mail to Viktor Decyk
at [decyk@physics.ucla.edu](mailto:decyk@physics.ucla.edu).

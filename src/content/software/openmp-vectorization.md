---
title: "OpenMP/Vectorization"
group: "skeleton"
order: 8
legacy: "openmp-vectorization.html"
---

These codes illustrate how to use hybrid shared memory/vectorization algorithm, with a tiled scheme on
each shared memory multi-core node implemented with OpenMP and vectorization implemented with either SSE
(for 2d) or KNC (for 3d) vector intrinsics and compiler vectorization. KNC refers to the Knight’s Corner
Intel PHI. The tiling scheme is described in detail in Ref.[4]. The Intel SSE2 and KNC vector intrinsics
are a low level data parallel language closely related to the native assembly instructions. The compiler
vectorization uses compiler directives and often requires reorganization of the data structures and loops.

For the 2D electrostatic with 12 processing cores:  

- no-vec = 2.7 nsec/particle/timestep
- compiler vec = 2.0 nsec/particle/timestep
- SSE2 = 1.6 nsec/particle/timestep

For the 2-1/2D electromagnetic with 12 processing cores:  

- no-vec = 9.2 nsec/particle/timestep
- compiler vec = 6.1 nsec/particle/timestep
- SSE2 = 4.2 nsec/particle/timestep

With SSE2 intrinsics one typically obtains about 2x speedup compared to no vectorization. Compiler vectorization
achieves about 1.5x speedup.

For the 3D electrostatic with 60 processing cores:  

- no-vec = 4.2 nsec/particle/timestep
- compiler vec = 2.8 nsec/particle/timestep
- KNC = 2.1 nsec/particle/timestep

For the 3D electromagnetic with 60 processing cores:  

- no-vec = 10.2 nsec/particle/timestep
- compiler vec = 6.0 nsec/particle/timestep
- KNC = 4.8 nsec/particle/timestep

With KNC intrinsics one typically obtains about 2x speedup compared to no vectorization. Compiler vectorization
achieves about 1.5-1.7x speedup.

1. 2D Parallel Electrostatic Spectral code: [vmpic2](/downloads/vmpic2.tar.gz)

2. 3D Parallel Electrostatic Spectral code: [vmpic3](/downloads/vmpic3.tar.gz)

3. 2-1/2D Parallel Electromagnetic Spectral code: [vmbpic2](/downloads/vmbpic2.tar.gz)

4. 3D Parallel Electromagnetic Spectral code: [vmbpic3](/downloads/vmbpic3.tar.gz)

Want to contact the developer? Send mail to Viktor Decyk
at [decyk@physics.ucla.edu](mailto:decyk@physics.ucla.edu).

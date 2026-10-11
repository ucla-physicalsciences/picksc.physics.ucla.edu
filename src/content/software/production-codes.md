---
title: "Production codes"
group: "production"
order: 0
legacy: "production-codes.html"
---

The UCLA Plasma Simulation Group and its collaborators develop, maintain and improve several production codes:
OSIRIS, QuickPIC, QPAD, UPIC-EMMA and OSHUN.

[OSIRIS](/software/osiris) is a fully parallelized, fully relativistic and highly optimized multi-dimensional PIC
code that combines a finite-difference field solver with a rigorous charge-conserving current deposit. It is used to
study intense laser- and beam-plasma interactions, plasma-based acceleration, laser-solid interactions, the nonlinear
optics of high-energy-density plasmas, and plasma astrophysics. It can model problems in Lorentz-boosted frames, in
quasi-3D geometry (PIC in r–z and gridless in the azimuthal angle), and with a hybrid FFT/finite-difference field
solver. OSIRIS is open source; a GPU version, developed in our group, will be added to the open-source release.

[QuickPIC](/software/quickpic) is a fully three-dimensional quasi-static PIC code, built from components of the UPIC
Framework, for modeling short-pulse beam- and laser-plasma interactions. [QPAD](/software/qpad) combines the
quasi-static approximation with an azimuthal Fourier decomposition, making it orders of magnitude faster than 3D
quasi-static codes for problems that are close to azimuthally symmetric.

[UPIC-EMMA](/software/upic-emma) is a parallel, fully relativistic PIC code built on the UPIC Framework that uses a
spectral (FFT-based) field solver.

[OSHUN](/software/oshun) is a parallel, multi-dimensional Vlasov–Fokker–Planck code in which the distribution
function is expanded into an arbitrary number of spherical harmonics in momentum space, with a Landau–Boltzmann
collision operator.

## Availability

- **OSIRIS:** open source, at [osiris-code.github.io](https://osiris-code.github.io/)
- **QuickPIC:** [GitHub](https://github.com/UCLA-Plasma-Simulation-Group/QuickPIC-OpenSource)
- **QPAD:** [GitHub](https://github.com/UCLA-Plasma-Simulation-Group/QPAD)
- **UPIC-EMMA:** development repository on [GitHub](https://github.com/UCLA-Plasma-Simulation-Group/upic-emma-2.0)
- **OSHUN:** [GitHub](https://github.com/UCLA-Plasma-Simulation-Group/OSHUN)
- **UPIC Framework:** [GitHub](https://github.com/UCLA-Plasma-Simulation-Group/UPIC-2.0); see [UPIC Framework](/software/upic-framework)

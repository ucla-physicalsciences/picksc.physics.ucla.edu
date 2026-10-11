---
title: "Production codes"
group: "production"
order: 0
legacy: "production-codes.html"
---

The UCLA Plasma Simulation Group and its collaborators develop, maintain, and improve several production codes.
These include OSIRIS, QuickPIC, UPIC-EMMA, and OSHUN.

OSIRIS is a fully parallelized, fully relativistic, and highly optimized, multi-dimensional PIC code using
finite difference field solver combined with a rigorous charge conserving current deposit that is used to study
intense laser and beam plasma interactions, plasma based acceleration, laser-solid interactions, the nonlinear
optics of high energy density plasmas, and plasma astrophysics. It includes options to model problems in Lorentz
boosted frames for both relativistic shocks and laser-wakefield acceleration, a hybrid PIC in r-z and gridless
in azimuthal angle, and a hybrid FFT and finite difference field solver. There are GPU and Intel Phi enabled
versions of OSIRIS.

QuickPIC and UPIC-EMMA are based on the UPIC Framework. QuickPIC is a fully three-dimensional quasi-static
PIC code optimized for modeling short pulse beam and laser plasma interactions. UPIC-EMMA is a relatively new
parallelized, fully relativistic PIC code based on a spectral (FFT) based field solver.

UPIC-EMMA will become open source soon. In the near future, UPIC-ES and UPIC-Darwin will be open source
development projects to make production codes that use electrostatic and Darwin field solvers based on
reference application codes (see UPIC page) such as BEPS. PICKSC activities will include incorporating
modules from OSIRIS in the open source UPIC Framework as well as making available OSIRIS 1.0 available.

OSHUN is a novel parallelized multi-dimensional Vlasov Fokker Planck code in which the distribution function
is expanded into an arbitrary number of spherical harmonics in momentum space and with the Landau-Boltzman
collision operator.

## Availability

The UPIC 2.0 Framework is available on GitHub.

OSIRIS is available to any users upon request. Please email us.

OSHUN is available on GitHub.

---
title: "UPIC Framework"
group: "frameworks"
order: 1
legacy: "upic-framework.html"
repo: "https://github.com/UCLA-Plasma-Simulation-Group/PIC-skeleton-codes"
---

## UPIC 1.0

The UPIC (UCLA Parallel PIC) Framework was developed about 15 years ago to provide trusted components for
the rapid construction of new parallel PIC codes. The Idea was to provide libraries as well as reference PIC
applications which illustrate their use and users would then enhance and customize these components (You-Pick)
to build new codes. The focus was on high accuracy spectral methods. Message-passing was the primary
parallelization method, but multi-tasking with pthreads was also supported.

Both electrostatic and electromagnetic codes were supported in 1d, 2d, and 3d, as well as some Darwin codes,
with a variety of numerical methods and boundary conditions. The codes QuickPIC, QPIC, UPIC-Emma and others were
built from these components. The software design was layered with the lowest layer in Fortran77. Higher layers
in Fortran95 could either be procedural, using using wrappers, or object-based for more complex projects.

## UPIC 2.0

Since then, parallel programming has become increasingly complex, with 3 levels of parallelism required to
obtain optimal performance on advanced architectures. Since most of the time is spent processing particles, it
was important to solidify the data structures and algorithms needed for optimal particle processing before
implementing a new framework. A variety of small skeleton PIC applications were developed to experiment with
different levels of parallelism and programming models while maintaining portability as much as possible. In
addition, Fortran2003 has many useful features for high performance scientific computing, including complete
support for object-oriented programming and interoperability with C. We plan to expand beyond spectral methods
and increasingly support mixed language programming. As the new data structures and algorithms converge, a
new UPIC Framework is evolving for the 21st century.

The 1D, 2D, and 3D components of the UPIC 2.0 framework are open source. They may be accessed on the
[public GitHub repository](https://github.com/UCLA-Plasma-Simulation-Group/UPIC-2.0).

For 1D, the latest code is version UPIC 2.1.0. It uses only OpenMP for parallelization, and it includes
a python script. This is the first 1D version of the UPIC codes that has been made available, and it may be
directly downloaded here: [mbeps1\_21.tar.gz](/downloads/mbeps1_21.tar.gz).

For 2D and 3D, the latest version is UPIC 2.0.4.1. In this update, all python scripts have been updated
to work with python 2 and 3, and Makefiles have been modified to make them compatible with gfortran 10 (where
by default some warnings have become errors). The post-processors in the ReadFiles directories have been
reorganized and simplied for the user. In addition, analytic Maxwell solvers have been added which allow
the EM codes to run with time steps 2-3 larger than the courant limit. A bug in the velocity space
diagnostic was also fixed. UPIC 2.0.4.1 may be directly downloaded
here: [mpbeps2\_2041.tar.gz](/downloads/mpbeps2_2041.tar.gz) (2D)
and [mpbeps3\_2041.tar.gz](/downloads/mpbeps3_2041.tar.gz) (3D).

The 4th version (UPIC 2.0.4) included the major new features of support for vectorization and Python.
These codes can now be run with 3 levels of parallelism (Vector/MPI/OpenMP) or some subset. Python only
supports Vector/OpenMP. UPIC 2.0.4 may be directly downloaded
here: [mpbeps2\_204.tar.gz](/downloads/mpbeps2_204.tar.gz) (2D) and
[mpbeps3\_204.tar.gz](/downloads/mpbeps3_204.tar.gz) (3D).

The 3rd version (UPIC 2.0.3) included the major new features of restart capabilities and particle
diagnostics. Codes in this version and earlier can be compiled to run with 2 levels of parallelism
(MPI/OpenMP) or OpenMP only. UPIC 2.0.3 may be directly downloaded
here: [mpbeps2\_203.tar.gz](/downloads/mpbeps2_203.tar.gz) (2D) and
[mpbeps3\_203.tar.gz](/downloads/mpbeps3_203.tar.gz) (3D).

The 2nd version (UPIC 2.0.2) included the major new features of namelist inputs, a full set of
field diagnostics, and initialization with non-uniform densities. UPIC 2.0.2 may be directly downloaded
here: [mpbeps2\_202.tar.gz](/downloads/mpbeps2_202.tar.gz) (2D) and
[mpbeps3\_202.tar.gz](/downloads/mpbeps3_202.tar.gz) (3D).

The first version (UPIC 2.0.1) contained only the basic particle loop and field solvers, with a
uniform plasma and no diagnostics except energy. UPIC 2.0.1 may be directly downloaded
here: [mpbeps2\_201.tar.gz](/downloads/mpbeps2_201.tar.gz) (2D) and
[mpbeps3\_201.tar.gz](/downloads/mpbeps3_201.tar.gz) (3D).

---
title: "Gridless particle codes"
group: "frameworks"
order: 2
legacy: "gridless-particle-codes.html"
repo: "https://github.com/UCLA-Plasma-Simulation-Group/PIC-skeleton-codes"
---

Gridless (GL) particle codes are based on an exact solution of many interacting particles, based on a
Fourier series. GL codes run much more slowly than traditional PIC codes, on time scales of
microseconds/particle/time step/core compared to nanoseconds/particle/time step/core for traditional
PIC codes. However, they are designed for high accuracy.

The first gridless code was developed by John Dawson in the 1960s for electrostatic systems [1]. The
modern version of such codes are useful for very precise calculations, such as in studies of fundamental
statistical physics or evaluating new algorithms. Modern implementations have also been designed, in part,
to study unusual behavior in traditional PIC codes such as the effects of aliasing.

The only approximations in a GL code are a finite time step and a truncation of the Fourier series,
as well as round off errors. The major difference between a traditional spectral PIC code (such as
our UPIC codes) and a GL code is that the interpolations in the charge and current deposit and particle
advance are replaced by a summation over Fourier modes. The major benefit is that interpolation errors
(caused by aliasing), which result in non-physical behavior and even instabilities, are absent.
All field quantities in a GL code are stored in Fourier space, and the field solvers are essentially
the same as in a spectral PIC code.

We have further extended this technique to electromagnetic (EM) codes. For the EM codes, we have
also implemented analytic solutions for the evolution of Maxwell’s equation and particle advance
instead of finite difference solutions. As a result, the EM codes can take time steps larger than
the traditional Courant limit.

We are making available eight GL skeleton PIC codes.

## Serial gridless codes

The basic serial codes do not make use of any parallelism, and are the base codes for students or
researchers who are unfamiliar with girdless particle codes.

Electrostatic:  

- 1D Serial Electrostatic Spectral code: [pic1gl](/downloads/pic1gl.tar.gz)
- 2D Serial Electrostatic Spectral code: [pic2gl](/downloads/pic2gl.tar.gz)

Electromagnetic:  

- 1-2/2D Serial Electromagnetic Spectral code: [bpic1gl](/downloads/bpic1gl.tar.gz)
- 2-1/2D Serial Electromagnetic Spectral code: [bpic2gl](/downloads/bpic2gl.tar.gz)

## Parallel gridless codes

These codes illustrate how to use shared memory parallelism with OpenMP. The push procedures are parallelized
over particles, the deposit procedures are parallelized over Fourier modes.

Electrostatic:  

- 1D Parallel Electrostatic Spectral code: [mpic1gl](/downloads/mpic1gl.tar.gz)
- 2D Parallel Electrostatic Spectral code: [mpic2gl](/downloads/mpic2gl.tar.gz)

Electromagnetic:  

- 1-2/2D Parallel Electromagnetic Spectral code: [mbpic1gl](/downloads/mbpic1gl.tar.gz)
- 2-1/2D Parallel Electromagnetic Spectral code: [mbpic2gl](/downloads/mbpic2gl.tar.gz)

[1] John M. Dawson, “The Electrostatic Sheet Model for a Plasma and its Modification to Finite-Size Particles,”
Methods in Computational Physics, volume 9, B. Alder, S. Fernback, and M. Rotenburg, Ed. [Academic Press, New York,
1970, p. 1.]

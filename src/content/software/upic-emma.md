---
title: "UPIC-EMMA"
group: "production"
order: 5
legacy: "upic-emma.html"
---

UPIC-Emma [1] is a new fully relativistic, fully parallelized, multidimensional electromagnetic spectral PIC code
built from components from the UPIC Framework. It uses a fully spectral (FFT) based field solver as described in [2].
It includes the ability to launch laser pulses in both the lab and Lorentz boosted frame. It includes options for
eliminating the robust numerical instability (Numerical Cherenkov Instability-NCI) that arises when the plasma drifts
across the grid relativistically. This is accomplished by modifying the field solver near NCI unstable modes in k-space
which can be pinpointed based on recent theoretical work in [3-4]. It is currently being developed to study laser wakefield
acceleration and relativistic shocks.

## References

1. Yu, Peicheng, Xu, Xinlu, Decyk, Viktor K., An, Weiming, Vieira, Jorge, Tsung, Frank S., Fonseca, Ricardo A., Lu,
Wei, Silva, Luis O., Mori, Warren B., “Modeling of laser wakefield acceleration in Lorentz boosted frame using EM-PIC
code with spectral solver.” JOURNAL OF COMPUTATIONAL PHYSICS 266, 124
(2014). [doi link](http://doi.org/10.1016/j.jcp.2014.02.016)

2. J. M. Dawson, “Particle Simulation of Plasmas,” Rev. of Modern Phys. 55, 403 (1983).
[doi link](http://dx.doi.org/10.1103/RevModPhys.55.403)

3. Xu, Xinlu, Yu, Peicheng, Martins, Samual F., Tsung, Frank S., Decyk, Viktor K., Vieira, Jorge, Fonseca, Ricardo
A., Lu, Wei, Silva, Luis O., Mori, Warren B., “Numerical instability due to relativistic plasma drift in EM-PIC
simulations.” COMPUTER PHYSICS COMMUNICATIONS 184, 2503 (2013). [doi link](http://doi.org/10.1016/j.cpc.2013.07.003)

4. Peicheng Yu, Xinlu Xu, Viktor K. Decyk, Frederico Fiuza, Jorge Vieira, Frank S. Tsung, Ricardo A. Fonseca, Wei Lu,
Luis O. Silva, Warren B. Mori, “Elimination of the numerical Cerenkov instability for spectral EM-PIC codes.” COMPUTER
PHYSICS COMMUNICATIONS 192, 32 (2015). [doi link](http://dx.doi.org/10.1016/j.cpc.2015.02.018)

---
title: "Mitigation of numerical Cerenkov radiation in PIC"
date: 2015-02-05
datePrecision: month
image: ./images/cerenkov-peicheng.png
archive: true
---

UCLA graduate student Peicheng Yu, current PICKSC post-doc Xinlu Xu, and collaborators have been investigating
the mitigation of the numerical Cerenkov instability (NCI) which occurs when a plasma drifts near the speed of
light in a PIC code. In a series of papers (references below) they have developed a general theory as well as
mitigation strategies for fully spectral (FFT based) and hybrid (FFT and finite difference) solvers. Recently
they published an article in Computer Physics Communications [1] and posted a new article on the arxiv:
[arXiv:1502.01376](https://arxiv.org/abs/1502.01376).

**References**

1. P. Yu, X. Xu, V. K. Decyk, F. Fiuza, J. Vieira, F. S. Tsung, R. A. Fonseca, W. Lu, L. O. Silva, W. B. Mori,
“Elimination of the numerical Cerenkov instability for spectral EM-PIC codes.” Computer Physics Communications 192,
32 (2015). [doi:10.1016/j.cpc.2015.02.018](https://doi.org/10.1016/j.cpc.2015.02.018)

2. P. Yu, X. Xu, V. K. Decyk, W. An, J. Vieira, F. S. Tsung, R. A. Fonseca, W. Lu, L. O. Silva, W. B. Mori,
“Modeling of laser wakefield acceleration in Lorentz boosted frame using EM-PIC code with spectral solver.”
Journal of Computational Physics 266, 124 (2014). [doi:10.1016/j.jcp.2014.02.016](https://doi.org/10.1016/j.jcp.2014.02.016)

3. X. Xu, P. Yu, S. F. Martins, F. S. Tsung, V. K. Decyk, J. Vieira, R. A. Fonseca, W. Lu, L. O. Silva,
W. B. Mori, “Numerical instability due to relativistic plasma drift in EM-PIC simulations.” Computer Physics
Communications 184, 2503 (2013). [doi:10.1016/j.cpc.2013.07.003](https://doi.org/10.1016/j.cpc.2013.07.003)

4. P. Yu, et al., in Proc. 16th Advanced Accelerator Concepts Workshop, San Jose, California, 2014.

5. P. Yu, X. Xu, V. K. Decyk, S. F. Martins, F. S. Tsung, J. Vieira, R. A. Fonseca, W. Lu, L. O. Silva, and
W. B. Mori, “Modeling of laser wakefield acceleration in the Lorentz boosted frame using OSIRIS and UPIC framework,” AIP
Conf. Proc. 1507, 416 (2012).

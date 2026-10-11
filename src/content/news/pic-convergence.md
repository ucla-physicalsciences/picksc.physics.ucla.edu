---
title: "Verification and Convergence Properties of Particle-in-Cell Codes"
date: 2014-10-02
datePrecision: year
image: ./images/pic-conv.jpeg
archive: true
---

Despite the wide use of PIC codes throughout plasma physics for over 50 years, there still does not appear to
be a consensus on the mathematical model that PIC codes represent. PICKSC researchers have recently found that
a conventional spectral PIC code can be shown to converge to a spectral gridless code with finite-size particles,
indicating that the appropriate underlying model of PIC codes is the Klimontovich equation with finite-size
particles as opposed to the Vlasov equation or a statistical model such as the Vlasov-Boltzmann equation.

Using gridless codes developed by Viktor Decyk for both electrostatic and electromagnetic cases, the energy
evolution of a 1D, periodic, thermal plasma was shown to converge exactly (within machine precision) as the
number of Fourier modes, the particle size, and the time step were varied. Following this, the researchers
compared a conventional spectral PIC code to the gridless code, showing the convergence of electrostatic
and electromagnetic PIC codes to the gridless code as the cell size was varied and the particle size was
kept constant. They further verified conditions for which electron plasma waves had the proper dispersion
relation. Interestingly, these convergence tests suggested that when using PIC codes with Gaussian-shaped
particles, convergence occurred when using grid sizes less than half the electron Debye length and a particle
size of approximately one Debye length, contrasting slightly with conventional PIC usage of equal grid sizes
and particles sizes.

**References**

[B. J. Winjum, J. J. Tu, S. S. Su, V. K. Decyk, and W. B. Mori, “Verification and Convergence Properties
of a Particle-In-Cell Code”, to be published.]

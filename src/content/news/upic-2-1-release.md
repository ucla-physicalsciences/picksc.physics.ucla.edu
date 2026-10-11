---
title: "New UPIC Releases"
date: 2021-03-28
datePrecision: month
image: ./images/soft-release.jpeg
archive: true
---

The PICKSC group has released updated UPIC codes.

For 1D, the latest code is version UPIC 2.1.0. It uses only OpenMP for parallelization, and it includes a
python script. This is the first 1D version of the UPIC codes that has been made available.

For 2D and 3D, the latest version is UPIC 2.0.4.1. In this update, all python scripts have been updated to
work with python 2 and 3, and Makefiles have been modified to make them compatible with gfortran 10 (where by
default some warnings have become errors). The post-processors in the ReadFiles directories have been reorganized
and simplified for the user. In addition, analytic Maxwell solvers have been added which allow the EM codes to run
with time steps 2-3 larger than the courant limit. A bug in the velocity space diagnostic was also fixed.

All of these codes may be directly downloaded [here](/software/upic-framework) on the PICKSC site. The public repository is also available
on GitHub and may be found here: [UPIC-2.0](https://github.com/UCLA-Plasma-Simulation-Group/UPIC-2.0)

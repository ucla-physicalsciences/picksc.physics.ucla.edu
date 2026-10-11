---
title: "Serial"
group: "skeleton"
order: 1
legacy: "serial.html"
repo: "https://github.com/UCLA-Plasma-Simulation-Group/PIC-skeleton-codes"
---

The basic serial codes do not make use of any parallelism, and are the base codes for students or researchers
who are unfamiliar with PIC codes.

## Python Serial Code

Python\_pic2 is a 2D electrostatic serial code. It is essentially equivalent in operation to the Fortran code
pic2 below. More details may be found in its associated README. [Note: README not linked in original site].

2D Serial Electrostatic Spectral code: [python\_pic2](/downloads/python_pic2.tar.gz)

## Fortran Serial Codes

For the 2D electrostatic code there are 8 procedures in the inner loop, only 3 of which are computationally
intensive, and this code contains about 2,000 lines of code in each language. A typical execution time for the
particle part of this code is about 33 ns/particle/time-step. For the 2-1/2D electromagnetic code there are 14
procedures in the inner loop, only 4 of which are computationally intensive, and this code contains approximately
4,000 lines of code in each language. A typical execution time for the particle part of this code is about 110
ns/particle/time-step. For the 2-1/2D Darwin code there are 21 procedures in the inner loop, only 6 of which
are computationally intensive, and this code contains approximately 4,000 lines of code in each language. A
typical execution time for the particle part of this code is about 256 ns/particle/time-step. (All timings
are on a 2.67GHz Intel Nehalem processor.)

For the 3D electrostatic code there are 8 procedures in the inner loop, only 3 of which are computationally
intensive, and this code contains about 2,500 lines of code in each language. A typical execution time for the
particle part of this code is about 60 ns/particle/time-step. For the 3D electromagnetic code there are 14
procedures in the inner loop, only 4 of which are computationally intensive, and this code contains approximately
5,500 lines of code in each language. A typical execution time for the particle part of this code is about 150
ns/particle/time-step. For the 3D Darwin code there are 21 procedures in the inner loop, only 6 of which are
computationally intensive, and this code contains approximately 7,000 lines of code in each language. A typical
execution time for the particle part of this code is about 470 ns/particle/time-step. (All timings are on a
2.67GHz Intel Nehalem processor.)

## Electrostatic

1. 1D Serial Electrostatic Spectral code: [pic1](/downloads/pic1.tar.gz)

2. 2D Serial Electrostatic Spectral code: [pic2](/downloads/pic2.tar.gz)

3. 3D Serial Electrostatic Spectral code: [pic3](/downloads/pic3.tar.gz)

## Electromagnetic

4. 1-2/2D Serial Electromagnetic Spectral code: [bpic1](/downloads/bpic1.tar.gz)

5. 2-1/2D Serial Electromagnetic Spectral code: [bpic2](/downloads/bpic2.tar.gz)

6. 3D Serial Electromagnetic Spectral code: [bpic3](/downloads/bpic3.tar.gz)

## Darwin

7. 1-2/2D Serial Darwin Spectral code: [dpic1](/downloads/dpic1.tar.gz)

8. 2-1/2D Serial Darwin Spectral code: [dpic2](/downloads/dpic2.tar.gz)

9. 3D Serial Darwin Spectral code: [dpic3](/downloads/dpic3.tar.gz)

Want to contact the developer? Send mail to Viktor Decyk
at [decyk@physics.ucla.edu](mailto:decyk@physics.ucla.edu).

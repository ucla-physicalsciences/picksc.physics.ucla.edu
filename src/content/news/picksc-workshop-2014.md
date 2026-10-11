---
title: "PICKSC hosts first annual workshop"
date: 2014-09-24
datePrecision: month
image: ./images/picksc-workshop.jpeg
archive: true
---

The UCLA Particle-in-Cell (PIC) and Kinetic Simulation Software Center (PICKSC) hosted a workshop on enabling software
interoperability within the PIC community. We invited the primary developers of about a dozen major PIC codes used in
the study of Laser Plasma Interactions (LPI), as well as a few developers from other areas. The LPI community shares
intellectual ideas about simulations effectively, but has rarely shared the software itself. There is no large community
code. Almost all the developers we invited accepted, indicating a strong interest in this topic.

The workshop was held at UCLA from Sept 22-24, 2014. The four sessions were primarily organized as discussions, with
short presentations to add additional material. The first major topic was whether interoperability was desired and what
it actually means. There was agreement on a wide number of issues:

1. The desire for a code of ethics, acknowledgment when code is reused. This could be an acknowledgement in a
  publication, references to papers, or authorship in a publication. The latter might be appropriate if a shared
  code enabled new research capability.
2. Desire for standard problems to verify or validate new codes or modified codes, including a database of
  physics benchmarks with standard inputs. One would like to easily reproduce the results of a paper, in hours,
  not months, with an independently developed code.
3. Desire for common display formats.
4. Interoperability of software may be enabled via middleware, with simple interfaces.
5. Desire for workflow interoperability between different codes, using output of one code as input to another.

The second major topic was how to enable software interoperability. The attendees discussed and compared units, data
structures and objects used in the various codes. Two languages were in common use in the community, Fortran and C/C++.
Scripting languages (often Python) was sometimes used to glue components together. Fortran2003 has standard interoperability
with C which simplifies language interoperability. There were two common types of units in use, dimensionless units and SI.
Dimensionless units are used by those who adhere to the philosophy that a simulation represents many actual physical systems.
Translating units is generally straightforward, but can be tricky since not everything is well documented. Some codes had
public units for input/output but different units internally. Among object-oriented codes, there was a wide variety of
classes with different dependences. It was felt that only simple objects could actually interoperate at this time. Different
parallel domain decompositions used in the code could also pose a problem, but this was not extensively discussed.

The third major topic was how to enable interoperability of algorithms. There was a consensus that providing a simple
unit test for each new algorithm, which compares the algorithm with some analytic solution and could be run and executed
independently of the actual PIC code. The use of skeleton codes (or mini-apps) to illustrate how a collection of algorithms
interoperate was also discussed. There was a consensus that PICKSC can serve as a focal point of PIC codes containing
pointers between various codes in the community.

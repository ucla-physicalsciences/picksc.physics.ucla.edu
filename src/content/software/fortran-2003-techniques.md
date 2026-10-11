---
title: "Fortran 2003 techniques"
group: "frameworks"
order: 3
legacy: "fortran-2003-techniques.html"
repo: "https://github.com/UCLA-Plasma-Simulation-Group/PIC-skeleton-codes"
---

## Fortran 2003 Techniques

In the course of code development, PICKSC members explore new programming techniques that fully utilize the
emerging capabilities of new and/or developing computer languages. This falls under two main categories: code
development for developing architectures and code development with developing languages.

On this page we intend to make available codes that highlight techniques we have found to be useful for
properly taking advantage of developing computer languages.

Fortran 2003 allows code developers to use object-oriented techniques. However, we found that some
experimentation was necessary in order to successfully write, compile, and run object-oriented codes.
The following code illustrates a code that takes advantage of the OO model available with Fortran 2003.

**Database Class with Fortran 2003 OO**: [Database\_f03](/downloads/Database_f03.tar.gz).
This object-oriented benchmark consists of
a database of records that uses a polymorphic personnel type that can point to any of various kinds of
personnel. Two different kinds of personnel classes are related by inheritance from the base class:
Students and Teachers. Polymorphic types and inheritance are new features in Fortran 2003, and this
simple classic example illustrates their use. An earlier translation of this example into Fortran90
was described in: V. K. Decyk, C. D. Norton, and B. K. Szymanski, “How to Express C++ Concepts in
Fortran 90,” Scientiﬁc Programming, vol. 6, No. 4, IOS Press, Winter 1997, p. 363;
[DOI Link](http://dx.doi.org/10.1155/1997/570746).

**Generic Code with Fortran 2003 OO**: [emf](/downloads/emf.tar.gz). This simple example illustrates how to use abstract
data types to implement a generic code which could execute one of several different codes.

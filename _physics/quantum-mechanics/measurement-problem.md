---
layout:         post
tab:	        physics
categories:     Quantum-Mechanics
<!-- category:       Quantum-Mechanics -->
title:          The Measurement Problem
date:           2023-09-11  07:05:00 +0200
---

The time-evolution of a quantum state characterized by a wavefunction $\Psi$ is given by the (linear) Schrödinger Equation

$$\mathrm{i} \hbar \frac{\partial}{\partial t} \Psi(\boldsymbol{r}, t) = H \Psi(\boldsymbol{r}, t) = - \frac{\hbar^{2}}{2m} \boldsymbol{\nabla}^{2} \Psi(\boldsymbol{r}, t) + V \Psi(\boldsymbol{r},t),$$

where $V$ encodes the interaction or potential between particles described by the wavefunction $\Psi(\boldsymbol{r},t)$.

Note that the Schrödinger Equation is a **linear** differential equation.

In bra-ket notation, one can write the Schrödinger Equation as

$$ \mathrm{i} \hbar \frac{\partial}{\partial t} \vert \Psi(\boldsymbol{r}, t) \rangle = \hat{H} \vert \Psi(\boldsymbol{r}, t) \rangle.$$

Further, the quantum state can be expressed as a superposition:

$$\vert \Psi(\boldsymbol{r}, t) \rangle = \alpha_{1} \vert \psi_{1} \rangle + \alpha_{2} \vert \psi_{2} \rangle.$$
Since the Schrödinger Equation is linear, we obtain

$$ \mathrm{i} \hbar \alpha_{1} \frac{\partial}{\partial t} \vert \psi_{1} \rangle + \mathrm{i} \hbar \alpha_{2} \frac{\partial}{\partial t}\vert \psi_{2}\rangle = \alpha_{1} \hat{H} \vert \psi_{1} \rangle + \alpha_{2} \hat{H} \vert \psi_{2} \rangle.$$

The problem is: we **never** observe superpositions. We only observe **one** quantum state.

One might say: "*... but the wavefunction collapses into a single quantum state by a measurement!*"\
But what is the difference between a ''measurement'' and the interaction of a bunch of particles (measurement apparatus) with a bunch of other particles (detected particles), which interaction is already described by $V$ in the Schrödinger Equation?\
Every interaction is already contained in the Hamiltonian (by $V$) of the Schrödinger Equation!

Therefore, we have 3 options:
1. **The Schrödinger Equation is wrong**, or at least, quantum states do not evolve according to a linear differential equation as the Schrödinger Equation. \
    $\Longrightarrow$ Objective-collapse theories, Ghirardi–Rimini–Weber theory
2. The quantum system is not described by $\Psi$ alone. \
    $\Longrightarrow$ "*hidden-variable theory*", e.g. **Bohmian Mechanics**
3. Who said that everything that we observe is everything that **exists**?! 😏 \
$\Longrightarrow$ Many–Worlds interpretation

Although I am not completely satisfied with those options, I would side with deterministic approaches like **Bohmian Mechanics**.

One might say: "*... but Bell's Theorem proves that there is no hidden–variable theory!*"\
And this, dear friend, is unfortunately one of the biggest misconceptions circulating even in the highest academic circles in physics. This is **wrong**.

The conclusion of the empirical data and Bell's Theorem is the following:\
**Every** theory – with **or without** "*hidden-variables*" – which aims to reproduce the same measurement statistics as "ordinary" quantum mechanics and **simultaneously** assumes "statistical independence/measurement independence", contains some kind of **non-locality**.

The choice is *not* between **locality** and **determinism**, since only **superdeterminism** (denial of "statistical independence/measurement independence") can save locality.\
The choice is between **locality** and **"statistical independence/measurement independence"**.

(L) locality condition:

$$
P(A \vert a, b, \lambda) = P(A \vert a, \lambda) \\
P(B \vert a, b, \lambda) = P(B \vert b, \lambda)
$$

(SI) statistical independence/measurement independence condition:

$$
P(\lambda \vert a, b) = P(\lambda)
$$

• $A/B$: measurement outcome of Alice/Bob

• $a/b$: measurement setting of Alice/Bob

• $\lambda$: ''hidden variable'' (although it is also possible that $\lambda = \Psi$, has nothing to do with a ''hidden variable'' and therefore applies to **all** theories – regardless of whether they assume $\Psi$ describes the entire system or not)

Everyone is pointing with their fingers on Bohmian Mechanics since it is explicitly non-local and therefore "*incompatible with relativity*", while ignoring that **every theory** that is not (super)deterministic **has to be non-local**. This is the essence of Bell's Theorem.

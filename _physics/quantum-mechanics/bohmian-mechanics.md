---
layout:         post
tab:	        physics
categories:     Quantum-Mechanics
<!-- category:       Quantum-Mechanics -->
title:          Bohmian Mechanics
date:           2023-09-11  07:05:00 +0200
---

Bohmian Mechanics is a theory about $N$-particles moving along trajectories with position

$$
\boldsymbol{q}_{k}(t): \R \to \R^{3},
$$

where $k$ indicates the $k$-th particle.

For the sake of convenience, we denote the set of all particle positions as $$\boldsymbol{Q}(t) := \{ \boldsymbol{q}_{1}(t), ..., \boldsymbol{q}_{N}(t) \} \subset \mathbb{R}^{3N}$$ .

Those particle positions are guided by a (universal) wavefunction

$$
\Psi(\boldsymbol{Q}, t): \R^{3N} \times \R \mapsto \mathbb{C}, \Psi(\boldsymbol{Q},t) = R(\boldsymbol{Q}, t) \mathrm{e}^{\frac{\mathrm{i}}{\hbar} S(\boldsymbol{Q},t)},
$$

which is defined on configuration space.


The wavefunction evolves according to the Schrödinger equation, which is a **linear** differential equation

$$
\mathrm{i} \hbar \frac{\partial}{\partial t} \Psi(\boldsymbol{Q}, t) = - \sum_{k = 1}^{N}\frac{\hbar^{2}}{2m_{k}} \boldsymbol{\nabla}_{k}^{2} \Psi(\boldsymbol{Q}, t) + V(\boldsymbol{Q}) \Psi(\boldsymbol{Q}, t),
$$

where $\boldsymbol{\nabla}_{k}$ acts on the $k$-th particle position.

The particle positions are guided by the wavefunction according to the guiding equation

$$
\frac{\mathrm{d}}{\mathrm{d} t} \boldsymbol{q}_{k}(t) = \frac{\hbar}{m_{k}} \text{Im} \biggl[\frac{\Psi^{*}(\boldsymbol{Q},t) \boldsymbol{\nabla}_{k} \Psi(\boldsymbol{Q},t)}{\Psi^{*}(\boldsymbol{Q},t) \Psi(\boldsymbol{Q}, t)} \biggr].
$$

The guiding equation can be rewritten in the terms of the phase of the wavefunction $S(\boldsymbol{Q}, t)$, such that

$$
\frac{\mathrm{d}}{\mathrm{d} t} \boldsymbol{q}_{k}(t) = \frac{1}{m_{k}} \boldsymbol{\nabla}_{k} S(\boldsymbol{Q},t).
$$


---
layout:         post
tab:	        physics
categories:     Electrodynamics
katex:          True
title:          The Maxwell Equations
date:           2021-04-06  15:00:00 +0200
date-last-mod:  2022-08-17  18:20:00 +0200
---

<!-- <div style="display: none"> -->
<!--   \( -->
<!--   {% include latex-preamble.sty %} -->
<!--   \) -->
<!-- </div> -->

<!-- $$ -->
<!-- \begin{aligned} -->
<!--     \boldsymbol{\nabla \cdot E} &= 4 \pi \rho \\ -->
<!--     \boldsymbol{\nabla \cdot B} &= 0 \\ -->
<!--     \boldsymbol{\nabla \times E} &= -\frac{1}{c} \frac{\partial}{\partial t} \boldsymbol{B} \\ -->
<!--     \boldsymbol{\nabla \times B} &= \frac{1}{c} \biggl(4 \pi \boldsymbol{j} + \frac{\partial}{\partial t} \boldsymbol{E} \biggr) -->
<!-- \end{aligned} -->
<!-- $$ -->

## Differential Form

In cgs/gaussian units:

\begin{aligned}
    \boldsymbol{\nabla \cdot} \boldsymbol{E}(\boldsymbol{r}, t) &= 4 \pi \rho(\boldsymbol{r},t) \tag{MWI} \\
    \boldsymbol{\nabla \cdot} \boldsymbol{B}(\boldsymbol{r},t) &= 0 \\
    \boldsymbol{\nabla \times} \boldsymbol{E}(\boldsymbol{r},t) &= - \frac{1}{c} \frac{\partial }{\partial t} \boldsymbol{B}(\boldsymbol{r},t) \\
    \boldsymbol{\nabla \times} \boldsymbol{B}(\boldsymbol{r},t) &= \frac{1}{c} \biggl(4 \pi \boldsymbol{j}(\boldsymbol{r},t) + \frac{\partial }{\partial t} \boldsymbol{E}(\boldsymbol{r},t)\biggr)
\end{aligned}

### Homogeneous vs. Inhomogeneous

\begin{aligned}
    \boldsymbol{\nabla \cdot} \boldsymbol{B}(\boldsymbol{r},t) &= 0 \\
    \boldsymbol{\nabla \times} \boldsymbol{E}(\boldsymbol{r},t) + \frac{1}{c} \frac{\partial }{\partial t} \boldsymbol{B}(\boldsymbol{r},t) &= 0 \\
    \boldsymbol{\nabla \cdot} \boldsymbol{E}(\boldsymbol{r}, t) &= 4 \pi \rho(\boldsymbol{r},t) \\
    \boldsymbol{\nabla \times} \boldsymbol{B}(\boldsymbol{r},t) - \frac{1}{c} \frac{\partial}{\partial t} \boldsymbol{B}(\boldsymbol{r},t) &= \frac{4 \pi}{c} \boldsymbol{j}(\boldsymbol{r},t)
\end{aligned}


## Integral Form

<!-- Now, I want to test some of my macros. Let's see, if they work. -->

<!-- $$ -->
<!-- \begin{aligned} -->
<!--     \div{E} &= 4 \pi \rho \\ -->
<!--     \div{B} &= 0 \\ -->
<!--     \curl{E} &= - \frac{1}{c} \pdv{}{}{t} \vb{B} \\ -->
<!--     \curl{B} &= \frac{1}{c} \biggl(4 \pi \vb{j} + \pdv{}{}{t} \vb{E} \biggr) -->
<!-- \end{aligned} -->
<!-- $$ -->

<!-- Let's try the wave equation in one dimension. -->

<!-- <!-1- $$-\frac{1}{c^{2}}\pdv{2}{}{t} \psi(x,t) + \pdv{2}{}{x} \psi(x,t) = 0$$. -1-> -->

<!-- Let's try them step by step. -->

<!-- First, the sets: -->
<!-- $$\N \subset \Z \subset \Q \subset \R \subset \C.$$ -->

<!-- Then, Euler's identity (for `\mathrm{e}` and `\mathrm{i}`). -->
<!-- $$\E^{\I x} = \cos(x) + \I \sin(x).$$ -->

<!-- Then, some vector and vector operations on $\vb{x}, \vb{y} \in \R^{3}$. -->
<!-- Skalarproduct: -->
<!-- $$\vb{x} \cdot \vb{y}.$$ -->
<!-- Vectorproduct: -->
<!-- $$\vb{x} \cp \vb{y} =: \vb{z} \Leftrightarrow \vb{z} \perp \vb{x}, \ \vb{z} \perp \vb{y}.$$ -->
<!-- Unit vector: -->
<!-- $$\vu{e}$$ -->
<!-- Gradient: -->
<!-- $$\grad{\phi}$$ -->
<!-- Divergence: -->
<!-- $$\div{A}$$ -->
<!-- Curl: -->
<!-- $$\curl{A}$$ -->
<!-- Laplacian: -->
<!-- $$\laplacian{\phi}$$ -->
<!-- D'Alembertian: -->
<!-- $$\box{\phi}$$ -->

<!-- Now, some differential and integration operations. -->
<!-- One dimensional integral: -->
<!-- $$\int\limits_{-\infty}^{\infty} \dd{}{x} f(x)$$ -->
<!-- Three dimentional integral: -->
<!-- $$\int\limits_{-\R^{3}} \dd{3}{x} f(\vb{r})$$ -->
<!-- Powered fractional derivative: -->
<!-- $$\dv{n}{f(x)}{x}$$ -->
<!-- Powered partial derivative: -->
<!-- $$\pdv{n}{f(x)}{x}$$ -->


<!-- And, last but not least, again, the Maxwell equations, but with doubled backslash macros (so `\\vb{E}` instead of `\vb{E}`, `\\div{E}` instead of `\div{E}` etc.): -->

<!-- $$ -->
<!-- \begin{aligned} -->
<!--     \\div{E} &= 4 \pi \rho \\ -->
<!--     \\div{B} &= 0 \\ -->
<!--     \\curl{E} &= - \frac{1}{c} \\pdv{}{}{t} \\vb{B} \\ -->
<!--     \\curl{B} &= \frac{1}{c} \biggl(4 \pi \\vb{j} + \\pdv{}{}{t} \\vb{E} \biggr) -->
<!-- \end{aligned} -->
<!-- $$ -->

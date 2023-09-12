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


These are the Maxwell equations:

$$
\begin{aligned}
    \boldsymbol{\nabla \cdot E} &= 4 \pi \rho \\
    \boldsymbol{\nabla \cdot B} &= 0 \\
    \boldsymbol{\nabla \times E} &= -\frac{1}{c} \frac{\partial}{\partial t} \boldsymbol{B} \\
    \boldsymbol{\nabla \times B} &= \frac{1}{c} \biggl(4 \pi \boldsymbol{j} + \frac{\partial}{\partial t} \boldsymbol{E} \biggr)
\end{aligned}
$$

Now, I want to test some of my macros. Let's see, if they work.

$$
\begin{aligned}
    \div{E} &= 4 \pi \rho \\
    \div{B} &= 0 \\
    \curl{E} &= - \frac{1}{c} \pdv{}{t} \vb{B} \\
    \curl{B} &= \frac{1}{c} \biggl(4 \pi \vb{j} + \pdv{}{t} \vb{E} \biggr)
\end{aligned}
$$

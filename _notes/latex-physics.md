---
layout:         post
tab:	        notes
katex:          True
title:          How to master $\LaTeX$ in physics
date:           2025-01-13  15:00:00 +0200
---

These is a brief summary of Do's and Don'ts when writing equations with $\LaTeX$ in physics.
In advance: use the $\LaTeX$-packages `\usepackage{physics}` and `\usepackage{siunitx}`. Using those packages as a guid prevents about 90% of all common $\LaTeX$-NoGoes.
Have a look at their documentation!

## Differentiation and Integration

### Differentiation
<span style="color:#ff007f">Bad:</span>
<span style="color:#ff007f">`\frac{df(x)}{dx}`</span>

$$
\frac{df(x)}{dx}
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\dv{f(x)}{x}`</span>

$$
\frac{\operatorname{d}\!f(x)}{\operatorname{d}\!x}
$$

<span style="color:#10bceb">Explanation:</span>
The "differential"-$\mathrm{d}$ should *always* be non-italic

### Integration
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\frac{df(x)}{dx}</code>

$$
\int_{x_{1}}^{x_{2}} dx f(x)
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\int\limits_{x_{1}}^{x_{2}} \d{x} f(x)`</span>

$$
\int\limits_{x_{1}}^{x_{2}}\!\!\operatorname{d}\!x\, f(x)
$$

<span style="color:#10bceb">Explanation:</span>
The explanation.


Then, Euler's identity (for `\mathrm{e}` and `\mathrm{i}`).

$$
\mathrm{e}^{\mathrm{i}x} = \cos(x) + \mathrm{i} \sin(x).
$$


## Vector operations on $$\mathbb{R}^{3}$$

Vectorbold (macro: `\boldsymbol{v}`):

$$
\boldsymbol{v}
$$


Unit vector (macro: `\hat{\boldsymbol{e}}`):

$$
\hat{\boldsymbol{e}}
$$


Scalarproduct (macro: `\boldsymbol{x} \boldsymbol{\cdot} \boldsymbol{y}`):

$$
\boldsymbol{x} \boldsymbol{\cdot} \boldsymbol{y}
$$


Vectorproduct (macro: `\boldsymbol{x} \boldsymbol{\times} \boldsymbol{y}`):

$$
\boldsymbol{x} \boldsymbol{\times} \boldsymbol{y}
$$


Gradient (macro: `\boldsymbol{\nabla} \phi`):

$$
\boldsymbol{\nabla} \phi
$$


Divergence (macro: `\boldsymbol{\nabla \cdot A}`):

$$
\boldsymbol{\nabla \cdot A}
$$


Curl (macro: `\boldsymbol{\nabla \times A}`):

$$
\boldsymbol{\nabla \times A}
$$


Laplacian (macro: `\boldsymbol{\nabla}^{2} \phi`):

$$
\boldsymbol{\nabla}^{2} \phi
$$


D'Alembertian (macro: `\Box A`):

$$
\Box A
$$



## Differentiation

Differential (macro: `\operatorname{d}\!x\, f(x)`):

$$
\operatorname{d}\!x\, f(x)
$$


Fractional derivative (macro: `\frac{\operatorname{d}\!f(x)}{\operatorname{d}\!x} `):

$$
\frac{\operatorname{d}\!f(x)}{\operatorname{d}\!x}
$$


Powered fractional derivative (macro: `\frac{\operatorname{d}^{n}\!f(x)}{\operatorname{d}\!x^{n}}`):

$$
\frac{\operatorname{d}^{n}\!f(x)}{\operatorname{d}\!x^{n}}
$$


Fractional partial derivative (macro: `\frac{\partial f(x)}{\partial x}`):

$$
\frac{\partial f(x)}{\partial x}
$$


Powered partial derivative (macro: `\frac{\partial^{n} f(x)}{\partial x^{n}}`):

$$
\frac{\partial^{n} f(x)}{\partial x^{n}}
$$



## Integrals

One dimensional integral (macro: `\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!x\, f(x)`):

$$
\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!x\, f(x)
$$


Two dimensional integral (macro: `\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!x\!\!\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!y\, f(x,y)`):

$$
\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!x\!\!\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!y\, f(x,y)
$$


Two dimensional integral in polar coordinates (macro: `\int\limits_{0}^{2\pi}\!\!\operatorname{d}\!phi\!\!\int\limits_{0}^{\infty}\!\!\operatorname{d}\!r\,r f(r,\phi)`):

$$
\int\limits_{0}^{2\pi}\!\!\operatorname{d}\!\phi\!\!\int\limits_{0}^{\infty}\!\!\operatorname{d}\!r\,r f(r,\phi)
$$


Three dimentional integral (macro: `\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!x\!\!\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!y\!\!\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!z\, f(x,y,z)`):

$$
\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!x\!\!\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!y\!\!\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!z\, f(x,y,z)
$$


Three dimensional integral in cylindrical coordinates (macro: `\int\limits_{0}^{2\pi}\!\!\operatorname{d}\!\phi\!\!\int\limits_{0}^{\infty}\!\!\operatorname{d}\!r\,r\!\!\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!z\, f(r,\phi,z)`):

$$
\int\limits_{0}^{2\pi}\!\!\operatorname{d}\!\phi\!\!\int\limits_{0}^{\infty}\!\!\operatorname{d}\!r\,r\!\!\int\limits_{-\infty}^{\infty}\!\!\operatorname{d}\!z\, f(x,y,z)
$$


Three dimensional integral in spherical coordinates (macro: `\int\limits_{0}^{2\pi}\!\!\operatorname{d}\!\phi\,\!\!\int\limits_{0}^{\pi}\!\!\operatorname{d}\!\theta\,\sin(\theta)\!\!\int\limits_{0}^{\infty}\!\!\operatorname{d}\!r\,r^2 f(r,\theta,\phi)`):

$$
\int\limits_{0}^{2\pi}\!\!\operatorname{d}\!\phi\,\!\!\int\limits_{0}^{\pi}\!\!\operatorname{d}\!\theta\,\sin(\theta)\!\!\int\limits_{0}^{\infty}\!\!\operatorname{d}\!r\,r^2 f(r,\theta,\phi)
$$


$$n$$-dimensional integral (macro: `\int\limits_{\R^{n}}\!\!\operatorname{d}^{n}\!\, f(\boldsymbol{r})`):

$$
\int\limits_{\R^n}\!\!\operatorname{d}^{n}\!r\, f(\boldsymbol{r})
$$



## The Wave Equation

$$
\Box \psi(\boldsymbol{r},t) := -\frac{1}{c^{2}} \frac{\partial^{2} }{\partial t^{2}} \psi(\boldsymbol{r},t) + \boldsymbol{\nabla}^{2} \psi(\boldsymbol{r},t) =  0
$$



## The Maxwell Equations

And, last but not least, again, the Maxwell equations:

$$
\begin{aligned}
    \boldsymbol{\nabla \cdot E} &= 4 \pi \rho \\
    \boldsymbol{\nabla \cdot B} &= 0 \\
    \boldsymbol{\nabla \times E} &= - \frac{1}{c} \frac{\partial }{\partial t} \boldsymbol{B} \\
    \boldsymbol{\nabla \times B} &= \frac{1}{c} \biggl(4 \pi \boldsymbol{j} + \frac{\partial }{\partial t} \boldsymbol{E}  \biggr)
\end{aligned}
$$

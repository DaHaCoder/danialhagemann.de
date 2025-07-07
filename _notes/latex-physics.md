---
layout:         post
tab:	        notes
katex:          True
title:          How to master $\LaTeX$ in physics
date:           2025-01-13  15:00:00 +0200
---

This is a brief summary of Do's and Don'ts when writing equations with $\LaTeX$ in physics. \\
In advance: use the $\LaTeX$-packages

• [`\usepackage{physics}`](https://ctan.mirror.norbert-ruehl.de/macros/latex/contrib/physics/physics.pdf)

• [`\usepackage{siunitx}`](https://ctan.mirror.norbert-ruehl.de/macros/latex/contrib/siunitx/siunitx.pdf)

Using those packages as a guide prevents about 90% of all common $\LaTeX$-NoGoes.
Have a look at their documentation!

|                  | <span style="color:#00ff7f"> Good </span> | <span style="color:#ff007f"> Bad </span> | <span style="color:#10bceb"> Explanation </span> |
|------------------|-------------------------------------------|------------------------------------------|--------------------------------------------------|
| Total derivative | <span style="color:#00ff7f">`\dv{f}{x}`</span>: $\displaystyle\frac{\operatorname{d}\!f}{\operatorname{d}\!x}$ | <span style="color:#ff007f">`\frac{df}{dx}`</span>: $\displaystyle \frac{df}{dx}$ | The "differential"-$\mathrm{d}$ should *always* be non-italic.|
| Total derivative (higher order) | <span style="color:#00ff7f">`\dv[n]{f}{x}`</span>: $\displaystyle\frac{\operatorname{d}^{n}\!f}{\operatorname{d}\!x^{n}}$ | <span style="color:#ff007f">`\frac{d^{n}f}{dx^{n}}`</span>: $\displaystyle \frac{d^{n}f}{dx^{n}}$ | |
| Partial derivative |
| Partial derivative (higher order) |
| $1$-dimensional Integral | <span style="color:#00ff7f">`\int\limits_{x_{1}}^{x_{2}} \dd{x} f(x)`</span> : $\displaystyle \int\limits_{x_{1}}^{x_{2}}\!\!\operatorname{d}\!x\, f(x)$ | <span style="color:#ff007f">`\int_{x_{1}}^{x_{2}} dx f(x)`</span> : $\displaystyle \int_{x_{1}}^{x_{2}} dx f(x)$ |
| $n$-dimensional Integral | <span style="color:#00ff7f">`\int\limits_{\R^{n}} \dd[n]{x} f(x)`</span>: $\displaystyle \int\limits_{\mathbb{R}^{n}}\!\!\operatorname{d}^{n}\!x\, f(x)$ |
| Surface integral over a vector field| $\displaystyle \int\limits_{S}\!\!\operatorname{d}\!S\, \hat{\boldsymbol{n}}_{\perp S} \boldsymbol{\cdot} \boldsymbol{E}(\boldsymbol{r})$ |
| Reserved mathematical letters (i.e.: Euler's number $\mathrm{e}$, imaginary unit $\mathrm{i}$, ...) | <span style="color:#00ff7f">`\mathrm{e}^{\mathrm{i}x} = \cos(x) + \mathrm{i} \sin(x)`</span> : $\mathrm{e}^{\mathrm{i}x} = \cos(x) + \mathrm{i} \sin(x)$ | <span style="color:#ff007f">`e^{ix} = cos(x) + i sin(x)`</span> : $e^{ix} = cos(x) + i sin(x)$ | |

<!--

## Differentiation and Integration

### Differentiation

#### Total derivative
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\frac{df}{dx}</code>

$$
\frac{df}{dx}
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\dv{f}{x}`</span>

$$
\frac{\operatorname{d}\!f}{\operatorname{d}\!x}
$$

<span style="color:#10bceb">Explanation:</span>
The "differential"-$\mathrm{d}$ should *always* be non-italic

#### Total derivative (higher order)
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\frac{d^{n}f}{dx^{n}}</code>

$$
\frac{d^{n}f}{dx^{n}}
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\dv[n]{f}{x}`</span>

$$
\frac{\operatorname{d}^{n}\!f}{\operatorname{d}\!x^{n}}
$$


#### Partial derivative
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\frac{\partial f}{\partial x}</code>

$$
\frac{\partial f}{\partial x}
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\pdv{f}{x}`</span>

$$
\frac{\partial f}{\partial x}
$$


#### Partial derivative (higher order)
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\frac{\partial^{n} f}{\partial x^{n}}</code>

$$
\frac{\partial^{n} f}{\partial x^{n}}
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\pdv[n]{f}{x}`</span>

$$
\frac{\partial^{n}\!f}{\partial x^{n}}
$$


### Integration
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\int_{x_{1}}^{x_{2}} dx f(x)</code>

$$
\int_{x_{1}}^{x_{2}} dx f(x)
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\int\limits_{x_{1}}^{x_{2}} \dd{x} f(x)`</span>

$$
\int\limits_{x_{1}}^{x_{2}}\!\!\operatorname{d}\!x\, f(x)
$$

#### Surface integral over a vector field

$$
\int\limits_{S} \!\!\operatorname{d}\!S\, \hat{\boldsymbol{n}}_{\perp S} \boldsymbol{\cdot} \boldsymbol{E}(\boldsymbol{r})
$$




## Vector operations on $$\mathbb{R}^{3}$$

### Bold vector
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\mathbf{v}</code>

$$
\mathbf{v}
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\vb*{v}`</span>


$$
\boldsymbol{v}
$$

### Bold unit vector

<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\hat{\mathbf{v}}</code>

$$
\hat{\mathbf{v}}
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\vu*{v}`</span>


$$
\hat{\boldsymbol{v}}
$$

### Scalar product

<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\mathbf{a} \cdot \mathbf{b}</code>

$$
\mathbf{a} \cdot \mathbf{b}
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\vb*{a} \vdot \vb*{b}`</span>


$$
\boldsymbol{a} \boldsymbol{\cdot} \boldsymbol{b}
$$

<span style="color:#10bceb">Explanation:</span>
Since the dot-product operates on objects $\in \R^{3}$, the $\cdot$-symbol should be *bold*.

### Cross product
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\mathbf{a} \times \mathbf{b}</code>

$$
\mathbf{a} \times \mathbf{b}
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\vb*{a} \cp \vb*{b}`</span>


$$
\boldsymbol{a} \boldsymbol{\times} \boldsymbol{b}
$$

<span style="color:#10bceb">Explanation:</span>
Since the cross-product operates on objects $\in \R^{3}$, the $\times$-symbol should be *bold*.

### Operations with Nabla-Operator $\boldsymbol{\nabla}$

#### Gradient
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\nabla f(\mathbf{r})</code>

$$
\nabla f(\mathbf{r})
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\grad{f(\vb*{r})}`</span>


$$
\boldsymbol{\nabla} f(\boldsymbol{r})
$$

<span style="color:#10bceb">Explanation:</span>
Since the $\boldsymbol{\nabla}$-Operator maps objects to $\R^{3}$, the $\nabla$-symbol should be *bold*.

#### Divergence
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\nabla \cdot \mathbf{E}(\mathbf{r})</code>

$$
\nabla \cdot \mathbf{E}(\mathbf{r})
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\div{\vb*{E}(\vb*{r})}`</span>


$$
\boldsymbol{\nabla} \boldsymbol{\cdot} \boldsymbol{E}(\boldsymbol{r})
$$

<span style="color:#10bceb">Explanation:</span>
Since the divergence operation $\boldsymbol{\nabla} \boldsymbol{\cdot}$ maps objects from $\R^{3}$ to $\R$, the $\nabla$-symbol and the $\cdot$-symbol should be *bold*.

#### Curl
<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">\nabla \times \mathbf{E}(\mathbf{r})</code>

$$
\nabla \times \mathbf{E}(\mathbf{r})
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\curl{\vb*{E}(\vb*{r})}`</span>


$$
\boldsymbol{\nabla} \boldsymbol{\times} \boldsymbol{E}(\boldsymbol{r})
$$

<span style="color:#10bceb">Explanation:</span>
Since the curl-operation $\boldsymbol{\nabla} \boldsymbol{\times}$ maps objects from $\R^{3}$ to $\R^{3}$, the $\nabla$-symbol and the $\times$-symbol should be *bold*.


## Miscellaneous

### Reserved mathematical letters
Reserved mathematical letters like $\mathrm{d}$ for differentials, $\mathrm{e}$ for Euler's number or $\mathrm{i}$ for the imaginary unit or characteristic function names like of trigonometric functions should always be written non-italic.

<span style="color:#ff007f">Bad:</span>
<code class="language-plaintext highlighter-rouge" style="color:#ff007f">e^{ix} = cos(x) + i sin(x)</code>

$$
e^{ix} = cos(x) + i sin(x)
$$

<span style="color:#00ff7f">Good:</span>
<span style="color:#00ff7f">`\mathrm{e}^{\mathrm{i} x} = \cos(x) + \mathrm{i} \sin(x)`</span>


$$
\mathrm{e}^{\mathrm{i} x} = \cos(x) + \mathrm{i} \sin(x)
$$

## Units
To be continued ...


## Examples

Integral Theorem of Gauß:

$$
\int\limits_{V} \!\!\operatorname{d}\!V\, \boldsymbol{\nabla} \boldsymbol{\cdot} \boldsymbol{E}(\boldsymbol{r}) = \oint\limits_{\partial V} \!\!\operatorname{d}\!S\, \hat{\boldsymbol{n}}_{\perp S} \boldsymbol{\cdot} \boldsymbol{E}(\boldsymbol{r})
$$

Integral Theorem of Stokes:

$$
\int\limits_{S} \!\!\operatorname{d}\!S\,\hat{\boldsymbol{n}}_{\perp S} \boldsymbol{\cdot} \boldsymbol{\nabla} \boldsymbol{\times} \boldsymbol{E}(\boldsymbol{r}) = \oint\limits_{\partial S} \!\!\operatorname{d}\!\ell\, \boldsymbol{E}(\boldsymbol{r})
$$

-->

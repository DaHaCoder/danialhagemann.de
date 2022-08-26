---
layout:         post
tab:	        physics
title:          The Continuity Equation
date:           2021-08-26  04:39:00 +0200
---

The Continuity Equation is a very fundamental equation in physics and often appears, when some physical quantity is conserved. 
The classical form of the Continuity Equation is

$$
\frac{\partial \rho}{\partial t} + \boldsymbol{\nabla} \cdot (\rho \boldsymbol{v}) = 0.
$$

We define $$\boldsymbol{j} := \rho \boldsymbol{v}$$ as the flux in 3 dimensions, so that the Continuity Equation can be written as

$$
\frac{\partial \rho}{\partial t} + \boldsymbol{\nabla} \cdot \boldsymbol{j} = 0.
$$

Now, we can define the time $$t$$ as the first component of a four-vector $$x^{\mu}$$, so that $$x^{0} := t$$ and $$\rho$$ as the first component of a four-flux $$j^{\mu}$$ so that $$j^{0} := \rho$$. The derivative can therefore be written as

$$
\frac{\partial}{\partial t} + \boldsymbol{\nabla} = \frac{\partial}{\partial x_{\mu}} =: \partial_{\mu}
$$

with $$\mu \in [0,3]$$.

Therefore follows for the Continuity Equation in 4 dimensions

$$
\partial_{\mu} j^{\mu} = 0.
$$

---
layout:         post
tab:	        coding
title: 	        My personal `matplotlibrc`
date:           2025-05-07  04:00:00 +0200
---

This is my personal `matplotlibrc`.

{% include code-header.html %}
{% highlight py linenos %}
### matplotlib package -- https://matplotlib.org/stable/index.html ###
import matplotlib.pyplot as plt
### numpy package -- https://numpy.org/doc/stable/ ###
import numpy as np
### scipy package -- https://docs.scipy.org/doc/scipy/ ###
import scipy.constants as const                          #  for scientific constants -- https://docs.scipy.org/doc/scipy/reference/constants.html
from scipy import optimize as opt                        #  for optimization and fit -- https://docs.scipy.org/doc/scipy/reference/optimize.html

plt.rcParams["backend"] = "Qt5Agg"
plt.rcParams["text.color"] = "#FFFFFF"
plt.rcParams["axes.facecolor"] = "#131A24"
plt.rcParams["axes.edgecolor"] = "#FFFFFF"
plt.rcParams["axes.grid"] = True
plt.rcParams["axes.labelcolor"] = "#FFFFFF"
plt.rcParams["axes.formatter.use_mathtext"] = True
plt.rcParams["axes.prop_cycle"] = cycler.cycler('color', ['#007FFF', '#00FF7F', '#FF007F', '#10BCEB', '#7F77FF', '#FFF777'])
plt.rcParams["xtick.color"] = "#FFFFFF"
plt.rcParams["ytick.color"] = "#FFFFFF"
plt.rcParams["grid.color"] = "#b0b0b0"
plt.rcParams["grid.linestyle"] = "dashed"
plt.rcParams["figure.facecolor"] = "#131A24"
plt.rcParams["figure.edgecolor"] = "#131A24"

plt.rcParams["font.family"] = "sans-serif"
plt.rcParams["font.size"] = 11
plt.rcParams["text.usetex"] = True
plt.rcParams["text.latex.preamble"] = r"""
\usepackage{physics}
\usepackage{siunitx}
%%% astronomical units
\DeclareSIUnit \au {au}
\DeclareSIUnit \jansky {Jk}
\DeclareSIUnit \ly {ly}
\DeclareSIUnit \parsec {pc}
\DeclareSIUnit \mag {mag}
\DeclareSIUnit \solarmass {\ensuremath{\mathit{M_{\odot}}}}
\DeclareSIUnit \yr {yr}
%%% cgs units
\DeclareSIUnit \erg {erg}
\DeclareSIUnit \cm {cm}
\DeclareSIUnit \gram {g}
"""
{% endhighlight %}

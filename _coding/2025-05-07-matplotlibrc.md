---
layout:         post
tab:	        coding
title: 	        My personal matplotlibrc
date:           2025-05-07
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

import cycler
from itertools import cycle

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

def darkmode(colormode: str):
    if colormode=="d":
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
        return True
    else:
        return False

def main():
    mode = darkmode(input("darkmode [d] or whitemode [Enter]?\n"))

    ### IMPORT DATA ###
    ### ----------- ###
    DATA_DIR = 'filename.txt'
    X, X_error, Y, Y_error = np.loadtxt(DATA_DIR,
        usecols=(0,1,2,3),
        dtype=np.dtype([('X', float),
                        ('X_error', float),
                        ('Y', float),
                        ('Y_error', float)
                        ]),
        unpack=True)

    ### PLOT ###
    ### ---- ###
    fig, ax = plt.subplots()

    colors = plt.rcParams['axes.prop_cycle'].by_key()['color']
    color_cycle = cycle(colors)

    plt.plot(X, Y, color=color linewidth=1.0, label='X vs. Y')
    plt.errorbar(X, Y, color=color, xerr=X_error, yerr=Y_error, fmt='.', elinewidth=1.0, label='error bars')
    plt.xlabel(r'$X$ in \si{\solarmass}')
    plt.ylabel(r'$Y$ in \si{\angstrom}$')
    plt.title(r'Some Title')
    plt.legend(loc='upper right')
    plt.grid(True)):

    filename = 'X-vs-Y'

    if mode==True:
        filename = filename + '_DARKMODE'

    # fig.savefig(filename + '.eps', format='eps', bbox_inches='tight')
    # fig.savefig(filename + '.pdf', format='pdf', bbox_inches='tight')
    fig.savefig(filename + '.png', format='png', bbox_inches='tight', dpi=300)
    # fig.savefig(filename + '.svg', format='svg', bbox_inches='tight')

if __name__ == "__main__":
    main()
{% endhighlight %}

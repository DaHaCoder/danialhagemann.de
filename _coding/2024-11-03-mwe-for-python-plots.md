---
layout:         post
tab:	        coding
title: 	        A good MWE for Python plots in physics
date:           2021-04-07  15:00:00 +0200
date-last-mod:  2024-11-03  16:30:00 +0200
---

Here is a python code:

{% include code-header.html %}
{% highlight py linenos %}
### matplotlib package -- https://matplotlib.org/stable/index.html ###
import matplotlib.pyplot as plt
### numpy package -- https://numpy.org/doc/stable/ ###
import numpy as np
### scipy package -- https://docs.scipy.org/doc/scipy/ ###
import scipy.constants as const
from scipy import optimize as opt                      #   for optimization and fit -- https://docs.scipy.org/doc/scipy/reference/tutorial/optimize.html

plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.size']   = 11
plt.rcParams['text.usetex'] = True
plt.rcParams['text.latex.preamble'] = r'''
\usepackage{physics}
\usepackage{siunitx}
'''

def main():
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
    plt.plot(X, Y, color='tab:blue', linewidth=1.0, label='X vs. Y')
    plt.errorbar(X, Y, xerr=X_error, yerr=Y_error, fmt='.', ecolor='tab:red', elinewidth=1.0, label='error bars')
    plt.xlabel(r'$X$ in \si{\meter}')
    plt.ylabel(r'$Y$ in \si{\second}')
    plt.title(r'Some Title')
    plt.legend(loc='upper right')
    plt.grid(True)

    fig.savefig('X-vs-Y.eps', format='eps', bbox_inches='tight')
    fig.savefig('X-vs-Y.pdf', format='pdf', bbox_inches='tight')
    fig.savefig('X-vs-Y.png', format='png', bbox_inches='tight', dpi=250)
    fig.savefig('X-vs-Y.svg', format='svg', bbox_inches='tight')


if __name__ == "__main__":
    main()
{% endhighlight %}

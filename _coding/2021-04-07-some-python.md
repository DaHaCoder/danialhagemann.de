---
layout:         post
tab:	        coding
title: 	        Some Python Code
date:           2021-04-07  15:00:00 +0200
date_last_mod:  2022-08-17  18:24:00 +0200
---

Here is a python code:

{% include code-header.html %}

{% highlight py linenos %}
import matplotlib
import matplotlib.pyplot as plt
import numpy as np

# Data for plotting
t = np.arange(0.0, 2.0, 0.01)
s = 1 + np.sin(2 * np.pi * t)

fig, ax = plt.subplots()
ax.plot(t, s)

ax.set(xlabel='time (s)', ylabel='voltage (mV)', title='title')
ax.grid()

fig.savefig("test.png")
plt.show()
{% endhighlight %}


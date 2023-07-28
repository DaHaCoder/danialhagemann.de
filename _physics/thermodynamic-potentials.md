---
layout:         post
tab:	        physics
katex:          True
title:          Thermodynamic Potentials
date:           2023-07-28  15:00:00 +0200
---

<div style="display: none">
  \(
  {% include latex-preamble.sty %}
  \)
</div>


This is a little summary on thermodynamic potentials.

::: center
**Thermodynamische Potentiale und Maxwell Relationen**\
:::

-   Innere Energie $U(S,V,N)$:

    ::: fleqn
    $$\begin{aligned}
            & \mathrm{d}U = T \mathrm{d}S - p \mathrm{d}V + \mu \mathrm{d}N \\
            \Rightarrow \ & \textcolor{blue}{T} = \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{U}}{\partial S} \biggr)_{V,N}}, - \textcolor{red}{p} = \textcolor{red}{ \biggl(\frac{\partial \textcolor{black}{U}}{\partial V} \biggr)_{N,S}}, \textcolor{green!50!black}{\mu} = \textcolor{green!50!black}{ \biggl(\frac{\partial \textcolor{black}{U}}{\partial N} \biggr)_{S,V}} \\
            \Rightarrow \ & \textcolor{red}{\biggl(\frac{\partial \textcolor{blue}{T}}{\partial V}\biggr)_{N, S}} = \textcolor{red}{\biggl(\frac{\partial}{\partial V}\biggr)_{N,S}} \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{U}}{\partial S} \biggr)_{V,N}} = \textcolor{blue}{\biggl(\frac{\partial}{\partial S} \biggr)_{V,N}} \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{U}}{\partial V}\biggr)_{N,S}} = - \textcolor{blue}{\biggl(\frac{\partial \textcolor{red}{p}}{\partial S} \biggr)_{V,N}} \\
            \Rightarrow \ & \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{red}{p}}{\partial N}\biggr)_{S, V}} = - \textcolor{green!50!black}{\biggl(\frac{\partial}{\partial N}\biggr)_{S, V}} \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{U}}{\partial V} \biggr)_{N,S}} = - \textcolor{red}{\biggl(\frac{\partial}{\partial V} \biggr)_{N,S}} \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{U}}{\partial N}\biggr)_{S, V}} = - \textcolor{red}{\biggl(\frac{\partial \textcolor{green!50!black}{\mu}}{\partial V} \biggr)_{N,S}} \\
            \Rightarrow \ & \textcolor{blue}{\biggl(\frac{\partial \textcolor{green!50!black}{\mu}}{\partial S} \biggr)_{V,N}} = \textcolor{blue}{\biggl(\frac{\partial}{\partial S} \biggr)_{V,N}} \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{U}}{\partial N} \biggr)_{S,V}} = \textcolor{green!50!black}{\biggl(\frac{\partial}{\partial N} \biggr)_{S,V}} \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{U}}{\partial S} \biggr)_{V,N}} = \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{blue}{T}}{\partial N} \biggr)_{S,V}}
        \end{aligned}$$
    :::

-   Freie Energie $F(T,V,N)$:

    ::: fleqn
    $$\begin{aligned}
            & \mathrm{d}F = - S \mathrm{d}T - p \mathrm{d}V + \mu \mathrm{d}N \\
            \Rightarrow \ & - \textcolor{blue}{S} = \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{F}}{\partial T}\biggr)_{V,N}}, - \textcolor{red}{p} = \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{F}}{\partial V}\biggr)_{N,T}}, \textcolor{green!50!black}{\mu} = \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{F}}{\partial N} \biggr)_{T,V}} \\
            \Rightarrow \ & \textcolor{red}{\biggl(\frac{\partial \textcolor{blue}{S}}{\partial V} \biggr)_{N,T}} = - \textcolor{red}{\biggl(\frac{\partial}{\partial V} \biggr)_{N,T}} \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{F}}{\partial T}\biggr)_{V,N}} = - \textcolor{blue}{\biggl(\frac{\partial}{\partial T}\biggr)_{V,N}} \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{F}}{\partial V} \biggr)_{N,T}} = \textcolor{blue}{\biggl(\frac{\partial \textcolor{red}{p}}{\partial T}\biggr)_{V,N}} \\
            \Rightarrow \ & \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{red}{p}}{\partial N} \biggr)_{T,V}} = - \textcolor{green!50!black}{\biggl(\frac{\partial}{\partial N} \biggr)_{T,V}} \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{F}}{\partial V}\biggr)_{N,T}} = - \textcolor{red}{\biggl(\frac{\partial}{\partial V}\biggr)_{N,T}} \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{F}}{\partial N} \biggr)_{T,V}} = - \textcolor{red}{\biggl(\frac{\partial \textcolor{green!50!black}{\mu}}{\partial V}\biggr)_{N,T}} \\
            \Rightarrow & \textcolor{blue}{\biggl(\frac{\partial \textcolor{green!50!black}{\mu}}{\partial T}\biggr)_{V,N}} = \textcolor{blue}{\biggl(\frac{\partial}{\partial T}\biggr)_{V,N}} \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{F}}{\partial N} \biggr)_{T,V}} = - \textcolor{green!50!black}{\biggl(\frac{\partial}{\partial N} \biggr)_{T,V}}  \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{F}}{\partial T}\biggr)_{V,N}} = - \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{blue}{T}}{\partial N} \biggr)_{T,V}}
        \end{aligned}$$
    :::

-   Gibbs-Energie (freie Enthalpie) $G(T,p,N)$:

    ::: fleqn
    $$\begin{aligned}
            & \mathrm{d}G = - S \mathrm{d}T + V \mathrm{d}p + \mu \mathrm{d}N \\
            \Rightarrow & - \textcolor{blue}{S} = \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{G}}{\partial T}\biggr)_{p,N}}, \textcolor{red}{V} = \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{G}}{\partial p} \biggr)_{N,T}}, \textcolor{green!50!black}{\mu} = \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{G}}{\partial N} \biggr)_{T,p}} \\
            \Rightarrow \ & \textcolor{red}{\biggl(\frac{\partial \textcolor{blue}{S}}{\partial p} \biggr)_{N,T}} = - \textcolor{red}{\biggl(\frac{\partial}{\partial p} \biggr)_{N,T}}  \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{G}}{\partial T}\biggr)_{p,N}} = -  \textcolor{blue}{\biggl(\frac{\partial}{\partial T}\biggr)_{p,N}}  \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{G}}{\partial p} \biggr)_{N,T}} = -  \textcolor{blue}{\biggl(\frac{\partial \textcolor{red}{V}}{\partial T}\biggr)_{p,N}} \\
            \Rightarrow \ &  \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{red}{V}}{\partial N} \biggr)_{T,p}} =  \textcolor{green!50!black}{\biggl(\frac{\partial}{\partial N} \biggr)_{T,p}} \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{G}}{\partial p} \biggr)_{N,T}} = \textcolor{red}{\biggl(\frac{\partial}{\partial p} \biggr)_{N,T}}  \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{G}}{\partial N} \biggr)_{T,p}} =  \textcolor{red}{\biggl(\frac{\partial \textcolor{green!50!black}{\mu}}{\partial p} \biggr)_{N,T}} \\
            \Rightarrow \ &  \textcolor{blue}{\biggl(\frac{\partial \textcolor{green!50!black}{\mu}}{\partial T}\biggr)_{p,N}} =  \textcolor{blue}{\biggl(\frac{\partial}{\partial T}\biggr)_{p,N}}  \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{G}}{\partial N} \biggr)_{T,p}} =  \textcolor{green!50!black}{\biggl(\frac{\partial}{\partial N} \biggr)_{T,p}}  \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{G}}{\partial T}\biggr)_{p,N}} = -  \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{blue}{S}}{\partial N} \biggr)_{T,p}}
        \end{aligned}$$
    :::

-   Enthalpie $H(S,p,N)$:

    ::: fleqn
    $$\begin{aligned}
            & \mathrm{d}H = T \mathrm{d}S + V \mathrm{d}p + \mu \mathrm{d}N \\
            \Rightarrow \ & \textcolor{blue}{T} = \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{H}}{\partial S}\biggr)_{p,N}}, \textcolor{red}{V} = \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{H}}{\partial p} \biggr)_{N,S}}, \textcolor{green!50!black}{\mu} = \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{H}}{\partial N} \biggr)_{S,p}} \\
            \Rightarrow \ & \textcolor{red}{\biggl(\frac{\partial \textcolor{blue}{T}}{\partial p} \biggr)_{N,S}} = \textcolor{red}{\biggl(\frac{\partial}{\partial p} \biggr)_{N,S}} \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{H}}{\partial S}\biggr)_{p,N}} = \textcolor{blue}{\biggl(\frac{\partial}{\partial S}\biggr)_{p,N}}  \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{H}}{\partial p} \biggr)_{N,S}} = \textcolor{blue}{\biggl(\frac{\partial \textcolor{red}{V}}{\partial S}\biggr)_{p,N}} \\
            \Rightarrow \ &  \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{red}{V}}{\partial N} \biggr)_{S,p}} =  \textcolor{green!50!black}{\biggl(\frac{\partial}{\partial N} \biggr)_{S,p}} \textcolor{red}{\biggl(\frac{\partial \textcolor{black}{H}}{\partial p} \biggr)_{N,S}} = \textcolor{red}{\biggl(\frac{\partial}{\partial p} \biggr)_{N,S}}  \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{H}}{\partial N} \biggr)_{S,p}} =  \textcolor{red}{\biggl(\frac{\partial \textcolor{green!50!black}{\mu}}{\partial p} \biggr)_{N,S}}  \\
            \Rightarrow \ &  \textcolor{blue}{\biggl(\frac{\partial \textcolor{green!50!black}{\mu}}{\partial S}\biggr)_{p,N}} =  \textcolor{blue}{\biggl(\frac{\partial}{\partial S}\biggr)_{p,N}}  \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{black}{H}}{\partial N} \biggr)_{S,p}} =  \textcolor{green!50!black}{\biggl(\frac{\partial}{\partial N} \biggr)_{S,p}}  \textcolor{blue}{\biggl(\frac{\partial \textcolor{black}{H}}{\partial S}\biggr)_{p,N}} =  \textcolor{green!50!black}{\biggl(\frac{\partial \textcolor{blue}{T}}{\partial N} \biggr)_{S,p}}
        \end{aligned}$$
    :::


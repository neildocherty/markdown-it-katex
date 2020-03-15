var md = require('markdown-it')(),
	mk = require('./index');

md.use(mk);

var input = document.getElementById('input'),
	output = document.getElementById('output'),
	button = document.getElementById('button');

button.addEventListener('click', function(ev) {
	var result = md.render(input.value);

	output.innerHTML = result;
});

/*

# Some Math

$\sqrt{3x-1}+(1+x)^2$

# Maxwells Equations

$\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t}
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$

$\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$ (curl of $\vec{\mathbf{E}}$ is proportional to the time derivative of $\vec{\mathbf{B}}$)

$\nabla \cdot \vec{\mathbf{B}}  = 0$



\sqrt{3x-1}+(1+x)^2

c = \pm\sqrt{a^2 + b^2}

Maxwell's Equations

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t}
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}

\nabla \cdot \vec{\mathbf{B}}  = 0

Same thing in a LaTeX array
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}


\begin{array}{c}
y_1 \\
y_2 \mathtt{t}_i \\
z_{3,4}
\end{array}

\begin{array}{c}
x' &=& &x \sin\phi &+& z \cos\phi \\
z' &=& - &x \cos\phi &+& z \sin\phi \\
\end{array}



# Maxwell's Equations


equation | description
----------|------------
$\nabla \cdot \vec{\mathbf{B}}  = 0$ | divergence of $\vec{\mathbf{B}}$ is zero
$\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$ |  curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$
$\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | wha?

![electricity](http://i.giphy.com/Gty2oDYQ1fih2.gif)

$\sqrt[3]{\frac{144}{125}}=\frac{\sqrt[3]{144}}{\sqrt[3]{125}}=\frac{(2^4 \times 3^2)^\frac{1}{3}}{(5^3)^{\frac{1}{3}}}=\frac{(2^{\frac{4}{3}}\times3^\frac{2}{3})}{5^\frac{3}{3}}=\frac{2^1\times2^\frac{1}{3}\times3^\frac{2}{3}}{5^1}=(\frac{2}{5})((2^\frac{1}{3})(3^\frac{2}{3}))=(\frac{2}{5})\sqrt[3]{(2)(3^2)}=\frac{2}{5}\sqrt[3]{18}$
*/

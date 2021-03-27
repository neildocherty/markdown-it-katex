# markdown-it-katex

![Maaath](./static/math_gif.gif)

> Add Math to your Markdown


[KaTeX](https://github.com/Khan/KaTeX) is a faster alternative to MathJax. This plugin makes it easy to support your markdown.

Need convincing?

-   Check out the comparative benchmark: [KaTeX vs MathJax](https://jsperf.com/katex-vs-mathjax/42)
-   Try it in your browser: [markdown-it-katex demo](https://puritanic.github.io/markdown-it-katex/)

## TODO

-   [x] Switch to Jest
-   [ ] Typescript
-   [x] Set up CI/CD
-   [x] Publish NPM package
-   [x] Bundler
-   [x] precommit hooks
-   [ ] Code improvements?
-   [ ] More test coverage?

## Usage

Install it and add it to your config (Vuepress):

```js
module.exports = {
	head: [
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
			},
		],
	],
	markdown: {
		extendMarkdown: md => {
			md.set({ breaks: true });
			md.use(require('markdown-it-katexx'), { throwOnError: false, errorColor: ' #cc0000' });
		},
	},
};
```

## Getting Started

Install markdown-it

```shell
npm install markdown-it
```

Install the plugin

```shell
npm install markdown-it-katexx
```

Use it in your javascript:

```javascript
var md = require('markdown-it')(),
	mk = require('markdown-it-katexx');

md.use(mk);

// double backslash is required for javascript strings, but not html input
var result = md.render('# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$');
```

Include the [KaTeX stylesheet](https://katex.org/docs/browser.html) in your html.

If you're using the default markdown-it parser, I also recommend the [github stylesheet](https://github.com/sindresorhus/github-markdown-css):

`KaTeX` [options](https://katex.org/docs/options.html) can be supplied with the second argument to use.

```javascript
md.use(mk, { throwOnError: false, errorColor: ' #cc0000' });
```

## Examples

### Inline Math

Surround your LaTeX with a single `$` on each side for inline rendering.

```latex
$\sqrt{3x-1}+(1+x)^2$
```

### Math Block

Use two (`$$`) for block rendering. This mode uses bigger symbols and centers the result.

```latex
$$\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}$$
```

## Syntax

Math parsing in markdown is designed to agree with the conventions set by pandoc:

```html
Anything between two $ characters will be treated as TeX math. The opening $ must have a non-space
character immediately to its right, while the closing $ must have a non-space character immediately
to its left, and must not be followed immediately by a digit. Thus, $20,000 and $30,000 won’t parse
as math. If for some reason you need to enclose text in literal $ characters, backslash-escape them
and they won’t be treated as math delimiters.
```

## Math Syntax Support

KaTeX is based on TeX and LaTeX. Support for both is growing. Here's a list of currently supported functions:

[Function Support in KaTeX](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)

---

This repo is a fork of [waylonflinn/markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex), initially forked to solve my own issues with the library, but then decided to work a bit on improving the library in general.

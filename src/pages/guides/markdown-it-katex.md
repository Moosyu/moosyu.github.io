---
title: "latex markdown with 11ty using markdown-it-katex"
date: 2024-09-24
---

{% set prismCss %} {% include "../../css/prismTheme.css" %} {% endset %}
<style>
    {{ prismCss | cssmin | safe }}
</style>

if you're wondering why i dont just use some js library, its because i dont like overusing js, next question. first off im using [@vscode/markdown-it-katex](https://www.npmjs.com/package/@vscode/markdown-it-katex). this is the most maintained version of it and doesnt have any vulnerabilities like the original version. you want to go into the folder of your 11ty project and run.

```console
npm i @vscode/markdown-it-katex
```

then go to your .eleventy.js file and add this code

```js
const markdownItKatex = require("@vscode/markdown-it-katex").default; //importing markdown-it-katex, the .default is required and you will get an error without it
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    const md = markdownIt({ // this is setting up my library instance of markdown-it
    html: true, // these are rules for markdown it. see the full list and meanings on https://github.com/markdown-it/markdown-it#init-with-presets-and-options
    linkify: true,
    }).use(markdownItKatex); // this is me adding markdownItKatex as a plugin for markdown-it

    eleventyConfig.setLibrary("md", md); // now i set my library for the "md" file type to my custom config of markdown-it i just made
};
```

(you can only have one module.exports = function(eleventyConfig) so only copy the imports and the code inside of the modules.exports).

next you need to import this stylesheet into your project:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css">
```

do it however you want, you just need the stylesheet to be on the page you want to type the latex markdown on.

thats it, now you can just type latex like normal and it works !! if you want to test it with some longish equations go to https://ashki23.github.io/markdown-latex.html, it has a few you can just copy and paste onto your site.
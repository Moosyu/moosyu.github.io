const htmlmin = require("html-minifier-terser");
const cleanCss = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownItKatex = require("@vscode/markdown-it-katex").default;
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("wordCount", (content) => {
    return content.replace(/(<([^>]+)>)/gi, "").split(/\s+/).length;
  });

  eleventyConfig.addFilter("readTime", (content) => {
    let wordCount = content ? content.replace(/(<([^>]+)>)/gi, "").split(/\s+/).length : 0;
    return Math.ceil(wordCount / 200);
  });

  eleventyConfig.addPassthroughCopy({
    "public/assets": "assets",
    "public/fonts": "fonts",
    "public/favicon.ico": "favicon.ico",
    "src/nekofm.css" : "nekofm.css",
    "src/pages/musicring/sitesMusicRing.json" : "sitesMusicRing.json"
  });
  eleventyConfig.addPassthroughCopy("src/_data/*");
  eleventyConfig.addPassthroughCopy("src/css/*");
  eleventyConfig.addPassthroughCopy("src/js/*");
  eleventyConfig.setServerOptions({
    liveReload: true,
    port: 5501,
  });

  // lots of comments bc the moment i look away from this shit i forget what is even going on anymore this took way too long...
  eleventyConfig.addCollection("pageTree", function (collectionApi) {
      /*
      what tree look a bit like so i dont forget later:
      /pages/ and /pages/blog/

      {
        pages: {
          __data: { ... },
          __children: {
            blog: {
              __data: { ... },
              __children: {}
            }
        }
      }
    */
    const pages = collectionApi.getAll();
    const tree = {};

    pages.forEach(page => {
      const parts = page.url.split("/").filter(Boolean); // splits url into parts and gets rid of unusable empty strings caused by leading or trailing slashes. thanks mr michael uloth https://michaeluloth.com/javascript-filter-boolean/
      let currentLevel = tree; // tree not true please read properly future me 😭

      parts.forEach((part, index) => { // looping over each part of the url like the part pages index = 0
        if (!currentLevel[part]) {
          currentLevel[part] = {
            __data: null, // theres a real folder called data and good reckons this is how the cool kids avoid names conflicting even if it looks straight hideous and reminds me of python
            __children: {}
          };
        }

        if (index === parts.length - 1) { // checks if at the last part of the url and attaches the page object to __data so we can access url and title later.
          currentLevel[part].__data = page;
        }
        currentLevel = currentLevel[part].__children;
      });
    });

    return tree;
  });

  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      if (this.page.inputPath.includes("src/pages/misc/")) {
        return content;
      }
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
      return minified;
    }
    // if not an html output, return content as-is
    return content;
  });
  // had to add a filter bc im dumb or something and couldnt figure out how to deal with files being passed through
  eleventyConfig.addFilter("cssmin", function (code) {
    return new cleanCss({}).minify(code).styles;
  });

	eleventyConfig.addPlugin(syntaxHighlight);
  const md = markdownIt({
    html: true,
    linkify: true,
  }).use(markdownItKatex);
  eleventyConfig.setLibrary("md", md);
	eleventyConfig.addPlugin(pluginRss);

  function wrapRambingsPlugin(mdLib) {
    mdLib.core.ruler.after('block', 'wrap-ramblings', state => {
      const open = () => {
        const token = new state.Token("html_block", "", 0);
        token.content = '<div class="ramblings-container">';
        return token;
      };

      const close = () => {
        const token = new state.Token("html_block", "", 0);
        token.content = '</div>';
        return token;
      };

      let inside = false;
      state.tokens = state.tokens.flatMap((token, i, tokens) => {
        const isDateH2 = token.type === "heading_open" && token.tag === "h2" && tokens[i+1]?.type === "inline" && /^\d{2}\/\d{2}\/\d{2}$/.test(tokens[i+1].content);
        const result = [];
        if (isDateH2) {
          if (inside) result.push(close());
          result.push(open());
          inside = true;
        }
        result.push(token);
        return result;
      });

      if (inside) state.tokens.push(close());
    });
  }

  md.use(wrapRambingsPlugin);

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "/"
  };
};
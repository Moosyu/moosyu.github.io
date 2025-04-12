const htmlmin = require("html-minifier-terser");
const CleanCSS = require("clean-css");
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

  eleventyConfig.addCollection("allPages", function (collectionApi) {
    return collectionApi.getAll();
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
    return new CleanCSS({}).minify(code).styles;
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
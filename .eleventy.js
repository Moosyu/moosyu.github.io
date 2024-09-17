const htmlmin = require("html-minifier-terser");
const CleanCSS = require("clean-css");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

const fuseOptions = {
  keys: ['type', 'score', 'name'],
  threshold: 0.6, // Adjust sensitivity as needed
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "public/assets": "assets",
    "public/fonts": "fonts",
    "public/favicon.ico": "favicon.ico"
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

  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/guides/**/*.md");
  });

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/blog/**/*.md");
  });

  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
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

	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",
		outputPath: "/feed.xml",
		collection: {
			name: "blog",
			limit: 0, // 0 = no limit
		},
		metadata: {
			language: "en",
			title: "moosyus really awesome blog",
			subtitle: "scitzo ramblings made by someone who failed english 3 times in a row",
			base: "https://moosyu.nekoweb.org/",
			author: {
				name: "moosyu",
				email: "moosyu@tuta.io",
			}
		}
	});

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
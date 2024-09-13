module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/*");
    eleventyConfig.addPassthroughCopy("src/js/*");
    eleventyConfig.addPassthroughCopy("public/fonts/*");
    eleventyConfig.addPassthroughCopy("public/assets/*");
    eleventyConfig.addPassthroughCopy("public/favicon.ico");
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
const { DateTime } = require("luxon");

module.exports = async function(eleventyConfig) {
  const { HtmlBasePlugin } = await import("@11ty/eleventy");
  eleventyConfig.addPlugin(HtmlBasePlugin);
  
  eleventyConfig.addPassthroughCopy({ "src/public": "/" });

  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByTag("post").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("MMMM dd, yyyy");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}

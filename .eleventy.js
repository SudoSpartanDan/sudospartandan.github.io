const { DateTime } = require("luxon");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.setLayoutsDirectory("_includes/layouts");
  eleventyConfig.setOutputDirectory("_site");
  eleventyConfig.addTemplateFormats("njk");

  eleventyConfig.addPassthroughCopy({ "src/public": "/" })


  eleventyConfig.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("MMMM dd, yyyy");
  });

  eleventyConfig.addGlobalData("site", {
    baseUrl: "https://sudospartandan.github.io"
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://sudospartandan.github.io",
    },
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "feed.xml",
    collection: {
			name: "post",
			limit: 10,
		},
    metadata: {
			language: "en",
			title: "Daniel Thompson - Blog",
			subtitle: "A blog of various topics related to leadership and IT.",
			base: "https://sudospartandan.github.io/",
			author: {
				name: "Daniel Thompson",
        email: ""
			}
		}
  });
}

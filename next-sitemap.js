require("dotenv").config();

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, "/ru"),
    await config.transform(config, "/en"),
  ],
};

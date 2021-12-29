require("dotenv").config();

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  exclude: ["/404", "/ua/404", "/ru/404", "/en/404"],
  additionalPaths: async (config) => [
    await config.transform(config, "/ru"),
    await config.transform(config, "/en"),
  ],
};

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://jupiter.cloud.planittesting.com/#/",
    viewportHeight: 960,
    viewportWidth: 1536,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    video:false
  },
});

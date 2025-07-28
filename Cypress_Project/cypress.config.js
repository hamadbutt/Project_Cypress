const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video:true,
    screenshotOnRunFailure:true,
    baseUrl:'http://localhost:3000/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

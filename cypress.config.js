const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.hungryroot.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'ie6pjb',
  video: false,
  screenshotOnRunFailure: true,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});



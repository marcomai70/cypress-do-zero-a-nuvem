
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '6vkr6w',
  video: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});




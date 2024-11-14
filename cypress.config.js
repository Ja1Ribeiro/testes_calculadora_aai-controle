const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://imobiliario.desenvolvimento.taya.com.br', // Define a URL base
    setupNodeEvents(on, config) {
      // configurações de eventos, se necessário
    },
  },
});

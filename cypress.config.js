const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h3k31z',
  e2e: {
    baseUrl: 'https://imobiliario.desenvolvimento.taya.com.br', // Define a URL base
    defaultCommandTimeout: 100000, // Aumenta o timeout para 10 segundos
    pageLoadTimeout: 60000,// Timeout para carregamento de páginas
    setupNodeEvents(on, config) {
      // configurações de eventos, se necessário
    },
  },
});

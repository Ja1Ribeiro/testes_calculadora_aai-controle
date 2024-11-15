Cypress.Commands.add('loginInit', (username, password) => {
  cy.visit('/');
  cy.get('#\\:r0\\:').type(username);
  cy.get('#\\:r1\\:').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('visitCalculator', (username, password) => {
  cy.loginInit(username, password);
  cy.get('.MuiList-root > :nth-child(2) > .MuiButtonBase-root').click();
});

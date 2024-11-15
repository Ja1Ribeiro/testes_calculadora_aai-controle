Cypress.Commands.add('loginInit', (username, password) => {
  cy.visit('/');
  cy.get('#\\:r0\\:')
    .type(username);
  cy.get('#\\:r1\\:')
    .type(password);
  cy.get('button[type="submit"]')
    .click();
});

Cypress.Commands.add('visitCalculator', (username, password) => {
  cy.loginInit(username, password);
  cy.get('.MuiList-root > :nth-child(2) > .MuiButtonBase-root')
    .click();
});

Cypress.Commands.add('fillFirstInformations', (birth, property_value, financing_value, term) => {
  cy.get('#\\:rn\\:')
    .type(birth);
  cy.get('#\\:ro\\:')
    .type(property_value);
  cy.get('#\\:rp\\:')
    .type(financing_value);
  cy.get('#\\:rs\\:')
    .type(term);
});

Cypress.Commands.add('readAndAccept', () => {
  cy.get('.PrivateSwitchBase-input')
    .click();
  cy.get('button[type="submit"]')
    .click();
});
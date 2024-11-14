Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="login"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
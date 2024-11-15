describe('Login Action', () => {
  
    it('Deve realizar login com credenciais válidas', () => {
      // Carrega as credenciais do arquivo JSON
      cy.fixture('credentials').then((credentials) => {
        cy.loginInit(credentials.validUser.username, credentials.validUser.password);
  
        // Confirma que o login foi bem-sucedido
        cy.url().should('include', '/parceiro');
      });
    });
  });
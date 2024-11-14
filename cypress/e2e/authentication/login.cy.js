describe('Login Action', () => {
    beforeEach(() => {
      // Visita a página de login antes de cada teste
      cy.visit('/');
    });
  
    it('Deve realizar login com credenciais válidas', () => {
      // Carrega as credenciais do arquivo JSON
      cy.fixture('credentials').then((credentials) => {
        cy.get('#\\:r0\\:').type(credentials.validUser.username);
        cy.get('#\\:r1\\:').type(credentials.validUser.password);
        cy.get('button[type="submit"]').click();
  
        // Confirma que o login foi bem-sucedido
        cy.url().should('include', '/parceiro');
      });
    });
  });
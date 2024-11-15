describe('Aquisição de imovel', () => {
    beforeEach(() => {
      cy.fixture('credentials').then((credentials) => {
        cy.visitCalculator(credentials.validUser.username, credentials.validUser.password);
      });
    });
  
    it('Deve realizar login com credenciais válidas', () => {
      cy.get('.css-x82pny > :nth-child(2)').click();
      cy.get('.MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click();
    });
  })
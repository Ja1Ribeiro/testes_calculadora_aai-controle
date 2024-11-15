describe('Aquisição de imovel', () => {
  beforeEach(() => {
    cy.fixture('credentials').then((credentials) => {
      cy.visitCalculator(credentials.validUser.username, credentials.validUser.password);
    });
  });

  it('Realiza a simulação de Aquisição de Imoveis Residenciais', () => {
   //Seleciona Aquisição de Imoveis e clica em Próxima etapa
    cy.get('.css-x82pny > :nth-child(1)').click(); 
    cy.get('.MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click();
   //Seleciona a opção Residencial e preenche os campos com as informações de acquisition vindas do JSON
    cy.get('.MuiFormGroup-root > :nth-child(1)').click();
    cy.fixture('credentials').then((credentials) => {
      const email = credentials.acquisition.email;
      cy.get('#\\:rn\\:').type(credentials.acquisition.birth);
      cy.get('#\\:ro\\:').type(credentials.acquisition.property_value);
      cy.get('#\\:rp\\:').type(credentials.acquisition.financing_value);
      cy.get('#\\:rs\\:').type(credentials.acquisition.term);
      //Clica para caucular 
      cy.get('button[type="submit"]').click();
      //Clica para conhecer todas as ofertas
      cy.get('button[type="button"]').contains('CONHECER TODAS AS OFERTAS').click();
      //Preenche os dados e finaliza 
      cy.get('#\\:r10\\:').type(credentials.acquisition.name);
      cy.get('#\\:r11\\:').type(credentials.acquisition.CPF);
      cy.get('#\\:r12\\:').type(credentials.acquisition.cellphone);
      cy.get('#\\:r13\\:').type(email);
      cy.get('#\\:r16\\:').type(credentials.acquisition.indication);
      cy.get('#\\:r14\\:').click();
      cy.get('#\\:r14\\:-option-0').click();
      cy.get('#\\:r14\\:-option-1').click();
      cy.get('#\\:r14\\:-option-2').click();
      cy.get('.PrivateSwitchBase-input').click();
      cy.get('button[type="submit"]').click();
    });

  });

})
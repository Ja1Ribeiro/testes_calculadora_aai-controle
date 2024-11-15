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
      cy.fillFirstInformations(credentials.acquisition.birth, credentials.acquisition.property_value, credentials.acquisition.financing_value, credentials.acquisition.term);

      //Clica para calcular 
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
      cy.readAndAccept();



      cy.get('.Toastify__toast-body') // Seleciona o corpo do toast
        .should('be.visible') // Verifica se o toast está visível
        .and('contain.text', 'consultor de crédito');

    });

  });
  it('Realiza a simulação de Emprestimo para PF de um Imovel comercial', () => {
    cy.get('.css-x82pny > :nth-child(2)').click();
    cy.get('.css-frij0f').contains('PF').click();
    cy.get('button[type="button"]').contains('PRÓXIMA ETAPA').click();

    cy.get('.MuiFormGroup-root > :nth-child(2)').click();
    cy.fixture('credentials').then((credentials) => {
      const email = credentials.loan.email;

      cy.fillFirstInformations(credentials.loan.birth, credentials.loan.property_value, credentials.loan.financing_value, credentials.loan.term);

      cy.get('button[type="submit"]').click();

      cy.get('button[type="button"]').contains('CONHECER TODAS AS OFERTAS').click();

      cy.get('#\\:r12\\:').type(credentials.loan.name);
      cy.get('#\\:r13\\:').type(credentials.loan.CPF);
      cy.get('#\\:r14\\:').type(credentials.loan.cellphone);
      cy.get('#\\:r15\\:').type(email);
      cy.get('#\\:r18\\:').type(credentials.loan.indication);
      cy.get('#\\:r16\\:').click();
      cy.get('#\\:r16\\:-option-0').click();
      cy.readAndAccept();

      cy.get('.Toastify__toast-body') // Seleciona o corpo do toast
        .should('be.visible') // Verifica se o toast está visível
        .and('contain.text', 'consultor de crédito');

    });
  });
  it('Realiza a simulação de Emprestimo para PF de um Imovel comercial', () => {
    cy.get('.css-x82pny > :nth-child(3)').click();
    cy.get('.css-frij0f').contains('PJ').click();
    cy.get('button[type="button"]').contains('PRÓXIMA ETAPA').click();

    cy.get('.MuiFormGroup-root > :nth-child(4)').click();
    cy.fixture('credentials').then((credentials) => {
      const email = credentials.consortium.email;

      cy.fillFirstInformations(credentials.consortium.birth, credentials.consortium.property_value, credentials.consortium.financing_value, credentials.consortium.term);

      cy.get('button[type="submit"]').click();

      cy.get('button[type="button"]').contains('CONHECER TODAS AS OFERTAS').click();

      cy.get('#\\:rv\\:').type(credentials.consortium.name);
      cy.get('#\\:r10\\:').type(credentials.consortium.CPF);
      cy.get('#\\:r11\\:').type(credentials.consortium.cellphone);
      cy.get('#\\:r12\\:').type(email);
      cy.get('#\\:r15\\:').type(credentials.consortium.indication);
      cy.get('#\\:r13\\:').click();
      cy.get('#\\:r13\\:-option-0').click();
      cy.readAndAccept();

      cy.get('.Toastify__toast-body') // Seleciona o corpo do toast
        .should('be.visible') // Verifica se o toast está visível
        .and('contain.text', 'consultor de crédito');

    });
  });
})
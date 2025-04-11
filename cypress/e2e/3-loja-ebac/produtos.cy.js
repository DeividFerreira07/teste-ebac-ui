///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

   beforeEach(() => {
    cy.visit('produtos')
   });

   it('Deve selecionar um produto da lista', () => {
    cy.get(' .product-block')//.first()
    .eq(7).click()

    cy.get('.product_title').should('exist')
   });

});
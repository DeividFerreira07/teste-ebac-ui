/// <reference types="cypress" />

describe('Funcionalidades: Detalhes da conta', () => {
   
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
        cy.login(login.usuario, login.senha)
        })
        cy.get('.woocommerce-form > .button').click()
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Deivid', 'Ferreira', 'DeividF')
        cy.get('.woocommerce-message').should('exist')
    });

});
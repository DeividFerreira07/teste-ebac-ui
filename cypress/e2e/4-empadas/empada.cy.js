///<reference types="cypress"/>

describe('Funcionalidade: entrar no site empadas', () =>{

    beforeEach(() => {
        cy.visit('https://empadinhas-tia-nininha.vercel.app')
    });

    it('Deve acessar o site das empadas', () => {
        cy.get('[href="#menu"]').click()
        cy.get('.img').click()
        //cy.get('#home > .content > .btn').click()
        cy.get(':nth-child(3) > .title').should('exist')
    })
})
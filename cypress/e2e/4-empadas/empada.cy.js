///<reference types="cypress"/>

describe('Funcionalidade: entrar no site empadas', () =>{
    it('Deve acessar o site das empadas', () => {
        cy.visit('https://empadinhas-tia-nininha.vercel.app')
        cy.get('[href="#menu"]').click()
        cy.get('.img').click()
        cy.get('#home > .content > .btn').click()
    })
})
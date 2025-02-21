///<reference types="cypress"/>

describe('Funcionalidade: calculo', () =>{
    it('Deve fazer calculos com sucesso', () => {
        cy.visit('https://calculadora-simples-vert.vercel.app')
        cy.get('#teclado > :nth-child(4)').click()
        cy.get('#teclado > :nth-child(9)').click()
        cy.get(':nth-child(11)').click()
        cy.get('.igual').click()
        cy.get('.igual').click()
        cy.get('#teclado > :nth-child(8)').click()
        cy.get('#teclado > :nth-child(7)').click()
        cy.get('#teclado > :nth-child(2)').click()
        cy.get(':nth-child(17)').click()
        cy.get('#teclado > :nth-child(2)').click()
        cy.get(':nth-child(12)').click()
        cy.get('#teclado > :nth-child(3)').click()
        cy.get('.igual').click()


    })
})
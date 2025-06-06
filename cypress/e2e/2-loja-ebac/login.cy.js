///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('deivid.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, deivid.teste (não é deivid.teste? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('deivid@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')

    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('deivid.teste@teste.com.br')
        cy.get('#password').type('teste@000')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail deivid.teste@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, deivid.teste (não é deivid.teste? Sair)')
        
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
      cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario , {log: false}) // esse {log: false} é para ocultar o login caso queira
        cy.get('#password').type(dados.senha , {log: false})  // esse {log: false} é para ocultar a senha caso queira
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, deivid.teste (não é deivid.teste? Sair)')
      })
        
    });

    it.only('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login('deivid.teste@teste.com.br', 'teste@123') 
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, deivid.teste (não é deivid.teste? Sair)')
    });

})
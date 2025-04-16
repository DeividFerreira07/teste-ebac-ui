///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

   beforeEach(() => {
    produtosPage.visitarUrl()
   });

   it('Deve selecionar um produto da lista', () => {
   produtosPage.buscarProdutoLista('Aether Gym Pant')
   cy.get('.product_title').should('exist')
   });

   it('Deve buscar um produto com sucesso', () => {
      let produto = 'Sparta Gym Tank'
      produtosPage.buscarProduto(produto)
      cy.get('.product_title').should('exist')
   });

   it('Deve visitar a página do produto', () => {
      produtosPage.visitarProduto('Aether Gym Pant')
      cy.get('.product_title').should('exist')
   });

   it('Deve adicionar o produto ao carrinho', () => {
      let qtd = 7
      produtosPage.buscarProduto('Josie Yoga Jacket')
      produtosPage.addProdutoCarrinho('M', 'Blue', qtd)
      cy.get('.product_title').should('exist')
   });

   it.only('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
      cy.fixture('produtos').then(dados=> {
         
         produtosPage.buscarProduto(dados[1].nomeProduto)
         produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
         cy.get('.product_title').should('exist')
      })
   });

});
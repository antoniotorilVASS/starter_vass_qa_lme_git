/// <reference types="cypress" /> 
// para que funcionen el lenguaje de Cypress

require('cypress-xpath') // Para poder usar Xpath

describe('Xpath ',() =>{

    it('Uso de Xpath ', () =>{
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title().should('eq','Radio Buttons | TestingQaRvn')
        cy.wait(1000)
        cy.get('.wsf-label').contains('PHP').click()
        cy.wait(2000)
        cy.get('.wsf-label').contains('PYTHON').click()
        
        
    })


}) //Dierre de describe
/// <reference types="cypress" /> 
// para que funcionen el lenguaje de Cypress

describe('Copy Selector ',() =>{

    it('Uso de copy selector ', () =>{
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title().should('eq','Radio Buttons | TestingQaRvn')
        cy.wait(1000)
        cy.get('#wsf-1-field-39').should('be.visible').type('Prueba')
        
        
    })


}) //Dierre de describe
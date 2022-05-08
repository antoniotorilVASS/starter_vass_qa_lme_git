/// <reference types="cypress" />
// para que funcionen el lenguaje de Cypress
describe('Mi primer reto',() =>{
    
    it('Click sencillo', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('#btnLogin').should('be.visible').click()
    })
    

}) //Cierre de describe
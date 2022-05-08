/// <reference types="cypress" />
// para que funcionen el lenguaje de Cypress
describe('Opciones de click',() =>{

    it('Click por coordenadas (x,y)', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('#btnLogin').should('be.visible').click()
        cy.wait(1500)
        cy.get('#MP_link').should("be.visible").click(50,5)
    })

}) //Dierre de describe

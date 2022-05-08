/// <reference types="cypress" />
// para que funcionen el lenguaje de Cypress
describe('Opciones de click',() =>{

    it('Click sencillo', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('#btnLogin').should('be.visible').click()
        cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click()
        cy.get("#menu_admin_Job").click({force: true})
    })


}) //Dierre de describe
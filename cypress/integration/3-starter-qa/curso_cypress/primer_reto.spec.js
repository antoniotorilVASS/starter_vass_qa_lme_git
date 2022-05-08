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
        cy.get('#menu_directory_viewDirectory > b').should('be.visible').click()
        cy.get('#searchDirectory_emp_name_empName').should('be.visible').type('Admin A')
        cy.wait(2000)
        cy.get('#searchBtn').should('be.visible').click()
        cy.get(2000)
        cy.get('#resetBtn').click()
    })
    

}) //Cierre de describe
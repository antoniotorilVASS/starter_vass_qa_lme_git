/// <reference types="cypress" /> 
// para que funcionen el lenguaje de Cypress
// librería xpath
require('cypress-xpath')
// librería tab
require('cypress-plugin-tab')
describe('Segundo Reto ',() =>{

    it('Probando la App ', () =>{
        cy.visit('https://computer-database.gatling.io/computers')
        cy.title().should('eq','Computers database')
        cy.wait(1000)
       
        //buscando
        cy.xpath("//input[@id='searchbox']").type('ACE')
        cy.get('#searchsubmit').should('be.visible').click()

        // Add
        cy.get('#add').should('be.visible').click()
        cy.get('input[id="name"]').should('be.visible').type('cypress')
        cy.get('input[name="introduced"]').should('be.visible').type('2022-05-07').tab().type('2025-05-07')
        //combo
        cy.get('#company').should('be.visible').select('IBM').should('have.value','13').wait(1500)
        cy.get('.primary').should('be.visible').click()
        // buscando elemento creado
        cy.xpath("//input[@id='searchbox']").type('cypress')
        cy.get('#searchsubmit').should('be.visible').click()
    })


}) //Dierre de describe
/// <reference types="cypress" />
// para que funcionen el lenguaje de Cypress
describe('Funciones para Type ',() =>{

    it('Type --> ENTER ', () =>{
        cy.visit('https://www.google.es/')
        cy.title().should('eq','Google')
        cy.wait(1500)
        cy.get('button[id="L2AGLb"').click()
        cy.get('input[name="q"').type('cypress io  {enter}')
        cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3').click()
    })


}) //Dierre de describe
/// <reference types="cypress" />
// para que funcionen el lenguaje de Cypress
describe('Introducción a los assert ',() =>{

    it('Demo de los Asserts', () =>{
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.title().should('eq','Contacto | TestingQaRvn')
        cy.wait(1000)

        cy.get("#et_pb_contact_name_0").should('be.visible').type('Juan') // Si usas el tabulador, no te va a poder validar el assert be.visible
        cy.wait(1000)
        cy.get('#et_pb_contact_email_0').should('be.visible').should('be.enabled').type('juan@gmail.com')
        
    })


}) //Dierre de describe
/// <reference types="cypress" />
// para que funcionen el lenguaje de Cypress
describe('Ejemplo de Type pageup, pageDown',() =>{
    // usando it.only solo ejecutará esos parámetros del describe
    it.only('Type primero', () =>{
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.title().should('eq','Contacto | TestingQaRvn')
        cy.wait(1000)
        cy.get("#et_pb_contact_name_0").type('{pageup}')
        cy.wait(2000)
    })


    it('Type pageDown', () =>{
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.title().should('eq','Contacto | TestingQaRvn')
        cy.wait(1000)
        cy.get("#et_pb_contact_name_0").type('{pagedown}')
        cy.wait(2000)
    })

    it('Type pageDown', () =>{
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.title().should('eq','Contacto | TestingQaRvn')
        cy.wait(1000)
        cy.get("#et_pb_contact_name_0").type('{pagedown}')
        cy.wait(2000)
    })
    it('Type pageDown', () =>{
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.title().should('eq','Contacto | TestingQaRvn')
        cy.wait(1000)
        cy.get("#et_pb_contact_name_0").type('{pagedown}')
        cy.wait(2000)
    })

    // Solo ejecuta el parámetro que lleva only en el describe
    it.only('Type último', () =>{
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.title().should('eq','Contacto | TestingQaRvn')
        cy.wait(1000)
        cy.get("#et_pb_contact_name_0").type('{pagedown}')
        cy.wait(2000)
    })

}) //Dierre de describe
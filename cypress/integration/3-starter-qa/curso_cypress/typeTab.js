/// <reference types="cypress" />

// para que funcionen el lenguaje de Cypress

require('cypress-plugin-tab') // para usar el plugin Tab

describe('Ejemplo función Tab',() =>{

    it('Type con Tab', () =>{
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.title().should('eq','Contacto | TestingQaRvn')
        cy.wait(1000)

        cy.get('#et_pb_contact_name_0').type('Rubén').tab().
        type('ruben.ruiz.pascual@gmail.com').tab().
        type('Curso Cypress Udemy')
    })


}) //Dierre de describe
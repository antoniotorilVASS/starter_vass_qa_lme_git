/// <reference types="cypress" /> 
// para que funcionen el lenguaje de Cypress

require('cypress-xpath') // Para poder usar Xpath

describe('Xpath ',() =>{

    it('Uso de Xpath ', () =>{
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.title().should('eq','Contacto | TestingQaRvn')
        cy.wait(1000)
        cy.xpath('//*[@id="et_pb_contact_name_0"]').should('be.visible').type('Rubénxu') // En inspeccionar, seleccionar parámetro, copiar xpatch
        cy.wait(2000)
        cy.xpath("//input[@id='et_pb_contact_email_0']").should("be.visible").type("juan@gmail.com") // usando la extensión xpath
        
        
    })


}) //Dierre de describe
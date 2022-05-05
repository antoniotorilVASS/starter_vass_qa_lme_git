/// <reference types="cypress" /> 
// para que funcionen el lenguaje de Cypress

describe('Sección 1 validando el titulo ',() =>{

    it('Test validar el titulo de la página ', () =>{
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.title().should('eq','Contacto | TestingQaRvn')

        cy.log("Ok la función title funcionó bien")
    })


}) //Dierre de describe
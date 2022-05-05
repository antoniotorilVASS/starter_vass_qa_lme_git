/// <reference types="cypress" /> 
// para que funcionen el lenguaje de Cypress

describe('Sección 1 validando el titulo ',() =>{

    it('Test validar el titulo de la página ', () =>{
        cy.visit('https://store-delivery-web-pre.sales-pre-eslm.tech.adeo.cloud/login')
        cy.title().should('eq','store-delivery-web')

        cy.log("Ok la función title funcionó bien")
    })


}) //Dierre de describe
// first_test_qa.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/// <reference types="cypress" />
describe('Test in WebSite', function(){
    it('Log in LM', () => {
        cy.visit('https://store-delivery-web-pre.sales-pre-eslm.tech.adeo.cloud/login')
        cy.get('input[id="userName"]').clear().type('30095945')
        cy.get('input[id="userPassword"]').clear().type('Fix2022!')
        cy.contains('Entrar').click()
        cy.get('.select').click()
    })

})
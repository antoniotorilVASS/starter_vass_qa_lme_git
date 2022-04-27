/// <reference types="cypress" />

describe('My First Test', function () {
    it('Makes an assertion', function (){
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/act')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})
/// <reference types="cypress" />

describe('My third Test', function () {
    beforeEach(() => {
        cy.visit('https://antoniotorilvass.github.io/starter_vass_qa_lme_git/')
    })
    it('Visits a website', function (){
        cy.contains('Shop').click()
    })
    it('Visits all products', function(){
        cy.contains('All Products')
    })
})
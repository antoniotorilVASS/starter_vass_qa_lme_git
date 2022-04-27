/// <reference types="cypress" />
    describe('My fourth test', function(){
        beforeEach(() => {
            cy.visit('https://antoniotorilvass.github.io/starter_vass_qa_lme_git/')
        })
        /*
        it('Add to cart', () => {
            cy.get('input:first').clear().type('3') //cy is not defined           
        })
        */
       it('Add to cart', () => {
            cy.get('input[id="inputQuantity"]').clear().type('3')
       })

    })
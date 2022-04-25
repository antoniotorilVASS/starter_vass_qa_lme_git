// first_test_qa.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/// <reference types="cypress" />

describe('Visits', () => {
   
    it('.should() - assert that <title> is correct', () => {
        cy.visit('https://antoniotorilvass.github.io/starter_vass_qa_lme_git/');
        cy.wait(200);
        cy.title().should('equal', 'Shop Item - Start Bootstrap Template');
    });
    it('.should() - assert that <title> is correct', () => {
        cy.visit({
            url: 'index.html',
            method: 'GET',
          })
        cy.wait(200);
        cy.title().should('equal', 'Shop Item - Start Bootstrap Template');
    }); 
});
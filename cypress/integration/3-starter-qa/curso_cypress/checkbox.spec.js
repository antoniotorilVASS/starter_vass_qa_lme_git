/// <reference types="cypress" /> 
require('cypress-xpath')
// para que funcionen el lenguaje de Cypress

describe('Checkbox ',() =>{

    it('check uno ', () =>{
        cy.visit('https://demo.anhtester.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(2000)
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        
    })

    it('check por selección ', () =>{
        cy.visit('https://demo.anhtester.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)
        cy.get('#isAgeSelected').check().should('be.checked') // usando check
        cy.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[4]/label/input').check() // usando check

        cy.get('#isAgeSelected').click()
        cy.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[4]/label/input').click()
        
    })


}) //Dierre de describe
/* eslint-disable no-undef */
Cypress.Server.defaults({
  delay: 500,
  force404: false,
  ignore: () => {
    return true
  },
})
//const visitURL = ['/', '/purchase', '/manual']
const visitURL = ['/']
describe('Test de accesibilidad', () => {
  afterEach(function stopTest() {
    if (this.currentTest.state === 'failed') {
      cy.log('Algo ha fallado')
      Cypress.runner.stop()
    } else {
      cy.log('Test realizado')
    }
  })
  visitURL.forEach((urlVisit) => {
    context(`Visitar ${urlVisit}`, () => {
      before(`Chequeo de accesibilidad en ${urlVisit}`, () => {
        cy.visit(urlVisit)
        cy.visit(urlVisit)
        cy.visit(urlVisit).wait(2500)
      })
      it('Chequeo links', () => {
        cy.get('a').each(($a) => {
          cy.get($a).should('have.attr', 'href').should('not.be.empty')
          cy.get($a).should('have.attr', 'title').should('not.be.empty')
          cy.get($a).should('have.attr', 'aria-label').should('not.be.empty')
        })
      })
      it('Chequeo imágenes', () => {
        cy.get('img').each(($img) => {
          cy.get($img).should('have.attr', 'src').should('not.be.empty')
          cy.get($img).should('have.attr', 'title').should('not.be.empty')
          cy.get($img).should('have.attr', 'aria-label').should('not.be.empty')
        })
      })
      it('Chequeo SVG', () => {
        cy.get('svg').each(($svg) => {
          cy.get($svg).should('have.attr', 'src').should('not.be.empty')
          cy.get($svg).should('have.attr', 'title').should('not.be.empty')
          cy.get($svg).should('have.attr', 'aria-label').should('not.be.empty')
        })
      })
    })
  })
})

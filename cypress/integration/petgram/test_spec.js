/* global describe, it, cy */
describe('Petgram', function () {
  it('is it working?', function () {
    cy.visit('/')
  })

  it('navigation', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('navigation from navbar to home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('not registered user can see register from when they go to favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})

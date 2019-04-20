/// <reference types="Cypress" />

describe('Routing', () => {
  it('Visits Main view', () => {
    cy.visit('/')
    cy.get('#view-home')
  })

  it('Visits Card view', () => {
    cy.visit('#/cards')
    cy.get('.cards-overview')
  })
})

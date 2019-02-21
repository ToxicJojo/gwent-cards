/// <reference types="Cypress" />

describe('Card Detail View', () => {
  before(() => {
    cy.visit('/cards')
  })

  it('shows card list', () => {
    // The amount of cards will change. So we only check for a minimum amount.
    const expectecMinimumCardCount = 100
    cy.get('.card-list').children().should('have.length.greaterThan', expectecMinimumCardCount)
  })

  it('clicking a card opens the detail view', () => {
    cy.get('.card-list').children().first().click()
    cy.location('pathname').should('equal', '/cards/112101')
  })
})

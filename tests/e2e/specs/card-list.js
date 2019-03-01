/// <reference types="Cypress" />

describe('Card Detail View', () => {
  before(() => {
    cy.visit('/cards')
  })

  it('shows card list', () => {
    // The amount of cards will change. So we only check for a minimum amount.
    const expectecMinimumCardCount = 400
    cy.get('.card-list').children().should('have.length.greaterThan', expectecMinimumCardCount)
  })

  it('clicking a card opens the detail view', () => {
    cy.get('.card-list').children().first().click()
    cy.location('pathname').should('equal', '/cards/112101')
    cy.go('back')
  })

  describe('Card Filter', () => {
    it('filters cards according to factions', () => {
      cy.get('.faction-select').get('input').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').get('input').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').get('input').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').get('input').eq(4).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').get('input').eq(5).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').get('input').eq(6).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').get('input').eq(0).click()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)
    })
  })
})

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
      cy.get('.faction-select').find('input').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('input').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('input').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('input').eq(4).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('input').eq(5).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('input').eq(6).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('input').eq(0).click()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)
    })

    it('filters cards according to color', () => {
      cy.get('.color-select').find('input').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.color-select').find('input').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 400)

      cy.get('.color-select').find('input').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.color-select').find('input').eq(0).click()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)
    })

    it('filtes cards according to card type', () => {
      cy.get('.card-type-select').find('input').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 400)

      cy.get('.card-type-select').find('input').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 150)

      cy.get('.card-type-select').find('input').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 150)

      cy.get('.card-type-select').find('input').eq(4).click()
      cy.get('.card-list').children().should('have.length.lessThan', 40)

      cy.get('.card-type-select').find('input').eq(0).click()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)
    })

    it('filters cards according to provision', () => {
      cy.get('.provision-multi-select').find('input').eq(0).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('input').eq(0).click()

      cy.get('.provision-multi-select').find('input').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('input').eq(1).click()

      cy.get('.provision-multi-select').find('input').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('input').eq(2).click()

      cy.get('.provision-multi-select').find('input').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('input').eq(3).click()

      cy.get('.provision-multi-select').find('input').eq(4).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('input').eq(4).click()

      cy.get('.provision-multi-select').find('input').eq(5).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('input').eq(5).click()

      cy.get('.provision-multi-select').find('input').eq(6).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('input').eq(6).click()

      cy.get('.provision-multi-select').find('input').eq(7).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('input').eq(7).click()
    })

    it('filters card according to rarity', () => {
      cy.get('.rarity-select').find('input').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.rarity-select').find('input').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.rarity-select').find('input').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 250)

      cy.get('.rarity-select').find('input').eq(4).click()
      cy.get('.card-list').children().should('have.length.lessThan', 250)

      cy.get('.rarity-select').find('input').eq(0).click()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)
    })
  })
})

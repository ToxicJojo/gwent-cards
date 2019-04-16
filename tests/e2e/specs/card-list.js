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
      cy.get('.search-field > button').click()

      cy.get('.faction-select').find('label').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('label').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('label').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('label').eq(4).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('label').eq(5).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('label').eq(6).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.faction-select').find('label').eq(0).click()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)

      cy.get('.search-field > button').click()
    })

    it('filters cards according to color', () => {
      cy.get('.search-field > button').click()

      cy.get('.color-select').find('label').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.color-select').find('label').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 400)

      cy.get('.color-select').find('label').eq(0).click()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)

      cy.get('.search-field > button').click()
    })

    it('filtes cards according to card type', () => {
      cy.get('.search-field > button').click()

      cy.get('.card-type-select').find('label').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 400)

      cy.get('.card-type-select').find('label').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 150)

      cy.get('.card-type-select').find('label').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 150)

      cy.get('.card-type-select').find('label').eq(4).click()
      cy.get('.card-list').children().should('have.length.lessThan', 40)

      cy.get('.card-type-select').find('label').eq(0).click()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)

      cy.get('.search-field > button').click()
    })

    it('filters cards according to provision', () => {
      cy.get('.search-field > button').click()

      cy.get('.provision-multi-select').find('label').eq(0).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('label').eq(0).click()

      cy.get('.provision-multi-select').find('label').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('label').eq(1).click()

      cy.get('.provision-multi-select').find('label').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('label').eq(2).click()

      cy.get('.provision-multi-select').find('label').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('label').eq(3).click()

      cy.get('.provision-multi-select').find('label').eq(4).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('label').eq(4).click()

      cy.get('.provision-multi-select').find('label').eq(5).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('label').eq(5).click()

      cy.get('.provision-multi-select').find('label').eq(6).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('label').eq(6).click()

      cy.get('.provision-multi-select').find('label').eq(7).click()
      cy.get('.card-list').children().should('have.length.lessThan', 100)
      cy.get('.provision-multi-select').find('label').eq(7).click()

      cy.get('.search-field > button').click()
    })

    it('filters card according to rarity', () => {
      cy.get('.search-field > button').click()

      cy.get('.rarity-select').find('label').eq(1).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.rarity-select').find('label').eq(2).click()
      cy.get('.card-list').children().should('have.length.lessThan', 200)

      cy.get('.rarity-select').find('label').eq(3).click()
      cy.get('.card-list').children().should('have.length.lessThan', 250)

      cy.get('.rarity-select').find('label').eq(4).click()
      cy.get('.card-list').children().should('have.length.lessThan', 250)

      cy.get('.rarity-select').find('label').eq(0).click()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)

      cy.get('.search-field > button').click()
    })

    it('filters card according to search terms', () => {
      cy.get('.search-field > input').clear().type('Ciri')
      cy.get('.card-list').children().should('have.length', 4)

      cy.get('.search-field > input').clear().type('sdfhsdjfh')
      cy.get('.card-list').children().should('have.length', 0)

      cy.get('.search-field > input').clear()
      cy.get('.card-list').children().should('have.length.greaterThan', 400)
    })
  })
})

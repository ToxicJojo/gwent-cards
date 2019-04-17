/// <reference types="Cypress" />

describe('Card Detail View', () => {
  before(() => {
    cy.visit('/cards/112102')
  })

  it('shows cards name', () => {
    cy.contains('Geralt: Igni')
  })

  it('shows card type', () => {
    cy.contains('Witcher')
  })

  it('show card ability', () => {
    cy.contains('Destroy the highest unit(s) on an enemy row with a total of 20 or more power.')
  })

  it('shows card flavor', () => {
    cy.contains('A twist of a witcher\'s fingers can light a lamp… or incinerate a foe.')
  })

  it('shows keyword explaination', () => {
    cy.contains('Trigger this ability when played.')
    cy.contains('This ability can only be used while on the melee row.')
  })

  it('can change language', () => {
    cy.get('select').select('de-DE')

    cy.contains('Hexer')

    cy.get('select').select('en-US')
  })
})

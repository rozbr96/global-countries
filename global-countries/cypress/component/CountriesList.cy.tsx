
import React from 'react'

import { CountriesList } from '@/components'

import { queryResult } from './countries'

describe('CountriesList.cy.tsx', () => {
  it('renders the countries table list', () => {
    cy.mount(<CountriesList />)
    cy.get('th[colspan="4"]').contains('Countries List')
    cy.get('thead > tr:last-child > th:nth-child(1)').contains('Country')
    cy.get('thead > tr:last-child > th:nth-child(2)').contains('Capital')
    cy.get('thead > tr:last-child > th:nth-child(3)').contains('Language')
    cy.get('thead > tr:last-child > th:nth-child(4)').contains('Flag')
  })

  it('renders the countries table list, empty', () => {
    cy.mount(<CountriesList />)
    cy.get('tbody').contains('No countries could be found!')
  })

  it('renders the countries table list with some countries in it', () => {
    cy.mount(<CountriesList queryResult={queryResult} />)
    cy.get('tbody').contains('Brazil')
    cy.get('tbody').contains('Portuguese')
    cy.get('tbody').contains('Brasília')
    cy.get('tbody').contains('Japan')
    cy.get('tbody').contains('Japanese')
    cy.get('tbody').contains('Tokyo')
  })
})

/// <reference types="cypress" />

const baseURI = require('../../../fixtures/data/base/baseURIs')
const registrationData = require('../../../fixtures/data/registration/registrationData')
const searchSelectors = require('../../../fixtures/selectors/galery/seachSelectors')
const searchData = require('../../../fixtures/data/gallery/searchData')
const seachSelectors = require('../../../fixtures/selectors/galery/seachSelectors')

describe('Find Gallery positive check', function () {
	beforeEach(function () {
		cy.login(registrationData.newUserStatic.email, registrationData.newUserStatic.password).then(
			() => {
				cy.visit(baseURI.env)
			}
		)
	})
	it('Find Gallery', () => {
		cy.get(searchSelectors.search).should('be.visible').type(searchData.full)
		cy.get(searchSelectors.filter).should('be.visible').click()
		cy.get(searchSelectors.first).should('be.visible')
		cy.get(searchSelectors.tittle).should('be.visible').contains(searchData.full).click()
		cy.get(seachSelectors.album).should('be.visible')
	}),
		it('Find Gallery, partial search', () => {
			cy.get(searchSelectors.search).should('be.visible').type(searchData.partial)
			cy.get(searchSelectors.filter).should('be.visible').click()
			cy.get(searchSelectors.first).should('be.visible')
			cy.get(seachSelectors.picture).should('be.visible')
			cy.get(searchSelectors.tittle).should('be.visible').contains(searchData.full)
		})
})

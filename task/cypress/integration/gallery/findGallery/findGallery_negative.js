/// <reference types="cypress" />

const baseURI = require('../../../fixtures/data/base/baseURIs')
const searchData = require('../../../fixtures/data/gallery/searchData')
const registrationData = require('../../../fixtures/data/registration/registrationData')
const seachSelectors = require('../../../fixtures/selectors/galery/seachSelectors')
const searchSelectors = require('../../../fixtures/selectors/galery/seachSelectors')
const { createRandomWord } = require('../../../support/helperScripts/randomWord')

describe('Find Gallery negative check', function () {
	beforeEach(function () {
		cy.login(registrationData.newUserStatic.email, registrationData.newUserStatic.password).then(
			() => {
				cy.visit(baseURI.env)
			}
		)
	})
	it('Find Gallery negative', () => {
		cy.get(searchSelectors.search)
			.should('be.visible')
			.type(createRandomWord(50), { timeout: 10000 })
		cy.get(searchSelectors.filter).should('be.visible').click()
		cy.get(searchSelectors.first).should('be.visible')
		cy.get(searchSelectors.second).should('not.exist')
		cy.get(seachSelectors.noResult).should('be.visible').should('have.text', searchData.noResult)
		cy.get(searchSelectors.search).clear()
		cy.get(seachSelectors.noResult).should('be.visible').should('have.text', searchData.noResult)
		cy.get(searchSelectors.search).type('{backspace}')
		cy.get(seachSelectors.noResult).should('be.visible').should('have.text', searchData.noResult)
	})
	it('Find Gallery blank', () => {
		cy.get(searchSelectors.search).should('be.visible')
		cy.get(searchSelectors.filter).should('be.visible').click()
		cy.get(searchSelectors.first).should('be.visible')
		cy.get(searchSelectors.last).should('be.visible')
	})
	it('Find Gallery OOB', () => {
		cy.get(searchSelectors.search)
			.should('be.visible')
			.type(createRandomWord(400), { timeout: 100000 })
		cy.get(searchSelectors.filter).should('be.visible').click()
		cy.get(searchSelectors.first).should('be.visible')
		cy.get(searchSelectors.second).should('not.exist')
		cy.get(seachSelectors.noResult).should('be.visible').should('have.text', searchData.noResult)
	})
})

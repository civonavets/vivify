/// <reference types="cypress" />

const baseURI = require('../../../cypress/fixtures/data/base/baseURIs')
const registrationData = require('../../fixtures/data/registration/registrationData')
const { logoutBtn } = require('../../fixtures/selectors/login/loginSelectors')

describe('Login component API check', function () {
	beforeEach(function () {})

	it('Login with API', () => {
		cy.login(registrationData.newUserStatic.email, registrationData.newUserStatic.password).then(
			() => {
				cy.visit(baseURI.env + 'create')
				cy.get(logoutBtn).should('be.visible')
			}
		)
	})
})

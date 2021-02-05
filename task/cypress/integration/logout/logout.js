/// <reference types="cypress" />

const baseURI = require('../../fixtures/data/base/baseURIs')
const loginSelectors = require('../../fixtures/selectors/login/loginSelectors')
const registrationData = require('../../fixtures/data/registration/registrationData')
const loginData = require('../../fixtures/data/login/loginData')

describe('Login component positive check', function () {
	beforeEach(function () {
		cy.visit(baseURI.env, { timeout: 10000 })
	})
	it('Checking if the user can login using correct credentials', () => {
		cy.get(loginSelectors.loginBtn).should('be.visible').click()
		cy.get(loginSelectors.tittle).should('be.visible').should('have.text', loginData.titleLanding)
		cy.get(loginSelectors.email).type(registrationData.newUserStatic.email)
		cy.get(loginSelectors.password).type(registrationData.newUserStatic.password)
		cy.get(loginSelectors.submitBtn).should('be.visible').click()
		cy.get(loginSelectors.tittle).should('be.visible').should('have.text', loginData.titleLogin)
		cy.get(loginSelectors.logoutBtn).should('be.visible').click()
		cy.clearLocalStorage(/token|user_id/).then(ls => {
			expect(ls.getItem('token')).to.be.null
			expect(ls.getItem('user_id')).to.be.null
		})
	})
})

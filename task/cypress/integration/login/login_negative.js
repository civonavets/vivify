/// <reference types="cypress" />

const baseURI = require('../../../cypress/fixtures/data/base/baseURIs')
const loginSelectors = require('../../fixtures/selectors/login/loginSelectors')
const registrationData = require('../../fixtures/data/registration/registrationData')
const loginData = require('../../fixtures/data/login/loginData')

describe('Login component negative check', function () {
	beforeEach(function () {
		cy.visit(baseURI.env, { timeout: 10000 })
	})
	it('Checking if the user can login using incorrect credentials', () => {
		cy.get(loginSelectors.loginBtn).should('be.visible').click()
		cy.get(loginSelectors.tittle).should('be.visible').should('have.text', loginData.titleLanding)
		cy.get(loginSelectors.email).type(registrationData.newUserDynamic.email)
		cy.get(loginSelectors.password).type(registrationData.newUserDynamic.password)
		cy.get(loginSelectors.submitBtn).should('be.visible').click()
		cy.get(loginSelectors.alert).should('be.visible').contains('Bad Credentials')
	})
	it('Checking if the user can login using OOB credentials', () => {
		cy.get(loginSelectors.loginBtn).should('be.visible').click()
		cy.get(loginSelectors.tittle).should('be.visible').should('have.text', loginData.titleLanding)
		cy.get(loginSelectors.email).type(registrationData.newUserRandom.email)
		cy.get(loginSelectors.password).type(registrationData.newUserRandom.password)
		cy.get(loginSelectors.submitBtn).should('be.visible').click()
		cy.get(loginSelectors.email).should($emailfield => {
			expect($emailfield.get(0).checkValidity()).to.equal(false)
			expect($emailfield.get(0).validationMessage).to.contain(
				loginData.emailInccorectValidationMessage
			)
		})
	})
	it('Checking if the user can login using blank credentials', () => {
		cy.get(loginSelectors.loginBtn).should('be.visible').click()
		cy.get(loginSelectors.tittle).should('be.visible').should('have.text', loginData.titleLanding)
		cy.get(loginSelectors.submitBtn).should('be.visible').click()
		cy.get(loginSelectors.email).should($emailfield => {
			expect($emailfield.get(0).checkValidity()).to.equal(false)
			expect($emailfield.get(0).validationMessage).to.contain(loginData.emailBlankValitationMessage)
		})
	})
})

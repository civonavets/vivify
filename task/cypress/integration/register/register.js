/// <reference types="cypress" />

/*
	I am well aware this is out of scope. 
	This is done so that would always be consistent as a data supplement that is required so the tests are runing properly. 
	Skip this is user is already inside DB, and not cleared after each test run
	Either this or manual inputs. XoXo
*/
const baseURI = require('../../../cypress/fixtures/data/base/baseURIs')
const registrationSelectors = require('../../fixtures/selectors/registration/registrationSelectors')
const registrationData = require('../../fixtures/data/registration/registrationData')

describe('Registration of a new user', () => {
	beforeEach(() => {
		cy.visit(baseURI.env, { timeout: 10000 })
	})
	it('Checking if the user can register using correct credentials', () => {
		cy.get(registrationSelectors.register, { timeout: 5000 }).should('be.visible').click()
		Object.keys(registrationSelectors.registrationFields).forEach(key => {
			let currentObject = cy.get(registrationSelectors.registrationFields[key])
			currentObject.should('be.visible')
			currentObject.type(registrationData.newUserStatic[key])
		})
		cy.get(registrationSelectors.tocCheckbox).should('be.visible').click()
		cy.get(registrationSelectors.submitBtn).should('be.visible').click()
		// If this part passes, it means DB is not cleared from last session
		cy.get(registrationSelectors.alert).should('be.visible')
	})
})

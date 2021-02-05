/// <reference types="cypress" />

const baseURI = require('../../../fixtures/data/base/baseURIs')
const registrationData = require('../../../fixtures/data/registration/registrationData')
const gallerySelectors = require('../../../fixtures/selectors/galery/gallerySelectors')
const galleryData = require('../../../fixtures/data/gallery/galleryData')

describe('Create Gallery positive check', function () {
	beforeEach(function () {
		cy.login(registrationData.newUserStatic.email, registrationData.newUserStatic.password).then(
			() => {
				cy.visit(baseURI.env + 'create')
			}
		)
	})
	it('Create Gallery', () => {
		cy.get(gallerySelectors.tittle).should('be.visible').should('have.text', 'Create Gallery')
		Object.keys(gallerySelectors.galleryFields).forEach(key => {
			let currentObject = cy.get(gallerySelectors.galleryFields[key])
			currentObject.should('be.visible')
			currentObject.type(galleryData.newGalleryStatic[key])
		})
		cy.get(gallerySelectors.submitBtn).should('be.visible').click()
		cy.get(gallerySelectors.tittle).should('be.visible').should('have.text', 'All Galleries')
	})
	it('Create gallery multiple pictures', () => {
		cy.get(gallerySelectors.tittle).should('be.visible').should('have.text', 'Create Gallery')
		Object.keys(gallerySelectors.galleryFields).forEach(key => {
			let currentObject = cy.get(gallerySelectors.galleryFields[key])
			currentObject.should('be.visible')
			currentObject.type(galleryData.newGalleryDynamic[key])
		})
		cy.get('[type=button]').contains('Add image').dblclick()
		cy.get('[type="url"]').eq(1).should('be.visible').type(galleryData.newGalleryDynamic.URIs)
		cy.get('[type="url"]').eq(2).should('be.visible').type(galleryData.newGalleryDynamic.URIs)
		cy.get(gallerySelectors.submitBtn).should('be.visible').click()
		cy.get(gallerySelectors.tittle).should('be.visible').should('have.text', 'All Galleries')
	})
	it('Create gallery multiple pictures, then cancel', () => {
		cy.get(gallerySelectors.tittle).should('be.visible').should('have.text', 'Create Gallery')
		Object.keys(gallerySelectors.galleryFields).forEach(key => {
			let currentObject = cy.get(gallerySelectors.galleryFields[key])
			currentObject.should('be.visible')
			currentObject.type(galleryData.newGalleryDynamic[key])
		})
		cy.get('[type=button]').contains('Add image').click()
		cy.get('[type="url"]').eq(1).should('be.visible').type(galleryData.newGalleryDynamic.URIs)
		cy.get(gallerySelectors.cancel).should('be.visible').click()
		cy.get(gallerySelectors.tittle).should('be.visible').should('have.text', 'All Galleries')
	})
})

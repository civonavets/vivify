/// <reference types="cypress" />

const baseURI = require('../../../fixtures/data/base/baseURIs')
const registrationData = require('../../../fixtures/data/registration/registrationData')
const gallerySelectors = require('../../../fixtures/selectors/galery/gallerySelectors')
const galleryData = require('../../../fixtures/data/gallery/galleryData')

describe('Create Gallery negative check', function () {
	beforeEach(function () {
		cy.login(registrationData.newUserStatic.email, registrationData.newUserStatic.password).then(
			() => {
				cy.visit(baseURI.env + 'create')
			}
		)
	})
	it('Create Gallery negative', () => {
		cy.get(gallerySelectors.tittle).should('be.visible').should('have.text', 'Create Gallery')
		Object.keys(gallerySelectors.galleryFields).forEach(key => {
			let currentObject = cy.get(gallerySelectors.galleryFields[key])
			currentObject.should('be.visible')
			currentObject.type(galleryData.newGalleryRandom[key])
		})
		cy.get(gallerySelectors.submitBtn).should('be.visible').click()
		cy.get(gallerySelectors.alert).should('be.visible').should('have.text', 'Wrong format of image')
	})
	it('Create Gallery blank', () => {
		cy.get(gallerySelectors.tittle).should('be.visible').should('have.text', 'Create Gallery')
		cy.get(gallerySelectors.submitBtn).should('be.visible').click()
		cy.get(gallerySelectors.galleryFields.tittle).should($tittle => {
			expect($tittle.get(0).checkValidity()).to.equal(false)
			expect($tittle.get(0).validationMessage).to.contain(galleryData.titleValidation)
		})
	})
	it('Create Gallery OOB', () => {
		cy.get(gallerySelectors.tittle).should('be.visible').should('have.text', 'Create Gallery')
		cy.get(gallerySelectors.galleryFields.tittle).type(galleryData.newGalleryRandom.tittle)
		cy.get(gallerySelectors.galleryFields.description).type(
			galleryData.newGalleryRandom.description
		)
		cy.get(gallerySelectors.galleryFields.URIs).type(
			'https://mostdefinetlynotanactualimagebutjustvalidurlwithrightextension.jpg'
		)
		cy.get(gallerySelectors.submitBtn).should('be.visible').click()
		cy.get(gallerySelectors.alert).should('be.visible').should('have.text', 'Not an image URL')
	})
})

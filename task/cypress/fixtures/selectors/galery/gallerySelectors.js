const { alert } = require('../login/loginSelectors')

module.exports = {
	tittle: '.title-style',

	galleryFields: {
		tittle: '#title',
		description: '#description',
		URIs: '[type="url"]'
	},
	addImage: 'form > :nth-child(3) > :nth-child(3)',
	submitBtn: 'form > :nth-child(4)',
	cancel: 'form > :nth-child(5)',
	alert: '.alert'
}

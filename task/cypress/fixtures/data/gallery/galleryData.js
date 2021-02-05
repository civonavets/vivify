const {
	randomSpecial,
	createRandomWord,
	pickImage
} = require('../../../support/helperScripts/randomWord')

module.exports = {
	newGalleryStatic: {
		tittle: 'Gallery',
		description: 'something',
		URIs: 'https://i.imgur.com/DKUR9Tk.jpg'
	},
	newGalleryDynamic: {
		tittle: createRandomWord(5),
		description: createRandomWord(7),
		URIs: pickImage()
	},
	newGalleryRandom: {
		tittle: randomSpecial(5),
		description: randomSpecial(7),
		URIs: `https://${createRandomWord(13)}`
	},
	titleValidation: 'Please fill out this field.'
}

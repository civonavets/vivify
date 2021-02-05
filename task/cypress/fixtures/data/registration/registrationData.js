const { randomSpecial, createRandomWord } = require('../../../support/helperScripts/randomWord')
const { createEmail } = require('../../../support/helperScripts/randomWord')

module.exports = {
	newUserStatic: {
		firstName: 'Ivan',
		lastName: 'Stevanovic',
		email: 'civonavets@gmail.com',
		password: 'somepass123',
		confirmPassword: 'somepass123'
	},
	newUserDynamic: {
		firstName: createRandomWord(5),
		lastName: createRandomWord(7),
		email: createEmail(),
		password: 'somepass123',
		confirmPassword: 'somepass123'
	},
	newUserRandom: {
		firstName: randomSpecial(5),
		lastName: randomSpecial(7),
		email: randomSpecial(13),
		password: randomSpecial(5),
		confirmPassword: randomSpecial(3)
	}
}

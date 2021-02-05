function createRandomWord(length) {
	var consonants = 'bcdfghjklmnpqrstvwxyz',
		vowels = 'aeiou',
		rand = function (limit) {
			return Math.floor(Math.random() * limit)
		},
		i,
		word = '',
		length = parseInt(length, 10),
		consonants = consonants.split(''),
		vowels = vowels.split('')
	for (i = 0; i < length / 2; i++) {
		let randConsonant = consonants[rand(consonants.length)],
			randVowel = vowels[rand(vowels.length)]
		word += i === 0 ? randConsonant.toUpperCase() : randConsonant
		word += i * 2 < length - 1 ? randVowel : ''
	}
	return word
}

function randomSpecial() {
	let length = 8,
		charset = "!#$%^&*()_+~`|}[]\\:;?><,./-='",
		retVal = ''
	for (let i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n))
	}
	return retVal
}
function createEmail() {
	let strValues = 'bcdfghjklmnpqrstvwxyz'
	let strEmail = ''
	let strTmp
	for (let i = 0; i < 10; i++) {
		strTmp = strValues.charAt(Math.round(strValues.length * Math.random()))
		strEmail = strEmail + strTmp
	}
	strTmp = ''
	strEmail = strEmail + '@'
	for (let j = 0; j < 8; j++) {
		strTmp = strValues.charAt(Math.round(strValues.length * Math.random()))
		strEmail = strEmail + strTmp
	}
	strEmail = strEmail + '.com'
	return strEmail
}
function pickImage() {
	let images = ['qGp7ZcU', 'tmodbJo', 'MedFOx9', 'lw9caXh', 'YqBbrWP', '4qxl7cs', 'mlYd9Rn']
	let randomPick = images[(Math.random() * images.length) | 0]
	let url = 'http://i.imgur.com/' + randomPick + '.jpg'
	return url
}
module.exports = {
	createEmail,
	createRandomWord,
	randomSpecial,
	pickImage
}

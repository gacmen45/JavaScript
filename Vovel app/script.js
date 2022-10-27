const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const error = document.querySelector('.error')
const vowelsText = document.querySelector('.vowels')
const consonantsText = document.querySelector('.consonants')
const word = document.querySelector('.word')

const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

let vowelsCount = 0
let consonantsCount = 0
const vovelsArray = []
const consonantsArray = []


const checkKey = e => {
	if (e.code === 'Enter'){
		counter()
	}
}

const counter = () => {
	input.value

	if (input.value == '') {
		error.innerText = 'Please, enter the word'
		clearText()
		return
	}
	if (/\d/.test(input.value)) {
		error.innerText = 'You must enter a word, not number'
		clearText()
		return
	}
	if(/\s/.test(input.value)){
		error.innerText = 'Please, enter only one word'
		clearText()
		return
	}

	for (const letter of input.value) {
		const numberOfLetters = vowels.includes(letter) ? vowelsCount++ : consonantsCount++
		const pushLetters = vowels.includes(letter) ? vovelsArray.push(letter) : consonantsArray.push(letter)
		error.innerText = ''
	}
	word.innerHTML = input.value
	vowelsText.innerText = `Numbers of vowels =  ${vowelsCount} || ${vovelsArray.join(',')}`
	consonantsText.innerText = `Numbers of consonants = ${consonantsCount} || ${consonantsArray.join(',')}`

	clear()
}


const clear = () => {
	input.value = ''
	vowelsCount = 0
	consonantsCount = 0
	vovelsArray.length = 0
	consonantsArray.length = 0
	
}
const clearText = () => {
	input.value = ''
	word.innerHTML = ''
	vowelsText.innerHTML = ''
	consonantsText.innerHTML = ''
}

input.addEventListener('keyup',checkKey)
btn.addEventListener('click', counter)